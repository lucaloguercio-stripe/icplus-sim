/**
 * IC+ Fee Simulation Logic
 * Transforms payments_fee records into detailed IC+ fee components.
 */

export interface ActivityRecord {
  balance_transaction_id: string;
  balance_transaction_created_at: string;
  balance_transaction_reporting_category: string;
  balance_transaction_component: string;
  balance_transaction_regulatory_tag?: string;
  activity_at: string;
  currency: string;
  amount: string;
  charge_id: string;
  payment_intent_id?: string;
  refund_id: string;
  dispute_id: string;
  fee_id: string;
  event_type?: string;
  [key: string]: string | undefined;
}

/**
 * Simulate IC+ fee breakdown by transforming payments_fee records into detailed components.
 */
export function simulateIcPlusFees(records: ActivityRecord[]): ActivityRecord[] {
  // Pass 1: Transform payments_fee records
  const transformedRecords: ActivityRecord[] = [];

  for (const record of records) {
    if (record.balance_transaction_component === "payments_fee") {
      const originalAmount = parseFloat(record.amount) || 0;
      const absAmount = Math.abs(originalAmount);

      // Random number of lines for variable types (1-3 each)
      const numChargeAuthorized = Math.floor(Math.random() * 3) + 1;
      const numChargeCaptured = Math.floor(Math.random() * 3) + 1;
      const totalLines = 4 + numChargeAuthorized + numChargeCaptured;

      // Generate random percentages
      const percentages: number[] = [];
      let sum = 0;
      for (let i = 0; i < totalLines - 1; i++) {
        const randomPct = Math.random() * 20 + 5; // 5-25%
        percentages.push(randomPct);
        sum += randomPct;
      }
      percentages.push(100 - sum);

      // Calculate amounts (negative for fees)
      const amounts = percentages.map(
        (pct) => -Math.round(absAmount * (pct / 100) * 100) / 100
      );
      const calculatedSum = amounts.slice(0, -1).reduce((a, b) => a + b, 0);
      amounts[amounts.length - 1] =
        Math.round((-absAmount - calculatedSum) * 100) / 100;

      let index = 0;

      // Fixed fee lines
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

      // Variable card_scheme lines with charge_authorized
      for (let i = 0; i < numChargeAuthorized; i++) {
        transformedRecords.push({
          ...record,
          balance_transaction_reporting_category: "network_cost",
          balance_transaction_component: "card_scheme",
          event_type: "charge_authorized",
          amount: amounts[index++].toString(),
        });
      }

      // Variable card_scheme lines with charge_captured
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

  // Build lookup: payment_intent_id -> volume_fee amount
  const volumeFeeLookup: Record<string, number> = {};
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

  // Pass 2: Handle refunds
  const finalRecords: ActivityRecord[] = [];
  for (const record of transformedRecords) {
    finalRecords.push(record);

    if (record.balance_transaction_reporting_category === "refund") {
      const lookupAmount = record.payment_intent_id
        ? volumeFeeLookup[record.payment_intent_id] || 0
        : 0;
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

  return finalRecords;
}

/**
 * Convert records to CSV string
 */
export function recordsToCsv(records: ActivityRecord[]): string {
  if (records.length === 0) return "";

  const headers = Object.keys(records[0]);

  const escapeValue = (val: string | undefined): string => {
    if (val === null || val === undefined) return "";
    const str = String(val);
    if (str.includes(",") || str.includes('"') || str.includes("\n")) {
      return '"' + str.replace(/"/g, '""') + '"';
    }
    return str;
  };

  const lines = [headers.join(",")];
  for (const record of records) {
    lines.push(headers.map((h) => escapeValue(record[h])).join(","));
  }

  return lines.join("\n");
}

/**
 * Parse CSV string to records
 */
export function parseCsv(csvData: string): ActivityRecord[] {
  const lines = csvData.split("\n").filter((l) => l.trim());
  if (lines.length < 2) return [];

  const parseLine = (line: string): string[] => {
    const result: string[] = [];
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
  };

  const headers = parseLine(lines[0]);
  const records: ActivityRecord[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseLine(lines[i]);
    const record: ActivityRecord = {} as ActivityRecord;
    headers.forEach((h, idx) => {
      record[h] = values[idx] || "";
    });
    records.push(record);
  }

  return records;
}
