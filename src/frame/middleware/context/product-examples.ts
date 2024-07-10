import type { Response, NextFunction } from 'express'

import type { ExtendedRequest, ProductExample } from '@/types'
import { getDataByLanguage } from '@/data-directory/lib/get-data.js'

function getProductExampleData(
  product: string,
  key: string,
  language: string,
): ProductExample[] | undefined {
  // Because getDataByLanguage() depends on reading data files from
  // disk, asking for something that doesn't exist would throw a
  // `ENOENT` error from `fs.readFile` but we want that to default
  // to `undefined` because certain product's don't have all product
  // examples.
  try {
    return getDataByLanguage(`product-examples.${product}.${key}`, language)
  } catch (error) {
    if (error instanceof Error && (error as any).code === 'ENOENT') return
    throw error
  }
}

export default async function productExamples(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  if (!req.context) throw new Error('request is not contextualized')
  if (!req.context.page) return next()
  if (req.context.currentLayoutName !== 'product-landing') return next()

  const { currentProduct, currentLanguage } = req.context
  if (currentProduct === undefined) throw new Error('currentProduct is not set')
  if (currentLanguage === undefined) throw new Error('currentLanguage is not set')
  if (currentProduct.includes('.'))
    throw new Error(`currentProduct cannot contain a . (${currentProduct})`)

  req.context.productCommunityExamples = getProductExampleData(
    currentProduct,
    'community-examples',
    currentLanguage,
  )

  req.context.productUserExamples = getProductExampleData(
    currentProduct,
    'user-examples',
    currentLanguage,
  )

  return next()
}
