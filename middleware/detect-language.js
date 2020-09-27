const languageCodes = Object.keys(require('../lib/languages'))

// determine language code from first part of URL, or default to English
module.exports = async function detectLanguage (req, res, next) {
  // /en/articles/foo
  //  ^^
  const firstPartOfPath = req.path.split('/')[1]

  req.language = languageCodes.includes(firstPartOfPath) ? firstPartOfPath : 'en'

  return next()
}
