/**
 * Required env variables:
 *
 * GITHUB_TOKEN
 *
 * Gets latest audit log event data, extracts the data we need for rendering on
 * the 3 different audit log pages, and writes out the data to files versioned
 * per page.
 */
import { existsSync } from 'fs'
import { readFile, writeFile } from 'fs/promises'
import { mkdirp } from 'mkdirp'
import path from 'path'

import { filterByAllowlistValues, filterAndUpdateGhesDataByAllowlistValues } from '../lib/index'
import { getContents, getCommitSha } from '@/workflows/git-utils'
import { latest, latestStable, releaseCandidate } from '@/versions/lib/enterprise-server-releases'
import { loadPages, loadPageMap } from '@/frame/lib/page-data'
import loadRedirects from '@/redirects/lib/precompile'
import type {
  AuditLogEventT,
  VersionedAuditLogData,
  DeduplicatedAuditLogEntry,
  AuditLogVersionIndex,
} from '../types'

if (!process.env.GITHUB_TOKEN) {
  throw new Error('GITHUB_TOKEN environment variable must be set to run this script')
}

const AUDIT_LOG_DATA_DIR = 'src/audit-logs/data'

const AUDIT_LOG_PAGES = {
  USER: 'user',
  ORGANIZATION: 'organization',
  ENTERPRISE: 'enterprise',
}

async function main() {
  // get latest audit log data
  //
  // an array of event objects that look like this (omitting fields we won't
  // use):
  //
  // {
  //   "account.billing_date_change": {
  //     "description": "Event description",
  //     "docs_reference_links": "Event reference link (can be space or comma-space separated list of links)",
  //   }
  // }
  const owner = 'github'
  const repo = 'audit-log-allowlists'
  const ref = 'main'
  const schemaFilePath = 'data/schema.json'
  const schemaEvents = JSON.parse(await getContents(owner, repo, ref, schemaFilePath))
  const mainSha = await getCommitSha(owner, repo, `heads/${ref}`)

  // Fetch fields.json to get global fields that should be included in all events
  const fieldsFilePath = 'allowlists/fields.json'
  const fieldsData = JSON.parse(await getContents(owner, repo, ref, fieldsFilePath))

  // Extract global fields (excluding those gated by feature flags)
  if (!fieldsData.global?.include) {
    console.warn('Warning: fieldsData.global.include not found, no global fields will be added')
  }
  type FieldsIncludeEntry = { fields: string[]; feature_flag?: string }
  const globalFields: string[] =
    fieldsData.global?.include
      ?.filter((entry: FieldsIncludeEntry) => !entry.feature_flag)
      ?.flatMap((entry: FieldsIncludeEntry) => entry.fields) || []

  console.log(`Loaded ${globalFields.length} global fields from fields.json`)

  const configFilepath = `src/audit-logs/lib/config.json`
  const pipelineConfig = JSON.parse(await readFile(configFilepath, 'utf8'))
  pipelineConfig.sha = mainSha
  await writeFile(configFilepath, JSON.stringify(pipelineConfig, null, 2))

  // Load pages and redirects for title resolution
  console.log('Loading pages and redirects for title resolution...')
  const pageList = await loadPages(undefined, ['en'])
  const pages = await loadPageMap(pageList)
  const redirects = await loadRedirects(pageList)
  const titleContext = { pages, redirects }

  // store an array of audit log event data keyed by version and audit log page,
  // will look like this (depends on supported GHES versions):
  //
  // {
  //   fpt: { user: [Array], organization: [Array] },
  //   ghec: { user: [Array], organization: [Array], enterprise: [Array] },
  //   'ghes-3.10': { organization: [Array], user: [Array], enterprise: [Array] },
  //   'ghes-3.11': { organization: [Array], user: [Array], enterprise: [Array] },
  //   'ghes-3.8': { organization: [Array], user: [Array], enterprise: [Array] },
  //   'ghes-3.9': { organization: [Array], user: [Array], enterprise: [Array] },
  //   'ghes-3.12': { organization: [Array], user: [Array], enterprise: [Array] }
  // }
  //
  // audit log data is updated for new GHES releases so we should always have
  // data for every supported GHES version including RC releases.  Just to be
  // extra careful, we also fallback to the latest stable GHES version if
  // there's an RC release in the docs site but no audit log data for that version.
  const auditLogData: VersionedAuditLogData = {}

  // Wrapper around filterByAllowlistValues() because we always need all the
  // schema events and pipeline config data.
  const filter = (allowListValues: string | string[], currentEvents: AuditLogEventT[] = []) =>
    filterByAllowlistValues({
      eventsToCheck: schemaEvents,
      allowListValues,
      currentEvents,
      pipelineConfig,
      titleContext,
      globalFields,
    })
  // Wrapper around filterGhesByAllowlistValues() because we always need all the
  // schema events and pipeline config data.
  const filterAndUpdateGhes = (
    allowListValue: string,
    auditLogPage: string,
    currentGhesEvents: VersionedAuditLogData,
  ) =>
    filterAndUpdateGhesDataByAllowlistValues({
      eventsToCheck: schemaEvents,
      allowListValue,
      currentGhesEvents,
      pipelineConfig,
      auditLogPage,
      titleContext,
      globalFields,
    })

  auditLogData.fpt = {}
  auditLogData.fpt.user = await filter('user')
  auditLogData.fpt.organization = await filter(['organization', 'org_api_only'])

  auditLogData.ghec = {}
  auditLogData.ghec.user = await filter('user')
  auditLogData.ghec.organization = await filter('organization')
  auditLogData.ghec.organization = await filter('org_api_only', auditLogData.ghec.organization)
  auditLogData.ghec.enterprise = await filter('business')
  auditLogData.ghec.enterprise = await filter('business_api_only', auditLogData.ghec.enterprise)

  // GHES versions are numbered (i.e. "3.9", "3.10", etc.) and filterGhes()
  // gives us back an object of GHES versions to page events for each version
  // that looks like this:
  //
  // {
  //   ghes-3.10': { // org, enterprise, user page events },
  //   ghes-3.11': { // org, enterprise, user page events },
  // }
  //
  // so there's no single auditLogData.ghes like the other versions.
  const ghesVersionsAuditLogData = {}

  await filterAndUpdateGhes('business', AUDIT_LOG_PAGES.ENTERPRISE, ghesVersionsAuditLogData)
  await filterAndUpdateGhes(
    'business_api_only',
    AUDIT_LOG_PAGES.ENTERPRISE,
    ghesVersionsAuditLogData,
  )
  await filterAndUpdateGhes('user', AUDIT_LOG_PAGES.USER, ghesVersionsAuditLogData)
  await filterAndUpdateGhes('organization', AUDIT_LOG_PAGES.ORGANIZATION, ghesVersionsAuditLogData)
  await filterAndUpdateGhes('org_api_only', AUDIT_LOG_PAGES.ORGANIZATION, ghesVersionsAuditLogData)
  Object.assign(auditLogData, ghesVersionsAuditLogData)

  // We don't maintain the order of events as we process them so after filtering
  // all the events based on their allowlist values, we sort them so they're in
  // order for display on the audit log pages.
  for (const pageEventData of Object.values(auditLogData)) {
    for (const events of Object.values(pageEventData)) {
      events.sort((e1, e2) => {
        // Event actions have underscores and periods (e.g.
        // `enterprise.runner_group_runners_updated`) and we ignore them both
        // so that for example `org_secret_scanning_custom_pattern.update` is
        // treated as `org secrect scanning custom pattern update` and will be
        // sorted after `org.accept_business_invitation`.
        const a1 = e1.action.replace(/[_.]/g, ' ')
        const a2 = e2.action.replace(/[_.]/g, ' ')
        return a1.localeCompare(a2)
      })
    }
  }

  // as of February 2024 we don't get audit log event data for GHES RC releases
  // so we re-use the latest GHES events for the RC release if we need to
  if (latest === releaseCandidate && !auditLogData[`ghes-${releaseCandidate}`]) {
    auditLogData[`ghes-${releaseCandidate}`] = structuredClone(auditLogData[`ghes-${latestStable}`])
  }

  console.log(`\n▶️  Generating audit log data files...\n`)

  // write out audit log event data to page event files per version e.g.:
  //
  // fpt/
  // |- enterprise.json
  // |- organization.json
  // |- user.json
  for (const version of Object.keys(auditLogData)) {
    const auditLogVersionDirPath = path.join(AUDIT_LOG_DATA_DIR, version)

    if (!existsSync(auditLogVersionDirPath)) {
      await mkdirp(auditLogVersionDirPath)
    }

    for (const page of Object.values(AUDIT_LOG_PAGES)) {
      const auditLogSchemaFilePath = path.join(auditLogVersionDirPath, `${page}.json`)

      if (auditLogData[version][page]) {
        await writeFile(
          auditLogSchemaFilePath,
          JSON.stringify(auditLogData[version][page], null, 2),
        )
      }
    }
  }

  // Write deduplicated shared format
  await writeDeduplicatedFormat(auditLogData)
}

async function writeDeduplicatedFormat(auditLogData: VersionedAuditLogData) {
  console.log(`\n▶️  Writing deduplicated audit log data...\n`)

  // Build fields pool: unique fields arrays
  const fieldsPool: string[][] = []
  const fieldsMap = new Map<string, number>() // JSON key → index

  function getFieldsIndex(fields: string[] | undefined): number | undefined {
    if (!fields || fields.length === 0) return undefined
    const key = JSON.stringify(fields)
    if (fieldsMap.has(key)) return fieldsMap.get(key)!
    const index = fieldsPool.length
    fieldsPool.push(fields)
    fieldsMap.set(key, index)
    return index
  }

  // Build entries pool: unique events (with fields replaced by index)
  const entriesPool: DeduplicatedAuditLogEntry[] = []
  const entriesMap = new Map<string, number>() // JSON key → index

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

  // Build version index
  const versionIndex: AuditLogVersionIndex = {}
  let totalEntries = 0

  for (const [version, pages] of Object.entries(auditLogData)) {
    versionIndex[version] = {}
    for (const [page, events] of Object.entries(pages)) {
      versionIndex[version][page] = events.map((event) => getEntryIndex(event))
      totalEntries += events.length
    }
  }

  // Write shared files
  const sharedDir = path.join(AUDIT_LOG_DATA_DIR, 'shared')
  if (!existsSync(sharedDir)) {
    await mkdirp(sharedDir)
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

main()
