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
import yaml from 'js-yaml'

import { updateInternalLinks } from '#src/links/lib/update-internal-links.js'
import frontmatter from '../../../lib/read-frontmatter.js'
import walkFiles from '../../../script/helpers/walk-files.js'

program
  .description('Update internal links in content files')
  .option('--silent', 'The opposite of verbose')
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
          }),
        )
      } else if (!excludeFilePaths.has(file)) {
        actualFiles.push(file)
      }
    }
    if (!actualFiles.length) {
      throw new Error(`No files found in ${files}`)
    }

    const verbose = !opts.silent

    if (verbose) {
      console.log(chalk.bold(`Updating internal links in ${actualFiles.length} found files...`))
    }

    // The updateInternalLinks doesn't use "negatives" for certain options
    const options = {
      setAutotitle: !opts.dontSetAutotitle,
      fixHref: !opts.dontFixHref,
      verbose,
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
    for (const {
      file,
      rawContent,
      content,
      newContent,
      replacements,
      data,
      newData,
      warnings,
    } of results) {
      const differentContent = content !== newContent
      const differentData = !equalObject(data, newData)
      if (differentContent || differentData) {
        if (verbose || opts.check) {
          if (opts.check) {
            exitCheck++
          }
          if (verbose) {
            console.log(
              opts.dryRun ? 'Would change...' : 'Will change...',
              chalk.bold(file),
              differentContent
                ? chalk.dim(`${replacements.length} change${replacements.length !== 1 ? 's' : ''}`)
                : '',
              differentData ? chalk.dim('different data') : '',
            )
            for (const { asMarkdown, newAsMarkdown, line, column } of replacements) {
              console.log('  ', chalk.red(asMarkdown))
              console.log('  ', chalk.green(newAsMarkdown))
              console.log('  ', chalk.dim(`line ${line} column ${column}`))
              console.log('')
            }
            printObjectDifference(data, newData, rawContent)
          }
        }
        if (!opts.dryRun) {
          if (file.endsWith('.yml')) {
            fs.writeFileSync(file, yaml.dump(newData), 'utf-8')
          } else {
            // Remember the `content` and `newContent` is the "meat" of the
            // Markdown page. To save it you need the frontmatter data too.
            fs.writeFileSync(
              file,
              frontmatter.stringify(newContent, newData, { lineWidth: 10000 }),
              'utf-8',
            )
          }
        }
      }
      if (warnings.length) {
        console.log('Warnings...', chalk.bold(file))
        for (const { warning, asMarkdown, line, column } of warnings) {
          console.log('  ', chalk.yellow(asMarkdown))
          console.log('  ', chalk.dim(`line ${line} column ${column}, ${warning}`))
          console.log('')
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
        chalk.bold(countChangedFiles.toLocaleString()),
      )
      console.log(
        'Sum number of replacements:'.padEnd(30),
        chalk.bold(countReplacements.toLocaleString()),
      )

      const countWarnings = results.reduce((prev, next) => prev + next.warnings.length, 0)
      const countWarningFiles = new Set(results.filter((result) => result.warnings.length > 0)).size
      console.log(
        'Number of files with warnings:'.padEnd(30),
        chalk.bold(countWarningFiles.toLocaleString()),
      )
      console.log('Sum number of warnings:'.padEnd(30), chalk.bold(countWarnings.toLocaleString()))

      if (countWarnings > 0) {
        console.log(chalk.yellow('\nNote! Warnings can currently not be automatically fixed.'))
        console.log('Manually edit heeded warnings and run the script again to update.')
      }

      if (countChangedFiles > 0) {
        countByTree(results)
      }
    }

    if (exitCheck) {
      if (verbose) {
        console.log(chalk.yellow(`More than one file would become different. Unsuccessful check.`))
      }
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

function printObjectDifference(objFrom, objTo, rawContent, parentKey = '') {
  // Assume both object are of the same shape, but if a key's value is
  // an array, and it's different, print that difference.
  for (const [key, value] of Object.entries(objFrom)) {
    const combinedKey = `${parentKey}.${key}`
    if (Array.isArray(value) && !equalArray(value, objTo[key])) {
      const printedKeys = new Set()
      value.forEach((entry, i) => {
        // If it was an array of objects, we need to go deeper!
        if (isObject(entry)) {
          printObjectDifference(entry, objTo[key][i], rawContent, combinedKey)
        } else {
          if (entry !== objTo[key][i]) {
            if (!printedKeys.has(combinedKey)) {
              console.log(`In frontmatter key: ${chalk.bold(combinedKey)}`)
              printedKeys.add(combinedKey)
            }
            console.log(chalk.red(`- ${entry}`))
            console.log(chalk.green(`+ ${objTo[key][i]}`))
            const needle = new RegExp(`- ${entry}\\b`)
            const index = rawContent.split(/\n/g).findIndex((line) => needle.test(line))
            console.log('  ', chalk.dim(`line ${(index && index + 1) || 'unknown'}`))
            console.log('')
          }
        }
      })
    } else if (typeof value === 'object' && value !== null) {
      printObjectDifference(value, objTo[key], rawContent, combinedKey)
    }
  }
}

// This assumes them to be the same shape with possibly different node values
function equalObject(obj1, obj2) {
  if (!equalSet(new Set(Object.keys(obj1)), new Set(Object.keys(obj2)))) {
    return false
  }
  for (const [key, value] of Object.entries(obj1)) {
    if (Array.isArray(value)) {
      // Can't easily compare two arrays because the entries might be objects.
      if (value.length !== obj2[key].length) return false
      let i = 0
      for (const each of value) {
        if (isObject(each)) {
          if (!equalObject(each, obj2[key][i])) {
            return false
          }
        } else {
          if (each !== obj2[key][i]) {
            return false
          }
        }
        i++
      }
    } else if (isObject(value)) {
      if (!equalObject(value, obj2[key])) {
        return false
      }
    } else if (value !== obj2[key]) {
      return false
    }
  }
  return true
}

function isObject(thing) {
  return typeof thing === 'object' && thing !== null && !Array.isArray(thing)
}

function equalSet(set1, set2) {
  return set1.size === set2.size && [...set1].every((x) => set2.has(x))
}

function equalArray(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((item, i) => item === arr2[i])
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
        files[each],
      ).padEnd(col1.length)} ${changes[each]}`,
    )
  }
}
