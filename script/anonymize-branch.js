#!/usr/bin/env node

// [start-readme]
//
// Flatten all the commits in the current branch into a single anonymized @Octomerger commit
//
// Usage: script/anonymize-branch.js <new-commit-message> [base-branch]
// Example: script/anonymize-branch.js "nothing to see here"
// If the optional [base-branch] argument is omitted, it will default to `main`
//
// [end-readme]

process.env.GIT_AUTHOR_NAME = process.env.GIT_COMMITTER_NAME = 'Octomerger Bot'
process.env.GIT_AUTHOR_EMAIL = process.env.GIT_COMMITTER_EMAIL = '63058869+Octomerger@users.noreply.github.com'

const { execSync: exec } = require('child_process')
const path = require('path')
const args = process.argv.slice(2)
const message = args[0]
const base = args[1] || 'main'

if (!message || !message.length) {
  console.error(`Specify a new commit message in quotes. Example:\n\nscript/${path.basename(module.filename)} "new commit"`)
  process.exit()
}

exec(`git reset $(git merge-base ${base} HEAD)`)
exec('git add -A')
exec(`git commit -m "${message}"`)
