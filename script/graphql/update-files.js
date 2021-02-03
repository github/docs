#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp').sync
const yaml = require('js-yaml')
const { execSync } = require('child_process')
const graphqlDataDir = path.join(process.cwd(), 'data/graphql')
const graphqlStaticDir = path.join(process.cwd(), 'lib/graphql/static')
const { getContents, listMatchingRefs } = require('../helpers/git-utils')
const dataFilenames = require('./utils/data-filenames')
const allVersions = require('../../lib/all-versions')
const processPreviews = require('./utils/process-previews')
const processUpcomingChanges = require('./utils/process-upcoming-changes')
const processSchemas = require('./utils/process-schemas')
const prerenderObjects = require('./utils/prerender-objects')
const { prependDatedEntry, createChangelogEntry } = require('./build-changelog')

// check for required PAT
if (!process.env.GITHUB_TOKEN) {
  console.error('Error! You must have a GITHUB_TOKEN set in an .env file to run this script.')
  process.exit(1)
}

// check for required Ruby gems (see note below about why this is needed)
try {
  execSync('gem which graphql')
} catch (err) {
  console.error('\nYou need to run: bundle install')
  process.exit(1)
}

// TODO this step is only required as long as we support GHE versions *OLDER THAN* 2.21
// as soon as 2.20 is deprecated on 2021-02-11, we can remove all graphql-ruby filtering
const removeHiddenMembersScript = path.join(__dirname, './utils/remove-hidden-schema-members.rb')

const versionsToBuild = Object.keys(allVersions)

main()

async function main () {
  const previewsJson = {}
  const upcomingChangesJson = {}
  const prerenderedObjects = {}

  for (const version of versionsToBuild) {
    // Get the relevant GraphQL name  for the current version
    // For example, free-pro-team@latest corresponds to dotcom,
    // enterprise-server@2.22 corresponds to ghes-2.22,
    // and github-ae@latest corresponds to ghae
    const graphqlVersion = allVersions[version].miscVersionName

    // 1. UPDATE PREVIEWS
    const previewsPath = getDataFilepath('previews', graphqlVersion)
    const safeForPublicPreviews = yaml.safeLoad(await getRemoteRawContent(previewsPath, graphqlVersion))
    updateFile(previewsPath, yaml.safeDump(safeForPublicPreviews))
    previewsJson[graphqlVersion] = processPreviews(safeForPublicPreviews)

    // 2. UPDATE UPCOMING CHANGES
    const upcomingChangesPath = getDataFilepath('upcomingChanges', graphqlVersion)
    const previousUpcomingChanges = yaml.safeLoad(fs.readFileSync(upcomingChangesPath, 'utf8'))
    const safeForPublicChanges = await getRemoteRawContent(upcomingChangesPath, graphqlVersion)
    updateFile(upcomingChangesPath, safeForPublicChanges)
    upcomingChangesJson[graphqlVersion] = await processUpcomingChanges(safeForPublicChanges)

    // 3. UPDATE SCHEMAS
    // note: schemas live in separate files per version
    const schemaPath = getDataFilepath('schemas', graphqlVersion)
    const previousSchemaString = fs.readFileSync(schemaPath, 'utf8')
    const latestSchema = await getRemoteRawContent(schemaPath, graphqlVersion)
    const safeForPublicSchema = removeHiddenMembers(schemaPath, latestSchema)
    updateFile(schemaPath, safeForPublicSchema)
    const schemaJsonPerVersion = await processSchemas(safeForPublicSchema, safeForPublicPreviews)
    updateStaticFile(schemaJsonPerVersion, path.join(graphqlStaticDir, `schema-${graphqlVersion}.json`))

    // 4. PRERENDER OBJECTS HTML
    // because the objects page is too big to render on page load
    prerenderedObjects[graphqlVersion] = await prerenderObjects(schemaJsonPerVersion, version)

    // 5. UPDATE CHANGELOG
    if (allVersions[version].nonEnterpriseDefault) {
      // The Changelog is only build for free-pro-team@latest
      const changelogEntry = await createChangelogEntry(
        previousSchemaString,
        safeForPublicSchema,
        safeForPublicPreviews,
        previousUpcomingChanges.upcoming_changes,
        yaml.safeLoad(safeForPublicChanges).upcoming_changes
      )
      if (changelogEntry) {
        prependDatedEntry(changelogEntry, path.join(process.cwd(), 'lib/graphql/static/changelog.json'))
      }
    }
  }

  updateStaticFile(previewsJson, path.join(graphqlStaticDir, 'previews.json'))
  updateStaticFile(upcomingChangesJson, path.join(graphqlStaticDir, 'upcoming-changes.json'))
  updateStaticFile(prerenderedObjects, path.join(graphqlStaticDir, 'prerendered-objects.json'))

  // Ensure the YAML linter runs before checkinging in files
  execSync('npx prettier -w "**/*.{yml,yaml}"')
}

// get latest from github/github
async function getRemoteRawContent (filepath, graphqlVersion) {
  const options = {
    owner: 'github',
    repo: 'github'
  }

  // find the relevant branch in github/github and set it as options.ref
  await setBranchAsRef(options, graphqlVersion)

  // add the filepath to the options so we can get the contents of the file
  options.path = `config/${path.basename(filepath)}`

  return getContents(...Object.values(options))
}

// find the relevant filepath in script/graphql/utils/data-filenames.json
function getDataFilepath (id, graphqlVersion) {
  const versionType = getVersionType(graphqlVersion)

  // for example, dataFilenames['schema']['ghes'] = schema.docs-enterprise.graphql
  const filename = dataFilenames[id][versionType]

  // dotcom files live at the root of data/graphql
  // non-dotcom files live in data/graphql/<version_subdir>
  const dataSubdir = graphqlVersion === 'dotcom' ? '' : graphqlVersion

  return path.join(graphqlDataDir, dataSubdir, filename)
}

async function setBranchAsRef (options, graphqlVersion, branch = false) {
  const versionType = getVersionType(graphqlVersion)
  const defaultBranch = 'master'

  const branches = {
    dotcom: defaultBranch,
    ghes: `enterprise-${graphqlVersion.replace('ghes-', '')}-release`,
    // TODO confirm the below is accurate after the release branch is created
    ghae: 'github-ae-release'
  }

  // the first time this runs, it uses the branch found for the version above
  if (!branch) branch = branches[versionType]

  // set the branch as the ref
  options.ref = `heads/${branch}`

  // check whether the branch can be found in github/github
  const foundRefs = await listMatchingRefs(...Object.values(options))

  // if foundRefs array is empty, the branch cannot be found, so try a fallback
  if (!foundRefs.length) {
    const fallbackBranch = defaultBranch
    await setBranchAsRef(options, graphqlVersion, fallbackBranch)
  }
}

// given a GraphQL version like `ghes-2.22`, return `ghes`;
// given a GraphQL version like `ghae` or `dotcom`, return as is
function getVersionType (graphqlVersion) {
  return graphqlVersion.split('-')[0]
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
