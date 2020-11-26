#!/usr/bin/env node

const path = require('path')
const fs = require('fs')
const linkinator = require('linkinator')
const dedent = require('dedent')
const program = require('commander')
const { escapeRegExp } = require('lodash')
const checker = new linkinator.LinkChecker()
const rimraf = require('rimraf').sync
const root = 'https://docs.github.com'
const englishRoot = `${root}/en`
const { deprecated } = require('../lib/enterprise-server-releases')

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
  .parse(process.argv)

// Skip excluded links defined in separate file.
const excludedLinks = require('../lib/excluded-links')
  .map(link => escapeRegExp(link))

// Skip non-English content.
const languagesToSkip = Object.keys(require('../lib/languages'))
  .filter(code => code !== 'en')
  .map(code => `${root}/${code}`)

// Skip deprecated Enterprise content.
// Capture the old format https://docs.github.com/enterprise/2.1/
// and the new format https://docs.github.com/enterprise-server@2.19/.
const enterpriseReleasesToSkip = new RegExp(`${root}.+?[/@](${deprecated.join('|')})/`)

const config = {
  path: englishRoot,
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
  const startTime = new Date()

  // Clear and recreate a directory for logs.
  const logFile = path.join(__dirname, '../.linkinator/full.log')
  rimraf(path.dirname(logFile))
  fs.mkdirSync(path.dirname(logFile), { recursive: true })

  // Update CLI output and append to logfile after each checked link.
  checker.on('link', result => {
    fs.appendFileSync(logFile, JSON.stringify(result) + '\n')
  })

  // Start the scan; events will be logged as they occur.
  const result = await checker.check(config)

  // Scan is complete! Display the results.
  const endTime = new Date()
  const skippedLinks = result.links.filter(x => x.state === 'SKIPPED')
  const brokenLinks = result.links.filter(x => x.state === 'BROKEN')

  console.log(dedent`
    ${brokenLinks.length} broken links found on docs.github.com

    Link scan completed in ${endTime - startTime}ms
    Total links: ${result.links.length}
    Skipped links: ${skippedLinks.length}
    Broken links: ${brokenLinks.length}
    For more details see ${path.relative(process.cwd(), logFile)}
  `)

  if (brokenLinks.length) {
    console.log('\n\n' + JSON.stringify(brokenLinks, null, 2))
    process.exit(1)
  }

  process.exit(0)
}
