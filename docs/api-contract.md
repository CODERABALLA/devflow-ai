# DevFlow AI API Contract (v0.1)

Base URL: `/api/v1`

## Health
GET /health
→ 200 {"status": "ok", "version": "0.1.0"}

## Runs
GET /runs
→ 200 [RunSummary]

GET /runs/{run_id}
→ 200 RunDetail

## Incidents
GET /incidents?status=open&severity=high
→ 200 [Incident]

GET /incidents/{incident_id}
→ 200 IncidentDetail

## Ingestion
POST /ingest/csv
Content-Type: multipart/form-data
Body: file=@data.csv; source_name=string
→ 201 {"run_id": "run_abc123", "status": "queued"}

## Remediation
POST /remediation/{incident_id}/approve
Body: {"action": "retry" | "quarantine" | "fallback_parser"}
→ 200 {"incident_id": "...", "action": "retry", "status": "accepted"}