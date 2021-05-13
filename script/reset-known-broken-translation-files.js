#!/usr/bin/env node

require('dotenv').config()
const github = require('./helpers/github')()
const { promisify } = require('util')
const exec = promisify(require('child_process').exec)

// Check for required PAT
if (!process.env.GITHUB_TOKEN) {
  console.error('Error! You must have a GITHUB_TOKEN set in an .env file to run this script.')
  process.exit(1)
}

// [start-readme]
//
// Use this script as part of the Crowdin merge process to get the list of known broken
// files and run script/reset-translated-file.js on them.
//
// [end-readme]

main()

async function main () {
  // Get body text of OP from https://github.com/github/localization-support/issues/489.
  const { data: { body } } = await github.issues.get({
    owner: 'github',
    repo: 'localization-support',
    issue_number: '489'
  })

  // Get the list of broken files from the body text.
  const brokenFiles = body
    .replace(/^[\s\S]*?## List of Broken Translations/m, '')
    .trim()

  // Turn it into a simple array of files.
  const brokenFilesArray = brokenFiles
    .split('\n')
    .map(line => line.replace('- [ ] ', '').trim())

  // Run the script to revert them.
  await Promise.all(brokenFilesArray.map(async (file) => {
    console.log(`resetting ${file}`)
    await exec(`script/reset-translated-file.js --prefer-main ${file}`)
  }))

  // Print a message with next steps.
  console.log(`
Success!
  
Verify changes with git status and then run: 
  
git commit --no-verify -m "Reset broken translated files to English"
`)
}
