#!/usr/bin/env node

import parsePrUrl from '../../script/deployment/parse-pr-url.js'
import getOctokit from '../../script/helpers/github.js'
import deployToStaging from '../../script/deployment/deploy-to-staging.js'

const { GITHUB_TOKEN, HEROKU_API_TOKEN } = process.env

// Exit if GitHub Actions PAT is not found
if (!GITHUB_TOKEN) {
  throw new Error('You must supply a GITHUB_TOKEN environment variable!')
}

// Exit if Heroku API token is not found
if (!HEROKU_API_TOKEN) {
  throw new Error('You must supply a HEROKU_API_TOKEN environment variable!')
}

// This helper uses the `GITHUB_TOKEN` implicitly!
// We're using our usual version of Octokit vs. the provided `github`
// instance to avoid versioning discrepancies.
const octokit = getOctokit()

const { RUN_ID, PR_URL, SOURCE_BLOB_URL, CONTEXT_NAME, ACTIONS_RUN_LOG, HEAD_SHA } = process.env
if (!RUN_ID) {
  throw new Error('$RUN_ID not set')
}
if (!PR_URL) {
  throw new Error('$PR_URL not set')
}
if (!SOURCE_BLOB_URL) {
  throw new Error('$SOURCE_BLOB_URL not set')
}
if (!CONTEXT_NAME) {
  throw new Error('$CONTEXT_NAME not set')
}
if (!ACTIONS_RUN_LOG) {
  throw new Error('$ACTIONS_RUN_LOG not set')
}
if (!HEAD_SHA) {
  throw new Error('$HEAD_SHA not set')
}

const { owner, repo, pullNumber } = parsePrUrl(PR_URL)
if (!owner || !repo || !pullNumber) {
  throw new Error(
    `'pullRequestUrl' input must match URL format 'https://github.com/github/(docs|docs-internal)/pull/123' but was '${PR_URL}'`
  )
}

const { data: pullRequest } = await octokit.pulls.get({
  owner,
  repo,
  pull_number: pullNumber,
})

await deployToStaging({
  octokit,
  pullRequest,
  forceRebuild: false,
  // These parameters will ONLY be set by Actions
  sourceBlobUrl: SOURCE_BLOB_URL,
  runId: RUN_ID,
})

await octokit.repos.createCommitStatus({
  owner,
  repo,
  sha: HEAD_SHA,
  context: CONTEXT_NAME,
  state: 'success',
  description: 'Successfully deployed! See logs.',
  target_url: ACTIONS_RUN_LOG,
})
