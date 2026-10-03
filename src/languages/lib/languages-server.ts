// Server-side language definitions add resolved translation directories to
// client-safe metadata. Fixture mode keeps English on ROOT, then keeps
// non-English languages with a directory under TRANSLATIONS_FIXTURE_ROOT. Otherwise,
// ENABLED_LANGUAGES narrows the set when set, else NODE_ENV=test falls back to English alone.

import path from 'path'
import fs from 'fs'
import dotenv from 'dotenv'

import { ROOT, TRANSLATIONS_ROOT, TRANSLATIONS_FIXTURE_ROOT } from '@/frame/lib/constants'
import { languages as baseLanguages, type Language as BaseLanguage } from './languages'

dotenv.config({ quiet: true })

// Read this after dotenv.config(). The TRANSLATIONS_ROOT constant is set when
// constants.ts loads, which happens before this file calls dotenv.config(), so
// the constant misses a value from .env.
const translationsRoot = process.env.TRANSLATIONS_ROOT || TRANSLATIONS_ROOT

export interface Language extends BaseLanguage {
  dir: string
}

export interface Languages {
  [code: string]: Language
}

function getRoot(languageCode: string): string {
  if (languageCode === 'en') return ROOT

  // TRANSLATIONS_FIXTURE_ROOT wins so tests can use fixture translations only.
  if (TRANSLATIONS_FIXTURE_ROOT) {
    return path.join(TRANSLATIONS_FIXTURE_ROOT, languageCode)
  }

  // Example env var: TRANSLATIONS_ROOT_ES_ES
  const possibleEnvVar =
    process.env[`TRANSLATIONS_ROOT_${languageCode.toUpperCase().replace(/-/g, '_')}`]
  if (possibleEnvVar) {
    return possibleEnvVar
  }

  return path.join(translationsRoot, languageCode)
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
  }
} else if (process.env.NODE_ENV === 'test') {
  // Unless explicitly set, when running tests default to just English
  for (const code of Object.keys(languages)) {
    if (code !== 'en') delete languages[code]
  }
}

export const languageKeys: string[] = Object.keys(languages)

export const languagePrefixPathRegex: RegExp = new RegExp(`^/(${languageKeys.join('|')})(/|$)`)

// True for /en/foo or /ja, false for /foo. Active language codes depend on
// TRANSLATIONS_FIXTURE_ROOT, ENABLED_LANGUAGES, and NODE_ENV, so results vary
// between production, local dev, and tests.
export function pathLanguagePrefixed(urlPath: string): boolean {
  return languagePrefixPathRegex.test(urlPath)
}

export default languages
