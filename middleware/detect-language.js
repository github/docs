const languageCodes = Object.keys(require('../lib/languages'))

const codes = {
  da: 'da',
  en: 'en',
  es: 'es',
  ja: 'ja',
  pt: 'pt',
  zh: 'cn'
}

function convertLanguageCode (language) {
  const code = language.substring(0, 2)
  return codes[code] || code
}

module.exports = function detectLanguage (req, res, next) {
  // determine language code from first part of URL, or default to English
  // /en/articles/foo
  //  ^^
  const firstPartOfPath = req.path.split('/')[1]

  req.language = languageCodes.includes(firstPartOfPath) ? firstPartOfPath : 'en'
  // Detecting browser language by user preference
  if (req.headers['accept-language']) {
    const browserLanguage = req.headers['accept-language'].split(',')[0]
    req.userLanguage = convertLanguageCode(browserLanguage)
  }

  return next()
}
