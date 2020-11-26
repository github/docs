const products = require('../lib/all-products')
const activeProducts = Object.values(products).filter(product => !product.wip)
const patterns = require('../lib/patterns')

module.exports = async (req, res, next) => {
  req.context.activeProducts = activeProducts

  if (req.path.match(patterns.admin)) {
    // special case for enterprise URLs which take many forms...
    req.context.currentProduct = products.enterpriseServer
  } else if (req.context.page) {
    // find current product by matching up starting file paths
    req.context.currentProduct = Object.values(products).find(product => `content/${req.context.page.relativePath}`.startsWith(product.dir))
  }

  // fall back to the GitHub.com product
  req.context.currentProduct = req.context.currentProduct || products.github

  return next()
}
