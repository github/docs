import type { Response, NextFunction } from 'express'

import type { ExtendedRequest, FeaturedLinkExpanded } from '@/types'
import getLinkData from '@/frame/lib/get-link-data'

/**
 * This is the max. number of featured links, by any category, that we
 * display on the product landing pages.
 * The reason it's variable is that some featured links are conditional.
 * For example:
 *
 *     '/authentication/troubleshooting-ssh',
 *     '/authentication/connecting-to-github-with...',
 *     '/authentication/connecting-to-github-with-ssh/a...',
 *     '{% ifversion ghec %}/authentication/connecting-to-...{% endif %}',
 *     '/authentication/managing-commit-signature-verif...'
 *
 * In this case, if we'd "prematurely" sliced that list to the first 4,
 * the final result might be 3 items because that conditional one
 * would end up being blank and thus omitted.
 *
 * The reason we don't want to display too many is because it might
 * make the product landing page columns that lists links far too
 * long ("high").
 */
const MAX_FEATURED_LINKS = 4

// this middleware adds properties to the context object
export default async function featuredLinks(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  if (!req.context) throw new Error('request is not contextualized')
  if (!req.context.page) return next()

  if (
    !(
      req.context.page.relativePath.endsWith('index.md') ||
      req.context.page.layout === 'product-landing'
    )
  )
    return next()

  if (!req.context.page.featuredLinks) return next()

  req.context.featuredLinks = {}
  for (const key in req.context.page.featuredLinks) {
    const pageFeaturedLink = req.context.page.featuredLinks[key]
    // Handle different types of featuredLinks by converting to string array
    const stringLinks = Array.isArray(pageFeaturedLink)
      ? pageFeaturedLink.map((item) => (typeof item === 'string' ? item : item.href))
      : []

    const linkData = await getLinkData(
      stringLinks,
      req.context,
      { title: true, intro: true, fullTitle: true },
      MAX_FEATURED_LINKS,
    )
    // We need to use a type assertion here because the Page interfaces are incompatible
    // between our local types and the global types, but the actual runtime objects are compatible
    req.context.featuredLinks[key] = (linkData || []) as unknown as FeaturedLinkExpanded[]
  }

  return next()
}
