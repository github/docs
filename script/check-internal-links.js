#!/usr/bin/env node

const linkinator = require('linkinator')
const checker = new linkinator.LinkChecker()
const { deprecated } = require('../lib/enterprise-server-releases')

// [start-readme]
//
// This script runs in CI via GitHub Action to check all *internal* links in English content,
// not including deprecated Enterprise Server content. This is different from script/check-english-links.js,
// which checks *all* links in the site, both internal and external, and is much slower.
//
// [end-readme]

const config = {
  path: 'http://localhost:4002/en',
  // Use concurrency = 10 to optimize for Actions
  // See https://github.com/JustinBeckwith/linkinator/issues/135#issuecomment-623240879
  concurrency: 10,
  recurse: true,
  linksToSkip: [
    // Skip any link that is not an internal link
    '^((?!http://localhost:4002/en).)*$',
    // Skip dist files
    '/dist/index.*',
    // Skip deprecated Enterprise content
    `enterprise(-server@|/)(${deprecated.join('|')})/?`
  ]
}

main()

async function main () {
  const result = (await checker.check(config)).links

  const brokenLinks = result
    .filter(link => link.state === 'BROKEN')
    .map(link => { delete link.failureDetails; return link })

  // Exit successfully if no broken links!
  if (!brokenLinks.length) {
    console.log('All links are good!')
    process.exit(0)
  }

  console.log('\n==============================')
  console.log(`Found ${brokenLinks.length} total broken links: ${JSON.stringify([...brokenLinks], null, 2)}`)
  console.log('==============================\n')

  // Exit unsuccessfully if broken links are found.
  process.exit(1)
}
