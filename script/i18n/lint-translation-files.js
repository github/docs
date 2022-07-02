#!/usr/bin/env node

// [start-readme]
//
// Use this script as part of the Crowdin merge process to output a list of either parsing
// or rendering errors in translated files and run script/i18n/reset-translated-file.js on them.
//
// [end-readme]

import { execSync } from 'child_process'
import { program } from 'commander'
import fs from 'fs'

// Set up supported linting check types and their corresponding commands.
const CHECK_COMMANDS = {
  parsing: 'npm run lint-translation',
  rendering: 'script/i18n/test-render-translation.js',
}
const SUPPORTED_CHECK_TYPES = Object.keys(CHECK_COMMANDS)
const CHECK_TYPE_DESCRIPTION = `Specify no more than one of the supported checks: ${SUPPORTED_CHECK_TYPES.join(
  ', '
)}`

// Initialize a new program for linting translation files, requiring a check type.
program
  .description('lint translation files')
  .requiredOption('-c, --check <type>', CHECK_TYPE_DESCRIPTION)
  .parse(process.argv)

// Cache a reference to the client's specified check type.
const specifiedCheckType = program.opts().check

if (SUPPORTED_CHECK_TYPES.includes(specifiedCheckType)) {
  // Lint and reset the files based on a supported check type.
  lintAndResetFiles(specifiedCheckType)
} else {
  // Otherwise, print an error message.
  console.error(`
    ${specifiedCheckType} is not a supported check type.
    ${CHECK_TYPE_DESCRIPTION}
  `)
}

/**
 * Lint and reset the files based on the specified check type.
 * @param {string} checkType
 * @return {undefined}
 */
function lintAndResetFiles(checkType) {
  console.log(`Running ${checkType} check...`)

  const log = `${process.env.HOME}/docs-translation-${checkType}-error.txt`
  const cmd = `${CHECK_COMMANDS[checkType]} > ${log}`

  // Lint the files based on the check type and output the errors to a log file.
  try {
    execSync(cmd)
  } catch (error) {
    console.log(`There were new ${checkType} errors! Check ${log} for more details.`)
  }

  // return if file does not exist
  if (!fs.existsSync(log)) {
    console.log(`${log}: no such file`)
    return
  }

  const filesToReset = fs
    .readFileSync(log)
    .toString()
    .split('\n')
    .filter((p) => p.startsWith('translations') && (p.endsWith('.md') || p.endsWith('.yml')))

  if (filesToReset.length === 0) {
    console.log('There are no violations')
    return
  }

  // We are not passing --prefer-main because we want to remove the file so we
  // reset it directly to the English source
  filesToReset.forEach((file) => {
    execSync(`script/i18n/reset-translated-file.js ${file} --reason="${checkType} error"`, {
      stdio: 'inherit',
    })
  })

  // Print a message with next steps
  console.log(`Success!

  Verify changes with git status and then run:

  git commit --no-verify -m "Reverted translated files with ${checkType} errors"
  `)
}
