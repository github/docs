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

  // Fragments do not affect page lookup.
  href = new URL(href, 'http://example.com').pathname

  const redirectsContext: Context = { redirects: redirects || {}, pages }

  const redirectedHref = getRedirect(href, redirectsContext)
  const page = pages[href] || (redirectedHref ? pages[redirectedHref] : undefined)
  if (page) return page

  const languageMatch = href.match(getLanguageCode)
  const currentLang = getLanguageCode.test(href) && languageMatch ? languageMatch[1] : 'en'

  // Missing translated pages fall back to English.
  const englishHref = href.replace(`/${currentLang}/`, '/en/')
  const redirectedEnglishHref = getRedirect(englishHref, redirectsContext)
  return pages[englishHref] || (redirectedEnglishHref ? pages[redirectedEnglishHref] : undefined)
}
