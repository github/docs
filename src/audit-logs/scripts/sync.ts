// Syncs audit log event data from github/audit-log-allowlists into per-version
// page JSON and shared files.
// Requires GITHUB_TOKEN.
import { existsSync } from 'fs'
import { mkdir, readFile, writeFile } from 'fs/promises'
import path from 'path'

import { filterByAllowlistValues, filterAndUpdateGhesDataByAllowlistValues } from '../lib/index'
import { writeDeduplicatedAuditLogData } from '../lib/deduplicate'
import { getContents, getCommitSha } from '@/workflows/git-utils'
import { latest, latestStable, releaseCandidate } from '@/versions/lib/enterprise-server-releases'
import { loadPages, loadPageMap } from '@/frame/lib/page-data'
import loadRedirects from '@/redirects/lib/precompile'
import type { AuditLogEventT, VersionedAuditLogData } from '../types'

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
  const owner = 'github'
  const repo = 'audit-log-allowlists'
  const ref = 'main'
  const schemaFilePath = 'data/schema.json'
  const schemaEvents = JSON.parse(await getContents(owner, repo, ref, schemaFilePath))
  const mainSha = await getCommitSha(owner, repo, `heads/${ref}`)

  // fields.json supplies global audit log fields unless a field is feature-gated.
  const fieldsFilePath = 'allowlists/fields.json'
  const fieldsData = JSON.parse(await getContents(owner, repo, ref, fieldsFilePath))

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

  console.log('Loading pages and redirects for title resolution...')
  const pageList = await loadPages(undefined, ['en'])
  const pages = await loadPageMap(pageList)
  const redirects = await loadRedirects(pageList)
  const titleContext = { pages, redirects }

  const auditLogData: VersionedAuditLogData = {}

  const filter = (allowListValues: string | string[], currentEvents: AuditLogEventT[] = []) =>
    filterByAllowlistValues({
      eventsToCheck: schemaEvents,
      allowListValues,
      currentEvents,
      pipelineConfig,
      titleContext,
      globalFields,
    })
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

  // GHES data is keyed by concrete ghes-X.Y versions, not one auditLogData.ghes bucket.
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

  // Sort after filtering because allowlist processing order does not match page display order.
  for (const pageEventData of Object.values(auditLogData)) {
    for (const events of Object.values(pageEventData)) {
      events.sort((e1, e2) => {
        // Ignore punctuation so org.accept_business_invitation sorts before org_secret_scanning_custom_pattern.update.
        const a1 = e1.action.replace(/[_.]/g, ' ')
        const a2 = e2.action.replace(/[_.]/g, ' ')
        return a1.localeCompare(a2)
      })
    }
  }

  // Reuse latest stable GHES data when a release candidate has no audit-log-allowlists data yet.
  if (latest === releaseCandidate && !auditLogData[`ghes-${releaseCandidate}`]) {
    auditLogData[`ghes-${releaseCandidate}`] = structuredClone(auditLogData[`ghes-${latestStable}`])
  }

  console.log(`\n▶️  Generating audit log data files...\n`)

  for (const version of Object.keys(auditLogData)) {
    const auditLogVersionDirPath = path.join(AUDIT_LOG_DATA_DIR, version)

    if (!existsSync(auditLogVersionDirPath)) {
      await mkdir(auditLogVersionDirPath, { recursive: true })
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

  await writeDeduplicatedAuditLogData(auditLogData)
}

main()
