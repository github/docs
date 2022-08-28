#!/usr/bin/env node
import xDotenv from 'dotenv'
import { execSync } from 'child_process'

// [start-readme]
//
// This script is run as a git precommit hook (installed by husky after npm install).
// It detects changes to files the in the translations folder and prevents the commit
// if any changes exist.
//
// [end-readme]

xDotenv.config()

// Ignore this hook in GitHub Actions workflows
if (process.env.CI) process.exit()

// Allow this hook to be overriden with an environment variable
if (process.env.ALLOW_TRANSLATION_COMMITS) process.exit()

const filenames = execSync('git diff --cached --name-only').toString().trim().split('\n')
const localizedFilenames = filenames.filter((filename) => filename.startsWith('translations/'))

if (localizedFilenames.length) {
  console.error(
    '\n✋ Uh oh! Detected changes to the following files in the `/translations` directory:'
  )
  console.table(localizedFilenames.join('\n'))
  console.error(
    'The content in this directory is managed by our Crowdin integration and should not be edited directly in the repo.'
  )
  console.error(
    'For more information on how the localization process works, see translations/README.md'
  )
  console.error(
    '\nIf you have accidentally edited these files, you can unstage these changes on the command line using `git restore --staged translations`\n'
  )
  console.error(
    '\nIf you are performing a merge from `main`, you should bypass this hook by using ` git commit --no-verify`\n'
  )
  console.error(
    '\nIf you need to edit translated files often, you can set `ALLOW_TRANSLATION_COMMITS=true` in your .env file.`\n'
  )
  process.exit(1)
}
