#!/usr/bin/env node
import xDotenv from 'dotenv'
import xGithub from './helpers/github.js'
import { execSync } from 'child_process'

xDotenv.config()
const github = xGithub()

// Check for required PAT
if (!process.env.GITHUB_TOKEN) {
  console.error('Error! You must have a GITHUB_TOKEN set in an .env file to run this script.')
  process.exit(1)
}

// [start-readme]
//
// Use this script as the last step of the Crowdin merge process to:
// 1. Add newly found broken translated files to the localization-support issue OP.
// 2. Add a comment on the issue with more details.
//
// [end-readme]

const fixableErrorsLog = '~/docs-translation-errors-fixable.txt'
const parsingErrorsLog = '~/docs-translation-parsing-error.txt'
const renderingErrorsLog = '~/docs-translation-rendering-error.txt'

// Get just the fixable files:
const fixable = execSync(
  `cat ${fixableErrorsLog} | egrep "^translations/.*/(.+.md|.+.yml)$" | sed -e 's/^/- [ ] /' | uniq`
).toString()

// Get a list of files to be added to the body of the issue
const filesToAdd = execSync(
  `cat ${parsingErrorsLog} ${renderingErrorsLog} | egrep "^translations/.*/(.+.md|.+.yml)$" | sed -e 's/^/- [ ] /' | uniq`
).toString()

// Cat the three error logs together
const allErrors = execSync('cat ~/docs-*').toString()

const comment = `
Did a fresh merge today!

<details>
<summary>In addition to the files in the PR body, these files also have errors, but can be fixed programmatically:</summary>

${fixable}

</details>

<details>
<summary>Here are the <b>new</b> errors:</summary>

\`\`\`

${allErrors}

\`\`\`

</details>
`

const owner = 'github'
const repo = 'localization-support'
const issueNumber = '489'

main()

async function main() {
  await updateIssueBody()
  await addNewComment()

  console.log('Success! You can safely delete the temporary logfiles under ~/docs-*.')
}

async function updateIssueBody() {
  // Get current body text of OP from https://github.com/github/localization-support/issues/489.
  const {
    data: { body },
  } = await github.issues.get({
    owner,
    repo,
    issue_number: issueNumber,
  })

  // Update the body with the list of newly broken files
  const newBody = body + '\n' + filesToAdd

  // Update the issue
  try {
    await github.issues.update({
      owner,
      repo,
      issue_number: issueNumber,
      body: newBody,
    })

    console.log(
      'Added newly found broken files to OP of https://github.com/github/localization-support/issues/489!\n'
    )
  } catch (err) {
    console.error(err)
  }
}

async function addNewComment() {
  try {
    await github.issues.createComment({
      owner,
      repo,
      issue_number: issueNumber,
      body: comment,
    })

    console.log(
      'Added comment to the end of https://github.com/github/localization-support/issues/489!\n'
    )
  } catch (err) {
    console.error(err)
  }
}
