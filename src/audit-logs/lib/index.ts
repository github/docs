import path from 'path'

import { readCompressedJsonFileFallback } from '@/frame/lib/read-json-file.js'
import { getOpenApiVersion } from '@/versions/lib/all-versions.js'
import type {
  AuditLogEventT,
  CategorizedEvents,
  VersionedAuditLogData,
  RawAuditLogEventT,
} from '../types'

export const AUDIT_LOG_DATA_DIR = 'src/audit-logs/data'

// cache of audit log data
const auditLogEventsCache = new Map<string, Map<string, AuditLogEventT[]>>()
const categorizedAuditLogEventsCache = new Map<string, Map<string, CategorizedEvents>>()

type PipelineConfig = {
  sha: string
  appendedDescriptions: Record<string, string>
}

// get audit log event data for the requested page and version
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
export function getAuditLogEvents(page: string, version: string) {
  const openApiVersion = getOpenApiVersion(version)
  const auditLogFileName = path.join(AUDIT_LOG_DATA_DIR, openApiVersion, `${page}.json`)

  // If the data isn't cached for an entire version or a particular page, read
  // the data from the JSON file the first time around
  if (!auditLogEventsCache.has(openApiVersion)) {
    auditLogEventsCache.set(openApiVersion, new Map())
    auditLogEventsCache.get(openApiVersion)?.set(page, [])
    auditLogEventsCache
      .get(openApiVersion)
      ?.set(page, readCompressedJsonFileFallback(auditLogFileName))
  } else if (!auditLogEventsCache.get(openApiVersion)?.has(page)) {
    auditLogEventsCache.get(openApiVersion)?.set(page, [])
    auditLogEventsCache
      .get(openApiVersion)
      ?.set(page, readCompressedJsonFileFallback(auditLogFileName))
  }

  const auditLogEvents = auditLogEventsCache.get(openApiVersion)?.get(page)!
  // If an event doesn't yet have a description (value will be empty string or
  // "N/A"), then we don't show the event.
  const filteredAuditLogEvents = auditLogEvents.filter(
    (event) => event.description !== 'N/A' && event.description !== '',
  )

  return filteredAuditLogEvents
}

// get categorized audit log event data for the requested page and version
//
// Events are grouped by category; the category is the first part of the event
// action (e.g. category is `repo` for the `repo.create` event) so we extract
// the categories and then group events under those categories and return an
// object that looks like this:
//
// {
//   git: [ [Object], [Object] ],
//   repo: [ [Object] ],
//   user: [ [Object], [Object] ]
// }
export function getCategorizedAuditLogEvents(page: string, version: string) {
  const events = getAuditLogEvents(page, version)
  const openApiVersion = getOpenApiVersion(version)

  if (!categorizedAuditLogEventsCache.get(openApiVersion)) {
    categorizedAuditLogEventsCache.set(openApiVersion, new Map())
    categorizedAuditLogEventsCache.get(openApiVersion)?.set(page, categorizeEvents(events))
  } else if (!categorizedAuditLogEventsCache.get(openApiVersion)?.get(page)) {
    categorizedAuditLogEventsCache.get(openApiVersion)?.set(page, categorizeEvents(events))
  }

  return categorizedAuditLogEventsCache.get(openApiVersion)?.get(page)!
}

// Filters audit log events based on allowlist values.
//
// * eventsToCheck: events to consider
// * allowListvalues: allowlist values to filter by
// * currentEvents: events already collected
// * pipelineConfig: audit log pipeline config data
export function filterByAllowlistValues(
  eventsToCheck: RawAuditLogEventT[],
  allowListValues: string | string[],
  currentEvents: AuditLogEventT[],
  pipelineConfig: PipelineConfig,
) {
  if (!Array.isArray(allowListValues)) allowListValues = [allowListValues]
  if (!currentEvents) currentEvents = []

  const seen = new Set(currentEvents.map((event) => event.action))
  const minimalEvents = []

  for (const event of eventsToCheck) {
    const eventAllowlists = event._allowlists
    if (eventAllowlists === null) continue

    if (allowListValues.some((av) => eventAllowlists.includes(av))) {
      if (seen.has(event.action)) continue
      seen.add(event.action)

      const minimal = {
        action: event.action,
        description: processAndGetEventDescription(event, eventAllowlists, pipelineConfig),
        docs_reference_links: event.docs_reference_links,
      }

      minimalEvents.push(minimal)
    }
  }
  return [...minimalEvents, ...currentEvents]
}

// Filters audit log events based on allowlist values and processes an
// event's supported GHES versions.
//
// * eventsToCheck: events to consider
// * allowListvalue: allowlist value to filter by
// * currentEvents: events already collected
// * pipelineConfig: audit log pipeline config data
// * auditLogPage: the audit log page the event belongs to
//
// Mutates `currentGhesEvents` and updates it with any new filtered for audit
// log events, the object maps GHES versions to page events for that version e.g.:
//
// {
//   ghes-3.10': {
//     organization: [...],
//     enterprise: [...],
//     user: [...],
//   },
//   ghes-3.11': {
//     organization: [...],
//     enterprise: [...],
//     user: [...],
//   },
// }
export function filterAndUpdateGhesDataByAllowlistValues(
  eventsToCheck: RawAuditLogEventT[],
  allowListValue: string,
  currentGhesEvents: VersionedAuditLogData,
  pipelineConfig: PipelineConfig,
  auditLogPage: string,
) {
  if (!currentGhesEvents) currentGhesEvents = {}

  const seenByGhesVersion = new Map()
  for (const [ghesVersion, events] of Object.entries(currentGhesEvents)) {
    if (!events[auditLogPage]) continue
    const pageEvents = new Set(events[auditLogPage].map((e) => e.action))
    seenByGhesVersion.set(ghesVersion, pageEvents)
  }

  for (const event of eventsToCheck) {
    for (const ghesVersion of Object.keys(event.ghes)) {
      const ghesVersionAllowlists = event.ghes[ghesVersion]._allowlists
      const fullGhesVersion = `ghes-${ghesVersion}`

      if (ghesVersionAllowlists === null) continue
      if (seenByGhesVersion.get(fullGhesVersion)?.has(event.action)) continue

      if (ghesVersionAllowlists.includes(allowListValue)) {
        const minimal = {
          action: event.action,
          description: processAndGetEventDescription(event, ghesVersionAllowlists, pipelineConfig),
          docs_reference_links: event.docs_reference_links,
        }

        // we need to initialize as we go to build up the `minimalEvents`
        // object that we'll return which will contain the GHES events for
        // each versions + page type combos e.g. when processing GHES events
        // for the organization events page we'll end up with something like
        // this:
        //
        // {
        //   'ghes-3.10': { organization: [Array] },
        //   'ghes-3.11': { organization: [Array] },
        //   'ghes-3.8': { organization: [Array] },
        //   'ghes-3.9': { organization: [Array] }
        // }
        if (!currentGhesEvents[fullGhesVersion]) {
          currentGhesEvents[fullGhesVersion] = {}
          currentGhesEvents[fullGhesVersion][auditLogPage] = []
        } else {
          if (!currentGhesEvents[fullGhesVersion][auditLogPage]) {
            currentGhesEvents[fullGhesVersion][auditLogPage] = []
          }
        }

        currentGhesEvents[fullGhesVersion][auditLogPage].push(minimal)
      }
    }
  }
}

// Categorizes the given array of audit log events by event category
function categorizeEvents(events: AuditLogEventT[]) {
  const categorizedEvents: CategorizedEvents = {}
  events.forEach((event) => {
    const [category] = event.action.split('.')
    if (!Object.hasOwn(categorizedEvents, category)) {
      categorizedEvents[category] = []
    }

    categorizedEvents[category].push(event)
  })

  return categorizedEvents
}

function processAndGetEventDescription(
  event: AuditLogEventT,
  allowlists: string[],
  pipelineConfig: PipelineConfig,
) {
  let description = event.description

  // api.request is a unique event because it's an api_only event but is the only
  // one of these events where the description we append isn't correct so we
  // have to account for it separately.  There's not yet anything in the schema
  // we can hook onto to treat it differently.
  if (
    (allowlists.includes('org_api_only') || allowlists.includes('business_api_only')) &&
    event.action !== 'api.request'
  ) {
    description += ` ${pipelineConfig.appendedDescriptions.apiOnlyEvents}`
  }

  if (event.action === 'api.request') {
    description += ` ${pipelineConfig.appendedDescriptions.apiRequestEvent}`
  }

  return description
}
