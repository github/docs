const { set } = require('lodash')
const patterns = require('../lib/patterns')
const languages = require('../lib/languages')

module.exports = (req, res, next) => {
  // Skip asset paths
  if (patterns.assetPaths.test(req.path)) return next()

  const language = languages[req.language]

  // Set flag that enables `localization_complete` message for no-longer-WIP languages
  set(
    req.context,
    'site.data.ui.header.notices.flags.localization_complete',
    language.code !== 'en' && !language.wip
  )

  // Set flag that enables `localization_in_progress` message for WIP languages
  set(
    req.context,
    'site.data.ui.header.notices.flags.localization_in_progress',
    language.wip
  )

  const currentProduct = req.context.allProducts[req.context.currentProduct]

  // if this is the homepage and no product is chosen yet, return early
  if (!currentProduct) return next()

  // Set flag that enables `product_in_progress` message for WIP products
  set(
    req.context,
    'site.data.ui.header.notices.flags.product_in_progress',
    currentProduct.wip
  )

  return next()
}
