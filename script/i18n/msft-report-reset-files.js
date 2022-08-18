#!/usr/bin/env node

import { program } from 'commander'
import fs from 'fs'
import languages from '../../lib/languages.js'

const defaultWorkflowUrl = [
  process.env.GITHUB_SERVER_URL,
  process.env.GITHUB_REPOSITORY,
  'actions/runs',
  process.env.GITHUB_RUN_ID,
].join('/')

const reportTypes = {
  'pull-request-body': pullRequestBodyReport,
  csv: csvReport,
}

program
  .description('Reads a translation batch log and generates a report')
  .requiredOption('--language <language>', 'The language to compare')
  .requiredOption('--log-file <log-file>', 'The batch log file')
  .requiredOption(
    '--report-type <report-type>',
    'The batch log file, I.E: ' + Object.keys(reportTypes).join(', ')
  )
  .option('--workflow-url <workflow-url>', 'The workflow url', defaultWorkflowUrl)
  .option('--csv-path <file-path>', 'The path to the CSV file')
  .parse(process.argv)

const options = program.opts()
const language = languages[options.language]
const { logFile, workflowUrl, reportType, csvPath } = options

if (!Object.keys(reportTypes).includes(reportType)) {
  throw new Error(`Invalid report type: ${reportType}`)
}

const logFileContents = fs.readFileSync(logFile, 'utf8')

const revertLines = logFileContents
  .split('\n')
  .filter((line) => line.match(/^(-> reverted to English)|^(-> removed)/))
  .filter((line) => line.match(language.dir))

const reportEntries = revertLines.sort().map((line) => {
  const [, file, reason] = line.match(/^-> (?:reverted to English|removed): (.*) Reason: (.*)$/)
  return { file, reason }
})

function pullRequestBodyReport() {
  return [
    `New translation batch for ${language.name}. Product of [this workflow](${workflowUrl}).

## ${reportEntries.length} files reverted.

You can see the log in [\`${csvPath}\`](${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/blob/${csvPath}).`,
  ].join('\n')
}

function csvReport() {
  const lines = reportEntries.map(({ file, reason }) => {
    return [file, reason].join(',')
  })

  return ['file,reason', lines].flat().join('\n')
}

console.log(reportTypes[reportType]())
