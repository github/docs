// Validates asset files for corrupt images, unsafe SVG content, and mismatched file types.
// For example, screenshot.png must contain image/png data.

import path from 'path'

import { program } from 'commander'
import chalk from 'chalk'
import walk from 'walk-sync'

import { CRITICAL, WARNING, checkFile } from '@/assets/lib/validate-asset'

const ASSETS_ROOT = path.resolve('assets')
const ROOT = path.dirname(ASSETS_ROOT)

// React component images live under assets but are not content-contributed.
const EXCLUDE_DIR = path.join(ASSETS_ROOT, 'images', 'site')

const IGNORE_EXTENSIONS = new Set([
  // CSV assets have no validator.
  '.csv',
])

program
  .description('Make sure all asset images are valid')
  .option('--dry-run', "Don't actually write changes to disk")
  .option('-v, --verbose', 'Verbose outputs')
  .parse(process.argv)

main(program.opts())

async function main(opts: { dryRun: boolean; verbose: boolean }) {
  let errors = 0

  const files = walk(ASSETS_ROOT, { includeBasePath: true, directories: false }).filter(
    (filePath) => {
      const basename = path.basename(filePath)
      const extension = path.extname(filePath).toLowerCase()
      return (
        !IGNORE_EXTENSIONS.has(extension) &&
        basename !== '.DS_Store' &&
        basename !== 'README.md' &&
        !filePath.startsWith(EXCLUDE_DIR)
      )
    },
  )
  const results = (await Promise.all(files.map(checkFile))).filter(Boolean) as [
    level: string,
    filePath: string,
    error: string,
  ][]
  for (const [level, filePath, error] of results) {
    console.log(
      level === CRITICAL ? chalk.red(level) : chalk.yellow(level),
      chalk.bold(path.relative(ROOT, filePath)),
      error,
    )
    if (level === CRITICAL) {
      errors++
    }
  }

  if (opts.verbose) {
    console.log(`Checked ${files.length.toLocaleString()} images`)
    const countWarnings = results.filter(([level]) => level === WARNING).length
    const countCritical = results.filter(([level]) => level === CRITICAL).length
    const wrap = countCritical ? chalk.red : countWarnings ? chalk.yellow : chalk.green
    console.log(wrap(`Found ${countCritical} critical errors and ${countWarnings} warnings`))
  }

  process.exitCode = errors
}
