/**
 * @purpose Writer tool
 * @description Run the Docs content linter, specifying paths and optional rules
 */
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import { program, Option } from 'commander'
import markdownlint from 'markdownlint'
import { applyFixes } from 'markdownlint-rule-helpers'
import boxen from 'boxen'
import ora from 'ora'

import walkFiles from '@/workflows/walk-files'
import { allConfig, allRules, customRules } from '../lib/helpers/get-rules'
import { customConfig, githubDocsFrontmatterConfig } from '../style/github-docs'
import { defaultConfig } from '../lib/default-markdownlint-options'
import { prettyPrintResults } from './pretty-print-results'
import { getLintableYml } from '@/content-linter/lib/helpers/get-lintable-yml'
import { printAnnotationResults } from '../lib/helpers/print-annotations'
import languages from '@/languages/lib/languages-server'
import type { Rule as MarkdownlintRule } from 'markdownlint'
import type { Rule, Config } from '@/content-linter/types'

// Type definitions for Markdownlint results
interface LintError {
  lineNumber: number
  ruleNames: string[]
  ruleDescription: string
  ruleInformation: string
  errorDetail: string | null
  errorContext: string | null
  errorRange: [number, number] | null
  fixInfo?: {
    editColumn?: number
    deleteCount?: number
    insertText?: string
    lineNumber?: number
  }
  isYamlFile?: boolean
}

type LintResults = Record<string, LintError[]>

interface FileList {
  length: number
  content: string[]
  data: string[]
  yml: string[]
}

interface ConfiguredRules {
  content: MarkdownlintRule[]
  data: MarkdownlintRule[]
  frontMatter: MarkdownlintRule[]
  yml: MarkdownlintRule[]
}

interface LintConfig {
  content: Record<string, any> // Markdownlint config object
  data: Record<string, any>
  frontMatter: Record<string, any>
  yml: Record<string, any>
}

interface MarkdownLintConfigResult {
  config: LintConfig
  configuredRules: ConfiguredRules
}

interface FormattedResult {
  ruleDescription: string
  ruleNames: string[]
  lineNumber: number
  columnNumber?: number
  severity: string
  errorDetail?: string
  errorContext?: string
  context?: string
  fixable?: boolean
  // Index signature allows additional properties from LintError that may vary by rule
  [key: string]: any
}

type FormattedResults = Record<string, FormattedResult[]>

/**
 * Config that applies to all rules in all environments (CI, reports, precommit).
 */
export const globalConfig = {
  // Do not ever lint these filepaths
  excludePaths: ['content/contributing/'],
}

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
  if (!isOptionsValid()) return

  // Get the updated paths after validation (invalid paths will have been filtered out)
  const validatedPaths = program.opts().paths

  // If paths has not been specified, lint all files
  const files = getFilesToLint(
    (summaryByRule && ALL_CONTENT_DIR) || validatedPaths || getChangedFiles(),
  )

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
  const { config, configuredRules } = getMarkdownLintConfig(errorsOnly, rules)

  // Run Markdownlint for content directory
  const resultContent = (await markdownlint.promises.markdownlint({
    files: files.content,
    config: config.content,
    customRules: configuredRules.content,
  })) as LintResults
  // Run Markdownlint for data directory
  const resultData = (await markdownlint.promises.markdownlint({
    files: files.data,
    config: config.data,
    customRules: configuredRules.data,
  })) as LintResults

  // Run Markdownlint for content directory (frontmatter only)
  const resultFrontmatter = await markdownlint.promises.markdownlint({
    frontMatter: null,
    files: files.content,
    config: config.frontMatter,
    customRules: configuredRules.frontMatter,
  })

  // Run Markdownlint on "lintable" Markdown strings in a YML file
  const resultYml: LintResults = {}
  for (const ymlFile of files.yml) {
    const lintableYml = await getLintableYml(ymlFile)
    if (!lintableYml) continue

    const resultYmlFile = (await markdownlint.promises.markdownlint({
      strings: lintableYml,
      config: config.yml,
      customRules: configuredRules.yml,
    })) as LintResults

    for (const [key, value] of Object.entries(resultYmlFile)) {
      if ((value as LintError[]).length) {
        const errors = (value as LintError[]).map((error) => {
          // Autofixing would require us to write the changes back to the YML
          // file which Markdownlint doesn't support. So we don't support
          // autofixing for YML files at this time.
          if (error.fixInfo) delete error.fixInfo
          error.isYamlFile = true
          return error
        })
        resultYml[key] = errors
      }
    }
  }

  // There are no collisions when assigning the results to the new object
  // because the keys are filepaths and the individual runs of Markdownlint
  // are in separate directories (content and data).
  const results: LintResults = Object.assign({}, resultContent, resultData, resultYml)

  // Merge in the results for frontmatter tests, which could be
  // in a file that already exists as a key in the `results` object.
  for (const [key, value] of Object.entries(resultFrontmatter)) {
    if (results[key]) results[key].push(...(value as LintError[]))
    else results[key] = value as LintError[]
  }

  // Apply markdownlint fixes if available and rewrite the files
  let countFixedFiles = 0
  if (fix) {
    for (const file of [...files.content, ...files.data]) {
      if (!results[file] || !results[file].some((flaw) => flaw.fixInfo)) {
        continue
      }
      const content = fs.readFileSync(file, 'utf8')
      const applied = applyFixes(content, results[file] as any)
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
      fs.writeFileSync(`${outputFile}`, JSON.stringify(formattedResults, undefined, 2), 'utf-8')
      console.log(`Output written to ${outputFile}`)
    } else {
      prettyPrintResults(formattedResults, {
        fixed: fix,
      })
    }
  }

  if (printAnnotations) {
    printAnnotationResults(formattedResults, {
      skippableRules: [],
      skippableFlawProperties: [
        // As of Feb 2024, we don't support reporting flaws for lines
        // and columns numbers of YAML files. YAML files consist of one
        // or more Markdown strings that can themselves constitute an
        // entire "file."
        'isYamlFile' as string,
      ] as string[],
    })
  }

  const end = Date.now()
  // Ensure previous console logging is not truncated
  console.log('\n')
  const took = end - start
  if (warningFileCount > 0 || errorFileCount > 0) {
    spinner.info(
      `💡 You can disable linter rules for specific lines or blocks of text. See https://gh.io/suppress-linter-rule.\n\n`,
    )
  }
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
      .filter(([, fileResults]) => fileResults.some((flaw) => flaw.fixable))
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

// Using unknown[] to accept arrays of any type (errors, warnings, files, etc.)
function pluralize(
  things: unknown[] | number,
  word: string,
  pluralForm: string | null = null,
): string {
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
function getFilesToLint(inputPaths: string[]): FileList {
  const fileList: FileList = {
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
  for (const rawPath of inputPaths) {
    const absPath = path.resolve(rawPath)
    if (fs.statSync(rawPath).isDirectory()) {
      if (isInDir(absPath, contentDir)) {
        fileList.content.push(...walkFiles(absPath, ['.md']))
      } else if (isInDir(absPath, dataDir)) {
        fileList.data.push(...walkFiles(absPath, ['.md']))
        fileList.yml.push(...walkFiles(absPath, ['.yml']))
      }
    } else {
      if (isInDir(absPath, contentDir) || isAFixtureMdFile(absPath)) {
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

  function cleanPaths(filePaths: string[]): string[] {
    const clean = []
    for (const filePath of filePaths) {
      if (
        path.basename(filePath) === 'README.md' ||
        (!filePath.endsWith('.md') && !filePath.endsWith('.yml'))
      )
        continue

      const relPath = path.relative(root, filePath)

      // Skip files that match any of the excluded paths
      if (globalConfig.excludePaths.some((excludePath) => relPath.startsWith(excludePath))) {
        continue
      }

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
function isInDir(child: string, parent: string): boolean {
  // The simple reason why you can't use `parent.startsWith(child)`
  // is because the parent might be `/path/to/data` and the child
  // might be `/path/to/data-files`.
  const parentSplit = parent.split(path.sep)
  const childSplit = child.split(path.sep)
  return parentSplit.every((dir: string, i: number) => dir === childSplit[i])
}

// This is a function used during development to
// see how many errors we have per rule. This helps
// to identify rules that can be upgraded from
// warning severity to error.
function reportSummaryByRule(results: LintResults, config: LintConfig): void {
  const ruleCount: Record<string, number> = {}

  // populate the list of rules with 0 occurrences
  for (const rule of Object.keys(config.content)) {
    if (config.content[rule].severity === 'error') continue
    ruleCount[rule] = 0
  }
  // the default property is not actually a rule
  delete ruleCount.default

  for (const key of Object.keys(results)) {
    if (results[key].length > 0) {
      for (const flaw of results[key]) {
        const ruleName = flaw.ruleNames[1]
        if (!Object.hasOwn(ruleCount, ruleName)) continue
        const count = ruleCount[ruleName]
        ruleCount[ruleName] = count + 1
      }
    }
  }
}

/*
  Filter out the files with one or more results and format each
  result. Results are sorted by severity per file, with errors
  listed first then warnings.
*/
function getFormattedResults(
  allResults: LintResults,
  isInPrecommitMode: boolean,
): FormattedResults {
  const output: FormattedResults = {}
  const filteredResults = Object.entries(allResults)
    // Each result key always has an array value, but it may be empty
    .filter(([, results]) => results.length)
  for (const [key, fileResults] of filteredResults) {
    if (verbose) {
      output[key] = fileResults
        .map((flaw: LintError) => formatResult(flaw, isInPrecommitMode))
        .filter((result): result is FormattedResult => result !== null)
    } else {
      const formattedResults = fileResults
        .map((flaw: LintError) => formatResult(flaw, isInPrecommitMode))
        .filter((result): result is FormattedResult => result !== null)

      // Only add the file to output if there are results after filtering
      if (formattedResults.length > 0) {
        const errors = formattedResults.filter((result) => result.severity === 'error')
        const warnings = formattedResults.filter((result) => result.severity === 'warning')
        const sortedResult = [...errors, ...warnings]
        output[key] = [...sortedResult]
      }
    }
  }
  return output
}

// Results are formatted with the key being the filepath
// and the value being an array of errors for that filepath.
// Each result has a rule name, which when looked up in `allConfig`
// will give us its severity and we filter those that are 'warning'.
function getWarningCountByFile(results: FormattedResults, fixed = false): number {
  return getCountBySeverity(results, 'warning', fixed)
}

// Results are formatted with the key being the filepath
// and the value being an array of results for that filepath.
// Each result in the array has a severity of error or warning.
function getErrorCountByFile(results: FormattedResults, fixed = false): number {
  return getCountBySeverity(results, 'error', fixed)
}

function getCountBySeverity(
  results: FormattedResults,
  severityLookup: string,
  fixed: boolean,
): number {
  return Object.values(results).filter((fileResults: FormattedResult[]) =>
    fileResults.some((result: FormattedResult) => {
      // If --fix was applied, we don't want to know about files that
      // no longer have errors or warnings.
      return result.severity === severityLookup && (!fixed || !result.fixable)
    }),
  ).length
}

// Removes null values and properties that are not relevant to content
// writers, adds the severity to each result object, and transforms
// some error and fix data into a more readable format.
function formatResult(object: LintError, isInPrecommitMode: boolean): FormattedResult | null {
  const formattedResult: FormattedResult = {} as FormattedResult

  // Add severity to each result object
  const ruleName = object.ruleNames[1] || object.ruleNames[0]
  const ruleConfig = allConfig[ruleName] as Config | undefined
  // Skip rules that aren't in our config. This can happen when using
  // <!-- markdownlint-disable --> / <!-- markdownlint-enable --> comments
  // without specifying rule names, which re-enables ALL markdownlint rules
  // including ones we don't use (like line-length/MD013).
  if (!ruleConfig) {
    return null
  }
  formattedResult.severity =
    ruleConfig.severity || getSearchReplaceRuleSeverity(ruleName, object, isInPrecommitMode)

  formattedResult.context = ruleConfig.context || ''

  return Object.entries(object).reduce((acc, [key, value]) => {
    if (key === 'fixInfo') {
      acc.fixable = !!value
      delete acc.fixInfo
      return acc
    }
    if (!value) return acc
    if (key === 'errorRange') {
      acc.columnNumber = (value as [number, number])[0]
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
function getMarkdownLintConfig(
  filterErrorsOnly: boolean,
  runRules: string[] | undefined,
): MarkdownLintConfigResult {
  const config = {
    content: structuredClone(defaultConfig),
    data: structuredClone(defaultConfig),
    frontMatter: structuredClone(defaultConfig),
    yml: structuredClone(defaultConfig),
  }
  const configuredRules: ConfiguredRules = {
    content: [],
    data: [],
    frontMatter: [],
    yml: [],
  }

  for (const [ruleName, ruleConfig] of Object.entries(allConfig)) {
    const customRule = (customConfig as any)[ruleName] && getCustomRule(ruleName)
    // search-replace is handled differently than other rules because
    // it has nested metadata and rules.
    if (
      filterErrorsOnly &&
      getSeverity(ruleConfig as any, isPrecommit) !== 'error' &&
      ruleName !== 'search-replace'
    ) {
      continue
    }

    // Check if the rule should be included based on user-specified rules
    if (runRules && !shouldIncludeRule(ruleName, runRules)) continue

    // There are a subset of rules run on just the frontmatter in files
    if ((githubDocsFrontmatterConfig as any)[ruleName]) {
      ;(config.frontMatter as any)[ruleName] = ruleConfig
      if (customRule) configuredRules.frontMatter.push(customRule)
    }
    // Handle the special case of the search-replace rule
    // which has nested rules each with their own
    // severity and metadata.
    if (ruleName === 'search-replace') {
      const searchReplaceRules = []
      const dataSearchReplaceRules = []
      const ymlSearchReplaceRules = []
      const frontmatterSearchReplaceRules = []

      if (!ruleConfig.rules) continue
      for (const searchRule of ruleConfig.rules) {
        const searchRuleSeverity = getSeverity(searchRule, isPrecommit)
        if (filterErrorsOnly && searchRuleSeverity !== 'error') continue
        // Add search-replace rules to frontmatter configuration for rules that make sense in frontmatter
        // This ensures rules like TODOCS detection work in frontmatter
        // Rules with applyToFrontmatter should ONLY run in the frontmatter pass (which lints the entire file)
        // to avoid duplicate detections
        if (searchRule.applyToFrontmatter) {
          frontmatterSearchReplaceRules.push(searchRule as any)
        } else {
          // Only add to content rules if not a frontmatter-specific rule
          searchReplaceRules.push(searchRule as any)
        }
        if (searchRule['partial-markdown-files']) {
          dataSearchReplaceRules.push(searchRule as any)
        }
        if (searchRule['yml-files']) {
          ymlSearchReplaceRules.push(searchRule as any)
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
      if (frontmatterSearchReplaceRules.length > 0) {
        config.frontMatter[ruleName] = { ...ruleConfig, rules: frontmatterSearchReplaceRules }
        if (customRule) configuredRules.frontMatter.push(customRule)
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
function getSeverity(ruleConfig: Config, isInPrecommitMode: boolean): string {
  return isInPrecommitMode
    ? ruleConfig.precommitSeverity || ruleConfig.severity
    : ruleConfig.severity
}

// Gets a custom rule function from the name of the rule
// in the configuration file
function getCustomRule(ruleName: string): Rule | MarkdownlintRule {
  const rule = customRules.find((r) => r.names.includes(ruleName))
  if (!rule)
    throw new Error(
      `A content-lint rule ('${ruleName}') is configured in the markdownlint config file but does not have a corresponding rule function.`,
    )
  return rule
}

// Check if a rule should be included based on user-specified rules
// Handles both short names (e.g., GHD047, MD001) and long names (e.g., table-column-integrity, heading-increment)
export function shouldIncludeRule(ruleName: string, runRules: string[]) {
  // First check if the rule name itself is in the list
  if (runRules.includes(ruleName)) {
    return true
  }

  // For custom rules, check if any of the rule's names (short or long) are in the runRules list
  const customRule = customRules.find((rule) => rule.names.includes(ruleName))
  if (customRule) {
    return customRule.names.some((name) => runRules.includes(name))
  }

  // For built-in markdownlint rules, check if any of the rule's names are in the runRules list
  const builtinRule = allRules.find((rule) => rule.names.includes(ruleName))
  if (builtinRule) {
    return builtinRule.names.some((name: string) => runRules.includes(name))
  }

  return false
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
function getSearchReplaceRuleSeverity(
  ruleName: string,
  object: LintError,
  isInPrecommitMode: boolean,
) {
  const pluginRuleName = object.errorDetail?.split(':')[0].trim()
  const ruleConfig = allConfig[ruleName] as Config
  const rule = ruleConfig.rules?.find((r) => r.name === pluginRuleName)
  if (!rule) return 'error' // Default to error if rule not found
  return isInPrecommitMode ? rule.precommitSeverity || rule.severity : rule.severity
}

function isOptionsValid() {
  // paths should only contain existing files and directories
  const optionPaths = program.opts().paths || []
  const validPaths = []

  for (const filePath of optionPaths) {
    try {
      fs.statSync(filePath)
      validPaths.push(filePath) // Keep track of valid paths
    } catch {
      if ('paths'.includes(filePath)) {
        console.warn('warning: did you mean --paths')
      } else {
        console.warn(`warning: the value '${filePath}' was not found. Skipping this path.`)
      }
      // Continue processing - don't return false here
    }
  }

  // Update the program options to only include valid paths
  if (optionPaths.length > 0) {
    program.setOptionValue('paths', validPaths)
  }

  // rules should only contain existing, correctly spelled rules
  const allRulesList = [...allRules.map((rule) => rule.names).flat(), ...Object.keys(allConfig)]
  const optionRules = program.opts().rules || []
  for (const ruleName of optionRules) {
    if (!allRulesList.includes(ruleName)) {
      if ('rules'.includes(ruleName)) {
        console.log('error: did you mean --rules')
      } else {
        console.log(
          `error: invalid --rules (-r) option. The value '${ruleName}' is not a valid rule name.`,
        )
      }
      return false
    }
  }

  // Only return false if paths were specified but none are valid
  return optionPaths.length === 0 || validPaths.length > 0
}

function isAFixtureMdFile(filePath: string): boolean {
  return filePath.includes('/src') && filePath.includes('/fixtures') && filePath.endsWith('.md')
}
