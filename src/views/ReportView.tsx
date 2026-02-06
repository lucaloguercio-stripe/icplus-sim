import {
  Box,
  Button,
  ContextView,
  Divider,
  Inline,
  Link,
  TextField,
} from "@stripe/ui-extension-sdk/ui";
import type { ExtensionContextValue } from "@stripe/ui-extension-sdk/context";
import { useState, useCallback } from "react";

const BACKEND_URL = "http://localhost:4243";

const ReportView = (_props: ExtensionContextValue) => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const getDefaultEndDate = () => {
    const d = new Date();
    d.setDate(d.getDate() - 2);
    return d.toISOString().split("T")[0];
  };

  const getDefaultStartDate = () => {
    const d = new Date();
    d.setDate(d.getDate() - 32);
    return d.toISOString().split("T")[0];
  };

  const generateReport = useCallback(async () => {
    setLoading(true);
    setError(null);
    setDownloadUrl(null);

    try {
      const start = startDate || getDefaultStartDate();
      const end = endDate || getDefaultEndDate();
      const startTs = Math.floor(new Date(start + "T00:00:00Z").getTime() / 1000);
      const endTs = Math.floor(new Date(end + "T00:00:00Z").getTime() / 1000);

      setStatus("Generating report via backend (see terminal for report id & status)...");

      const response = await fetch(`${BACKEND_URL}/generate-report`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ startTs, endTs }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        const errMsg = errData.error || `Backend error: ${response.status}`;
        if (errData.code === "API_KEY_MISSING" || errMsg.includes("API key")) {
          setError(
            "Backend needs an API key. Run 'stripe login' or set stripe_api_key in config.json (see README)."
          );
        } else {
          setError(errMsg);
        }
        setStatus("");
        return;
      }

      const result = await response.json();
      if (!result.success || !result.downloadUrl) {
        setError("Backend returned no data");
        setStatus("");
        return;
      }

      setDownloadUrl(result.downloadUrl);
      setStatus(
        `Done! ${result.originalRows} → ${result.simulatedRows} rows. Click to download.`
      );
    } catch (err) {
      console.error("Error:", err);
      const message = err instanceof Error ? err.message : String(err);
      if (message.includes("fetch") || message.includes("Failed to fetch")) {
        setError("Cannot reach backend. Start it with: npm run start:backend (or npm start)");
      } else {
        setError(message);
      }
      setStatus("");
    } finally {
      setLoading(false);
    }
  }, [startDate, endDate]);

  return (
    <ContextView
      title="IC+ Fee Simulator"
      description="Generate activity reports with simulated IC+ fee breakdowns"
    >
      <Box css={{ stack: "y", gap: "large", padding: "large" }}>
        <Box css={{ stack: "y", gap: "medium" }}>
          <Box css={{ font: "heading" }}>Date Range</Box>
          <Inline css={{ gap: "medium" }}>
            <TextField
              label="Start Date (YYYY-MM-DD)"
              value={startDate}
              onChange={(e: { target: { value: string } }) => setStartDate(e.target.value)}
              placeholder={getDefaultStartDate()}
            />
            <TextField
              label="End Date (YYYY-MM-DD)"
              value={endDate}
              onChange={(e: { target: { value: string } }) => setEndDate(e.target.value)}
              placeholder={getDefaultEndDate()}
            />
          </Inline>
          <Box css={{ font: "caption", color: "secondary" }}>
            Leave empty to use last 30 days (ending 2 days ago for data availability)
          </Box>
        </Box>

        <Divider />

        <Box css={{ stack: "y", gap: "medium" }}>
          <Button
            type="primary"
            onPress={generateReport}
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Report"}
          </Button>

          {status && (
            <Box
              css={{
                padding: "medium",
                borderRadius: "medium",
              }}
            >
              <Box css={{ font: "caption" }}>{status}</Box>
            </Box>
          )}

          {error && (
            <Box
              css={{
                padding: "medium",
                borderRadius: "medium",
              }}
            >
              <Box css={{ font: "caption", color: "critical" }}>
                Error: {error}
              </Box>
            </Box>
          )}

          {downloadUrl && (
            <Box css={{ stack: "y", gap: "small" }}>
              <Link href={downloadUrl} target="_blank">
                <Button type="secondary">Download CSV with IC+ Simulation</Button>
              </Link>
              <Box css={{ font: "caption", color: "secondary" }}>
                IC+ fee breakdown applied — click to download
              </Box>
            </Box>
          )}
        </Box>

        <Divider />

        <Box css={{ stack: "y", gap: "small" }}>
          <Box css={{ font: "caption", fontWeight: "bold" }}>What this does:</Box>
          <Box css={{ font: "caption", color: "secondary" }}>
            • Backend creates the report (report id and status in terminal)
          </Box>
          <Box css={{ font: "caption", color: "secondary" }}>
            • Downloads activity.itemized.3 from Stripe, runs IC+ simulation
          </Box>
          <Box css={{ font: "caption", color: "secondary" }}>
            • Transforms payments_fee into detailed IC+ components; adds refund reversal lines
          </Box>
        </Box>
      </Box>
    </ContextView>
  );
};

export default ReportView;
