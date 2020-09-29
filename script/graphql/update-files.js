#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp').sync
const yaml = require('js-yaml')
const assert = require('assert')
const { execSync } = require('child_process')
const graphqlDataDir = path.join(process.cwd(), 'data/graphql')
const graphqlStaticDir = path.join(process.cwd(), 'lib/graphql/static')
const { getContents } = require('../../lib/git-utils')
const dataFilenames = require('./utils/data-filenames')
const { oldVersions } = require('../../lib/old-versions-utils')
const processPreviews = require('./utils/process-previews')
const processUpcomingChanges = require('./utils/process-upcoming-changes')
const processSchemas = require('./utils/process-schemas')
const prerenderObjects = require('./utils/prerender-objects')

// TODO this step is only required as long as we support GHE versions *OLDER THAN* 2.21
// as soon as 2.20 is deprecated on 2021-02-11, we can remove all graphql-ruby filtering
const removeHiddenMembersScript = path.join(__dirname, './utils/remove-hidden-schema-members.rb')

// optionally build only 'dotcom' or any GHE version by passing the number ('2.20')
// TODO need to update this to the new versions
// for now, fall back to the old versions for use in schema filenames
let versionsToBuild = oldVersions

if (process.argv.length === 3) {
  const version = process.argv[2]
  assert(oldVersions.includes(version), `'${version}' is not valid! must be one of: ${oldVersions}`)
  versionsToBuild = [version]
}

main()

async function main () {
  const previewsJson = {}
  const upcomingChangesJson = {}
  const prerenderedObjects = {}

  for (const version of versionsToBuild) {
    // 1. UPDATE PREVIEWS
    const previewsPath = getDataFilepath('previews', version)
    const safeForPublicPreviews = yaml.safeLoad(await getRemoteRawContent(previewsPath, version))
    updateFile(previewsPath, yaml.safeDump(safeForPublicPreviews))
    previewsJson[version] = processPreviews(safeForPublicPreviews)

    // 2. UPDATE UPCOMING CHANGES
    const upcomingChangesPath = getDataFilepath('upcomingChanges', version)
    const safeForPublicChanges = await getRemoteRawContent(upcomingChangesPath, version)
    updateFile(upcomingChangesPath, safeForPublicChanges)
    upcomingChangesJson[version] = await processUpcomingChanges(safeForPublicChanges)

    // 3. UPDATE SCHEMAS
    // note: schemas live in separate files per version
    const schemaPath = getDataFilepath('schemas', version)
    const latestSchema = await getRemoteRawContent(schemaPath, version)
    const safeForPublicSchema = removeHiddenMembers(schemaPath, latestSchema)
    updateFile(schemaPath, safeForPublicSchema)
    const schemaJsonPerVersion = await processSchemas(safeForPublicSchema, safeForPublicPreviews)
    updateStaticFile(schemaJsonPerVersion, path.join(graphqlStaticDir, `schema-${version}.json`))

    // 4. PRERENDER OBJECTS HTML
    // because the objects page is too big to render on page load
    prerenderedObjects[version] = await prerenderObjects(schemaJsonPerVersion)
  }

  updateStaticFile(previewsJson, path.join(graphqlStaticDir, 'previews.json'))
  updateStaticFile(upcomingChangesJson, path.join(graphqlStaticDir, 'upcoming-changes.json'))
  updateStaticFile(prerenderedObjects, path.join(graphqlStaticDir, 'prerendered-objects.json'))
}

// get latest from github/github
async function getRemoteRawContent (filepath, version) {
  const options = {
    owner: 'github',
    repo: 'github',
    ref: version === 'dotcom' ? 'master' : `enterprise-${version}-release`,
    path: `config/${path.basename(filepath)}`
  }

  return getContents(...Object.values(options))
}

function getDataFilepath (id, version) {
  return version === 'dotcom'
    ? path.join(graphqlDataDir, dataFilenames[id].dotcom)
    : path.join(graphqlDataDir, version, dataFilenames[id].enterprise)
}

function updateFile (filepath, content) {
  console.log(`fetching latest data to ${filepath}`)
  mkdirp(path.dirname(filepath))
  fs.writeFileSync(filepath, content, 'utf8')
}

function updateStaticFile (json, filepath) {
  const jsonString = JSON.stringify(json, null, 2)
  updateFile(filepath, jsonString)
}

// run Ruby script to remove featureFlagged directives and other hidden members
function removeHiddenMembers (schemaPath, latestSchema) {
  // have to write a temp file because the schema is too big to store in memory
  const tempSchemaFilePath = `${schemaPath}-TEMP`
  fs.writeFileSync(tempSchemaFilePath, latestSchema)
  const remoteClean = execSync(`${removeHiddenMembersScript} ${tempSchemaFilePath}`).toString()
  fs.unlinkSync(tempSchemaFilePath)

  return remoteClean
}
