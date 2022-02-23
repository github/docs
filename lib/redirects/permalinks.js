import { getVersionStringFromPath } from '../path-utils.js'
import nonEnterpriseDefaultVersion from '../non-enterprise-default-version.js'

export default function generateRedirectsForPermalinks(permalinks, redirectFrontmatter) {
  if (!Array.isArray(redirectFrontmatter)) {
    // TypeScript could have prevented this from ever happening.
    throw new Error(`redirectFrontmatter is supposed to be an array`)
  }

  const redirects = {}

  redirectFrontmatter.forEach((frontmatterOldPath) => {
    if (!frontmatterOldPath.startsWith('/')) {
      throw new Error(
        `'${frontmatterOldPath}' is not a valid redirect_from frontmatter value because it doesn't start with a /`
      )
    }
    permalinks.forEach((permalink) => {
      // Exceptions where the `redirect_from` entries are too old
      if (frontmatterOldPath.startsWith('/enterprise/admin/guides/')) {
        // Let's pretend we didn't see that.
        frontmatterOldPath = ('/' + frontmatterOldPath.split('/').slice(2).join('/')).replace(
          '/admin/guides/',
          '/admin/'
        )
      } else if (frontmatterOldPath.startsWith('/enterprise/')) {
        // Let's pretend we didn't see that.
        frontmatterOldPath = '/' + frontmatterOldPath.split('/').slice(2).join('/')
      }

      // We're only interested in the version string if it's a supported version.
      const ver = getVersionStringFromPath(permalink.hrefWithoutLanguage, true)
      // This tests if the permalink's version was free-pro-team.
      // If that's the case, put an entry into the `redirects` without
      // any version prefix.
      // Some pages don't have a version which means it's supported by all
      // versions (you'll find `versions: '*'` in frontmatter).
      // E.g. /en/get-started/learning-about-github
      if (!ver || ver === nonEnterpriseDefaultVersion) {
        redirects[frontmatterOldPath] = permalink.hrefWithoutLanguage
      } else if (ver) {
        redirects[`/${ver}${frontmatterOldPath}`] = permalink.hrefWithoutLanguage
      }
    })
  })

  return redirects
}
