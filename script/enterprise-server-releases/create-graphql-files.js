#!/usr/bin/env node

// [start-readme]
//
// This script creates the static GraphQL files for a new version.
//
// [end-readme]

import fs from 'fs/promises'
import path from 'path'
import { program } from 'commander'
import mkdirp from 'mkdirp'
import { allVersions } from '../../lib/all-versions.js'

const graphqlStaticDir = path.join(process.cwd(), 'src/graphql/data')
const graphqlDataDir = path.join(process.cwd(), 'data/graphql')

program
  .description('Create GraphQL files in src/graphql/data based on an existing version.')
  .option(
    '-n, --newVersion <version>',
    'The version to copy the files to. Must be in <plan@release> format.'
  )
  .option(
    '-o, --oldVersion <version>',
    'The version to copy the files from. Must be in <plan@release> format.'
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

const newVersionId = allVersions[newVersion].miscVersionName
const oldVersionId = allVersions[oldVersion].miscVersionName

// copy the schema file wholesale (there are separate schema files per version)
const newSchemaFile = path.join(graphqlStaticDir, `schema-${newVersionId}.json`)
const oldSchemaFile = path.join(graphqlStaticDir, `schema-${oldVersionId}.json`)
await fs.copyFile(oldSchemaFile, newSchemaFile)

// check that it worked
try {
  await fs.readFile(newSchemaFile)
} catch (e) {
  console.log(`Error! Can't find ${newSchemaFile}.`)
  process.exit(1)
}

// the other files are objects with versions as keys, so we need to require them
const previewsFile = path.join(graphqlStaticDir, 'previews.json')
const changesFile = path.join(graphqlStaticDir, 'upcoming-changes.json')

const previews = JSON.parse(await fs.readFile(previewsFile))
const changes = JSON.parse(await fs.readFile(changesFile))

previews[newVersionId] = previews[oldVersionId]
changes[newVersionId] = changes[oldVersionId]

// check that it worked
if (!Object.keys(previews).includes(newVersionId)) {
  console.log(`Error! Can't find ${newVersionId} in ${previewsFile}.`)
  process.exit(1)
}

if (!Object.keys(changes).includes(newVersionId)) {
  console.log(`Error! Can't find ${newVersionId} in ${changesFile}.`)
  process.exit(1)
}

// write the new files
await fs.writeFile(previewsFile, JSON.stringify(previews, null, 2))
await fs.writeFile(changesFile, JSON.stringify(changes, null, 2))

// now create the new version directory in data/graphql
const srcDir = path.join(graphqlDataDir, oldVersionId)
const destDir = path.join(graphqlDataDir, newVersionId)
await mkdirp(destDir)

// copy the files
const files = await fs.readdir(srcDir)
for (const file of files) {
  const srcFile = path.join(srcDir, file)
  const destFile = path.join(destDir, file)
  await fs.copyFile(srcFile, destFile)
}

// check that it worked
try {
  const destDirResult = await fs.readdir(destDir)
  if (!destDirResult.length) {
    console.log(`Error! The directory created at ${destDir} is empty.`)
    process.exit(1)
  }
} catch (e) {
  console.log(`Error! A new directory was not successfully created at ${destDir}.`)
  process.exit(1)
}

// print success message
console.log(`Done! Copied ${oldVersion} GraphQL files to ${newVersion} files.`)
