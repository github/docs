#!/usr/bin/env node
import { program, Option } from 'commander'
import markdownlint from 'markdownlint'
import { applyFixes } from 'markdownlint-rule-helpers'
import { readFile, writeFile } from 'fs/promises'
import ora from 'ora'
import { extname } from 'path'
import { execSync } from 'child_process'

import walkFiles from '../../../script/helpers/walk-files.js'
import { baseConfig } from '../style/base.js'
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

  // Initializes the config to pass to markdownlint based on the script options
  const config = initializeConfig(errors, rules)
  const options = { files, config, customRules }
  const result = await markdownlint.promises.markdownlint(options)

  // Apply markdownlint fixes if available and rewrite the files
  if (fix) {
    for (const file of files) {
      const content = await readFile(file, 'utf8')
      const applied = applyFixes(content, result[file])
      await writeFile(file, applied)
    }
  }

  // Used for a temparary way to allow us to see how many errors currently
  // exist for each rule in the content directory.
  if (summaryByRule) {
    reportSummaryByRule(result, config)
  } else {
    reportResults(result)
  }

  const end = Date.now()
  console.log(`🕦 Markdownlint finished in ${(end - start) / 1000} s`)

  const errorFileCount = getErrorCountByFile(result)
  if (errorFileCount > 0) {
    spinner.fail(`Found ${errorFileCount} file(s) with error(s)`)
    process.exit(1)
  }
  spinner.succeed('No errors found')
}

function getFilesToLint(paths) {
  const fileList = []
  const lintableFilepaths = getLintableFilepaths(paths)
  for (const path of lintableFilepaths) {
    const isFile = extname(path) !== ''

    isFile
      ? fileList.push(path)
      : fileList.push(...walkFiles(path, ['.md'], { includeBasePath: true }))
  }
  return fileList
}

function reportSummaryByRule(result, config) {
  const ruleCount = {}

  // populate the list of rules with 0 occurrences
  for (const rule of Object.keys(config)) {
    ruleCount[rule] = 0
  }
  // the default property is not acutally a rule
  delete ruleCount.default

  Object.keys(result).forEach((key) => {
    if (result[key].length > 0) {
      for (const flaw of result[key]) {
        const ruleName = flaw.ruleNames[1]
        const count = ruleCount[ruleName]
        ruleCount[ruleName] = count + 1
      }
    }
  })

  console.log(JSON.stringify(ruleCount, null, 2))
}

function reportResults(results) {
  Object.entries(results)
    // each result key always has an array value, but it may be empty
    .filter(([, result]) => result.length)
    .forEach(([key, result]) => {
      console.log(key)
      if (!verbose) {
        result.forEach((flaw) => {
          const simplifiedResult = formatResult(flaw)
          console.log(simplifiedResult)
        })
      } else {
        console.log(result)
      }
    })
}

function getErrorCountByFile(result) {
  return Object.values(result).filter((value) => value.length).length
}

function formatResult(object) {
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
  }, {})
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

function getLintableFilepaths(paths) {
  return paths.filter((path) => {
    const extension = extname(path)
    return extension ? extension === '.md' : true
  })
}

function initializeConfig(errors, rules) {
  const config = {}

  if (errors) {
    // Only configure the rules that have the severity of error
    const errorConfig = Object.keys(baseConfig).reduce(
      (acc, key) => {
        if (allConfig[key].severity === 'error') acc[key] = allConfig[key]
        return acc
      },
      { default: false },
    )
    Object.assign(config, errorConfig)
  } else if (rules) {
    config.default = false
    for (const rule of rules) {
      config[rule] = allConfig[rule]
    }
  } else {
    Object.assign(config, allConfig)
  }

  return config
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
