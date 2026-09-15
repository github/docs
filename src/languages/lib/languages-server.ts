// Adds a `dir` property to each language in ./languages.ts.
//
// Also narrows the set of languages, in this order: to whatever has a
// directory under TRANSLATIONS_FIXTURE_ROOT, else to ENABLED_LANGUAGES, else
// to English alone when NODE_ENV is 'test'.

import path from 'path'
import fs from 'fs'
import dotenv from 'dotenv'

import { ROOT, TRANSLATIONS_ROOT, TRANSLATIONS_FIXTURE_ROOT } from '@/frame/lib/constants'
import { languages as baseLanguages, type Language as BaseLanguage } from './languages'

dotenv.config({ quiet: true })

export interface Language extends BaseLanguage {
  dir: string
}

export interface Languages {
  [code: string]: Language
}

function getRoot(languageCode: string): string {
  if (languageCode === 'en') return ROOT

  // This one trumps anything else. This makes it possible, and convenient,
  // for running tests that depends on testing translations based on
  // fixtures exclusively.
  if (TRANSLATIONS_FIXTURE_ROOT) {
    return path.join(TRANSLATIONS_FIXTURE_ROOT, languageCode)
  }

  // example: process.env.TRANSLATIONS_ROOT_ES_ES
  const possibleEnvVar =
    process.env[`TRANSLATIONS_ROOT_${languageCode.toUpperCase().replace(/-/g, '_')}`]
  if (possibleEnvVar) {
    return possibleEnvVar
  }

  // Default
  return path.join(TRANSLATIONS_ROOT, languageCode)
}

const allLanguagesWithDirs: Languages = {}
for (const [code, lang] of Object.entries(baseLanguages)) {
  allLanguagesWithDirs[code] = {
    ...lang,
    dir: getRoot(lang.locale || code),
  }
}

Object.freeze(allLanguagesWithDirs)

const languages: Languages = { ...allLanguagesWithDirs }

if (TRANSLATIONS_FIXTURE_ROOT) {
  // Keep all languages that have a directory in the fixture root.
  for (const [code, { dir }] of Object.entries(languages)) {
    if (code !== 'en' && !fs.existsSync(dir)) {
      delete languages[code]
    }
  }
} else if (process.env.ENABLED_LANGUAGES) {
  if (process.env.ENABLED_LANGUAGES.toLowerCase() !== 'all') {
    for (const code of Object.keys(languages)) {
      if (!process.env.ENABLED_LANGUAGES!.includes(code)) {
        delete languages[code]
      }
    }
    // This makes the translation health report not valid JSON
    // console.log(`ENABLED_LANGUAGES: ${process.env.ENABLED_LANGUAGES}`)
  }
} else if (process.env.NODE_ENV === 'test') {
  // Unless explicitly set, when running tests default to just English
  for (const code of Object.keys(languages)) {
    if (code !== 'en') delete languages[code]
  }
}

export const languageKeys: string[] = Object.keys(languages)

export const languagePrefixPathRegex: RegExp = new RegExp(`^/(${languageKeys.join('|')})(/|$)`)

/** Return true if the URL starts with a currently active language code, e.g.
 * /en/foo or /ja. Returns false for /foo or /foo/bar. Which codes count as
 * active depends on TRANSLATIONS_FIXTURE_ROOT, ENABLED_LANGUAGES, and
 * NODE_ENV, so this varies between production, local dev, and tests.
 */
export function pathLanguagePrefixed(urlPath: string): boolean {
  return languagePrefixPathRegex.test(urlPath)
}

export default languages
