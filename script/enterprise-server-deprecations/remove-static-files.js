#!/usr/bin/env node

// [start-readme]
//
// This script removes the static GraphQL, REST, and webhook files for any deprecated GHES versions.
//
// [end-readme]

import fs from 'fs'
import path from 'path'
import rimraf from 'rimraf'
import { allVersions } from '../../lib/all-versions.js'

const graphqlDataDir = path.join(process.cwd(), 'data/graphql')
const webhooksStaticDir = path.join(process.cwd(), 'lib/webhooks/static')
const graphqlStaticDir = path.join(process.cwd(), 'lib/graphql/static')
const restDecoratedDir = path.join(process.cwd(), 'lib/rest/static/decorated')
const restDereferencedDir = path.join(process.cwd(), 'lib/rest/static/dereferenced')
const lunrIndexDir = path.join(process.cwd(), 'lib/search/indexes')

const supportedEnterpriseVersions = Object.values(allVersions).filter(
  (v) => v.plan === 'enterprise-server'
)

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

;[restDecoratedDir, restDereferencedDir].forEach((dir) => {
  removeFiles(dir, openApiBaseName, supportedOpenApiVersions)
})

// Lunr
const lunrBaseName = 'github-docs-'
const supportedLunrVersions = Object.values(allVersions).map((v) =>
  v.miscVersionName.replace('ghes-', '')
)
removeFiles(lunrIndexDir, lunrBaseName, supportedLunrVersions)

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
