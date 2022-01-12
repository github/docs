#!/usr/bin/env node
import got from 'got'
import Heroku from 'heroku-client'
import { setOutput } from '@actions/core'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const SLEEP_INTERVAL = 5000
const HEROKU_LOG_LINES_TO_SHOW = 25
const DELAY_FOR_PREBOOT_SWAP = 135000 // 2:15

// Allow for a few 404 (Not Found), 429 (Too Many Requests), etc. responses from
// the semi-unreliable Heroku API when we're polling for status updates
const ALLOWED_MISSING_RESPONSE_COUNT =
  parseInt(process.env.ALLOWED_POLLING_FAILURES_PER_PHASE, 10) || 10
const ALLOWABLE_ERROR_CODES = [404, 429, 500, 503]

export default async function deployToProduction({
  octokit,
  includeDelayForPreboot = true,
  // These parameters will only be set by Actions
  sourceBlobUrl = null,
  runId = null,
}) {
  // Start a timer so we can report how long the deployment takes
  const startTime = Date.now()
  const [owner, repo, branch] = ['github', 'docs-internal', 'main']

  let sha
  try {
    const {
      data: { sha: latestSha },
    } = await octokit.repos.getCommit({
      owner,
      repo,
      ref: branch,
    })
    sha = latestSha

    if (!sha) {
      throw new Error('Latest commit SHA could not be found')
    }
  } catch (error) {
    console.error(`Error: ${error}`)
    console.log(`🛑 There was an error getting latest commit.`)
    process.exit(1)
  }

  // Put together application configuration variables
  const isPrebuilt = !!sourceBlobUrl
  const { DOCUBOT_REPO_PAT } = process.env
  const appConfigVars = {
    // Track the git branch
    GIT_BRANCH: branch,
    // If prebuilt: prevent the Heroku Node.js buildpack from installing devDependencies
    NPM_CONFIG_PRODUCTION: isPrebuilt.toString(),
    // If prebuilt: prevent the Heroku Node.js buildpack from using `npm ci` as it would
    // delete all of the vendored "node_modules/" directory.
    USE_NPM_INSTALL: isPrebuilt.toString(),
    // If not prebuilt, include the PAT required for cloning the `docs-early-access` repo.
    // Otherwise, set it to `null` to unset it from the environment for security.
    DOCUBOT_REPO_PAT: (!isPrebuilt && DOCUBOT_REPO_PAT) || null,
  }

  const workflowRunLog = runId ? `https://github.com/${owner}/${repo}/actions/runs/${runId}` : null
  let deploymentId = null
  let logUrl = workflowRunLog

  const appName = process.env.HEROKU_PRODUCTION_APP_NAME
  const environment = 'production'
  const homepageUrl = 'https://docs.github.com/'

  try {
    const title = `branch '${branch}' at commit '${sha}' in the '${environment}' environment`

    console.log(`About to deploy ${title}...`)

    // Kick off a pending GitHub Deployment right away, so the PR author
    // will have instant feedback that their work is being deployed.
    const { data: deployment } = await octokit.repos.createDeployment({
      owner,
      repo,
      description: `Deploying ${title}`,
      ref: sha,

      // In the GitHub API, there can only be one active deployment per environment.
      environment,

      // The status contexts to verify against commit status checks. If you omit
      // this parameter, GitHub verifies all unique contexts before creating a
      // deployment. To bypass checking entirely, pass an empty array. Defaults
      // to all unique contexts.
      required_contexts: [],

      // Do not try to merge the base branch into the feature branch
      auto_merge: false,
    })
    console.log('GitHub Deployment created', deployment)

    // Store this ID for later updating
    deploymentId = deployment.id

    // Set some output variables for workflow steps that run after this script
    if (process.env.GITHUB_ACTIONS) {
      setOutput('deploymentId', deploymentId)
      setOutput('logUrl', logUrl)
    }

    await octokit.repos.createDeploymentStatus({
      owner,
      repo,
      deployment_id: deploymentId,
      state: 'in_progress',
      description: 'Deploying the app...',
      // The 'ant-man' preview is required for `state` values of 'inactive', as well as
      // the use of the `log_url`, `environment_url`, and `auto_inactive` parameters.
      // The 'flash' preview is required for `state` values of 'in_progress' and 'queued'.
      mediaType: {
        previews: ['ant-man', 'flash'],
      },
    })
    console.log('🚀 Deployment status: in_progress - Preparing to deploy the app...')

    // Time to talk to Heroku...
    const heroku = new Heroku({ token: process.env.HEROKU_API_TOKEN })
    let build = null

    if (!sourceBlobUrl) {
      try {
        sourceBlobUrl = await getTarballUrl({
          octokit,
          owner,
          repo,
          sha,
        })
      } catch (error) {
        throw new Error(`Failed to generate source blob URL. Error: ${error}`)
      }
    }

    console.log('Updating Heroku app configuration variables...')

    // Reconfigure environment variables
    // https://devcenter.heroku.com/articles/platform-api-reference#config-vars-update
    try {
      await heroku.patch(`/apps/${appName}/config-vars`, {
        body: appConfigVars,
      })
    } catch (error) {
      announceIfHerokuIsDown(error)
      throw new Error(`Failed to update Heroku app configuration variables. Error: ${error}`)
    }

    console.log('Reconfigured')
    console.log('Building Heroku app...')

    try {
      build = await heroku.post(`/apps/${appName}/builds`, {
        body: {
          source_blob: {
            url: sourceBlobUrl,
          },
        },
      })
    } catch (error) {
      announceIfHerokuIsDown(error)
      throw new Error(`Failed to create Heroku build. Error: ${error}`)
    }

    console.log('Heroku build created', build)

    const buildStartTime = Date.now() // Close enough...
    const buildId = build.id
    logUrl = build.output_stream_url

    console.log('🚀 Deployment status: in_progress - Building a new Heroku slug...')

    // Poll until the Build's status changes from "pending" to "succeeded" or "failed".
    let buildAcceptableErrorCount = 0
    while (!build || !build.release || !build.release.id) {
      await sleep(SLEEP_INTERVAL)
      try {
        build = await heroku.get(`/apps/${appName}/builds/${buildId}`)
      } catch (error) {
        // Allow for a few bad responses from the Heroku API
        if (isAllowableHerokuError(error)) {
          buildAcceptableErrorCount += 1
          if (buildAcceptableErrorCount <= ALLOWED_MISSING_RESPONSE_COUNT) {
            console.warn(
              `Ignoring allowable Heroku error #${buildAcceptableErrorCount}: ${error.statusCode}`
            )
            continue
          }
        }
        announceIfHerokuIsDown(error)
        throw new Error(`Failed to get build status. Error: ${error}`)
      }

      if (build && build.status === 'failed') {
        throw new Error(
          `Failed to build after ${Math.round(
            (Date.now() - buildStartTime) / 1000
          )} seconds. See Heroku logs for more information:\n${logUrl}`
        )
      }

      console.log(
        `Heroku build status: ${(build || {}).status} (after ${Math.round(
          (Date.now() - buildStartTime) / 1000
        )} seconds)`
      )
    }

    console.log(
      `Finished Heroku build after ${Math.round((Date.now() - buildStartTime) / 1000)} seconds.`,
      build
    )
    console.log('Heroku release detected', build.release)

    const releaseStartTime = Date.now() // Close enough...
    const releaseId = build.release.id
    let release = null

    // Poll until the associated Release's status changes from "pending" to "succeeded" or "failed".
    let releaseAcceptableErrorCount = 0
    while (!release || release.status === 'pending') {
      await sleep(SLEEP_INTERVAL)
      try {
        const result = await heroku.get(`/apps/${appName}/releases/${releaseId}`)

        // Update the deployment status but only on the first retrieval
        if (!release) {
          logUrl = result.output_stream_url

          console.log('Heroku Release created', result)

          console.log('🚀 Deployment status: in_progress - Releasing the built Heroku slug...')
        }

        release = result
      } catch (error) {
        // Allow for a few bad responses from the Heroku API
        if (isAllowableHerokuError(error)) {
          releaseAcceptableErrorCount += 1
          if (releaseAcceptableErrorCount <= ALLOWED_MISSING_RESPONSE_COUNT) {
            console.warn(
              `Ignoring allowable Heroku error #${releaseAcceptableErrorCount}: ${error.statusCode}`
            )
            continue
          }
        }
        announceIfHerokuIsDown(error)
        throw new Error(`Failed to get release status. Error: ${error}`)
      }

      if (release && release.status === 'failed') {
        throw new Error(
          `Failed to release after ${Math.round(
            (Date.now() - releaseStartTime) / 1000
          )} seconds. See Heroku logs for more information:\n${logUrl}`
        )
      }

      console.log(
        `Release status: ${(release || {}).status} (after ${Math.round(
          (Date.now() - releaseStartTime) / 1000
        )} seconds)`
      )
    }

    console.log(
      `Finished Heroku release after ${Math.round(
        (Date.now() - releaseStartTime) / 1000
      )} seconds.`,
      release
    )

    // Monitor dyno state for this release to ensure it reaches "up" rather than crashing.
    // This will help us catch issues with faulty startup code and/or the package manifest.
    const dynoBootStartTime = Date.now()
    console.log('Checking Heroku dynos...')
    logUrl = workflowRunLog

    console.log('🚀 Deployment status: in_progress - Monitoring the Heroku dyno start-up...')

    // Keep checking while there are still dynos in non-terminal states
    let newDynos = []
    let dynoAcceptableErrorCount = 0
    while (newDynos.length === 0 || newDynos.some((dyno) => dyno.state === 'starting')) {
      await sleep(SLEEP_INTERVAL)
      try {
        const dynoList = await heroku.get(`/apps/${appName}/dynos`)
        const dynosForThisRelease = dynoList.filter((dyno) => dyno.release.id === releaseId)

        // To track them afterward
        newDynos = dynosForThisRelease

        console.log(
          `Dyno states: ${JSON.stringify(newDynos.map((dyno) => dyno.state))} (after ${Math.round(
            (Date.now() - dynoBootStartTime) / 1000
          )} seconds)`
        )
      } catch (error) {
        // Allow for a few bad responses from the Heroku API
        if (isAllowableHerokuError(error)) {
          dynoAcceptableErrorCount += 1
          if (dynoAcceptableErrorCount <= ALLOWED_MISSING_RESPONSE_COUNT) {
            console.warn(
              `Ignoring allowable Heroku error #${dynoAcceptableErrorCount}: ${error.statusCode}`
            )
            continue
          }
        }
        announceIfHerokuIsDown(error)
        throw new Error(`Failed to find dynos for this release. Error: ${error}`)
      }
    }

    const crashedDynos = newDynos.filter((dyno) => ['crashed', 'restarting'].includes(dyno.state))
    const runningDynos = newDynos.filter((dyno) => dyno.state === 'up')

    // If any dynos crashed on start-up, fail the deployment
    if (crashedDynos.length > 0) {
      const errorMessage = `At least ${crashedDynos.length} Heroku dyno(s) crashed on start-up!`

      console.error(errorMessage)

      // Attempt to dump some of the Heroku log here for debugging
      try {
        const logSession = await heroku.post(`/apps/${appName}/log-sessions`, {
          body: {
            dyno: crashedDynos[0].name,
            lines: HEROKU_LOG_LINES_TO_SHOW,
            tail: false,
          },
        })

        logUrl = logSession.logplex_url

        const logText = await got(logUrl).text()
        console.error(
          `Here are the last ${HEROKU_LOG_LINES_TO_SHOW} lines of the Heroku log:\n\n${logText}`
        )
      } catch (error) {
        announceIfHerokuIsDown(error)
        // Don't fail because of this error
        console.error(`Failed to retrieve the Heroku logs for the crashed dynos. Error: ${error}`)
      }

      throw new Error(errorMessage)
    }

    console.log(
      `At least ${runningDynos.length} Heroku dyno(s) are ready after ${Math.round(
        (Date.now() - dynoBootStartTime) / 1000
      )} seconds.`
    )

    // IMPORTANT:
    // If Heroku Preboot is enabled, then there is an additional delay of at
    // least 2 minutes before the new dynos are swapped into active serving.
    // If we move off Heroku in the future, this should be revisited and
    // updated/removed as relevant to align with the new hosting platform.
    if (includeDelayForPreboot) {
      console.log(`Waiting for Heroku Preboot to swap dynos (${DELAY_FOR_PREBOOT_SWAP} ms)...`)
      await sleep(DELAY_FOR_PREBOOT_SWAP)

      // TODO:
      // Is there a faster alternative than this arbitrary delay? For example,
      // is there some Heroku API we can query to see when this release is
      // considered to be the live one, or when the old dynos are shut down?
    } else {
      console.warn(
        '⚠️ Bypassing the wait for Heroku Preboot....\nPlease understand that your changes will not be visible for at least another 2 minutes!'
      )
    }

    // Report success!
    const successMessage = `Deployment succeeded after ${Math.round(
      (Date.now() - startTime) / 1000
    )} seconds.`
    console.log(successMessage)

    await octokit.repos.createDeploymentStatus({
      owner,
      repo,
      deployment_id: deploymentId,
      state: 'success',
      description: successMessage,
      ...(logUrl && { log_url: logUrl }),
      environment_url: homepageUrl,
      // The 'ant-man' preview is required for `state` values of 'inactive', as well as
      // the use of the `log_url`, `environment_url`, and `auto_inactive` parameters.
      // The 'flash' preview is required for `state` values of 'in_progress' and 'queued'.
      mediaType: {
        previews: ['ant-man', 'flash'],
      },
    })

    console.log(`🚀 Deployment status: success - ${successMessage}`)
    console.log(`Visit the newly deployed app at: ${homepageUrl}`)
  } catch (error) {
    // Report failure!
    const failureMessage = `Deployment failed after ${Math.round(
      (Date.now() - startTime) / 1000
    )} seconds. See logs for more information.`
    console.error(failureMessage)

    try {
      if (deploymentId) {
        await octokit.repos.createDeploymentStatus({
          owner,
          repo,
          deployment_id: deploymentId,
          state: 'error',
          description: failureMessage,
          ...(logUrl && { log_url: logUrl }),
          environment_url: homepageUrl,
          // The 'ant-man' preview is required for `state` values of 'inactive', as well as
          // the use of the `log_url`, `environment_url`, and `auto_inactive` parameters.
          // The 'flash' preview is required for `state` values of 'in_progress' and 'queued'.
          mediaType: {
            previews: ['ant-man', 'flash'],
          },
        })

        console.log(
          `🚀 Deployment status: error - ${failureMessage}` + (logUrl ? ` Logs: ${logUrl}` : '')
        )
      }
    } catch (error) {
      console.error(`Failed to finalize GitHub Deployment Status as a failure. Error: ${error}`)
    }

    // Re-throw the error to bubble up
    throw error
  }
}

async function getTarballUrl({ octokit, owner, repo, sha }) {
  // Get a URL for the tarballed source code bundle
  const {
    headers: { location: tarballUrl },
  } = await octokit.repos.downloadTarballArchive({
    owner,
    repo,
    ref: sha,
    // Override the underlying `node-fetch` module's `redirect` option
    // configuration to prevent automatically following redirects.
    request: {
      redirect: 'manual',
    },
  })
  return tarballUrl
}

function isAllowableHerokuError(error) {
  return error && ALLOWABLE_ERROR_CODES.includes(error.statusCode)
}

function announceIfHerokuIsDown(error) {
  if (error && error.statusCode === 503) {
    console.error('💀 Heroku may be down! Please check its Status page: https://status.heroku.com/')
  }
}
