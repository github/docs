#!/usr/bin/env node

// [start-readme]
//
// This script runs once per day via a scheduled GitHub Action to check all links in
// English content, not including deprecated Enterprise Server content. It opens an issue
// if it finds broken links. To exclude a link path, add it to `lib/excluded-links.js`.
// Note that linkinator somtimes returns 429 and 503 errors for links that are not actually
// broken, so this script double-checks those using `got`.
//
// [end-readme]

import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import { LinkChecker } from 'linkinator'
import { program } from 'commander'
import { pull, uniq } from 'lodash-es'
import rimraf from 'rimraf'
import mkdirp from 'mkdirp'
import { deprecated } from '../lib/enterprise-server-releases.js'
import got from 'got'
import excludedLinks from '../lib/excluded-links.js'
import libLanguages from '../lib/languages.js'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const checker = new LinkChecker()
const root = 'http://localhost:4000'
const englishRoot = `${root}/en`

// When using the peter-evans/create-issue-from-file Action to post an
// issue comment you might get an error like this:
//
//   "body is too long (maximum is 65536 characters)"
//
// So we cap our to not exceed that length.
// This number doesn't have to be strictly less that the maximum possible
// but it just mustn't exceed the validation limit.
// Note, a little bit of room must be left for adding
// a note in the generated output about the excess.
const DISPLAY_MAX_LENGTH = parseInt(process.env.DISPLAY_MAX_LENGTH || '30000', 10)

// Links with these codes may or may not really be broken.
const retryStatusCodes = [429, 503, 'Invalid']

const LINKINATOR_CONCURRENCY = parseInt(process.env.LINKINATOR_CONCURRENCY || '300')

program
  .description('Check all links in the English docs.')
  .option(
    '-d, --dry-run',
    'Turn off recursion to get a fast minimal report (useful for previewing output).'
  )
  .option(
    '-r, --do-not-retry',
    `Do not retry broken links with status codes ${retryStatusCodes.join(', ')}.`
  )
  .option(
    '-p, --path <PATH>',
    `Provide an optional path to check. Best used with --dry-run. Default: ${englishRoot}`
  )
  .parse(process.argv)

// Skip excluded links defined in separate file.

// Skip non-English content.
const languagesToSkip = Object.keys(libLanguages)
  .filter((code) => code !== 'en')
  .map((code) => new RegExp(`${root}/${code}`))

// Skip deprecated Enterprise content.
// Capture the old format https://docs.github.com/enterprise/2.1/
// and the new format https://docs.github.com/enterprise-server@2.19/.
const enterpriseReleasesToSkip = new RegExp(`${root}.+?[/@](${deprecated.join('|')})(/|$)`)

const config = {
  path: program.opts().path || englishRoot,
  concurrency: LINKINATOR_CONCURRENCY,
  // If this is a dry run, turn off recursion.
  recurse: !program.opts().dryRun,
  silent: true,
  // The values in this array are treated as regexes.
  linksToSkip: linksToSkipFactory([
    enterpriseReleasesToSkip,
    ...languagesToSkip,
    ...excludedLinks,
    // Don't leak into the production site
    /https:\/\/docs\.github\.com/,
  ]),
}

// Return a function that can as quickly as possible check if a certain
// href input should be skipped.
// Do this so we can use a `Set` and a `iterable.some()` for a speedier
// check. The default implementation in Linkinator, if you set
// the `linksToSkip` config to be an array, it will, for every URL it
// checks turn that into a new regex every single time.
function linksToSkipFactory(regexAndURLs) {
  const set = new Set(regexAndURLs.filter((regexOrURL) => typeof regexOrURL === 'string'))
  const regexes = regexAndURLs.filter((regexOrURL) => regexOrURL instanceof RegExp)
  return (href) => set.has(href) || regexes.some((regex) => regex.test(href))
}

main()

async function main() {
  // Clear and recreate a directory for logs.
  const logFile = path.join(__dirname, '../.linkinator/full.log')
  rimraf.sync(path.dirname(logFile))
  await mkdirp(path.dirname(logFile))

  // Update CLI output and append to logfile after each checked link.
  checker.on('link', (result) => {
    // We don't need to dump all of the HTTP and HTML details
    delete result.failureDetails

    fs.appendFileSync(logFile, JSON.stringify(result) + '\n')
  })

  // Start the scan; events will be logged as they occur.
  const result = (await checker.check(config)).links

  // Scan is complete! Filter the results for broken links.
  const brokenLinks = result
    .filter((link) => link.state === 'BROKEN')
    // Coerce undefined status codes into `Invalid` strings so we can display them.
    // Without this, undefined codes get JSON.stringified as `0`, which is not useful output.
    .map((link) => {
      link.status = link.status || 'Invalid'
      return link
    })

  // It's OK to console.warn because that goes to stderr.
  console.warn(`${brokenLinks.length} broken links in total (before retry)`)

  if (!program.opts().doNotRetry) {
    // Links to retry individually.
    const linksToRetry = brokenLinks.filter((link) => retryStatusCodes.includes(link.status))

    // It's OK to console.warn because that goes to stderr.
    console.warn(`${linksToRetry.length} links to retry`)

    await Promise.all(
      linksToRetry.map(async (link) => {
        try {
          // got throws an HTTPError if response code is not 2xx or 3xx.
          // If got succeeds, we can remove the link from the list.
          await got(link.url)
          pull(brokenLinks, link)
          // If got fails, do nothing. The link is already in the broken list.
        } catch (err) {
          // noop
        }
      })
    )
  }

  // Exit successfully if no broken links!
  if (!brokenLinks.length) {
    console.log('All links are good!')
    process.exit(0)
  }

  // Format and display the results.
  console.log(`${brokenLinks.length} broken links found on ${root}\n`)
  console.log(getDisplayBrokenLinks(brokenLinks, DISPLAY_MAX_LENGTH))
  console.log(
    '\nIf links are "false positives" (e.g. can only be opened by a browser) ' +
      'consider making a pull request that edits `lib/excluded-links.js`.'
  )

  // Exit unsuccessfully if broken links are found.
  process.exit(1)
}

function getDisplayBrokenLinks(brokenLinks, maxLength) {
  let output = ''
  // Sort results by status code.
  const allStatusCodes = uniq(
    brokenLinks
      // Coerce undefined status codes into `Invalid` strings so we can display them.
      // Without this, undefined codes get JSON.stringified as `0`,
      // which is not useful output.
      .map((link) => link.status || 'Invalid')
  )

  allStatusCodes.forEach((statusCode) => {
    const brokenLinksForStatus = brokenLinks.filter((x) => x.status === statusCode)

    output += `## Status ${statusCode}: Found ${brokenLinksForStatus.length} broken links\n\n`
    output += '```\n'
    let exceededDisplayLimit = 0
    brokenLinksForStatus.forEach((brokenLinkObj) => {
      // We don't need to dump all of the HTTP and HTML details
      delete brokenLinkObj.failureDetails
      const line = JSON.stringify(brokenLinkObj, null, 2)
      if (output.length + line.length > maxLength) {
        exceededDisplayLimit++
        return
      }

      output += `${line}\n`
    })
    output += '```\n'
    if (exceededDisplayLimit > 0) {
      output += `\n(🎵! Because the comment is already big,
        we skipped ${exceededDisplayLimit} additional broken links.
        It is unlikely that these are real broken links. More likely
        they are false positives due to a server-related issue that
        needs investigating. \n`
    }
  })

  return output
}
