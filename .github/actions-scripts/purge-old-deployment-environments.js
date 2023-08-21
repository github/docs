#!/usr/bin/env node

import assert from 'node:assert/strict'

import { getOctokit } from '@actions/github'

main()
async function main() {
  const DRY_RUN = Boolean(JSON.parse(process.env.DRY_RUN || 'false'))
  const MAX_DELETIONS = parseInt(JSON.parse(process.env.MAX_DELETIONS || '10'))
  const MIN_AGE_DAYS = parseInt(process.env.MIN_AGE_DAYS || '90', 10)

  const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/')
  if (!owner || !repo) {
    throw new Error('GITHUB_REPOSITORY environment variable not set')
  }
  const token = process.env.GITHUB_TOKEN
  if (!token) {
    throw new Error(`GITHUB_TOKEN environment variable not set`)
  }
  const github = getOctokit(token)

  // The sort order is not explicitly listed for this API endpoint.
  // In practice it appears to list those that are oldest first.
  // But to guarantee that it reaches the oldest, we paginate over
  // all of them.
  const environments = await github.paginate('GET /repos/{owner}/{repo}/environments', {
    owner,
    repo,
  })

  console.log(`Found ${environments.length.toLocaleString()} environments in total`)

  let countDeletions = 0
  for (const environment of environments) {
    const ageDays = (Date.now() - Date.parse(environment.created_at)) / 1000 / 60 / 60 / 24
    if (ageDays > MIN_AGE_DAYS) {
      console.log(
        `Deleting environment ${environment.name} created ${Math.ceil(ageDays)} days ago`,
        DRY_RUN ? '(DRY RUN)' : '',
      )
      if (!DRY_RUN) {
        const { status } = await github.request(
          'DELETE /repos/{owner}/{repo}/environments/{name}',
          {
            owner,
            repo,
            name: environment.name,
          },
        )
        assert(status === 204, `Expected status 204, got ${status}`)
      }
      countDeletions++
      if (MAX_DELETIONS && countDeletions >= MAX_DELETIONS) {
        console.log(`Reached max number of deletions: ${MAX_DELETIONS}`)
        break
      }
    } else {
      console.log(
        `Environment ${environment.name} (${environment.id}) created ${Math.ceil(
          ageDays,
        )} days ago, is *not* old enough`,
      )
    }
  }
  console.log(`Deleted ${countDeletions} environments`, DRY_RUN ? '(DRY RUN)' : '')
}
