#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const program = require('commander')
const mkdirp = require('mkdirp').sync
const allVersions = require('../../lib/all-versions')
const graphqlStaticDir = path.join(process.cwd(), 'lib/graphql/static')
const graphqlDataDir = path.join(process.cwd(), 'data/graphql')

// [start-readme]
//
// This script creates the static GraphQL files for a new version.
//
// [end-readme]

program
  .description('Create GraphQL files in lib/graphql/static based on an existing version.')
  .option('-n, --newVersion <version>', 'The version to copy the files to. Must be in <plan@release> format.')
  .option('-o, --oldVersion <version>', 'The version to copy the files from. Must be in <plan@release> format.')
  .parse(process.argv)

const newVersion = program.newVersion
const oldVersion = program.oldVersion

if (!(newVersion && oldVersion)) {
  console.log('Error! You must provide --newVersion and --oldVersion.')
  process.exit(1)
}

if (!(Object.keys(allVersions).includes(newVersion) && Object.keys(allVersions).includes(oldVersion))) {
  console.log('Error! You must provide the full name of a currently supported version, e.g., enterprise-server@2.22.')
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

// the other files are objects with vers3091iuions as keys, so we need to require them
const previewsFile = path.join(graphqlStaticDir, 'previews.json')
const changesFile = path.join(graphqlStaticDir, 'upcoming-changes.json')
const objectsFile = path.join(graphqlStaticDir, 'prerendered-objects.json')

const previews = require(previewsFile)
const changes = require(changesFile)
const objects = require(objectsFile)

previews[newVersionId] = previews[oldVersionId]
changes[newVersionId] = changes[oldVersionId]
objects[newVersionId] = objects[oldVersionId]

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

// write the new files
fs.writeFileSync(previewsFile, JSON.stringify(previews, null, 2))
fs.writeFileSync(changesFile, JSON.stringify(changes, null, 2))
fs.writeFileSync(objectsFile, JSON.stringify(objects, null, 2))

// now create the new version directory in data/graphql
const srcDir = path.join(graphqlDataDir, oldVersionId)
const destDir = path.join(graphqlDataDir, newVersionId)
mkdirp(destDir)

// copy the files
fs.readdirSync(srcDir).forEach(file => {
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
