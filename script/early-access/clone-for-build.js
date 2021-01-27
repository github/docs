#!/usr/bin/env node

// [start-readme]
//
// This script is run as a postbuild script during staging and deployments on Heroku. It clones a branch
// in the early-access repo that matches the current branch in the docs repo; if one can't be found, it
// clones the `main` branch.
//
// [end-readme]

require('dotenv').config()
const {
  DOCUBOT_REPO_PAT,
  HEROKU_PRODUCTION_APP,
  GIT_BRANCH // Set by the deployer with the name of the docs-internal branch
} = process.env

// Exit if PAT is not found
if (!DOCUBOT_REPO_PAT) {
  console.log('Skipping early access, not authorized')
  process.exit(0)
}

const { execSync } = require('child_process')
const rimraf = require('rimraf').sync
const fs = require('fs')
const path = require('path')
const os = require('os')
const EA_PRODUCTION_BRANCH = 'main'

// If a branch name is not provided in the environment, attempt to get
// the local branch name; or default to 'main'
let currentBranch = (GIT_BRANCH || '').replace(/^refs\/heads\//, '')
if (!currentBranch) {
  try {
    currentBranch = execSync('git branch --show-current').toString()
  } catch (err) {
    // Ignore but log
    console.warn('Error checking for local branch:', err.message)
  }
}
if (!currentBranch) {
  currentBranch = EA_PRODUCTION_BRANCH
}

// Early Access details
const earlyAccessOwner = 'github'
const earlyAccessRepoName = 'docs-early-access'
const earlyAccessDirName = 'early-access'
const earlyAccessFullRepo = `https://${DOCUBOT_REPO_PAT}@github.com/${earlyAccessOwner}/${earlyAccessRepoName}`

// On our Azure self-hosted runners, os.tmpdir() doesn't work reliably. On Heroku, os.homedir doesn't work reliably.
const earlyAccessCloningParentDir = process.env.CI ? os.homedir() : os.tmpdir()
const earlyAccessCloningDir = path.join(earlyAccessCloningParentDir, earlyAccessRepoName)

const destinationDirNames = ['content', 'data', 'assets/images']
const destinationDirsMap = destinationDirNames
  .reduce(
    (map, dirName) => {
      map[dirName] = path.join(process.cwd(), dirName, earlyAccessDirName)
      return map
    },
    {}
  )

// Production vs. staging environment
// TODO test that this works as expected
const environment = HEROKU_PRODUCTION_APP ? 'production' : 'staging'

// Early access branch to clone
let earlyAccessBranch = HEROKU_PRODUCTION_APP ? EA_PRODUCTION_BRANCH : currentBranch

// Confirm that the branch exists in the remote
let branchExists = execSync(`git ls-remote --heads ${earlyAccessFullRepo} ${earlyAccessBranch}`).toString()

// If the branch did NOT exist, try checking for the default branch instead
if (!branchExists && earlyAccessBranch !== EA_PRODUCTION_BRANCH) {
  console.warn(`The branch '${earlyAccessBranch}' was not found in ${earlyAccessOwner}/${earlyAccessRepoName}!`)
  console.warn(`Attempting the default branch ${EA_PRODUCTION_BRANCH} instead...`)

  earlyAccessBranch = EA_PRODUCTION_BRANCH
  branchExists = execSync(`git ls-remote --heads ${earlyAccessFullRepo} ${earlyAccessBranch}`).toString()
}

// If no suitable branch was found, bail out now
if (!branchExists) {
  console.error(`The branch '${earlyAccessBranch}' was not found in ${earlyAccessOwner}/${earlyAccessRepoName}!`)
  console.error('Exiting!')
  process.exit(1)
}

// Remove any previously cloned copies of the early access repo
rimraf(earlyAccessCloningDir)

// Clone the repo
console.log(`Setting up: ${earlyAccessCloningDir}`)
execSync(
  `git clone --single-branch --branch ${earlyAccessBranch} ${earlyAccessFullRepo} ${earlyAccessRepoName}`,
  {
    cwd: earlyAccessCloningParentDir
  }
)
console.log(`Using early-access ${environment} branch: '${earlyAccessBranch}'`)

// Remove all existing early access directories from this repo
destinationDirNames.forEach(key => rimraf(destinationDirsMap[key]))

// Move the latest early access source directories into this repo
destinationDirNames.forEach((dirName) => {
  const sourceDir = path.join(earlyAccessCloningDir, dirName)
  const destDir = destinationDirsMap[dirName]

  // If the source directory doesn't exist, skip it
  if (!fs.existsSync(sourceDir)) {
    console.warn(`Early access directory '${dirName}' does not exist. Skipping...`)
    return
  }

  // Move the directory from the cloned source to the destination
  fs.renameSync(sourceDir, destDir)

  // Confirm the newly moved directory exist
  if (fs.existsSync(destDir)) {
    console.log(`Successfully moved early access directory '${dirName}' into this repo`)
  } else {
    throw new Error(`Failed to move early access directory '${dirName}'!`)
  }
})

// Remove the source content again for good hygiene
rimraf(earlyAccessCloningDir)
