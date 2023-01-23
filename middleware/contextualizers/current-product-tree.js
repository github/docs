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
    const enPath = input.href.replace(`/${page.languageCode}`, '/en')
    const enPage = context.pages[enPath]
    if (page.rawShortTitle === enPage.shortTitle) {
      rawShortTitle = page.rawTitle
    }
  }

  const renderedFullTitle = page.rawTitle.includes('{')
    ? await liquid.parseAndRender(page.rawTitle, context)
    : page.rawTitle
  let renderedShortTitle = ''
  if (rawShortTitle) {
    renderedShortTitle = rawShortTitle.includes('{')
      ? await liquid.parseAndRender(rawShortTitle, context)
      : rawShortTitle
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
