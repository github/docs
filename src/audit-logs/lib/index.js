import path from 'path'

import { readCompressedJsonFileFallback } from '../../../lib/read-json-file.js'
import { getOpenApiVersion } from '../../../lib/all-versions.js'

export const AUDIT_LOG_DATA_DIR = 'src/audit-logs/data'

// cache of audit log data
const auditLogEventsCache = new Map()

// get audit log event data for some page and version
//
// returns an array of event objects that look like this:
//
// [
//   {
//     action: 'account.billing_date_change',
//     description: 'event description',
//     docs_reference_links: 'event reference links'
//   },
// ]
export function getAuditLogEvents(page, version) {
  let openApiVersion = getOpenApiVersion(version)

  // Specific ghes versioning isn't available yet, just strip the
  // ghes version number for now
  if (version.includes('-')) {
    openApiVersion = openApiVersion.split('-')[0]
  }

  const auditLogFileName = path.join(AUDIT_LOG_DATA_DIR, openApiVersion, `${page}.json`)

  // If the data isn't cached for an entire version or a particular page, read
  // the data from the JSON file the first time around
  if (!auditLogEventsCache.has(version)) {
    auditLogEventsCache.set(version, new Map())
    auditLogEventsCache.get(version).set(page, new Map())
    auditLogEventsCache.get(version).set(page, readCompressedJsonFileFallback(auditLogFileName))
  } else if (!auditLogEventsCache.get(version).has(page)) {
    auditLogEventsCache.get(version).set(page, new Map())
    auditLogEventsCache.get(version).set(page, readCompressedJsonFileFallback(auditLogFileName))
  }

  return auditLogEventsCache.get(version).get(page)
}
