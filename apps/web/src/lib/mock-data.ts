export type Run = {
  run_id: string;
  source: string;
  status: "queued" | "running" | "failed" | "success";
  rows_ingested: number;
  rows_rejected: number;
  started_at: string;
  completed_at: string | null;
};

export type Incident = {
  incident_id: string;
  run_id: string;
  type: "schema_drift" | "null_spike" | "value_anomaly" | "api_failure";
  severity: "low" | "medium" | "high" | "critical";
  message: string;
  detected_at: string;
  status: "open" | "approved" | "resolved";
};

export const mockRuns: Run[] = [
  {
    run_id: "run_001",
    source: "open-meteo",
    status: "success",
    rows_ingested: 1000,
    rows_rejected: 0,
    started_at: "2026-10-15T21:00:00Z",
    completed_at: "2026-10-15T21:02:00Z",
  },
  {
    run_id: "run_002",
    source: "coingecko",
    status: "failed",
    rows_ingested: 480,
    rows_rejected: 20,
    started_at: "2026-10-15T22:00:00Z",
    completed_at: "2026-10-15T22:01:30Z",
  },
  {
    run_id: "run_003",
    source: "csv_upload",
    status: "running",
    rows_ingested: 0,
    rows_rejected: 0,
    started_at: "2026-10-16T09:00:00Z",
    completed_at: null,
  },
];

export const mockIncidents: Incident[] = [
  {
    incident_id: "inc_001",
    run_id: "run_002",
    type: "schema_drift",
    severity: "high",
    message: "Required column 'price_usd' is missing in incoming payload",
    detected_at: "2026-10-15T22:00:45Z",
    status: "open",
  },
  {
    incident_id: "inc_002",
    run_id: "run_002",
    type: "null_spike",
    severity: "medium",
    message: "24% of rows have null 'volume_24h'",
    detected_at: "2026-10-15T22:00:52Z",
    status: "open",
  },
];