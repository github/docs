#!/usr/bin/env node

// [start-readme]
//
// This script removes the static GraphQL, REST, and webhook files for any
// deprecated GHES versions.
//
// [end-readme]

import fs from 'fs'
import path from 'path'
import { rimraf } from 'rimraf'
import walk from 'walk-sync'

import { allVersions } from '#src/versions/lib/all-versions.js'
import { deprecated } from '#src/versions/lib/enterprise-server-releases.js'

const graphqlDataDir = path.join(process.cwd(), 'data/graphql')
const webhooksStaticDir = path.join(process.cwd(), 'src/webhooks/data')
const graphqlStaticDir = path.join(process.cwd(), 'src/graphql/data')
const restDecoratedDir = path.join(process.cwd(), 'src/rest/data')
const ghesReleaseNotesDir = 'data/release-notes/enterprise-server'

const supportedEnterpriseVersions = Object.values(allVersions).filter(
  (v) => v.plan === 'enterprise-server',
)

// GHES release notes
const deprecatedVersionsHyphenated = deprecated.map((v) => v.replace(/\./g, '-'))
walk(ghesReleaseNotesDir)
  // Only directories end with a /
  .filter((file) => file.endsWith('/'))
  // Check if the directory name contains a deprecated GHES version
  .filter((dir) => deprecatedVersionsHyphenated.some((version) => dir.includes(version)))
  // Remove the directory
  .map((dir) => rimraf.sync(path.join(ghesReleaseNotesDir, dir)))

// webhooks and GraphQL
const supportedMiscVersions = supportedEnterpriseVersions.map((v) => v.miscVersionName)
// The miscBaseName is the same for all GHES versions (currently `ghes-`), so we can just grab the first one
const miscBaseName = supportedEnterpriseVersions.map((v) => v.miscBaseName)[0]

;[graphqlDataDir, graphqlStaticDir, webhooksStaticDir].forEach((dir) => {
  removeFiles(dir, miscBaseName, supportedMiscVersions)
})

// REST
const supportedOpenApiVersions = supportedEnterpriseVersions.map((v) => v.openApiVersionName)
// The openApiBaseName is the same for all GHES versions (currently `ghes-`), so we can just grab the first one
const openApiBaseName = supportedEnterpriseVersions.map((v) => v.openApiBaseName)[0]

;[restDecoratedDir].forEach((dir) => {
  removeFiles(dir, openApiBaseName, supportedOpenApiVersions)
})

function removeFiles(dir, baseName, supportedVersions) {
  fs.readdirSync(dir)
    .filter((file) => file.includes(baseName))
    .filter((file) => supportedVersions.every((version) => !file.includes(version)))
    .forEach((file) => {
      const fullPath = path.join(dir, file)
      console.log(`removing ${fullPath}`)
      rimraf.sync(fullPath)
    })
}
