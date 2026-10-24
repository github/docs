import type { Response, NextFunction } from 'express'

import type { ExtendedRequest } from '@/types'
import { renderContent } from '@/content-render/index'

export default async function renderProductName(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  if (!req.context) throw new Error('request is not contextualized')
  const { productMap, currentProduct } = req.context
  if (!productMap) throw new Error('request is not contextualized')

  // Empty currentProduct is valid.
  if (currentProduct === undefined) throw new Error('currentProduct is not contextualized')

  const productObject = productMap[currentProduct]
  if (!productObject) {
    // Skip unrecognized currentProduct values because renderContent needs a product object.
    return next()
  }
  req.context.currentProductName = await renderContent(productObject.name, req.context, {
    textOnly: true,
    cache: true,
  })
  return next()
}
