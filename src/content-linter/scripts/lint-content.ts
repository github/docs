// @purpose Writer tool
// @description Run the Docs content linter, specifying paths and optional rules
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
import type {
  Rule as MarkdownlintRule,
  Configuration,
  LintError as MarkdownlintLintError,
} from 'markdownlint'
import type { Rule, Config } from '@/content-linter/types'

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
  content: Configuration
  data: Configuration
  frontMatter: Configuration
  yml: Configuration
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
  // Individual lint rules can add their own result properties.
  [key: string]: unknown
}

type FormattedResults = Record<string, FormattedResult[]>

// Applies to all rules in CI, reports, and precommit.
export const globalConfig = {
  excludePaths: ['content/contributing/', 'data/llms-txt/'],
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

// main casts local LintError values before applyFixes because markdownlint types the same
// fields as non-null, and applyFixes only reads lineNumber and fixInfo.
main()

async function main() {
  if (!isOptionsValid()) return

  const validatedPaths = program.opts().paths

  // With no paths and no --summary-by-rule, lint files changed in the local checkout.
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

  const { config, configuredRules } = getMarkdownLintConfig(errorsOnly, rules)

  const resultContent = (await markdownlint.promises.markdownlint({
    files: files.content,
    config: config.content,
    customRules: configuredRules.content,
  })) as LintResults
  const resultData = (await markdownlint.promises.markdownlint({
    files: files.data,
    config: config.data,
    customRules: configuredRules.data,
  })) as LintResults

  const resultFrontmatter = await markdownlint.promises.markdownlint({
    frontMatter: null,
    files: files.content,
    config: config.frontMatter,
    customRules: configuredRules.frontMatter,
  })

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
          // markdownlint cannot write fixes back into lintable YAML strings.
          if (error.fixInfo) delete error.fixInfo
          error.isYamlFile = true
          return error
        })
        resultYml[key] = errors
      }
    }
  }

  // Content and data paths cannot collide because they live in separate directories.
  const results: LintResults = Object.assign({}, resultContent, resultData, resultYml)

  // Frontmatter results can share file keys with content results.
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
      const applied = applyFixes(content, results[file] as unknown as MarkdownlintLintError[])
      if (content !== applied) {
        countFixedFiles++
        fs.writeFileSync(file, applied, 'utf-8')
      }
    }
  }

  // markdownlint results need repo-specific severity before output.
  const formattedResults = getFormattedResults(results, isPrecommit)
  // When --fix runs, ignore files whose remaining issues were fully fixed.
  const errorFileCount = getErrorCountByFile(formattedResults, fix)
  const warningFileCount = getWarningCountByFile(formattedResults, fix)

  // summaryByRule helps decide which warning rules can become errors.
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
        // YAML lint strings can span a whole virtual file, so line and column data misleads.
        'isYamlFile' as string,
      ] as string[],
    })
  }

  const end = Date.now()
  console.log('\n')
  const took = end - start
  if (warningFileCount > 0 || errorFileCount > 0) {
    console.log(
      `💡 You can disable linter rules for specific lines or blocks of text. See https://gh.io/suppress-linter-rule.\n`,
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
      console.log('')
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
      console.log('')
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

// getFilesToLint separates content Markdown, data Markdown, and lintable YAML because
// each group gets different markdownlint rules.
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
  // markdownlint reports the path it receives, so pass repo-relative paths.
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
      // Changed-file lists can include code, so ignore paths outside content and data.
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

  fileList.length = fileList.content.length + fileList.data.length + fileList.yml.length

  return fileList
}

// Match path segments, so /foo/bar matches /foo but /foo/barring does not match /foo/bar.
function isInDir(child: string, parent: string): boolean {
  const parentSplit = parent.split(path.sep)
  const childSplit = child.split(path.sep)
  return parentSplit.every((dir: string, i: number) => dir === childSplit[i])
}

// reportSummaryByRule helps identify warning rules that can become errors.
function reportSummaryByRule(results: LintResults, config: LintConfig): void {
  const ruleCount: Record<string, number> = {}

  for (const rule of Object.keys(config.content)) {
    if ((config.content[rule] as { severity?: string }).severity === 'error') continue
    ruleCount[rule] = 0
  }
  // default is a config key, not a rule name.
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

// Keep only files with results, then list errors before warnings in each file.
function getFormattedResults(
  allResults: LintResults,
  isInPrecommitMode: boolean,
): FormattedResults {
  const output: FormattedResults = {}
  const filteredResults = Object.entries(allResults)
    // Empty result arrays would print blank file sections in verbose output.
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

function getWarningCountByFile(results: FormattedResults, fixed = false): number {
  return getCountBySeverity(results, 'warning', fixed)
}

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
      // After --fix, ignore files whose errors or warnings disappeared.
      return result.severity === severityLookup && (!fixed || !result.fixable)
    }),
  ).length
}

// Removes null values and properties that are not relevant to content
// writers, adds the severity to each result object, and transforms
// some error and fix data into a more readable format.
function formatResult(object: LintError, isInPrecommitMode: boolean): FormattedResult | null {
  const formattedResult: FormattedResult = {} as FormattedResult

  const ruleName = object.ruleNames[1] || object.ruleNames[0]
  const ruleConfig = allConfig[ruleName] as Config | undefined
  // Bare markdownlint-enable comments can re-enable unconfigured rules, such as MD013.
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

// listRules prints short names, long names, and descriptions for CLI help.
function listRules() {
  let ruleList = ''
  for (const rule of allRules) {
    if (!allConfig[rule.names[1]]) continue
    ruleList += `\n[${rule.names[0]}, ${rule.names[1]}]: ${rule.description}`
  }
  return ruleList
}

// Data Markdown files are partials, so rules with partial-markdown-files false skip them.
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
    const customRule = (customConfig as Record<string, unknown>)[ruleName]
      ? (getCustomRule(ruleName) as MarkdownlintRule)
      : undefined
    // search-replace has nested metadata and pseudo-rules.
    if (
      filterErrorsOnly &&
      getSeverity(ruleConfig, isPrecommit) !== 'error' &&
      ruleName !== 'search-replace'
    ) {
      continue
    }

    if (runRules && !shouldIncludeRule(ruleName, runRules)) continue

    if ((githubDocsFrontmatterConfig as Record<string, unknown>)[ruleName]) {
      config.frontMatter[ruleName] = ruleConfig
      if (customRule) configuredRules.frontMatter.push(customRule)
    }
    if (ruleName === 'search-replace') {
      const searchReplaceRules: NonNullable<Config['rules']> = []
      const dataSearchReplaceRules: NonNullable<Config['rules']> = []
      const ymlSearchReplaceRules: NonNullable<Config['rules']> = []
      const frontmatterSearchReplaceRules: NonNullable<Config['rules']> = []

      if (!ruleConfig.rules) continue
      for (const searchRule of ruleConfig.rules) {
        const searchRuleSeverity = getSeverity(searchRule, isPrecommit)
        if (filterErrorsOnly && searchRuleSeverity !== 'error') continue
        // applyToFrontmatter runs only in the frontmatter pass, or every match reports twice.
        if (searchRule.applyToFrontmatter) {
          frontmatterSearchReplaceRules.push(searchRule)
        } else {
          searchReplaceRules.push(searchRule)
        }
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

// Precommit can lower or raise a rule's normal severity.
function getSeverity(ruleConfig: Config, isInPrecommitMode: boolean): string {
  return isInPrecommitMode
    ? ruleConfig.precommitSeverity || ruleConfig.severity
    : ruleConfig.severity
}

function getCustomRule(ruleName: string): Rule | MarkdownlintRule {
  const rule = customRules.find((r) => r.names.includes(ruleName))
  if (!rule)
    throw new Error(
      `A content-lint rule ('${ruleName}') is configured in the markdownlint config file but does not have a corresponding rule function.`,
    )
  return rule
}

// Accept both short rule IDs and long rule names.
export function shouldIncludeRule(ruleName: string, runRules: string[]) {
  if (runRules.includes(ruleName)) {
    return true
  }

  const customRule = customRules.find((rule) => rule.names.includes(ruleName))
  if (customRule) {
    return customRule.names.some((name) => runRules.includes(name))
  }

  const builtinRule = allRules.find((rule) => rule.names.includes(ruleName))
  if (builtinRule) {
    return builtinRule.names.some((name: string) => runRules.includes(name))
  }

  return false
}

// markdownlint-rule-search-replace stores the pseudo-rule name before the colon in
// errorDetail, for example "docs-domain: Catch occurrences of docs.github.com domain."
function getSearchReplaceRuleSeverity(
  ruleName: string,
  object: LintError,
  isInPrecommitMode: boolean,
) {
  const pluginRuleName = object.errorDetail?.split(':')[0].trim()
  const ruleConfig = allConfig[ruleName] as Config
  const rule = ruleConfig.rules?.find((r) => r.name === pluginRuleName)
  if (!rule) return 'error' // Unknown search-replace sub-rules default to error severity.
  return isInPrecommitMode ? rule.precommitSeverity || rule.severity : rule.severity
}

function isOptionsValid() {
  const optionPaths = program.opts().paths || []
  const validPaths = []

  for (const filePath of optionPaths) {
    try {
      fs.statSync(filePath)
      validPaths.push(filePath)
    } catch {
      if ('paths'.includes(filePath)) {
        console.warn('warning: did you mean --paths')
      } else {
        console.warn(`warning: the value '${filePath}' was not found. Skipping this path.`)
      }
      // Keep going so one bad path does not abandon the rest.
    }
  }

  if (optionPaths.length > 0) {
    program.setOptionValue('paths', validPaths)
  }

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

  // Bad paths fail only when none of the requested paths exist.
  return optionPaths.length === 0 || validPaths.length > 0
}

function isAFixtureMdFile(filePath: string): boolean {
  return filePath.includes('/src') && filePath.includes('/fixtures') && filePath.endsWith('.md')
}
