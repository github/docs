#!/usr/bin/env node

import * as github from '@actions/github'

import getOctokit from '../../script/helpers/github.js'

const { GITHUB_TOKEN } = process.env

// Exit if GitHub Actions PAT is not found
if (!GITHUB_TOKEN) {
  throw new Error('You must supply a GITHUB_TOKEN environment variable!')
}

// This helper uses the `GITHUB_TOKEN` implicitly!
// We're using our usual version of Octokit vs. the provided `github`
// instance to avoid versioning discrepancies.
const octokit = getOctokit()

const { CONTEXT_NAME, ACTIONS_RUN_LOG, HEAD_SHA } = process.env
if (!CONTEXT_NAME) {
  throw new Error('$CONTEXT_NAME not set')
}
if (!ACTIONS_RUN_LOG) {
  throw new Error('$ACTIONS_RUN_LOG not set')
}
if (!HEAD_SHA) {
  throw new Error('$HEAD_SHA not set')
}

const { context } = github
const owner = context.repo.owner
const repo = context.payload.repository.name

await octokit.repos.createCommitStatus({
  owner,
  repo,
  sha: HEAD_SHA,
  context: CONTEXT_NAME,
  state: 'success',
  description: 'Successfully deployed! See logs.',
  target_url: ACTIONS_RUN_LOG,
})
