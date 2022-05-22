#!/usr/bin/env node

const { execSync } = require('child_process')

// [start-readme]
//
// Use this script as part of the Crowdin merge process to output a list of parsing and rendering
// errors in translated files and run script/reset-translated-file.js on them.
//
// [end-readme]

const parsingErrorsLog = '~/docs-translation-parsing-error.txt'
const renderErrorsLog = '~/docs-translation-rendering-error.txt'

// 1. Check for parsing errors and output to file. Note this one must be run FIRST.
console.log('Checking for parsing errors...')
try {
  execSync(`TEST_TRANSLATION=true npx jest linting/lint-files > ${parsingErrorsLog}`)
} catch (error) {
  console.log('There were new parsing errors!')
}

// 2. Check for rendering errors and output to file. Note this one must be run SECOND.
console.log('Checking for rendering errors...')
try {
  execSync(`script/test-render-translation.js > ${renderErrorsLog}`)
} catch (error) {
  console.log('There were new rendering errors!')
}

// Reset the broken files.
console.log('Resetting broken files...')
execSync(`cat ${parsingErrorsLog} ${renderErrorsLog} | egrep "^translations/.*/(.+.md|.+.yml)$" | uniq | xargs -L1 script/reset-translated-file.js --prefer-main`)

// Print a message with next steps.
console.log(`Success!
  
Verify changes with git status and then run: 
  
git commit --no-verify -m "Reverted translated files with parsing and rendering errors"
`)
