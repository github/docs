// See also languages-schema.js
// Nota bene: If you are adding a new language,
// change accept-language handling in CDN config as well.
import path from 'path'
import fs from 'fs'

import dotenv from 'dotenv'

import { ROOT, TRANSLATIONS_ROOT, TRANSLATIONS_FIXTURE_ROOT } from '@/frame/lib/constants'

dotenv.config({ quiet: true })

export interface Language {
  name: string
  nativeName?: string
  code: string
  hreflang: string
  redirectPatterns?: RegExp[]
  dir: string
}

export type LanguageCode = 'en' | 'es' | 'ja' | 'pt' | 'zh' | 'ru' | 'fr' | 'ko' | 'de'
export type LocaleCode =
  | 'es-es'
  | 'ja-jp'
  | 'pt-br'
  | 'zh-cn'
  | 'ru-ru'
  | 'fr-fr'
  | 'ko-kr'
  | 'de-de'

export interface Languages {
  [code: string]: Language
}

const possibleEnvVars: Record<LocaleCode, string | undefined> = {
  'es-es': process.env.TRANSLATIONS_ROOT_ES_ES,
  'ja-jp': process.env.TRANSLATIONS_ROOT_JA_JP,
  'pt-br': process.env.TRANSLATIONS_ROOT_PT_BR,
  'zh-cn': process.env.TRANSLATIONS_ROOT_ZH_CN,
  'ru-ru': process.env.TRANSLATIONS_ROOT_RU_RU,
  'fr-fr': process.env.TRANSLATIONS_ROOT_FR_FR,
  'ko-kr': process.env.TRANSLATIONS_ROOT_KO_KR,
  'de-de': process.env.TRANSLATIONS_ROOT_DE_DE,
}

function getRoot(languageCode: string): string {
  if (languageCode === 'en') return ROOT

  // This one trumps anything else. This makes it possible, and convenient,
  // for running tests that depends on testing translations based on
  // fixtures exclusively.
  if (TRANSLATIONS_FIXTURE_ROOT) {
    return path.join(TRANSLATIONS_FIXTURE_ROOT, languageCode)
  }

  if (languageCode in possibleEnvVars) {
    const possibleEnvVar = possibleEnvVars[languageCode as LocaleCode]
    if (possibleEnvVar) {
      return possibleEnvVar
    }
  } else {
    console.warn(`Not recognized languageCode '${languageCode}'`)
  }
  // Default
  return path.join(TRANSLATIONS_ROOT, languageCode)
}

// Languages in order of accept-language header frequency
const allLanguages: Languages = {
  en: {
    name: 'English',
    code: 'en',
    hreflang: 'en',
    dir: getRoot('en'),
  },
  es: {
    name: 'Spanish',
    nativeName: 'Español',
    code: 'es',
    hreflang: 'es',
    dir: getRoot('es-es'),
  },
  ja: {
    name: 'Japanese',
    nativeName: '日本語',
    code: 'ja',
    hreflang: 'ja',
    redirectPatterns: [/^\/jp/],
    dir: getRoot('ja-jp'),
  },
  pt: {
    name: 'Portuguese',
    nativeName: 'Português do Brasil',
    code: 'pt',
    hreflang: 'pt',
    redirectPatterns: [/^\/br/],
    dir: getRoot('pt-br'),
  },
  zh: {
    name: 'Simplified Chinese',
    nativeName: '简体中文',
    code: 'zh',
    hreflang: 'zh-Hans',
    redirectPatterns: [/^\/cn/, /^\/zh-\w{2}/],
    dir: getRoot('zh-cn'),
  },
  ru: {
    name: 'Russian',
    nativeName: 'Русский',
    code: 'ru',
    hreflang: 'ru',
    dir: getRoot('ru-ru'),
  },
  fr: {
    name: 'French',
    nativeName: 'Français',
    code: 'fr',
    hreflang: 'fr',
    dir: getRoot('fr-fr'),
  },
  ko: {
    name: 'Korean',
    nativeName: '한국어',
    code: 'ko',
    hreflang: 'ko',
    redirectPatterns: [/^\/kr/],
    dir: getRoot('ko-kr'),
  },
  de: {
    name: 'German',
    nativeName: 'Deutsch',
    code: 'de',
    hreflang: 'de',
    dir: getRoot('de-de'),
  },
}

// Some markdownlint tests depend on having access to all
// language keys. Not modifying the original object makes
// it possible to export all keys, even when those directories
// don't exist on disk.
Object.freeze(allLanguages)
export const allLanguageKeys: string[] = Object.keys(allLanguages)
const languages: Languages = { ...allLanguages }

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
export function pathLanguagePrefixed(path: string): boolean {
  return languagePrefixPathRegex.test(path)
}

export default languages
