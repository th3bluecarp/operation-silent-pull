# Operation Silent Pull — Golden Answer Key

Initial access is abuse of the public API/export path on `api-prod-01`. Nginx and application records identify the triggering request and connect it to server-side export behavior. The vulnerable export logic permits attacker-controlled retrieval or command/file handling, which leads to `bootstrap.sh`, the decoded stage-two payload, and the recovered shell artifacts.

Host process, bash, auth, sudoers, cron, and syslog evidence establish execution and persistence. Network/DNS and the shell capture identify the outbound control/exfiltration path. The archive manifest and database query log establish staging and records accessed, but database access is not automatically proof that all queried rows were successfully transmitted; use outbound byte/transfer evidence for that conclusion.

Routine security-scanner requests, generic IDS signatures, normal export jobs, and unrelated authentication failures are false signals unless they share the request, process, or destination chain. Deleted-file listings and base64 content are corroboration, not standalone execution proof.

Containment: remove the public exploit path, isolate/rebuild `api-prod-01`, terminate malicious processes and cron, rotate service/database credentials, block actor infrastructure, review exported objects and database queries, validate neighboring API workers, and add strict URL/path allowlists, command isolation, least privilege, and egress controls.
