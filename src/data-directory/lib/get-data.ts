import fs from 'fs'
import path from 'path'

import { loadYaml } from '@/frame/lib/load-yaml'
import matter from '@gr2m/gray-matter'
import { merge, get } from 'lodash-es'

import languages from '@/languages/lib/languages-server'
import { correctTranslatedContentStrings } from '@/languages/lib/correct-translation-content'
import { createLogger } from '@/observability/logger'
import type { UIStrings } from '@/frame/components/context/MainContext'

const logger = createLogger(import.meta.url)

interface YAMLException extends Error {
  mark?: unknown
}

interface FileSystemError extends Error {
  code?: string
}

// Set DEBUG_JIT_DATA_READS=true to log every data file read from disk.
const DEBUG_JIT_DATA_READS = Boolean(JSON.parse(process.env.DEBUG_JIT_DATA_READS || 'false'))

// Product and Copilot paths belong in the English-only set; translations can change fixed names.
const ALWAYS_ENGLISH_YAML_FILES = new Set([
  'data/variables/product.yml',
  'data/variables/copilot.yml',
])
const ALWAYS_ENGLISH_MD_FILES = new Set([
  'data/reusables/ssh/fingerprints.md',
  'data/reusables/ssh/known_hosts.md',
])

export const getDeepDataByLanguage = memoize(
  (dottedPath: string, langCode: string, dir: string | null = null): Record<string, unknown> => {
    if (!(langCode in languages)) {
      throw new Error(`langCode '${langCode}' not a recognized language code`)
    }

    // Tests pass a fixture root because languages-server.ts captures directories when it loads.
    if (dir === null) {
      dir = languages[langCode].dir
    }
    return getDeepDataByDir(dottedPath, dir)
  },
)

// getDeepDataByLanguage caches each top-level path, so recursive reads need no extra cache.
function getDeepDataByDir(dottedPath: string, dir: string): Record<string, unknown> {
  const fullPath = ['data']
  const split = dottedPath.split(/\./g)
  fullPath.push(...split)

  const things: Record<string, unknown> = {}
  const relPath = fullPath.join(path.sep)
  for (const dirent of getDirents(dir, relPath)) {
    if (dirent.name === 'README.md') continue
    // Release-note basenames like '3-5' and '0-rc2' stay intact.
    const key = dirent.isDirectory() ? dirent.name : dirent.name.replace(/\.yml$/, '')
    if (dirent.isDirectory()) {
      things[key] = getDeepDataByDir(`${dottedPath}.${key}`, dir)
    } else if (dirent.name.endsWith('.yml')) {
      things[key] = getYamlContent(dir, path.join(relPath, dirent.name))
    } else if (dirent.name.endsWith('.md')) {
      things[key] = getMarkdownContent(dir, path.join(relPath, dirent.name))
    } else {
      throw new Error(`don't know how to read '${dirent.name}'`)
    }
  }
  return things
}

function getDirents(root: string, relPath: string): fs.Dirent[] {
  const filePath = root ? path.join(root, relPath) : relPath
  return fs.readdirSync(filePath, { withFileTypes: true })
}

export const getUIDataMerged = memoize((langCode: string): UIStrings => {
  const uiEnglish = getUIData('en')
  if (langCode === 'en') return uiEnglish as UIStrings
  // Merge translations over English so missing localized UI keys fall back to English.
  const combined: Record<string, unknown> = {}
  merge(combined, uiEnglish)
  merge(combined, getUIData(langCode))
  return combined as UIStrings
})

// getUIDataMerged memoizes results, so this reader needs no separate cache.
const getUIData = (langCode: string): Record<string, unknown> => {
  const fullPath = ['data', 'ui.yml']
  const { dir } = languages[langCode]
  return getYamlContent(dir, fullPath.join(path.sep)) as Record<string, unknown>
}

// When translated data misses a dotted path, retry English.
// lodash get returns undefined for the missing dotted path instead of ENOENT.
export const getDataByLanguage = memoize((dottedPath: string, langCode: string): unknown => {
  if (!(langCode in languages))
    throw new Error(`langCode '${langCode}' not a recognized language code`)
  const { dir } = languages[langCode]

  try {
    const value = getDataByDir(dottedPath, dir, languages.en.dir, langCode)

    if (value === undefined && langCode !== 'en') {
      return getDataByDir(dottedPath, languages.en.dir)
    }
    return value
  } catch (error) {
    if (error instanceof Error && (error as YAMLException).mark && error.message) {
      // Corrupt YAML files and Markdown frontmatter raise YAMLException, so translations fall back.
      if (langCode !== 'en') {
        if (DEBUG_JIT_DATA_READS) {
          logger.warn('Unable to parse Yaml in translation', { langCode, dottedPath, error })
        }
        return getDataByDir(dottedPath, languages.en.dir)
      }
      // Throw English YAML errors so staff writers see corrupt source data early.
      throw error
    }

    if ((error as FileSystemError).code === 'ENOENT') return undefined
    throw error
  }
})

// getSmartSplit preserves dotted path segments such as version-3.4.
// Release notes split normally because numeric paths such as 3-7/0.yml would combine incorrectly.
// getDataByDir keeps {% data early-access.reusables.foo.bar %} under data/early-access.
// That data lives at data/early-access/reusables/foo/bar.md.
function getDataByDir(
  dottedPath: string,
  dir: string,
  englishRoot?: string,
  langCode?: string,
): unknown {
  const fullPath = ['data']

  const split = dottedPath.startsWith('release-notes')
    ? dottedPath.split('.')
    : getSmartSplit(dottedPath)

  if (split[0] === 'early-access') {
    fullPath.push(split.shift()!)
  }
  const first = split[0]

  if (first === 'variables') {
    const key = split.pop()!
    const basename = split.pop()!
    fullPath.push(...split)
    fullPath.push(`${basename}.yml`)
    const allData = getYamlContent(dir, fullPath.join(path.sep), englishRoot) as
      | Record<string, unknown>
      | undefined
    if (allData && key) {
      const value = allData[key]
      if (value) {
        let content = matter(value as string).content
        if (dir !== englishRoot) {
          let englishContent = content
          try {
            const englishData = getYamlContent(
              englishRoot,
              fullPath.join(path.sep),
              englishRoot,
            ) as Record<string, unknown> | undefined
            if (englishData?.[key]) {
              englishContent = matter(englishData[key] as string).content
            }
          } catch (error) {
            if ((error as FileSystemError).code !== 'ENOENT') {
              throw error
            }
          }
          content = correctTranslatedContentStrings(content, englishContent, {
            dottedPath,
            code: langCode,
          })
        }
        return content
      }
    } else {
      logger.warn('Unable to find variables Yaml file', { filePath: fullPath.join(path.sep) })
    }
    return undefined
  }

  if (first === 'reusables') {
    const nakedname = split.pop()!
    fullPath.push(...split)
    fullPath.push(`${nakedname}.md`)
    const markdown = getMarkdownContent(dir, fullPath.join(path.sep), englishRoot)
    let { content } = matter(markdown)
    if (dir !== englishRoot) {
      // Translated reusables need English content to fix corruptions like [AUTOTITLE"을](/foo/bar).
      let englishContent = content
      try {
        englishContent = getMarkdownContent(englishRoot, fullPath.join(path.sep), englishRoot)
      } catch (error) {
        // Translated pages can reference reusables missing in English; other corrections still run.
        if ((error as FileSystemError).code !== 'ENOENT') {
          throw error
        }
      }
      content = correctTranslatedContentStrings(content, englishContent, {
        dottedPath,
        code: langCode,
      })
    }
    return content
  }

  // UI data references such as {% data ui.pages.foo.bar %} read from data/ui.yml.
  if (first === 'ui') {
    const basename = split.shift()
    fullPath.push(`${basename}.yml`)
    const allData = getYamlContent(dir, fullPath.join(path.sep), englishRoot)
    return get(allData, split.join('.'))
  }

  if (first === 'glossaries' || first === 'release-notes') {
    const basename = split.pop()!
    fullPath.push(...split)
    fullPath.push(`${basename}.yml`)
    return getYamlContent(dir, fullPath.join(path.sep), englishRoot)
  }

  throw new Error(`Can't find the key '${dottedPath}' in the scope.`)
}

function getSmartSplit(dottedPath: string): string[] {
  const split = dottedPath.split('.')
  const bits = []
  for (let i = 0, len = split.length; i < len; i++) {
    const bit = split[i]
    if (i === len - 1) {
      bits.push(bit)
    } else {
      const next = split[i + 1]
      if (/\d$/.test(bit) && /^\d/.test(next)) {
        bits.push([bit, next].join('.'))
        i++
      } else {
        bits.push(bit)
      }
    }
  }
  return bits
}

// getDataByLanguage caches each dotted key, but different keys can read the same YAML file.
// Cache YAML reads too, so product name variables share data/variables/product.yml.
const getYamlContent = memoize(
  (root: string | undefined, relPath: string, englishRoot?: string): unknown => {
    if (ALWAYS_ENGLISH_YAML_FILES.has(relPath)) {
      // Passing englishRoot prevents getFileContent from treating this as a translation fallback.
      root = englishRoot
    }
    const fileContent = getFileContent(root, relPath, englishRoot)
    return loadYaml(fileContent, { filename: relPath })
  },
)

// Cache Markdown reads too because different dotted keys can hit the same file.
const getMarkdownContent = memoize(
  (root: string | undefined, relPath: string, englishRoot?: string): string => {
    // SSH fingerprints and known_hosts contain facts, not prose, so they are meant to use English.
    if (ALWAYS_ENGLISH_MD_FILES.has(relPath)) {
      root = englishRoot
    }

    const fileContent = getFileContent(root, relPath, englishRoot)
    return matter(fileContent).content.trimEnd()
  },
)

const getFileContent = (
  root: string | undefined,
  relPath: string,
  englishRoot?: string,
): string => {
  const filePath = root ? path.join(root, relPath) : relPath
  if (DEBUG_JIT_DATA_READS) logger.info('READ', { filePath })
  try {
    return fs.readFileSync(filePath, 'utf-8')
  } catch (err) {
    if ((err as FileSystemError).code === 'ENOENT') {
      if (englishRoot && root !== englishRoot) {
        // Missing translated data falls back to English when an English root is available.
        return getFileContent(englishRoot, relPath, englishRoot)
      }
    }
    throw err
  }
}

// Development bypasses caching because repeated sync reads stay cheap enough for debugging.
// A benchmark sampled 10 common data files across 100 runs, with about 80% YAML files.
// Median sync reads took 0.5 ms per 10 files, or 2.1 ms per 10 files with YAML parsing.
function memoize<Args extends unknown[], Return>(
  func: (...args: Args) => Return,
): (...args: Args) => Return {
  const cache = new Map<string, Return>()
  return (...args: Args) => {
    if (process.env.NODE_ENV === 'development') {
      return func(...args)
    }

    const key = args.join(':')
    if (!cache.has(key)) {
      cache.set(key, func(...args))
    }
    return cache.get(key) as Return
  }
}
