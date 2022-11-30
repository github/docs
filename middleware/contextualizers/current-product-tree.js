import path from 'path'
import liquid from '../../lib/render-content/liquid.js'
import findPageInSiteTree from '../../lib/find-page-in-site-tree.js'
import removeFPTFromPath from '../../lib/remove-fpt-from-path.js'

// This module adds currentProductTree to the context object for use in layouts.
export default async function currentProductTree(req, res, next) {
  if (!req.context.page) return next()
  if (req.context.page.documentType === 'homepage') return next()

  // We need this so we can fall back to English if localized pages are out of sync.
  req.context.currentEnglishTree = req.context.siteTree.en[req.context.currentVersion]

  const currentRootTree =
    req.context.siteTree[req.context.currentLanguage][req.context.currentVersion]
  const currentProductPath = removeFPTFromPath(
    path.posix.join(
      '/',
      req.context.currentLanguage,
      req.context.currentVersion,
      req.context.currentProduct
    )
  )
  req.context.currentProductTree = findPageInSiteTree(
    currentRootTree,
    req.context.currentEnglishTree,
    currentProductPath
  )

  // First make a slim tree of just the 'href', 'title', 'shortTitle'
  // 'documentType' and 'childPages' (which is recursive).
  // This gets used for map topic and category pages.
  req.context.currentProductTreeTitles = await getCurrentProductTreeTitles(
    req.context.currentProductTree,
    req.context
  )
  // Now make an even slimmer version that excludes all hidden pages.
  // This is i used for sidebars.
  req.context.currentProductTreeTitlesExcludeHidden = excludeHidden(
    req.context.currentProductTreeTitles
  )

  return next()
}

// Return a nested object that contains the bits and pieces we need
// for the tree which is used for sidebars and listing
async function getCurrentProductTreeTitles(input, context) {
  const { page } = input
  const childPages = await Promise.all(
    (input.childPages || []).map((child) => getCurrentProductTreeTitles(child, context))
  )

  const renderedFullTitle = page.rawTitle.includes('{')
    ? await liquid.parseAndRender(page.rawTitle, context)
    : page.rawTitle
  let renderedShortTitle = ''
  if (page.rawShortTitle) {
    renderedShortTitle = page.rawShortTitle.includes('{')
      ? await liquid.parseAndRender(page.rawShortTitle, context)
      : page.rawShortTitle
  }

  const node = {
    href: input.href,
    title: renderedFullTitle,
    shortTitle:
      renderedShortTitle && (renderedShortTitle || '') !== renderedFullTitle
        ? renderedShortTitle
        : '',
    documentType: page.documentType,
    childPages: childPages.filter(Boolean),
  }
  if (page.hidden) node.hidden = true
  return node
}

function excludeHidden(tree) {
  if (tree.hidden) return null
  const newTree = {
    href: tree.href,
    title: tree.title,
    shortTitle: tree.shortTitle,
    documentType: tree.documentType,
    childPages: tree.childPages.map(excludeHidden).filter(Boolean),
  }
  return newTree
}
