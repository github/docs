// Rebuilds src/github-apps/data/shared/entries.json and src/github-apps/data/version-index.json
// from per-version JSON already on disk. It does not fetch the OpenAPI description.
// Use it when src/github-apps/data/shared or version-index.json is stale.
// Run with npm run rebuild-github-apps-dedup.
import { writeDeduplicatedAppsFormat } from '@/github-apps/scripts/sync'

await writeDeduplicatedAppsFormat()
