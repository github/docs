#!/usr/bin/env node

import * as github from '@actions/github'
import { setOutput } from '@actions/core'

import { getContents } from '../../script/helpers/git-utils.js'
import parse from '../../lib/read-frontmatter.js'
import getApplicableVersions from '../../lib/get-applicable-versions.js'
import nonEnterpriseDefaultVersion from '../../lib/non-enterprise-default-version.js'

const { GITHUB_TOKEN, APP_URL } = process.env
const context = github.context

if (!GITHUB_TOKEN) {
  throw new Error(`GITHUB_TOKEN environment variable not set`)
}

if (!APP_URL) {
  throw new Error(`APP_URL environment variable not set`)
}

const PROD_URL = 'https://docs.github.com'
const octokit = github.getOctokit(GITHUB_TOKEN)

const response = await octokit.rest.repos.compareCommitsWithBasehead({
  owner: context.repo.owner,
  repo: context.payload.repository.name,
  basehead: `${context.payload.pull_request.base.sha}...${context.payload.pull_request.head.sha}`,
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

  // get the file contents and decode them
  // this script is called from the main branch, so we need the API call to get the contents from the branch, instead
  const fileContents = await getContents(
    context.repo.owner,
    context.payload.repository.name,
    context.payload.pull_request.head.sha,
    file.filename
  )

  // parse the frontmatter
  const { data } = parse(fileContents)

  let contentCell = ''
  let previewCell = ''
  let prodCell = ''

  if (file.status === 'added') contentCell = `New file: `
  contentCell += `[\`${fileName}\`](${sourceUrl})`

  for (const version in data.versions) {
    const currentApplicableVersions = getApplicableVersions({
      [version]: data.versions[version],
    })

    if (currentApplicableVersions.length === 1) {
      // for fpt, ghec, and ghae
      if (currentApplicableVersions.toString() === nonEnterpriseDefaultVersion) {
        // omit version from fpt url
        previewCell += `[${version}](${APP_URL}/${fileUrl})<br>`
        prodCell += `[${version}](${PROD_URL}/${fileUrl})<br>`
      } else {
        // for non-versioned releases (ghae, ghec) use full url
        previewCell += `[${version}](${APP_URL}/${currentApplicableVersions}/${fileUrl})<br>`
        prodCell += `[${version}](${PROD_URL}/${currentApplicableVersions}/${fileUrl})<br>`
      }
    } else {
      // for ghes releases, link each version
      previewCell += `${version}@ `
      prodCell += `${version}@ `

      currentApplicableVersions.forEach((ghesVersion) => {
        previewCell += `[${ghesVersion.split('@')[1]}](${APP_URL}/${ghesVersion}/${fileUrl}) `
        prodCell += `[${ghesVersion.split('@')[1]}](${PROD_URL}/${ghesVersion}/${fileUrl}) `
      })
      previewCell += '<br>'
      prodCell += '<br>'
    }
  }
  markdownTable += `| ${contentCell} | ${previewCell} | ${prodCell} | |\n`
}

setOutput('changesTable', markdownTable)
