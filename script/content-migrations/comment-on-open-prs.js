#!/usr/bin/env node

const { listPulls, createReviewComment } = require('../helpers/git-utils')

// [start-readme]
//
// This script finds all open PRs from active branches that touch content files, and adds a comment
// with a prompt to enter a slash command and update files. The idea is to help writers and other Hubbers
// update their open branches and mitigate conflicts with the main branch.
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
Hello! The docs-engineering team has just published an update that touches all content files in the repo. To reduce conflicts with \`main\`, we wanted to offer a programmatic option to update your branch.

To take advantage of this option, in a new comment on this PR, type and enter: \`/update-content-in-branch\`.

This is a custom slash command that will trigger a GitHub Action workflow to do the following:

1. Check out your branch.
2. Run some special scripts.
3. Commit and push the results back to your branch.

Once that's done, you can update from \`main\`. You may still have some conflicts to resolve.

Feel free to ask if you have questions or need help!

For a 5min demo of what the scripts do and why they're needed, check out https://www.loom.com/share/fa6501580b2a44d7a8a4357ee51e0c99.
`

main()

async function main () {
  const allPulls = await listPulls(options.owner, options.repo)

  // get the URL of open PRs only
  const openPullNumbers = allPulls
    .filter(pull => pull.state === 'open')
    .map(pull => pull.number)

  // for every open PR, create a review comment
  await Promise.all(openPullNumbers.map(async (pullNumber) => {
    await createReviewComment(options.owner, options.repo, pullNumber, comment)
    console.log(`added a comment to PR #${pullNumber}`)
  }))
}
