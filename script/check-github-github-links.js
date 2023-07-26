#!/usr/bin/env node

// [start-readme]
//
// Run this script to get all broken docs.github.com links in github/github
//
// To run this locally, you'll generate a PAT and create an environment
// variable called GITHUB_TOKEN.
// Easiest is to create a *classic* Personal Access Token and make sure
// it has all "repo" scopes. You also have to press the "Configure SSO"
// for it.
//
// [end-readme]

import fs from 'fs/promises'

import got, { RequestError } from 'got'
import { program } from 'commander'

import { getContents, getPathsWithMatchingStrings } from './helpers/git-utils.js'

if (!process.env.GITHUB_TOKEN) {
  throw new Error('Error! You must have a GITHUB_TOKEN set in an .env file to run this script.')
}

const FORCE_DOWNLOAD = Boolean(JSON.parse(process.env.FORCE_DOWNLOAD || 'false'))
const BATCH_SIZE = JSON.parse(process.env.BATCH_SIZE || '10')
const BASE_URL = process.env.BASE_URL || 'http://localhost:4000'
const CACHE_SEARCHES = !JSON.parse(process.env.CI || 'false')

program
  .description('Check for broken links in github/github')
  .option('--check', 'Exit non-zero if there were >0 broken links')
  .argument('[output-file]', 'If omitted or "-", will write to stdout')
  .parse(process.argv)

main(program.opts(), program.args)

// The way `got` does retries:
//
//   sleep = 1000 * Math.pow(2, retry - 1) + Math.random() * 100
//
// So, it means:
//
//   1. ~1000ms
//   2. ~2000ms
//   3. ~4000ms
//
// ...if the limit we set is 3.
// Our own timeout, in ./middleware/timeout.js defaults to 10 seconds.
// So there's no point in trying more attempts than 3 because it would
// just timeout on the 10s. (i.e. 1000 + 2000 + 4000 + 8000 > 10,000)
const retryConfiguration = {
  limit: 3,
}
// According to our Datadog metrics, the *average* time for the
// the 'archive_enterprise_proxy' metric is ~70ms (excluding spikes)
// which much less than 500ms.
const timeoutConfiguration = {
  request: 3000,
}

async function main(opts, args) {
  const { check } = opts
  let outputFile = null
  if (args && args.length > 0 && args[0] !== '-') {
    outputFile = args[0]
  }
  const searchStrings = ['https://docs.github.com', 'GitHub help_url', 'GitHub developer_help_url']

  const foundFiles = []
  try {
    foundFiles.push(...JSON.parse(await fs.readFile('/tmp/foundFiles.json', 'utf-8')))
  } catch (error) {
    if (!(error.code && error.code === 'ENOENT')) {
      throw error
    }
  }
  if (!foundFiles.length || FORCE_DOWNLOAD) {
    foundFiles.push(
      ...(await getPathsWithMatchingStrings(searchStrings, 'github', 'github', {
        cache: CACHE_SEARCHES,
        forceDownload: FORCE_DOWNLOAD,
      })),
    )
    await fs.writeFile('/tmp/foundFiles.json', JSON.stringify(foundFiles, undefined, 2), 'utf-8')
  }
  const searchFiles = [...new Set(foundFiles)] // filters out dupes
    .filter((file) => endsWithAny(['.rb', '.yml', '.yaml', '.txt', '.pdf', '.erb', '.js'], file))
    .filter(
      (file) =>
        !file.includes('test/') &&
        !file.includes('app/views/') &&
        !file.includes('config.') &&
        !file.includes('app/api/description/'),
    )

  const docsLinksFiles = []
  const urlRegEx =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g

  try {
    docsLinksFiles.push(...JSON.parse(await fs.readFile('/tmp/docsLinksFiles.json', 'utf-8')))
  } catch (error) {
    if (!(error.code && error.code === 'ENOENT')) {
      throw error
    }
  }

  if (!docsLinksFiles.length || FORCE_DOWNLOAD) {
    for (const file of searchFiles) {
      const contents = await getContents('github', 'github', 'master', file)

      if (
        contents.includes('https://docs.github.com') ||
        contents.includes('GitHub.help_url') ||
        contents.includes('GitHub.developer_help_url')
      ) {
        const docsIndices = getIndicesOf('https://docs.github.com', contents)
        const helpIndices = getIndicesOf('GitHub.help_url', contents)
        helpIndices.push(...getIndicesOf('GitHub.developer_help_url', contents))
        if (docsIndices.length > 0) {
          docsIndices.forEach((numIndex) => {
            // Assuming we don't have links close to 500 characters long
            const docsLink = contents.substring(numIndex, numIndex + 500).match(urlRegEx)
            const linkURL = new URL(docsLink[0].toString().replace(/[^a-zA-Z0-9]*$|\\n$/g, ''))
            const linkPath = linkURL.pathname + linkURL.hash
            docsLinksFiles.push({ linkPath, file })
          })
        }

        if (helpIndices.length > 0) {
          helpIndices.forEach((numIndex) => {
            // There are certain links like #{GitHub.help_url}#{learn_more_path} and #{GitHub.developer_help_url}#{learn_more_path} that we should skip
            if (
              (contents.substring(numIndex, numIndex + 11) === 'GitHub.help' &&
                contents.charAt(numIndex + 16) === '#') ||
              (contents.substring(numIndex, numIndex + 16) === 'GitHub.developer' &&
                contents.charAt(numIndex + 26) === '#') ||
              // See internal issue #2180
              contents.slice(numIndex, numIndex + 'GitHub.help_url}/github/#{'.length) ===
                'GitHub.help_url}/github/#{'
            ) {
              return
            }

            const startSearchIndex = contents.indexOf('/', numIndex)
            // Looking for the closest '/' after GitHub.developer_help_url or GitHub.help_url
            // There are certain links that don't start with `/` so we want to skip those.
            // If there's no `/` within 30 characters of GitHub.help_url/GitHub.developer_help_url, skip
            if (startSearchIndex - numIndex < 30) {
              const linkPath = contents
                .substring(
                  startSearchIndex,
                  regexIndexOf(
                    contents,
                    /\n|"\)|{@email_tracking_params}|\^http|Ahttps|example|This|TODO"|[{}|"%><.,')* ]/,
                    startSearchIndex + 1,
                  ),
                )
                .trim()

              // Certain specific links can be ignored as well
              if (['/deprecation-1'].includes(linkPath)) {
                return
              }

              docsLinksFiles.push({ linkPath, file })
            }
          })
        }
      }
    }
    await fs.writeFile(
      '/tmp/docsLinksFiles.json',
      JSON.stringify(docsLinksFiles, undefined, 2),
      'utf-8',
    )
  }
  const brokenLinks = []

  // Break up the long list of URLs to test into batches
  for (const batch of [...Array(Math.floor(docsLinksFiles.length / BATCH_SIZE)).keys()]) {
    const slice = docsLinksFiles.slice(batch * BATCH_SIZE, batch * BATCH_SIZE + BATCH_SIZE)
    await Promise.all(
      slice.map(async ({ linkPath, file }) => {
        // This isn't necessary but if it can't be constructed, it'll
        // fail in quite a nice way and not "blame got".
        const url = new URL(BASE_URL + linkPath)
        try {
          await got.head(url.href, {
            retry: retryConfiguration,
            timeout: timeoutConfiguration,
          })
        } catch (error) {
          if (error instanceof RequestError) {
            brokenLinks.push({ linkPath, file })
          } else {
            console.warn(`URL when it threw: ${url}`)
            throw error
          }
        }
      }),
    )
  }

  if (!brokenLinks.length) {
    console.log('All links are good!')
  } else {
    let markdown = `Found ${brokenLinks.length} total broken links in github/github`
    markdown += '\n\n```\n'
    markdown += JSON.stringify([...brokenLinks], null, 2)
    markdown += '\n```\n'
    if (outputFile) {
      await fs.writeFile(outputFile, markdown, 'utf-8')
      console.log(`Wrote Markdown about broken files to ${outputFile}`)
    } else {
      console.log(markdown)
    }

    if (check) {
      process.exit(brokenLinks.length)
    }
  }
}

function endsWithAny(suffixes, string) {
  for (const suffix of suffixes) {
    if (string.endsWith(suffix)) return true
  }

  return false
}

function getIndicesOf(searchString, string) {
  const searchStrLen = searchString.length
  if (searchStrLen === 0) return []

  let startIndex = 0
  let index
  const indices = []

  while ((index = string.indexOf(searchString, startIndex)) > -1) {
    indices.push(index)
    startIndex = index + searchStrLen
  }

  return indices
}

function regexIndexOf(string, regex, startPos) {
  const indexOf = string.substring(startPos || 0).search(regex)

  return indexOf >= 0 ? indexOf + (startPos || 0) : indexOf
}
