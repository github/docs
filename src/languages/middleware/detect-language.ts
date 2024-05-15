import type { Request, Response, NextFunction } from 'express'
import parser from 'accept-language-parser'
import type { Language as parserLanguage } from 'accept-language-parser'

import languages, { languageKeys } from '@/languages/lib/languages.js'
import { USER_LANGUAGE_COOKIE_NAME } from '@/frame/lib/constants.js'
import type { ExtendedRequest, Languages } from '@/types'

const chineseRegions = [
  'CN', // Mainland
  'HK', // Hong Kong
  'SG', // Singapore
  'TW', // Taiwan
]

function translationExists(language: parserLanguage) {
  if (language.code === 'zh') {
    return language.region && chineseRegions.includes(language.region)
  }
  // 92BD1212-61B8-4E7A: Remove ` && !languages[language.code].wip` for the public ship of ko, fr, de, ru
  return languageKeys.includes(language.code) && !(languages as Languages)[language.code].wip
}

function getLanguageCode(language: parserLanguage) {
  return language.code === 'cn' && language.region && chineseRegions.includes(language.region)
    ? 'zh'
    : language.code
}

function getUserLanguage(browserLanguages: parserLanguage[]) {
  try {
    let numTopPreferences = 1
    for (let lang = 0; lang < browserLanguages.length; lang++) {
      // If language has multiple regions, Chrome adds the non-region language to list
      if (lang > 0 && browserLanguages[lang].code !== browserLanguages[lang - 1].code) {
        numTopPreferences++
      }
      if (translationExists(browserLanguages[lang]) && numTopPreferences < 3) {
        return getLanguageCode(browserLanguages[lang])
      }
    }
  } catch {
    return undefined
  }
}

function getUserLanguageFromCookie(req: Request) {
  const value: undefined | string = req.cookies[USER_LANGUAGE_COOKIE_NAME]

  // 92BD1212-61B8-4E7A: Remove ` && !languages[value].wip` for the public ship of ko, fr, de, ru
  if (value && (languages as Languages)[value] && !(languages as Languages)[value].wip) {
    return value
  }
}

// determine language code from a path. Default to en if no valid match
export function getLanguageCodeFromPath(path: string) {
  const maybeLanguage = (path.split('/')[path.startsWith('/_next/data/') ? 4 : 1] || '').slice(0, 2)
  return languageKeys.includes(maybeLanguage) ? maybeLanguage : 'en'
}

export function getLanguageCodeFromHeader(req: Request) {
  const browserLanguages = parser.parse(req.headers['accept-language'])
  return getUserLanguage(browserLanguages)
}

export default function detectLanguage(req: ExtendedRequest, res: Response, next: NextFunction) {
  req.language = getLanguageCodeFromPath(req.path)
  // Detecting browser language by user preference
  req.userLanguage = getUserLanguageFromCookie(req)
  if (!req.userLanguage) {
    req.userLanguage = getLanguageCodeFromHeader(req)
  }
  return next()
}
