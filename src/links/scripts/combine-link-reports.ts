#!/usr/bin/env tsx

// Combines per-version reports so one target broken in many versions appears once.
// Deduplication keeps the Markdown report under the issue body limit.

import fs from 'fs'
import path from 'path'
import { program } from 'commander'

import {
  mergeInternalLinkReports,
  reportToMarkdown,
  type LinkReport,
} from '@/links/lib/link-report'

// Example: link-report-free-pro-team@latest-en.json -> free-pro-team@latest en
const REPORT_FILE = /^link-report-(.+)-([a-z]{2})\.json$/

interface VersionedReport {
  version: string
  report: LinkReport
}

export function readReports(directory: string): VersionedReport[] {
  if (!fs.existsSync(directory)) return []

  const reports: VersionedReport[] = []
  for (const file of fs.readdirSync(directory).sort()) {
    const match = REPORT_FILE.exec(file)
    if (!match) continue

    const [, version, language] = match
    const raw = fs.readFileSync(path.join(directory, file), 'utf8')
    reports.push({ version: `${version} ${language}`, report: JSON.parse(raw) as LinkReport })
  }
  return reports
}

async function main() {
  program
    .description('Combine per-version link reports into one deduplicated report')
    .option('-i, --input <directory>', 'Directory holding the report JSON files', 'reports')
    .option('-o, --output <file>', 'Where to write the combined Markdown', 'combined-report.md')
    .option('--action-url <url>', 'Link back to the workflow run')
    .option(
      '--versions <list>',
      'Comma-separated list of every version checked, including the ones that came back clean',
    )
    .parse()

  const { input, output, actionUrl, versions } = program.opts()
  const versionsChecked = versions
    ? String(versions)
        .split(',')
        .map((v: string) => v.trim())
        .filter(Boolean)
    : undefined
  const reports = readReports(input)

  if (reports.length === 0) {
    console.log(`No report JSON found in ${input}.`)
    process.exit(1)
  }

  const merged = mergeInternalLinkReports(reports, { actionUrl, versionsChecked })
  fs.writeFileSync(output, reportToMarkdown(merged))

  const before = reports.reduce((sum, r) => sum + r.report.groups.length, 0)
  console.log(
    `Combined ${reports.length} report(s): ${before} sections before, ${merged.groups.length} after.`,
  )
}

main()
