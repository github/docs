import languages, { languageKeys } from '../lib/languages.js'
import parser from 'accept-language-parser'

const chineseRegions = ['CN', 'HK']

// This value is replicated in two places! See <LanguagePicker/> component.
// Note, the only reason this is exported is to benefit the tests.
export const PREFERRED_LOCALE_COOKIE_NAME = 'preferredlang'

function translationExists(language) {
  if (language.code === 'zh') {
    return chineseRegions.includes(language.region)
  }
  return languageKeys.includes(language.code)
}

function getLanguageCode(language) {
  return language.code === 'zh' && chineseRegions.includes(language.region) ? 'cn' : language.code
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
  const value = req.cookies[PREFERRED_LOCALE_COOKIE_NAME]
  // But if it's a WIP language, reject it.
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
