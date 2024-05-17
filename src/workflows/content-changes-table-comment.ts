#!/usr/bin/env node

/**
 * Hi there! 👋
 * To test this code locally, outside of Actions, you need to run
 * the script src/workflows/content-changes-table-comment-cli.ts
 *
 * See the instructions in the doc string comment at the
 * top of src/workflows/content-changes-table-comment-cli.ts
 */

import fs from 'node:fs'
import path from 'node:path'

import * as github from '@actions/github'
import core from '@actions/core'

import walk from 'walk-sync'
import { Octokit } from '@octokit/rest'
import { retry } from '@octokit/plugin-retry'

import { getContents } from './git-utils.js'
import getApplicableVersions from '@/versions/lib/get-applicable-versions.js'
import nonEnterpriseDefaultVersion from '@/versions/lib/non-enterprise-default-version.js'
import { allVersionShortnames } from '@/versions/lib/all-versions.js'
import { waitUntilUrlIsHealthy } from './wait-until-url-is-healthy.js'
import readFrontmatter from '@/frame/lib/read-frontmatter.js'
import { inLiquid } from './lib/in-liquid'

const { GITHUB_TOKEN, APP_URL } = process.env
const context = github.context

// the max size of the comment (in bytes)
// the action we use to post the comment caps out at about 144kb
// see docs-engineering#1849 for more info
const MAX_COMMENT_SIZE = 125000

const PROD_URL = 'https://docs.github.com'

// When this file is invoked directly from action as opposed to being imported
if (import.meta.url.endsWith(process.argv[1])) {
  const owner = context.repo.owner
  const repo = context.payload.repository!.name
  const baseSHA = process.env.BASE_SHA || context.payload.pull_request!.base.sha
  const headSHA = process.env.HEAD_SHA || context.payload.pull_request!.head.sha

  const isHealthy = await waitUntilUrlIsHealthy(new URL('/healthz', APP_URL).toString())
  if (!isHealthy) {
    core.setFailed(`Timeout waiting for preview environment: ${APP_URL}`)
  } else {
    const markdownTable = await main(owner, repo, baseSHA, headSHA)
    core.setOutput('changesTable', markdownTable)
  }
}

async function main(owner: string, repo: string, baseSHA: string, headSHA: string) {
  if (!GITHUB_TOKEN) {
    throw new Error(`GITHUB_TOKEN environment variable not set`)
  }
  if (!APP_URL) {
    throw new Error(`APP_URL environment variable not set`)
  }
  const RetryingOctokit = Octokit.plugin(retry)
  const octokit = new RetryingOctokit({
    auth: `token ${GITHUB_TOKEN}`,
  })
  // get the list of file changes from the PR
  const response = await octokit.rest.repos.compareCommitsWithBasehead({
    owner,
    repo,
    basehead: `${baseSHA}...${headSHA}`,
  })

  const { files } = response.data

  const pathPrefix = 'content/'
  const reusablesPrefix = 'data/reusables/'
  const articleFiles = (files || []).filter(
    ({ filename }) => filename.startsWith(pathPrefix) && filename.toLowerCase() !== 'readme.md',
  )
  const reusablesFiles = (files || []).filter(
    ({ filename }) =>
      filename.startsWith(reusablesPrefix) && filename.toLowerCase() !== 'readme.md',
  )

  const filesUsingReusables: File[] = []
  if (reusablesFiles.length) {
    const contentFilePaths = new Set<string>()
    const allContentFiles = getAllContentFiles()
    for (const reusablesFile of reusablesFiles) {
      const relativePath = path
        .relative('data/reusables', reusablesFile.filename)
        .replace(/\.md$/, '')
      const needle = `reusables.${relativePath.split('/').join('.')}`
      for (const [contentFilePath, contentFileContents] of allContentFiles) {
        if (inLiquid(contentFilePath, contentFileContents, needle)) {
          contentFilePaths.add(contentFilePath)
        }
      }
    }
    const articleFilesAlready = articleFiles.map((file) => file.filename)
    for (const contentFilePath of contentFilePaths) {
      if (articleFilesAlready.includes(contentFilePath)) continue
      filesUsingReusables.push({
        filename: contentFilePath,
        blob_url: makeBlobUrl(owner, repo, headSHA, contentFilePath),
        status: 'changed',
      })
    }
  }

  const lines = await Promise.all(
    articleFiles.map(async (file) => {
      const sourceUrl = file.blob_url
      const fileName = file.filename.slice(pathPrefix.length)
      const fileUrl = fileName.replace('/index.md', '').replace(/\.md$/, '')

      // get the file contents and decode them
      // this script is called from the main branch, so we need the API call to get the contents from the branch, instead
      const fileContents = await getContents(
        owner,
        repo,
        // Can't get its content if it no longer exists.
        // Meaning, you'd get a 404 on the `getContents()` utility function.
        // So, to be able to get necessary meta data about what it *was*,
        // if it was removed, fall back to the 'base'.
        file.status === 'removed' ? baseSHA : headSHA,
        file.filename,
      )

      const { data } = readFrontmatter(fileContents)
      if (!data) {
        console.warn(`Unable to extract frontmatter from ${file.filename}`)
        return
      }

      return makeRow({ file, fileName, sourceUrl, fileUrl, data })
    }),
  )

  lines.push(
    ...(await Promise.all(
      filesUsingReusables.map((file) => {
        const { data } = readFrontmatter(fs.readFileSync(file.filename, 'utf-8'))
        const fileName = file.filename.slice(pathPrefix.length)
        const fileUrl = fileName.replace('/index.md', '').replace(/\.md$/, '')
        return makeRow({
          file,
          fileName,
          sourceUrl: file.blob_url,
          fileUrl,
          data,
          fromReusable: true,
        })
      }),
    )),
  )

  const filteredLines = lines.filter(Boolean) as string[]
  if (!filteredLines.length) {
    console.warn(
      "No found files to generate a comment from. This PR doesn't contain any content changes.",
    )
    return ''
  }

  const headings = ['Source', 'Preview', 'Production', 'What Changed']
  const markdownTableHead = [
    `| ${headings.map((heading) => `**${heading}**`).join(' | ')} |`,
    `| ${headings.map(() => ':---').join(' | ')} |`,
  ]
  let markdownTable = markdownTableHead.join('\n') + '\n'
  for (const filteredLine of filteredLines) {
    if ((markdownTable + filteredLine).length > MAX_COMMENT_SIZE) {
      markdownTable += '\n**Note** There are more changes in this PR than we can show.'
      break
    }
    markdownTable += filteredLine + '\n'
  }

  return markdownTable
}

function makeBlobUrl(owner: string, repo: string, sha: string, filePath: string) {
  return `https://github.com/${owner}/${repo}/blob/${sha}/${encodeURIComponent(filePath)}`
}

type File = {
  filename: string
  status: 'added' | 'removed' | 'modified' | 'renamed' | 'copied' | 'changed' | 'unchanged'
  blob_url: string
}

function makeRow({
  file,
  fileUrl,
  fileName,
  sourceUrl,
  data,
  fromReusable,
}: {
  file: File
  fileUrl: string
  fileName: string
  sourceUrl: string
  data: any
  fromReusable?: boolean
}) {
  let contentCell = ''
  let previewCell = ''
  let prodCell = ''

  if (file.status === 'added') contentCell = 'New file: '
  else if (file.status === 'removed') contentCell = 'Removed: '
  contentCell += `[\`${fileName}\`](${sourceUrl})`

  try {
    // the try/catch is needed because getApplicableVersions() returns either [] or throws an error when it can't parse the versions frontmatter
    // try/catch can be removed if docs-engineering#1821 is resolved
    // i.e. for feature based versioning, like ghec: 'issue-6337'
    const fileVersions: string[] = getApplicableVersions(data.versions)

    for (const plan in allVersionShortnames) {
      // plan is the shortName (i.e., fpt)
      // allVersionShortNames[plan] is the planName (i.e., free-pro-team)

      // walk by the plan names since we generate links differently for most plans
      const versions = fileVersions.filter((fileVersion) =>
        fileVersion.includes(allVersionShortnames[plan]),
      )

      if (versions.length === 1) {
        // for fpt and ghec

        if (versions.toString() === nonEnterpriseDefaultVersion) {
          // omit version from fpt url

          previewCell += `[${plan}](${APP_URL}/${fileUrl})<br>`
          prodCell += `[${plan}](${PROD_URL}/${fileUrl})<br>`
        } else {
          // for non-versioned releases (ghec) use full url

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
      `Version information for ${file.filename} couldn't be determined from its frontmatter.`,
    )
  }
  let note = ''
  if (file.status === 'removed') {
    note = 'removed'
    // If the file was removed, the `previewCell` no longer makes sense
    // since it was based on looking at the base sha.
    previewCell = 'n/a'
  } else if (fromReusable) {
    note += 'from reusable'
  }

  return `| ${contentCell} | ${previewCell} | ${prodCell} | ${note} |`
}

function getAllContentFiles(): Map<string, string> {
  const options = {
    globs: ['**/*.md'],
    includeBasePath: true,
  }
  const contentFiles = new Map<string, string>()
  for (const file of walk('content', options)) {
    contentFiles.set(file, fs.readFileSync(file, 'utf-8'))
  }
  return contentFiles
}

export default main
