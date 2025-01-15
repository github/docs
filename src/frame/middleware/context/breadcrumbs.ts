import type { Response, NextFunction } from 'express'

import type { ExtendedRequest, TitlesTree } from '@/types'

export default function breadcrumbs(req: ExtendedRequest, res: Response, next: NextFunction) {
  if (!req.context) throw new Error('request is not contextualized')
  if (!req.context.page) return next()
  const isEarlyAccess = req.context.page.relativePath.startsWith('early-access')
  if (req.context.page.hidden && !isEarlyAccess) return next()

  req.context.breadcrumbs = []

  // Return an empty array on the landing page.
  if (req.context.page.documentType === 'homepage') {
    return next()
  }

  req.context.breadcrumbs = getBreadcrumbs(req, isEarlyAccess)

  return next()
}

const earlyAccessExceptions = ['insights', 'enterprise-importer']

function getBreadcrumbs(req: ExtendedRequest, isEarlyAccess: boolean) {
  if (!req.context || !req.context.currentPath || !req.context.currentProductTreeTitles)
    throw new Error('request is not contextualized')
  let cutoff = 0
  // When in Early access docs consider the "root" be much higher.
  // E.g. /en/early-access/github/migrating/understanding/about
  // we only want it start at /migrating/understanding/about
  // Essentially, we're skipping "/early-access" and its first
  // top-level like "/github"
  if (isEarlyAccess) {
    const split = req.context.currentPath!.split('/')
    // There are a few exceptions to this rule for the
    // /{version}/early-access/<product-name>/... URLs because they're a
    // bit different.
    // If there are more known exceptions, add them to the array above.
    if (earlyAccessExceptions.some((product) => split.includes(product))) {
      cutoff = 1
    } else {
      cutoff = 2
    }
  }

  const breadcrumbs = traverseTreeTitles(
    req.context.currentPath,
    req.context.currentProductTreeTitles,
  )
  ;[...Array(cutoff)].forEach(() => breadcrumbs.shift())

  return breadcrumbs
}

// Return an array as if you'd traverse down a tree. Imagine a tree like
//
//            (root /)
//           /       \
//        (/foo)     (/bar)
//       /      \
//    (/foo/bar)  (/foo/buzz)
//
// If the "currentPath" is `/foo/buzz` what you want to return is:
//
//  [
//    {href: /, title: TITLE},
//    {href: /foo, title: TITLE}
//    {href: /foo/buzz, title: TITLE}
//  ]
//
function traverseTreeTitles(currentPath: string | string[], tree: TitlesTree) {
  const { href, title, shortTitle } = tree
  const crumbs = [
    {
      href,
      title: shortTitle || title,
    },
  ]
  const currentPathSplit: string[] = Array.isArray(currentPath)
    ? currentPath
    : currentPath.split('/')
  for (const child of tree.childPages) {
    if (isParentOrEqualArray(child.href.split('/'), currentPathSplit)) {
      crumbs.push(...traverseTreeTitles(currentPathSplit, child))
      // Only ever going down 1 of the children
      break
    }
  }
  return crumbs
}

// Return true if an array is part of another array or equal.
// Like `/foo/bar` is part of `/foo/bar/buzz`.
// But also include `/foo/bar/buzz`.
// Don't include `/foo/ba` if the final path is `/foo/baring`.
function isParentOrEqualArray(base: string[], final: string[]) {
  return base.every((part, i) => part === final[i])
}
