#!/usr/bin/env node

// [start-readme]
//
// Use this script as part of the Crowdin merge process to get the list of known broken
// files and run script/i18n/reset-translated-file.js on them.
//
// [end-readme]

import dotenv from 'dotenv'
import Github from '../helpers/github.js'
import { execSync } from 'child_process'
import uniq from 'lodash/uniq.js'
import { existsSync } from 'fs'

dotenv.config()
const github = Github()

// Check for required PAT
if (!process.env.GITHUB_TOKEN) {
  console.error('Error! You must have a GITHUB_TOKEN set in an .env file to run this script.')
  process.exit(1)
}

main()

async function main() {
  // Get body text of OP from https://github.com/github/localization-support/issues/489.
  const {
    data: { body },
  } = await github.issues.get({
    owner: 'github',
    repo: 'localization-support',
    issue_number: '489',
  })

  // Get the list of broken files from the body text.
  const brokenFiles = body.replace(/^[\s\S]*?## List of Broken Translations/m, '').trim()

  // De-duplicate the list of broken files and filter out any that don't exist in the repo.
  const brokenFilesArray = uniq(
    brokenFiles
      .split('\n')
      .filter((line) => !line.toLowerCase().startsWith('- [x]'))
      .map((line) => line.replace('- [ ] ', '').trim())
      .filter((line) => existsSync(line))
  )

  // Revert each of the broken files.
  // This is done sequentially to ensure only one Git operation is running at any given time.
  brokenFilesArray.forEach((file) => {
    console.log(`Resetting ${file}`)
    execSync(`node script/i18n/reset-translated-file.js ${file}`)
  })

  // Print a message with next steps.
  console.log(`
Success!

Verify changes with git status and then run:

git commit --no-verify -m "Reset broken translated files to English"
`)
}
