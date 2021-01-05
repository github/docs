const languages = require('../lib/languages')
const products = require('../lib/all-products')
const { deprecated } = require('../lib/enterprise-server-releases.js')

const pathRegExps = [
  // Disallow indexing of WIP localized content
  ...Object.values(languages)
    .filter(language => language.wip)
    .map(language => new RegExp(`^/${language.code}(/.*)?$`, 'i')),

  // Disallow indexing of WIP products
  ...Object.values(products)
    .filter(product => product.wip || product.hidden)
    .map(product => [
      new RegExp(`^/.*?${product.href}`, 'i'),
      ...product.versions.map(
        version => new RegExp(`^/.*?${version}/${product.id}`, 'i')
      )
    ]),

  // Disallow indexing of deprecated enterprise versions
  ...deprecated
    .map(version => [
      new RegExp(`^/.*?/enterprise-server@${version}/.*?`, 'i'),
      new RegExp(`^/.*?/enterprise/${version}/.*?`, 'i')
    ])
].flat()

function blockIndex (path) {
  return pathRegExps.some(pathRe => pathRe.test(path))
}

const middleware = (req, res, next) => {
  if (blockIndex(req.path)) res.set('x-robots-tag', 'noindex')
  return next()
}

middleware.blockIndex = blockIndex

module.exports = middleware
