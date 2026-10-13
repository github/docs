import type { Response, NextFunction } from 'express'

import type { ExtendedRequest, TitlesTree } from '@/types'

export default function breadcrumbs(req: ExtendedRequest, res: Response, next: NextFunction) {
  if (!req.context) throw new Error('request is not contextualized')
  if (!req.context.page) return next()
  const isEarlyAccess = req.context.page.relativePath.startsWith('early-access')
  if (req.context.page.hidden && !isEarlyAccess) return next()

  req.context.breadcrumbs = []

  if (req.context.page.documentType === 'homepage') {
    return next()
  }

  req.context.breadcrumbs = getBreadcrumbs(req, isEarlyAccess)

  return next()
}

const earlyAccessExceptions = ['insights', 'enterprise-importer']

// For Early Access pages, getBreadcrumbs omits /early-access and the product segment.
// For example, /en/early-access/github/migrating starts at /migrating.
function getBreadcrumbs(req: ExtendedRequest, isEarlyAccess: boolean) {
  if (!req.context || !req.context.currentPath || !req.context.currentProductTreeTitles)
    throw new Error('request is not contextualized')
  let cutoff = 0
  if (isEarlyAccess) {
    const split = req.context.currentPath!.split('/')
    // insights and enterprise-importer Early Access URLs keep their product segment.
    if (earlyAccessExceptions.some((product) => split.includes(product))) {
      cutoff = 1
    } else {
      cutoff = 2
    }
  }

  const breadcrumbsResult = traverseTreeTitles(
    req.context.currentPath,
    req.context.currentProductTreeTitles,
  )
  for (let i = 0; i < cutoff; i++) {
    breadcrumbsResult.shift()
  }

  return breadcrumbsResult
}

// Example: /en/actions/learn-github-actions returns each matching ancestor and that page.
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
      break
    }
  }
  return crumbs
}

// Compare split paths so /foo/ba does not match /foo/baring.
function isParentOrEqualArray(base: string[], final: string[]) {
  return base.every((part, i) => part === final[i])
}
