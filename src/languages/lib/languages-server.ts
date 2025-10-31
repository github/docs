/*
This file adds the following properties to languages in ./languages.ts:
- dir: string

This file will also remove languages for local development and tests
that have not be specified by ENABLED_LANGUAGES
*/

import path from 'path'
import fs from 'fs'
import dotenv from 'dotenv'

import { ROOT, TRANSLATIONS_ROOT, TRANSLATIONS_FIXTURE_ROOT } from '@/frame/lib/constants'
import { languages as baseLanguages, type Language as BaseLanguage } from './languages'

dotenv.config({ quiet: true })

// Server-side language extends base language with required dir property
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

// Build server languages with directory paths
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
  Object.entries(languages).forEach(([code, { dir }]) => {
    if (code !== 'en' && !fs.existsSync(dir)) {
      delete languages[code]
    }
  })
} else if (process.env.ENABLED_LANGUAGES) {
  if (process.env.ENABLED_LANGUAGES.toLowerCase() !== 'all') {
    Object.keys(languages).forEach((code) => {
      if (!process.env.ENABLED_LANGUAGES!.includes(code)) {
        delete languages[code]
      }
    })
    // This makes the translation health report not valid JSON
    // console.log(`ENABLED_LANGUAGES: ${process.env.ENABLED_LANGUAGES}`)
  }
} else if (process.env.NODE_ENV === 'test') {
  // Unless explicitly set, when running tests default to just English
  Object.keys(languages).forEach((code) => {
    if (code !== 'en') delete languages[code]
  })
}

export const languageKeys: string[] = Object.keys(languages)

export const languagePrefixPathRegex: RegExp = new RegExp(`^/(${languageKeys.join('|')})(/|$)`)

/** Return true if the URL is something like /en/foo or /ja but return false
 * if it's something like /foo or /foo/bar or /fr (because French (fr)
 * is currently not an active language)
 */
export function pathLanguagePrefixed(urlPath: string): boolean {
  return languagePrefixPathRegex.test(urlPath)
}

export default languages
