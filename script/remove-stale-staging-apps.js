#!/usr/bin/env node
import xDotenv from 'dotenv'
import { chain } from 'lodash-es'
import chalk from 'chalk'
import Heroku from 'heroku-client'
import getOctokit from './helpers/github.js'

// [start-readme]
//
// This script removes all stale Heroku staging apps that outlasted the closure
// of their corresponding pull requests, or correspond to spammy pull requests.
//
// [end-readme]

xDotenv.config()

// Check for required Heroku API token
if (!process.env.HEROKU_API_TOKEN) {
  console.error(
    'Error! You must have a HEROKU_API_TOKEN environment variable for deployer-level access.'
  )
  process.exit(1)
}
// Check for required GitHub PAT
if (!process.env.GITHUB_TOKEN) {
  console.error('Error! You must have a GITHUB_TOKEN environment variable for repo access.')
  process.exit(1)
}

const heroku = new Heroku({ token: process.env.HEROKU_API_TOKEN })
// This helper uses the `GITHUB_TOKEN` implicitly
const octokit = getOctokit()

const protectedAppNames = ['help-docs', 'help-docs-deployer']

main()

async function main() {
  const apps = chain(await heroku.get('/apps'))
    .orderBy('name')
    .value()

  const prInfoMatch = /^(?<repo>docs(?:-internal)?)-(?<pullNumber>\d+)--.*$/

  const appsPlusPullIds = apps.map((app) => {
    const match = prInfoMatch.exec(app.name)
    const { repo, pullNumber } = (match || {}).groups || {}

    return {
      app,
      repo,
      pullNumber: parseInt(pullNumber, 10) || null,
    }
  })

  const appsWithPullIds = appsPlusPullIds.filter((appi) => appi.repo && appi.pullNumber > 0)

  const nonMatchingAppNames = appsPlusPullIds
    .filter((appi) => !(appi.repo && appi.pullNumber > 0))
    .map((appi) => appi.app.name)
    .filter((name) => !protectedAppNames.includes(name))

  let staleCount = 0
  let spammyCount = 0
  for (const awpi of appsWithPullIds) {
    const { isStale, isSpammy } = await assessPullRequest(awpi.repo, awpi.pullNumber)

    if (isSpammy) spammyCount++
    if (isStale) {
      staleCount++
      await deleteHerokuApp(awpi.app.name)
    }
  }

  const matchingCount = appsWithPullIds.length
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

  const nonMatchingCount = nonMatchingAppNames.length
  if (nonMatchingCount > 0) {
    console.log(
      '⚠️  👀',
      chalk.yellow(
        `Non-matching app names (${nonMatchingCount}):\n - ${nonMatchingAppNames.join('\n - ')}`
      )
    )
  }
}

function displayParams(params) {
  const { owner, repo, pull_number: pullNumber } = params
  return `${owner}/${repo}#${pullNumber}`
}

async function assessPullRequest(repo, pullNumber) {
  const params = {
    owner: 'github',
    repo: repo,
    pull_number: pullNumber,
  }

  let isStale = false
  let isSpammy = false
  try {
    const { data: pullRequest } = await octokit.pulls.get(params)

    if (pullRequest && pullRequest.state === 'closed') {
      isStale = true
      console.debug(chalk.green(`STALE: ${displayParams(params)} is closed`))
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

async function deleteHerokuApp(appName) {
  try {
    await heroku.delete(`/apps/${appName}`)
    console.log('✅', chalk.green(`Removed stale app "${appName}"`))
  } catch (error) {
    console.log(
      '❌',
      chalk.red(`ERROR: Failed to remove stale app "${appName}" - ${error.message}`)
    )
  }
}
