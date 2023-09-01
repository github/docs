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

  // There's no ghae versioned audit log events
  if (openApiVersion === 'ghae') {
    openApiVersion = 'ghes'
  }

  const auditLogFileName = path.join(AUDIT_LOG_DATA_DIR, openApiVersion, `${page}.json`)

  // If the data isn't cached for an entire version or a particular page, read
  // the data from the JSON file the first time around
  if (!auditLogEventsCache.has(openApiVersion)) {
    auditLogEventsCache.set(openApiVersion, new Map())
    auditLogEventsCache.get(openApiVersion).set(page, new Map())
    auditLogEventsCache
      .get(openApiVersion)
      .set(page, readCompressedJsonFileFallback(auditLogFileName))
  } else if (!auditLogEventsCache.get(openApiVersion).has(page)) {
    auditLogEventsCache.get(openApiVersion).set(page, new Map())
    auditLogEventsCache
      .get(openApiVersion)
      .set(page, readCompressedJsonFileFallback(auditLogFileName))
  }

  return auditLogEventsCache.get(openApiVersion).get(page)
}
