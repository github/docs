const { getLanguageCode } = require('./patterns')

module.exports = function findPage (href, pageMap, redirects) {
  // remove any fragments
  href = href.replace(/#.*$/, '')

  // find the page
  const page = pageMap[href] || pageMap[redirects[href]]
  if (page) return page

  // get the current language
  const currentLang = getLanguageCode.test(href) ? href.match(getLanguageCode)[1] : 'en'

  // try to fall back to English if the translated page can't be found
  const englishHref = href.replace(`/${currentLang}/`, '/en/')
  return pageMap[englishHref] || pageMap[redirects[englishHref]]
}
