#!/usr/bin/env node

import { getOctokit } from '@actions/github'
import { setOutput } from '@actions/core'

async function main() {
  // TODO Is there a lib function for this?
  const { BRANCH_NAME, GITHUB_TOKEN } = process.env
  if (!BRANCH_NAME) throw new Error("'BRANCH_NAME' env var not set")
  if (!GITHUB_TOKEN) throw new Error("'GITHUB_TOKEN' env var not set")

  const OUTPUT_KEY = 'branch'

  // If being run from a PR, this becomes 'my-cool-branch'.
  // If run on main, with the `workflow_dispatch` action for
  // example, the value becomes 'main'.
  const github = getOctokit(GITHUB_TOKEN)
  try {
    await github.rest.repos.getBranch({
      owner: 'github',
      repo: 'docs-early-access',
      branch: BRANCH_NAME,
    })
    console.log(`Using docs-early-access branch called '${BRANCH_NAME}'.`)
    setOutput(OUTPUT_KEY, BRANCH_NAME)
  } catch (err) {
    if (err.status === 404) {
      console.log(
        `There is no docs-early-access branch called '${BRANCH_NAME}' so checking out 'main' instead.`,
      )
      setOutput(OUTPUT_KEY, 'main')
    } else {
      throw err
    }
  }
}

main()
