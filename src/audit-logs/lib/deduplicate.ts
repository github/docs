import { existsSync } from 'fs'
import { mkdir, writeFile } from 'fs/promises'
import path from 'path'

import type {
  AuditLogEventT,
  VersionedAuditLogData,
  DeduplicatedAuditLogEntry,
  AuditLogVersionIndex,
} from '../types'

// Kept in sync with the same constant in lib/index.ts. Defined locally here so
// this write-path module doesn't pull in the request-path lib/index.ts.
const AUDIT_LOG_DATA_DIR = 'src/audit-logs/data'

// Sort versions and pages so sync.ts and rebuild-dedup.ts write byte-identical
// shared files from the same audit log data.
export async function writeDeduplicatedAuditLogData(
  auditLogData: VersionedAuditLogData,
): Promise<void> {
  console.log(`\n▶️  Writing deduplicated audit log data...\n`)

  const fieldsPool: string[][] = []
  const fieldsMap = new Map<string, number>()

  function getFieldsIndex(fields: string[] | undefined): number | undefined {
    if (!fields || fields.length === 0) return undefined
    const key = JSON.stringify(fields)
    if (fieldsMap.has(key)) return fieldsMap.get(key)!
    const index = fieldsPool.length
    fieldsPool.push(fields)
    fieldsMap.set(key, index)
    return index
  }

  const entriesPool: DeduplicatedAuditLogEntry[] = []
  const entriesMap = new Map<string, number>()

  function getEntryIndex(event: AuditLogEventT): number {
    const fieldsIndex = getFieldsIndex(event.fields)
    const entry: DeduplicatedAuditLogEntry = {
      action: event.action,
      description: event.description,
    }
    if (event.docs_reference_links) entry.docs_reference_links = event.docs_reference_links
    if (event.docs_reference_titles) entry.docs_reference_titles = event.docs_reference_titles
    if (fieldsIndex !== undefined) entry.fieldsIndex = fieldsIndex

    const key = JSON.stringify(entry)
    if (entriesMap.has(key)) return entriesMap.get(key)!
    const index = entriesPool.length
    entriesPool.push(entry)
    entriesMap.set(key, index)
    return index
  }

  const versionIndex: AuditLogVersionIndex = {}
  let totalEntries = 0

  for (const version of Object.keys(auditLogData).sort()) {
    versionIndex[version] = {}
    const pages = auditLogData[version]
    for (const page of Object.keys(pages).sort()) {
      const events = pages[page]
      versionIndex[version][page] = events.map((event) => getEntryIndex(event))
      totalEntries += events.length
    }
  }

  const sharedDir = path.join(AUDIT_LOG_DATA_DIR, 'shared')
  if (!existsSync(sharedDir)) {
    await mkdir(sharedDir, { recursive: true })
  }

  await writeFile(path.join(sharedDir, 'entries.json'), JSON.stringify(entriesPool))
  await writeFile(path.join(sharedDir, 'fields-pool.json'), JSON.stringify(fieldsPool))
  await writeFile(path.join(AUDIT_LOG_DATA_DIR, 'version-index.json'), JSON.stringify(versionIndex))

  const uniqueEntries = entriesPool.length
  const uniqueFields = fieldsPool.length
  const dedupRate = totalEntries > 0 ? ((1 - uniqueEntries / totalEntries) * 100).toFixed(1) : '0'
  console.log(
    `✅ Deduplicated audit log data: ${totalEntries} total → ${uniqueEntries} unique entries (${dedupRate}% dedup), ${uniqueFields} unique field lists`,
  )
}
