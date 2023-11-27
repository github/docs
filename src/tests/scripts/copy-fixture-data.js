#!/usr/bin/env node

// [start-readme]
//
// There are certain files that have to be manually copied from the
// real data into the test fixture data.
//
// This script copies the files from `data/` into `tests/fitures/data/...`
// that are files that are both needed for fixture testing yet can't
// live with the code. For example, `data/ui.yml` is part of the rendering
// code, but it lives in `data/` so it can be translated.
//
// [end-readme]

import fs from 'fs'
import path from 'path'

import { program } from 'commander'
import chalk from 'chalk'
import { mkdirp } from 'mkdirp'

// Here, write down all the files that are actually part of the rendering
// functionality yet live in data.
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

async function main(opts) {
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
      } catch (error) {
        if (error.code === 'ENOENT') {
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
      } catch (error) {
        if (error.code !== 'ENOENT') throw error
      }
      if (!opts.dryRun) {
        await mkdirp(path.dirname(destination))
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
