const { sortBy } = require('lodash')

module.exports = async function genericToc (req, res, next) {
  if (!req.context.page) return next()
  if (req.context.page.hidden) return next()
  if (req.context.currentLayoutName !== 'default') return next()
  if (req.context.page.documentType === 'homepage' || req.context.page.documentType === 'article') return next()

  const currentSiteTree = req.context.siteTree[req.context.currentLanguage][req.context.currentVersion]

  // Find the array of child pages that start with the requested path.
  const currentPageInSiteTree = findPageInSiteTree(currentSiteTree.childPages, req.context.currentPath)

  req.context.tocItems = sortBy(
    await getUnsortedTocItems(currentPageInSiteTree.childPages, req.context),
    // Sort by the ordered array of `children` in the frontmatter.
    currentPageInSiteTree.page.children
  )

  return next()
}

// Recursively loop through the siteTree until we reach the point where the
// current siteTree page is the same as the requested page. Then stop.
function findPageInSiteTree (pageArray, currentPath) {
  const childPage = pageArray.find(page => currentPath.startsWith(page.href))

  if (childPage.href === currentPath) {
    return childPage
  }

  return findPageInSiteTree(childPage.childPages, currentPath)
}

async function getUnsortedTocItems (pageArray, context) {
  return Promise.all(pageArray.map(async (childPage) => {
    // return an empty string if it's a hidden link on a non-hidden page (hidden links on hidden pages are OK)
    if (childPage.page.hidden && !context.page.hidden) {
      return ''
    }

    const fullPath = childPage.href
    // Titles are already rendered by middleware/contextualizers/render-tree-titles.js.
    const title = childPage.renderedFullTitle
    const intro = await childPage.page.renderProp('intro', context, { unwrap: true })

    if (!childPage.childPages) {
      return { fullPath, title, intro }
    }

    const childTocItems = sortBy(
      await getUnsortedTocItems(childPage.childPages, context),
      // Sort by the ordered array of `children` in the frontmatter.
      childPage.page.children
    )

    return { fullPath, title, intro, childTocItems }
  }))
}
