#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

import { program, Option } from 'commander'
import markdownlint from 'markdownlint'
import { applyFixes } from 'markdownlint-rule-helpers'
import boxen from 'boxen'
import ora from 'ora'

import walkFiles from '../../../script/helpers/walk-files.js'
import { allConfig, allRules, customRules } from '../lib/helpers/get-rules.js'
import { customConfig, githubDocsFrontmatterConfig } from '../style/github-docs.js'
import { defaultConfig } from '../lib/default-markdownlint-options.js'
import { prettyPrintResults } from './pretty-print-results.js'

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
  .option('--fix', 'Automatically fix errors that can be fixed.')
  .addOption(
    new Option(
      '--summary-by-rule',
      'Summarize the number of warnings remaining in the content for each rule.',
    ).conflicts(['error', 'paths', 'rules', 'fix']),
  )
  .option('--verbose', 'Output additional error detail.')
  .option('--precommit', 'Informs this script that it was executed by a pre-commit hook.')
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

const {
  fix,
  paths,
  errorsOnly,
  rules,
  summaryByRule,
  outputFile,
  verbose,
  precommit: isPrecommit,
} = program.opts()

const ALL_CONTENT_DIR = ['content', 'data']

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
    files: files.content,
    config: config.content,
    customRules: configuredRules.content,
  })
  // Run Markdownlint for data directory
  const resultData = await markdownlint.promises.markdownlint({
    files: files.data,
    config: config.data,
    customRules: configuredRules.data,
  })

  // Run Markdownlint for data directory
  const resultFrontmatter = await markdownlint.promises.markdownlint({
    frontMatter: null,
    files: files.content,
    config: config.frontMatter,
    customRules: configuredRules.frontMatter,
  })
  // There are no collisions when assigning the results to the new object
  // because the keys are filepaths and the individual runs of Markdownlint
  // are in separate directories (content and data).
  const results = Object.assign({}, resultContent, resultData)

  // Merge in the results for frontmatter tests, which could be
  // in a file that already exists as a key in the `results` object.
  Object.entries(resultFrontmatter).forEach(([key, value]) => {
    if (results[key]) results[key].push(...value)
    else results[key] = value
  })

  // Apply markdownlint fixes if available and rewrite the files
  let countFixedFiles = 0
  if (fix) {
    for (const file of [...files.content, ...files.data]) {
      if (!results[file] || !results[file].some((flaw) => flaw.fixInfo)) {
        continue
      }
      const content = fs.readFileSync(file, 'utf8')
      const applied = applyFixes(content, results[file])
      if (content !== applied) {
        countFixedFiles++
        fs.writeFileSync(file, applied, 'utf-8')
      }
    }
  }

  // The results don't yet contain severity information and are
  // in the format received directly from Markdownlint.
  const formattedResults = getFormattedResults(results, isPrecommit)
  // If we applied fixes, it's important that we don't count those that
  // might now be entirely fixed.
  const errorFileCount = getErrorCountByFile(formattedResults, fix)
  const warningFileCount = getWarningCountByFile(formattedResults, fix)

  // Used for a temporary way to allow us to see how many errors currently
  // exist for each rule in the content directory.
  if (summaryByRule && (errorFileCount > 0 || warningFileCount > 0 || countFixedFiles > 0)) {
    reportSummaryByRule(results, config)
  } else if (errorFileCount > 0 || warningFileCount > 0 || countFixedFiles > 0) {
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
      prettyPrintResults(formattedResults, {
        fixed: fix,
      })
    }
  }
  const end = Date.now()
  // Ensure previous console logging is not truncated
  console.log('\n')
  const took = end - start
  spinner.info(
    `🕦 Markdownlint finished in ${(took > 1000 ? took / 1000 : took).toFixed(1)} ${
      took > 1000 ? 's' : 'ms'
    }`,
  )
  if (countFixedFiles > 0) {
    spinner.info(`🛠️  Fixed ${countFixedFiles} ${pluralize(countFixedFiles, 'file')}`)
  }
  if (warningFileCount > 0) {
    spinner.warn(
      `Found ${warningFileCount} ${pluralize(warningFileCount, 'file')} with ${pluralize(
        warningFileCount,
        'warning',
      )}`,
    )
  }
  if (errorFileCount > 0) {
    spinner.fail(
      `Found ${errorFileCount} ${pluralize(errorFileCount, 'file')} with ${pluralize(
        errorFileCount,
        'error',
      )}`,
    )
  }

  if (isPrecommit) {
    if (errorFileCount) {
      console.log('') // Just for some whitespace before the box message
      console.log(
        boxen(
          'GIT COMMIT IS ABORTED. Please fix the errors before committing.\n\n' +
            `This commit contains ${errorFileCount} ${pluralize(
              errorFileCount,
              'file',
            )} with ${pluralize(errorFileCount, 'error')}.\n` +
            'To skip this check, add `--no-verify` to your git commit command.\n\n' +
            'More info about the linter: https://gh.io/ghdocs-linter',
          { title: 'Content linting', titleAlignment: 'center', padding: 1 },
        ),
      )
    }

    const fixableFiles = Object.entries(formattedResults)
      .filter(([_, results]) => results.some((result) => result.fixable))
      .map(([file]) => file)
    if (fixableFiles.length) {
      console.log('') // Just for some whitespace before the next message
      console.log(
        `Content linting found ${fixableFiles.length} ${pluralize(fixableFiles, 'file')} ` +
          'that can be automatically fixed.\nTo apply the fixes run this command and re-add the changed files:\n',
      )
      console.log(`  npm run lint-content -- --fix --paths ${fixableFiles.join(' ')}\n`)
    }
  }

  if (errorFileCount) {
    process.exit(1)
  }
  spinner.succeed('No errors found')
}

function pluralize(things, word, pluralForm = null) {
  const isPlural = Array.isArray(things) ? things.length !== 1 : things !== 1
  if (isPlural) {
    return pluralForm || `${word}s`
  }
  return word
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

  // The path passed to Markdownlint is what is displayed
  // in the error report, so we want to normalize it and
  // and make it relative if it's absolute.
  for (const rawPath of paths) {
    // Normalizes a path like './data/foo/bar.md' to 'data/foo/bar.md'
    const lintPath = path.normalize(rawPath)
    const extension = path.extname(lintPath)
    // We currently only lint Markdown files but will add
    // YAML files soon.
    const isMdFile = extension === '.md'
    const isDirectory = extension === ''
    if (!isMdFile && !isDirectory) continue
    // The path can be relative or absolute. All paths get
    // resolved to the path relative to the current working directory.
    const cwd = path.resolve()
    const relPath = path.isAbsolute(lintPath) ? path.relative(cwd, lintPath) : lintPath
    const isDataDir = relPath.startsWith('data')

    if (isMdFile) {
      // Add each file to the relevant fileList group
      isDataDir ? fileList.data.push(relPath) : fileList.content.push(relPath)
    } else {
      // It's a directory, walk the files in the directory and
      // add them to the relevant fileList group
      isDataDir
        ? fileList.data.push(...walkFiles(relPath, ['.md']))
        : fileList.content.push(...walkFiles(relPath, ['.md']))
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
function getFormattedResults(allResults, isPrecommit) {
  const output = {}
  Object.entries(allResults)
    // Each result key always has an array value, but it may be empty
    .filter(([, results]) => results.length)
    .forEach(([key, results]) => {
      if (verbose) {
        output[key] = [...results]
      } else {
        const formattedResults = results.map((flaw) => formatResult(flaw, isPrecommit))
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
function getWarningCountByFile(results, fixed = false) {
  return getCountBySeverity(results, 'warning', fixed)
}

// Results are formatted with the key being the filepath
// and the value being an array of results for that filepath.
// Each result in the array has a severity of error or warning.
function getErrorCountByFile(results, fixed = false) {
  return getCountBySeverity(results, 'error', fixed)
}
function getCountBySeverity(results, severityLookup, fixed) {
  return Object.values(results).filter((results) =>
    results.some((result) => {
      // If --fix was applied, we don't want to know about files that
      // no longer have errors or warnings.
      return result.severity === severityLookup && (!fixed || !result.fixable)
    }),
  ).length
}

// Removes null values and properties that are not relevant to content
// writers, adds the severity to each result object, and transforms
// some error and fix data into a more readable format.
function formatResult(object, isPrecommit) {
  const formattedResult = {}

  // Add severity to each result object
  const ruleName = object.ruleNames[1] || object.ruleNames[0]
  formattedResult.severity =
    allConfig[ruleName].severity || getSearchReplaceRuleSeverity(ruleName, object, isPrecommit)

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
    content: structuredClone(defaultConfig),
    data: structuredClone(defaultConfig),
    frontMatter: structuredClone(defaultConfig),
  }
  const configuredRules = {
    content: [],
    data: [],
    frontMatter: [],
  }

  for (const [ruleName, ruleConfig] of Object.entries(allConfig)) {
    const customRule = customConfig[ruleName] && getCustomRule(ruleName)
    // search-replace is handled differently than other rules because
    // it has nested metadata and rules.
    if (
      errorsOnly &&
      getRuleSeverity(ruleConfig, isPrecommit) !== 'error' &&
      ruleName !== 'search-replace'
    ) {
      continue
    }

    if (runRules && !runRules.includes(ruleName)) continue

    // There are a subset of rules run on just the frontmatter in files
    if (githubDocsFrontmatterConfig[ruleName]) {
      config.frontMatter[ruleName] = ruleConfig
      if (customRule) configuredRules.frontMatter.push(customRule)
      continue
    }
    // Handle the special case of the search-replace rule
    // which has nested rules each with their own
    // severity and metadata.
    if (ruleName === 'search-replace') {
      const searchReplaceRules = []
      const dataSearchReplaceRules = []

      for (const searchRule of ruleConfig.rules) {
        const searchRuleSeverity = getRuleSeverity(searchRule, isPrecommit)
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

// Return the severity value of a rule but keep in mind it could be
// running as a precommit hook, which means the severity could be
// deliberately different.
function getRuleSeverity(rule, isPrecommit) {
  return isPrecommit ? rule.precommitSeverity || rule.severity : rule.severity
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
function getSearchReplaceRuleSeverity(ruleName, object, isPrecommit) {
  const pluginRuleName = object.errorDetail.split(':')[0].trim()
  const rule = allConfig[ruleName].rules.find((rule) => rule.name === pluginRuleName)
  return isPrecommit ? rule.precommitSeverity || rule.severity : rule.severity
}
