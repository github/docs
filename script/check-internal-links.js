#!/usr/bin/env node

const linkinator = require('linkinator')
const checker = new linkinator.LinkChecker()
const { deprecated } = require('../lib/enterprise-server-releases')

const config = {
  path: 'http://localhost:4002/en',
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

  console.log(`Found ${brokenLinks.length} total broken links: ${JSON.stringify([...brokenLinks], null, 2)}`)

  // Exit unsuccessfully if broken links are found.
  process.exit(1)
}
