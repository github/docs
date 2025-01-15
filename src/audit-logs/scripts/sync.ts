#!/usr/bin/env node

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

import { filterByAllowlistValues, filterAndUpdateGhesDataByAllowlistValues } from '../lib/index.js'
import { getContents, getCommitSha } from '@/workflows/git-utils.js'
import {
  latest,
  latestStable,
  releaseCandidate,
} from '@/versions/lib/enterprise-server-releases.js'
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

  const configFilepath = `src/audit-logs/lib/config.json`
  const pipelineConfig = JSON.parse(await readFile(configFilepath, 'utf8'))
  pipelineConfig.sha = mainSha
  await writeFile(configFilepath, JSON.stringify(pipelineConfig, null, 2))

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
    filterByAllowlistValues(schemaEvents, allowListValues, currentEvents, pipelineConfig)
  // Wrapper around filterGhesByAllowlistValues() because we always need all the
  // schema events and pipeline config data.
  const filterAndUpdateGhes = (
    allowListValues: string,
    auditLogPage: string,
    currentEvents: VersionedAuditLogData,
  ) =>
    filterAndUpdateGhesDataByAllowlistValues(
      schemaEvents,
      allowListValues,
      currentEvents,
      pipelineConfig,
      auditLogPage,
    )

  auditLogData.fpt = {}
  auditLogData.fpt.user = filter('user')
  auditLogData.fpt.organization = filter(['organization', 'org_api_only'])

  auditLogData.ghec = {}
  auditLogData.ghec.user = filter('user')
  auditLogData.ghec.organization = filter('organization')
  auditLogData.ghec.organization = filter('org_api_only', auditLogData.ghec.organization)
  auditLogData.ghec.enterprise = filter('business')
  auditLogData.ghec.enterprise = filter('business_api_only', auditLogData.ghec.enterprise)

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

  filterAndUpdateGhes('business', AUDIT_LOG_PAGES.ENTERPRISE, ghesVersionsAuditLogData)
  filterAndUpdateGhes('business_api_only', AUDIT_LOG_PAGES.ENTERPRISE, ghesVersionsAuditLogData)
  filterAndUpdateGhes('user', AUDIT_LOG_PAGES.USER, ghesVersionsAuditLogData)
  filterAndUpdateGhes('organization', AUDIT_LOG_PAGES.ORGANIZATION, ghesVersionsAuditLogData)
  filterAndUpdateGhes('org_api_only', AUDIT_LOG_PAGES.ORGANIZATION, ghesVersionsAuditLogData)
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

    Object.values(AUDIT_LOG_PAGES).forEach(async (page) => {
      const auditLogSchemaFilePath = path.join(auditLogVersionDirPath, `${page}.json`)

      if (auditLogData[version][page]) {
        await writeFile(
          auditLogSchemaFilePath,
          JSON.stringify(auditLogData[version][page], null, 2),
        )
        console.log(`✅ Wrote ${auditLogSchemaFilePath}`)
      }
    })
  }
}

main()
