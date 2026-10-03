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

if (import.meta.url === `file://${process.argv[1]}`) {
  program
    .description('Tally the number of liquid corruptions in a translation. Outputs JSON to stdout.')
    .argument('[language...]', 'language(s) to compare against')
    .option(
      '-v, --versions <versions>',
      'comma-separated version(s) to render under (default: all versions)',
    )
    .action((languageCodes, options) => main(languageCodes, options))
  program.parse(process.argv)
}

type Reusables = Map<string, string>

interface CorruptionEntry {
  file: string
  location: string
  error: string
  illegalTag?: string
  // The versions this exact corruption (file + location + error) was
  // observed rendering under. Structural errors surface under every
  // applicable version; render-time errors may surface under only some.
  versions: string[]
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
  versions: string[]
  frontmatterErrors: FrontmatterError[]
  languages: LanguageResult[]
}

export function resolveRequestedVersions(optionValue?: string): string[] {
  const allVersionKeys = Object.keys(allVersions)
  if (!optionValue) {
    return allVersionKeys
  }
  const versions = Array.from(
    new Set(
      optionValue
        .split(',')
        .map((v) => v.trim())
        .filter(Boolean),
    ),
  )
  const invalid = versions.filter((v) => !allVersionKeys.includes(v))
  if (invalid.length) {
    throw new Error(
      `Invalid version(s): ${invalid.join(', ')}. Valid versions: ${allVersionKeys.join(', ')}`,
    )
  }
  return versions
}

async function main(languageCodes: string[], options: { versions?: string } = {}) {
  // Validate requested versions before suppressing console output, so errors stay visible.
  const versions = resolveRequestedVersions(options.versions)

  // Capture warmServer frontmatter noise as structured data instead of stderr.
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
    languageResults.push(await run(languageCode, site, reusables, versions))
  }

  const totalCount = languageResults.reduce((sum, r) => sum + r.total, 0)

  const report: CorruptionReport = {
    hasFailures: totalCount > 0 || frontmatterErrors.length > 0,
    totalCount,
    versions,
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
// ifversion needs currentVersionObj; data tags call getDataByLanguage internally.
// Mirror shortVersions middleware so bare conditionals such as {% ifversion ghes %} resolve.
// Without the short-name flag, Liquid sees an undefined variable and hides real corruptions.
function buildRenderContext(languageCode: string, version: string) {
  const currentVersionObj = allVersions[version]
  return {
    currentLanguage: languageCode,
    currentVersion: version,
    currentVersionObj,
    [currentVersionObj.shortName]: true,
    currentRelease: version.split('@')[1],
    currentVersionShortName: currentVersionObj.shortName,
  }
}

async function run(
  languageCode: string,
  site: Site,
  englishReusables: Reusables,
  versions: string[],
): Promise<LanguageResult> {
  const language = languages[languageCode as keyof typeof languages]

  const wheres = new Map<string, number>()
  const illegalTags = new Map<string, number>()

  // Dedupe by file, location, and error, then annotate the entry with every version.
  const byKey = new Map<string, CorruptionEntry & { versionSet: Set<string> }>()

  // Discard direct console.warn calls during rendering.
  const originalWarn = console.warn
  console.warn = () => {}

  function countError(error: Error, where: string, file: string, version: string) {
    const errorString = error.message
    const key = `${file}\t${where}\t${errorString}`

    let entry = byKey.get(key)
    if (!entry) {
      let illegalTag: string | undefined
      const errorWithExtras = error as Error & { token?: { content?: string } }
      if (errorString.includes('illegal tag syntax') && errorWithExtras.token?.content) {
        illegalTag = errorWithExtras.token.content
        illegalTags.set(illegalTag, (illegalTags.get(illegalTag) || 0) + 1)
      }

      entry = {
        file,
        location: where,
        error: errorString,
        illegalTag,
        versions: [],
        versionSet: new Set(),
      }
      byKey.set(key, entry)
      wheres.set(where, (wheres.get(where) || 0) + 1)
    }
    entry.versionSet.add(version)
  }

  try {
    for (const page of site.pageList) {
      if (page.languageCode !== languageCode) continue

      // Render only served versions, because other corruptions cannot break indexing.
      const pageVersions = versions.filter((v) => page.applicableVersions.includes(v))
      if (!pageVersions.length) continue

      const strings: string[][] = [
        ['title', page.title],
        ['shortTitle', page.shortTitle || ''],
        ['intro', page.intro || ''],
        ['markdown', page.markdown],
      ].filter(([, string]) => Boolean(string))

      for (const [where, string] of strings) {
        for (const version of pageVersions) {
          try {
            await engine.parseAndRender(string, buildRenderContext(languageCode, version))
          } catch (error) {
            if (error instanceof Error) {
              countError(error, where, page.relativePath, version)
            } else {
              throw error
            }
          }
        }
      }
    }

    for (const [relativePath, englishContent] of Array.from(englishReusables.entries())) {
      let correctedContent: string
      try {
        const filePath = path.join(language.dir, relativePath)
        const rawContent = fs.readFileSync(filePath, 'utf8')
        correctedContent = correctTranslatedContentStrings(rawContent, englishContent, {
          code: languageCode,
          relativePath,
        })
      } catch (error) {
        // Missing reusables are untranslated; other read or correction errors are corruptions.
        if (error instanceof Error) {
          if (!error.message.startsWith('ENOENT')) {
            countError(error, 'reusable', relativePath, versions[0])
          }
          continue
        }
        throw error
      }

      for (const version of versions) {
        try {
          await engine.parseAndRender(correctedContent, buildRenderContext(languageCode, version))
        } catch (error) {
          if (error instanceof Error) {
            countError(error, 'reusable', relativePath, version)
          } else {
            throw error
          }
        }
      }
    }

    const corruptions: CorruptionEntry[] = Array.from(byKey.values()).map(
      ({ versionSet, ...entry }) => ({ ...entry, versions: Array.from(versionSet).sort() }),
    )

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
  } finally {
    console.warn = originalWarn
  }
}
