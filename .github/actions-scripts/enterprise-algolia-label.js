#!/usr/bin/env node

const fs = require('fs')
const core = require('@actions/core')
const eventPayload = JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8'))

// This workflow-run script does the following:
// 1. Gets an array of labels on a PR.
// 2. Finds one with the relevant Algolia text; if none found, exits early.
// 3. Gets the version substring from the label string.

const labelText = 'sync-english-index-for-'
const labelsArray = eventPayload.pull_request.labels

// Exit early if no labels are on this PR
if (!(labelsArray && labelsArray.length)) {
  process.exit(0)
}

// Find the relevant label
const algoliaLabel = labelsArray
  .map(label => label.name)
  .find(label => label.startsWith(labelText))

// Exit early if no relevant label is found
if (!algoliaLabel) {
  process.exit(0)
}

// Given: sync-english-index-for-enterprise-server@3.0
// Returns: enterprise-server@3.0
const versionToSync = algoliaLabel.split(labelText)[1]

// Store the version so we can access it later in the workflow
core.setOutput('versionToSync', versionToSync)
process.exit(0)