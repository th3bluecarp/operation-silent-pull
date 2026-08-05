# Incident Investigation Artifacts: Executive Report Rubric

## Scenario-specific required conclusions

Initial access is abuse of the public API/export path on `api-prod-01`. Nginx and application records identify the triggering request and connect it to server-side export behavior. The vulnerable export logic permits attacker-controlled retrieval or command/file handling, which leads to `bootstrap.sh`, the decoded stage-two payload, and the recovered shell artifacts.

Host process, bash, auth, sudoers, cron, and syslog evidence establish execution and persistence. Network/DNS and the shell capture identify the outbound control/exfiltration path. The archive manifest and database query log establish staging and records accessed, but database access is not automatically proof that all queried rows were successfully transmitted; use outbound byte/transfer evidence for that conclusion.

Routine security-scanner requests, generic IDS signatures, normal export jobs, and unrelated authentication failures are false signals unless they share the request, process, or destination chain. Deleted-file listings and base64 content are corroboration, not standalone execution proof.

Containment: remove the public exploit path, isolate/rebuild `api-prod-01`, terminate malicious processes and cron, rotate service/database credentials, block actor infrastructure, review exported objects and database queries, validate neighboring API workers, and add strict URL/path allowlists, command isolation, least privilege, and egress controls.

## Scoring

- 30% accurate, normalized timeline with artifact citations
- 25% complete entry, pivot, persistence, privilege, and impact analysis
- 20% correct clustering of related, unrelated, benign, and false-signal activity
- 15% disciplined confidence labels and treatment of telemetry gaps
- 10% executive-quality remediation, ownership, and sequencing

## Automatic deductions

- Unsupported attribution or invented observables
- Collapsing every suspicious event into a single incident
- Treating attempted access as successful access
- Treating access as exfiltration without transfer or receipt evidence
- Treating missing logs as proof that activity did not occur
- Omitting material contradictory or benign evidence

Every high-impact conclusion should cite two independent artifacts where available and preserve exact identities, hosts, IP addresses, object names, and timestamps.
