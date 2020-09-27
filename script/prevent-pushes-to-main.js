#!/usr/bin/env node

const { execSync } = require('child_process')

// [start-readme]

// This script is intended to be used as a git "prepush" hook.
// If the current branch is main, it will exit unsuccesfully and prevent the push.

// [end-readme]

const productionBranch = 'main'
const currentBranch = execSync('git symbolic-ref --short HEAD', { encoding: 'utf8' }).trim()

if (currentBranch === productionBranch) {
  console.error('')
  console.error(`🤚 Whoa! Pushing to the ${productionBranch} branch has been disabled to prevent accidental deployments to production.`)
  console.error('')
  console.error('If you\'re aware of the risks and really want to push to this branch, add --no-verify to bypass this check.')
  console.error('')
  process.exit(1)
}
