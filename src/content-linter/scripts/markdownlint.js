#!/usr/bin/env node
import { program, Option } from 'commander'
import markdownlint from 'markdownlint'
import { applyFixes } from 'markdownlint-rule-helpers'
import { readFile, writeFile } from 'fs/promises'
import ora from 'ora'
import { extname } from 'path'
import { execSync } from 'child_process'

import walkFiles from '../../../script/helpers/walk-files.js'
import { allConfig, allRules, customRules } from '../lib/helpers/get-rules.js'

program
  .description('Run GitHub Docs Markdownlint rules.')
  .option(
    '-p, --paths [paths...]',
    'Specify filepaths to include. Default: changed and staged files',
  )
  .addOption(
    new Option(
      '-e, --errors',
      'Only report rules that have the severity of error, not warning.',
    ).conflicts('rules'),
  )
  .option('--fix', 'Automatically fix errors that can be fixed.')
  .addOption(
    new Option(
      '--summary-by-rule',
      'Summarize the number of errors for each rule, leaving out error details.',
    ).conflicts(['error', 'paths', 'rules', 'fix']),
  )
  .option('--verbose', 'Output additional error detail.')
  .addOption(
    new Option(
      '-r, --rules [rules...]',
      `Specify rules to run. For example, by short name MD001 or long name heading-increment \n${listRules()}\n\n`,
    ).conflicts('error'),
  )
  .parse(process.argv)

const { fix, paths, errors, rules, summaryByRule, verbose } = program.opts()
const ALL_CONTENT_DIR = ['content', 'data']

main()

async function main() {
  // If paths has not been specified, lint all files
  const files = getFilesToLint((summaryByRule && ALL_CONTENT_DIR) || paths || getChangedFiles())
  const spinner = ora({ text: 'Running content linter', spinner: 'simpleDots' })

  if (!files.length) {
    spinner.succeed('No files to lint')
    process.exit(0)
  }

  spinner.start()
  const start = Date.now()

  // Initializes the config to pass to markdownlint based on the input options
  const config = getMarkdownLintConfig(errors, rules)
  // Run Markdownlint on content and data directories individually
  // and get all results
  const results = await getMarkdownlintResults(config, files)

  // Apply markdownlint fixes if available and rewrite the files
  if (fix) {
    for (const file of [...files.content, ...files.data]) {
      const content = await readFile(file, 'utf8')
      const applied = applyFixes(content, results[file])
      await writeFile(file, applied)
    }
  }

  const errorFileCount = getErrorCountByFile(results)
  // Used for a temparary way to allow us to see how many errors currently
  // exist for each rule in the content directory.
  if (summaryByRule && errorFileCount > 0) {
    reportSummaryByRule(results, config)
  } else if (errorFileCount > 0) {
    reportResults(results)
  }

  const end = Date.now()
  console.log(`\n🕦 Markdownlint finished in ${(end - start) / 1000} s`)

  if (errorFileCount > 0) {
    spinner.fail(`Found ${errorFileCount} file(s) with error(s)`)
    process.exit(1)
  }
  spinner.succeed('No errors found')
}

// Parse filepaths and directories, only allowing
// Markdown file types for now. Snippets of Markdown
// in .yml files may be added later.
// Certain rules cannot run on data files (e.g., heading
// linters) so we need to separate the list of data files
// from all other files to run through markdownlint
// individually
function getFilesToLint(paths) {
  const fileList = {
    length: 0,
    content: [],
    data: [],
  }

  for (const path of paths) {
    const extension = extname(path)
    const isMdFile = extension === '.md'
    const isDirectory = extension === ''
    if (!isMdFile && !isDirectory) continue

    if (isMdFile) {
      // Add each file to the relevant fileList group
      path.startsWith('data') ? fileList.data.push(path) : fileList.content.push(path)
    } else {
      // It's a directory, walk the files in the directory and
      // add them to the relevant fileList group
      path.startsWith('data')
        ? fileList.data.push(...walkFiles(path, ['.md'], { includeBasePath: true }))
        : fileList.content.push(...walkFiles(path, ['.md'], { includeBasePath: true }))
    }
  }
  // Add a total fileList length property
  fileList.length = fileList.content.length + fileList.data.length

  return fileList
}

// This is a function used during development to
// see how many errors we have per rule. This helps
// to identify rules that can be upgraded from
// warning severity to error.
function reportSummaryByRule(results, config) {
  const ruleCount = {}

  // populate the list of rules with 0 occurrences
  for (const rule of Object.keys(config.content)) {
    ruleCount[rule] = 0
  }
  // the default property is not acutally a rule
  delete ruleCount.default

  Object.keys(results).forEach((key) => {
    if (results[key].length > 0) {
      for (const flaw of results[key]) {
        const ruleName = flaw.ruleNames[1]
        const count = ruleCount[ruleName]
        ruleCount[ruleName] = count + 1
      }
    }
  })

  console.log(JSON.stringify(ruleCount, null, 2))
}

function reportResults(allResults) {
  console.log('\n\nMarkdownlint results:\n')
  Object.entries(allResults)
    // Each result key always has an array value, but it may be empty
    .filter(([, results]) => results.length)
    .forEach(([key, results]) => {
      console.log(key)
      if (!verbose) {
        const formattedResults = results.map((flaw) => formatResult(flaw))
        const errors = formattedResults.filter((result) => result.severity === 'error')
        const warnings = formattedResults.filter((result) => result.severity === 'warning')
        const sortedResult = [...errors, ...warnings]
        console.log(sortedResult)
      } else {
        console.log(results)
      }
    })
}

// Results are formatted with the key being the filepath
// and the value being an array of errors for that filepath.
// The value may be an array of length 0. This filters all
// values for length greater than 0 and returns the length of
// the filtered array, which would be equivalent to the number of
// filepaths with errors
function getErrorCountByFile(results) {
  return Object.values(results).filter((value) => value.length).length
}

// Removes null values and properties that are not relevant to content
// writers and transforms some error data into a more readable format.
function formatResult(object) {
  const formattedResult = {}

  // Add severity of error or warning
  const ruleName = object.ruleNames[1]
  formattedResult.severity = allConfig[ruleName].severity

  return Object.entries(object).reduce((acc, [key, value]) => {
    if (key === 'fixInfo') {
      acc.fixable = !!value
      delete acc.fixInfo
      return acc
    }
    if (!value) return acc
    if (key === 'errorRange') {
      acc.columnNumber = value[0]
      delete acc.range
      return acc
    }
    acc[key] = value
    return acc
  }, formattedResult)
}

// Get a list of changed and staged files in the local git repo
function getChangedFiles() {
  const changedFiles = execSync(`git diff --name-only`)
    .toString()
    .trim()
    .split('\n')
    .filter(Boolean)
  const stagedFiles = execSync(`git diff --name-only --staged`)
    .toString()
    .trim()
    .split('\n')
    .filter(Boolean)
  return [...changedFiles, ...stagedFiles]
}

// Summarizes the list of rules we have available to run with their
// short name, long name, and description.
function listRules() {
  let ruleList = ''
  for (const rule of allRules) {
    if (!allConfig[rule.names[1]]) continue
    ruleList += `\n[${rule.names[0]}, ${rule.names[1]}]: ${rule.description}`
  }
  return ruleList
}

// Runs Markdownlint for each configuration: content and data
// and returns the combined results.
async function getMarkdownlintResults(config, files) {
  const options = {
    content: {
      files: files.content,
      config: config.content,
      customRules,
    },
    data: {
      files: files.data,
      config: config.data,
      customRules,
    },
  }
  const resultContent = await markdownlint.promises.markdownlint(options.content)
  const resultData = await markdownlint.promises.markdownlint(options.data)
  // There are no collisions when assigning the results to the new object
  // because the keys are filepaths and the individual runs of Markdownlint
  // are in separate directories (content and data).
  return Object.assign({}, resultContent, resultData)
}

// Based on input options, configure the Markdownlint rules to run
// There are a subset of rules that can't be run on data files, since
// those Markdown files are partials included in full Markdown files.
// Rules that can't be run on partials have the property
// `partial-markdown-files` set to false.
function getMarkdownLintConfig(errors, rules) {
  const config = {
    content: {
      default: false, // By default, don't turn on all markdownlint rules
    },
    data: {
      default: false, // By default, don't turn on all markdownlint rules
    },
  }

  // Only configure the rules that have the severity of error
  if (errors) {
    const errorConfig = Object.keys(allConfig).reduce((acc, key) => {
      if (allConfig[key].severity === 'error') acc[key] = allConfig[key]
      return acc
    }, config.content)
    Object.assign(config.content, errorConfig)
  } else if (rules) {
    // Only configure rules passed in rules parameter
    for (const rule of rules) {
      config.content[rule] = allConfig[rule]
    }
  } else {
    // Configure all errors and warning rules
    Object.assign(config.content, allConfig)
  }

  // Filter out config settings that don't apply to data files
  const dataConfig = Object.keys(config.content).reduce((acc, key) => {
    if (config.content[key]['partial-markdown-files'] === true) {
      acc[key] = config.content[key]
    }
    return acc
  }, config.data)
  Object.assign(config.data, dataConfig)

  return config
}
