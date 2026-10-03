// Generates data files for the REST, GitHub Apps, and webhooks automated pipelines.

import { mkdir, rm, readdir, copyFile, readFile, writeFile, rename } from 'fs/promises'
import path from 'path'
import { program, Option } from 'commander'
import { execSync } from 'child_process'
import { fileURLToPath } from 'url'
import walk from 'walk-sync'
import { existsSync } from 'fs'

import { syncRestData, getOpenApiSchemaFiles } from './utils/sync'
import { validateVersionsOptions } from './utils/get-openapi-schemas'
import { allVersions } from '@/versions/lib/all-versions'
import { syncWebhookData } from '../../webhooks/scripts/sync'
import { syncGitHubAppsData } from '../../github-apps/scripts/sync'
import { syncRestRedirects } from './utils/get-redirects'
import { syncChangelogs } from './utils/sync-changelogs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const TEMP_OPENAPI_DIR = path.join(__dirname, '../../../rest-api-description/openApiTemp')
const TEMP_BUNDLED_OPENAPI_DIR = path.join(TEMP_OPENAPI_DIR, 'bundled')
const GITHUB_REP_DIR = '../github'
const REST_API_DESCRIPTION_ROOT = 'rest-api-description'
const REST_DESCRIPTION_DIR = path.join(REST_API_DESCRIPTION_ROOT, 'descriptions-next')
const VERSION_NAMES: Record<string, string> = JSON.parse(
  await readFile('src/rest/lib/config.json', 'utf8'),
).versionMapping
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
      '-s, --source-repos [repos...]',
      `The source repositories to get the dereferenced files from. When the source repo is ${REST_API_DESCRIPTION_ROOT}, the bundler is not run to generate the source dereferenced OpenAPI files because the ${REST_API_DESCRIPTION_ROOT} repo already contains them.`,
    )
      .choices(['github', REST_API_DESCRIPTION_ROOT])
      .default(['github']),
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

const { versions, includeUnpublished, includeDeprecated, next, output, sourceRepos } =
  program.opts()

const sourceRepoDirectories = sourceRepos.map((sourceRepo: string) =>
  sourceRepo === 'github' ? GITHUB_REP_DIR : sourceRepo,
)

main()

async function main() {
  const pipelines = Array.isArray(output) ? output : [output]
  await validateInputParameters()
  await rm(TEMP_OPENAPI_DIR, { recursive: true, force: true })
  await mkdir(TEMP_OPENAPI_DIR, { recursive: true })

  // Bundle and dereference github/github schemas for the local development workflow.
  if (sourceRepos.includes('github')) {
    await getBundledFiles()
  }
  const sourceRepoDirectory = sourceRepos.includes('github')
    ? GITHUB_REP_DIR
    : REST_API_DESCRIPTION_ROOT

  const sourceDirectory = sourceRepos.includes('github')
    ? TEMP_BUNDLED_OPENAPI_DIR
    : REST_DESCRIPTION_DIR

  const dereferencedFiles = walk(sourceDirectory, {
    includeBasePath: true,
    directories: false,
  }).filter((file) => file.endsWith('.deref.json'))

  for (const file of dereferencedFiles) {
    const baseName = path.basename(file)
    await copyFile(file, path.join(TEMP_OPENAPI_DIR, baseName))
  }

  await rm(TEMP_BUNDLED_OPENAPI_DIR, { recursive: true, force: true })
  await normalizeDataVersionNames(TEMP_OPENAPI_DIR)

  // rest-api-description includes deprecated versions, so remove them before generating data files.
  if (sourceRepos.includes(REST_API_DESCRIPTION_ROOT)) {
    const derefDir = await readdir(TEMP_OPENAPI_DIR)
    const currentOpenApiVersions = Object.values(allVersions).map((elem) => elem.openApiVersionName)

    for (const schema of derefDir) {
      if (!currentOpenApiVersions.find((version) => schema.startsWith(version))) {
        await rm(path.join(TEMP_OPENAPI_DIR, schema), { recursive: true, force: true })
      }
    }
  }
  const derefFiles = await readdir(TEMP_OPENAPI_DIR)

  const { restSchemas, webhookSchemas } = await getOpenApiSchemaFiles(derefFiles)

  if (pipelines.includes('rest')) {
    console.log(`\n▶️  Generating REST data files...\n`)
    await syncRestData(TEMP_OPENAPI_DIR, restSchemas, sourceRepoDirectory)
    await syncChangelogs(sourceRepoDirectory, VERSION_NAMES)
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

  // When syncing from rest-api-description, store the synced commit SHA in each pipeline config.
  if (sourceRepos.includes(REST_API_DESCRIPTION_ROOT)) {
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
    `\n🏁 The static REST API files are now up-to-date with ${sourceRepos.join(' ')}. To revert uncommitted data changes, run \`git checkout src/**/data/*\`\n`,
  )
}

async function getBundledFiles(): Promise<void> {
  const githubBranch = execSync('git rev-parse --abbrev-ref HEAD', { cwd: GITHUB_REP_DIR })
    .toString()
    .trim()

  // Pull only master; development branches are assumed current during active work.
  if (githubBranch === 'master') {
    execSync('git pull', { cwd: GITHUB_REP_DIR })
  }

  await rm(TEMP_OPENAPI_DIR, { recursive: true, force: true })
  await mkdir(TEMP_BUNDLED_OPENAPI_DIR, { recursive: true })

  console.log(
    `\n🏃‍♀️🏃🏃‍♀️Running \`bin/openapi bundle\` in branch '${githubBranch}' of your github/github checkout to generate the dereferenced OpenAPI schema files.\n`,
  )
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

async function getBundlerOptions(): Promise<string> {
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

async function validateInputParameters(): Promise<void> {
  // The bundler cannot combine --versions with --include-deprecated.
  if (includeDeprecated && versions) {
    const errorMsg = `🛑 You cannot use the versions option with the include-deprecated option. This is not currently supported in the bundler.\nPlease reach out to #technical-content if a new use case should be supported.`
    throw new Error(errorMsg)
  }

  // --include-deprecated and --include-unpublished need the github/github bundler.
  if ((includeDeprecated || includeUnpublished) && !sourceRepos.includes('github')) {
    const errorMsg = `🛑 You cannot use the decorate-only option with  include-unpublished or include-deprecated because the include-unpublished and include-deprecated options are only available when running the bundler. The decorate-only option skips running the bundler.\nPlease reach out to #technical-content if a new use case should be supported.`
    throw new Error(errorMsg)
  }

  for (const sourceRepoDirectory of sourceRepoDirectories) {
    if (!existsSync(sourceRepoDirectory)) {
      const errorMsg =
        sourceRepoDirectory === 'github' || sourceRepoDirectory === GITHUB_REP_DIR
          ? `🛑 The ${GITHUB_REP_DIR} does not exist. Make sure you have a codespace with a checkout of \`github/github\` at the same level as your \`github/docs-internal \`repo before running this script. See this documentation for details: https://thehub.github.com/epd/engineering/products-and-services/public-apis/rest/openapi/openapi-in-the-docs/#previewing-changes-in-the-docs.`
          : `🛑 You must have a clone of the ${sourceRepoDirectory} repo in the root of this repo.`
      throw new Error(errorMsg)
    }
  }

  if (versions && versions.length) {
    await validateVersionsOptions(versions)
  }
}

// Version names vary by owning team. normalizeDataVersionNames reads versionMapping
// in src/rest/lib/config.json and rewrites .YYYY-MM-DD to -YYYY-MM-DD.
export async function normalizeDataVersionNames(sourceDirectory: string): Promise<void> {
  const schemas = await readdir(sourceDirectory)

  for (const schema of schemas) {
    const baseName = path.basename(schema, '.deref.json')
    const matchingSourceVersion = Object.keys(VERSION_NAMES).find((version) =>
      baseName.startsWith(version),
    )
    // Convert api.github.com.YYYY-MM-DD to fpt.YYYY-MM-DD.
    const docsBaseName = baseName.replace(
      matchingSourceVersion!,
      VERSION_NAMES[matchingSourceVersion!],
    )
    const regex = /.\d{4}-\d{2}-\d{2}/
    const matches = baseName.match(regex)
    const versionName = matches ? docsBaseName.replace(matches[0], '') : docsBaseName
    const calendarSuffix = matches ? matches[0].replace('.', '-') : ''
    const translatedVersion = `${versionName}${calendarSuffix}.json`
    await rename(path.join(sourceDirectory, schema), path.join(sourceDirectory, translatedVersion))
  }
}
