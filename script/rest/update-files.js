#!/usr/bin/env node

// [start-readme]
//
// Run this script to pull openAPI files from github/github, dereference them, and decorate them.
//
// [end-readme]

import { stat, readFile, writeFile, readdir } from 'fs/promises'
import path from 'path'
import program from 'commander'
import { execSync } from 'child_process'
import mkdirp from 'mkdirp'
import rimraf from 'rimraf'
import getOperations from './utils/get-operations.js'
import yaml from 'js-yaml'

const tempDocsDir = path.join(process.cwd(), 'openapiTmp')
const githubRepoDir = path.join(process.cwd(), '../github')
const dereferencedPath = path.join(process.cwd(), 'lib/rest/static/dereferenced')
const decoratedPath = path.join(process.cwd(), 'lib/rest/static/decorated')
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
  .parse(process.argv)

const { decorateOnly, versions, includeUnpublished, includeDeprecated } = program.opts()

// Check that the github/github repo exists. If the files are only being
// decorated, the github/github repo isn't needed.
if (!decorateOnly) {
  try {
    await stat(githubRepoDir)
  } catch (error) {
    console.log(
      `🛑 The ${githubRepoDir} does not exist. Make sure you have a local, bootstrapped checkout of github/github at the same level as your github/docs-internal repo before running this script.`
    )
    process.exit(1)
  }
}

// When the input parameter type is decorate-only, use the local
// `github/docs-internal` repo to generate a list of schema files.
// Otherwise, use the `github/github` list of config files
const referenceSchemaDirectory = decorateOnly ? dereferencedPath : openApiReleasesDir
// A full list of unpublished, deprecated, and active schemas
const allSchemas = await getOpenApiSchemas(referenceSchemaDirectory)

await validateInputParameters(allSchemas)

// Format the command supplied to the bundle script in `github/github`
const commandParameters = await getCommandParameters()
// Get the list of schemas for this bundle, depending on options
const schemas = await getSchemas(allSchemas)

main()

async function main() {
  // Generate the dereferenced OpenAPI schema files
  if (!decorateOnly) {
    await getDereferencedFiles()
  }
  // Decorate the dereferenced files in a format ingestible by docs.github.com
  await decorate()

  console.log(
    '\n🏁 The static REST API files are now up-to-date with your local `github/github` checkout. To revert uncommitted changes, run `git checkout lib/rest/static/*.\n\n'
  )
}

async function getDereferencedFiles() {
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
  try {
    console.log(`bundle -o ${tempDocsDir} ${commandParameters}`)
    execSync(
      `${path.join(githubRepoDir, 'bin/openapi')} bundle -o ${tempDocsDir} ${commandParameters}`,
      { stdio: 'inherit' }
    )
  } catch (error) {
    console.error(error)
    console.log(
      '🛑 Whoops! It looks like the `bin/openapi bundle` command failed to run in your `github/github` repository checkout. To troubleshoot, ensure that your OpenAPI schema YAML is formatted correctly. A CI test runs on your `github/github` PR that flags malformed YAML. You can check the PR diff view for comments left by the openapi CI test to find and fix any formatting errors.'
    )
    process.exit(1)
  }

  execSync(`find ${tempDocsDir} -type f -name "*deref.json" -exec mv '{}' ${dereferencedPath} ';'`)

  rimraf.sync(tempDocsDir)

  // When running in development mode (locally), the the info.version
  // property in the dereferenced schema is replaced with the branch
  // name of the `github/github` checkout. A CI test
  // checks the version and fails if it's not a semantic version.
  for (const filename of schemas) {
    const schema = JSON.parse(await readFile(path.join(dereferencedPath, filename)))

    schema.info.version = `${githubBranch} !!DEVELOPMENT MODE - DO NOT MERGE!!`
    await writeFile(path.join(dereferencedPath, filename), JSON.stringify(schema, null, 2))
  }
}

async function decorate() {
  console.log('\n🎄 Decorating the OpenAPI schema files in lib/rest/static/dereferenced.\n')
  const dereferencedSchemas = {}
  for (const filename of schemas) {
    const schema = JSON.parse(await readFile(path.join(dereferencedPath, filename)))
    const key = filename.replace('.deref.json', '')
    dereferencedSchemas[key] = schema
  }

  for (const [schemaName, schema] of Object.entries(dereferencedSchemas)) {
    try {
      // munge OpenAPI definitions object in an array of operations objects
      const operations = await getOperations(schema)

      // process each operation, asynchronously rendering markdown and stuff
      await Promise.all(operations.map((operation) => operation.process()))

      const filename = path.join(decoratedPath, `${schemaName}.json`).replace('.deref', '')
      // write processed operations to disk
      await writeFile(filename, JSON.stringify(operations, null, 2))

      console.log('Wrote', path.relative(process.cwd(), filename))
    } catch (error) {
      console.error(error)
      console.log(
        "🐛 Whoops! It looks like the decorator script wasn't able to parse the dereferenced schema. A recent change may not yet be supported by the decorator. Please reach out in the #docs-engineering slack channel for help."
      )
      process.exit(1)
    }
  }
}

async function validateInputParameters(schemas) {
  // The `--versions` and `--decorate-only` options cannot be used
  // with the `--include-deprecated` or `--include-unpublished` options
  const numberOfOptions = Object.keys(program.opts()).length

  if (numberOfOptions > 1 && (decorateOnly || versions)) {
    console.log(
      `🛑 You cannot use the versions and decorate-only options with any other options.\nThe decorate-only switch will decorate all dereferenced schemas files in the docs-internal repo.\nThis script doesn't support generating individual deprecated or unpublished schemas.\nPlease reach out to #docs-engineering if this is a use case that you need.`
    )
    process.exit(1)
  }

  // Validate individual versions provided
  if (versions) {
    versions.forEach((version) => {
      if (
        schemas.deprecated.includes(`${version}.deref.json`) ||
        schemas.unpublished.includes(`${version}.deref.json`)
      ) {
        console.log(
          `🛑 This script doesn't support generating individual deprecated or unpublished schemas. Please reach out to #docs-engineering if this is a use case that you need.`
        )
        process.exit(1)
      } else if (!schemas.currentReleases.includes(`${version}.deref.json`)) {
        console.log(`🛑 The version (${version}) you specified is not valid.`)
        process.exit(1)
      }
    })
  }
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

  return { currentReleases, unpublished, deprecated }
}

async function getCommandParameters() {
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
