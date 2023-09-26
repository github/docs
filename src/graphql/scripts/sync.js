#!/usr/bin/env node
import fs from 'fs/promises'
import path from 'path'
import { mkdirp } from 'mkdirp'
import yaml from 'js-yaml'
import { execSync } from 'child_process'
import { getContents, listMatchingRefs } from '../../../script/helpers/git-utils.js'
import { allVersions } from '#src/versions/lib/all-versions.js'
import processPreviews from './utils/process-previews.js'
import processUpcomingChanges from './utils/process-upcoming-changes.js'
import processSchemas from './utils/process-schemas.js'
import { prependDatedEntry, createChangelogEntry } from './build-changelog.js'

const graphqlDataDir = path.join(process.cwd(), 'data/graphql')
const graphqlStaticDir = path.join(process.cwd(), 'src/graphql/data')
const dataFilenames = JSON.parse(
  await fs.readFile(path.join(process.cwd(), './src/graphql/scripts/utils/data-filenames.json')),
)

// check for required PAT
if (!process.env.GITHUB_TOKEN) {
  throw new Error('Error! You must have a GITHUB_TOKEN set in an .env file to run this script.')
}

const versionsToBuild = Object.keys(allVersions)

main()

async function main() {
  for (const version of versionsToBuild) {
    // Get the relevant GraphQL name  for the current version
    // For example, free-pro-team@latest corresponds to dotcom,
    // enterprise-server@2.22 corresponds to ghes-2.22,
    // and github-ae@latest corresponds to ghae
    const graphqlVersion = allVersions[version].openApiVersionName

    // 1. UPDATE PREVIEWS
    const previewsPath = getDataFilepath('previews', graphqlVersion)
    const safeForPublicPreviews = yaml.load(await getRemoteRawContent(previewsPath, graphqlVersion))
    await updateFile(previewsPath, yaml.dump(safeForPublicPreviews))
    const previewsJson = processPreviews(safeForPublicPreviews)
    await updateStaticFile(
      previewsJson,
      path.join(graphqlStaticDir, graphqlVersion, 'previews.json'),
    )

    // 2. UPDATE UPCOMING CHANGES
    const upcomingChangesPath = getDataFilepath('upcomingChanges', graphqlVersion)
    const previousUpcomingChanges = yaml.load(await fs.readFile(upcomingChangesPath, 'utf8'))
    const safeForPublicChanges = await getRemoteRawContent(upcomingChangesPath, graphqlVersion)
    await updateFile(upcomingChangesPath, safeForPublicChanges)
    const upcomingChangesJson = await processUpcomingChanges(safeForPublicChanges)
    await updateStaticFile(
      upcomingChangesJson,
      path.join(graphqlStaticDir, graphqlVersion, 'upcoming-changes.json'),
    )

    // 3. UPDATE SCHEMAS
    // note: schemas live in separate files per version
    const schemaPath = getDataFilepath('schemas', graphqlVersion)
    const previousSchemaString = await fs.readFile(schemaPath, 'utf8')
    const latestSchema = await getRemoteRawContent(schemaPath, graphqlVersion)
    await updateFile(schemaPath, latestSchema)
    const schemaJsonPerVersion = await processSchemas(latestSchema, safeForPublicPreviews)
    await updateStaticFile(
      schemaJsonPerVersion,
      path.join(graphqlStaticDir, graphqlVersion, 'schema.json'),
    )

    // 4. UPDATE CHANGELOG
    if (allVersions[version].nonEnterpriseDefault) {
      // The changelog is only built for free-pro-team@latest
      const changelogEntry = await createChangelogEntry(
        previousSchemaString,
        latestSchema,
        safeForPublicPreviews,
        previousUpcomingChanges.upcoming_changes,
        yaml.load(safeForPublicChanges).upcoming_changes,
      )
      if (changelogEntry) {
        prependDatedEntry(
          changelogEntry,
          path.join(graphqlStaticDir, graphqlVersion, 'changelog.json'),
        )
      }
    }
  }

  // Ensure the YAML linter runs before checkinging in files
  execSync('npx prettier -w "**/*.{yml,yaml}"')
}

// get latest from github/github
async function getRemoteRawContent(filepath, graphqlVersion) {
  const options = {
    owner: 'github',
    repo: 'github',
  }

  // find the relevant branch in github/github and set it as options.ref
  await setBranchAsRef(options, graphqlVersion)

  // add the filepath to the options so we can get the contents of the file
  options.path = `config/${path.basename(filepath)}`

  return getContents(...Object.values(options))
}

// find the relevant filepath in src/graphql/scripts/util/data-filenames.json
function getDataFilepath(id, graphqlVersion) {
  const versionType = getVersionType(graphqlVersion)

  // for example, dataFilenames['schema']['ghes'] = schema.docs-enterprise.graphql
  const filename = dataFilenames[id][versionType]

  // dotcom files live at the root of data/graphql
  // non-dotcom files live in data/graphql/<version_subdir>
  const dataSubdir = graphqlVersion === 'fpt' ? '' : graphqlVersion

  return path.join(graphqlDataDir, dataSubdir, filename)
}

async function setBranchAsRef(options, graphqlVersion, branch = false) {
  const versionType = getVersionType(graphqlVersion)
  const defaultBranch = 'master'

  const branches = {
    fpt: defaultBranch,
    ghec: defaultBranch,
    ghes: `enterprise-${graphqlVersion.replace('ghes-', '')}-release`,
    // TODO confirm the below is accurate after the release branch is created
    ghae: 'github-ae-release',
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
function getVersionType(graphqlVersion) {
  return graphqlVersion.split('-')[0]
}

async function updateFile(filepath, content) {
  console.log(`fetching latest data to ${filepath}`)
  await mkdirp(path.dirname(filepath))
  return fs.writeFile(filepath, content, 'utf8')
}

async function updateStaticFile(json, filepath) {
  const jsonString = JSON.stringify(json, null, 2)
  return updateFile(filepath, jsonString)
}
