import nonEnterpriseDefaultVersion from '#src/versions/lib/non-enterprise-default-version.js'
import { getPathWithoutVersion } from '#src/frame/lib/path-utils.js'

export default function permalinkRedirects(permalinks, redirectFrom) {
  const redirects = {}
  if (!permalinks.length) return redirects

  // The following is handling for versionless redirect fallbacks!
  // We put an entry into `redirects` without any version prefix that goes to the first supported
  // version in the lib/all-versions.js order. For example, we want this versionless path:
  //   /billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise
  // to redirect to its first supported version, which is GHEC:
  //   /enterprise-cloud@latest/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise
  if (permalinks[0].pageVersion !== nonEnterpriseDefaultVersion) {
    redirects[getPathWithoutVersion(permalinks[0].hrefWithoutLanguage)] =
      permalinks[0].hrefWithoutLanguage
  }

  // For every "old" path in a content file's redirect_from frontmatter, also add that path to
  // the redirects object as a key, where the value is the content file's permalink.
  redirectFrom.forEach((frontmatterOldPath) => {
    if (!frontmatterOldPath.startsWith('/')) {
      throw new Error(
        `'${frontmatterOldPath}' is not a valid redirect_from frontmatter value because it doesn't start with a /`,
      )
    }

    // Exceptions where the `redirect_from` entries are too old
    frontmatterOldPath = frontmatterOldPath
      .replace('/admin/guides/', '/admin/')
      .replace('/enterprise/', '/')

    permalinks.forEach((permalink, index) => {
      // For the first supported permalink (the order is determined by lib/all-versions),
      // put an entry into `redirects` without any version prefix.
      if (index === 0) {
        redirects[frontmatterOldPath] = permalink.hrefWithoutLanguage
      }

      // For every permalink, put an entry into `redirects` with the version prefix.
      redirects[`/${permalink.pageVersion}${frontmatterOldPath}`] = permalink.hrefWithoutLanguage
    })
  })

  return redirects
}
