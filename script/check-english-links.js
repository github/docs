#!/usr/bin/env node

const path = require('path')
const fs = require('fs')
const linkinator = require('linkinator')
const program = require('commander')
const { pull } = require('lodash')
const checker = new linkinator.LinkChecker()
const rimraf = require('rimraf').sync
const mkdirp = require('mkdirp').sync
const root = 'https://docs.github.com'
const englishRoot = `${root}/en`
const { deprecated } = require('../lib/enterprise-server-releases')
const got = require('got')

// Links with these codes may or may not really be broken
const retryStatusCodes = [429, 503, 'Undefined']

// Broken S3 image URLs result in 403s, broken docs URLs results in 404s
const allBrokenStatusCodes = [403, 404, ...retryStatusCodes]

// [start-readme]
//
// This script runs once per day via a scheduled GitHub Action to check all links in
// English content, not including deprecated Enterprise Server content. It opens an issue
// if it finds broken links. To exclude a link, add it to `lib/excluded-links.js`.
//
// [end-readme]

program
  .description('Check all links in the English docs.')
  .option('-d, --dry-run', 'Turn off recursion to get a fast minimal report (useful for previewing output).')
  .option('-p, --path <PATH>', 'Provide an optional path to check. Best used with --dry-run. If not provided, defaults to the homepage.')
  .parse(process.argv)

// Skip excluded links defined in separate file.
const excludedLinks = require('../lib/excluded-links')

// Skip non-English content.
const languagesToSkip = Object.keys(require('../lib/languages'))
  .filter(code => code !== 'en')
  .map(code => `${root}/${code}`)

// Skip deprecated Enterprise content.
// Capture the old format https://docs.github.com/enterprise/2.1/
// and the new format https://docs.github.com/enterprise-server@2.19/.
const enterpriseReleasesToSkip = new RegExp(`${root}.+?[/@](${deprecated.join('|')})/`)

const config = {
  path: program.path || englishRoot,
  concurrency: 300,
  // If this is a dry run, turn off recursion.
  recurse: !program.dryRun,
  silent: true,
  // The values in this array are treated as regexes.
  linksToSkip: [
    enterpriseReleasesToSkip,
    ...languagesToSkip,
    ...excludedLinks
  ]
}

main()

async function main () {
  // Clear and recreate a directory for logs.
  const logFile = path.join(__dirname, '../.linkinator/full.log')
  rimraf(path.dirname(logFile))
  mkdirp(path.dirname(logFile))

  // Update CLI output and append to logfile after each checked link.
  checker.on('link', result => {
    fs.appendFileSync(logFile, JSON.stringify(result) + '\n')
  })

  // Start the scan; events will be logged as they occur.
  const result = (await checker.check(config)).links

  // Scan is complete! Filter the results for broken links.
  const brokenLinks = result
    .filter(link => link.state === 'BROKEN')
    // Coerce undefined status codes into strings so we can filter for them like the other status codes.
    .map(link => {
      if (!link.status) link.status = 'Undefined'
      return link
    })

  // Links to retry individually.
  const linksToRetry = brokenLinks
    .filter(link => retryStatusCodes.find(retryStatusCode => link.status === retryStatusCode))

  await Promise.all(linksToRetry
    .map(async (link) => {
      try {
        const r = await got(link.url)
        // Remove the link from the list if got can access it.
        if (!allBrokenStatusCodes.find(brokenStatusCode => r.statusCode === brokenStatusCode)) {
          pull(brokenLinks, link)
        }
      // Do nothing if the URL is invalid, since it's already captured in the broken list.
      } catch (err) {
        // noop
      }
    }))

  // Exit successfully if no broken links!
  if (!brokenLinks.length) {
    console.log('All links are good!')
    process.exit(0)
  }

  // Format and display the results.
  console.log(`${brokenLinks.length} broken links found on docs.github.com\n`)
  allBrokenStatusCodes
    .forEach(statusCode => displayBrokenLinks(statusCode, brokenLinks))

  // Exit unsuccessfully if broken links are found.
  process.exit(1)
}

function displayBrokenLinks (statusCode, brokenLinks) {
  const brokenLinksForStatus = brokenLinks.filter(x => x.status === statusCode)

  if (!brokenLinksForStatus.length) return

  console.log(`## Status code ${statusCode}: Found ${brokenLinksForStatus.length} broken links`)
  console.log('```')
  brokenLinksForStatus.forEach(brokenLinkObj => {
    console.log(JSON.stringify(brokenLinkObj, null, 2))
  })
  console.log('```')
}
