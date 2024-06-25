#!/usr/bin/env node

// [start-readme]
//
// Run this script to generate the updated data files for the rest,
// github-apps, and webhooks automated pipelines.
//
// [end-readme]

import { readdir, copyFile, readFile, writeFile, rename } from 'fs/promises'
import path from 'path'
import { program, Option } from 'commander'
import { execSync } from 'child_process'
import { rimraf } from 'rimraf'
import { mkdirp } from 'mkdirp'
import { fileURLToPath } from 'url'
import walk from 'walk-sync'
import { existsSync } from 'fs'

import { syncRestData, getOpenApiSchemaFiles } from './utils/sync.js'
import { validateVersionsOptions } from './utils/get-openapi-schemas.js'
import { allVersions } from '#src/versions/lib/all-versions.js'
import { syncWebhookData } from '../../webhooks/scripts/sync.js'
import { syncGitHubAppsData } from '../../github-apps/scripts/sync.js'
import { syncRestRedirects } from './utils/get-redirects.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const TEMP_OPENAPI_DIR = path.join(__dirname, '../../../rest-api-description/openApiTemp')
const TEMP_BUNDLED_OPENAPI_DIR = path.join(TEMP_OPENAPI_DIR, 'bundled')
const GITHUB_REP_DIR = '../github'
const REST_API_DESCRIPTION_ROOT = 'rest-api-description'
const REST_DESCRIPTION_DIR = path.join(REST_API_DESCRIPTION_ROOT, 'descriptions-next')
const VERSION_NAMES = JSON.parse(await readFile('src/rest/lib/config.json', 'utf8')).versionMapping
const noConfig = ['rest-redirects']

program
  .description('Update rest, webhooks, and github-apps automated pipeline data files.')
  .addOption(
    new Option(
      '-o, --output [docs-pipeline...]',
      'A list of docs pipelines to sync from the OpenAPI schema, separated by a space. Ex. `-o github-apps rest webhooks`.',
    )
      .choices(['rest', 'github-apps', 'webhooks', 'rest-redirects'])
      .default('rest', 'rest'),
  )
  .addOption(
    new Option(
      '-s, --source-repo <repo>',
      `The source repository to get the dereferenced files from. When the source repo is ${REST_API_DESCRIPTION_ROOT}, the bundler is not run to generate the source dereferenced OpenAPI files because the ${REST_API_DESCRIPTION_ROOT} repo already contains them.`,
    )
      .choices(['github', REST_API_DESCRIPTION_ROOT])
      .default('github', 'github'),
  )
  .option(
    '-v --versions [VERSIONS...]',
    'A list of undeprecated, published versions to build, separated by a space. Example `-v ghes-3.1` or `-v api.github.com github.ae`',
  )
  .option('-d --include-deprecated', 'Includes schemas that are marked as `deprecated: true`')
  .option(
    '-u --include-unpublished',
    'Includes operations that are marked as `published: false`. Does not include nodes that are marked as `x-unpublished`.',
  )
  .option('-n --next', 'Generate the next OpenAPI calendar-date version.')
  .parse(process.argv)

const { versions, includeUnpublished, includeDeprecated, next, output, sourceRepo } = program.opts()

const sourceRepoDirectory = sourceRepo === 'github' ? GITHUB_REP_DIR : REST_API_DESCRIPTION_ROOT

main()

async function main() {
  const pipelines = Array.isArray(output) ? output : [output]
  await validateInputParameters()
  await rimraf(TEMP_OPENAPI_DIR)
  await mkdirp(TEMP_OPENAPI_DIR)

  // If the source repo is github, this is the local development workflow
  // and the files in github must be bundled and dereferenced first.
  if (sourceRepo === 'github') {
    await getBundledFiles()
  }

  // When we get the dereferenced OpenAPI files from the open-source
  // rest description repo (REST_API_DESCRIPTION_ROOT), we need to
  // remove any versions that are deprecated because that repo contains
  // all past versions.
  const sourceDirectory = sourceRepo === 'github' ? TEMP_BUNDLED_OPENAPI_DIR : REST_DESCRIPTION_DIR

  const dereferencedFiles = walk(sourceDirectory, {
    includeBasePath: true,
    directories: false,
  }).filter((file) => file.endsWith('.deref.json'))

  for (const file of dereferencedFiles) {
    const baseName = path.basename(file)
    await copyFile(file, path.join(TEMP_OPENAPI_DIR, baseName))
  }

  await rimraf(TEMP_BUNDLED_OPENAPI_DIR)
  await normalizeDataVersionNames(TEMP_OPENAPI_DIR)

  // The REST_API_DESCRIPTION_ROOT repo contains all current and
  // deprecated versions. We need to remove the deprecated versions
  // so that we don't spend time generating data files for them.
  if (sourceRepo === REST_API_DESCRIPTION_ROOT) {
    const derefDir = await readdir(TEMP_OPENAPI_DIR)
    const currentOpenApiVersions = Object.values(allVersions).map((elem) => elem.openApiVersionName)

    for (const schema of derefDir) {
      // if the schema does not start with a current version name, delete it
      if (!currentOpenApiVersions.find((version) => schema.startsWith(version))) {
        await rimraf(path.join(TEMP_OPENAPI_DIR, schema))
      }
    }
  }
  const derefFiles = await readdir(TEMP_OPENAPI_DIR)
  const { restSchemas, webhookSchemas } = await getOpenApiSchemaFiles(derefFiles)

  if (pipelines.includes('rest')) {
    console.log(`\n▶️  Generating REST data files...\n`)
    await syncRestData(TEMP_OPENAPI_DIR, restSchemas, sourceRepoDirectory)
  }

  if (pipelines.includes('webhooks')) {
    console.log(`\n▶️  Generating Webhook data files...\n`)
    await syncWebhookData(TEMP_OPENAPI_DIR, webhookSchemas)
  }

  if (pipelines.includes('github-apps')) {
    console.log(`\n▶️  Generating GitHub Apps data files...\n`)
    await syncGitHubAppsData(TEMP_OPENAPI_DIR, restSchemas, sourceRepoDirectory)
  }

  if (pipelines.includes('rest-redirects')) {
    console.log(`\n▶️  Generating REST redirect data files...\n`)
    await syncRestRedirects()
  }

  // If the source repo is REST_API_DESCRIPTION_ROOT, we want to update
  // the pipeline config files with the SHA of the synced commit.
  if (sourceRepo === REST_API_DESCRIPTION_ROOT) {
    const syncedSha = execSync('git rev-parse HEAD', {
      cwd: REST_API_DESCRIPTION_ROOT,
      encoding: 'utf8',
    }).trim()
    if (!syncedSha) {
      throw new Error(`Could not get the SHA of the synced ${REST_API_DESCRIPTION_ROOT} repo.`)
    }

    const pipelinesWithConfigs = pipelines.filter((pipeline) => !noConfig.includes(pipeline))
    for (const pipeline of pipelinesWithConfigs) {
      const configFilepath = `src/${pipeline}/lib/config.json`
      const configData = JSON.parse(await readFile(configFilepath, 'utf8'))
      configData.sha = syncedSha
      await writeFile(configFilepath, JSON.stringify(configData, null, 2))
    }
  }

  console.log(
    `\n🏁 The static REST API files are now up-to-date with \`github/${sourceRepo}\`. To revert uncommitted data changes, run \`git checkout src/**/data/*\`\n`,
  )
}

async function getBundledFiles() {
  // Get the github/github repo branch name and pull latest
  const githubBranch = execSync('git rev-parse --abbrev-ref HEAD', { cwd: GITHUB_REP_DIR })
    .toString()
    .trim()

  // Only pull master branch because development mode branches are assumed
  // to be up-to-date during active work.
  if (githubBranch === 'master') {
    execSync('git pull', { cwd: GITHUB_REP_DIR })
  }

  // Create a tmp directory to store schema files generated from github/github
  await rimraf(TEMP_OPENAPI_DIR)
  await mkdirp(TEMP_BUNDLED_OPENAPI_DIR)

  console.log(
    `\n🏃‍♀️🏃🏃‍♀️Running \`bin/openapi bundle\` in branch '${githubBranch}' of your github/github checkout to generate the dereferenced OpenAPI schema files.\n`,
  )
  // Format the command supplied to the bundle script in `github/github`
  const bundlerOptions = await getBundlerOptions()
  const bundleCommand = `bundle -v -w${
    next ? ' -n' : ''
  } -o ${TEMP_BUNDLED_OPENAPI_DIR} ${bundlerOptions}`
  try {
    console.log(bundleCommand)
    execSync(`${path.join(GITHUB_REP_DIR, 'bin/openapi')} ${bundleCommand}`, { stdio: 'inherit' })
  } catch (error) {
    console.error(error)
    const errorMsg =
      '🛑 Whoops! It looks like the `bin/openapi bundle` command failed to run in your `github/github` repository checkout.\n\n✅ Troubleshooting:\n - Make sure you have a codespace with a checkout of `github/github` at the same level as your `github/docs-internal` repo before running this script. See this documentation for details: https://thehub.github.com/epd/engineering/products-and-services/public-apis/rest/openapi/openapi-in-the-docs/#previewing-changes-in-the-docs.\n - Ensure that your OpenAPI schema YAML is formatted correctly. A CI test runs on your `github/github` PR that flags malformed YAML. You can check the PR diff view for comments left by the OpenAPI CI test to find and fix any formatting errors.\n\n'
    throw new Error(errorMsg)
  }
}

async function getBundlerOptions() {
  let includeParams = ['--generate_dref_json_only']

  if (versions) {
    includeParams = versions
  }
  if (includeUnpublished) {
    includeParams.push('--include_unpublished')
  }
  if (includeDeprecated) {
    includeParams.push('--include_deprecated')
  }

  return includeParams.join(' ')
}

async function validateInputParameters() {
  // The `--versions` option cannot be used
  // with the `--include-deprecated` option
  if (includeDeprecated && versions) {
    const errorMsg = `🛑 You cannot use the versions option with the include-deprecated option. This is not currently supported in the bundler.\nPlease reach out to #docs-engineering if a new use case should be supported.`
    throw new Error(errorMsg)
  }

  // The `--decorate-only` option cannot be used
  // with the `--include-deprecated` or `--include-unpublished` options
  if ((includeDeprecated || includeUnpublished) && sourceRepo !== 'github') {
    const errorMsg = `🛑 You cannot use the decorate-only option with  include-unpublished or include-deprecated because the include-unpublished and include-deprecated options are only available when running the bundler. The decorate-only option skips running the bundler.\nPlease reach out to #docs-engineering if a new use case should be supported.`
    throw new Error(errorMsg)
  }

  // Check that the source repo exists.
  if (!existsSync(sourceRepoDirectory)) {
    const errorMsg =
      sourceRepo === 'github'
        ? `🛑 The ${GITHUB_REP_DIR} does not exist. Make sure you have a codespace with a checkout of \`github/github\` at the same level as your \`github/docs-internal \`repo before running this script. See this documentation for details: https://thehub.github.com/epd/engineering/products-and-services/public-apis/rest/openapi/openapi-in-the-docs/#previewing-changes-in-the-docs.`
        : `🛑 You must have a clone of the ${REST_API_DESCRIPTION_ROOT} repo in the root of this repo.`
    throw new Error(errorMsg)
  }
  if (versions && versions.length) {
    await validateVersionsOptions(versions)
  }
}

// Version names in the data consumed by the docs site varies depending on the
// team that owns the data we consume. This function translates the version
// names to use the names in the src/<pipeline>/lib/config.json file.
// The names in the config.json file maps the incoming version name to
// the short name of the version defined in lib/allVersions.js.
// This function also translates calendar-date format from .2022-11-28 to
// -2022-11-28
export async function normalizeDataVersionNames(sourceDirectory) {
  const schemas = await readdir(sourceDirectory)

  for (const schema of schemas) {
    const baseName = path.basename(schema, '.deref.json')
    const matchingSourceVersion = Object.keys(VERSION_NAMES).find((version) =>
      baseName.startsWith(version),
    )
    // Update the version name to use docs convention, e.g.,
    // api.github.com.2022-11-28 -> fpt.2022-11-28
    const docsBaseName = baseName.replace(
      matchingSourceVersion,
      VERSION_NAMES[matchingSourceVersion],
    )
    // Match a calendar version if it exists, e.g., .2022-11-28
    const regex = /.\d{4}-\d{2}-\d{2}/
    const matches = baseName.match(regex)
    // Separate the version name from the calendar date version
    const versionName = matches ? docsBaseName.replace(matches[0], '') : docsBaseName
    const calendarSuffix = matches ? matches[0].replace('.', '-') : ''
    // Build the new version name
    const translatedVersion = `${versionName}${calendarSuffix}.json`
    await rename(path.join(sourceDirectory, schema), path.join(sourceDirectory, translatedVersion))
  }
}
