#!/usr/bin/env node

// [start-readme]
//
// This script creates or removes a release candidate banner for a specified version.
//
// [end-readme]

import fs from 'fs/promises'
import path from 'path'
import { program } from 'commander'
import yaml from 'js-yaml'

import { allVersions } from '#src/versions/lib/all-versions.js'

const releaseCandidateFile = 'data/variables/release_candidate.yml'
const releaseCandidateYaml = path.join(process.cwd(), releaseCandidateFile)
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
const releaseCandidateData = yaml.load(await fs.readFile(releaseCandidateYaml, 'utf8'))

// Create or remove the variable
if (options.action === 'create') {
  releaseCandidateData.version = options.version
}

if (options.action === 'remove') {
  releaseCandidateData.version = ''
}

// Update the file
await fs.writeFile(releaseCandidateYaml, yaml.dump(releaseCandidateData))

// Display next steps
console.log(`\nDone! Commit the update to ${releaseCandidateFile}. This ${options.action}s the banner for ${options.version}.

- To change the banner text, you can edit header.notices.release_candidate in data/ui.yml.
- To change the banner styling, you can edit includes/header-notification.html.
`)
