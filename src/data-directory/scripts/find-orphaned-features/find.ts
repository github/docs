// Finds data/features/*.yml entries that no page, reusable, or variable references.
// It scans title, intro, shortTitle, body, and English versions frontmatter across all pages.
// It also scans English reusables and variables, then matching translated reusables.
// Outputs remaining features as paths such as data/features/havent-been-used-in-years.yml.
// If translated Liquid cannot parse, regex searches feature names in ifversion and elsif tags.

import { strictEqual } from 'node:assert'
import fs from 'fs'
import path from 'path'

import chalk from 'chalk'
import { TokenizationError, TokenKind } from 'liquidjs'
import type { TagToken } from 'liquidjs'

import type { Page } from '@/types'
import warmServer from '@/frame/lib/warm-server'
import { getDeepDataByLanguage } from '@/data-directory/lib/get-data'
import { getLiquidTokens } from '@/content-linter/lib/helpers/liquid-utils'
import languages from '@/languages/lib/languages-server'
import { correctTranslatedContentStrings } from '@/languages/lib/correct-translation-content'

const EXCEPTIONS = new Set([
  // From data/features/placeholder.yml. Used by tests.
  'placeholder',
])

type Options = {
  sourceDirectory: string
  output?: string
  verbose?: boolean
}

export async function find(options: Options) {
  const { sourceDirectory } = options
  if (process.env.ENABLED_LANGUAGES && process.env.ENABLED_LANGUAGES === 'en') {
    console.warn(
      chalk.yellow(
        `Only English is enabled. Be careful with the output.
    To include all translations make sure they're available and that
    ENABLED_LANGUAGES is not set or set to 'all'.`.replaceAll(/\s\s+/g, ' '),
      ),
    )
  }
  const site = await warmServer([])

  const features = new Set(
    Object.keys(getDeepDataByLanguage('features', 'en')).filter((f) => !EXCEPTIONS.has(f)),
  )
  if (options.verbose) {
    console.log(`Found ${features.size} features`)
  }

  const pageList: Page[] = site.pageList
  if (options.verbose) {
    console.log(`Searching ${pageList.length.toLocaleString()} pages`)
  }

  const t0 = new Date()
  searchAndRemove(features, pageList, Boolean(options.verbose))
  const t1 = new Date()

  if (options.verbose) {
    const color = features.size === 0 ? chalk.green : chalk.yellow
    console.log(
      color(
        `Searched ${pageList.length.toLocaleString()} pages in ${formatDelta(t0, t1)}.
      And found ${features.size} features remaining (i.e. orphans).`.replace(/\s\s+/, ' '),
      ),
    )
  }

  const remaining = Array.from(features).map((feature) =>
    path.join(sourceDirectory, `${feature}.yml`),
  )
  if (options.output) {
    if (options.output.endsWith('.json')) {
      if (remaining.length) {
        fs.writeFileSync(options.output, JSON.stringify(remaining, null, 2))
      }
    } else {
      fs.writeFileSync(options.output, remaining.join('\n'))
    }
    if (!options.verbose) {
      return
    }
  }
  console.log(chalk.bold(`Orphans found (${remaining.length}):`))
  for (const feature of remaining) {
    console.log(chalk.green(feature))
  }
}

function formatDelta(t0: Date, t1: Date) {
  const ms = t1.getTime() - t0.getTime()
  return `${(ms / 1000).toFixed(1)} seconds`
}

// searchAndRemove scans translated reusables only when English has the same relative path.
// English content lets correctTranslatedContentStrings repair Liquid before feature matching.
function searchAndRemove(features: Set<string>, pages: Page[], verbose = false) {
  for (const page of pages) {
    const content = page.markdown
    // Only English versions frontmatter can mark a feature used.
    if (page.languageCode === 'en') {
      for (const [key, value] of Object.entries(page.versions)) {
        if (key === 'feature') {
          if (features.has(value)) {
            features.delete(value)
          }
        }
      }
    }

    const combined = `
      ${content}
      ${page.title || ''}
      ${page.shortTitle || ''}
      ${page.intro || ''}
    `

    checkString(combined, features, { page, verbose, languageCode: page.languageCode })
  }

  for (const filePath of getVariableFiles(path.join(languages.en.dir, 'data', 'variables'))) {
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    checkString(fileContent, features, { filePath, verbose, languageCode: 'en' })
  }

  const englishReusables = new Map<string, string>()
  for (const filePath of getReusableFiles(path.join(languages.en.dir, 'data', 'reusables'))) {
    const relativePath = path.relative(languages.en.dir, filePath)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    checkString(fileContent, features, { filePath, verbose, languageCode: 'en' })
    englishReusables.set(relativePath, fileContent)
  }
  for (const language of Object.values(languages)) {
    if (language.code === 'en') continue

    for (const [relativePath, englishFileContent] of Array.from(englishReusables.entries())) {
      const filePath = path.join(language.dir, relativePath)
      try {
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        const correctedFileContent = correctTranslatedContentStrings(
          fileContent,
          englishFileContent,
          {
            code: language.code,
            relativePath,
          },
        )

        checkString(correctedFileContent, features, {
          filePath,
          verbose,
          languageCode: language.code,
        })
      } catch (error) {
        if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
          // Missing translated reusables are expected when English has newer files.
          continue
        }
        throw error
      }
    }
  }
}

export function getReusableFiles(root: string): string[] {
  const here = []
  for (const file of fs.readdirSync(root)) {
    const filePath = `${root}/${file}`
    if (fs.statSync(filePath).isDirectory()) {
      here.push(...getReusableFiles(filePath))
    } else if (file.endsWith('.md') && file !== 'README.md') {
      here.push(filePath)
    }
  }
  return here
}

export function getVariableFiles(root: string): string[] {
  const here = []
  for (const file of fs.readdirSync(root)) {
    const filePath = `${root}/${file}`
    if (fs.statSync(filePath).isDirectory()) {
      here.push(...getVariableFiles(filePath))
    } else if (file.endsWith('.yml') && file !== 'README.yml') {
      here.push(filePath)
    }
  }
  return here
}

const IGNORE_ARGS = new Set(['or', 'and', 'not', '<', '>', 'ghes', 'fpt', 'ghec', '!=', '='])

function checkString(
  string: string,
  features: Set<string>,
  {
    page,
    filePath,
    languageCode,
    verbose = false,
  }: { page?: Page; filePath?: string; languageCode?: string; verbose?: boolean } = {},
) {
  try {
    // Disable the Liquid token cache because scanning many different strings would fill it quickly.
    const tokens = getLiquidTokens(string, { noCache: true }).filter(
      (token): token is TagToken => token.kind === TokenKind.Tag,
    )
    for (const token of tokens) {
      if (token.name === 'ifversion' || token.name === 'elsif') {
        for (const arg of token.args.split(/\s+/)) {
          if (IGNORE_ARGS.has(arg)) continue
          if (isFloat(arg)) continue

          if (features.has(arg)) {
            features.delete(arg)
          }
        }
      }
    }
  } catch (error) {
    if (error instanceof TokenizationError) {
      // English Liquid parse failures are source errors.
      if (languageCode === 'en') throw error

      // Translated Liquid can be corrupt, so regex search still catches feature references.
      if (verbose)
        console.log(
          `TokenizationError in ${page ? page.fullPath : filePath}. Treating ${page ? page.fullPath : filePath} as a string and using regex`,
        )

      for (const feature of Array.from(findByRegex(features, string))) {
        features.delete(feature)
      }
    } else {
      throw error
    }
  }
}

function findByRegex(features: Set<string>, string: string) {
  const found = new Set<string>()
  for (const match of string.match(/\{%\s*(ifversion|elsif)\s*(.*?)\s*%\}/g) || []) {
    for (const feature of Array.from(features)) {
      const regex = new RegExp(`\\s${escapeRegex(feature)}(\\s|%)`, 'i')
      if (regex.test(match)) {
        found.add(feature)
      }
    }
  }
  return found
}

const test = findByRegex(
  new Set(['placeholder', 'foo-bar']),
  `
  placeholder

  {%ifversion placeholder-foo or fpt%}
  {%   elsif   not-placeholder   %}
  {%   elsif   foo-bar%}
  {%endif %}

  {% data reusables.enterprise-migration-tool.placeholder-table %}
  {% data placeholder %}
`,
)
console.assert(test.has('foo-bar'), test.toString())
console.assert(!test.has('placeholder'), test.toString())

function escapeRegex(string: string) {
  return string.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&')
}

function isFloat(x: string | number) {
  return !!(Number(x) + 1)
}
strictEqual(isFloat('1.2'), true)
strictEqual(isFloat('10'), true)
strictEqual(isFloat('notatall'), false)
strictEqual(isFloat('2fa'), false)
