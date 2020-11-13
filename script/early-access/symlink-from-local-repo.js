#!/usr/bin/env node

// [start-readme]
//
// This script is run on a writer's machine while developing Early Access content locally.
// You must pass the script the location of your local copy of
// the `github/docs-early-access` git repo as the first argument.
//
// [end-readme]

const rimraf = require('rimraf').sync
const fs = require('fs')
const path = require('path')

// Early Access details
const earlyAccessDirName = 'early-access'

if (!process.argv[2]) {
  throw new Error('Must provide the location of your local `docs-early-access` repo directory')
}

const earlyAccessLocalRepoDir = path.resolve(process.cwd(), process.argv[2])

let dirStats
try {
  dirStats = fs.statSync(earlyAccessLocalRepoDir)
} catch (err) {
  dirStats = null
}

if (!dirStats) {
  throw new Error('The local `docs-early-access` repo directory does not exist:', earlyAccessLocalRepoDir)
}
if (dirStats && !dirStats.isDirectory()) {
  throw new Error('A non-directory entry exists at the local `docs-early-access` repo directory location:', earlyAccessLocalRepoDir)
}

const destinationDirNames = ['content', 'data', 'assets/images']
const destinationDirsMap = destinationDirNames
  .reduce(
    (map, dirName) => {
      map[dirName] = path.join(process.cwd(), dirName, earlyAccessDirName)
      return map
    },
    {}
  )

// Remove all existing early access directories from this repo
destinationDirNames.forEach(key => rimraf(destinationDirsMap[key]))

// Move the latest early access source directories into this repo
destinationDirNames.forEach((dirName) => {
  const sourceDir = path.join(earlyAccessLocalRepoDir, dirName)
  const destDir = destinationDirsMap[dirName]

  // If the source directory doesn't exist, skip it
  if (!fs.existsSync(sourceDir)) {
    console.warn(`Early access directory '${dirName}' does not exist. Skipping...`)
    return
  }

  // Create a symbolic link to the directory
  fs.symlinkSync(sourceDir, destDir, 'junction')

  // Confirm the newly moved directory exist
  if (!fs.existsSync(destDir)) {
    throw new Error(`Failed to symlink early access directory '${dirName}'!`)
  }
  if (!fs.lstatSync(destDir).isSymbolicLink()) {
    throw new Error(`The early access directory '${dirName}' entry is not a symbolic link!`)
  }
  if (!fs.statSync(destDir).isDirectory()) {
    throw new Error(`The early access directory '${dirName}' entry's symbolic link does not refer to a directory!`)
  }

  console.log(`Successfully symlinked early access directory '${dirName}' into this repo`)
})
