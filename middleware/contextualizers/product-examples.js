import { getDataByLanguage } from '../../lib/get-data.js'

function getProductExampleData(product, key, language) {
  // Because getDataByLanguage() depends on reading data files from
  // disk, asking for something that doesn't exist would throw a
  // `ENOENT` error from `fs.readFile` but we want that to default
  // to `undefined` because certain product's don't have all product
  // examples.
  try {
    return getDataByLanguage(`product-examples.${product}.${key}`, language)
  } catch (error) {
    if (error.code === 'ENOENT') return
    throw error
  }
}

export default async function productExamples(req, res, next) {
  if (!req.context.page) return next()
  if (req.context.currentLayoutName !== 'product-landing') return next()

  const { currentProduct, currentLanguage } = req.context
  if (currentProduct.includes('.'))
    throw new Error(`currentProduct can not contain a . (${currentProduct})`)

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
