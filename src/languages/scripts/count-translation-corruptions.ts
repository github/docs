import path from 'path'
import fs from 'fs'

import { program } from 'commander'
import { TokenizationError } from 'liquidjs'
import walk from 'walk-sync'

import { getLiquidTokens } from '@/content-linter/lib/helpers/liquid-utils'
import languages from '@/languages/lib/languages-server'
import warmServer from '@/frame/lib/warm-server'
import type { Site } from '@/types'
import { correctTranslatedContentStrings } from '@/languages/lib/correct-translation-content'

program
  .description('Tally the number of liquid corruptions in a translation. Outputs JSON to stdout.')
  .argument('[language...]', 'language(s) to compare against')
  .action(main)
program.parse(process.argv)

type Reusables = Map<string, string>

interface CorruptionEntry {
  file: string
  location: string
  error: string
  illegalTag?: string
}

interface LanguageResult {
  language: string
  languageName: string
  total: number
  corruptions: CorruptionEntry[]
  byLocation: Record<string, number>
  topIllegalTags: Array<{ tag: string; count: number }>
}

interface FrontmatterError {
  file: string
  message: string
}

interface CorruptionReport {
  hasFailures: boolean
  totalCount: number
  frontmatterErrors: FrontmatterError[]
  languages: LanguageResult[]
}

async function main(languageCodes: string[]) {
  // Suppress warmServer noise (frontmatter errors from translations)
  // and capture them as structured data instead
  const originalError = console.error
  const originalWarn = console.warn
  const originalLog = console.log
  const suppressedErrors: string[] = []
  console.error = (...args: unknown[]) => {
    suppressedErrors.push(args.map(String).join(' '))
  }
  console.warn = (...args: unknown[]) => {
    suppressedErrors.push(args.map(String).join(' '))
  }
  console.log = () => {}

  let langCodes: string[]
  let site: Site
  let reusables: Reusables

  try {
    langCodes = languageCodes.length
      ? languageCodes
      : Object.keys(languages).filter((x) => x !== 'en')

    for (const code of langCodes) {
      if (!(code in languages)) {
        throw new Error(`Language ${code} not found`)
      }
      if (code === 'en') {
        throw new Error("Can't test in English ('en')")
      }
    }

    site = await warmServer(languageCodes.length ? ['en', ...langCodes] : [])
    reusables = getReusables()
  } finally {
    console.error = originalError
    console.warn = originalWarn
    console.log = originalLog
  }

  const frontmatterErrors = parseFrontmatterErrors(suppressedErrors)
  const languageResults: LanguageResult[] = []

  for (const languageCode of langCodes) {
    languageResults.push(run(languageCode, site, reusables))
  }

  const totalCount = languageResults.reduce((sum, r) => sum + r.total, 0)

  const report: CorruptionReport = {
    hasFailures: totalCount > 0 || frontmatterErrors.length > 0,
    totalCount,
    frontmatterErrors,
    languages: languageResults,
  }

  console.log(JSON.stringify(report, null, 2))
}

function parseFrontmatterErrors(suppressedErrors: string[]): FrontmatterError[] {
  const errors: FrontmatterError[] = []
  const seen = new Set<string>()
  for (const err of suppressedErrors) {
    const match = err.match(/translations\/[^\s']+/)
    if (match && !seen.has(match[0])) {
      seen.add(match[0])
      errors.push({ file: match[0], message: 'YML parsing error' })
    }
  }
  return errors
}

function getReusables(): Reusables {
  const reusables = new Map()
  const files = walk('data/reusables', {
    includeBasePath: true,
    globs: ['**/*.md'],
    ignore: ['**/README.md'],
  })
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8')
    reusables.set(file, content)
  }
  return reusables
}

function run(languageCode: string, site: Site, englishReusables: Reusables): LanguageResult {
  const language = languages[languageCode as keyof typeof languages]

  const corruptions: CorruptionEntry[] = []
  const wheres = new Map<string, number>()
  const illegalTags = new Map<string, number>()

  function countError(error: TokenizationError, where: string, file: string) {
    const errorWithExtras = error as TokenizationError & {
      originalError?: Error
      token?: { content?: string }
    }
    const originalError = errorWithExtras.originalError
    const errorString = originalError ? originalError.message : error.message

    let illegalTag: string | undefined
    if (errorString.includes('illegal tag syntax') && errorWithExtras.token?.content) {
      illegalTag = errorWithExtras.token.content
      illegalTags.set(illegalTag, (illegalTags.get(illegalTag) || 0) + 1)
    }

    corruptions.push({ file, location: where, error: errorString, illegalTag })
    wheres.set(where, (wheres.get(where) || 0) + 1)
  }

  for (const page of site.pageList) {
    if (page.languageCode !== languageCode) continue

    const strings: string[][] = [
      ['title', page.title],
      ['shortTitle', page.shortTitle || ''],
      ['intro', page.intro || ''],
      ['markdown', page.markdown],
    ].filter(([, string]) => Boolean(string))

    for (const [where, string] of strings) {
      try {
        getLiquidTokens(string)
      } catch (error) {
        if (error instanceof TokenizationError) {
          countError(error, where, page.relativePath)
        } else {
          throw error
        }
      }
    }
  }

  for (const [relativePath, englishContent] of Array.from(englishReusables.entries())) {
    try {
      const filePath = path.join(language.dir, relativePath)
      const rawContent = fs.readFileSync(filePath, 'utf8')
      const correctedContent = correctTranslatedContentStrings(rawContent, englishContent, {
        code: languageCode,
        relativePath,
      })
      getLiquidTokens(correctedContent)
    } catch (error) {
      if (error instanceof TokenizationError) {
        countError(error, 'reusable', relativePath)
      } else if (error instanceof Error && error.message.startsWith('ENOENT')) {
        continue
      } else {
        throw error
      }
    }
  }

  const topIllegalTags = Array.from(illegalTags.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([tag, count]) => ({ tag, count }))

  return {
    language: languageCode,
    languageName: language.name,
    total: corruptions.length,
    corruptions,
    byLocation: Object.fromEntries(wheres),
    topIllegalTags,
  }
}
