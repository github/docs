import { getLanguageCode } from '@/frame/lib/patterns'
import getRedirect from '@/redirects/lib/get-redirect'
import type { Context, Page } from '@/types'

export default function findPage(
  href: string,
  pages: Record<string, Page> | undefined,
  redirects: Record<string, string> | undefined,
): Page | undefined {
  if (Array.isArray(pages)) throw new Error("'pages' is not supposed to be an array")
  if (pages === undefined) return undefined

  // remove any fragments
  href = new URL(href, 'http://example.com').pathname

  const redirectsContext: Context = { redirects: redirects || {}, pages }

  // find the page
  const redirectedHref = getRedirect(href, redirectsContext)
  const page = pages[href] || (redirectedHref ? pages[redirectedHref] : undefined)
  if (page) return page

  // get the current language
  const languageMatch = href.match(getLanguageCode)
  const currentLang = getLanguageCode.test(href) && languageMatch ? languageMatch[1] : 'en'

  // try to fall back to English if the translated page can't be found
  const englishHref = href.replace(`/${currentLang}/`, '/en/')
  const redirectedEnglishHref = getRedirect(englishHref, redirectsContext)
  return pages[englishHref] || (redirectedEnglishHref ? pages[redirectedEnglishHref] : undefined)
}
