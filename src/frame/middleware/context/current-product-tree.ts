import path from 'path'

import type { Response, NextFunction } from 'express'

import type { ExtendedRequest, TitlesTree, Tree, Context } from '@/types'
import { liquid } from '@/content-render/index'
import findPageInSiteTree from '@/frame/lib/find-page-in-site-tree'
import removeFPTFromPath from '@/versions/lib/remove-fpt-from-path'
import { executeWithFallback } from '@/languages/lib/render-with-fallback'

export default async function currentProductTree(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  if (!req.context) throw new Error('request not contextualized')
  if (!req.context.page) return next()
  if (req.context.page.documentType === 'homepage') return next()

  // Keep the English tree available because localized pages can lag behind it.
  if (!req.context.siteTree) throw new Error('siteTree is required')
  if (!req.context.currentVersion) throw new Error('currentVersion is required')
  req.context.currentEnglishTree = req.context.siteTree.en[req.context.currentVersion]

  if (!req.context.currentLanguage) throw new Error('currentLanguage is required')
  if (!req.context.currentProduct) throw new Error('currentProduct is required')
  const currentRootTree =
    req.context.siteTree[req.context.currentLanguage][req.context.currentVersion]
  const currentProductPath = removeFPTFromPath(
    path.posix.join(
      '/',
      req.context.currentLanguage,
      req.context.currentVersion,
      req.context.currentProduct,
    ),
  )
  req.context.currentProductTree = findPageInSiteTree(
    currentRootTree,
    req.context.currentEnglishTree,
    currentProductPath,
  )

  // currentProductTreeTitles keeps href, title, shortTitle, documentType, and childPages.
  req.context.currentProductTreeTitles = await getCurrentProductTreeTitles(
    req.context.currentProductTree,
    req.context,
  )
  // Sidebar data excludes hidden pages.
  req.context.currentProductTreeTitlesExcludeHidden = excludeHidden(
    req.context.currentProductTreeTitles,
  )

  // Hidden pages leave sidebarTree unset because excludeHidden returns null for the root.
  if (req.context.currentProductTreeTitlesExcludeHidden) {
    req.context.sidebarTree = sidebarTree(req.context.currentProductTreeTitlesExcludeHidden)
  }

  return next()
}

async function getCurrentProductTreeTitles(input: Tree, context: Context): Promise<TitlesTree> {
  const { page, href } = input
  const childPages = await Promise.all(
    (input.childPages || []).map((child) => getCurrentProductTreeTitles(child, context)),
  )

  // Translated pages need their English page for fallback rendering and short-title comparison.
  const enPage =
    page.languageCode !== 'en' ? context.pages![href.replace(`/${page.languageCode}`, '/en')] : null

  let rawShortTitle = page.rawShortTitle
  // Swaps in rawTitle when shortTitle matches English, but the render below reads page.rawShortTitle.
  if (page.languageCode !== 'en' && page.rawShortTitle) {
    if (page.rawShortTitle === enPage!.shortTitle) {
      rawShortTitle = page.rawTitle
    }
  }
  const renderedFullTitle = await executeWithFallback(
    context,
    () => liquid.parseAndRender(page.rawTitle, context),
    (enContext: Context) => liquid.parseAndRender(enPage!.rawTitle, enContext),
  )
  let renderedShortTitle = ''
  if (rawShortTitle) {
    renderedShortTitle = await executeWithFallback(
      context,
      () => liquid.parseAndRender(page.rawShortTitle!, context),
      (enContext: Context) => liquid.parseAndRender(enPage!.rawShortTitle!, enContext),
    )
  }

  // Empty duplicate short titles to avoid wasting sidebar space.
  const shortTitle =
    renderedShortTitle && (renderedShortTitle || '') !== renderedFullTitle ? renderedShortTitle : ''

  const node: TitlesTree = {
    href: input.href,
    title: renderedFullTitle,
    shortTitle,
    documentType: page.documentType,
    childPages: childPages.filter(Boolean),
  }
  if (page.hidden) node.hidden = true
  if (page.sidebarLink) node.sidebarLink = page.sidebarLink
  if (page.layout && typeof page.layout === 'string') node.layout = page.layout
  if (input.crossProductChild) node.crossProductChild = true
  return node
}

function excludeHidden(tree: TitlesTree) {
  if (tree.hidden) return null
  const newTree: TitlesTree = {
    href: tree.href,
    title: tree.title,
    shortTitle: tree.shortTitle,
    documentType: tree.documentType,
    childPages: tree.childPages.map(excludeHidden).filter(Boolean) as TitlesTree[],
  }
  if (tree.sidebarLink) newTree.sidebarLink = tree.sidebarLink
  if (tree.layout && typeof tree.layout === 'string') newTree.layout = tree.layout
  if (tree.crossProductChild) newTree.crossProductChild = true
  return newTree
}

function sidebarTree(tree: TitlesTree) {
  const { href, title, shortTitle, childPages, sidebarLink } = tree
  // Sidebars show only children from the current product.
  const filteredChildPages = childPages.filter((child) => !child.crossProductChild)

  // If siblings include a subdirectory and its articles, nest the articles under the subdirectory.
  const siblingHrefs = filteredChildPages.map((c) => c.href)
  const dedupedChildPages = filteredChildPages.filter(
    (child) => !siblingHrefs.some((sh) => sh !== child.href && child.href.startsWith(`${sh}/`)),
  )

  const childChildPages = dedupedChildPages.map(sidebarTree)
  const newTree: TitlesTree = {
    href,
    title: shortTitle || title,
    childPages: childChildPages,
  }
  if (sidebarLink) newTree.sidebarLink = sidebarLink
  if (tree.layout && typeof tree.layout === 'string') newTree.layout = tree.layout
  return newTree
}
