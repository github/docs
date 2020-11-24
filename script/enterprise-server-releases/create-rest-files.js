#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const program = require('commander')
const allVersions = require('../../lib/all-versions')
const dereferencedDir = 'lib/rest/static/dereferenced'
const decoratedDir = 'lib/rest/static/decorated'

// [start-readme]
//
// This script creates new static openAPI files for a new version and modifies the info.version.
//
// [end-readme]

program
  .description('Create new openAPI files in lib/rest/static/decorated and lib/rest/static/dereferenced based on an existing version.')
  .option('-n, --newVersion <version>', 'The new version to copy the REST files to. Must be in <plan@release> format.')
  .option('-o, --oldVersion <version>', 'The existing version to copy the REST files from. Must be in <plan@release> format.')
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

const oldDereferencedFilename = `${allVersions[oldVersion].openApiVersionName}.deref.json`
const newDereferencedFilename = `${allVersions[newVersion].openApiVersionName}.deref.json`
const oldDecoratedFilename = `${allVersions[oldVersion].openApiVersionName}.json`
const newDecoratedFilename = `${allVersions[newVersion].openApiVersionName}.json`

const oldDereferencedFile = path.join(dereferencedDir, oldDereferencedFilename)
const newDereferencedFile = path.join(dereferencedDir, newDereferencedFilename)
const oldDecoratedFile = path.join(decoratedDir, oldDecoratedFilename)
const newDecoratedFile = path.join(decoratedDir, newDecoratedFilename)

// check that the old files exist
if (!fs.existsSync(oldDereferencedFile)) {
  console.log(`Error! Can't find ${oldDereferencedFile} for ${oldVersion}.`)
  process.exit(1)
}

if (!fs.existsSync(oldDecoratedFile)) {
  console.log(`Error! Can't find ${oldDecoratedFile} for ${oldVersion}.`)
  process.exit(1)
}

// copy the files
fs.copyFileSync(oldDereferencedFile, newDereferencedFile)
fs.copyFileSync(oldDecoratedFile, newDecoratedFile)

// check that it worked
if (!fs.existsSync(newDereferencedFile)) {
  console.log(`Error! Can't find ${newDereferencedFile} for ${oldVersion}.`)
  process.exit(1)
}

if (!fs.existsSync(newDecoratedFile)) {
  console.log(`Error! Can't find ${newDecoratedFile} for ${oldVersion}.`)
  process.exit(1)
}

// set the info.version to development mode
const derefFilepath = path.join(process.cwd(), newDereferencedFile)
const derefSchema = require(derefFilepath)
console.log(derefSchema.info.version)
derefSchema.info.version = `Copy of ${oldVersion} !!DEVELOPMENT MODE - DO NOT MERGE!!`
fs.writeFileSync(derefFilepath, JSON.stringify(derefSchema, null, 2))

// print success message
console.log(`Done! Created ${newDereferencedFile} and ${newDecoratedFile}.`)
