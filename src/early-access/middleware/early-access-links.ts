import type { NextFunction, Response } from 'express'
import { uniq } from 'lodash-es'

import type { ExtendedRequest } from '@/types'

export default function earlyAccessContext(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  // handleNextDataPath sets converted routes in req.pagePath; req.path keeps the /_next/data URL.
  const url = req.pagePath!.split('/').slice(2)
  if (
    !(
      // Match /early-access and versioned /early-access routes.
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

  // Hidden early access pages don't appear in normal navigation, so list them here.
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
    .filter((permalink) => req.context!.currentVersion === permalink.pageVersion)
    .sort()
    .map((permalink) => `- [${permalink.title}](${permalink.href})`)

  // Only the separate early access repo reads this, in local development.
  req.context.earlyAccessPageLinks = earlyAccessPageLinks.length
    ? earlyAccessPageLinks.join('\n')
    : '_None for this version!_'

  return next()
}
