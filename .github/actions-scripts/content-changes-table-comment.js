#!/usr/bin/env node

import * as github from '@actions/github'
import { setOutput } from '@actions/core'

const { GITHUB_TOKEN, APP_URL } = process.env
const context = github.context

if (!GITHUB_TOKEN) {
  throw new Error(`GITHUB_TOKEN environment variable not set`)
}

if (!APP_URL) {
  throw new Error(`APP_URL environment variable not set`)
}

const octokit = github.getOctokit(GITHUB_TOKEN)

const response = await octokit.rest.repos.compareCommits({
  owner: context.repo.owner,
  repo: context.payload.repository.name,
  base: context.payload.pull_request.base.sha,
  head: context.payload.pull_request.head.sha,
})

const { files } = response.data

let markdownTable =
  '| **Source** | **Preview** | **Production** | **What Changed** |\n|:----------- |:----------- |:----------- |:----------- |\n'

const pathPrefix = 'content/'
const articleFiles = files.filter(
  ({ filename }) => filename.startsWith(pathPrefix) && !filename.endsWith('/index.md')
)
for (const file of articleFiles) {
  const sourceUrl = file.blob_url
  const fileName = file.filename.slice(pathPrefix.length)
  const fileUrl = fileName.slice(0, fileName.lastIndexOf('.'))
  const previewLink = `${APP_URL}/${fileUrl}`
  const productionLink = `https://docs.github.com/${fileUrl}`
  let markdownLine = ''

  if (file.status === 'modified') {
    markdownLine = `| [content/${fileName}](${sourceUrl}) | [Modified](${previewLink}) | [Original](${productionLink}) | |\n`
  } else if (file.status === 'added') {
    markdownLine = `| New file: [content/${fileName}](${sourceUrl}) | [Modified](${previewLink}) | | |\n`
  }
  markdownTable += markdownLine
}

setOutput('changesTable', markdownTable)
