import { program } from 'commander'
import fs from 'fs'
import coreLib from '@actions/core'

import github from '#src/workflows/github.ts'
import { getEnvInputs } from '#src/workflows/get-env-inputs.ts'
import { createReportIssue, linkReports } from '#src/workflows/issue-report.js'

// GitHub issue body size limit is ~65k characters, so we'll use 60k as a safe limit
const MAX_ISSUE_BODY_SIZE = 60000

// [start-readme]
//
// This script runs once a week via a scheduled GitHub Action to lint
// the entire content and data directories based on our
// markdownlint.js rules.
//
// If errors or warnings are found, it will open up a new issue in the
// docs-content repo with the label "broken content markdown report".
//
// The Content FR will go through the issue and update the content and
// data files accordingly.
//
// [end-readme]

program
  .description(
    'Opens an issue for Content FR with the errors and warnings from the weekly content/data linter.',
  )
  .option(
    '-p, --path <path>',
    'provide a path to the errors and warnings output json file that will be in the issue body',
  )
  .parse(process.argv)

const { path } = program.opts()

main()
async function main() {
  const lintResults = fs.readFileSync(`${path}`, 'utf8')
  const core = coreLib
  const { REPORT_REPOSITORY, REPORT_AUTHOR, REPORT_LABEL } = process.env

  const octokit = github()
  // `GITHUB_TOKEN` is optional. If you need the token to post a comment
  // or open an issue report, you might get cryptic error messages from Octokit.
  getEnvInputs(['GITHUB_TOKEN'])

  core.info(`Creating issue for errors and warnings...`)

  const parsedResults = JSON.parse(lintResults)
  const totalFiles = Object.keys(parsedResults).length
  let reportBody = 'The following files have markdown lint warnings/errors:\n\n'
  let filesIncluded = 0
  let truncated = false

  for (const [file, flaws] of Object.entries(parsedResults)) {
    const fileEntry = `File: \`${file}\`:\n\`\`\`json\n${JSON.stringify(flaws, null, 2)}\n\`\`\`\n`

    // Check if adding this file would exceed the size limit
    if (reportBody.length + fileEntry.length > MAX_ISSUE_BODY_SIZE) {
      truncated = true
      break
    }

    reportBody += fileEntry
    filesIncluded++
  }

  // Add truncation notice if needed
  if (truncated) {
    const remaining = totalFiles - filesIncluded
    reportBody += `\n---\n\n⚠️ **Output truncated**: Showing ${filesIncluded} of ${totalFiles} files with lint issues. ${remaining} additional files have been omitted to stay within GitHub's issue size limits.\n`
    reportBody += `\nTo see all results, run the linter locally:\n\`\`\`bash\nnpm run lint-content -- --paths content data\n\`\`\`\n`
  }

  const reportProps = {
    core,
    octokit,
    reportTitle: `Error(s) and warning(s) in content markdown file(s)`,
    reportBody,
    reportRepository: REPORT_REPOSITORY,
    reportLabel: REPORT_LABEL,
  }

  await createReportIssue(reportProps)

  const linkProps = {
    core,
    octokit,
    newReport: await createReportIssue(reportProps),
    reportRepository: REPORT_REPOSITORY,
    reportAuthor: REPORT_AUTHOR,
    reportLabel: REPORT_LABEL,
  }

  await linkReports(linkProps)
}
