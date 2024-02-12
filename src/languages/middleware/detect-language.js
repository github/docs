import languages, { languageKeys } from '#src/languages/lib/languages.js'
import parser from 'accept-language-parser'

import { USER_LANGUAGE_COOKIE_NAME } from '../../../lib/constants.js'

const chineseRegions = [
  'CN', // Mainland
  'HK', // Hong Kong
  'SG', // Singapore
  'TW', // Taiwan
]

function translationExists(language) {
  if (language.code === 'zh') {
    return chineseRegions.includes(language.region)
  }
  // 92BD1212-61B8-4E7A: Remove ` && !languages[language.code].wip` for the public ship of ko, fr, de, ru
  return languageKeys.includes(language.code) && !languages[language.code].wip
}

function getLanguageCode(language) {
  return language.code === 'cn' && chineseRegions.includes(language.region) ? 'zh' : language.code
}

function getUserLanguage(browserLanguages) {
  try {
    let numTopPreferences = 1
    for (let lang = 0; lang < browserLanguages.length; lang++) {
      // If language has multiple regions, Chrome adds the non-region language to list
      if (lang > 0 && browserLanguages[lang].code !== browserLanguages[lang - 1].code)
        numTopPreferences++
      if (translationExists(browserLanguages[lang]) && numTopPreferences < 3) {
        return getLanguageCode(browserLanguages[lang])
      }
    }
  } catch {
    return undefined
  }
}

function getUserLanguageFromCookie(req) {
  const value = req.cookies[USER_LANGUAGE_COOKIE_NAME]
  // 92BD1212-61B8-4E7A: Remove ` && !languages[value].wip` for the public ship of ko, fr, de, ru
  if (value && languages[value] && !languages[value].wip) {
    return value
  }
}

// determine language code from a path. Default to en if no valid match
export function getLanguageCodeFromPath(path) {
  const maybeLanguage = (path.split('/')[path.startsWith('/_next/data/') ? 4 : 1] || '').slice(0, 2)
  return languageKeys.includes(maybeLanguage) ? maybeLanguage : 'en'
}

export function getLanguageCodeFromHeader(req) {
  const browserLanguages = parser.parse(req.headers['accept-language'])
  return getUserLanguage(browserLanguages)
}

export default function detectLanguage(req, res, next) {
  req.language = getLanguageCodeFromPath(req.path)
  // Detecting browser language by user preference
  req.userLanguage = getUserLanguageFromCookie(req)
  if (!req.userLanguage) {
    req.userLanguage = getLanguageCodeFromHeader(req)
  }
  return next()
}
