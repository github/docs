#!/usr/bin/env node

const linkinator = require('linkinator')
const checker = new linkinator.LinkChecker()
const { deprecated } = require('../lib/enterprise-server-releases')
const englishRoot = 'http://localhost:4002/en'

// [start-readme]
//
// This script runs in CI via GitHub Action to check all *internal* links in English content,
// not including deprecated Enterprise Server content. This is different from script/check-english-links.js,
// which checks *all* links in the site, both internal and external, and is much slower.
//
// If you want to run it locally, you must have a local server running. You can use `npm run link-check`.
//
// [end-readme]

const config = {
  path: englishRoot,
  // Use concurrency = 10 to optimize for Actions
  // See https://github.com/JustinBeckwith/linkinator/issues/135#issuecomment-623240879
  concurrency: 10,
  recurse: true,
  linksToSkip: [
    // Skip any link that is not an internal link.
    // NOTE: If we want this test to check for broken asset paths in the future,
    // we can remove `en` from the path below. This will increase the runtime, but that
    // may be an acceptable tradeoff. For the record: `check-external-links`, which runs
    // nightly, currently does check for broken asset paths.
    `^((?!${englishRoot}).)*$`,
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

  if (brokenLinks.length === 1 && brokenLinks[0].url === englishRoot) {
    console.log(`You must be running ${englishRoot}!\n\nTry instead: npm run link-check`)
    process.exit(1)
  }

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
