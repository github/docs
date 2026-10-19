import type { Request, Response, NextFunction } from 'express'
import { escapeRegExp } from 'lodash-es'

import { productMap } from '@/products/lib/all-products'
import { deprecated } from '@/versions/lib/enterprise-server-releases'

const pathRegExps: RegExp[] = [
  // WIP and hidden products stay out of search indexes.
  // Match whole segments so a hidden /search does not block /search-github or /rest/search.
  // A trailing .md matches too because Markdown responses have no robots meta tag.
  ...Object.values(productMap)
    .filter((product) => product.wip || product.hidden)
    .map((product) => [
      new RegExp(`^/[^/]+${escapeRegExp(product.href)}(/|\\.md$|$)`, 'i'),
      ...product.versions!.map(
        (version) =>
          new RegExp(
            `^/[^/]+/${escapeRegExp(version)}/${escapeRegExp(product.id)}(/|\\.md$|$)`,
            'i',
          ),
      ),
    ]),

  // Deprecated enterprise versions stay out of search indexes.
  ...deprecated.map((version) => [
    new RegExp(`^/.*?/enterprise-server@${version}/.*?`, 'i'),
    new RegExp(`^/.*?/enterprise/${version}/.*?`, 'i'),
  ]),
].flat()

export function blockIndex(path: string) {
  return pathRegExps.some((pathRe) => pathRe.test(path))
}

function middleware(req: Request, res: Response, next: NextFunction) {
  if (blockIndex(req.path)) res.set('x-robots-tag', 'noindex')
  return next()
}

middleware.blockIndex = blockIndex

export default middleware
