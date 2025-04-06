/**
 * This script will loop over all pages, in all languages, and look at
 * the following:
 *
 *    1. `title` in frontmatter
 *    2. `intro` in frontmatter
 *    3. `shortTitle` in frontmatter (if present)
 *    4. the markdown body itself
 *    5. The `versions:` frontmatter key (if the page is in English)
 *
 * Then it will search out the features mentioned based on `data/features/*.yml`
 * It will make a Set of these (e.g. `dependabot-grouped-dependencies` and
 * `ghas-enablement-webhook`) and one by one pluck them away.
 *
 * After the pages, it will loop over the reusables in English, and do the
 * same search there. Once it's done the English, it loops over the
 * reusables in the translations (if they exist) and does the same search.
 *
 * Lastly, it will output the remaining features, as relative file paths.
 * For example, `data/features/havent-been-used-in-years.yml` so now you
 * know that file can be deleted.
 *
 * NOTE: A lot of translations have corrupted Liquid. So if we can't parse
 * the Liquid we fall back to string search. A regex will try to find
 * all `{% ifversion ... %}` (and `elsif`) and search for any features
 * mentioned inside that as a string.
 *
 */

import { strictEqual } from 'node:assert'
import fs from 'fs'
import path from 'path'

import chalk from 'chalk'
import { TokenizationError } from 'liquidjs'

import type { Page } from '@/types'
import warmServer from '@/frame/lib/warm-server'
import { getDeepDataByLanguage } from '@/data-directory/lib/get-data.js'
import { getLiquidTokens } from '@/content-linter/lib/helpers/liquid-utils.js'
import languages from '@/languages/lib/languages.js'
import { correctTranslatedContentStrings } from '@/languages/lib/correct-translation-content.js'

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

function searchAndRemove(features: Set<string>, pages: Page[], verbose = false) {
  for (const page of pages) {
    const content = page.markdown
    // We actually never bother looking at the `versions:` frontmatter
    // key in translations, so it doesn't matter if the translated
    // frontmatter might have `versions: some-old-feature`.
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

  // Reusables are a bit special, as they are shared between languages.
  // There'll always be a slight mismatch between files present on disk
  // in English vs. translations.
  // The translations never delete files, so there's often excess reusables
  // on disk in translations. And the English might be ahead, meaning a file
  // has been introduced in English but not yet translated.
  // The code below loops over the English reusables, and takes note of the
  // their relative paths and content. Then, we re-use the keys of that map
  // to know which files, in the translations, to check. And when we read
  // them in, we'll need the English equivalent content to be able to
  // use the correctTranslatedContentStrings function.

  const englishReusables = new Map<string, string>()
  for (const filePath of getReusableFiles(path.join(languages.en.dir, 'data', 'reusables'))) {
    const relativePath = path.relative(languages.en.dir, filePath)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    checkString(fileContent, features, { filePath, verbose, languageCode: 'en' })
    englishReusables.set(relativePath, fileContent)
  }
  for (const language of Object.values(languages)) {
    if (language.code === 'en') continue // Already did that in the loop above

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
          // That a reusable does *not* exist in a translation is
          // perfectly expected. It means that English reusable was
          // most likely added recently and the translation hasn't been
          // translated yet.
          continue
        }
        throw error
      }
    }
  }
}

function getReusableFiles(root: string): string[] {
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
    // The reason for the `noCache: true` is that we're going to be sending
    // a LOT of different strings in and the cache will fill up rapidly
    // when testing every possible string in every possible language for
    // every page.
    for (const token of getLiquidTokens(string, { noCache: true })) {
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
      // If it happens in English, it's a serious error
      if (languageCode === 'en') throw error

      // The translation might, currently, have corrupted liquid
      // So treat it as a string
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

function isFloat(x: any) {
  return !!(Number(x) + 1)
}
strictEqual(isFloat('1.2'), true)
strictEqual(isFloat('10'), true)
strictEqual(isFloat('notatall'), false)
strictEqual(isFloat('2fa'), false)
