// see also languages-schema.js
import dotenv from 'dotenv'

import { TRANSLATIONS_ROOT } from './constants.js'
import path from 'path'

dotenv.config()

const possibleEnvVars = {
  'es-ES': process.env.TRANSLATIONS_ROOT_ES_ES,
  'zh-CN': process.env.TRANSLATIONS_ROOT_ZH_CN,
  'ja-JP': process.env.TRANSLATIONS_ROOT_JA_JP,
  'pt-BR': process.env.TRANSLATIONS_ROOT_PT_BR,
  'ru-RU': process.env.TRANSLATIONS_ROOT_RU_RU,
}

function getRoot(languageCode) {
  if (languageCode === 'en') return ''
  if (languageCode in possibleEnvVars) {
    const possibleEnvVar = possibleEnvVars[languageCode]
    if (possibleEnvVar) {
      return possibleEnvVar
    }
  } else {
    console.warn(`Not recognized languageCode '${languageCode}'`)
  }
  // Default
  return path.join(TRANSLATIONS_ROOT, languageCode)
}
// 92BD1212-61B8-4E7A: Remove `wip: Boolean` for the public ship of ko, fr, de, ru
const languages = {
  en: {
    name: 'English',
    code: 'en',
    hreflang: 'en',
    dir: getRoot('en'),
    wip: false,
  },
  cn: {
    name: 'Simplified Chinese',
    nativeName: '简体中文',
    code: 'cn',
    hreflang: 'zh-Hans',
    redirectPatterns: [/^\/zh-\w{2}/, /^\/zh/],
    dir: getRoot('zh-CN'),
    wip: false,
  },
  ja: {
    name: 'Japanese',
    nativeName: '日本語',
    code: 'ja',
    hreflang: 'ja',
    redirectPatterns: [/^\/jp/],
    dir: getRoot('ja-JP'),
    wip: false,
  },
  es: {
    name: 'Spanish',
    nativeName: 'Español',
    code: 'es',
    hreflang: 'es',
    dir: getRoot('es-ES'),
    wip: false,
  },
  pt: {
    name: 'Portuguese',
    nativeName: 'Português do Brasil',
    code: 'pt',
    hreflang: 'pt',
    dir: getRoot('pt-BR'),
    wip: false,
  },
  ru: {
    name: 'Russian',
    nativeName: 'русский',
    code: 'ru',
    hreflang: 'ru',
    dir: getRoot('ru-RU'),
    wip: true,
  },
}

if (process.env.ENABLED_LANGUAGES) {
  Object.keys(languages).forEach((code) => {
    if (!process.env.ENABLED_LANGUAGES.includes(code)) delete languages[code]
  })
  console.log(`ENABLED_LANGUAGES: ${process.env.ENABLED_LANGUAGES}`)
}

export const languageKeys = Object.keys(languages)

export const languagePrefixPathRegex = new RegExp(`^/(${languageKeys.join('|')})(/|$)`)

/** Return true if the URL is something like /en/foo or /ja but return false
 * if it's something like /foo or /foo/bar or /fr (because French (fr)
 * is currently not an active language)
 */
export function pathLanguagePrefixed(path) {
  return languagePrefixPathRegex.test(path)
}

export default languages
