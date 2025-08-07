import { program } from 'commander'
import fs from 'fs'
import coreLib from '@actions/core'

import github from '@/workflows/github'
import { getEnvInputs } from '@/workflows/get-env-inputs'
import { createReportIssue, linkReports } from '@/workflows/issue-report'
import { reportingConfig } from '@/content-linter/style/github-docs'

// GitHub issue body size limit is ~65k characters, so we'll use 60k as a safe limit
const MAX_ISSUE_BODY_SIZE = 60000

/**
 * Determines if a lint result should be included in the automated report
 * @param {Object} flaw - The lint result object
 * @param {string} flaw.severity - 'error' or 'warning'
 * @param {string[]} flaw.ruleNames - Array of rule names for this flaw
 * @returns {boolean} - True if this flaw should be included in the report
 */
function shouldIncludeInReport(flaw) {
  if (!flaw.ruleNames || !Array.isArray(flaw.ruleNames)) {
    return false
  }

  // Check if any rule name is in the exclude list
  const hasExcludedRule = flaw.ruleNames.some((ruleName) =>
    reportingConfig.excludeRules.includes(ruleName),
  )
  if (hasExcludedRule) {
    return false
  }

  // Check if severity should be included
  if (reportingConfig.includeSeverities.includes(flaw.severity)) {
    return true
  }

  // Check if any rule name is in the include list
  const hasIncludedRule = flaw.ruleNames.some((ruleName) =>
    reportingConfig.includeRules.includes(ruleName),
  )
  if (hasIncludedRule) {
    return true
  }

  return false
}

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

  core.info(`Creating issue for configured lint rules...`)

  const parsedResults = JSON.parse(lintResults)

  // Filter results based on reporting configuration
  const filteredResults = {}
  for (const [file, flaws] of Object.entries(parsedResults)) {
    const filteredFlaws = flaws.filter(shouldIncludeInReport)

    // Only include files that have remaining flaws after filtering
    if (filteredFlaws.length > 0) {
      filteredResults[file] = filteredFlaws
    }
  }
  const totalFiles = Object.keys(filteredResults).length
  let reportBody = 'The following files have markdown lint issues that require attention:\n\n'
  let filesIncluded = 0
  let truncated = false

  for (const [file, flaws] of Object.entries(filteredResults)) {
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
    reportTitle: `Content linting issues requiring attention`,
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
