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

const tempDocsDir = path.join(process.cwd(), 'openapiTmp')
const githubRepoDir = path.join(process.cwd(), '../github')
const dereferencedPath = path.join(process.cwd(), 'lib/rest/static/dereferenced')

const openApiReleasesDir = `${githubRepoDir}/app/api/description/config/releases`

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
  .option('--redirects-only', 'Only generate the redirects file')
  .parse(process.argv)

const { decorateOnly, versions, includeUnpublished, includeDeprecated, redirectsOnly } =
  program.opts()

await validateInputParameters()

main()

async function main() {
  // When the input parameter type is decorate-only, use the local
  // `github/docs-internal` repo to generate a list of schema files.
  // Otherwise, use the `github/github` list of config files
  const referenceSchemaDirectory = decorateOnly ? dereferencedPath : openApiReleasesDir
  // A full list of unpublished, deprecated, and active schemas
  const schemas = await getOpenApiSchemas(referenceSchemaDirectory)

  // Generate the dereferenced OpenAPI schema files
  if (!decorateOnly && !redirectsOnly) {
    await getDereferencedFiles(schemas)
  }
  // Decorate the dereferenced files in a format ingestible by docs.github.com
  if (!redirectsOnly) {
    await decorate(schemas)
  }

  console.log(
    '\n🏁 The static REST API files are now up-to-date with your local `github/github` checkout. To revert uncommitted changes, run `git checkout lib/rest/static/*`.\n\n'
  )
}

async function getDereferencedFiles(schemas) {
  // Get the github/github repo branch name and pull latest
  const githubBranch = execSync('git rev-parse --abbrev-ref HEAD', { cwd: githubRepoDir })
    .toString()
    .trim()

  // Only pull master branch because development mode branches are assumed
  // to be up-to-date during active work.
  if (githubBranch === 'master') {
    execSync('git pull', { cwd: githubRepoDir })
  }

  // Create a tmp directory to store schema files generated from github/github
  rimraf.sync(tempDocsDir)
  await mkdirp(tempDocsDir)

  console.log(
    `\n🏃‍♀️🏃🏃‍♀️Running \`bin/openapi bundle\` in branch '${githubBranch}' of your github/github checkout to generate the dereferenced OpenAPI schema files.\n`
  )
  // Format the command supplied to the bundle script in `github/github`
  const bundlerOptions = await getBundlerOptions()

  try {
    console.log(`bundle -o ${tempDocsDir} ${bundlerOptions}`)
    execSync(
      `${path.join(githubRepoDir, 'bin/openapi')} bundle -o ${tempDocsDir} ${bundlerOptions}`,
      { stdio: 'inherit' }
    )
  } catch (error) {
    console.error(error)
    const errorMsg =
      '🛑 Whoops! It looks like the `bin/openapi bundle` command failed to run in your `github/github` repository checkout.\n\n✅ Troubleshooting:\n - Make sure you have a codespace with a checkout of `github/github` at the same level as your `github/docs-internal` repo before running this script. See this documentation for details: https://thehub.github.com/epd/engineering/products-and-services/public-apis/rest/openapi/openapi-in-the-docs/#previewing-changes-in-the-docs.\n - Ensure that your OpenAPI schema YAML is formatted correctly. A CI test runs on your `github/github` PR that flags malformed YAML. You can check the PR diff view for comments left by the OpenAPI CI test to find and fix any formatting errors.\n\n'
    throw new Error(errorMsg)
  }

  execSync(`find ${tempDocsDir} -type f -name "*deref.json" -exec mv '{}' ${dereferencedPath} ';'`)

  rimraf.sync(tempDocsDir)

  // When running in development mode, the the info.version
  // property in the dereferenced schema is replaced with the branch
  // name of the `github/github` checkout. A CI test
  // checks the version and fails if it's not a semantic version.
  for (const filename of schemas) {
    const schema = JSON.parse(await readFile(path.join(dereferencedPath, filename)))

    schema.info.version = `${githubBranch} !!DEVELOPMENT MODE - DO NOT MERGE!!`
    await writeFile(path.join(dereferencedPath, filename), JSON.stringify(schema, null, 2))
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

async function getOpenApiSchemas(directory) {
  const openAPIConfigs = await readdir(directory)
  const unpublished = []
  const deprecated = []
  const currentReleases = []

  for (const file of openAPIConfigs) {
    const newFileName = `${path.basename(file, 'yaml')}deref.json`
    const content = await readFile(path.join(directory, file), 'utf8')
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
  }
  // Get the list of schemas for this bundle, depending on options
  return await getSchemas(allSchemas)
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

async function getSchemas(allSchemas) {
  if (decorateOnly) {
    const files = await readdir(dereferencedPath)
    return files
  } else if (versions) {
    return versions.map((elem) => `${elem}.deref.json`)
  } else {
    const schemas = allSchemas.currentReleases
    if (includeUnpublished) {
      schemas.push(...allSchemas.unpublished)
    }
    if (includeDeprecated) {
      schemas.push(...allSchemas.deprecated)
    }
    return schemas
  }
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
  if (!decorateOnly && !redirectsOnly) {
    try {
      await stat(githubRepoDir)
    } catch (error) {
      const errorMsg = `🛑 The ${githubRepoDir} does not exist. Make sure you have a codespace with a checkout of github/github at the same level as your github/docs-internal repo before running this script. See the documentation for details: https://thehub.github.com/epd/engineering/products-and-services/public-apis/rest/openapi/openapi-in-the-docs/#previewing-changes-in-the-docs.`
      throw new Error(errorMsg)
    }
  }
}
