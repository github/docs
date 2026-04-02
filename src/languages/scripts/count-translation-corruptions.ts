import path from 'path'
import fs from 'fs'

import { program } from 'commander'
import walk from 'walk-sync'

import { engine } from '@/content-render/liquid/engine'
import { allVersions } from '@/versions/lib/all-versions'
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
    languageResults.push(await run(languageCode, site, reusables))
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

// Build a minimal Liquid render context for validating translated content.
// ifversion needs currentVersionObj; data tags call getDataByLanguage() internally.
const defaultVersion = 'free-pro-team@latest'
function buildRenderContext(languageCode: string) {
  return {
    currentLanguage: languageCode,
    currentVersion: defaultVersion,
    currentVersionObj: allVersions[defaultVersion],
  }
}

async function run(
  languageCode: string,
  site: Site,
  englishReusables: Reusables,
): Promise<LanguageResult> {
  const language = languages[languageCode as keyof typeof languages]

  const corruptions: CorruptionEntry[] = []
  const wheres = new Map<string, number>()
  const illegalTags = new Map<string, number>()
  const context = buildRenderContext(languageCode)

  // Suppress console.warn during rendering — the {% data %} tag warns
  // when it can't find translated data, which is expected noise.
  const originalWarn = console.warn
  console.warn = () => {}

  function countError(error: Error, where: string, file: string) {
    const errorString = error.message

    let illegalTag: string | undefined
    const errorWithExtras = error as Error & { token?: { content?: string } }
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
        await engine.parseAndRender(string, context)
      } catch (error) {
        if (error instanceof Error) {
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
      await engine.parseAndRender(correctedContent, context)
    } catch (error) {
      if (error instanceof Error && error.message.startsWith('ENOENT')) {
        continue
      } else if (error instanceof Error) {
        countError(error, 'reusable', relativePath)
      } else {
        throw error
      }
    }
  }

  const topIllegalTags = Array.from(illegalTags.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([tag, count]) => ({ tag, count }))

  console.warn = originalWarn

  return {
    language: languageCode,
    languageName: language.name,
    total: corruptions.length,
    corruptions,
    byLocation: Object.fromEntries(wheres),
    topIllegalTags,
  }
}
