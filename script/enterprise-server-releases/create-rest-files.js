#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import program from 'commander'
import allVersions from '../../lib/all-versions.js'
import getOperations from '../rest/utils/get-operations.js'

const dereferencedDir = 'lib/rest/static/dereferenced'
const decoratedDir = 'lib/rest/static/decorated'

// [start-readme]
//
// This script first copies the dereferenced schema from the previous GHES version for the new one.
// It then replaces references to the previous version's docs URL (e.g., enterprise-server@3.0) with the new version (e.g., enterprise-server@3.1).
// Finally, it generates a new decorated file from the new dereferenced file to ensure that the dereferenced and decorated files match.
//
// [end-readme]

program
  .description(
    'Create new openAPI files in lib/rest/static/decorated and lib/rest/static/dereferenced based on an existing version.'
  )
  .option(
    '-n, --newVersion <version>',
    'The new version to copy the REST files to. Must be in <plan@release> format.'
  )
  .option(
    '-o, --oldVersion <version>',
    'The existing version to copy the REST files from. Must be in <plan@release> format.'
  )
  .parse(process.argv)

const newVersion = program.opts().newVersion
const oldVersion = program.opts().oldVersion

if (!(newVersion && oldVersion)) {
  console.log('Error! You must provide --newVersion and --oldVersion.')
  process.exit(1)
}

if (
  !(Object.keys(allVersions).includes(newVersion) && Object.keys(allVersions).includes(oldVersion))
) {
  console.log(
    'Error! You must provide the full name of a currently supported version, e.g., enterprise-server@2.22.'
  )
  process.exit(1)
}

main()

async function main() {
  const oldDereferencedFilename = `${allVersions[oldVersion].openApiVersionName}.deref.json`
  const newDereferencedFilename = `${allVersions[newVersion].openApiVersionName}.deref.json`
  const newDecoratedFilename = `${allVersions[newVersion].openApiVersionName}.json`

  const oldDereferencedFile = path.join(dereferencedDir, oldDereferencedFilename)
  const newDereferencedFile = path.join(dereferencedDir, newDereferencedFilename)
  const newDecoratedFile = path.join(decoratedDir, newDecoratedFilename)

  // check that the old files exist
  if (!fs.existsSync(oldDereferencedFile)) {
    console.log(`Error! Can't find ${oldDereferencedFile} for ${oldVersion}.`)
    process.exit(1)
  }

  const oldDereferencedContent = fs.readFileSync(oldDereferencedFile, 'utf8')

  // Replace old version with new version
  // (ex: enterprise-server@3.0 -> enterprise-server@3.1)
  const regexOldVersion = new RegExp(oldVersion, 'gi')
  const newDereferenceContent = oldDereferencedContent.replace(regexOldVersion, newVersion)

  // Write processed dereferenced schema to disk
  fs.writeFileSync(newDereferencedFile, newDereferenceContent)
  console.log(`Created ${newDereferencedFile}.`)

  const dereferencedSchema = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), newDereferencedFile))
  )

  // Store all operations in an array of operation objects
  const operations = await getOperations(dereferencedSchema)

  // Process each operation asynchronously
  await Promise.all(operations.map((operation) => operation.process()))

  // Write processed operations to disk
  fs.writeFileSync(newDecoratedFile, JSON.stringify(operations, null, 2))
  console.log(`Done! Created ${newDecoratedFile}.`)
}
