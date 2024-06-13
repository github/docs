import type { NextFunction, Response } from 'express'
import { uniq } from 'lodash-es'

import type { ExtendedRequest } from '@/types'

export default function earlyAccessContext(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  // Use req.pagePath instead of req.path because req.path is the path
  // normalized after "converting" that `/_next/data/...` path to the
  // equivalent path if it had *not* been a client-side routing fetch.
  const url = req.pagePath!.split('/').slice(2)
  if (
    !(
      // Is it `/early-access` or `/enterprise-cloud@latest/early-access`?
      (
        (url.length === 2 && url[1] === 'early-access') ||
        (url.length === 1 && url[0] === 'early-access')
      )
    )
  ) {
    return next()
  }
  if (process.env.NODE_ENV !== 'development') {
    return next(404)
  }

  if (!req.context || !req.context.pages) throw new Error('request not contextualized')

  // Get a list of all hidden pages per version
  const earlyAccessPageLinks = uniq(
    Object.values(req.context.pages)
      .filter(
        (page) =>
          page.hidden &&
          page.relativePath.startsWith('early-access') &&
          !page.relativePath.endsWith('index.md'),
      )
      .map((page) => page.permalinks)
      .flat(),
  )
    // Get links for the current version
    .filter((permalink) => req.context!.currentVersion === permalink.pageVersion)
    .sort()
    // Create Markdown links
    .map((permalink) => `- [${permalink.title}](${permalink.href})`)

  // Add to the rendering context
  // This is only used in the separate EA repo on local development
  req.context.earlyAccessPageLinks = earlyAccessPageLinks.length
    ? earlyAccessPageLinks.join('\n')
    : '_None for this version!_'

  return next()
}
