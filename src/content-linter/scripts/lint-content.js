#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

import { program, Option } from 'commander'
import markdownlint from 'markdownlint'
import { applyFixes } from 'markdownlint-rule-helpers'
import boxen from 'boxen'
import ora from 'ora'

import walkFiles from '#src/workflows/walk-files.js'
import { allConfig, allRules, customRules } from '../lib/helpers/get-rules.js'
import { customConfig, githubDocsFrontmatterConfig } from '../style/github-docs.js'
import { defaultConfig } from '../lib/default-markdownlint-options.js'
import { prettyPrintResults } from './pretty-print-results.js'
import { getLintableYml } from '#src/content-linter/lib/helpers/get-lintable-yml.js'
import { printAnnotationResults } from '../lib/helpers/print-annotations.js'
import languages from '#src/languages/lib/languages.js'

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
  .option('--print-annotations', 'Print annotations for GitHub Actions check runs.', false)
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
  printAnnotations,
} = program.opts()

const ALL_CONTENT_DIR = ['content', 'data']

main()

async function main() {
  // If paths has not been specified, lint all files
  const files = getFilesToLint((summaryByRule && ALL_CONTENT_DIR) || paths || getChangedFiles())

  if (new Set(files.data).size !== files.data.length) throw new Error('Duplicate data files')
  if (new Set(files.content).size !== files.content.length)
    throw new Error('Duplicate content files')
  if (new Set(files.yml).size !== files.yml.length) throw new Error('Duplicate yml files')

  if (!files.length) {
    console.log('No files to lint')
    return
  }

  const spinner = ora({ text: 'Running content linter\n\n', spinner: 'simpleDots' })
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

  // Run Markdownlint for content directory (frontmatter only)
  const resultFrontmatter = await markdownlint.promises.markdownlint({
    frontMatter: null,
    files: files.content,
    config: config.frontMatter,
    customRules: configuredRules.frontMatter,
  })

  // Run Markdownlint on "lintable" Markdown strings in a YML file
  const resultYml = {}
  for (const ymlFile of files.yml) {
    const lintableYml = await getLintableYml(ymlFile)
    if (!lintableYml) continue

    const resultYmlFile = await markdownlint.promises.markdownlint({
      strings: lintableYml,
      config: config.yml,
      customRules: configuredRules.yml,
    })

    Object.entries(resultYmlFile).forEach(([key, value]) => {
      if (value.length) {
        const errors = value.map((error) => {
          // Autofixing would require us to write the changes back to the YML
          // file which Markdownlint doesn't support. So we don't support
          // autofixing for YML files at this time.
          if (error.fixInfo) delete error.fixInfo
          error.isYamlFile = true
          return error
        })
        resultYml[key] = errors
      }
    })
  }

  // There are no collisions when assigning the results to the new object
  // because the keys are filepaths and the individual runs of Markdownlint
  // are in separate directories (content and data).
  const results = Object.assign({}, resultContent, resultData, resultYml)

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

  if (printAnnotations) {
    printAnnotationResults(formattedResults, {
      skippableRules: [
        // As of Feb 2024, this rule is quite noisy. It's present in
        // many files and is not always a problem. And besides, when it
        // does warn, it's usually a very long one.
        'code-fence-line-length', // a.k.a. GHD030
      ],
      skippableFlawProperties: [
        // As of Feb 2024, we don't support reporting flaws for lines
        // and columns numbers of YAML files. YAML files consist of one
        // or more Markdown strings that can themselves constitute an
        // entire "file."
        'isYamlFile',
      ],
    })
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
    if (printAnnotations) {
      console.warn('When printing annotations, the exit code is always 0')
      process.exit(0)
    } else {
      process.exit(1)
    }
  } else {
    spinner.succeed('No errors found')
  }
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
// in .yml files that are defined as `lintable` in
// their associated JSON schema are also linted.
// Certain rules cannot run on data files or yml
// (e.g., heading linters) so we need to separate the
// list of data files from all other files to run
// through markdownlint individually
function getFilesToLint(paths) {
  const fileList = {
    length: 0,
    content: [],
    data: [],
    yml: [],
  }

  const root = path.resolve(languages.en.dir)
  const contentDir = path.join(root, 'content')
  const dataDir = path.join(root, 'data')
  // The path passed to Markdownlint is what is displayed
  // in the error report, so we want to normalize it and
  // and make it relative if it's absolute.
  for (const rawPath of paths) {
    const absPath = path.resolve(rawPath)
    if (fs.statSync(rawPath).isDirectory()) {
      if (isInDir(absPath, contentDir)) {
        fileList.content.push(...walkFiles(absPath, ['.md']))
      } else if (isInDir(absPath, dataDir)) {
        fileList.data.push(...walkFiles(absPath, ['.md']))
        fileList.yml.push(...walkFiles(absPath, ['.yml']))
      }
    } else {
      if (isInDir(absPath, contentDir)) {
        fileList.content.push(absPath)
      } else if (isInDir(absPath, dataDir)) {
        if (absPath.endsWith('.yml')) {
          fileList.yml.push(absPath)
        } else if (absPath.endsWith('.md')) {
          fileList.data.push(absPath)
        }
      }
      // If it's a file but it's not part of the content or the data
      // directory, it's probably file passed in by computing changed files
      // from the git diff.
    }
  }

  const seen = new Set()

  function cleanPaths(filePaths) {
    const clean = []
    for (const filePath of filePaths) {
      if (
        path.basename(filePath) === 'README.md' ||
        (!filePath.endsWith('.md') && !filePath.endsWith('.yml'))
      )
        continue
      const relPath = path.relative(root, filePath)
      if (seen.has(relPath)) continue
      seen.add(relPath)
      clean.push(relPath)
    }
    return clean
  }

  fileList.content = cleanPaths(fileList.content)
  fileList.data = cleanPaths(fileList.data)
  fileList.yml = cleanPaths(fileList.yml)

  // Add a total fileList length property
  fileList.length = fileList.content.length + fileList.data.length + fileList.yml.length

  return fileList
}

/**
 * Return true if a directory is or is a sub-directory of a parent.
 * For example:
 *
 *   isInDir('/foo/bar', '/foo') => true
 *   isInDir('/foo/some-sub-directory', '/foo') => true
 *   isInDir('/foo/some-file.txt', '/foo') => true
 *   isInDir('/foo', '/foo') => true
 *   isInDir('/foo/barring', '/foo/bar') => false
 */
function isInDir(child, parent) {
  // The simple reason why you can't use `parent.startsWith(child)`
  // is because the parent might be `/path/to/data` and the child
  // might be `/path/to/data-files`.
  const parentSplit = parent.split(path.sep)
  const childSplit = child.split(path.sep)
  return parentSplit.every((dir, i) => dir === childSplit[i])
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
  // the default property is not actually a rule
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
  const changedFiles = execSync(`git diff --diff-filter=d --name-only`)
    .toString()
    .trim()
    .split('\n')
    .filter(Boolean)
  const stagedFiles = execSync(`git diff --diff-filter=d --name-only --staged`)
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
    yml: structuredClone(defaultConfig),
  }
  const configuredRules = {
    content: [],
    data: [],
    frontMatter: [],
    yml: [],
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
      const ymlSearchReplaceRules = []

      for (const searchRule of ruleConfig.rules) {
        const searchRuleSeverity = getRuleSeverity(searchRule, isPrecommit)
        if (errorsOnly && searchRuleSeverity !== 'error') continue
        searchReplaceRules.push(searchRule)
        if (searchRule['partial-markdown-files']) {
          dataSearchReplaceRules.push(searchRule)
        }
        if (searchRule['yml-files']) {
          ymlSearchReplaceRules.push(searchRule)
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
      if (ymlSearchReplaceRules.length > 0) {
        config.yml[ruleName] = { ...ruleConfig, rules: ymlSearchReplaceRules }
        if (customRule) configuredRules.yml.push(customRule)
      }
      continue
    }

    config.content[ruleName] = ruleConfig
    if (customRule) configuredRules.content.push(customRule)
    if (ruleConfig['partial-markdown-files'] === true) {
      config.data[ruleName] = ruleConfig
      if (customRule) configuredRules.data.push(customRule)
    }
    if (ruleConfig['yml-files']) {
      config.yml[ruleName] = ruleConfig
      if (customRule) configuredRules.yml.push(customRule)
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
    errorDetail: 'docs-domain: Catch occurrences of docs.github.com domain.',
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
