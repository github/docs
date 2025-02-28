#!/usr/bin/env node

// [start-readme]
//
// This script creates or removes a release candidate banner for a specified version.
//
// [end-readme]

import fs from 'fs/promises'
import { program } from 'commander'

import { allVersions } from '#src/versions/lib/all-versions.js'

const releaseCandidateJSFile = 'src/versions/lib/enterprise-server-releases.js'
const allowedActions = ['create', 'remove']

program
  .description('Create or remove a release candidate banner for the provided docs version.')
  .option(`-a, --action <${allowedActions.join(' or ')}>`, 'Create or remove the banner.')
  .option(
    '-v, --version <version>',
    'The version the banner applies to. Must be in <plan@release> format.',
  )
  .parse(process.argv)

const options = program.opts()

if (!allowedActions.includes(options.action)) {
  console.log(`Error! You must specify --action <${allowedActions.join(' or ')}>.`)
  process.exit(1)
}

if (!Object.keys(allVersions).includes(options.version)) {
  console.log(
    'Error! You must specify --version with the full name of a supported version, e.g., enterprise-server@2.22.',
  )
  process.exit(1)
}

// Load the release candidate variable
let jsCode = await fs.readFile(releaseCandidateJSFile, 'utf8')
const lineRegex = /export const releaseCandidate = .*/
if (!lineRegex.test(jsCode)) {
  throw new Error(
    `The file ${releaseCandidateJSFile} does not contain a release candidate variable. ('export const releaseCandidate = ...')`,
  )
}

// Create or remove the variable
if (options.action === 'create') {
  jsCode = jsCode.replace(
    lineRegex,
    `export const releaseCandidate = '${options.version.split('@')[1]}'`,
  )
} else if (options.action === 'remove') {
  jsCode = jsCode.replace(lineRegex, `export const releaseCandidate = null`)
}

// Update the file
await fs.writeFile(releaseCandidateJSFile, jsCode)

// Display next steps
console.log(`\nDone! Commit the update to ${releaseCandidateJSFile}. This ${options.action}s the banner for ${options.version}.

- To change the banner text, you can edit header.notices.release_candidate in data/ui.yml.
- To change the banner styling, you can edit includes/header-notification.html.
`)
