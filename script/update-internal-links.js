#!/usr/bin/env node

// [start-readme]
//
// Run this script to update content's internal links.
// It can correct the title part or the URL part or both.
//
// Best way to understand how to use it is to run it with `--help`.
//
// [end-readme]

import fs from 'fs'
import path from 'path'

import { program } from 'commander'
import chalk from 'chalk'

import { updateInternalLinks } from '../lib/update-internal-links.js'
import frontmatter from '../lib/read-frontmatter.js'
import walkFiles from './helpers/walk-files.js'

program
  .description('Update internal links in content files')
  .option('-v, --verbose', 'Verbose outputs')
  .option('--debug', "Don't hide any errors")
  .option('--dry-run', "Don't actually write changes to disk")
  .option('--dont-set-autotitle', "Do NOT transform the link text to 'AUTOTITLE' (if applicable)")
  .option('--dont-fix-href', 'Do NOT fix the link href value (if necessary)')
  .option('--check', 'Exit and fail if it found something to fix')
  .option('--aggregate-stats', 'Display aggregate numbers about all possible changes')
  .option('--strict', "Throw an error (instead of a warning) if a link can't be processed")
  .option('--exclude [paths...]', 'Specific files to exclude')
  .arguments('[files-or-directories...]', '')
  .parse(process.argv)

main(program.args, program.opts())

async function main(files, opts) {
  const { debug } = opts

  const excludeFilePaths = new Set(opts.exclude || [])

  try {
    if (opts.check && !opts.dryRun) {
      throw new Error("Can't use --check without --dry-run")
    }

    const actualFiles = []
    if (!files.length) {
      files.push('content', 'data')
    }
    for (const file of files) {
      if (
        !(
          file.startsWith('content') ||
          file.startsWith('data') ||
          file.startsWith('tests/fixtures')
        )
      ) {
        throw new Error(`${file} must be a content or data filepath`)
      }
      if (!fs.existsSync(file)) {
        throw new Error(`${file} does not exist`)
      }
      if (fs.lstatSync(file).isDirectory()) {
        actualFiles.push(
          ...walkFiles(file, ['.md', '.yml']).filter((p) => {
            return !excludeFilePaths.has(p)
          })
        )
      } else if (!excludeFilePaths.has(file)) {
        actualFiles.push(file)
      }
    }
    if (!actualFiles.length) {
      throw new Error(`No files found in ${files}`)
    }

    // The updateInternalLinks doesn't use "negatives" for certain options
    const options = {
      setAutotitle: !opts.dontSetAutotitle,
      fixHref: !opts.dontFixHref,
      verbose: !!opts.verbose,
      strict: !!opts.strict,
    }

    // Remember, updateInternalLinks() doesn't actually change the files
    // on disk. That's the responsibility of the caller, i.e. this CLI script.
    // The reason why is that updateInternalLinks() can then see if ALL
    // improvements are going to work. For example, if you tried run
    // it across 10 links and the 7th one had a corrupt broken link that
    // can't be corrected, it needs to fail there and then instead of
    // leaving 6 of the 10 files changed.
    const results = await updateInternalLinks(actualFiles, options)

    let exitCheck = 0
    for (const { file, content, newContent, replacements, data } of results) {
      if (content !== newContent) {
        if (opts.verbose || opts.check) {
          if (opts.check) {
            exitCheck++
          }
          if (opts.verbose) {
            console.log(
              opts.dryRun ? 'Would change...' : 'Will change...',
              chalk.bold(file),
              chalk.dim(`${replacements.length} change${replacements.length !== 1 ? 's' : ''}`)
            )
            for (const { asMarkdown, newAsMarkdown, line, column } of replacements) {
              console.log('  ', chalk.red(asMarkdown))
              console.log('  ', chalk.green(newAsMarkdown))
              console.log('  ', chalk.dim(`line ${line} column ${column}`))
              console.log('')
            }
          }
        }
        if (!opts.dryRun) {
          // Remember the `content` and `newContent` is the "meat" of the
          // Markdown page. To save it you need the frontmatter data too.
          fs.writeFileSync(
            file,
            frontmatter.stringify(newContent, data, { lineWidth: 10000 }),
            'utf-8'
          )
        }
      }
    }

    if (opts.aggregateStats) {
      const countFiles = results.length
      const countChangedFiles = new Set(results.filter((result) => result.replacements.length > 0))
        .size
      const countReplacements = results.reduce((prev, next) => prev + next.replacements.length, 0)
      console.log('Number of files checked:'.padEnd(30), chalk.bold(countFiles.toLocaleString()))
      console.log(
        'Number of files changed:'.padEnd(30),
        chalk.bold(countChangedFiles.toLocaleString())
      )
      console.log(
        'Sum number of replacements:'.padEnd(30),
        chalk.bold(countReplacements.toLocaleString())
      )

      countByTree(results)
    }

    if (exitCheck) {
      console.log(chalk.yellow(`More than one file would become different. Unsuccessful check.`))
      process.exit(exitCheck)
    } else if (opts.check) {
      console.log(chalk.green('No changes needed or necessary. 🌈'))
    }
  } catch (err) {
    if (debug) {
      throw err
    }
    console.error(chalk.red(err.toString()))
    process.exit(1)
  }
}

function countByTree(results) {
  const files = {}
  const changes = {}
  for (const { file, replacements } of results) {
    const split = path.dirname(file).split(path.sep)
    while (split.length > 1) {
      const parent = split.slice(1).join(path.sep)
      files[parent] = (replacements.length > 0 ? 1 : 0) + (files[parent] || 0)
      changes[parent] = replacements.length + (changes[parent] || 0)
      split.pop()
    }
  }
  const longest = Math.max(...Object.keys(changes).map((x) => x.split(path.sep).at(-1).length))
  const padding = longest + 10
  const col0 = 'TREE'
  const col1 = 'FILES '
  console.log('\n')
  console.log(`${col0.padEnd(padding)}${col1} CHANGES`)
  for (const each of Object.keys(changes).sort()) {
    if (!changes[each]) continue
    const split = each.split(path.sep)
    const last = split.at(-1)
    const indentation = split.length - 1
    const indentationPad = indentation ? `${'   '.repeat(indentation)} ↳ ` : ''
    console.log(
      `${indentationPad}${last.padEnd(padding - indentationPad.length)} ${String(
        files[each]
      ).padEnd(col1.length)} ${changes[each]}`
    )
  }
}
