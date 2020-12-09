#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf').sync
const allVersions = require('../../lib/all-versions')

const graphqlDataDir = path.join(process.cwd(), 'data/graphql')
const webhooksStaticDir = path.join(process.cwd(), 'lib/webhooks/static')
const graphqlStaticDir = path.join(process.cwd(), 'lib/graphql/static')
const restDecoratedDir = path.join(process.cwd(), 'lib/rest/static/decorated')
const restDereferencedDir = path.join(process.cwd(), 'lib/rest/static/dereferenced')

// [start-readme]
//
// This script removes the static GraphQL, REST, and webhook files for any deprecated GHES versions.
//
// [end-readme]

const supportedEnterpriseVersions = Object.values(allVersions).filter(v => v.plan === 'enterprise-server')

// webhooks and GraphQL
const supportedMiscVersions = supportedEnterpriseVersions.map(v => v.miscVersionName)
// The miscBaseName is the same for all GHES versions (currently `ghes-`), so we can just grab the first one
const miscBaseName = supportedEnterpriseVersions.map(v => v.miscBaseName)[0]

;[graphqlDataDir, graphqlStaticDir, webhooksStaticDir].forEach(dir => {
  removeFiles(dir, miscBaseName, supportedMiscVersions)
})

// REST
const supportedOpenApiVersions = supportedEnterpriseVersions.map(v => v.openApiVersionName)
// The openApiBaseName is the same for all GHES versions (currently `ghes-`), so we can just grab the first one
const openApiBaseName = supportedEnterpriseVersions.map(v => v.openApiBaseName)[0]

;[restDecoratedDir, restDereferencedDir].forEach(dir => {
  removeFiles(dir, openApiBaseName, supportedOpenApiVersions)
})

function removeFiles (dir, baseName, supportedVersions) {
  fs.readdirSync(dir)
    .filter(file => file.includes(baseName))
    .filter(file => supportedVersions.every(version => !file.includes(version)))
    .forEach(file => {
      const fullPath = path.join(dir, file)
      console.log(`removing ${fullPath}`)
      rimraf(fullPath)
    })
}
