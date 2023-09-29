#!/usr/bin/env node
import { program, Option } from 'commander'
import markdownlint from 'markdownlint'
import { applyFixes } from 'markdownlint-rule-helpers'
import fs from 'fs'
import ora from 'ora'
import { extname } from 'path'
import { execSync } from 'child_process'

import walkFiles from '../../../script/helpers/walk-files.js'
import { allConfig, allRules, customRules } from '../lib/helpers/get-rules.js'
import { customConfig } from '../style/github-docs.js'
import { defaultOptions, defaultConfig } from '../lib/default-markdownlint-options.js'

program
  .description('Run GitHub Docs Markdownlint rules.')
  .option(
    '-p, --paths [paths...]',
    'Specify filepaths to include. Default: changed and staged files',
  )
  .addOption(
    new Option(
      '--errors-only',
      'Only report rules that have the severity of error, not warning.',
    ).conflicts('rules'),
  )
  .addOption(
    new Option(
      '--local-errors-only',
      'Used by the git commit hook. Runs just like --errors-only but uses the local development severity if set for a rule.',
    )
      .implies({ errorsOnly: true })
      .conflicts('rules'),
  )
  .option('--fix', 'Automatically fix errors that can be fixed.')
  .addOption(
    new Option(
      '--summary-by-rule',
      'Summarize the number of warnings remaining in the content for each rule.',
    ).conflicts(['error', 'paths', 'rules', 'fix']),
  )
  .option('--verbose', 'Output additional error detail.')
  .addOption(
    new Option(
      '-r, --rules [rules...]',
      `Specify rules to run. For example, by short name MD001 or long name heading-increment \n${listRules()}\n\n`,
    ).conflicts('error'),
  )
  .addOption(
    new Option('-o, --output-file <filepath>', `Outputs the errors/warnings to the filepath.`),
  )
  .parse(process.argv)

const { fix, paths, errorsOnly, localErrorsOnly, rules, summaryByRule, outputFile, verbose } =
  program.opts()
const ALL_CONTENT_DIR = ['content', 'data']
const LOCAL_ERRORS_ONLY = localErrorsOnly || false

main()

async function main() {
  // If paths has not been specified, lint all files
  const files = getFilesToLint((summaryByRule && ALL_CONTENT_DIR) || paths || getChangedFiles())
  const spinner = ora({ text: 'Running content linter\n\n', spinner: 'simpleDots' })

  if (!files.length) {
    spinner.succeed('No files to lint')
    process.exit(0)
  }

  spinner.start()
  const start = Date.now()

  // Initializes the config to pass to markdownlint based on the input options
  const { config, configuredRules } = getMarkdownLintConfig(errorsOnly, rules, customRules)

  // Run Markdownlint for content directory
  const resultContent = await markdownlint.promises.markdownlint({
    ...defaultOptions,
    files: files.content,
    config: config.content,
    customRules: configuredRules.content,
  })
  // Run Markdownlint for data directory
  const resultData = await markdownlint.promises.markdownlint({
    ...defaultOptions,
    files: files.data,
    config: config.data,
    customRules: configuredRules.data,
  })
  // There are no collisions when assigning the results to the new object
  // because the keys are filepaths and the individual runs of Markdownlint
  // are in separate directories (content and data).
  const results = Object.assign({}, resultContent, resultData)

  // Apply markdownlint fixes if available and rewrite the files
  if (fix) {
    for (const file of [...files.content, ...files.data]) {
      const content = fs.readFileSync(file, 'utf8')
      const applied = applyFixes(content, results[file])
      fs.writeFileSync(file, applied, 'utf-8')
    }
  }

  // The results don't yet contain severity information and are
  // in the format received directly from Markdownlint.
  const formattedResults = getFormattedResults(results)
  const errorFileCount = getErrorCountByFile(formattedResults)
  const warningFileCount = getWarningCountByFile(formattedResults)

  // Used for a temporary way to allow us to see how many errors currently
  // exist for each rule in the content directory.
  if (summaryByRule && (errorFileCount > 0 || warningFileCount > 0)) {
    reportSummaryByRule(results, config)
  } else if (errorFileCount > 0 || warningFileCount > 0) {
    if (outputFile) {
      fs.writeFileSync(
        `${outputFile}`,
        JSON.stringify(formattedResults, undefined, 2),
        function (err) {
          if (err) throw err
        },
      )
      console.log(`Output written to ${outputFile}`)
    } else {
      console.log(formattedResults)
    }
  }
  const end = Date.now()
  // Ensure previous console logging is not truncated
  console.log('\n\n')
  spinner.info(`🕦 Markdownlint finished in ${(end - start) / 1000} s`)
  if (warningFileCount > 0) {
    spinner.warn(`Found ${warningFileCount} file(s) with warnings(s)`)
  }
  if (errorFileCount > 0) {
    spinner.fail(`Found ${errorFileCount} file(s) with error(s)`)
  }
  if (errorFileCount || warningFileCount) {
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
    if (config.content[rule].severity === 'error') continue
    ruleCount[rule] = 0
  }
  // the default property is not acutally a rule
  delete ruleCount.default

  Object.keys(results).forEach((key) => {
    if (results[key].length > 0) {
      for (const flaw of results[key]) {
        const ruleName = flaw.ruleNames[1]
        if (!Object.hasOwn(ruleCount, ruleName)) continue
        const count = ruleCount[ruleName]
        ruleCount[ruleName] = count + 1
      }
    }
  })

  console.log(JSON.stringify(ruleCount, null, 2))
}

/*
  Filter out the files with one or more results and format each
  result. Results are sorted by severity per file, with errors
  listed first then warnings.
*/
function getFormattedResults(allResults) {
  const output = {}
  Object.entries(allResults)
    // Each result key always has an array value, but it may be empty
    .filter(([, results]) => results.length)
    .forEach(([key, results]) => {
      if (verbose) {
        output[key] = [...results]
      } else {
        const formattedResults = results.map((flaw) => formatResult(flaw))
        const errors = formattedResults.filter((result) => result.severity === 'error')
        const warnings = formattedResults.filter((result) => result.severity === 'warning')
        const sortedResult = [...errors, ...warnings]
        output[key] = [...sortedResult]
      }
    })
  return output
}

// Results are formatted with the key being the filepath
// and the value being an array of errors for that filepath.
// Each result has a rule name, which when looked up in `allConfig`
// will give us its severity and we filter those that are 'warning'.
function getWarningCountByFile(results) {
  return getCountBySeverity(results, 'warning')
}

// Results are formatted with the key being the filepath
// and the value being an array of results for that filepath.
// Each result in the array has a severity of error or warning.
function getErrorCountByFile(results) {
  return getCountBySeverity(results, 'error')
}
function getCountBySeverity(results, severityLookup) {
  return Object.values(results).filter((results) =>
    results.some((result) => result.severity === severityLookup),
  ).length
}

// Removes null values and properties that are not relevant to content
// writers, adds the severity to each result object, and transforms
// some error and fix data into a more readable format.
function formatResult(object) {
  const formattedResult = {}

  // Add severity to each result object
  const ruleName = object.ruleNames[1] || object.ruleNames[0]
  formattedResult.severity =
    allConfig[ruleName].severity || getSearchReplaceRuleSeverity(ruleName, object)

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

/* 
  Based on input options, configure the Markdownlint rules to run
  There are a subset of rules that can't be run on data files, since
  those Markdown files are partials included in full Markdown files.
  Rules that can't be run on partials have the property
  `partial-markdown-files` set to false.
*/
function getMarkdownLintConfig(errorsOnly, runRules) {
  const config = {
    content: Object.assign({}, defaultConfig),
    data: Object.assign({}, defaultConfig),
  }
  const configuredRules = {
    content: [],
    data: [],
  }

  for (const [ruleName, ruleConfig] of Object.entries(allConfig)) {
    const customRule = customConfig[ruleName] && getCustomRule(ruleName)
    // search-replace is handled differently than other rules because
    // it has nested metadata and rules.
    if (errorsOnly && getRuleSeverity(ruleConfig) !== 'error' && ruleName !== 'search-replace')
      continue

    if (runRules && !runRules.includes(ruleName)) continue

    // Handle the special case of the search-replace rule
    // which has nested rules each with their own
    // severity and metadata.
    if (ruleName === 'search-replace') {
      const searchReplaceRules = []
      const dataSearchReplaceRules = []

      for (const searchRule of ruleConfig.rules) {
        const searchRuleSeverity = getRuleSeverity(searchRule)
        if (errorsOnly && searchRuleSeverity !== 'error') continue
        searchReplaceRules.push(searchRule)
        if (searchRule['partial-markdown-files']) {
          dataSearchReplaceRules.push(searchRule)
        }
      }

      if (searchReplaceRules.length > 0) {
        config.content[ruleName] = { ...ruleConfig, rules: searchReplaceRules }
        if (customRule) configuredRules.content.push(customRule)
      }
      if (dataSearchReplaceRules.length > 0) {
        config.data[ruleName] = { ...ruleConfig, rules: dataSearchReplaceRules }
        if (customRule) configuredRules.data.push(customRule)
      }
      continue
    }

    config.content[ruleName] = ruleConfig
    if (customRule) configuredRules.content.push(customRule)
    if (ruleConfig['partial-markdown-files'] === true) {
      config.data[ruleName] = ruleConfig
      if (customRule) configuredRules.data.push(customRule)
    }
  }

  return { config, configuredRules }
}

/*
  The severity of the rule can be different when running locally vs in CI
  If the --local-errors-only option is set, use the severity-local property
  to determine severity, if it is defined.
*/
function getRuleSeverity(rule) {
  const defaultSev = rule.severity
  const localSev = rule['severity-local'] || defaultSev
  return LOCAL_ERRORS_ONLY ? localSev : defaultSev
}

// Gets a custom rule function from the name of the rule
// in the configuration file
function getCustomRule(ruleName) {
  const rule = customRules.find((rule) => rule.names.includes(ruleName))
  if (!rule)
    throw new Error(
      `A content-lint rule ('${ruleName}') is configured in the markdownlint config file but does not have a corresponding rule function.`,
    )
  return rule
}

/* 
  The severity of the search-replace custom rule is embedded in 
  each individual search rule. This function returns the severity
  of the individual search rule. The name we define for each search
  rule shows up the the errorDetail property of the error object.
  The error object returned from Markdownlint has the following structure:

  {
    lineNumber: 266,
    ruleNames: [ 'search-replace' ],
    ruleDescription: 'Custom rule',
    ruleInformation: 'https://github.com/OnkarRuikar/markdownlint-rule-search-replace',
    errorDetail: 'docs-domain: Catch occurrences of docs.gitub.com domain.',
    errorContext: "column: 21 text:'docs.github.com'",
    errorRange: [ 21, 15 ],
    fixInfo: null
  }
*/
function getSearchReplaceRuleSeverity(ruleName, object) {
  const pluginRuleName = object.errorDetail.split(':')[0].trim()
  return allConfig[ruleName].rules.find((rule) => rule.name === pluginRuleName).severity
}
