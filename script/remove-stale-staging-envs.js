#!/usr/bin/env node

// [start-readme]
//
// This script removes all stale GitHub deployment environments that outlasted
// the closure of their corresponding pull requests, or correspond to spammy
// pull requests.
//
// [end-readme]

import dotenv from 'dotenv'
import chalk from 'chalk'
import getOctokit from './helpers/github.js'

dotenv.config()

// Check for required GitHub PAT
if (!process.env.GITHUB_TOKEN) {
  console.error('Error! You must have a GITHUB_TOKEN environment variable for repo access.')
  process.exit(1)
}

if (!process.env.REPO) {
  console.error('Error! You must have a REPO environment variable.')
  process.exit(1)
}

// This helper uses the `GITHUB_TOKEN` implicitly
const octokit = getOctokit()

const protectedEnvNames = ['production']

// How long must a PR be closed without being merged to be considered stale?
const ONE_HOUR = 60 * 60 * 1000
const prClosureStaleTime = 2 * ONE_HOUR

main()

async function main() {
  const owner = 'github'
  const [repoOwner, repo] = (process.env.REPO || '').split('/')

  if (repoOwner !== owner) {
    console.error(`Error! The repository owner must be "${owner}" but was "${repoOwner}".`)
    process.exit(1)
  }

  const prInfoMatch = /^(?:gha-|ghd-)?(?<repo>docs(?:-internal)?)-(?<pullNumber>\d+)--.*$/
  const legacyPrInfoMatch = /^help-docs-pr-(?<pullNumber>\d+)$/

  let matchingCount = 0
  let staleCount = 0
  let spammyCount = 0
  const nonMatchingEnvNames = []

  for await (const response of octokit.paginate.iterator(octokit.repos.getAllEnvironments, {
    owner,
    repo,
  })) {
    const { data: environments } = response

    const envsPlusPullIds = environments.map((env) => {
      let match = prInfoMatch.exec(env.name)
      let { repo: repoName, pullNumber } = (match || {}).groups || {}

      if (!match) {
        match = legacyPrInfoMatch.exec(env.name)
        if (match) {
          repoName = repo
          pullNumber = ((match || {}).groups || {}).pullNumber
        }
      }

      return {
        env,
        repo: repoName,
        pullNumber: parseInt(pullNumber, 10) || null,
      }
    })

    const envsWithPullIds = envsPlusPullIds.filter(
      (eppi) => eppi.repo === repo && eppi.pullNumber > 0
    )
    matchingCount += envsWithPullIds.length

    nonMatchingEnvNames.push(
      ...envsPlusPullIds
        .filter((eppi) => !(eppi.repo && eppi.pullNumber > 0))
        .map((eppi) => eppi.env.name)
        .filter((name) => !protectedEnvNames.includes(name))
    )

    for (const ewpi of envsWithPullIds) {
      const { isStale, isSpammy } = await assessPullRequest(ewpi.pullNumber)

      if (isSpammy) spammyCount++
      if (isStale) staleCount++

      if (isSpammy || isStale) {
        await deleteEnvironment(ewpi.env.name)
      }
    }
  }

  const counts = {
    total: matchingCount,
    alive: matchingCount - staleCount,
    stale: {
      total: staleCount,
      spammy: spammyCount,
      closed: staleCount - spammyCount,
    },
  }
  console.log(`🧮 COUNTS!\n${JSON.stringify(counts, null, 2)}`)

  const nonMatchingCount = nonMatchingEnvNames.length
  if (nonMatchingCount > 0) {
    console.log(
      '⚠️  👀',
      chalk.yellow(
        `Non-matching env names (${nonMatchingCount}):\n - ${nonMatchingEnvNames.join('\n - ')}`
      )
    )
  }

  function displayParams(params) {
    const { owner, repo, pull_number: pullNumber } = params
    return `${owner}/${repo}#${pullNumber}`
  }

  async function assessPullRequest(pullNumber) {
    const params = {
      owner,
      repo,
      pull_number: pullNumber,
    }

    let isStale = false
    let isSpammy = false
    try {
      const { data: pullRequest } = await octokit.pulls.get(params)

      if (pullRequest && pullRequest.state === 'closed') {
        const isMerged = pullRequest.merged === true
        const closureAge = Date.now() - Date.parse(pullRequest.closed_at)
        isStale = isMerged || closureAge >= prClosureStaleTime

        if (isStale) {
          console.debug(chalk.green(`STALE: ${displayParams(params)} is closed`))
        } else {
          console.debug(
            chalk.blue(`NOT STALE: ${displayParams(params)} is closed but not yet stale`)
          )
        }
      }
    } catch (error) {
      // Using a standard GitHub PAT, PRs from spammy users will respond as 404
      if (error.status === 404) {
        isStale = true
        isSpammy = true
        console.debug(chalk.yellow(`STALE: ${displayParams(params)} is spammy or deleted`))
      } else {
        console.debug(chalk.red(`ERROR: ${displayParams(params)} - ${error.message}`))
      }
    }

    return { isStale, isSpammy }
  }

  async function deleteEnvironment(envName) {
    try {
      // Get the latest deployment environment to signal its deactivation
      const { data: deployments } = await octokit.repos.listDeployments({
        owner,
        repo,

        // In the GitHub API, there can only be one active deployment per environment.
        // For our many staging apps, we must use the unique appName as the environment.
        environment: envName,
      })

      // Deactivate ALL of the deployments
      for (const deployment of deployments) {
        // Deactivate this Deployment with an 'inactive' DeploymentStatus
        await octokit.repos.createDeploymentStatus({
          owner,
          repo,
          deployment_id: deployment.id,
          state: 'inactive',
          description: 'The app was undeployed',
          // The 'ant-man' preview is required for `state` values of 'inactive', as well as
          // the use of the `log_url`, `environment_url`, and `auto_inactive` parameters.
          // The 'flash' preview is required for `state` values of 'in_progress' and 'queued'.
          mediaType: {
            previews: ['ant-man', 'flash'],
          },
        })

        // Delete this Deployment
        await octokit.repos.deleteDeployment({
          owner,
          repo,
          deployment_id: deployment.id,
        })
      }

      // Delete this Environment
      try {
        await octokit.repos.deleteAnEnvironment({
          owner,
          repo,
          environment_name: envName,
        })
      } catch (error) {
        if (error.status !== 404) {
          throw error
        }
      }

      console.log('✅', chalk.green(`Removed stale deployment environment "${envName}"`))
    } catch (error) {
      console.log(
        '❌',
        chalk.red(
          `ERROR: Failed to remove stale deployment environment "${envName}" - ${error.message}`
        )
      )
    }
  }
}
