#!/usr/bin/env node

// [start-readme]
//
// Run this script to get all broken docs.github.com links in github/github
//
// [end-readme]

import { getContents, getPathsWithMatchingStrings } from './helpers/git-utils.js'
import got from 'got'

if (!process.env.GITHUB_TOKEN) {
  console.error('Error! You must have a GITHUB_TOKEN set in an .env file to run this script.')
  process.exit(1)
}

main()

async function main() {
  const searchStrings = ['https://docs.github.com', 'GitHub help_url', 'GitHub developer_help_url']
  const foundFiles = await getPathsWithMatchingStrings(searchStrings, 'github', 'github')
  const searchFiles = [...foundFiles]
    .filter((file) => endsWithAny(['.rb', '.yml', '.yaml', '.txt', '.pdf', '.erb', '.js'], file))
    .filter(
      (file) =>
        !file.includes('test/') &&
        !file.includes('app/views/') &&
        !file.includes('config.') &&
        !file.includes('app/api/description/')
    )

  const docsLinksFiles = []
  const urlRegEx =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g

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
          docsLinksFiles.push([docsLink[0].toString().replace(/[^a-zA-Z0-9]*$|\\n$/g, ''), file])
        })
      }

      if (helpIndices.length > 0) {
        helpIndices.forEach((numIndex) => {
          // There are certain links like #{GitHub.help_url}#{learn_more_path} and #{GitHub.developer_help_url}#{learn_more_path} that we should skip
          if (
            (contents.substring(numIndex, numIndex + 11) === 'GitHub.help' &&
              contents.charAt(numIndex + 16) !== '#') ||
            (contents.substring(numIndex, numIndex + 16) === 'GitHub.developer' &&
              contents.charAt(numIndex + 26) !== '#')
          ) {
            const startSearchIndex = contents.indexOf('/', numIndex)
            // Looking for the closest '/' after GitHub.developer_help_url or GitHub.help_url
            // There are certain links that don't start with `/` so we want to skip those.
            // If there's no `/` within 30 characters of GitHub.help_url/GitHub.developer_help_url, skip
            if (startSearchIndex - numIndex < 30) {
              const helpLink =
                'https://docs.github.com' +
                contents
                  .substring(
                    startSearchIndex,
                    regexIndexOf(
                      contents,
                      /\n|"\)|{@email_tracking_params}|\^http|Ahttps|example|This|TODO"|[{}|"%><.,')* ]/,
                      startSearchIndex + 1
                    )
                  )
                  .trim()
              docsLinksFiles.push([helpLink, file])
            }
          }
        })
      }
    }
  }
  const brokenLinks = []
  await Promise.all(
    docsLinksFiles.map(async (file) => {
      try {
        await got(file[0])
      } catch {
        brokenLinks.push(file)
      }
    })
  )
  if (!brokenLinks.length) {
    console.log('All links are good!')
    process.exit(0)
  }

  console.log(`Found ${brokenLinks.length} total broken links in github/github`)
  console.log('```')

  console.log(`${JSON.stringify([...brokenLinks], null, 2)}`)

  console.log('```')
  // Exit unsuccessfully if broken links are found.
  process.exit(1)
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
