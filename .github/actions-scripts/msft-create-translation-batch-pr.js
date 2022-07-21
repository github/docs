#!/usr/bin/env node

import github from '@actions/github'

const OPTIONS = Object.fromEntries(
  ['BASE', 'BODY_FILE', 'GITHUB_TOKEN', 'HEAD', 'LANGUAGE', 'TITLE', 'GITHUB_REPOSITORY'].map(
    (envVarName) => {
      const envVarValue = process.env[envVarName]
      if (!envVarValue) {
        throw new Error(`You must supply a ${envVarName} environment variable`)
      }
      return [envVarName, envVarValue]
    }
  )
)

if (!process.env.GITHUB_REPOSITORY) {
  throw new Error('GITHUB_REPOSITORY environment variable not set')
}

const RETRY_STATUSES = [
  422, // Retry the operation if the PR already exists
  502, // Retry the operation if the API responds with a `502 Bad Gateway` error.
]
const RETRY_ATTEMPTS = 3
const {
  // One of the default environment variables provided by Actions.
  GITHUB_REPOSITORY,

  // These are passed in from the step in the workflow file.
  TITLE,
  BASE,
  HEAD,
  LANGUAGE,
  GITHUB_TOKEN,
} = OPTIONS
const [OWNER, REPO] = GITHUB_REPOSITORY.split('/')

const octokit = github.getOctokit(GITHUB_TOKEN)

/**
 * @param {object} config Configuration options for finding the PR.
 * @returns {Promise<number | undefined>} The PR number.
 */
async function findPullRequestNumber(config) {
  // Get a list of PRs and see if one already exists.
  const { data: listOfPullRequests } = await octokit.rest.pulls.list({
    owner: config.owner,
    repo: config.repo,
    head: `${config.owner}:${config.head}`,
  })

  return listOfPullRequests[0]?.number
}

/**
 * When this file was first created, we only introduced support for creating a pull request for some translation batch.
 * However, some of our first workflow runs failed during the pull request creation due to a timeout error.
 * There have been cases where, despite the timeout error, the pull request gets created _anyway_.
 * To accommodate this reality, we created this function to look for an existing pull request before a new one is created.
 * Although the "find" check is redundant in the first "cycle", it's designed this way to recursively call the function again via its retry mechanism should that be necessary.
 *
 * @param {object} config Configuration options for creating the pull request.
 * @returns {Promise<number>} The PR number.
 */
async function findOrCreatePullRequest(config) {
  const found = await findPullRequestNumber(config)

  if (found) {
    return found
  }

  try {
    const { data: pullRequest } = await octokit.rest.pulls.create({
      owner: config.owner,
      repo: config.repo,
      base: config.base,
      head: config.head,
      title: config.title,
      body: config.body,
      draft: false,
    })

    return pullRequest.number
  } catch (error) {
    if (!error.response || !config.retryCount) {
      throw error
    }

    if (!config.retryStatuses.includes(error.response.status)) {
      throw error
    }

    console.error(`Error creating pull request: ${error.message}`)
    console.warn(`Retrying in 5 seconds...`)
    await new Promise((resolve) => setTimeout(resolve, 5000))

    config.retryCount -= 1

    return findOrCreatePullRequest(config)
  }
}

/**
 * @param {object} config Configuration options for labeling the PR
 * @returns {Promise<undefined>}
 */
// async function labelPullRequest(config) {
//   await octokit.rest.issues.update({
//     owner: config.owner,
//     repo: config.repo,
//     issue_number: config.issue_number,
//     labels: config.labels,
//   })
// }

async function main() {
  const options = {
    title: TITLE,
    base: BASE,
    head: HEAD,
    body: `New translation batch for ${LANGUAGE}. You can see the log in [\`translations/log/${LANGUAGE}-resets.csv\`](https://github.com/${OWNER}/${REPO}/tree/${HEAD}/translations/log/${LANGUAGE}-resets.csv).`,
    labels: ['translation-batch', `translation-batch-${LANGUAGE}`],
    owner: OWNER,
    repo: REPO,
    retryStatuses: RETRY_STATUSES,
    retryCount: RETRY_ATTEMPTS,
  }

  options.issue_number = await findOrCreatePullRequest(options)
  const pr = `${GITHUB_REPOSITORY}#${options.issue_number}`
  console.log(`Created PR ${pr}`)

  // metadata parameters aren't currently available in `github.rest.pulls.create`,
  // but they are in `github.rest.issues.update`.
  // await labelPullRequest(options)
  // console.log(`Updated ${pr} with these labels: ${options.labels.join(', ')}`)
}

main()
