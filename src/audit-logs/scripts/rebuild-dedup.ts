/**
 * Rebuilds the deduplicated "shared" audit log format
 * (src/audit-logs/data/shared/entries.json, fields-pool.json, and
 * version-index.json) from the per-version page files already on disk.
 *
 * Unlike `sync-audit-log`, this does NOT fetch from github/audit-log-allowlists
 * and needs no GITHUB_TOKEN. Use it to regenerate the shared files when the
 * per-version JSON files have changed but the shared files are stale (for
 * example, an older audit-log-pipeline PR that predates the dedup format), which
 * makes the `deduplication` test fail.
 *
 *   npm run rebuild-audit-log-dedup
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'fs'
import path from 'path'

import { writeDeduplicatedAuditLogData } from '../lib/deduplicate'
import type { AuditLogEventT, VersionedAuditLogData } from '../types'

const AUDIT_LOG_DATA_DIR = 'src/audit-logs/data'

// Directories under the data dir that are not per-version event data.
const NON_VERSION_DIRS = new Set(['shared'])

function loadAuditLogDataFromDisk(): VersionedAuditLogData {
  const auditLogData: VersionedAuditLogData = {}

  for (const version of readdirSync(AUDIT_LOG_DATA_DIR)) {
    if (NON_VERSION_DIRS.has(version)) continue
    const versionDir = path.join(AUDIT_LOG_DATA_DIR, version)
    if (!statSync(versionDir).isDirectory()) continue

    const pages: Record<string, AuditLogEventT[]> = {}
    for (const file of readdirSync(versionDir)) {
      if (!file.endsWith('.json')) continue
      const page = path.basename(file, '.json')
      pages[page] = JSON.parse(readFileSync(path.join(versionDir, file), 'utf8'))
    }

    if (Object.keys(pages).length > 0) {
      auditLogData[version] = pages
    }
  }

  return auditLogData
}

async function main() {
  if (!existsSync(AUDIT_LOG_DATA_DIR)) {
    throw new Error(`Audit log data directory not found: ${AUDIT_LOG_DATA_DIR}`)
  }

  const auditLogData = loadAuditLogDataFromDisk()
  const versionCount = Object.keys(auditLogData).length
  if (versionCount === 0) {
    throw new Error(`No per-version audit log data found in ${AUDIT_LOG_DATA_DIR}`)
  }

  console.log(`\n▶️  Rebuilding deduplicated format from ${versionCount} versions on disk...`)
  await writeDeduplicatedAuditLogData(auditLogData)
}

main()
