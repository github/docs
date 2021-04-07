#!/usr/bin/env node

const github = require('@actions/github')
const core = require('@actions/core')

async function run () {
  const token = process.env.GITHUB_TOKEN
  const octokit = github.getOctokit(token)
  const query = encodeURIComponent('is:open repo:github/docs-internal is:issue')
  
  const deprecationIssues = await octokit.request(`GET /search/issues?q=${query}+label:"enterprise%20deprecation"`)
  const releaseIssues = await octokit.request(`GET /search/issues?q=${query}+label:"enterprise%20release"`)
  const isDeprecationIssue = deprecationIssues.data.items.length === 0 ? 'false' : 'true'
  const isReleaseIssue = releaseIssues.data.items.length === 0 ? 'false' : 'true'
  core.setOutput('deprecationIssue', isDeprecationIssue)
  core.setOutput('releaseIssue', isReleaseIssue)
  return `Set outputs deprecationIssue: ${isDeprecationIssue}, releaseIssue: ${isReleaseIssue}`
}

run()
  .then(
    (response) => { console.log(`Finished running: ${response}`) },
    (error) => {
      console.log(`#ERROR# ${error}`)
      process.exit(1)
    }
  )
