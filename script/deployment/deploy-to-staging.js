#!/usr/bin/env node
import sleep from 'await-sleep'
import got from 'got'
import Heroku from 'heroku-client'
import createStagingAppName from './create-staging-app-name.js'

const SLEEP_INTERVAL = 5000
const HEROKU_LOG_LINES_TO_SHOW = 25

export default async function deployToStaging({
  herokuToken,
  octokit,
  pullRequest,
  forceRebuild = false,
  runId = null,
}) {
  // Start a timer so we can report how long the deployment takes
  const startTime = Date.now()

  // Extract some important properties from the PR
  const {
    number: pullNumber,
    base: {
      repo: {
        name: repo,
        owner: { login: owner },
      },
    },
    state,
    head: { ref: branch, sha },
    user: author,
  } = pullRequest

  // Verify the PR is still open
  if (state !== 'open') {
    throw new Error(`This pull request is not open. State is: '${state}'`)
  }

  const workflowRunLog = runId ? `https://github.com/${owner}/${repo}/actions/runs/${runId}` : null
  let deploymentId = null
  let logUrl = workflowRunLog
  let appIsNewlyCreated = false

  const appName = createStagingAppName({ repo, pullNumber, branch })
  const homepageUrl = `https://${appName}.herokuapp.com/`

  try {
    const title = `branch '${branch}' at commit '${sha}' in the 'staging' environment as '${appName}'`

    console.log(`About to deploy ${title}...`)

    // Kick off a pending GitHub Deployment right away, so the PR author
    // will have instant feedback that their work is being deployed.
    const { data: deployment } = await octokit.repos.createDeployment({
      owner,
      repo,

      description: `Deploying ${title}`,

      // Use a commit SHA instead of a branch name as the ref for more precise
      // feedback, and also because the branch may have already been deleted.
      ref: sha,

      // In the GitHub API, there can only be one active deployment per environment.
      // For our many staging apps, we must use the unique appName as the environment.
      environment: appName,

      // Indicate this environment will no longer exist at some point in the future.
      transient_environment: true,

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

    // Time to talk to Heroku...
    const heroku = new Heroku({ token: herokuToken })
    let appSetup = null
    let build = null

    // Is there already a Heroku App for this PR?
    let appExists = true
    try {
      await heroku.get(`/apps/${appName}`)
    } catch (error) {
      appExists = false
    }

    // If there is an existing app but we want to forcibly rebuild, delete the app first
    if (appExists && forceRebuild) {
      console.log('🚀 Deployment status: in_progress - Destroying existing Heroku app...')

      try {
        await heroku.delete(`/apps/${appName}`)
        appExists = false

        console.log(`Heroku app '${appName}' deleted for forced rebuild`)
      } catch (error) {
        throw new Error(
          `Failed to delete Heroku app '${appName}' for forced rebuild. Error: ${error}`
        )
      }
    }

    // If an app does not exist, create one!
    // This action will also trigger a build as a by-product.
    if (!appExists) {
      appIsNewlyCreated = true

      console.log(`Heroku app '${appName}' does not exist. Creating a new AppSetup...`)

      console.log('🚀 Deployment status: in_progress - Creating a new Heroku app...')

      const appSetupStartTime = Date.now()
      try {
        // IMPORTANT: These secrets should only be set in the private repo!
        const { DOCUBOT_REPO_PAT, HYDRO_ENDPOINT, HYDRO_SECRET } = process.env
        const secretEnvVars = {
          // This is required for cloning the `docs-early-access` repo
          ...(DOCUBOT_REPO_PAT && { DOCUBOT_REPO_PAT }),
          // These are required for Hydro event tracking
          ...(HYDRO_ENDPOINT && HYDRO_SECRET && { HYDRO_ENDPOINT, HYDRO_SECRET }),
        }

        appSetup = await heroku.post('/app-setups', {
          body: {
            app: {
              name: appName,
            },
            source_blob: {
              url: tarballUrl,
            },

            // Pass some secret environment variables to staging apps via Heroku
            // config variables.
            overrides: {
              env: {
                ...secretEnvVars,
                GIT_BRANCH: branch,
              },
            },
          },
        })
        console.log('Heroku AppSetup created', appSetup)

        // This probably will not be available yet
        build = appSetup.build
      } catch (error) {
        throw new Error(`Failed to create Heroku app '${appName}'. Error: ${error}`)
      }

      // Add PR author (if staff) as a collaborator on the new staging app
      try {
        if (author.site_admin === true) {
          await heroku.post(`/apps/${appName}/collaborators`, {
            body: {
              user: `${author.login}@github.com`,
              // We don't want an email invitation for every new staging app
              silent: true,
            },
          })
          console.log(`Added PR author @${author.login} as a Heroku app collaborator`)
        }
      } catch (error) {
        // It's fine if this fails, it shouldn't block the app from deploying!
        console.warn(
          `Warning: failed to add PR author as a Heroku app collaborator. Error: ${error}`
        )
      }

      // A new Build is created as a by-product of creating an AppSetup.
      // Poll until there is a Build object attached to the AppSetup.
      while (!build || !build.id) {
        await sleep(SLEEP_INTERVAL)
        appSetup = await heroku.get(`/app-setups/${appSetup.id}`)
        build = appSetup.build

        console.log(
          `AppSetup status: ${appSetup.status} (after ${Math.round(
            (Date.now() - appSetupStartTime) / 1000
          )} seconds)`
        )
      }

      console.log('Heroku build detected', build)
    } else {
      // If the app does exist, just manually trigger a new build
      console.log(`Heroku app '${appName}' already exists. Building...`)

      try {
        build = await heroku.post(`/apps/${appName}/builds`, {
          body: {
            source_blob: {
              url: tarballUrl,
            },
          },
        })
      } catch (error) {
        throw new Error(`Failed to create Heroku build. Error: ${error}`)
      }

      console.log('Heroku build created', build)
    }

    const buildStartTime = Date.now() // Close enough...
    const buildId = build.id
    logUrl = build.output_stream_url

    console.log('🚀 Deployment status: in_progress - Building a new Heroku slug...')

    // Poll until the Build's status changes from "pending" to "succeeded" or "failed".
    while (!build || build.status === 'pending' || !build.release || !build.release.id) {
      await sleep(SLEEP_INTERVAL)
      try {
        build = await heroku.get(`/apps/${appName}/builds/${buildId}`)
      } catch (error) {
        throw new Error(`Failed to get build status. Error: ${error}`)
      }
      console.log(
        `Heroku build status: ${(build || {}).status} (after ${Math.round(
          (Date.now() - buildStartTime) / 1000
        )} seconds)`
      )
    }

    if (build.status !== 'succeeded') {
      throw new Error(
        `Failed to build after ${Math.round(
          (Date.now() - buildStartTime) / 1000
        )} seconds. See Heroku logs for more information:\n${logUrl}`
      )
    }

    console.log(
      `Finished Heroku build after ${Math.round((Date.now() - buildStartTime) / 1000)} seconds.`,
      build
    )

    const releaseStartTime = Date.now() // Close enough...
    let releaseId = build.release.id
    let release = null

    // Poll until the associated Release's status changes from "pending" to "succeeded" or "failed".
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
        throw new Error(`Failed to get release status. Error: ${error}`)
      }

      console.log(
        `Release status: ${(release || {}).status} (after ${Math.round(
          (Date.now() - releaseStartTime) / 1000
        )} seconds)`
      )
    }

    if (release.status !== 'succeeded') {
      throw new Error(
        `Failed to release after ${Math.round(
          (Date.now() - releaseStartTime) / 1000
        )} seconds. See Heroku logs for more information:\n${logUrl}`
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
    while (newDynos.length === 0 || newDynos.some((dyno) => dyno.state === 'starting')) {
      await sleep(SLEEP_INTERVAL)
      try {
        const dynoList = await heroku.get(`/apps/${appName}/dynos`)
        const dynosForThisRelease = dynoList.filter((dyno) => dyno.release.id === releaseId)

        // If this Heroku app was just newly created, often a secondary release
        // is requested to enable automatically managed SSL certificates. The
        // release description will read:
        //   "Enable allow-multiple-sni-endpoints feature"
        //
        // If that is the case, we need to update to monitor that secondary
        // release instead.
        if (newDynos.length > 0 && dynosForThisRelease.length === 0) {
          // If the app is NOT newly created, fail fast!
          if (!appIsNewlyCreated) {
            throw new Error('The dynos for this release disappeared unexpectedly')
          }

          // Check for the secondary release
          let nextRelease = null
          try {
            nextRelease = await heroku.get(`/apps/${appName}/releases/${release.version + 1}`)
          } catch (error) {
            throw new Error(
              `Could not find a secondary release to explain the disappearing dynos. Error: ${error}`
            )
          }

          if (nextRelease) {
            if (nextRelease.description === 'Enable allow-multiple-sni-endpoints feature') {
              // Track dynos for the next release instead
              release = nextRelease
              releaseId = nextRelease.id

              console.warn('Switching to monitor secondary release...')

              // Allow the loop to repeat to fetch the dynos for the secondary release
            } else {
              // Otherwise, assume another release replaced this one but it
              // PROBABLY would've succeeded...?
              newDynos.forEach((dyno) => {
                dyno.state = 'up'
              })
            }
          }
          // else just keep monitoring and hope for the best
        }

        newDynos = dynosForThisRelease
        console.log(
          `Dyno states: ${JSON.stringify(newDynos.map((dyno) => dyno.state))} (after ${Math.round(
            (Date.now() - dynoBootStartTime) / 1000
          )} seconds)`
        )
      } catch (error) {
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

    // Send a series of requests to trigger the server warmup routines
    console.log('🚀 Deployment status: in_progress - Triggering server warmup routines...')

    const warmupStartTime = Date.now()
    console.log(`Making warmup requests to: ${homepageUrl}`)
    try {
      await got(homepageUrl, {
        timeout: 10000, // Maximum 10 second timeout per request
        retry: 7, // About 2 minutes 7 seconds of delay, plus active request time for 8 requests
        hooks: {
          beforeRetry: [
            (options, error = {}, retryCount = '?') => {
              const statusCode = error.statusCode || (error.response || {}).statusCode || -1
              console.log(
                `Retrying after warmup request attempt #${retryCount} (${statusCode}) after ${Math.round(
                  (Date.now() - warmupStartTime) / 1000
                )} seconds...`
              )
            },
          ],
        },
      })
      console.log(
        `Warmup requests passed after ${Math.round((Date.now() - warmupStartTime) / 1000)} seconds`
      )
    } catch (error) {
      throw new Error(
        `Warmup requests failed after ${Math.round(
          (Date.now() - warmupStartTime) / 1000
        )} seconds. Error: ${error}`
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
      console.error(`Failed to finalize GitHub DeploymentStatus as a failure. Error: ${error}`)
    }

    // Re-throw the error to bubble up
    throw error
  }
}
