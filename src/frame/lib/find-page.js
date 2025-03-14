import { getLanguageCode } from './patterns.js'
import getRedirect from '#src/redirects/lib/get-redirect.js'

export default function findPage(href, pages, redirects) {
  if (Array.isArray(pages)) throw new Error("'pages' is not supposed to be an array")
  if (pages === undefined) throw new Error("'pages' cannot be undefined")

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
