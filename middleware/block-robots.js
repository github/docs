import languages from '../lib/languages.js'
import { productMap } from '../lib/all-products.js'
import { deprecated } from '../lib/enterprise-server-releases.js'

const pathRegExps = [
  // Disallow indexing of WIP localized content
  ...Object.values(languages)
    .filter((language) => language.wip)
    .map((language) => new RegExp(`^/${language.code}(/.*)?$`, 'i')),

  // Disallow indexing of WIP products
  ...Object.values(productMap)
    .filter((product) => product.wip || product.hidden)
    .map((product) => [
      new RegExp(`^/.*?${product.href}`, 'i'),
      ...product.versions.map((version) => new RegExp(`^/.*?${version}/${product.id}`, 'i')),
    ]),

  // Disallow indexing of deprecated enterprise versions
  ...deprecated.map((version) => [
    new RegExp(`^/.*?/enterprise-server@${version}/.*?`, 'i'),
    new RegExp(`^/.*?/enterprise/${version}/.*?`, 'i'),
  ]),
].flat()

export function blockIndex(path) {
  return pathRegExps.some((pathRe) => pathRe.test(path))
}

const middleware = function blockRobots(req, res, next) {
  if (blockIndex(req.path)) res.set('x-robots-tag', 'noindex')
  return next()
}

middleware.blockIndex = blockIndex

export default middleware
