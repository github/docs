#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const findUnusedAssets = require('../lib/find-unused-assets')

// [start-readme]
//
// Run this script to remove reusables and image files that exist in the repo but
// are not used in content files. It also displays a list of unused variables. Set
// the `--dry-run` to flag to print results without deleting any files. For images
// you don't want to delete, add them to `ignoreList` in `lib/find-unused-assets.js`
//
// [end-readme]

const dryRun = process.argv.slice(2).includes('--dry-run')
main()

async function main () {
  if (dryRun) {
    console.log('This is a dry run! The script will report unused files without deleting anything.')
  }

  removeUnusedReusables(await findUnusedAssets('reusables'))
  removeUnusedImages(await findUnusedAssets('images'))
  printUnusedVariables(await findUnusedAssets('variables'))
}

function removeUnusedReusables (reusables) {
  logMessage(reusables, 'reusable')

  reusables.forEach(reusable => {
    const reusablePath = path.join(__dirname, '..', reusable
      .replace('site', '')
      .replace(/\./g, '/')
      .replace(/$/, '.md'))
    dryRun
      ? console.log(reusable)
      : fs.unlinkSync(reusablePath)
  })
}

function removeUnusedImages (images) {
  logMessage(images, 'image')

  images.forEach(image => {
    const imagePath = path.join(__dirname, '..', image)
    dryRun
      ? console.log(image)
      : fs.unlinkSync(imagePath)
  })
}

// multiple variables are embedded in within the same YML file
// so we can't just delete the files, and we can't parse/modify
// them either because js-yaml does not preserve whitespace :[
function printUnusedVariables (variables) {
  logMessage(variables, 'variable')

  variables.forEach(variable => {
    const variableKey = variable.split('.').pop()
    const variablePath = path.join(process.cwd(), variable
      .replace('site', '')
      .replace(`.${variableKey}`, '')
      .replace(/\./g, '/')
      .replace(/$/, '.yml'))
    dryRun
      ? console.log(variable)
      : console.log(`* found but did not delete '${variableKey}' in ${variablePath.replace(process.cwd(), '')}`)
  })

  if (!dryRun) console.log('\nYou will need to manually delete any variables you want to remove.')
}

function logMessage (list, type) {
  let action

  if (dryRun) {
    action = '\n**Found'
  } else {
    action = type === 'variable'
      ? ':eyes: **Found'
      : ':scissors: **Removed'
  }

  console.log(`${action} ${list.length} unused ${type} ${list.length === 1 ? 'file' : 'files'}**\n`)
}
