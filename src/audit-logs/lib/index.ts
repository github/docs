import path from 'path'

import { readCompressedJsonFileFallback } from '@/frame/lib/read-json-file'
import { getOpenApiVersion } from '@/versions/lib/all-versions'
import findPage from '@/frame/lib/find-page'
import type { Context, Page } from '@/types'
import type {
  AuditLogEventT,
  CategorizedEvents,
  VersionedAuditLogData,
  RawAuditLogEventT,
  CategoryNotes,
  AuditLogConfig,
} from '../types'
import config from './config.json'

export const AUDIT_LOG_DATA_DIR = 'src/audit-logs/data'

// cache of audit log data
const auditLogEventsCache = new Map<string, Map<string, AuditLogEventT[]>>()
const categorizedAuditLogEventsCache = new Map<string, Map<string, CategorizedEvents>>()

type PipelineConfig = {
  sha: string
  appendedDescriptions: Record<string, string>
}

// get category notes from config
export function getCategoryNotes(): CategoryNotes {
  const auditLogConfig = config as AuditLogConfig
  return auditLogConfig.categoryNotes || {}
}

export type TitleResolutionContext = Context & {
  pages: Record<string, Page>
  redirects: Record<string, string>
}

// Resolves docs_reference_links URLs to markdown links
export async function resolveReferenceLinksToMarkdown(
  docsReferenceLinks: string,
  context: TitleResolutionContext,
): Promise<string> {
  if (!docsReferenceLinks || docsReferenceLinks === 'N/A') {
    return ''
  }

  // Handle multiple comma-separated or space-separated links
  const links = docsReferenceLinks
    .split(/[,\s]+/)
    .map((link) => link.trim())
    .filter((link) => link && link !== 'N/A')

  const markdownLinks = []
  for (const link of links) {
    try {
      const page = findPage(link, context.pages, context.redirects)
      if (page) {
        // Create a minimal context for rendering the title
        const renderContext = {
          currentLanguage: 'en',
          currentVersion: 'free-pro-team@latest',
          pages: context.pages,
          redirects: context.redirects,
        } as unknown as Context
        const title = await page.renderProp('title', renderContext, { textOnly: true })
        markdownLinks.push(`[${title}](${link})`)
      } else {
        // If we can't resolve the link, use the original URL
        markdownLinks.push(link)
      }
    } catch (error) {
      // If resolution fails, use the original URL
      console.warn(
        `Failed to resolve title for link: ${link}`,
        error instanceof Error
          ? error instanceof Error
            ? error.message
            : String(error)
          : String(error),
      )
      markdownLinks.push(link)
    }
  }

  return markdownLinks.join(', ')
}

// Resolves docs_reference_links URLs to page titles
async function resolveReferenceLinksToTitles(
  docsReferenceLinks: string,
  context: TitleResolutionContext,
): Promise<string> {
  if (!docsReferenceLinks || docsReferenceLinks === 'N/A') {
    return ''
  }

  // Handle multiple comma-separated or space-separated links
  const links = docsReferenceLinks
    .split(/[,\s]+/)
    .map((link) => link.trim())
    .filter((link) => link && link !== 'N/A')

  const titles = []
  for (const link of links) {
    try {
      const page = findPage(link, context.pages, context.redirects)
      if (page) {
        // Create a minimal context for rendering the title
        const renderContext = {
          currentLanguage: 'en',
          currentVersion: 'free-pro-team@latest',
          pages: context.pages,
          redirects: context.redirects,
        } as unknown as Context
        const title = await page.renderProp('title', renderContext, { textOnly: true })
        titles.push(title)
      } else {
        // If we can't resolve the link, use the original URL
        titles.push(link)
      }
    } catch (error) {
      // If resolution fails, use the original URL
      console.warn(
        `Failed to resolve title for link: ${link}`,
        error instanceof Error
          ? error instanceof Error
            ? error.message
            : String(error)
          : String(error),
      )
      titles.push(link)
    }
  }

  return titles.join(', ')
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
export function getAuditLogEvents(page: string, version: string): AuditLogEventT[] {
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

  const auditLogEvents = auditLogEventsCache.get(openApiVersion)?.get(page)
  // If an event doesn't yet have a description (value will be empty string or
  // "N/A"), then we don't show the event.
  const filteredAuditLogEvents = auditLogEvents?.filter(
    (event) => event.description !== 'N/A' && event.description !== '',
  )

  return filteredAuditLogEvents || []
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
export function getCategorizedAuditLogEvents(page: string, version: string): CategorizedEvents {
  const events = getAuditLogEvents(page, version)
  const openApiVersion = getOpenApiVersion(version)

  if (!categorizedAuditLogEventsCache.get(openApiVersion)) {
    categorizedAuditLogEventsCache.set(openApiVersion, new Map())
    categorizedAuditLogEventsCache.get(openApiVersion)?.set(page, categorizeEvents(events))
  } else if (!categorizedAuditLogEventsCache.get(openApiVersion)?.get(page)) {
    categorizedAuditLogEventsCache.get(openApiVersion)?.set(page, categorizeEvents(events))
  }

  return categorizedAuditLogEventsCache.get(openApiVersion)?.get(page) || {}
}

// Filters audit log events based on allowlist values.
export async function filterByAllowlistValues({
  eventsToCheck,
  allowListValues,
  currentEvents = [],
  pipelineConfig,
  titleContext,
}: {
  eventsToCheck: RawAuditLogEventT[]
  allowListValues: string | string[]
  currentEvents?: AuditLogEventT[]
  pipelineConfig: PipelineConfig
  titleContext?: TitleResolutionContext
}) {
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

      const minimal: AuditLogEventT = {
        action: event.action,
        description: processAndGetEventDescription(event, eventAllowlists, pipelineConfig),
        docs_reference_links: event.docs_reference_links,
        fields: event.fields,
      }

      // Resolve reference link titles if context is provided
      if (titleContext && event.docs_reference_links && event.docs_reference_links !== 'N/A') {
        try {
          minimal.docs_reference_titles = await resolveReferenceLinksToTitles(
            event.docs_reference_links,
            titleContext,
          )
        } catch (error) {
          console.warn(
            `Failed to resolve titles for event ${event.action}:`,
            error instanceof Error ? error.message : String(error),
          )
        }
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
// * titleContext: optional context for resolving reference link titles
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
export async function filterAndUpdateGhesDataByAllowlistValues({
  eventsToCheck,
  allowListValue,
  currentGhesEvents,
  pipelineConfig,
  auditLogPage,
  titleContext,
}: {
  eventsToCheck: RawAuditLogEventT[]
  allowListValue: string
  currentGhesEvents: VersionedAuditLogData
  pipelineConfig: PipelineConfig
  auditLogPage: string
  titleContext?: TitleResolutionContext
}) {
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
        const minimal: AuditLogEventT = {
          action: event.action,
          description: processAndGetEventDescription(event, ghesVersionAllowlists, pipelineConfig),
          docs_reference_links: event.docs_reference_links,
          fields: event.ghes[ghesVersion].fields || event.fields,
        }

        // Resolve reference link titles if context is provided
        if (titleContext && event.docs_reference_links && event.docs_reference_links !== 'N/A') {
          try {
            minimal.docs_reference_titles = await resolveReferenceLinksToTitles(
              event.docs_reference_links,
              titleContext,
            )
          } catch (error) {
            console.warn(
              `Failed to resolve titles for event ${event.action}:`,
              error instanceof Error ? error.message : String(error),
            )
          }
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
  for (const event of events) {
    const [category] = event.action.split('.')
    if (!Object.hasOwn(categorizedEvents, category)) {
      categorizedEvents[category] = []
    }

    categorizedEvents[category].push(event)
  }

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
