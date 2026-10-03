import type { Response, NextFunction } from 'express'

import type { ExtendedRequest } from '@/types'
import { getProductGroups } from '@/products/lib/get-product-groups'
import warmServer from '@/frame/lib/warm-server'
import { languageKeys } from '@/languages/lib/languages-server'
import { allVersionKeys } from '@/versions/lib/all-versions'

const isHomepage = (path: string) => {
  const split = path.split('/')
  // Matches /en but not en/foo or /en/.
  if (split.length === 2 && split[1] && !split[0]) {
    return languageKeys.includes(split[1])
  }
  // Matches /en/free-pro-team@latest but not en/free-pro-team@latest or /en/actions/.
  if (split.length === 3 && !split[0] && split[2]) {
    return allVersionKeys.includes(split[2])
  }
  return false
}

// handleNextDataPath maps Next data URLs, such as /_next/data/development/en/actions.json,
// to normal page paths, so productGroups reads req.pagePath.
// It requires a valid currentVersionObj because ifversion Liquid in getProductGroups throws otherwise.
export default async function productGroups(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  if (!req.context) throw new Error('request is not contextualized')
  if (!req.pagePath) throw new Error('pagePath is not set on request')
  if (!req.language) throw new Error('language is not set on request')
  if (isHomepage(req.pagePath) && req.context.currentVersionObj) {
    const { pages } = await warmServer([])
    req.context.productGroups = await getProductGroups(pages, req.language, req.context)
  }

  return next()
}
