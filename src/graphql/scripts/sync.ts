// @ts-nocheck
import fs from 'fs/promises'
import { appendFileSync } from 'fs'
import path from 'path'
import { mkdirp } from 'mkdirp'
import yaml from 'js-yaml'
import { execSync } from 'child_process'
import { getContents, hasMatchingRef } from '@/workflows/git-utils'
import { allVersions } from '@/versions/lib/all-versions'
import processPreviews from './utils/process-previews'
import processUpcomingChanges from './utils/process-upcoming-changes'
import processSchemas from './utils/process-schemas'
import {
  prependDatedEntry,
  createChangelogEntry,
  getIgnoredChangesSummary,
} from './build-changelog'

const graphqlStaticDir = 'src/graphql/data'
const dataFilenames = JSON.parse(await fs.readFile('src/graphql/scripts/utils/data-filenames.json'))

// check for required PAT
if (!process.env.GITHUB_TOKEN) {
  throw new Error('Error! You must have a GITHUB_TOKEN set in an .env file to run this script.')
}

const versionsToBuild = Object.keys(allVersions)

main()

const allIgnoredChanges = []

async function main() {
  for (const version of versionsToBuild) {
    // Get the relevant GraphQL name  for the current version
    // For example, free-pro-team@latest corresponds to dotcom,
    // enterprise-server@2.22 corresponds to ghes-2.22.
    const graphqlVersion = allVersions[version].openApiVersionName

    // 1. UPDATE PREVIEWS
    const previewsPath = getDataFilepath('previews', graphqlVersion)
    const safeForPublicPreviews = yaml.load(await getRemoteRawContent(previewsPath, graphqlVersion))
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
    const previewFilePath = getDataFilepath('schemas', graphqlVersion)
    const previousSchemaString = await fs.readFile(previewFilePath, 'utf8')
    const latestSchema = await getRemoteRawContent(previewFilePath, graphqlVersion)
    await updateFile(previewFilePath, latestSchema)
    const schemaJsonPerVersion = await processSchemas(latestSchema, safeForPublicPreviews) // This is slow!
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

      // Capture ignored changes for potential workflow notifications
      const ignoredSummary = getIgnoredChangesSummary()
      if (ignoredSummary) {
        allIgnoredChanges.push({
          version: graphqlVersion,
          ...ignoredSummary,
        })
      }
    }
  }

  // Ensure the YAML linter runs before checkinging in files
  execSync('npx prettier -w "**/*.{yml,yaml}"')

  // Output ignored changes for GitHub Actions
  if (allIgnoredChanges.length > 0) {
    const totalIgnored = allIgnoredChanges.reduce((sum, item) => sum + item.totalCount, 0)
    const uniqueTypes = [
      ...new Set(allIgnoredChanges.flatMap((item) => item.types.map((t) => t.type))),
    ]

    console.log(
      '::notice title=GraphQL Ignored Changes::Found ignored change types that may need review',
    )

    // Write outputs to GitHub Actions output file
    if (process.env.GITHUB_OUTPUT) {
      appendFileSync(
        process.env.GITHUB_OUTPUT,
        `ignored-changes=${JSON.stringify(allIgnoredChanges)}\n`,
      )
      appendFileSync(process.env.GITHUB_OUTPUT, `ignored-count=${totalIgnored}\n`)
      appendFileSync(process.env.GITHUB_OUTPUT, `ignored-types=${uniqueTypes.join(', ')}\n`)
    }
  }
}

// get latest from github/github
async function getRemoteRawContent(filepath, graphqlVersion) {
  const options = {
    owner: 'github',
    repo: 'github',
  }

  // find the relevant branch in github/github and set it as options.ref
  let t0 = new Date()
  options.ref = await getBranchAsRef(options, graphqlVersion)
  let took = new Date() - t0
  console.log(`Got ref (${options.ref}) for '${graphqlVersion}'. Took ${formatTime(took)}`)

  // add the filepath to the options so we can get the contents of the file
  options.path = `config/${path.basename(filepath)}`

  t0 = new Date()
  const contents = await getContents(...Object.values(options))
  took = new Date() - t0
  console.log(`Got content for '${options.path}' (in ${options.ref}). Took ${formatTime(took)}`)

  return contents
}

// find the relevant filepath in src/graphql/scripts/util/data-filenames.json
function getDataFilepath(id, graphqlVersion) {
  const versionType = getVersionName(graphqlVersion)

  // for example, dataFilenames['schema']['ghes'] = schema.docs-enterprise.graphql
  const filename = dataFilenames[id][versionType]

  return path.join(graphqlStaticDir, graphqlVersion, filename)
}

async function getBranchAsRef(options, graphqlVersion, branch = false) {
  const versionType = getVersionName(graphqlVersion)
  const defaultBranch = 'master'

  const branches = {
    fpt: defaultBranch,
    ghec: defaultBranch,
    ghes: `enterprise-${graphqlVersion.replace('ghes-', '')}-release`,
  }

  // the first time this runs, it uses the branch found for the version above
  if (!branch) branch = branches[versionType]

  // set the branch as the ref
  const ref = `heads/${branch}`

  // check whether the branch can be found in github/github
  const exists = await hasMatchingRef(...Object.values(options), ref)

  // if ref is not found, the branch cannot be found, so try a fallback
  if (!exists) {
    const fallbackBranch = defaultBranch
    return await getBranchAsRef(options, graphqlVersion, fallbackBranch)
  }
  return ref
}

// given a GraphQL version like `ghes-2.22`, return `ghes`;
// given a GraphQL version like `dotcom`, return as is
function getVersionName(graphqlVersion) {
  return graphqlVersion.split('-')[0]
}

async function updateFile(filepath, content) {
  console.log(`Updating file ${filepath}`)
  await mkdirp(path.dirname(filepath))
  return fs.writeFile(filepath, content, 'utf8')
}

async function updateStaticFile(json, filepath) {
  console.log(`Updating static file ${filepath}`)
  const jsonString = JSON.stringify(json, null, 2)
  return updateFile(filepath, jsonString)
}

function formatTime(ms) {
  if (ms < 1000) {
    return `${ms.toFixed(0)}ms`
  }
  const seconds = ms / 1000
  if (seconds > 60) {
    return `${Math.round(seconds / 60)}m${Math.round(seconds % 60)}s`
  }
  return `${seconds.toFixed(1)}s`
}
