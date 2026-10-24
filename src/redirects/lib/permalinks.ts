import nonEnterpriseDefaultVersion from '@/versions/lib/non-enterprise-default-version'
import { getPathWithoutVersion } from '@/frame/lib/path-utils'

import type { Permalink } from '@/types'

type Redirects = Record<string, string>

// Versionless redirect fallbacks use the first supported version in lib/all-versions.ts order.
// Input: /billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise
// Output:
// /enterprise-cloud@latest/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise
export default function permalinkRedirects(
  permalinks: Permalink[],
  redirectFrom: string[],
): Redirects {
  const redirects: Redirects = {}
  if (!permalinks.length) return redirects

  if (permalinks[0].pageVersion !== nonEnterpriseDefaultVersion) {
    redirects[getPathWithoutVersion(permalinks[0].hrefWithoutLanguage)] =
      permalinks[0].hrefWithoutLanguage
  }

  // redirect_from entries need both versionless and version-prefixed redirect keys.
  for (let frontmatterOldPath of redirectFrom) {
    if (!frontmatterOldPath.startsWith('/')) {
      throw new Error(
        `'${frontmatterOldPath}' is not a valid redirect_from frontmatter value because it doesn't start with a /`,
      )
    }

    // Collapse /admin/guides/ and leading /enterprise/admin/, but preserve nested /enterprise/.
    frontmatterOldPath = frontmatterOldPath
      .replace('/admin/guides/', '/admin/')
      .replace(/^\/enterprise\/admin\//, '/admin/')

    for (let index = 0; index < permalinks.length; index++) {
      const permalink = permalinks[index]
      // Versionless frontmatter redirects use the first supported permalink.
      if (index === 0) {
        redirects[frontmatterOldPath] = permalink.hrefWithoutLanguage
      }

      redirects[`/${permalink.pageVersion}${frontmatterOldPath}`] = permalink.hrefWithoutLanguage
    }
  }

  return redirects
}
