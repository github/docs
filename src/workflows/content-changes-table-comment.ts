// To test this locally, outside of Actions, run
// src/workflows/content-changes-table-comment-cli.ts. Its file header has the
// instructions.

import fs from 'node:fs'
import path from 'node:path'

import * as github from '@actions/github'
import * as core from '@actions/core'

import walk from 'walk-sync'

import { getContents } from './git-utils'
import { retryingGithub } from '@/workflows/github'
import getApplicableVersions from '@/versions/lib/get-applicable-versions'
import nonEnterpriseDefaultVersion from '@/versions/lib/non-enterprise-default-version'
import { allVersionShortnames } from '@/versions/lib/all-versions'
import readFrontmatter from '@/frame/lib/read-frontmatter'
import { inLiquid } from './lib/in-liquid'

const { GITHUB_TOKEN, APP_URL, BASE_SHA, HEAD_SHA } = process.env
const context = github.context

// Max table size in characters. peter-evans/create-or-update-comment allows a
// 2^16 character comment, but the table measures itself near the end of
// rendering, before the key is added, so this stays at 2^15 for headroom. See
// github/docs-engineering#1849 and peter-evans/create-or-update-comment#271.
const MAX_COMMENT_SIZE = 32768

const PROD_URL = 'https://docs.github.com'

// When this file is invoked directly from action as opposed to being imported
if (import.meta.url.endsWith(process.argv[1])) {
  const baseOwner = context.payload.pull_request!.base.repo.owner.login
  const baseRepo = context.payload.pull_request!.base.repo.name

  const baseSHA = BASE_SHA || context.payload.pull_request!.base.sha
  const headSHA = HEAD_SHA || context.payload.pull_request!.head.sha

  const markdownTable = await main(baseOwner, baseRepo, baseSHA, headSHA)
  core.setOutput('changesTable', markdownTable)
}

async function main(owner: string, repo: string, baseSHA: string, headSHA: string) {
  if (!GITHUB_TOKEN) {
    throw new Error(`GITHUB_TOKEN environment variable not set`)
  }
  if (!APP_URL) {
    throw new Error(`APP_URL environment variable not set`)
  }

  const octokit = retryingGithub(GITHUB_TOKEN)

  // The list of file changes, which works even for a head commit from a fork.
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

      // this script is called from the main branch, so we need the API call to get the contents from the branch, instead
      const fileContents = await getContents(
        owner,
        repo,
        // `getContents()` 404s on a file that no longer exists, so for a
        // removed file read the base sha to get metadata about what it was.
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

  const headings = ['Source', 'Review', 'Production', 'What Changed']
  const markdownTableHead = [
    `| ${headings.map((heading) => `**${heading}**`).join(' | ')} |`,
    `| ${headings.map(() => ':---').join(' | ')} |`,
  ]
  let markdownTable = `${markdownTableHead.join('\n')}\n`
  for (const filteredLine of filteredLines) {
    if ((markdownTable + filteredLine).length > MAX_COMMENT_SIZE) {
      markdownTable += '\n**Note** There are more changes in this PR than we can show.'
      break
    }
    markdownTable += `${filteredLine}\n`
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
  data: { versions?: Record<string, string | string[]> } | undefined
  fromReusable?: boolean
}) {
  let contentCell = ''
  let reviewCell = ''
  let prodCell = ''

  if (file.status === 'added') contentCell = 'New file: '
  else if (file.status === 'removed') contentCell = 'Removed: '
  contentCell += `[\`${fileName}\`](${sourceUrl})`

  try {
    // getApplicableVersions() throws on missing, invalid or unsupported
    // versions frontmatter. Remove the try/catch once
    // github/docs-engineering#1821 is fixed.
    const fileVersions: string[] = getApplicableVersions(data?.versions)

    for (const plan in allVersionShortnames) {
      // `plan` is the short name, e.g. fpt, used as the link label.
      // allVersionShortnames[plan] is the plan name, e.g. free-pro-team, used
      // to pick the file's matching versions. Most plans link differently.
      const versions = fileVersions.filter((fileVersion) =>
        fileVersion.includes(allVersionShortnames[plan]),
      )

      if (versions.length === 1) {
        if (versions.toString() === nonEnterpriseDefaultVersion) {
          // omit version from fpt url

          reviewCell += `[${plan}](${APP_URL}/${fileUrl})<br>`
          prodCell += `[${plan}](${PROD_URL}/${fileUrl})<br>`
        } else {
          // for non-versioned releases (ghec) use full url

          reviewCell += `[${plan}](${APP_URL}/${versions}/${fileUrl})<br>`
          prodCell += `[${plan}](${PROD_URL}/${versions}/${fileUrl})<br>`
        }
      } else if (versions.length) {
        // for ghes releases, link each version

        reviewCell += `${plan}@ `
        prodCell += `${plan}@ `

        for (const version of versions) {
          reviewCell += `[${version.split('@')[1]}](${APP_URL}/${version}/${fileUrl}) `
          prodCell += `[${version.split('@')[1]}](${PROD_URL}/${version}/${fileUrl}) `
        }
        reviewCell += '<br>'
        prodCell += '<br>'
      }
    }
  } catch {
    console.error(
      `Version information for ${file.filename} couldn't be determined from its frontmatter.`,
    )
  }
  let note = ''
  if (file.status === 'removed') {
    note = 'removed'
    // If the file was removed, the `reviewCell` no longer makes sense
    // since it was based on looking at the base sha.
    reviewCell = 'n/a'
  } else if (fromReusable) {
    note += 'from reusable'
  }

  return `| ${contentCell} | ${reviewCell} | ${prodCell} | ${note} |`
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
