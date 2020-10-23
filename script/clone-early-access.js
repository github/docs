#!/usr/bin/env node

// [start-readme]
//
// This script is run as a prebuild script during staging and deployments on Heroku.
// If you have access to the PAT, it can also be run locally to clone https://github.com/docs/early-access.
// The script clones a branch in the early-access repo that matches the current branch in the docs repo;
// if one can't be found, it clones the `main` branch.
//
// [end-readme]

require('dotenv').config()
// const { GITHUB_DOCUBOT_REPO_PAT, EARLY_ACCESS_ENABLED, HEROKU_PRODUCTION_APP } = process.env
const { GITHUB_DOCUBOT_REPO_PAT, HEROKU_PRODUCTION_APP } = process.env

// TODO...
// // Exit if early access is not enabled
// if (!EARLY_ACCESS_ENABLED) {
//   console.log('Skipping early access, not enabled')
//   process.exit(0)
// }

// Exit if PAT is not found
if (!process.env.GITHUB_DOCUBOT_REPO_PAT) {
  console.log('Skipping early access, not authorized')
  process.exit(0)
}

const { execSync } = require('child_process')
const rimraf = require('rimraf').sync
const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const eaConfig = yaml.load(fs.readFileSync(path.join(process.cwd(), 'ea-config.yml'), 'utf8'))

// Early Access details
const earlyAccessOwner = 'docs'
const earlyAccessDir = 'early-access-test'
const earlyAccessRepo = `https://${GITHUB_DOCUBOT_REPO_PAT}@github.com/${earlyAccessOwner}/${earlyAccessDir}`
const earlyAccessContentDir = path.join(process.cwd(), 'content', earlyAccessDir)

// production vs. staging environment
const environment = HEROKU_PRODUCTION_APP ? 'production' : 'staging'
const earlyAccessBranch = HEROKU_PRODUCTION_APP ? eaConfig.EA_PRODUCTION_BRANCH : eaConfig.EA_STAGING_BRANCH

// confirm that the branch exists in the remote
const doesBranchExist = execSync(`git ls-remote --heads ${earlyAccessRepo} ${earlyAccessBranch}`).toString()
if (!doesBranchExist) {
  console.log(`The branch '${earlyAccessBranch}' was not found in ${earlyAccessOwner}/${earlyAccessDir}. Exiting!`)
  process.exit(0)
}

// Remove any dir that may pre-exist
rimraf(earlyAccessContentDir)

// Clone the repo
execSync(`git clone --single-branch --branch ${earlyAccessBranch} ${earlyAccessRepo} ${earlyAccessContentDir}`)
console.log(`Using early-access ${environment} branch: '${earlyAccessBranch}'`)

// Remove the .git dir
rimraf(`${earlyAccessContentDir}/.git`)

// Confirm the directory exists
fs.existsSync(earlyAccessContentDir)
