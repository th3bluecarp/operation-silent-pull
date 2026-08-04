# Incident Investigation Artifacts: Executive Report Rubric

## Scenario-specific required conclusions

Confirmed chain: public web request -> server-side export abuse -> bootstrap/stage payload -> persistence and outbound exfiltration. Use the nginx, syslog, auth, process, and exfil capture timestamps to order events. Scanner/IDS hits and ordinary DNS are false positives unless they overlap the chain. The database log establishes accessed records, not successful theft by itself.

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
