import getApplicableVersions from '../../lib/get-applicable-versions.js'
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
    currentLanguage
  )
  req.context.productUserExamples = getProductExampleData(
    currentProduct,
    'user-examples',
    currentLanguage
  )

  const productCodeExamples = getProductExampleData(
    currentProduct,
    'code-examples',
    currentLanguage
  )

  // We currently only support versioning in code examples.
  // TODO support versioning across all example types.
  req.context.productCodeExamples =
    productCodeExamples &&
    productCodeExamples.filter((example) => {
      // If an example block does NOT contain the versions prop, assume it's available in all versions
      return (
        !example.versions ||
        getApplicableVersions(example.versions).includes(req.context.currentVersion)
      )
    })

  return next()
}
