#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const program = require('commander')
const yaml = require('js-yaml')
const allVersions = require('../../lib/all-versions')
const releaseCandidateFile = 'data/variables/release_candidate.yml'
const releaseCandidateYaml = path.join(process.cwd(), releaseCandidateFile)

const allowedActions = ['create', 'remove']

// [start-readme]
//
// This script creates or removes a release candidate banner for a specified version.
//
// [end-readme]

program
  .description('Create or remove a release candidate banner for the provided docs version.')
  // The following two settings let us use `version` as a flag without clashing with reserved opts
  .storeOptionsAsProperties(false)
  .passCommandToAction(false)
  .option(`-a, --action <${allowedActions.join(' or ')}>`, 'Create or remove the banner.')
  .option('-v, --version <version>', 'The version the banner applies to. Must be in <plan@release> format.')
  .parse(process.argv)

const options = program.opts()

if (!allowedActions.includes(options.action)) {
  console.log(`Error! You must specify --action <${allowedActions.join(' or ')}>.`)
  process.exit(1)
}

if (!(Object.keys(allVersions).includes(options.version))) {
  console.log('Error! You must specify --version with the full name of a supported version, e.g., enterprise-server@2.22.')
  process.exit(1)
}

// Load the release candidate variable
const releaseCandidateData = yaml.safeLoad(fs.readFileSync(releaseCandidateYaml, 'utf8'))

// Create or remove the variable
if (options.action === 'create') {
  releaseCandidateData.version = options.version
}

if (options.action === 'remove') {
  releaseCandidateData.version = ''
}

// Update the file
fs.writeFileSync(releaseCandidateYaml, yaml.safeDump(releaseCandidateData))

// Display next steps
console.log(`\nDone! Commit the update to ${releaseCandidateFile}. This ${options.action}s the banner for ${options.version}.

- To change the banner text, you can edit header.notices.release_candidate in data/ui.yml.
- To change the banner styling, you can edit includes/header-notification.html.
`)
