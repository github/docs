import type { Request, Response, NextFunction } from 'express'
import parser from 'accept-language-parser'
import type { Language as parserLanguage } from 'accept-language-parser'

import languages, { languageKeys } from '@/languages/lib/languages-server'
import { USER_LANGUAGE_COOKIE_NAME } from '@/frame/lib/constants'
import type { ExtendedRequest, Languages } from '@/types'
import { updateLoggerContext } from '@/observability/logger/lib/logger-context'

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

  return languageKeys.includes(language.code)
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
      // Chrome groups regional variants near their base language, so count adjacent code groups.
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

  if (value && (languages as Languages)[value]) {
    return value
  }
}

// Default paths to English when no URL prefix matches a valid language code.
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
  req.userLanguage = getUserLanguageFromCookie(req)
  if (!req.userLanguage) {
    req.userLanguage = getLanguageCodeFromHeader(req)
  }
  updateLoggerContext({
    language: req.language,
    userLanguage: req.userLanguage,
  })
  return next()
}
