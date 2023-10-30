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

import { getContents, getCommitSha } from '../../../script/helpers/git-utils.js'

if (!process.env.GITHUB_TOKEN) {
  throw new Error('GITHUB_TOKEN environment variable must be set to run this script')
}

const AUDIT_LOG_DATA_DIR = 'src/audit-logs/data'

// the 3 different audit log types which correspond to audit log event pages
const auditLogTypes = ['user', 'organization', 'enterprise']
const versions = ['fpt', 'ghec', 'ghes']

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
const auditLogData = {}
versions.forEach((version) => {
  auditLogData[version] = {}

  auditLogTypes.forEach((type) => {
    auditLogData[version][type] = []
  })
})

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

  // update pipeline config data
  const configFilepath = `src/audit-logs/lib/config.json`
  const configData = JSON.parse(await readFile(configFilepath, 'utf8'))
  configData.sha = mainSha
  await writeFile(configFilepath, JSON.stringify(configData, null, 2))

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
  schemaEvents
    .filter((event) => event._allowlists !== null)
    .forEach((event) => {
      const minimalEvent = {
        action: event.action,
        description: event.description,
        docs_reference_links: event.docs_reference_links,
      }

      // FPT events
      if (event._allowlists.includes('user')) {
        auditLogData.fpt.user.push(minimalEvent)
      }
      if (event._allowlists.includes('organization')) {
        auditLogData.fpt.organization.push(minimalEvent)
      }

      // GHES events
      if (event._allowlists.includes('business_server')) {
        auditLogData.ghes.enterprise.push(minimalEvent)

        if (event._allowlists.includes('user')) {
          auditLogData.ghes.user.push(minimalEvent)
        }

        if (event._allowlists.includes('organization')) {
          auditLogData.ghes.organization.push(minimalEvent)
        }
      }

      // GHEC events
      if (event._allowlists.includes('business')) {
        auditLogData.ghec.enterprise.push(minimalEvent)

        if (event._allowlists.includes('organization')) {
          auditLogData.ghec.organization.push(minimalEvent)
        }

        if (event._allowlists.includes('user')) {
          auditLogData.ghec.user.push(minimalEvent)
        }
      }

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
      if (event._allowlists.includes('business_api_only')) {
        if (!auditLogData.ghec.enterprise.find((e) => e.action === event.action)) {
          auditLogData.ghec.enterprise.push(minimalEvent)
        }

        if (
          Object.keys(event.ghes).length > 0 &&
          !auditLogData.ghes.enterprise.find((e) => e.action === event.action)
        ) {
          auditLogData.ghes.enterprise.push(minimalEvent)
        }
      }

      if (event._allowlists.includes('org_api_only')) {
        if (!auditLogData.ghec.organization.find((e) => e.action === event.action)) {
          auditLogData.fpt.organization.push(minimalEvent)
          auditLogData.ghec.organization.push(minimalEvent)
        }

        if (
          Object.keys(event.ghes).length > 0 &&
          !auditLogData.ghes.organization.find((e) => e.action === event.action)
        ) {
          auditLogData.ghes.organization.push(minimalEvent)
        }
      }

      // For the API only events we append an extra note to the description
      // that explains the event is api only.  It's better to do it here instead
      // of in the schema where it would have to be updated and maintained manually.
      //
      // Some events have both API only allowlist values so we make sure to append
      // to the description only once.
      if (
        event._allowlists.includes('org_api_only') ||
        event._allowlists.includes('business_api_only')
      ) {
        minimalEvent.description +=
          ' Only visible through the REST API. Not visible in the web UI or CSV/JSON exports.'
      }
    })

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
      }
    })
  }
}

main()
