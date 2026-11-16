const DOCS_ORIGIN_REGEX = /^https?:\/\/docs\.github\.com\//
const ABSOLUTE_URL_REGEX = /^https?:\/\//

// Strip the docs origin and language so these links resolve like the site-relative ones.
export function normalizeReferenceLink(link: string): string {
  if (DOCS_ORIGIN_REGEX.test(link)) {
    const url = new URL(link)
    return `${url.pathname.replace(/^\/en(?=\/)/, '')}${url.search}${url.hash}`
  }
  if (ABSOLUTE_URL_REGEX.test(link)) return link
  return link.startsWith('/') ? link : `/${link}`
}
