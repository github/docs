#!/usr/bin/env node

// [start-readme]
//
// Run this script to pull openAPI files from github/github, dereference them, and decorate them.
//
// [end-readme]

import { stat, readdir } from 'fs/promises'
import path from 'path'
import { program } from 'commander'
import { execSync } from 'child_process'
import mkdirp from 'mkdirp'
import rimraf from 'rimraf'

import { decorate } from './utils/decorator.js'
import { validateVersionsOptions } from './utils/get-openapi-schemas.js'

const TEMP_DOCS_DIR = path.join(process.cwd(), 'openapiTmp')
const DOCS_DEREF_OPENAPI_DIR = path.join(process.cwd(), 'lib/rest/static/dereferenced')
const GITHUB_REP_DIR = path.join(process.cwd(), '../github')

program
  .description('Generate dereferenced OpenAPI and decorated schema files.')
  .option(
    '--decorate-only',
    '⚠️ Only used by a 🤖 to generate decorated schema files from existing dereferenced schema files.'
  )
  .option(
    '-v --versions <VERSIONS...>',
    'A list of undeprecated, published versions to build, separated by a space. Example `-v ghes-3.1` or `-v api.github.com github.ae`'
  )
  .option('-d --include-deprecated', 'Includes schemas that are marked as `deprecated: true`')
  .option('-u --include-unpublished', 'Includes schemas that are marked as `published: false`')
  .option(
    '-k --keep-dereferenced-files',
    'Keeps the dereferenced files after the script runs. You will need to delete them manually.'
  )
  .option('-n --next', 'Generate the next OpenAPI calendar-date version.')
  .parse(process.argv)

const {
  decorateOnly,
  versions,
  includeUnpublished,
  includeDeprecated,
  keepDereferencedFiles,
  next,
} = program.opts()

main()

async function main() {
  await validateInputParameters()
  // Generate the dereferenced OpenAPI schema files
  if (!decorateOnly) {
    await getBundledFiles()
  }

  const schemas = await readdir(DOCS_DEREF_OPENAPI_DIR)
  // Decorate the dereferenced files in a format ingestible by docs.github.com
  await decorate(schemas)
  console.log(
    '\n🏁 The static REST API files are now up-to-date with your local `github/github` checkout. To revert uncommitted changes, run `git checkout lib/rest/static/*`.\n\n'
  )
  if (!keepDereferencedFiles) {
    rimraf.sync(DOCS_DEREF_OPENAPI_DIR)
  }
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
  rimraf.sync(TEMP_DOCS_DIR)
  await mkdirp(TEMP_DOCS_DIR)

  console.log(
    `\n🏃‍♀️🏃🏃‍♀️Running \`bin/openapi bundle\` in branch '${githubBranch}' of your github/github checkout to generate the dereferenced OpenAPI schema files.\n`
  )
  // Format the command supplied to the bundle script in `github/github`
  const bundlerOptions = await getBundlerOptions()
  const bundleCommand = `bundle -v -w${next ? ' -n' : ''} -o ${TEMP_DOCS_DIR} ${bundlerOptions}`
  try {
    console.log(bundleCommand)
    execSync(`${path.join(GITHUB_REP_DIR, 'bin/openapi')} ${bundleCommand}`, { stdio: 'inherit' })
  } catch (error) {
    console.error(error)
    const errorMsg =
      '🛑 Whoops! It looks like the `bin/openapi bundle` command failed to run in your `github/github` repository checkout.\n\n✅ Troubleshooting:\n - Make sure you have a codespace with a checkout of `github/github` at the same level as your `github/docs-internal` repo before running this script. See this documentation for details: https://thehub.github.com/epd/engineering/products-and-services/public-apis/rest/openapi/openapi-in-the-docs/#previewing-changes-in-the-docs.\n - Ensure that your OpenAPI schema YAML is formatted correctly. A CI test runs on your `github/github` PR that flags malformed YAML. You can check the PR diff view for comments left by the OpenAPI CI test to find and fix any formatting errors.\n\n'
    throw new Error(errorMsg)
  }

  // Moving the dereferenced files to the docs directory creates a consistent
  // place to generate the decorated files from. This is where they will be
  // delivered in automated pull requests and because of that we move them
  // to the same location during local development.
  await mkdirp(DOCS_DEREF_OPENAPI_DIR)
  execSync(
    `find ${TEMP_DOCS_DIR} -type f -name "*deref.json" -exec mv '{}' ${DOCS_DEREF_OPENAPI_DIR} ';'`
  )

  rimraf.sync(TEMP_DOCS_DIR)
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
  if ((includeDeprecated || includeUnpublished) && (decorateOnly || versions)) {
    const errorMsg = `🛑 You cannot use the versions option with the include-unpublished or include-deprecated options. This is not currently supported in the bundler.\nYou cannot use the decorate-only option with  include-unpublished or include-deprecated because the include-unpublished and include-deprecated options are only available when running the bundler. The decorate-only option skips running the bundler.\nPlease reach out to #docs-engineering if a new use case should be supported.`
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
  if (versions && versions.length) {
    await validateVersionsOptions(versions)
  }
}
