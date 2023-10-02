import { getChangelogItems } from '../../lib/changelog.js'
import getApplicableVersions from '#src/versions/lib/get-applicable-versions.js'

export default async function whatsNewChangelog(req, res, next) {
  if (!req.context.page) return next()
  if (!req.context.page.changelog) return next()
  const label = req.context.page.changelog.label.split(/\s+/g).join('')

  // If there is no `versions` prop in the changelog frontmatter, assume the changelog should display in all versions.
  if (req.context.page.changelog.versions) {
    const changelogVersions = getApplicableVersions(req.context.page.changelog.versions)

    // If the current version is not included, do not display a changelog.
    if (!changelogVersions.includes(req.context.currentVersion)) {
      return next()
    }
  }

  const labelUrls = {
    education: 'https://github.blog/category/community/education',
    enterprise: 'https://github.blog/category/enterprise/',
  }

  req.context.changelogUrl = labelUrls[label] || `https://github.blog/changelog/label/${label}`

  req.context.whatsNewChangelog = await getChangelogItems(
    req.context.page.changelog.prefix,
    req.context.changelogUrl,
  )
  return next()
}
