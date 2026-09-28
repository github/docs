import path from 'path'

import { readCompressedJsonFileFallback } from '@/frame/lib/read-json-file'
import { getOpenApiVersion } from '@/versions/lib/all-versions'
import { supported as supportedGhesReleases } from '@/versions/lib/enterprise-server-releases'
import findPage from '@/frame/lib/find-page'
import type { Context, Page } from '@/types'
import type {
  AuditLogEventT,
  CategorizedEvents,
  VersionedAuditLogData,
  RawAuditLogEventT,
  CategoryNotes,
  AuditLogConfig,
  DeduplicatedAuditLogEntry,
  AuditLogVersionIndex,
} from '../types'
import config from './config.json'

export const AUDIT_LOG_DATA_DIR = 'src/audit-logs/data'

const auditLogEventsCache = new Map<string, Map<string, AuditLogEventT[]>>()
const categorizedAuditLogEventsCache = new Map<string, Map<string, CategorizedEvents>>()

let sharedEntries: DeduplicatedAuditLogEntry[] | null = null
let sharedFieldsPool: string[][] | null = null
let sharedVersionIndex: AuditLogVersionIndex | null = null
let sharedFormatAvailable: boolean | null = null

// Missing shared-format files fall back to per-version files; corrupt shared
// data must fail loudly so generated data problems stay visible.
function isFileNotFoundError(err: unknown): boolean {
  if (!(err instanceof Error) || !('code' in err)) return false
  const code = (err as NodeJS.ErrnoException).code
  return code === 'ENOENT' || code === 'ENOTDIR'
}

function loadSharedFormat(): boolean {
  if (sharedFormatAvailable !== null) return sharedFormatAvailable
  try {
    sharedEntries = readCompressedJsonFileFallback(
      path.join(AUDIT_LOG_DATA_DIR, 'shared', 'entries.json'),
    ) as DeduplicatedAuditLogEntry[]
    sharedFieldsPool = readCompressedJsonFileFallback(
      path.join(AUDIT_LOG_DATA_DIR, 'shared', 'fields-pool.json'),
    ) as string[][]
    sharedVersionIndex = readCompressedJsonFileFallback(
      path.join(AUDIT_LOG_DATA_DIR, 'version-index.json'),
    ) as AuditLogVersionIndex
    // Freeze reused field arrays so downstream mutations cannot leak across reconstructed events.
    Object.freeze(sharedEntries)
    Object.freeze(sharedFieldsPool)
    for (const fields of sharedFieldsPool) Object.freeze(fields)
    sharedFormatAvailable = true
  } catch (err) {
    if (isFileNotFoundError(err)) {
      // Missing shared files use per-version files silently.
      sharedFormatAvailable = false
    } else {
      // Corrupt shared data fails loudly instead of hiding behind the per-version fallback.
      console.error('Failed to load shared audit log dedup format (corrupt data?):', err)
      throw err
    }
  }
  return sharedFormatAvailable
}

function reconstructEventsFromSharedFormat(version: string, page: string): AuditLogEventT[] | null {
  if (!loadSharedFormat()) return null
  const indices = sharedVersionIndex?.[version]?.[page]
  if (!indices) return null

  return indices.map((idx) => {
    if (idx < 0 || idx >= sharedEntries!.length) {
      throw new RangeError(
        `Audit log version-index references entry ${idx} for ${version}/${page}, ` +
          `but the entries pool only has ${sharedEntries!.length} entries. ` +
          `The shared dedup data may be stale or corrupt.`,
      )
    }
    const entry = sharedEntries![idx]
    const event: AuditLogEventT = {
      action: entry.action,
      description: entry.description,
    }
    if (entry.docs_reference_links) event.docs_reference_links = entry.docs_reference_links
    if (entry.docs_reference_titles) event.docs_reference_titles = entry.docs_reference_titles
    if (entry.fieldsIndex !== undefined) {
      if (entry.fieldsIndex < 0 || entry.fieldsIndex >= sharedFieldsPool!.length) {
        throw new RangeError(
          `Audit log entry references fields index ${entry.fieldsIndex} for ${version}/${page}, ` +
            `but the fields pool only has ${sharedFieldsPool!.length} entries. ` +
            `The shared dedup data may be stale or corrupt.`,
        )
      }
      event.fields = sharedFieldsPool![entry.fieldsIndex]
    }
    return event
  })
}

type PipelineConfig = {
  sha: string
  appendedDescriptions: Record<string, string>
}

export function getCategoryNotes(): CategoryNotes {
  const auditLogConfig = config as AuditLogConfig
  return auditLogConfig.categoryNotes || {}
}

export type TitleResolutionContext = Context & {
  pages: Record<string, Page>
  redirects: Record<string, string>
}

// Cache reference-link rendering by input string because pages and redirects are
// process-wide deploy-time indexes. Audit-log pages otherwise re-render about
// 500 titles on each request, adding about 90 to 150 ms of warm-server work.
const referenceLinksMarkdownCache = new Map<string, Promise<string>>()

export function resolveReferenceLinksToMarkdown(
  docsReferenceLinks: string,
  context: TitleResolutionContext,
): Promise<string> {
  if (!docsReferenceLinks || docsReferenceLinks === 'N/A') {
    return Promise.resolve('')
  }

  let cached = referenceLinksMarkdownCache.get(docsReferenceLinks)
  if (!cached) {
    cached = computeReferenceLinksToMarkdown(docsReferenceLinks, context)
    referenceLinksMarkdownCache.set(docsReferenceLinks, cached)
  }
  return cached
}

async function computeReferenceLinksToMarkdown(
  docsReferenceLinks: string,
  context: TitleResolutionContext,
): Promise<string> {
  const links = docsReferenceLinks
    .split(/[,\s]+/)
    .map((link) => link.trim())
    .filter((link) => link && link !== 'N/A')

  const markdownLinks = []
  for (const link of links) {
    try {
      const page = findPage(link, context.pages, context.redirects)
      if (page) {
        const renderContext = {
          currentLanguage: 'en',
          currentVersion: 'free-pro-team@latest',
          pages: context.pages,
          redirects: context.redirects,
        } as unknown as Context
        const title = await page.renderProp('title', renderContext, { textOnly: true })
        markdownLinks.push(`[${title}](${link})`)
      } else {
        markdownLinks.push(link)
      }
    } catch (error) {
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

async function resolveReferenceLinksToTitles(
  docsReferenceLinks: string,
  context: TitleResolutionContext,
): Promise<string> {
  if (!docsReferenceLinks || docsReferenceLinks === 'N/A') {
    return ''
  }

  const links = docsReferenceLinks
    .split(/[,\s]+/)
    .map((link) => link.trim())
    .filter((link) => link && link !== 'N/A')

  const titles = []
  for (const link of links) {
    try {
      const page = findPage(link, context.pages, context.redirects)
      if (page) {
        const renderContext = {
          currentLanguage: 'en',
          currentVersion: 'free-pro-team@latest',
          pages: context.pages,
          redirects: context.redirects,
        } as unknown as Context
        const title = await page.renderProp('title', renderContext, { textOnly: true })
        titles.push(title)
      } else {
        titles.push(link)
      }
    } catch (error) {
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

export function getAuditLogEvents(page: string, version: string): AuditLogEventT[] {
  const openApiVersion = getOpenApiVersion(version)

  // Prefer shared dedup data, but keep per-version JSON as the compatibility fallback.
  if (!auditLogEventsCache.has(openApiVersion)) {
    auditLogEventsCache.set(openApiVersion, new Map())
  }
  if (!auditLogEventsCache.get(openApiVersion)?.has(page)) {
    const events = reconstructEventsFromSharedFormat(openApiVersion, page)
    if (events) {
      auditLogEventsCache.get(openApiVersion)?.set(page, events)
    } else {
      const auditLogFileName = path.join(AUDIT_LOG_DATA_DIR, openApiVersion, `${page}.json`)
      auditLogEventsCache
        .get(openApiVersion)
        ?.set(page, readCompressedJsonFileFallback(auditLogFileName) as AuditLogEventT[])
    }
  }

  const auditLogEvents = auditLogEventsCache.get(openApiVersion)?.get(page)
  // Hide events whose upstream description is missing or marked N/A.
  const filteredAuditLogEvents = auditLogEvents?.filter(
    (event) => event.description !== 'N/A' && event.description !== '',
  )

  return filteredAuditLogEvents || []
}

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

export async function filterByAllowlistValues({
  eventsToCheck,
  allowListValues,
  currentEvents = [],
  pipelineConfig,
  titleContext,
  globalFields = [],
}: {
  eventsToCheck: RawAuditLogEventT[]
  allowListValues: string | string[]
  currentEvents?: AuditLogEventT[]
  pipelineConfig: PipelineConfig
  titleContext?: TitleResolutionContext
  globalFields?: string[]
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

      const mergedFields = event.fields
        ? [...new Set([...globalFields, ...event.fields])]
        : globalFields.length > 0
          ? [...globalFields]
          : undefined

      const minimal: AuditLogEventT = {
        action: event.action,
        description: processAndGetEventDescription(event, eventAllowlists, pipelineConfig),
        docs_reference_links: event.docs_reference_links,
        fields: mergedFields,
      }

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

// Mutates currentGhesEvents so each supported GHES version maps the requested
// page to filtered events. It ignores upstream GHES versions that docs no
// longer supports because nightly syncs would otherwise recreate deprecated
// src/audit-logs/data/ghes-X.Y directories.
export async function filterAndUpdateGhesDataByAllowlistValues({
  eventsToCheck,
  allowListValue,
  currentGhesEvents,
  pipelineConfig,
  auditLogPage,
  titleContext,
  globalFields = [],
  supportedGhesVersions = supportedGhesReleases,
}: {
  eventsToCheck: RawAuditLogEventT[]
  allowListValue: string
  currentGhesEvents: VersionedAuditLogData
  pipelineConfig: PipelineConfig
  auditLogPage: string
  titleContext?: TitleResolutionContext
  globalFields?: string[]
  supportedGhesVersions?: string[]
}) {
  if (!currentGhesEvents) currentGhesEvents = {}

  const supportedGhesVersionSet = new Set(supportedGhesVersions)

  const seenByGhesVersion = new Map()
  for (const [ghesVersion, events] of Object.entries(currentGhesEvents)) {
    if (!events[auditLogPage]) continue
    const pageEvents = new Set(events[auditLogPage].map((e) => e.action))
    seenByGhesVersion.set(ghesVersion, pageEvents)
  }

  for (const event of eventsToCheck) {
    for (const ghesVersion of Object.keys(event.ghes)) {
      if (!supportedGhesVersionSet.has(ghesVersion)) continue
      const ghesVersionAllowlists = event.ghes[ghesVersion]._allowlists
      const fullGhesVersion = `ghes-${ghesVersion}`

      if (ghesVersionAllowlists === null) continue
      if (seenByGhesVersion.get(fullGhesVersion)?.has(event.action)) continue

      if (ghesVersionAllowlists.includes(allowListValue)) {
        const eventFields = event.ghes[ghesVersion].fields || event.fields

        const mergedFields = eventFields
          ? [...new Set([...globalFields, ...eventFields])]
          : globalFields.length > 0
            ? [...globalFields]
            : undefined

        const minimal: AuditLogEventT = {
          action: event.action,
          description: processAndGetEventDescription(event, ghesVersionAllowlists, pipelineConfig),
          docs_reference_links: event.docs_reference_links,
          fields: mergedFields,
        }

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

// The generic API-only description is wrong for api.request, so it gets its own.
// The schema has no field to identify it, so match on the action name.
function processAndGetEventDescription(
  event: AuditLogEventT,
  allowlists: string[],
  pipelineConfig: PipelineConfig,
) {
  let description = event.description

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
