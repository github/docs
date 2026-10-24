import { getLanguageCode } from '@/frame/lib/patterns'
import getRedirect, { splitPathByLanguage } from '@/redirects/lib/get-redirect'
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

  // Missing translated pages and hrefs without a language prefix fall back to English.
  const [, withoutLanguage] = splitPathByLanguage(href)
  const englishHrefs = new Set([withoutLanguage === '/' ? '/en' : `/en${withoutLanguage}`])
  // Also strip any two-letter prefix, such as a language not enabled here.
  const languageMatch = href.match(getLanguageCode)
  if (languageMatch) englishHrefs.add(`/en${href.slice(languageMatch[0].length)}`)

  for (const englishHref of englishHrefs) {
    const redirectedEnglishHref = getRedirect(englishHref, redirectsContext)
    const englishPage =
      pages[englishHref] || (redirectedEnglishHref ? pages[redirectedEnglishHref] : undefined)
    if (englishPage) return englishPage
  }
  return undefined
}
