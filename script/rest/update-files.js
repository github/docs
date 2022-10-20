#!/usr/bin/env node

// [start-readme]
//
// Run this script to pull openAPI files from github/github, dereference them, and decorate them.
//
// [end-readme]

import { stat, readFile, writeFile, readdir } from 'fs/promises'
import path from 'path'
import { program } from 'commander'
import { execSync } from 'child_process'
import mkdirp from 'mkdirp'
import rimraf from 'rimraf'
import yaml from 'js-yaml'

import { decorate } from './utils/decorator.js'

const TEMP_DOCS_DIR = path.join(process.cwd(), 'openapiTmp')
const DEREFERENCED_DIR = path.join(process.cwd(), 'lib/rest/static/dereferenced')
const GITHUB_REP_DIR = path.join(process.cwd(), '../github')
const OPEN_API_RELEASES_DIR = path.join(GITHUB_REP_DIR, '/app/api/description/config/releases')

program
  .description('Generate dereferenced OpenAPI and decorated schema files.')
  .option(
    '--decorate-only',
    '⚠️ Only used by a 🤖 to generate decorated schema files from existing dereferenced schema files.'
  )
  .option(
    '-v --versions <VERSIONS...>',
    'A list of undeprecated, published versions to build, separated by a space. Example "ghes-3.1" or "api.github.com github.ae"'
  )
  .option('-d --include-deprecated', 'Includes schemas that are marked as `deprecated: true`')
  .option('-u --include-unpublished', 'Includes schemas that are marked as `published: false`')
  .parse(process.argv)

const { decorateOnly, versions, includeUnpublished, includeDeprecated } = program.opts()

await validateInputParameters()

main()

async function main() {
  // When the input parameter type is decorate-only, use the
  // `github/docs-internal` repo to generate a list of schema files.
  // Otherwise, use the `github/github` list of config files
  const schemas = decorateOnly ? await readdir(DEREFERENCED_DIR) : await getSchemas()

  // Generate the dereferenced OpenAPI schema files
  if (!decorateOnly) {
    await getBundledFiles(schemas)
  }
  // Decorate the dereferenced files in a format ingestible by docs.github.com
  await decorate(schemas)

  console.log(
    '\n🏁 The static REST API files are now up-to-date with your local `github/github` checkout. To revert uncommitted changes, run `git checkout lib/rest/static/*`.\n\n'
  )
}

async function getBundledFiles(schemas) {
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
  rimraf.sync(TEMP_DOCS_DIR)
  await mkdirp(TEMP_DOCS_DIR)

  console.log(
    `\n🏃‍♀️🏃🏃‍♀️Running \`bin/openapi bundle\` in branch '${githubBranch}' of your github/github checkout to generate the dereferenced OpenAPI schema files.\n`
  )
  // Format the command supplied to the bundle script in `github/github`
  const bundlerOptions = await getBundlerOptions()

  try {
    console.log(`bundle -o ${TEMP_DOCS_DIR} ${bundlerOptions}`)
    execSync(
      `${path.join(GITHUB_REP_DIR, 'bin/openapi')} bundle -o ${TEMP_DOCS_DIR} ${bundlerOptions}`,
      { stdio: 'inherit' }
    )
  } catch (error) {
    console.error(error)
    const errorMsg =
      '🛑 Whoops! It looks like the `bin/openapi bundle` command failed to run in your `github/github` repository checkout.\n\n✅ Troubleshooting:\n - Make sure you have a codespace with a checkout of `github/github` at the same level as your `github/docs-internal` repo before running this script. See this documentation for details: https://thehub.github.com/epd/engineering/products-and-services/public-apis/rest/openapi/openapi-in-the-docs/#previewing-changes-in-the-docs.\n - Ensure that your OpenAPI schema YAML is formatted correctly. A CI test runs on your `github/github` PR that flags malformed YAML. You can check the PR diff view for comments left by the OpenAPI CI test to find and fix any formatting errors.\n\n'
    throw new Error(errorMsg)
  }

  execSync(
    `find ${TEMP_DOCS_DIR} -type f -name "*deref.json" -exec mv '{}' ${DEREFERENCED_DIR} ';'`
  )

  rimraf.sync(TEMP_DOCS_DIR)

  // When running in development mode, the the info.version
  // property in the dereferenced schema is replaced with the branch
  // name of the `github/github` checkout. A CI test
  // checks the version and fails if it's not a semantic version.
  for (const filename of schemas) {
    const schema = JSON.parse(await readFile(path.join(DEREFERENCED_DIR, filename)))

    schema.info.version = `${githubBranch} !!DEVELOPMENT MODE - DO NOT MERGE!!`
    await writeFile(path.join(DEREFERENCED_DIR, filename), JSON.stringify(schema, null, 2))
  }
}

// Gets the full list of unpublished, deprecated, and active schemas
// from the github/github repo
async function getSchemas() {
  const openAPIConfigs = await readdir(OPEN_API_RELEASES_DIR)
  const unpublished = []
  const deprecated = []
  const currentReleases = []

  // The file content in the `github/github` repo is YAML before it is
  // bundled into JSON.
  for (const file of openAPIConfigs) {
    const newFileName = `${path.basename(file, 'yaml')}deref.json`
    const content = await readFile(path.join(OPEN_API_RELEASES_DIR, file), 'utf8')
    const yamlContent = yaml.load(content)
    if (!yamlContent.published) {
      unpublished.push(newFileName)
    }
    if (yamlContent.deprecated) {
      deprecated.push(newFileName)
    }
    if (!yamlContent.deprecated && yamlContent.published) {
      currentReleases.push(newFileName)
    }
  }

  const allSchemas = { currentReleases, unpublished, deprecated }
  if (versions) {
    await validateVersionsOptions(allSchemas)
    return versions.map((elem) => `${elem}.deref.json`)
  }
  const schemas = allSchemas.currentReleases
  if (includeUnpublished) {
    schemas.push(...allSchemas.unpublished)
  }
  if (includeDeprecated) {
    schemas.push(...allSchemas.deprecated)
  }
  return schemas
}

async function getBundlerOptions() {
  let includeParams = []

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
  // The `--versions` and `--decorate-only` options cannot be used
  // with the `--include-deprecated` or `--include-unpublished` options
  const numberOfOptions = Object.keys(program.opts()).length
  if (numberOfOptions > 1 && (decorateOnly || versions)) {
    const errorMsg = `🛑 You cannot use the versions and decorate-only options with any other options.\nThe decorate-only switch will decorate all dereferenced schemas files in the docs-internal repo.\nThis script doesn't support generating individual deprecated or unpublished schemas.\nPlease reach out to #docs-engineering if this is a use case that you need.`
    throw new Error(errorMsg)
  }

  // Check that the github/github repo exists. If the files are only being
  // decorated, the github/github repo isn't needed.
  if (!decorateOnly) {
    try {
      await stat(GITHUB_REP_DIR)
    } catch (error) {
      const errorMsg = `🛑 The ${GITHUB_REP_DIR} does not exist. Make sure you have a codespace with a checkout of \`github/github\` at the same level as your \`github/docs-internal \`repo before running this script. See this documentation for details: https://thehub.github.com/epd/engineering/products-and-services/public-apis/rest/openapi/openapi-in-the-docs/#previewing-changes-in-the-docs.`
      throw new Error(errorMsg)
    }
  }
}

async function validateVersionsOptions(schemas) {
  // Validate individual versions provided
  versions.forEach((version) => {
    if (
      schemas.deprecated.includes(`${version}.deref.json`) ||
      schemas.unpublished.includes(`${version}.deref.json`)
    ) {
      const errorMsg = `🛑 This script doesn't support generating individual deprecated or unpublished schemas. Please reach out to #docs-engineering if this is a use case that you need.`
      throw new Error(errorMsg)
    } else if (!schemas.currentReleases.includes(`${version}.deref.json`)) {
      throw new Error(`🛑 The version (${version}) you specified is not valid.`)
    }
  })
}
