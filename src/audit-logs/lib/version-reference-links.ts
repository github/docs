import getRedirect from '@/redirects/lib/get-redirect'
import nonEnterpriseDefaultVersion from '@/versions/lib/non-enterprise-default-version'

import type { Context } from '@/types'

type Options = {
  language: string
  currentVersion: string
  hasPage: (href: string) => boolean
}

// Upstream reference links have no language or version, so readers on other versions
// would land on the default version. Links to pages missing from the current version
// stay unchanged so they still redirect to a version that has the page.
export function versionReferenceLinks(
  links: string,
  { language, currentVersion, hasPage }: Options,
): string {
  if (currentVersion === nonEnterpriseDefaultVersion) return links

  return links.replace(/[^,\s]+/g, (link) => {
    if (link === 'N/A' || link.startsWith('http')) return link
    const hashIndex = link.indexOf('#')
    const pathname = hashIndex === -1 ? link : link.slice(0, hashIndex)
    const hash = hashIndex === -1 ? '' : link.slice(hashIndex)
    const versioned = `/${language}/${currentVersion}${pathname.startsWith('/') ? '' : '/'}${pathname}`
    return hasPage(versioned) ? `${versioned}${hash}` : link
  })
}

// A redirect alias counts only when it resolves inside the current version, because a
// cross-version redirect would move the reader off their version anyway.
export function createHasPage(context: Context, language: string, currentVersion: string) {
  const pages = context.pages || {}
  const versionPrefix = `/${language}/${currentVersion}/`
  return (href: string) => {
    const target = href in pages ? href : getRedirect(href, context)
    return Boolean(target && target.startsWith(versionPrefix) && target in pages)
  }
}
