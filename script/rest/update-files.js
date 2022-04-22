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
const appsStaticPath = path.join(process.cwd(), 'lib/rest/static/apps')
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
  .option('--redirects-only', 'Only generate the redirects file')
  .parse(process.argv)

const { decorateOnly, versions, includeUnpublished, includeDeprecated, redirectsOnly } =
  program.opts()

// Check that the github/github repo exists. If the files are only being
// decorated, the github/github repo isn't needed.
if (!decorateOnly && !redirectsOnly) {
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
  if (!decorateOnly && !redirectsOnly) {
    await getDereferencedFiles()
  }
  // Decorate the dereferenced files in a format ingestible by docs.github.com
  if (!redirectsOnly) {
    await decorate()
  }

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

async function getCategoryOverrideRedirects() {
  const { operationUrls, sectionUrls } = JSON.parse(
    await readFile('script/rest/utils/rest-api-overrides.json', 'utf8')
  )

  const operationRedirects = {}
  console.log('\n➡️  Updating REST API redirect exception list.\n')
  Object.values(operationUrls).forEach((value) => {
    const oldUrl = value.originalUrl.replace('/rest/reference', '/rest')
    const anchor = oldUrl.split('#')[1]
    const subcategory = value.subcategory
    const redirectTo = subcategory
      ? `/rest/${value.category}/${subcategory}#${anchor}`
      : `/rest/${value.category}#${anchor}`
    operationRedirects[oldUrl] = redirectTo
  })
  const redirects = {
    ...operationRedirects,
    ...sectionUrls,
  }
  return redirects
}

async function decorate() {
  console.log('\n🎄 Decorating the OpenAPI schema files in lib/rest/static/dereferenced.\n')
  const dereferencedSchemas = {}
  for (const filename of schemas) {
    const schema = JSON.parse(await readFile(path.join(dereferencedPath, filename)))
    const key = filename.replace('.deref.json', '')
    dereferencedSchemas[key] = schema
  }

  const operationsEnabledForGitHubApps = {}
  const clientSideRedirects = await getCategoryOverrideRedirects()

  const skipCategory = [
    'billing',
    'code-scanning',
    'codes-of-conduct',
    'deploy-keys',
    'emojis',
    'gitignore',
    'licenses',
    'markdown',
    'meta',
    'oauth-authorizations',
    'packages',
    'pages',
    'rate-limit',
    'reactions',
    'scim',
    'search',
    'secret-scanning',
  ]
  for (const [schemaName, schema] of Object.entries(dereferencedSchemas)) {
    try {
      // get all of the operations for a particular version of the openapi
      const operations = await getOperations(schema)
      // process each operation, asynchronously rendering markdown and stuff
      await Promise.all(operations.map((operation) => operation.process()))

      // For each rest operation that doesn't have an override defined
      // in script/rest/utils/rest-api-overrides.json,
      // add a client-side redirect
      operations.forEach((operation) => {
        // A handful of operations don't have external docs properties
        const externalDocs = operation.getExternalDocs()
        if (!externalDocs) {
          return
        }
        const oldUrl = `/rest${
          externalDocs.url.replace('/rest/reference', '/rest').split('/rest')[1]
        }`

        if (!(oldUrl in clientSideRedirects)) {
          // There are some operations that aren't nested in the sidebar
          // For these, don't need to add a client-side redirect, the
          // frontmatter redirect will handle it for us.
          if (skipCategory.includes(operation.category)) {
            return
          }
          const anchor = oldUrl.split('#')[1]
          const subcategory = operation.subcategory

          // If there is no subcategory, a new page with the same name as the
          // category was created. That page name may change going forward.
          const redirectTo = subcategory
            ? `/rest/${operation.category}/${subcategory}#${anchor}`
            : `/rest/${operation.category}/${operation.category}#${anchor}`
          clientSideRedirects[oldUrl] = redirectTo
        }

        // There are a lot of section headings that we'll want to redirect too,
        // now that subcategories are on their own page. For example,
        // /rest/reference/actions#artifacts should redirect to
        // /rest/actions/artifacts
        if (operation.subcategory) {
          const sectionRedirectFrom = `/rest/${operation.category}#${operation.subcategory}`
          const sectionRedirectTo = `/rest/${operation.category}/${operation.subcategory}`
          if (!(sectionRedirectFrom in clientSideRedirects)) {
            clientSideRedirects[sectionRedirectFrom] = sectionRedirectTo
          }
        }
      })

      const categories = [...new Set(operations.map((operation) => operation.category))].sort()

      // Orders the operations by their category and subcategories.
      // All operations must have a category, but operations don't need
      // a subcategory. When no subcategory is present, the subcategory
      // property is an empty string ('').
      /* 
        Example:
        {
          [category]: {
            '': {
              "description": "",
              "operations": []
            },
            [subcategory sorted alphabetically]: {
              "description": "",
              "operations": []
            }
          }
        }
      */
      const operationsByCategory = {}
      categories.forEach((category) => {
        operationsByCategory[category] = {}
        const categoryOperations = operations.filter((operation) => operation.category === category)
        categoryOperations
          .filter((operation) => !operation.subcategory)
          .map((operation) => (operation.subcategory = operation.category))

        const subcategories = [
          ...new Set(categoryOperations.map((operation) => operation.subcategory)),
        ].sort()
        // the first item should be the item that has no subcategory
        // e.g., when the subcategory = category
        const firstItemIndex = subcategories.indexOf(category)
        if (firstItemIndex > -1) {
          const firstItem = subcategories.splice(firstItemIndex, 1)[0]
          subcategories.unshift(firstItem)
        }

        subcategories.forEach((subcategory) => {
          operationsByCategory[category][subcategory] = {}

          const subcategoryOperations = categoryOperations.filter(
            (operation) => operation.subcategory === subcategory
          )

          operationsByCategory[category][subcategory] = subcategoryOperations
        })
      })

      const filename = path.join(decoratedPath, `${schemaName}.json`).replace('.deref', '')
      // write processed operations to disk
      await writeFile(filename, JSON.stringify(operationsByCategory, null, 2))
      console.log('Wrote', path.relative(process.cwd(), filename))

      // Create the enabled-for-apps.json file used for
      // https://docs.github.com/en/rest/overview/endpoints-available-for-github-apps
      operationsEnabledForGitHubApps[schemaName] = {}
      for (const category of categories) {
        const categoryOperations = operations.filter((operation) => operation.category === category)

        // This is a collection of operations that have `enabledForGitHubApps = true`
        // It's grouped by resource title to make rendering easier
        operationsEnabledForGitHubApps[schemaName][category] = categoryOperations
          .filter((operation) => operation.enabledForGitHubApps)
          .map((operation) => ({
            slug: operation.slug,
            verb: operation.verb,
            requestPath: operation.requestPath,
          }))
      }
    } catch (error) {
      console.error(error)
      console.log(
        "🐛 Whoops! It looks like the decorator script wasn't able to parse the dereferenced schema. A recent change may not yet be supported by the decorator. Please reach out in the #docs-engineering slack channel for help."
      )
      process.exit(1)
    }
  }
  await writeFile(
    path.join(appsStaticPath, 'enabled-for-apps.json'),
    JSON.stringify(operationsEnabledForGitHubApps, null, 2)
  )
  console.log('Wrote', path.relative(process.cwd(), `${appsStaticPath}/enabled-for-apps.json`))
  await writeFile(
    'lib/redirects/static/client-side-rest-api-redirects.json',
    JSON.stringify(clientSideRedirects, null, 2),
    'utf8'
  )
  console.log(
    'Wrote',
    path.relative(process.cwd(), `lib/redirects/static/client-side-rest-api-redirects.json`)
  )
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
