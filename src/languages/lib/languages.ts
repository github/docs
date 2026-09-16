// See also languages-schema.ts
// Nota bene: If you are adding a new language,
// change accept-language handling in CDN config as well.

/**
 * Client-safe language definitions without server-side dependencies.
 * For server-side usage with fs/path operations, import from './languages-server.ts'
 */

export type LanguageCode = 'en' | 'es' | 'ja' | 'pt' | 'zh' | 'ru' | 'fr' | 'ko' | 'de'
export type LocaleCode =
  | 'en'
  | 'es-es'
  | 'ja-jp'
  | 'pt-br'
  | 'zh-cn'
  | 'ru-ru'
  | 'fr-fr'
  | 'ko-kr'
  | 'de-de'

export interface Language {
  name: string
  nativeName?: string
  code: LanguageCode
  hreflang: string
  locale: LocaleCode
  redirectPatterns?: RegExp[]
  dir?: string
  // The earliest archived GHES version that includes this language.
  // Used to short-circuit requests for translations that don't exist
  // in a given archive. English is always available so it has no value.
  firstArchivedVersion?: string
}

export interface Languages {
  [code: string]: Language
}

// Languages in order of accept-language header frequency
// Note: 'dir' is omitted here as it requires server-side path resolution
export const languages: Languages = {
  en: {
    name: 'English',
    code: 'en',
    hreflang: 'en',
    locale: 'en',
  },
  es: {
    name: 'Spanish',
    nativeName: 'Español',
    code: 'es',
    hreflang: 'es',
    locale: 'es-es',
    firstArchivedVersion: '3.0',
  },
  ja: {
    name: 'Japanese',
    nativeName: '日本語',
    code: 'ja',
    hreflang: 'ja',
    redirectPatterns: [/^\/jp/],
    locale: 'ja-jp',
    firstArchivedVersion: '3.0',
  },
  pt: {
    name: 'Portuguese',
    nativeName: 'Português do Brasil',
    code: 'pt',
    hreflang: 'pt',
    redirectPatterns: [/^\/br/],
    locale: 'pt-br',
    firstArchivedVersion: '3.0',
  },
  zh: {
    name: 'Simplified Chinese',
    nativeName: '简体中文',
    code: 'zh',
    hreflang: 'zh-Hans',
    redirectPatterns: [/^\/cn/, /^\/zh-\w{2}/],
    locale: 'zh-cn',
    firstArchivedVersion: '3.3',
  },
  ru: {
    name: 'Russian',
    nativeName: 'Русский',
    code: 'ru',
    hreflang: 'ru',
    locale: 'ru-ru',
    firstArchivedVersion: '3.3',
  },
  fr: {
    name: 'French',
    nativeName: 'Français',
    code: 'fr',
    hreflang: 'fr',
    locale: 'fr-fr',
    firstArchivedVersion: '3.3',
  },
  ko: {
    name: 'Korean',
    nativeName: '한국어',
    code: 'ko',
    hreflang: 'ko',
    redirectPatterns: [/^\/kr/],
    locale: 'ko-kr',
    firstArchivedVersion: '3.3',
  },
  de: {
    name: 'German',
    nativeName: 'Deutsch',
    code: 'de',
    hreflang: 'de',
    locale: 'de-de',
    firstArchivedVersion: '3.3',
  },
}

Object.freeze(languages)
export const languageKeys: string[] = Object.keys(languages)
