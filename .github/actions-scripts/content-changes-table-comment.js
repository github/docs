#!/usr/bin/env node

import * as github from '@actions/github'
import { setOutput } from '@actions/core'

import { getContents } from '../../script/helpers/git-utils.js'
import parse from '../../lib/read-frontmatter.js'
import getApplicableVersions from '../../lib/get-applicable-versions.js'
import nonEnterpriseDefaultVersion from '../../lib/non-enterprise-default-version.js'
import { allVersions } from '../../lib/all-versions.js'

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

// creates an array for cross-referencing short to plan names:
// i.e., [ [fpt, free-pro-team], [ghec, enterprise-cloud] ...]
const supportedShortVersions = [
  ...new Set(Object.values(allVersions).map((v) => [v.shortName, v.plan])),
]
const shortAndPlanNames = Array.from(
  new Set(supportedShortVersions.map((e) => JSON.stringify(e)))
).map((e) => JSON.parse(e))

// get the list of file changes from the PR
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

  try {
    // the try/catch is needed because getApplicableVersions() returns either [] or throws an error when it can't parse the versions frontmatter
    // try/catch can be removed if https://github.com/github/docs-engineering/issues/1821 is resolved
    // i.e. for feature based versioning, like ghae: 'issue-6337'
    const fileVersions = getApplicableVersions(data.versions)

    for (const plan of shortAndPlanNames) {
      // walk by the plan names since we generate links differently for most plans
      const versions = fileVersions.filter((fileVersion) => fileVersion.includes(plan[1]))
      // plan[0] is the shortName (i.e., fpt)
      // plan[1] is the planName (i.e., free-pro-team)

      if (versions.length === 1) {
        // for fpt, ghec, and ghae

        if (versions.toString() === nonEnterpriseDefaultVersion) {
          // omit version from fpt url

          previewCell += `[${plan[0]}](${APP_URL}/${fileUrl})<br>`
          prodCell += `[${plan[0]}](${PROD_URL}/${fileUrl})<br>`
        } else {
          // for non-versioned releases (ghae, ghec) use full url

          previewCell += `[${plan[0]}](${APP_URL}/${versions}/${fileUrl})<br>`
          prodCell += `[${plan[0]}](${PROD_URL}/${versions}/${fileUrl})<br>`
        }
      } else if (versions.length) {
        // for ghes releases, link each version

        previewCell += `${plan[0]}@ `
        prodCell += `${plan[0]}@ `

        versions.forEach((version) => {
          previewCell += `[${version.split('@')[1]}](${APP_URL}/${version}/${fileUrl}) `
          prodCell += `[${version.split('@')[1]}](${PROD_URL}/${version}/${fileUrl}) `
        })
        previewCell += '<br>'
        prodCell += '<br>'
      }
    }
  } catch (e) {}
  markdownTable += `| ${contentCell} | ${previewCell} | ${prodCell} | |\n`
}
setOutput('changesTable', markdownTable)
