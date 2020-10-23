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
const { GITHUB_DOCUBOT_REPO_PAT, EARLY_ACCESS_ENABLED } = process.env

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

// Early Access details
const earlyAccessDir = 'early-access-test'
const earlyAccessRepo = `https://${GITHUB_DOCUBOT_REPO_PAT}@github.com/docs/${earlyAccessDir}`
const earlyAccessContentDir = path.join(process.cwd(), 'content', earlyAccessDir)

// TODO...
// // Look for a branch in early-access that matches the current docs branch;
// // otherwise fall back to `main`
// const docsBranch = execSync('git branch --show-current').toString().trim()
//
// const earlyAccessBranch = execSync(`git ls-remote --heads ${earlyAccessRepo} ${docsBranch}`).toString()
//   ? docsBranch
//   : 'main'
const earlyAccessBranch = 'main'

// Remove any dir that may pre-exist
rimraf(earlyAccessContentDir)

// Clone the repo
execSync(`git clone --single-branch --branch ${earlyAccessBranch} ${earlyAccessRepo} ${earlyAccessContentDir}`)
console.log(`Branch: ${earlyAccessBranch}`)

// Remove the .git dir
rimraf(`${earlyAccessContentDir}/.git`)

// Confirm the directory exists
fs.existsSync(earlyAccessContentDir)
