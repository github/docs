// Some fixture tests need translated data files that live under data, outside test code.
// This script copies those required data files into src/fixtures/fixtures/data.

import fs from 'fs'
import path from 'path'

import { program } from 'commander'
import chalk from 'chalk'

// Keep files that rendering needs but stores under data.
const MANDATORY_FILES = [
  'data/ui.yml',
  'data/reusables/enterprise_deprecation/deprecation_details.md',
  'data/reusables/enterprise_deprecation/version_was_deprecated.md',
  'data/reusables/enterprise_deprecation/version_will_be_deprecated.md',
]

const DESTINATION = path.resolve('src/fixtures/fixtures')

program
  .description('Make sure the test fixtures have up-to-date data from the real content')
  .option('--check', 'Exit non-zero if it had to actually do something')
  .option('--dry-run', "Don't actually write changes to disk")
  .option('-v, --verbose', 'Verbose outputs')
  .parse(process.argv)

main(program.opts())

async function main(opts: { check?: boolean; dryRun?: boolean; verbose?: boolean }) {
  let errors = 0
  for (const file of MANDATORY_FILES) {
    const source = fs.readFileSync(file, 'utf-8')
    const destination = path.join(DESTINATION, file)

    if (opts.check) {
      // The destination has to exist and be identical
      try {
        const copied = fs.readFileSync(destination, 'utf-8')
        if (copied !== source) {
          // console.warn(chalk.red(`The file ${destination} is different from ${file}`))
          console.warn(`The file ${chalk.red(destination)} is different from ${chalk.red(file)}`)
          errors++
        } else if (opts.verbose) {
          console.log(`The file ${chalk.green(destination)} is up-to-date 🥰`)
        }
      } catch (error: unknown) {
        if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
          console.warn(`The file ${chalk.red(destination)} does not exist`)
          errors++
        } else {
          throw error
        }
      }
    } else {
      try {
        const copied = fs.readFileSync(destination, 'utf-8')
        if (copied === source) {
          if (opts.verbose) {
            console.log(`The file ${chalk.green(destination)} was perfect already 👌`)
          }
          continue
        }
      } catch (error: unknown) {
        if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error
      }
      if (!opts.dryRun) {
        await fs.promises.mkdir(path.dirname(destination), { recursive: true })
        fs.writeFileSync(destination, source, 'utf-8')
        if (opts.verbose) {
          console.log(`Copied latest ${chalk.green(file)} to ${chalk.bold(destination)} 👍🏼`)
        }
      } else if (opts.verbose) {
        console.log(`Would copy latest ${chalk.bold(file)} to ${chalk.bold(destination)}`)
      }
    }
  }

  if (errors > 0) {
    console.warn(
      '\n',
      chalk.yellow(
        'Run this script again without --check to make all fixture data files up-to-date. ' +
          'Then commit and check in.',
      ),
    )
  }

  process.exitCode = errors
}
