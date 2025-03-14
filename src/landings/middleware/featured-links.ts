import type { Response, NextFunction } from 'express'

import type { ExtendedRequest, FeaturedLinkExpanded } from '@/types'
import getLinkData from '@/learning-track/lib/get-link-data.js'
import { renderContent } from '@/content-render/index.js'

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
    if (key === 'videos') {
      // Videos are external URLs so don't run through getLinkData, they're
      // objects with title and href properties.
      // When the title contains Liquid versioning tags, it will be either
      // the provided string title or an empty title. When the title is empty,
      // it indicates the video is not versioned for the current version
      req.context.featuredLinks[key] = []
      if (!(key in req.context.page.featuredLinks))
        throw new Error('featureLinks key not found in Page')
      for (const featuredLink of req.context.page.featuredLinks[key]!) {
        const title = await renderContent(featuredLink.title, req.context, {
          textOnly: true,
        })
        const item = { title, href: featuredLink.href }

        if (item.title) {
          req.context.featuredLinks[key].push(item)
          if (req.context.featuredLinks[key].length >= MAX_FEATURED_LINKS) {
            break
          }
        }
      }
    } else {
      if (!(key in req.context.page.featuredLinks))
        throw new Error('featureLinks key not found in Page')
      const pageFeaturedLink = req.context.page.featuredLinks[key]
      req.context.featuredLinks[key] = (await getLinkData(
        pageFeaturedLink,
        req.context,
        { title: true, intro: true, fullTitle: true },
        MAX_FEATURED_LINKS,
      )) as FeaturedLinkExpanded[] // Remove ones `getLinkData` is TS
    }
  }

  return next()
}
