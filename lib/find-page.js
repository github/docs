import { getLanguageCode } from './patterns.js'
import getRedirect from './get-redirect.js'

export default function findPage(href, pages, redirects) {
  // remove any fragments
  href = new URL(href, 'http://example.com').pathname

  const redirectsContext = { redirects, pages }

  // find the page
  const page = pages[href] || pages[getRedirect(href, redirectsContext)]
  if (page) return page

  // get the current language
  const currentLang = getLanguageCode.test(href) ? href.match(getLanguageCode)[1] : 'en'

  // try to fall back to English if the translated page can't be found
  const englishHref = href.replace(`/${currentLang}/`, '/en/')
  return pages[englishHref] || pages[getRedirect(englishHref, redirectsContext)]
}
