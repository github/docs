#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const program = require('commander')
const { execSync } = require('child_process')
const mkdirp = require('mkdirp').sync
const rimraf = require('rimraf').sync
const tempDocsDir = path.join(process.cwd(), 'openapiTmp')
const githubRepoDir = path.join(process.cwd(), '../github')
const dereferencedPath = path.join(process.cwd(), 'lib/rest/static/dereferenced')
const schemas = fs.readdirSync(dereferencedPath)
const getOperations = require('./utils/get-operations')
const decoratedPath = path.join(process.cwd(), 'lib/rest/static/decorated')

// [start-readme]
//
// Run this script to pull openAPI files from github/github, dereference them, and decorate them.
//
// [end-readme]

program
  .description('Generate dereferenced OpenAPI and decorated schema files.')
  .option('--decorate-only', '⚠️ Only used by a 🤖 to generate decorated schema files from existing dereferenced schema files.')
  .parse(process.argv)

const decorateOnly = program.decorateOnly

main()

async function main () {
  // Generate the dereferenced OpenAPI schema files
  if (!decorateOnly) {
    if (!fs.existsSync(githubRepoDir)) {
      console.log(`🛑 The ${githubRepoDir} does not exist. Make sure you have a local, bootstrapped checkout of github/github at the same level as your github/docs-internal repo before running this script.`)
      process.exit(1)
    }

    getDereferencedFiles()
  }

  await decorate()

  console.log('\n🏁 The static REST API files are now up-to-date with your local `github/github` checkout. To revert uncommitted changes, run `git checkout lib/rest/static/*.\n\n')
}

async function getDereferencedFiles () {
  // Get the github/github repo branch name and pull latest
  const githubBranch = execSync('git rev-parse --abbrev-ref HEAD', { cwd: githubRepoDir }).toString().trim()

  // Only pull master branch because development mode branches are assumed
  // to be up-to-date during active work.
  if (githubBranch === 'master') {
    execSync('git pull', { cwd: githubRepoDir })
  }

  // create a tmp directory to store schema files generated from github/github
  rimraf(tempDocsDir)
  mkdirp(tempDocsDir)

  console.log(`\n🏃‍♀️🏃🏃‍♀️Running \`bin/openapi bundle\` in branch '${githubBranch}' of your github/github checkout to generate the dereferenced OpenAPI schema files.\n`)
  execSync(`${path.join(githubRepoDir, 'bin/openapi')} bundle ${tempDocsDir}`, { stdio: 'inherit' })

  execSync(`find ${tempDocsDir} -type f -name "*deref.json" -exec mv '{}' ${dereferencedPath} ';'`)

  rimraf(tempDocsDir)

  // When running in development mode (locally), the the info.version
  // property in the dereferenced schema is replaced with the branch
  // name of the `github/github` checkout. A CI test
  // checks the version and fails if it's not a semantic version.
  schemas.forEach(filename => {
    const schema = require(path.join(dereferencedPath, filename))
    schema.info.version = `${githubBranch} !!DEVELOPMENT MODE - DO NOT MERGE!!`
    fs.writeFileSync(path.join(dereferencedPath, filename), JSON.stringify(schema, null, 2))
  })
}

async function decorate () {
  console.log('\n🎄 Decorating the OpenAPI schema files in lib/rest/static/dereferenced.\n')

  const dereferencedSchemas = schemas.reduce((acc, filename) => {
    const schema = require(path.join(dereferencedPath, filename))
    const key = filename.replace('.deref.json', '')
    return { ...acc, [key]: schema }
  }, {})

  for (const [schemaName, schema] of Object.entries(dereferencedSchemas)) {
    // munge OpenAPI definitions object in an array of operations objects
    const operations = await getOperations(schema)

    // process each operation, asynchronously rendering markdown and stuff
    await Promise.all(operations.map(operation => operation.process()))

    const filename = path.join(decoratedPath, `${schemaName}.json`)
      .replace('.deref', '')
    // write processed operations to disk
    fs.writeFileSync(filename, JSON.stringify(operations, null, 2))

    console.log('Wrote', path.relative(process.cwd(), filename))
  }
}
