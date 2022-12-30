#!/usr/bin/env node

// [start-readme]
//
// This script is run as a git precommit hook (installed by husky after npm install).
// It detects changes to files the in the translations folder and prevents the commit
// if any changes exist.
//
// [end-readme]

import dotenv from 'dotenv'
import { execSync } from 'child_process'

dotenv.config()

// Ignore this hook in GitHub Actions workflows
if (process.env.CI) process.exit()

// Allow this hook to be overriden with an environment variable
if (process.env.ALLOW_TRANSLATION_COMMITS) process.exit()

try {
  execSync('git diff --exit-code --quiet --cached -- translations')
} catch (err) {
  console.error(`
✋ Uh oh! Detected changes to the files in the \`/translations\` directory.'
The content in this directory is managed by our translation pipeline and should not be edited directly in the repo.
For more information on how the localization process works, see \`translations/README.md\`.
If you have accidentally edited these files, you can unstage these changes on the command line using \`git restore --staged translations\`.
If you are performing a merge from \`main\`, you should bypass this hook by using \`git commit --no-verify\`.
If you need to edit translated files often, you can set \`ALLOW_TRANSLATION_COMMITS=true\` in your .env file.
`)
  process.exit(1)
}
