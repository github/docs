#!/usr/bin/env node

// [start-readme]
//
// This script is run as a postbuild script during staging and deployments on Heroku.
// If you have access to the PAT, it can also be run locally to clone https://github.com/docs/early-access.
// The script clones a branch in the early-access repo that matches the current branch in the docs repo;
// if one can't be found, it clones the `main` branch.
//
// [end-readme]

require('dotenv').config()
const { DOCUBOT_REPO_PAT, HEROKU_PRODUCTION_APP } = process.env

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
const yaml = require('js-yaml')
const eaConfig = yaml.load(fs.readFileSync(path.join(process.cwd(), 'ea-config.yml'), 'utf8'))

// Early Access details
const earlyAccessOwner = 'github'
const earlyAccessRepoName = 'docs-early-access'
const earlyAccessDirName = 'early-access'
const earlyAccessFullRepo = `https://${DOCUBOT_REPO_PAT}@github.com/${earlyAccessOwner}/${earlyAccessRepoName}`

const earlyAccessCloningParentDir = os.tmpdir()
const earlyAccessCloningDir = path.join(earlyAccessCloningParentDir, earlyAccessRepoName)

const destinationDirNames = ['content', 'data', 'assets']
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
const earlyAccessBranch = HEROKU_PRODUCTION_APP ? eaConfig.EA_PRODUCTION_BRANCH : eaConfig.EA_STAGING_BRANCH

// Confirm that the branch exists in the remote
const branchExists = execSync(`git ls-remote --heads ${earlyAccessFullRepo} ${earlyAccessBranch}`).toString()
if (!branchExists) {
  console.error(`The branch '${earlyAccessBranch}' was not found in ${earlyAccessOwner}/${earlyAccessRepoName}. Exiting!`)
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
