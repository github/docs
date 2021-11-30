#!/usr/bin/env node

import getOctokit from '../../script/helpers/github.js'
import deployToProduction from '../../script/deployment/deploy-to-production.js'

const {
  GITHUB_TOKEN,
  HEROKU_API_TOKEN,
  HEROKU_PRODUCTION_APP_NAME,
  SOURCE_BLOB_URL,
  DELAY_FOR_PREBOOT,
  RUN_ID,
} = process.env

// Exit if GitHub Actions PAT is not found
if (!GITHUB_TOKEN) {
  throw new Error('You must supply a GITHUB_TOKEN environment variable!')
}

// Exit if Heroku API token is not found
if (!HEROKU_API_TOKEN) {
  throw new Error('You must supply a HEROKU_API_TOKEN environment variable!')
}

// Exit if Heroku App name is not found
if (!HEROKU_PRODUCTION_APP_NAME) {
  throw new Error('You must supply a HEROKU_PRODUCTION_APP_NAME environment variable!')
}

if (!RUN_ID) {
  throw new Error('$RUN_ID not set')
}

// This helper uses the `GITHUB_TOKEN` implicitly!
// We're using our usual version of Octokit vs. the provided `github`
// instance to avoid versioning discrepancies.
const octokit = getOctokit()

try {
  await deployToProduction({
    octokit,
    includeDelayForPreboot: DELAY_FOR_PREBOOT !== 'false',
    // These parameters will ONLY be set by Actions
    sourceBlobUrl: SOURCE_BLOB_URL,
    runId: RUN_ID,
  })
} catch (error) {
  console.error(`Failed to deploy to production: ${error.message}`)
  console.error(error)
  throw error
}
