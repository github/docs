import path from 'path'

import { readCompressedJsonFileFallback } from '../../../lib/read-json-file.js'
import { getOpenApiVersion } from '#src/versions/lib/all-versions.js'

export const AUDIT_LOG_DATA_DIR = 'src/audit-logs/data'

// cache of audit log data
const auditLogEventsCache = new Map()

// get audit log event data for the requested page and version
//
// if categorized is false, returns an array of event objects that look like this:
//
// [
//   {
//     action: 'account.billing_date_change',
//     description: 'event description',
//     docs_reference_links: 'event reference links'
//   },
// ]
//
// if categorized is true, group events by category; the category is the first
// part of the event action (e.g. category is `repo` for the `repo.create` event)
// so we extract the categories and then group events under those categories
// and return an object that looks like this:
//
// {
//   git: [ [Object], [Object] ],
//   repo: [ [Object] ],
//   user: [ [Object], [Object] ]
// }
export function getAuditLogEvents(page, version, categorized = false) {
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

  const auditLogEvents = auditLogEventsCache.get(openApiVersion).get(page)
  // If an event doesn't yet have a description (value will be empty string or
  // "N/A"), then we don't show the event.
  const filteredAuditLogEvents = auditLogEvents.filter(
    (event) => event.description !== 'N/A' && event.description !== '',
  )

  if (!categorized) {
    return filteredAuditLogEvents
  }

  const categorizedEvents = {}
  filteredAuditLogEvents.forEach((event) => {
    const [category] = event.action.split('.')
    if (!Object.hasOwn(categorizedEvents, category)) {
      categorizedEvents[category] = []
    }

    categorizedEvents[category].push({
      action: event.action,
      description: event.description,
    })
  })

  return categorizedEvents
}
