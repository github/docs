import libLanguages from '../lib/languages.js'
import parser from 'accept-language-parser'
const languageCodes = Object.keys(libLanguages)

const chineseRegions = ['CN', 'HK']

function translationExists(language) {
  if (language.code === 'zh') {
    return chineseRegions.includes(language.region)
  }
  return languageCodes.includes(language.code)
}

function getLanguageCode(language) {
  return language.code === 'zh' && chineseRegions.includes(language.region) ? 'cn' : language.code
}

function getUserLanguage(browserLanguages) {
  try {
    let userLanguage = getLanguageCode(browserLanguages[0])
    let numTopPreferences = 1
    for (let lang = 0; lang < browserLanguages.length; lang++) {
      // If language has multiple regions, Chrome adds the non-region language to list
      if (lang > 0 && browserLanguages[lang].code !== browserLanguages[lang - 1].code)
        numTopPreferences++
      if (translationExists(browserLanguages[lang]) && numTopPreferences < 3) {
        userLanguage = getLanguageCode(browserLanguages[lang])
        break
      }
    }
    return userLanguage
  } catch {
    return undefined
  }
}

export default function detectLanguage(req, res, next) {
  // determine language code from the URL, or default to English
  // /en/articles/foo
  //  ^^
  // /_next/data/development/en/articles/foo
  //                         ^^
  const maybeLanguage = req.path.split('/')[req.path.startsWith('/_next/data/') ? 4 : 1]

  req.language = languageCodes.includes(maybeLanguage) ? maybeLanguage : 'en'
  // Detecting browser language by user preference
  const browserLanguages = parser.parse(req.headers['accept-language'])
  req.userLanguage = getUserLanguage(browserLanguages)
  return next()
}
