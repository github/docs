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

import { getContents, getCommitSha } from '#src/workflows/git-utils.js'

if (!process.env.GITHUB_TOKEN) {
  throw new Error('GITHUB_TOKEN environment variable must be set to run this script')
}

const AUDIT_LOG_DATA_DIR = 'src/audit-logs/data'

// the 3 different audit log types which correspond to audit log event pages
const auditLogTypes = ['user', 'organization', 'enterprise']

// store an array of audit log event data keyed by version and audit log type,
// array will look like:
//
// [
//  {
//    "action": "repo.create",
//    "description": "description",
//    "docs_reference_link": "reference link",
//  },
//  ...
// ]
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

  const auditLogData = {}
  // Wrapper around filterByAllowlistValues() because we always need all the
  // schema events and pipeline config data.
  const filter = (
    allowListValues,
    filterConfig = { filterFn: filterOr, ghesOnly: false },
    currentEvents = [],
  ) =>
    filterByAllowlistValues(
      schemaEvents,
      currentEvents,
      allowListValues,
      pipelineConfig,
      filterConfig,
    )

  // translate allowLists values into the versions and audit log page the event
  // belongs to -- for versions:
  //
  // * user => fpt
  // * business => ghec
  // * business_server => ghes
  // * organization => fpt
  //
  // for audit log pages:
  //
  // * user => user page
  // * business_server => enterprise page
  // * organization => organization page
  //
  // API only events have either `business_api_only` or `org_api_only`
  // allowlist values.
  //
  // * business_api_only: goes to the enterprise events page and is versioned
  // for GHEC.  If the event has any `ghes` versions, also verisoned for GHES.
  // * org_api_only: goes to the organzation events page and is versioned
  // for fpt and GHEC.  If the event has any `ghes` versions, also versioned
  // for GHES.
  //
  // There's currently one case (`org.sso_response`) where an event is an
  // api only event but also has a non-api-only allowlist value so that's
  // why we have the checks to prevent adding the event twice.
  auditLogData.fpt = {}
  auditLogData.fpt.user = filter('user')
  auditLogData.fpt.organization = filter(['organization', 'org_api_only'])

  auditLogData.ghes = {}
  auditLogData.ghes.enterprise = filter('business_server')
  auditLogData.ghes.enterprise = filter(
    'business_api_only',
    {
      filterFn: filterOr,
      ghesOnly: true,
    },
    auditLogData.ghes.enterprise,
  )
  auditLogData.ghes.user = filter(['business_server', 'user'], {
    filterFn: filterAnd,
    ghesOnly: false,
  })
  auditLogData.ghes.organization = filter(['business_server', 'organization'], {
    filterFn: filterAnd,
    ghesOnly: false,
  })
  auditLogData.ghes.organization = filter(
    'org_api_only',
    {
      filterFn: filterOr,
      ghesOnly: true,
    },
    auditLogData.ghes.organization,
  )

  auditLogData.ghec = {}
  auditLogData.ghec.user = filter(['business', 'user'], {
    filterFn: filterAnd,
    ghesOnly: false,
  })
  auditLogData.ghec.organization = filter(['business', 'organization'], {
    filterFn: filterAnd,
    ghesOnly: false,
  })
  auditLogData.ghec.organization = filter(
    'org_api_only',
    { filterFn: filterOr, ghesOnly: false },
    auditLogData.ghec.organization,
  )
  auditLogData.ghec.enterprise = filter('business')
  auditLogData.ghec.enterprise = filter(
    'business_api_only',
    { filterFn: filterOr, ghesOnly: false },
    auditLogData.ghec.enterprise,
  )

  // We don't maintain the order of events as we process them so after filtering
  // all the events based on their allowlist values, we sort them so they're in
  // order for display on the audit log pages.
  for (const pageType of Object.values(auditLogData)) {
    for (const events of Object.values(pageType)) {
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

    auditLogTypes.forEach(async (type) => {
      const auditLogSchemaFilePath = path.join(auditLogVersionDirPath, `${type}.json`)

      if (auditLogData[version][type]) {
        await writeFile(
          auditLogSchemaFilePath,
          JSON.stringify(auditLogData[version][type], null, 2),
        )
        console.log(`✅ Wrote ${auditLogSchemaFilePath}`)
      }
    })
  }
}

// Filters audit log events based on allowlist values.
//
// * eventsToCheck: events to consider
// * currentEvents: events already collected
// * allowListvalues: allowlist values to filter by
// * pipelineConfig: audit log pipeline config data
// * filterFn: callback to filter an event by allowlist values
// * ghesOnly: whether or not we should check an event is versioned for ghes
//   as an additional filter check
function filterByAllowlistValues(
  eventsToCheck,
  currentEvents,
  allowListValues,
  pipelineConfig,
  filterConfig = {
    filterFn: filterOr,
    ghesOnly: false,
  },
) {
  if (!Array.isArray(allowListValues)) allowListValues = [allowListValues]
  if (!currentEvents) currentEvents = []

  const seen = new Set(currentEvents.map((event) => event.action))
  const minimalEvents = []

  for (const event of eventsToCheck) {
    if (event._allowlists === null) continue

    if (filterConfig.filterFn(event._allowlists, allowListValues)) {
      if (seen.has(event.action)) continue
      seen.add(event.action)

      const minimal = {
        action: event.action,
        description: event.description,
        docs_reference_links: event.docs_reference_links,
      }

      if (
        event._allowlists.includes('org_api_only') ||
        event._allowlists.includes('business_api_only')
      ) {
        minimal.description += ` ${pipelineConfig.apiOnlyEventsAdditionalDescription}`
      }

      if (filterConfig.ghesOnly) {
        if (Object.keys(event.ghes).length > 0) {
          minimalEvents.push(minimal)
        }
      } else {
        minimalEvents.push(minimal)
      }
    }
  }
  return [...minimalEvents, ...currentEvents]
}

function filterOr(array, conditions) {
  return conditions.some((condition) => array.includes(condition))
}

function filterAnd(array, conditions) {
  return conditions.every((condition) => array.includes(condition))
}

main()
