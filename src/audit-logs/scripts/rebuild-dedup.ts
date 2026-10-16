// Rebuilds src/audit-logs/data/shared/entries.json, fields-pool.json, and
// src/audit-logs/data/version-index.json from per-version JSON already on disk.
// It does not fetch github/audit-log-allowlists and does not need GITHUB_TOKEN.
// Use it when src/audit-logs/data/shared or version-index.json is stale.
// Run with npm run rebuild-audit-log-dedup.
import { rebuildAuditLogDedup } from '@/audit-logs/lib/deduplicate'

await rebuildAuditLogDedup()
