import { readCompressedJsonFileFallback } from '@/frame/lib/read-json-file'
import getExceptionRedirects from './exception-redirects'
import { latest } from '@/versions/lib/enterprise-server-releases'

import type { Page } from '@/types'

const EXCEPTIONS_FILE = './src/redirects/lib/static/redirect-exceptions.txt'

type Redirects = Record<string, string>

// Server warmup precompiles redirect routes as oldPath to newPath pairs.
export async function precompileRedirects(pageList: Page[]): Promise<Redirects> {
  const allRedirects = readCompressedJsonFileFallback(
    './src/redirects/lib/static/developer.json',
  ) as Redirects

  const externalRedirects = readCompressedJsonFileFallback(
    './src/redirects/lib/external-sites.json',
  ) as Redirects
  Object.assign(allRedirects, externalRedirects)

  // Page permalinks and frontmatter redirects need backward-compatible paths.
  for (const page of pageList.filter((xpage) => xpage.languageCode === 'en')) {
    Object.assign(allRedirects, page.buildRedirects())
  }

  // Live page permalinks win over redirect_from entries that overlap older page versions.
  for (const page of pageList.filter((xpage) => xpage.languageCode === 'en')) {
    for (const permalink of page.permalinks) {
      delete allRedirects[permalink.hrefWithoutLanguage]
    }
  }

  // The plain text format keeps one destination URL next to its many redirect origins.
  const exceptions = getExceptionRedirects(EXCEPTIONS_FILE) as Redirects
  // Apply exceptions last so versioned paths override fallback order or target another page.
  Object.assign(allRedirects, exceptions)

  for (const [fromURI, toURI] of Object.entries(allRedirects)) {
    // Static redirects can name enterprise-server@latest, but 301 responses need a real version.
    if (toURI.includes('/enterprise-server@latest')) {
      allRedirects[fromURI] = toURI.replace(
        '/enterprise-server@latest',
        `/enterprise-server@${latest}`,
      )
    }
  }

  return allRedirects
}

export default precompileRedirects
