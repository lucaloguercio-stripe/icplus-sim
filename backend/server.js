const express = require("express");
const cors = require("cors");
const Stripe = require("stripe");
const fs = require("fs");
const path = require("path");

// Load config from parent directory
const configPath = path.join(__dirname, "../../config.json");
let config = {};
if (fs.existsSync(configPath)) {
  config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
}

const stripe = new Stripe(config.stripe_api_key || process.env.STRIPE_API_KEY);

const app = express();
app.use(cors({ origin: "*" })); // Allow requests from sandboxed iframe (null origin)
app.use(express.json());

// Activity report columns
const ACTIVITY_COLUMNS = [
  "balance_transaction_id",
  "balance_transaction_created_at",
  "balance_transaction_reporting_category",
  "balance_transaction_component",
  "event_type",
  "activity_at",
  "activity_interval_type",
  "activity_start_date",
  "activity_end_date",
  "currency",
  "amount",
  "customer_facing_currency",
  "customer_facing_amount",
  "balance_transaction_description",
  "fee_id",
  "customer_id",
  "customer_email",
  "customer_name",
  "customer_description",
  "shipping_address_line1",
  "shipping_address_line2",
  "shipping_address_city",
  "shipping_address_state",
  "shipping_address_postal_code",
  "shipping_address_country",
  "automatic_payout_id",
  "automatic_payout_effective_at",
  "charge_id",
  "payment_intent_id",
  "invoice_id",
  "subscription_id",
  "payment_method_type",
  "is_link",
  "card_brand",
  "card_funding",
  "card_country",
  "statement_descriptor",
  "payment_metadata[mirakl_commercial_order_id]",
  "payment_metadata[country]",
  "refund_id",
  "dispute_id",
  "transfer_id",
  "connected_account_id",
  "connected_account_name",
  "connected_account_country",
  "connected_account_direct_charge_id",
];

// ============= CSV Parsing =============
function parseCsv(csvText) {
  const lines = csvText.split("\n");
  if (lines.length < 2) return [];

  const headers = parseCsvLine(lines[0]);
  const records = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const values = parseCsvLine(line);
    const record = {};
    headers.forEach((h, idx) => {
      record[h] = values[idx] || "";
    });
    records.push(record);
  }
  return records;
}

function parseCsvLine(line) {
  const result = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}

function recordsToCsv(records) {
  if (records.length === 0) return "";
  const headers = Object.keys(records[0]);
  const lines = [headers.join(",")];
  for (const record of records) {
    const values = headers.map((h) => csvValueToString(record[h]));
    lines.push(values.join(","));
  }
  return lines.join("\n");
}

function csvValueToString(value) {
  if (value === undefined || value === null) return "";
  const str = String(value);
  if (str.includes(",") || str.includes('"') || str.includes("\n")) {
    return '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

// ============= IC+ Fee Simulation =============
// This matches the CLI's simulation logic
function simulateIcPlusFees(records) {
  console.log("Simulating IC+ fee breakdown...");

  // Pass 1: Transform payments_fee records
  const transformedRecords = [];

  for (const record of records) {
    if (record.balance_transaction_component === "payments_fee") {
      const originalAmount = parseFloat(record.amount) || 0;
      const absAmount = Math.abs(originalAmount);

      // Generate random number of charge_authorized and charge_captured lines
      const numChargeAuthorized = Math.floor(Math.random() * 3) + 1;
      const numChargeCaptured = Math.floor(Math.random() * 3) + 1;
      const totalLines = 4 + numChargeAuthorized + numChargeCaptured;

      // Generate random percentages that sum to 100
      const percentages = [];
      let sum = 0;
      for (let i = 0; i < totalLines - 1; i++) {
        const randomPct = Math.random() * 20 + 5;
        percentages.push(randomPct);
        sum += randomPct;
      }
      percentages.push(100 - sum);

      // Calculate amounts based on percentages
      const amounts = percentages.map(
        (pct) => -Math.round(absAmount * (pct / 100) * 100) / 100,
      );
      // Adjust last amount to ensure total matches
      const calculatedSum = amounts.slice(0, -1).reduce((a, b) => a + b, 0);
      amounts[amounts.length - 1] =
        Math.round((-absAmount - calculatedSum) * 100) / 100;

      let index = 0;

      // Add main fee breakdown lines
      transformedRecords.push({
        ...record,
        balance_transaction_reporting_category: "fee",
        balance_transaction_component: "per_sale_fee",
        amount: amounts[index++].toString(),
      });
      transformedRecords.push({
        ...record,
        balance_transaction_reporting_category: "network_cost",
        balance_transaction_component: "card_scheme",
        amount: amounts[index++].toString(),
      });
      transformedRecords.push({
        ...record,
        balance_transaction_reporting_category: "network_cost",
        balance_transaction_component: "interchange",
        amount: amounts[index++].toString(),
      });
      transformedRecords.push({
        ...record,
        balance_transaction_reporting_category: "fee",
        balance_transaction_component: "volume_fee",
        amount: amounts[index++].toString(),
      });

      // Add charge_authorized lines
      for (let i = 0; i < numChargeAuthorized; i++) {
        transformedRecords.push({
          ...record,
          balance_transaction_reporting_category: "network_cost",
          balance_transaction_component: "card_scheme",
          event_type: "charge_authorized",
          amount: amounts[index++].toString(),
        });
      }
      // Add charge_captured lines
      for (let i = 0; i < numChargeCaptured; i++) {
        transformedRecords.push({
          ...record,
          balance_transaction_reporting_category: "network_cost",
          balance_transaction_component: "card_scheme",
          event_type: "charge_captured",
          amount: amounts[index++].toString(),
        });
      }
    } else {
      transformedRecords.push(record);
    }
  }

  // Build lookup map: payment_intent_id -> volume_fee amount
  const volumeFeeLookup = {};
  for (const record of transformedRecords) {
    if (
      record.balance_transaction_reporting_category === "fee" &&
      record.balance_transaction_component === "volume_fee" &&
      record.payment_intent_id
    ) {
      if (!volumeFeeLookup[record.payment_intent_id]) {
        volumeFeeLookup[record.payment_intent_id] =
          parseFloat(record.amount) || 0;
      }
    }
  }

  // Pass 2: Handle refunds - add fee reversal lines
  const finalRecords = [];
  for (const record of transformedRecords) {
    finalRecords.push(record);

    if (record.balance_transaction_reporting_category === "refund") {
      const lookupAmount = volumeFeeLookup[record.payment_intent_id] || 0;
      const refundAmount1 = Math.round(Math.abs(lookupAmount) * 100) / 100;
      const refundAmount2 = Math.round(refundAmount1 * 0.05 * 100) / 100;

      finalRecords.push({
        ...record,
        balance_transaction_reporting_category: "fee",
        balance_transaction_component: "volume_fee",
        event_type: "refund",
        amount: refundAmount1.toString(),
      });
      finalRecords.push({
        ...record,
        balance_transaction_reporting_category: "network_cost",
        balance_transaction_component: "card_scheme",
        event_type: "refund",
        amount: (-refundAmount2).toString(),
      });
    }
  }

  console.log(
    `Fee simulation: ${records.length} -> ${finalRecords.length} records`,
  );
  return finalRecords;
}

// ============= Report Generation =============
async function generateReport(startTs, endTs, accountId) {
  console.log(`Creating report for ${startTs} to ${endTs}`);

  // Create report run using API key (API context, not dashboard)
  const reportRun = await stripe.reporting.reportRuns.create(
    {
      report_type: "activity.itemized.3",
      parameters: {
        columns: ACTIVITY_COLUMNS,
        interval_start: startTs,
        interval_end: endTs,
      },
    },
    accountId ? { stripeAccount: accountId } : undefined,
  );

  console.log(`Report run created: ${reportRun.id}`);

  // Poll for completion
  let currentRun = reportRun;
  while (currentRun.status === "pending") {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    currentRun = await stripe.reporting.reportRuns.retrieve(
      reportRun.id,
      {},
      accountId ? { stripeAccount: accountId } : undefined,
    );
    console.log(`Report status: ${currentRun.status}`);
  }

  if (currentRun.status !== "succeeded") {
    throw new Error(`Report failed: ${currentRun.status}`);
  }

  // Get the file
  const fileId =
    typeof currentRun.result === "string"
      ? currentRun.result
      : currentRun.result?.id;

  if (!fileId) {
    throw new Error("No result file ID");
  }

  console.log(`Downloading file: ${fileId}`);

  const file = await stripe.files.retrieve(
    fileId,
    {},
    accountId ? { stripeAccount: accountId } : undefined,
  );

  if (!file.url) {
    throw new Error("No file URL");
  }

  // Download CSV with authentication
  // The file URL requires Bearer token authentication
  const apiKey = config.stripe_api_key || process.env.STRIPE_API_KEY;
  const headers = {
    Authorization: `Bearer ${apiKey}`,
  };

  // Add Stripe-Account header if downloading for a connected account
  if (accountId) {
    headers["Stripe-Account"] = accountId;
  }

  const response = await fetch(file.url, { headers });
  if (!response.ok) {
    throw new Error(`Failed to download: ${response.status}`);
  }

  return await response.text();
}

// Store last generated report for download
let lastGeneratedReport = {
  csv: null,
  timestamp: null,
  filename: null,
};

// ============= API Endpoints =============

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", hasApiKey: !!config.stripe_api_key });
});

// Download the last generated report as a file
app.get("/download", (req, res) => {
  if (!lastGeneratedReport.csv) {
    return res
      .status(404)
      .json({ error: "No report available. Generate one first." });
  }

  res.setHeader("Content-Type", "text/csv");
  res.setHeader(
    "Content-Disposition",
    `attachment; filename="${lastGeneratedReport.filename}"`,
  );
  res.send(lastGeneratedReport.csv);
});

// Generate report with IC+ simulation
app.post("/generate-report", async (req, res) => {
  try {
    const { startTs, endTs, accountId } = req.body;

    if (!startTs || !endTs) {
      return res.status(400).json({ error: "startTs and endTs required" });
    }

    console.log(`Generating report: ${startTs} to ${endTs}`);

    // Generate report using API key
    const csvData = await generateReport(startTs, endTs, accountId);

    // Apply IC+ simulation
    const records = parseCsv(csvData);

    // Debug: Log sample of original records
    console.log(`Parsed ${records.length} records from CSV`);
    if (records.length > 0) {
      console.log("Sample record keys:", Object.keys(records[0]));
      const feeRecords = records.filter(
        (r) => r.balance_transaction_component === "payments_fee",
      );
      console.log(
        `Found ${feeRecords.length} payments_fee records to transform`,
      );
    }

    const simulatedRecords = simulateIcPlusFees(records);
    const outputCsv = recordsToCsv(simulatedRecords);

    console.log(
      `Simulation complete: ${records.length} -> ${simulatedRecords.length} rows`,
    );

    // Store for download endpoint
    const startDate = new Date(startTs * 1000).toISOString().split("T")[0];
    const endDate = new Date(endTs * 1000).toISOString().split("T")[0];
    lastGeneratedReport = {
      csv: outputCsv,
      timestamp: Date.now(),
      filename: `icplus_activity_${startDate}_to_${endDate}.csv`,
    };

    res.json({
      success: true,
      csv: outputCsv,
      originalRows: records.length,
      simulatedRows: simulatedRecords.length,
      downloadUrl: `${req.protocol}://${req.get("host")}/download`,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 4243;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
  console.log(`API key configured: ${!!config.stripe_api_key}`);
});
