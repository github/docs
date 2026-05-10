import findPage from '@/frame/lib/find-page'
import { allVersionKeys } from '@/versions/lib/all-versions'
import type { Context, Page } from '@/types'

/**
 * Resolves an href to a Page object from the context.
 *
 * Normalizes various href formats (relative, absolute, with/without language
 * prefix) to canonical paths, then delegates to findPage for lookup with
 * redirect support and English fallback.
 */
export function resolvePath(
  href: string,
  languageCode: string,
  pathname: string,
  context: Context,
): Page | undefined {
  if (href.startsWith('http://') || href.startsWith('https://')) return undefined
  if (!context.pages) return undefined

  const { pages, redirects } = context

  for (const candidate of candidates(href, languageCode, pathname)) {
    const page =
      findPage(candidate, pages, redirects) ||
      findPage(candidate.replace(/\/?$/, '/'), pages, redirects)
    if (page) return page
  }

  return undefined
}

// Lazily yields candidate paths in priority order, stopping at first match.
function* candidates(href: string, lang: string, pathname: string) {
  const langPrefix = `/${lang}/`
  const cleanPathname = pathname.replace(/\/$/, '')

  if (href.startsWith(langPrefix)) {
    // Already has language prefix — use as-is
    yield href
  } else if (href.startsWith('/')) {
    // Leading slash without lang prefix — try relative to pathname first,
    // then as a direct path with lang prefix
    yield `${cleanPathname}${href}`
    yield `${langPrefix.slice(0, -1)}${href}`
  } else {
    // Relative path — try relative to pathname, then with lang prefix
    yield `${cleanPathname}/${href}`
    yield `${langPrefix}${href}`
  }

  // Versioned fallback: try inserting each version slug for
  // enterprise-only pages that don't exist on FPT.
  const suffix = href.startsWith(langPrefix)
    ? href.slice(langPrefix.length).replace(/\/$/, '')
    : href.replace(/^\//, '').replace(/\/$/, '')
  if (suffix) {
    for (const version of allVersionKeys) {
      yield `${langPrefix}${version}/${suffix}`
    }
  }
}
