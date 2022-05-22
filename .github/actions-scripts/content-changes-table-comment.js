#!/usr/bin/env node

import createStagingAppName from '../../script/deployment/create-staging-app-name.js'
import * as github from '@actions/github'
import { setOutput } from '@actions/core'

const context = github.context

const githubToken = process.env.GITHUB_TOKEN
if (!githubToken) {
  throw new Error(`GITHUB_TOKEN environment variable not set`)
}

const stagingPrefix = createStagingAppName({
  repo: context.payload.repository.name,
  pullNumber: context.payload.number,
  branch: context.payload.pull_request.head.ref,
})

const octokit = github.getOctokit(githubToken)

const response = await octokit.rest.repos.compareCommits({
  owner: context.repo.owner,
  repo: context.payload.repository.name,
  base: context.payload.pull_request.base.sha,
  head: context.payload.pull_request.head.sha,
})

const { files } = response.data

let markdownTable =
  '| **Source** | **Staging** | **Production** | **What Changed** |\n|:----------- |:----------- |:----------- |:----------- |\n'

const pathPrefix = 'content/'
const articleFiles = files.filter(
  ({ filename }) => filename.startsWith(pathPrefix) && !filename.endsWith('/index.md')
)
for (const file of articleFiles) {
  const sourceUrl = file.blob_url
  const fileName = file.filename.slice(pathPrefix.length)
  const fileUrl = fileName.slice(0, fileName.lastIndexOf('.'))
  const stagingLink = `https://${stagingPrefix}.herokuapp.com/${fileUrl}`
  const productionLink = `https://docs.github.com/${fileUrl}`
  let markdownLine = ''

  if (file.status === 'modified') {
    markdownLine = `| [content/${fileName}](${sourceUrl}) | [Modified](${stagingLink}) | [Original](${productionLink}) | |\n`
  } else if (file.status === 'added') {
    markdownLine = `| New file: [content/${fileName}](${sourceUrl}) | [Modified](${stagingLink}) | | |\n`
  }
  markdownTable += markdownLine
}

setOutput('changesTable', markdownTable)
