import type { LanguageItem } from '@/languages/components/LanguagesContext'

/**
 * Client-safe language data extracted from src/languages/lib/languages.ts.
 * Only used by frontend components.
 * Does not include server-side logic or Node.js-specific fs or path operations.
 */
export const clientLanguages: Record<string, LanguageItem> = {
  en: {
    name: 'English',
    code: 'en',
    nativeName: 'English',
    hreflang: 'en',
  },
  es: {
    name: 'Spanish',
    code: 'es',
    nativeName: 'Español',
    hreflang: 'es',
  },
  ja: {
    name: 'Japanese',
    code: 'ja',
    nativeName: '日本語',
    hreflang: 'ja',
  },
  pt: {
    name: 'Portuguese',
    code: 'pt',
    nativeName: 'Português do Brasil',
    hreflang: 'pt',
  },
  zh: {
    name: 'Simplified Chinese',
    code: 'zh',
    nativeName: '简体中文',
    hreflang: 'zh-Hans',
  },
  ru: {
    name: 'Russian',
    code: 'ru',
    nativeName: 'Русский',
    hreflang: 'ru',
  },
  fr: {
    name: 'French',
    code: 'fr',
    nativeName: 'Français',
    hreflang: 'fr',
  },
  ko: {
    name: 'Korean',
    code: 'ko',
    nativeName: '한국어',
    hreflang: 'ko',
  },
  de: {
    name: 'German',
    code: 'de',
    nativeName: 'Deutsch',
    hreflang: 'de',
  },
}

export const clientLanguageKeys: string[] = Object.keys(clientLanguages)

export type ClientLanguageCode = keyof typeof clientLanguages
