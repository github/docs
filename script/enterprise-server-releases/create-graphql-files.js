#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import program from 'commander'
import xMkdirp from 'mkdirp'
import { allVersions } from '../../lib/all-versions.js'

const mkdirp = xMkdirp.sync
const graphqlStaticDir = path.join(process.cwd(), 'lib/graphql/static')
const graphqlDataDir = path.join(process.cwd(), 'data/graphql')

// [start-readme]
//
// This script creates the static GraphQL files for a new version.
//
// [end-readme]

program
  .description('Create GraphQL files in lib/graphql/static based on an existing version.')
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
fs.copyFileSync(oldSchemaFile, newSchemaFile)

// check that it worked
if (!fs.existsSync(newSchemaFile)) {
  console.log(`Error! Can't find ${newSchemaFile}.`)
  process.exit(1)
}

// the other files are objects with versions as keys, so we need to require them
const previewsFile = path.join(graphqlStaticDir, 'previews.json')
const changesFile = path.join(graphqlStaticDir, 'upcoming-changes.json')
const objectsFile = path.join(graphqlStaticDir, 'prerendered-objects.json')
const inputObjectsFile = path.join(graphqlStaticDir, 'prerendered-input-objects.json')

const previews = JSON.parse(fs.readFileSync(previewsFile))
const changes = JSON.parse(fs.readFileSync(changesFile))
const objects = JSON.parse(fs.readFileSync(objectsFile))
const inputObjects = JSON.parse(fs.readFileSync(inputObjectsFile))
// The prerendered objects file for the "old version" contains hardcoded links with the old version number.
// We need to update those links to include the new version to prevent a test from failing.
const regexOldVersion = new RegExp(oldVersion, 'gi')
const stringifiedObject = JSON.stringify(objects[oldVersionId]).replace(regexOldVersion, newVersion)
const stringifiedInputObject = JSON.stringify(inputObjects[oldVersionId]).replace(
  regexOldVersion,
  newVersion
)

previews[newVersionId] = previews[oldVersionId]
changes[newVersionId] = changes[oldVersionId]
objects[newVersionId] = JSON.parse(stringifiedObject)
inputObjects[newVersionId] = JSON.parse(stringifiedInputObject)

// check that it worked
if (!Object.keys(previews).includes(newVersionId)) {
  console.log(`Error! Can't find ${newVersionId} in ${previewsFile}.`)
  process.exit(1)
}

if (!Object.keys(changes).includes(newVersionId)) {
  console.log(`Error! Can't find ${newVersionId} in ${changesFile}.`)
  process.exit(1)
}

if (!Object.keys(objects).includes(newVersionId)) {
  console.log(`Error! Can't find ${newVersionId} in ${objectsFile}.`)
  process.exit(1)
}

if (!Object.keys(inputObjects).includes(newVersionId)) {
  console.log(`Error! Can't find ${newVersionId} in ${inputObjectsFile}.`)
  process.exit(1)
}

// write the new files
fs.writeFileSync(previewsFile, JSON.stringify(previews, null, 2))
fs.writeFileSync(changesFile, JSON.stringify(changes, null, 2))
fs.writeFileSync(objectsFile, JSON.stringify(objects, null, 2))
fs.writeFileSync(inputObjectsFile, JSON.stringify(inputObjects, null, 2))

// now create the new version directory in data/graphql
const srcDir = path.join(graphqlDataDir, oldVersionId)
const destDir = path.join(graphqlDataDir, newVersionId)
mkdirp(destDir)

// copy the files
fs.readdirSync(srcDir).forEach((file) => {
  const srcFile = path.join(srcDir, file)
  const destFile = path.join(destDir, file)
  fs.copyFileSync(srcFile, destFile)
})

// check that it worked
if (!fs.existsSync(destDir)) {
  console.log(`Error! A new directory was not successfully created at ${destDir}.`)
  process.exit(1)
}

if (!fs.readdirSync(destDir).length) {
  console.log(`Error! The directory created at ${destDir} is empty.`)
  process.exit(1)
}

// print success message
console.log(`Done! Copied ${oldVersion} GraphQL files to ${newVersion} files.`)
