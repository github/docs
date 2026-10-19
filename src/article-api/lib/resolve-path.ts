import findPage from '@/frame/lib/find-page'
import { allVersionKeys } from '@/versions/lib/all-versions'
import type { Context, Page } from '@/types'

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
    if (page) {
      // Content-root candidates span every version, so drop pages the web page would omit.
      if (
        href.startsWith('/content/') &&
        context.currentVersion &&
        !page.applicableVersions?.includes(context.currentVersion)
      ) {
        return undefined
      }
      return page
    }
  }

  return undefined
}

// Yields candidate paths in priority order, so callers can stop at the first match.
function* candidates(href: string, lang: string, pathname: string) {
  const langPrefix = `/${lang}/`
  const cleanPathname = pathname.replace(/\/$/, '')

  // Children like /content/actions/workflows point at the content root, matching create-tree.ts.
  if (href.startsWith('/content/')) {
    const rest = href.slice('/content/'.length).replace(/\/$/, '')
    if (!rest) return
    yield `${langPrefix}${rest}`
    for (const version of allVersionKeys) {
      yield `${langPrefix}${version}/${rest}`
    }
    return
  }

  if (href.startsWith(langPrefix)) {
    yield href
  } else if (href.startsWith('/')) {
    yield `${cleanPathname}${href}`
    yield `${langPrefix.slice(0, -1)}${href}`
  } else {
    yield `${cleanPathname}/${href}`
    yield `${langPrefix}${href}`
  }

  // Enterprise-only pages can lack an FPT path, so try each version slug.
  const suffix = href.startsWith(langPrefix)
    ? href.slice(langPrefix.length).replace(/\/$/, '')
    : href.replace(/^\//, '').replace(/\/$/, '')
  if (suffix) {
    for (const version of allVersionKeys) {
      yield `${langPrefix}${version}/${suffix}`
    }
  }
}
