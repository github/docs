import type { Response, NextFunction } from 'express'

import type { ExtendedRequest } from '@/types'
import { renderContent } from '@/content-render/index.js'

export default async function renderProductName(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  if (!req.context) throw new Error('request is not contextualized')
  const { productMap, currentProduct } = req.context
  if (!productMap) throw new Error('request is not contextualized')

  // `currentProduct` might be an empty string, which is a valid value.
  if (currentProduct === undefined) throw new Error('currentProduct is not contextualized')

  const productObject = productMap[currentProduct]
  if (!productObject) {
    // If the "currentProduct" isn't recognized, there's no point trying
    // to render its name. Skip this middleware.
    return next()
  }
  req.context.currentProductName = await renderContent(productObject.name, req.context, {
    textOnly: true,
    cache: true,
  })
  return next()
}
