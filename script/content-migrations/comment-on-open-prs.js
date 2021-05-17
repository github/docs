#!/usr/bin/env node

const { listPulls, createIssueComment } = require('../helpers/git-utils')

// [start-readme]
//
// This script finds all open PRs from active branches that touch content files, and adds a comment
// with steps to run some commands. The idea is to help writers and other Hubbers update their
// open branches and mitigate conflicts with the main branch.
//
// [end-readme]

// check for required PAT
if (!process.env.GITHUB_TOKEN) {
  console.error('Error! You must have a GITHUB_TOKEN set in an .env file to run this script.')
  process.exit(1)
}

const options = {
  owner: 'github',
  repo: 'docs-internal'
}

const comment = `
👋 Hello! The docs-engineering team has just published an update that touches all content files in the repo. To reduce conflicts with \`main\`, we are sending out this message to help folks update their branches.

You'll need to do the following steps in Terminal. If you're not into that, ask in #docs-engineering and we'll help out!

1. Check out the branch associated with this PR. Don't update from \`main\` yet.
2. Run: \`script/content-migrations/remove-map-topics.js && script/content-migrations/update-tocs.js\`
3. Commit: \`git add . && git commit -m 'ran content migration scripts'\`
4. Update: \`git pull origin main\`

You may still have some conflicts to resolve. Feel free to ask us if you have questions or need help!

For a 5min demo of what the scripts do and why they're needed, check out [this screencast](https://www.loom.com/share/fa6501580b2a44d7a8a4357ee51e0c99).
`

main()

async function main () {
  const allPulls = await listPulls(options.owner, options.repo)

  // get the number of open PRs only
  const openPullNumbers = allPulls
    .filter(pull => pull.state === 'open')
    .map(pull => pull.number)

  // for every open PR, create a review comment
  await Promise.all(openPullNumbers.map(async (pullNumber) => {
    await createIssueComment(options.owner, options.repo, pullNumber, comment)
    console.log(`Added a comment to PR #${pullNumber}`)
  }))
}
