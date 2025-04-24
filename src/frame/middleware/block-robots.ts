import type { Request, Response, NextFunction } from 'express'

import { productMap } from '@/products/lib/all-products.js'
import { deprecated } from '@/versions/lib/enterprise-server-releases.js'

const pathRegExps: RegExp[] = [
  // Disallow indexing of WIP products
  ...Object.values(productMap)
    .filter((product) => product.wip || product.hidden)
    .map((product) => [
      new RegExp(`^/.*?${product.href}`, 'i'),
      ...product.versions!.map((version) => new RegExp(`^/.*?${version}/${product.id}`, 'i')),
    ]),

  // Disallow indexing of deprecated enterprise versions
  ...deprecated.map((version) => [
    new RegExp(`^/.*?/enterprise-server@${version}/.*?`, 'i'),
    new RegExp(`^/.*?/enterprise/${version}/.*?`, 'i'),
  ]),
].flat()

export function blockIndex(path: string) {
  return pathRegExps.some((pathRe) => pathRe.test(path))
}

const middleware = function blockRobots(req: Request, res: Response, next: NextFunction) {
  if (blockIndex(req.path)) res.set('x-robots-tag', 'noindex')
  return next()
}

middleware.blockIndex = blockIndex

export default middleware
