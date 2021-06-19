#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
const semver = require('semver')

/*
 * This script performs two checks to prevent shipping development mode OpenAPI schemas:
*  - Ensures the `info.version` property is a semantic version. 
*    In development mode, the `info.version` property is a string
*    containing the `github/github` branch name.
*  - Ensures the decorated schema matches the dereferenced schema.
*    The workflow that calls this script runs `script/rest/update-files.js` 
*    with the `--decorate-only` switch then checks to see if files changed.
* 
*/

// Check that the `info.version` property is a semantic version
const dereferencedDir = path.join(process.cwd(), 'lib/rest/static/dereferenced')
const schemas = fs.readdirSync(dereferencedDir)
schemas.forEach(filename => {
  const schema = require(path.join(dereferencedDir, filename))
  if (!semver.valid(schema.info.version)) {
    console.log(`🚧⚠️ Your branch contains a development mode OpenAPI schema: ${schema.info.version}. This check is a reminder to not 🚢 OpenAPI files in development mode. 🛑`)
    process.exit(1)
  }
})

// Check that the decorated schema matches the dereferenced schema
const changedFiles = execSync('git diff --name-only HEAD').toString()

if(changedFiles !== '') {
  console.log(`These files were changed:\n${changedFiles}`)
  console.log(`🚧⚠️ Your decorated and dereferenced schema files don't match. Ensure you're using decorated and dereferenced schemas from the automatically created pull requests by the 'github-openapi-bot' user. For more information, see 'script/rest/README.md'. 🛑`)
    process.exit(1)
}

// All checks pass, ready to ship
console.log('All good 👍')
process.exit(0)
