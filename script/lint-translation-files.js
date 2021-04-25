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
execSync(`TEST_TRANSLATION=true npx jest content/lint-files > ${parsingErrorsLog}`)

// 2. Check for rendering errors and output to file. Note this one must be run SECOND.
execSync(`script/test-render-translation.js > ${renderErrorsLog}`)

// Reset the broken files.
execSync(`cat ${parsingErrorsLog} ${renderErrorsLog} | egrep "^translations/.*/(.+.md|.+.yml)$" | uniq | xargs -L1 script/reset-translated-file.js --prefer-main`)

// Print a message with next steps.
console.log(`Success!
  
Verify changes with git status and then run: 
  
git commit --no-verify -m "Reverted translated files with parsing and rendering errors"
`)
