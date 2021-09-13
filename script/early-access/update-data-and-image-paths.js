#!/usr/bin/env node

// [start-readme]
//
// This script is run on a writer's machine while developing Early Access content locally. It
// updates the data and image paths to either include `early-access` or remove it.
//
// [end-readme]

import fs from 'fs'
import path from 'path'
import program from 'commander'
import walk from 'walk-sync'
import { escapeRegExp, last } from 'lodash-es'
import yaml from 'js-yaml'
import patterns from '../../lib/patterns.js'

const earlyAccessContent = path.posix.join(process.cwd(), 'content/early-access')
const earlyAccessData = path.posix.join(process.cwd(), 'data/early-access')
const earlyAccessImages = path.posix.join(process.cwd(), 'assets/images/early-access')

program
  .description('Update data and image paths.')
  .option(
    '-p, --path-to-early-access-content-file <PATH>',
    'Path to a specific content file. Defaults to all Early Access content files if not provided.'
  )
  .option('-a, --add', 'Add "early-access" to data and image paths.')
  .option('-r, --remove', 'Remove "early-access" from data and image paths.')
  .parse(process.argv)

const { add, remove, pathToEarlyAccessContentFile } = program.opts()

if (!(add || remove)) {
  console.error('Error! Must specify either `--add` or `--remove`.')
  process.exit(1)
}

let earlyAccessContentAndDataFiles
if (pathToEarlyAccessContentFile) {
  earlyAccessContentAndDataFiles = path.posix.join(process.cwd(), pathToEarlyAccessContentFile)

  if (!fs.existsSync(earlyAccessContentAndDataFiles)) {
    console.error(
      `Error! ${pathToEarlyAccessContentFile} can't be found. Make sure the path starts with 'content/early-access'.`
    )
    process.exit(1)
  }
  earlyAccessContentAndDataFiles = [earlyAccessContentAndDataFiles]
} else {
  // Gather the EA content and data files
  earlyAccessContentAndDataFiles = walk(earlyAccessContent, {
    includeBasePath: true,
    directories: false,
  }).concat(walk(earlyAccessData, { includeBasePath: true, directories: false }))
}

// Update the EA content and data files
earlyAccessContentAndDataFiles.forEach((file) => {
  const oldContents = fs.readFileSync(file, 'utf8')

  // Get all the data references in each file that exist in data/early-access
  const dataRefs = (oldContents.match(patterns.dataReference) || []).filter((dataRef) =>
    dataRef.includes('variables') ? checkVariable(dataRef) : checkReusable(dataRef)
  )

  // Get all the image references in each file that exist in assets/images/early-access
  const imageRefs = (oldContents.match(patterns.imagePath) || []).filter((imageRef) =>
    checkImage(imageRef)
  )

  const replacements = {}

  if (add) {
    dataRefs
      // Since we're adding early-access to the path, filter for those that do not already include it
      .filter((dataRef) => !dataRef.includes('data early-access.'))
      // Add to the { oldRef: newRef } replacements object
      .forEach((dataRef) => {
        replacements[dataRef] = dataRef.replace(/({% data )(.*)/, '$1early-access.$2')
      })

    imageRefs
      // Since we're adding early-access to the path, filter for those that do not already include it
      .filter((imageRef) => !imageRef.split('/').includes('early-access'))
      // Add to the { oldRef: newRef } replacements object
      .forEach((imageRef) => {
        replacements[imageRef] = imageRef.replace('/assets/images/', '/assets/images/early-access/')
      })
  }

  if (remove) {
    dataRefs
      // Since we're removing early-access from the path, filter for those that include it
      .filter((dataRef) => dataRef.includes('{% data early-access.'))
      // Add to the { oldRef: newRef } replacements object
      .forEach((dataRef) => {
        replacements[dataRef] = dataRef.replace('early-access.', '')
      })

    imageRefs
      // Since we're removing early-access from the path, filter for those that include it
      .filter((imageRef) => imageRef.split('/').includes('early-access'))
      // Add to the { oldRef: newRef } replacements object
      .forEach((imageRef) => {
        replacements[imageRef] = imageRef.replace('/assets/images/early-access/', '/assets/images/')
      })
  }

  // Return early if nothing to replace
  if (!Object.keys(replacements).length) {
    return
  }

  // Make the replacement in the content
  let newContents = oldContents
  Object.entries(replacements).forEach(([oldRef, newRef]) => {
    newContents = newContents.replace(new RegExp(escapeRegExp(oldRef), 'g'), newRef)
  })

  // Write the updated content
  fs.writeFileSync(file, newContents)
})

console.log('Done! Run "git status" in your docs-early-access checkout to see the changes.\n')

function checkVariable(dataRef) {
  // Get the data filepath from the data reference,
  // where the data reference looks like: {% data variables.foo.bar %}
  // and the data filepath looks like: data/variables/foo.yml with key of 'bar'.
  const variablePathArray = dataRef
    .match(/{% data (.*?) %}/)[1]
    .split('.')
    // If early access is part of the path, remove it (since the path below already includes it)
    .filter((n) => n !== 'early-access')

  // Given a string `variables.foo.bar` split into an array, we want the last segment 'bar', which is the variable key.
  // Then pop 'bar' off the array because it's not really part of the filepath.
  // The filepath we want is `variables/foo.yml`.
  const variableKey = last(variablePathArray)
  variablePathArray.pop()
  const variablePath = path.posix.join(earlyAccessData, `${variablePathArray.join('/')}.yml`)

  // If the variable file doesn't exist in data/early-access, exclude it
  if (!fs.existsSync(variablePath)) return false

  // If the variable file exists but doesn't have the referenced key, exclude it
  const variableFileContent = yaml.load(fs.readFileSync(variablePath, 'utf8'))
  return variableFileContent[variableKey]
}

function checkReusable(dataRef) {
  // Get the data filepath from the data reference,
  // where the data reference looks like: {% data reusables.foo.bar %}
  // and the data filepath looks like: data/reusables/foo/bar.md.
  const reusablePath = dataRef
    .match(/{% data (.*?) %}/)[1]
    .split('.')
    // If early access is part of the path, remove it (since the path below already includes it)
    .filter((n) => n !== 'early-access')
    .join('/')

  // If the reusable file doesn't exist in data/early-access, exclude it
  return fs.existsSync(`${path.posix.join(earlyAccessData, reusablePath)}.md`)
}

function checkImage(imageRef) {
  const imagePath = imageRef
    .replace('/assets/images/', '')
    // If early access is part of the path, remove it (since the path below already includes it)
    .replace('early-access', '')

  // If the image file doesn't exist in assets/images/early-access, exclude it
  return fs.existsSync(path.posix.join(earlyAccessImages, imagePath))
}
