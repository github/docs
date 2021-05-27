const languageCodes = Object.keys(require('../lib/languages'))

const codes = {
  zh: 'cn',
  'zh-hk': 'cn',
  'zh-cn': 'cn',
  'zh-sq': 'zh-SQ',
  'zh-tw': 'zh-TW'
}

function convertLanguageCode (language) {
  const languageLowerCase = language.toLowerCase()
  return codes[languageLowerCase] || languageLowerCase.substring(0, 2)
}

module.exports = function detectLanguage (req, res, next) {
  // determine language code from first part of URL, or default to English
  // /en/articles/foo
  //  ^^
  const firstPartOfPath = req.path.split('/')[1]

  req.language = languageCodes.includes(firstPartOfPath) ? firstPartOfPath : 'en'
  // Detecting browser language by user preference
  if (req.headers['accept-language']) {
    const browserLanguage = req.headers['accept-language'].split(/\s*[,;]\s*/, 1)[0]
    try {
      req.userLanguage = convertLanguageCode(browserLanguage)
    } catch (err) {
      console.log(err)
    }
  }

  return next()
}
