import path from 'path'
import { liquid } from '#src/content-render/index.js'
import findPageInSiteTree from '../../lib/find-page-in-site-tree.js'
import removeFPTFromPath from '#src/versions/lib/remove-fpt-from-path.js'
import { executeWithFallback } from '../../lib/render-with-fallback.js'

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
      req.context.currentProduct,
    ),
  )
  req.context.currentProductTree = findPageInSiteTree(
    currentRootTree,
    req.context.currentEnglishTree,
    currentProductPath,
  )

  // First make a slim tree of just the 'href', 'title', 'shortTitle'
  // 'documentType' and 'childPages' (which is recursive).
  // This gets used for map topic and category pages.
  req.context.currentProductTreeTitles = await getCurrentProductTreeTitles(
    req.context.currentProductTree,
    req.context,
  )
  // Now make an even slimmer version that excludes all hidden pages.
  // This is i used for sidebars.
  req.context.currentProductTreeTitlesExcludeHidden = excludeHidden(
    req.context.currentProductTreeTitles,
  )

  // Some pages, like hidden pages, don't have a tree. For example,
  // the search page. That one uses the same items as the homepage
  // for its sidebar.
  if (req.context.currentProductTreeTitlesExcludeHidden) {
    req.context.sidebarTree = sidebarTree(req.context.currentProductTreeTitlesExcludeHidden)
  }

  return next()
}

// Return a nested object that contains the bits and pieces we need
// for the tree which is used for sidebars and listing
async function getCurrentProductTreeTitles(input, context) {
  const { page, href } = input
  const childPages = await Promise.all(
    (input.childPages || []).map((child) => getCurrentProductTreeTitles(child, context)),
  )

  // If the current page is a translation we're going to need the English
  // equivalent for multiple things later in this function.
  const enPage =
    page.languageCode !== 'en' ? context.pages[href.replace(`/${page.languageCode}`, '/en')] : null

  let rawShortTitle = page.rawShortTitle // might change our minds about this
  // A lot of translations have a short title that is identical to the
  // English equivalent. E.g.
  //
  //   content/foo.md:
  //
  //      title: Something Something Bla
  //      shortTitle: Something
  //
  //   translations/docs-internal.se-sv/content/foo.md:
  //
  //      title: Nånting Nånting Blä
  //      shortTitle: Something
  //
  // I.e. the translations `shortTitle` hasn't been translated.
  // If this is the case, use the long title instead.
  if (page.languageCode !== 'en' && page.rawShortTitle) {
    if (page.rawShortTitle === enPage.shortTitle) {
      rawShortTitle = page.rawTitle
    }
  }
  const renderedFullTitle = await executeWithFallback(
    context,
    () => liquid.parseAndRender(page.rawTitle, context),
    (enContext) => liquid.parseAndRender(enPage.rawTitle, enContext),
  )
  let renderedShortTitle = ''
  if (rawShortTitle) {
    renderedShortTitle = await executeWithFallback(
      context,
      () => liquid.parseAndRender(page.rawShortTitle, context),
      (enContext) => liquid.parseAndRender(enPage.rawShortTitle, enContext),
    )
  }

  // If the short title was present but "useless" (same as the title),
  // force it to be an empty string to not waste space.
  const shortTitle =
    renderedShortTitle && (renderedShortTitle || '') !== renderedFullTitle ? renderedShortTitle : ''

  const node = {
    href: input.href,
    title: renderedFullTitle,
    shortTitle,
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

function sidebarTree(tree) {
  const { href, title, shortTitle, childPages } = tree
  const childChildPages = childPages.map(sidebarTree)
  const newTree = {
    href,
    title: shortTitle || title,
    childPages: childChildPages,
  }
  return newTree
}
