import { getLanguageCode } from './patterns.js'
import getRedirect from './get-redirect.js'

export default function findPage(href, pageMap, redirects) {
  // remove any fragments
  href = href.replace(/#.*$/, '')

  const redirectsContext = { redirects, pages: pageMap }

  // find the page
  const page = pageMap[href] || pageMap[getRedirect(href, redirectsContext)]
  if (page) return page

  // get the current language
  const currentLang = getLanguageCode.test(href) ? href.match(getLanguageCode)[1] : 'en'

  // try to fall back to English if the translated page can't be found
  const englishHref = href.replace(`/${currentLang}/`, '/en/')
  return pageMap[englishHref] || pageMap[getRedirect(englishHref, redirectsContext)]
}
