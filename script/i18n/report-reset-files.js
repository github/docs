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
  .parse(process.argv)

const options = program.opts()
const language = languages[options.language]
const { logFile, workflowUrl, reportType } = options

if (!Object.keys(reportTypes).includes(reportType)) {
  throw new Error(`Invalid report type: ${reportType}`)
}

const logFileContents = fs.readFileSync(logFile, 'utf8')

const revertLines = logFileContents
  .split('\n')
  .filter((line) => line.match(/^-> reverted to English/))
  .filter((line) => line.match(language.dir))

const reportEntries = revertLines.sort().map((line) => {
  const [, file, reason] = line.match(/^-> reverted to English: (.*) Reason: (.*)$/)
  return { file, reason }
})

function pullRequestBodyReport() {
  const body = [
    `New translation batch for ${language.name}. Product of [this workflow](${workflowUrl}).`,
    '\n',
    `## ${reportEntries.length} files reverted.`,
  ]

  const filesByReason = {}

  reportEntries.forEach(({ file, reason }) => {
    filesByReason[reason] = filesByReason[reason] || []
    filesByReason[reason].push(file)
  })

  Object.keys(filesByReason)
    .sort()
    .forEach((reason) => {
      const files = filesByReason[reason]
      body.push(`\n### ${reason}`)
      body.push(`\n<details><summary>${files.length} files:</summary>\n`)
      const checkBoxes = files.map((file) => `- [ ] ${file}`)
      body.push(checkBoxes)
      body.push('\n</details>')
    })

  return body.flat().join('\n')
}

function csvReport() {
  const lines = reportEntries.map(({ file, reason }) => {
    return [file, reason].join(',')
  })

  return ['file,reason', lines].flat().join('\n')
}

console.log(reportTypes[reportType]())
