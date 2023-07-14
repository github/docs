#!/usr/bin/env node
import { program, Option } from 'commander'
import markdownlint from 'markdownlint'
import { applyFixes } from 'markdownlint-rule-helpers'
import { readFile, writeFile } from 'fs/promises'

import walkFiles from '../../../script/helpers/walk-files.js'
import { gitHubDocsMarkdownlint } from '../lib/linting-rules/index.js'
import { baseConfig } from '../style/base.js'
import { githubDocsConfig } from '../style/github-docs.js'

program
  .description('Run GitHub Docs Markdownlint rules.')
  .addOption(
    new Option('-p, --paths [paths...]', 'Specify filepaths to include.').conflicts('files'),
  )
  .addOption(new Option('-f, --files [files...]', 'A list of files to lint.').conflicts('paths'))
  .addOption(
    new Option('-e, --error', 'Only report rules that have the severity of error.').conflicts(
      'rules',
    ),
  )
  .addOption(
    new Option(
      '-r, --rules [rules...]',
      'Specify rules to run. For example code-fence-line-length.',
    ).conflicts('error'),
  )
  .option('--fix', 'Fix linting errors.')
  .option('--summary-by-rule', 'Summarize the number of errors for each rule.')
  .option('--verbose', 'Output full format for all errors.')
  .parse(process.argv)

const { files, fix, paths, error, rules, summaryByRule, verbose } = program.opts()
const DEFAULT_LINT_DIRS = ['content', 'data']

main()

async function main() {
  const start = Date.now()

  const config = {}
  const allConfig = { ...baseConfig, ...githubDocsConfig }
  if (error) {
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

  // If paths or files have not been specified, lint all files
  const filesToLint = files || getFilesToLint(paths || DEFAULT_LINT_DIRS)

  const options = {
    files: filesToLint,
    config,
    customRules: gitHubDocsMarkdownlint.rules,
  }

  const result = await markdownlint.promises.markdownlint(options)

  if (fix) {
    for (const file of filesToLint) {
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
  console.log(`markdownlint finished in ${(end - start) / 1000} s`)

  const errorFileCount = getErrorCountByFile(result)
  if (errorFileCount > 0) {
    console.log(`Found ${errorFileCount} file(s) with error(s).`)
    process.exit(1)
  }
}

function getFilesToLint(paths) {
  const fileList = []
  for (const path of paths) {
    fileList.push(...walkFiles(path, ['.md'], { includeBasePath: true }))
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
