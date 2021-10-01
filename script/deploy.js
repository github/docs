#!/usr/bin/env node

// [start-readme]
//
// This script is run by a GitHub Actions workflow to trigger deployments
// to Heroku for both staging and production apps.
//
// You can also run it locally if you:
//  - Supply a GitHub PAT as the GITHUB_TOKEN environment variable
//  - Supply a Heroku API token as the HEROKU_API_TOKEN environment variable
//  - Optionally, supply a GitHub PAT as the DOCUBOT_REPO_PAT environment
//    variable if you want to support content from the `docs-early-access` repo
//
// For production deployment in particular, you MUST:
//  - Provide the name of the Heroku App we use for production as the
//    HEROKU_PRODUCTION_APP_NAME environment variable. This must be obfuscated
//    from our codebase for security reasons.
//
// ...and you SHOULD:
//  - Supply the aforementioned DOCUBOT_REPO_PAT environment variable to support
//    content from the `docs-early-access` repo. In most cases, you should be
//    able to just set this to the same value as GITHUB_TOKEN when running this
//    script locally as it just needs read access to that repo.
//  - Supply our Fastly API token and Service ID as the FASTLY_TOKEN and
//    FASTLY_SERVICE_ID enviroment variables, respectively, to support
//    soft-purging the Fastly cache after deploying.
//
// Examples:
//  - Deploy a PR to Staging and force the Heroku App to be rebuilt from scratch (by default):
//      script/deploy.js --staging https://github.com/github/docs/pull/9876
//
//  - Deploy a PR to Staging and DO NOT rebuild the Heroku App:
//      script/deploy.js --staging https://github.com/github/docs-internal/pull/12345 --no-rebuild
//
//  - Undeploy a PR from Staging by deleting the Heroku App:
//      script/deploy.js --staging https://github.com/github/docs/pull/9876 --destroy
//
//  - Deploy the latest from docs-internal `main` to production:
//      script/deploy.js --production
//
// [end-readme]

import dotenv from 'dotenv'
import program from 'commander'
import { has } from 'lodash-es'
import yesno from 'yesno'
import getOctokit from './helpers/github.js'
import parsePrUrl from './deployment/parse-pr-url.js'
import deployToStaging from './deployment/deploy-to-staging.js'
import undeployFromStaging from './deployment/undeploy-from-staging.js'
import deployToProduction from './deployment/deploy-to-production.js'
import purgeEdgeCache from './deployment/purge-edge-cache.js'

dotenv.config()

const { GITHUB_TOKEN, HEROKU_API_TOKEN } = process.env

// Exit if GitHub Actions PAT is not found
if (!GITHUB_TOKEN) {
  throw new Error('You must supply a GITHUB_TOKEN environment variable!')
}

// Exit if Heroku API token is not found
if (!HEROKU_API_TOKEN) {
  throw new Error('You must supply a HEROKU_API_TOKEN environment variable!')
}

const STAGING_FLAG = '--staging'
const PRODUCTION_FLAG = '--production'
const ALLOWED_OWNER = 'github'
const ALLOWED_SOURCE_REPOS = ['docs', 'docs-internal']
const EXPECTED_PR_URL_FORMAT = `https://github.com/${ALLOWED_OWNER}/(${ALLOWED_SOURCE_REPOS.join(
  '|'
)})/pull/123`

program
  .description('Trigger a deployment to Heroku for either staging or production apps')
  .option(PRODUCTION_FLAG, 'Deploy the latest internal main branch to Production')
  .option(`${STAGING_FLAG} <PR_URL>`, 'Deploy a pull request to Staging')
  .option(
    '--no-rebuild',
    'Do NOT force a Staging deployment to rebuild the Heroku App from scratch'
  )
  .option('--destroy', 'Undeploy a Staging deployment by deleting the Heroku App')
  .parse(process.argv)

const opts = program.opts()
const isProduction = opts.production === true
const isStaging = has(opts, 'staging')
const prUrl = opts.staging
const forceRebuild = !isProduction && opts.rebuild !== false
const destroy = opts.destroy === true

//
// Verify CLI options
//
if (!isProduction && !isStaging) {
  invalidateAndExit(
    'commander.missingArgument',
    `error: must specify option '${STAGING_FLAG} <PR_URL>' or '${PRODUCTION_FLAG}'`
  )
}

if (isProduction && isStaging) {
  invalidateAndExit(
    'commander.conflictingArgument',
    `error: must specify option '${STAGING_FLAG} <PR_URL>' or '${PRODUCTION_FLAG}' but not both`
  )
}

if (isProduction && forceRebuild) {
  invalidateAndExit(
    'commander.conflictingArgument',
    `error: cannot specify option '--rebuild' combined with option '${PRODUCTION_FLAG}'`
  )
}

if (isProduction && destroy) {
  invalidateAndExit(
    'commander.conflictingArgument',
    `error: cannot specify option '--destroy' combined with option '${PRODUCTION_FLAG}'`
  )
}

// Extract the repository name and pull request number from the URL (if any)
const { owner, repo, pullNumber } = parsePrUrl(prUrl)

if (isStaging) {
  if (owner !== ALLOWED_OWNER || !ALLOWED_SOURCE_REPOS.includes(repo) || !pullNumber) {
    invalidateAndExit(
      'commander.invalidArgument',
      `error: option '${STAGING_FLAG}' argument '${prUrl}' is invalid.
Must match URL format '${EXPECTED_PR_URL_FORMAT}'`
    )
  }
}

deploy()

//
// Function definitions
//

function invalidateAndExit(errorType, message) {
  program._displayError(1, errorType, message)
  process.exit(1)
}

async function deploy() {
  if (isProduction) {
    await deployProduction()
  } else if (isStaging) {
    await deployStaging({ owner, repo, pullNumber, forceRebuild, destroy })
  }
}

async function deployProduction() {
  const { HEROKU_PRODUCTION_APP_NAME, DOCUBOT_REPO_PAT, FASTLY_TOKEN, FASTLY_SERVICE_ID } =
    process.env

  // Warn if Heroku App name is not found
  if (!HEROKU_PRODUCTION_APP_NAME) {
    console.warn(
      '⚠️ You did not supply a HEROKU_PRODUCTION_APP_NAME environment variable.\nWithout it, this deployment will not end up in our production environment!'
    )
  }

  // Warn if @docubot PAT is not found
  if (!DOCUBOT_REPO_PAT) {
    console.warn(
      '⚠️ You did not supply a DOCUBOT_REPO_PAT environment variable.\nWithout it, this deployment will not contain any Early Access content!'
    )
  }

  // Warn if Fastly credentials are not found
  if (!FASTLY_TOKEN) {
    console.warn(
      '⚠️ You did not supply a FASTLY_TOKEN environment variable.\nWithout it, this deployment will not soft-purge the Fastly cache!'
    )
  }
  if (!FASTLY_SERVICE_ID) {
    console.warn(
      '⚠️ You did not supply a FASTLY_SERVICE_ID environment variable.\nWithout it, this deployment will not soft-purge the Fastly cache!'
    )
  }
  if (!process.env.FASTLY_SURROGATE_KEY) {
    // Default to our current Fastly surrogate key if unspecified
    process.env.FASTLY_SURROGATE_KEY = 'all-the-things'
  }

  // Request confirmation before deploying to production
  const proceed = await yesno({
    question: '\n🛑 You have selected to deploy to production. ARE YOU CERTAIN!?',
    defaultValue: null,
  })

  if (!proceed) {
    console.error('\n❌ User canceled the production deployment! Halting...')
    process.exit(1)
  }

  // This helper uses the `GITHUB_TOKEN` implicitly
  const octokit = getOctokit()

  try {
    await deployToProduction({
      octokit,
      includeDelayForPreboot: !!(FASTLY_TOKEN && FASTLY_SERVICE_ID),
    })

    await purgeEdgeCache()
  } catch (error) {
    console.error(`Failed to deploy production: ${error.message}`)
    console.error(error)
    process.exit(1)
  }
}

async function deployStaging({ owner, repo, pullNumber, forceRebuild = false, destroy = false }) {
  // Hardcode the Status context name to match Actions
  const CONTEXT_NAME = 'Staging - Deploy PR / deploy (pull_request)'

  // This helper uses the `GITHUB_TOKEN` implicitly
  const octokit = getOctokit()

  const { data: pullRequest } = await octokit.pulls.get({
    owner,
    repo,
    pull_number: pullNumber,
  })

  try {
    if (destroy) {
      await undeployFromStaging({
        octokit,
        pullRequest,
      })
    } else {
      await octokit.repos.createStatus({
        owner,
        repo,
        sha: pullRequest.head.sha,
        context: CONTEXT_NAME,
        state: 'pending',
        description: 'The app is being deployed. See local logs.',
      })

      await deployToStaging({
        octokit,
        pullRequest,
        forceRebuild,
      })

      await octokit.repos.createStatus({
        owner,
        repo,
        sha: pullRequest.head.sha,
        context: CONTEXT_NAME,
        state: 'success',
        description: 'Successfully deployed! See local logs.',
      })
    }
  } catch (error) {
    const action = destroy ? 'undeploy from' : 'deploy to'
    console.error(`Failed to ${action} staging: ${error.message}`)
    console.error(error)

    if (!destroy) {
      await octokit.repos.createStatus({
        owner,
        repo,
        sha: pullRequest.head.sha,
        context: CONTEXT_NAME,
        state: 'error',
        description: 'Failed to deploy. See local logs.',
      })
    }

    process.exit(1)
  }
}

export default deploy
