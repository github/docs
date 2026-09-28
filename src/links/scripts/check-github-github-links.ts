// Finds broken docs.github.com links in github/github.
// Usage: npm run check-github-github-links [-- --check] [output-file].
// Set GITHUB_TOKEN; a classic PAT with all repo scopes and SSO authorization is easiest.

import fs from 'fs/promises'

import { fetchWithRetry } from '@/frame/lib/fetch-utils'
import { program } from 'commander'

import { getContents, getPathsWithMatchingStrings } from '@/workflows/git-utils'

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

// got waits 1000 * 2^(retry - 1) ms plus jitter between retries, so three retries add
// about 7s of backoff on top of each 3s request timeout.
const retryConfiguration = {
  limit: 3,
}
// Datadog averages archive_enterprise_proxy around 70ms outside spikes, below the 3s timeout.
const timeoutConfiguration = {
  request: 3000,
}

type MainOptions = {
  check: boolean
  outputFile: string | null
}
async function main(opts: MainOptions, args: string[]) {
  const { check } = opts
  let outputFile = null
  if (args && args.length > 0 && args[0] !== '-') {
    outputFile = args[0]
  }
  const searchStrings = ['https://docs.github.com', 'GitHub help_url', 'GitHub developer_help_url']

  const foundFiles = []
  try {
    foundFiles.push(...JSON.parse(await fs.readFile('/tmp/foundFiles.json', 'utf-8')))
  } catch (error: unknown) {
    if (!((error as NodeJS.ErrnoException).code === 'ENOENT')) {
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
  const searchFiles = [...new Set(foundFiles)]
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
  } catch (error: unknown) {
    if (!((error as NodeJS.ErrnoException).code === 'ENOENT')) {
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
          for (const numIndex of docsIndices) {
            // Read 500 characters because github/github docs links are not expected to be longer.
            const docsLink = contents.substring(numIndex, numIndex + 500).match(urlRegEx)
            if (!docsLink) return
            const linkURL = new URL(docsLink[0].toString().replace(/[^a-zA-Z0-9]*$|\\n$/g, ''))
            const linkPath = linkURL.pathname + linkURL.hash
            docsLinksFiles.push({ linkPath, file })
          }
        }

        if (helpIndices.length > 0) {
          for (const numIndex of helpIndices) {
            // Skip interpolated help URLs without static paths, including learn_more_path values.
            if (
              (contents.substring(numIndex, numIndex + 11) === 'GitHub.help' &&
                contents.charAt(numIndex + 16) === '#') ||
              (contents.substring(numIndex, numIndex + 16) === 'GitHub.developer' &&
                contents.charAt(numIndex + 26) === '#') ||
              // Skip /github/#{...} interpolation because it does not resolve to a docs path.
              contents.slice(numIndex, numIndex + 'GitHub.help_url}/github/#{'.length) ===
                'GitHub.help_url}/github/#{'
            ) {
              return
            }

            const startSearchIndex = contents.indexOf('/', numIndex)
            // Skip help_url values with no slash within 30 characters; those are not docs paths.
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

              if (['/deprecation-1'].includes(linkPath)) {
                return
              }

              docsLinksFiles.push({ linkPath, file })
            }
          }
        }
      }
    }
    await fs.writeFile(
      '/tmp/docsLinksFiles.json',
      JSON.stringify(docsLinksFiles, undefined, 2),
      'utf-8',
    )
  }
  const brokenLinks: {
    linkPath: string
    file: string
  }[] = []

  for (const batch of [...Array(Math.floor(docsLinksFiles.length / BATCH_SIZE)).keys()]) {
    const slice = docsLinksFiles.slice(batch * BATCH_SIZE, batch * BATCH_SIZE + BATCH_SIZE)
    await Promise.all(
      slice.map(async ({ linkPath, file }) => {
        // Constructing the URL here points URL failures at parsing instead of fetch.
        const url = new URL(BASE_URL + linkPath)
        try {
          await fetchWithRetry(
            url.href,
            { method: 'HEAD' },
            {
              retries: retryConfiguration.limit,
              timeout: timeoutConfiguration.request,
              throwHttpErrors: true,
            },
          )
        } catch (error) {
          if (error instanceof Error) {
            brokenLinks.push({ linkPath, file })
          } else {
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

function endsWithAny(suffixes: string[], string: string) {
  for (const suffix of suffixes) {
    if (string.endsWith(suffix)) return true
  }

  return false
}

function getIndicesOf(searchString: string, string: string) {
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

function regexIndexOf(string: string, regex: RegExp, startPos: number) {
  const indexOf = string.substring(startPos || 0).search(regex)

  return indexOf >= 0 ? indexOf + (startPos || 0) : indexOf
}
