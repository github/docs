import getApplicableVersions from '../../lib/get-applicable-versions.js'

export default async function productExamples(req, res, next) {
  if (!req.context.page) return next()
  if (req.context.currentLayoutName !== 'product-landing') return next()

  const productExamples = req.context.site.data['product-examples'][req.context.currentProduct]
  if (!productExamples) return next()

  req.context.productCommunityExamples = productExamples['community-examples']
  req.context.productUserExamples = productExamples['user-examples']

  // We currently only support versioning in code examples.
  // TODO support versioning across all example types.
  req.context.productCodeExamples =
    productExamples['code-examples'] &&
    productExamples['code-examples'].filter((example) => {
      // If an example block does NOT contain the versions prop, assume it's available in all versions
      return (
        !example.versions ||
        getApplicableVersions(example.versions).includes(req.context.currentVersion)
      )
    })

  return next()
}
