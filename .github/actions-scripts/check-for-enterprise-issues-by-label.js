#!/usr/bin/env node

import { getOctokit } from '@actions/github'
import { setOutput } from '@actions/core'

async function run() {
  const token = process.env.GITHUB_TOKEN
  const octokit = getOctokit(token)
  const queryDeprecation = encodeURIComponent('is:open repo:github/docs-engineering is:issue')
  const queryRelease = encodeURIComponent('is:open repo:github/docs-content is:issue')

  const deprecationIssues = await octokit.request(
    `GET /search/issues?q=${queryDeprecation}+label:"enterprise%20deprecation"`
  )
  const releaseIssues = await octokit.request(
    `GET /search/issues?q=${queryRelease}+label:"enterprise%20release"`
  )
  const isDeprecationIssue = deprecationIssues.data.items.length === 0 ? 'false' : 'true'
  const isReleaseIssue = releaseIssues.data.items.length === 0 ? 'false' : 'true'
  setOutput('deprecationIssue', isDeprecationIssue)
  setOutput('releaseIssue', isReleaseIssue)
  return `Set outputs deprecationIssue: ${isDeprecationIssue}, releaseIssue: ${isReleaseIssue}`
}

run().then(
  (response) => {
    console.log(`Finished running: ${response}`)
  },
  (error) => {
    console.log(`#ERROR# ${error}`)
    process.exit(1)
  }
)
