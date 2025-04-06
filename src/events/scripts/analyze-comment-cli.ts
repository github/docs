/**
 * This script can be used to debug and test our signals.
 * Example use:
 *
 *    npm run analyze-comment -- "I love this site\!" --verbose
 *
 * or, using stdin:
 *
 *    cat naught-comment.txt | npm run analyze-comment
 *
 */

import fs from 'node:fs'
import util from 'node:util'

import chalk from 'chalk'
import { program } from 'commander'

import { SIGNAL_RATINGS } from '../analyze-comment'

type Options = {
  language?: string
  verbose?: boolean
}
program
  .description('Analyze a single comment to test how it would be rated.')
  .option('-l, --language <language>', 'Assumed language of the page')
  .option('-v, --verbose', "Display all signals it *didn't* trigger")
  .argument('[comment]', 'Input (leave blank to read from stdin)')
  .action(main)

program.parse(process.argv)

async function main(comment?: string, options?: Options) {
  if (!comment) {
    const stdinBuffer = fs.readFileSync(0) // STDIN_FILENO = 0
    comment = stdinBuffer.toString()
  }
  if (!comment.trim()) {
    console.error(chalk.red('No comment provided'))
    return process.exit(1)
  }

  console.log(chalk.grey('Comment:'), chalk.bold(util.inspect(comment)))
  console.log('') // whitespace

  const language = options?.language || 'en'

  let rating = 1.0
  let broke = false
  for (const { reduction, name, validator } of SIGNAL_RATINGS) {
    const hit = validator(comment, language)
    if (hit) {
      console.log(
        chalk.yellow(
          `Triggered on ${chalk.bold(name)} (${chalk.bold(reduction.toFixed(1))} reduction)`,
        ),
      )
      rating -= reduction
      if (rating <= 0) {
        console.log(chalk.red('Rating is now 0.0, stopping'))
        broke = true
        if (options?.verbose) {
          break
        }
      }
    } else if (options?.verbose) {
      console.log(chalk.green(`Not triggered on ${chalk.bold(name)}`))
    }
  }
  console.log('') // whitespace
  if (!broke) {
    console.log(chalk.whiteBright(`Final rating: ${chalk.bold(rating.toFixed(1))}`))
  }
}
