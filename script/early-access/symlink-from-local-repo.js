#!/usr/bin/env node

// [start-readme]
//
// This script is run on a writer's machine while developing Early Access content locally.
// You must pass the script the location of your local copy of
// the `github/docs-early-access` git repo as the first argument.
//
// [end-readme]

import rimraf from 'rimraf'
import fs from 'fs'
import path from 'path'
import program from 'commander'

// Early Access details
const earlyAccessRepo = 'docs-early-access'
const earlyAccessDirName = 'early-access'
const earlyAccessRepoUrl = `https://github.com/github/${earlyAccessRepo}`

program
  .description(`Create or destroy symlinks to your local "${earlyAccessRepo}" repository.`)
  .option(
    '-p, --path-to-early-access-repo <PATH>',
    `path to a local checkout of ${earlyAccessRepoUrl}`
  )
  .option('-u, --unlink', 'remove the symlinks')
  .parse(process.argv)

const { pathToEarlyAccessRepo, unlink } = program.opts()

if (!pathToEarlyAccessRepo && !unlink) {
  throw new Error('Must provide either `--path-to-early-access-repo <PATH>` or `--unlink`')
}

let earlyAccessLocalRepoDir

// If creating symlinks, run some extra validation
if (!unlink && pathToEarlyAccessRepo) {
  earlyAccessLocalRepoDir = path.resolve(process.cwd(), pathToEarlyAccessRepo)

  let dirStats
  try {
    dirStats = fs.statSync(earlyAccessLocalRepoDir)
  } catch (err) {
    dirStats = null
  }

  if (!dirStats) {
    throw new Error(
      `The local "${earlyAccessRepo}" repo directory does not exist:`,
      earlyAccessLocalRepoDir
    )
  }
  if (dirStats && !dirStats.isDirectory()) {
    throw new Error(
      `A non-directory entry exists at the local "${earlyAccessRepo}" repo directory location:`,
      earlyAccessLocalRepoDir
    )
  }
}

const destinationDirNames = ['content', 'data', 'assets/images']
const destinationDirsMap = destinationDirNames.reduce((map, dirName) => {
  map[dirName] = path.join(process.cwd(), dirName, earlyAccessDirName)
  return map
}, {})

// Remove all existing early access directories from this repo
destinationDirNames.forEach((dirName) => {
  const destDir = destinationDirsMap[dirName]
  rimraf.sync(destDir)
  console.log(`- Removed symlink for early access directory '${dirName}' from this repo`)
})

// If removing symlinks, just stop here!
if (unlink) {
  process.exit(0)
}

//
// Otherwise, keep going...
//

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
    throw new Error(
      `The early access directory '${dirName}' entry's symbolic link does not refer to a directory!`
    )
  }

  console.log(`+ Added symlink for early access directory '${dirName}' into this repo`)
})
