#!/usr/bin/env node

import * as github from '@actions/github'
import core from '@actions/core'

import { getContents } from '../../script/helpers/git-utils.js'
import parse from '../../lib/read-frontmatter.js'
import getApplicableVersions from '../../lib/get-applicable-versions.js'
import nonEnterpriseDefaultVersion from '../../lib/non-enterprise-default-version.js'
import { allVersionShortnames } from '../../lib/all-versions.js'
import { waitUntilUrlIsHealthy } from './lib/wait-until-url-is-healthy.js'

const { GITHUB_TOKEN, APP_URL } = process.env
const context = github.context

if (!GITHUB_TOKEN) {
  throw new Error(`GITHUB_TOKEN environment variable not set`)
}

if (!APP_URL) {
  throw new Error(`APP_URL environment variable not set`)
}

// the max size of the comment (in bytes)
// the action we use to post the comment caps out at about 144kb
// see docs-engineering#1849 for more info
const MAX_COMMENT_SIZE = 125000

const PROD_URL = 'https://docs.github.com'

run()

async function run() {
  const isHealthy = await waitUntilUrlIsHealthy(new URL('/healthz', APP_URL).toString())
  if (!isHealthy) {
    return core.setFailed(`Timeout waiting for preview environment: ${APP_URL}`)
  }

  const octokit = github.getOctokit(GITHUB_TOKEN)
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

  const lines = await Promise.all(
    articleFiles.map(async (file) => {
      const sourceUrl = file.blob_url
      const fileName = file.filename.slice(pathPrefix.length)
      const fileUrl = fileName.slice(0, fileName.lastIndexOf('.'))

      // get the file contents and decode them
      // this script is called from the main branch, so we need the API call to get the contents from the branch, instead
      const fileContents = await getContents(
        context.repo.owner,
        context.payload.repository.name,
        // Can't get its content if it no longer exists.
        // Meaning, you'd get a 404 on the `getContents()` utility function.
        // So, to be able to get necessary meta data about what it *was*,
        // if it was removed, fall back to the 'base'.
        file.status === 'removed'
          ? context.payload.pull_request.base.sha
          : context.payload.pull_request.head.sha,
        file.filename
      )

      // parse the frontmatter
      const { data } = parse(fileContents)

      let contentCell = ''
      let previewCell = ''
      let prodCell = ''

      if (file.status === 'added') contentCell = 'New file: '
      else if (file.status === 'removed') contentCell = 'Removed: '
      contentCell += `[\`${fileName}\`](${sourceUrl})`

      try {
        // the try/catch is needed because getApplicableVersions() returns either [] or throws an error when it can't parse the versions frontmatter
        // try/catch can be removed if docs-engineering#1821 is resolved
        // i.e. for feature based versioning, like ghae: 'issue-6337'
        const fileVersions = getApplicableVersions(data.versions)

        for (const plan in allVersionShortnames) {
          // plan is the shortName (i.e., fpt)
          // allVersionShortNames[plan] is the planName (i.e., free-pro-team)

          // walk by the plan names since we generate links differently for most plans
          const versions = fileVersions.filter((fileVersion) =>
            fileVersion.includes(allVersionShortnames[plan])
          )

          if (versions.length === 1) {
            // for fpt, ghec, and ghae

            if (versions.toString() === nonEnterpriseDefaultVersion) {
              // omit version from fpt url

              previewCell += `[${plan}](${APP_URL}/${fileUrl})<br>`
              prodCell += `[${plan}](${PROD_URL}/${fileUrl})<br>`
            } else {
              // for non-versioned releases (ghae, ghec) use full url

              previewCell += `[${plan}](${APP_URL}/${versions}/${fileUrl})<br>`
              prodCell += `[${plan}](${PROD_URL}/${versions}/${fileUrl})<br>`
            }
          } else if (versions.length) {
            // for ghes releases, link each version

            previewCell += `${plan}@ `
            prodCell += `${plan}@ `

            versions.forEach((version) => {
              previewCell += `[${version.split('@')[1]}](${APP_URL}/${version}/${fileUrl}) `
              prodCell += `[${version.split('@')[1]}](${PROD_URL}/${version}/${fileUrl}) `
            })
            previewCell += '<br>'
            prodCell += '<br>'
          }
        }
      } catch (e) {
        console.error(
          `Version information for ${file.filename} couldn't be determined from its frontmatter.`
        )
      }
      let note = ''
      if (file.status === 'removed') {
        note = 'removed'
        // If the file was removed, the `previewCell` no longer makes sense
        // since it was based on looking at the base sha.
        previewCell = 'n/a'
      }

      return `| ${contentCell} | ${previewCell} | ${prodCell} | ${note} |`
    })
  )

  // this section limits the size of the comment
  const cappedLines = []
  let underMax = true

  lines.reduce((previous, current, index, array) => {
    if (underMax) {
      if (previous + current.length > MAX_COMMENT_SIZE) {
        underMax = false
        cappedLines.push('**Note** There are more changes in this PR than we can show.')
        return previous
      }

      cappedLines.push(array[index])
      return previous + current.length
    }
    return previous
  }, markdownTable.length)

  markdownTable += cappedLines.join('\n')

  core.setOutput('changesTable', markdownTable)
}
