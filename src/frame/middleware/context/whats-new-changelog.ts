import type { Response, NextFunction } from 'express'

import { getChangelogItems } from '@/changelogs/lib/changelog.js'
import getApplicableVersions from '@/versions/lib/get-applicable-versions.js'
import type { ExtendedRequest } from '@/types'

export default async function whatsNewChangelog(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  if (!req.context) throw new Error('request not contextualized')
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

  const labelUrls: Record<string, string> = {
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
