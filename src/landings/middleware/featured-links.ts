import type { Response, NextFunction } from 'express'

import type { ExtendedRequest, FeaturedLinkExpanded } from '@/types'
import getLinkData from '@/frame/lib/get-link-data'

// getLinkData stops after MAX_FEATURED_LINKS resolved links, not frontmatter entries.
// For example, "{% ifversion ghec %}/authentication/troubleshooting-ssh{% endif %}"
// can render blank.
// That keeps a conditional entry that renders blank from leaving a category short,
// while still preventing landing-page columns from growing too tall.
const MAX_FEATURED_LINKS = 4

export default async function featuredLinks(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  if (!req.context) throw new Error('request is not contextualized')
  if (!req.context.page) return next()

  if (!req.context.page.relativePath.endsWith('index.md')) return next()

  if (!req.context.page.featuredLinks) return next()

  req.context.featuredLinks = {}
  for (const key in req.context.page.featuredLinks) {
    const pageFeaturedLink = req.context.page.featuredLinks[key]
    const stringLinks = Array.isArray(pageFeaturedLink)
      ? pageFeaturedLink.map((item) => (typeof item === 'string' ? item : item.href))
      : []

    const linkData = await getLinkData(
      stringLinks,
      req.context,
      { title: true, intro: true, fullTitle: true },
      MAX_FEATURED_LINKS,
    )
    // Local and global Page interfaces differ, but the runtime featured-link objects match.
    req.context.featuredLinks[key] = (linkData || []) as unknown as FeaturedLinkExpanded[]
  }

  return next()
}
