const { sortBy } = require('lodash')
const renderOpts = { textOnly: true, encodeEntities: true }

module.exports = async function renderTreeTitles (req, res, next) {
  if (!req.context.page) return next()
  if (req.context.page.documentType === 'homepage') return next()

  await renderLiquidInTitles(req.context.siteTree[req.context.currentLanguage][req.context.currentVersion], req.context)

  return next()
}

// Add new props to each siteTree page here...
async function renderLiquidInTitles (pageInTree, context) {
  // We _only_ need to render the titles and shortTitles that contain Liquid.
  pageInTree.renderedFullTitle = pageInTree.page.title.includes('{')
    ? await pageInTree.page.renderProp('title', context, renderOpts)
    : pageInTree.page.title

  if (pageInTree.page.shortTitle) {
    pageInTree.renderedShortTitle = pageInTree.page.shortTitle.includes('{')
      ? await pageInTree.page.renderProp('shortTitle', context, renderOpts)
      : pageInTree.page.shortTitle
  }

  if (!pageInTree.childPages) return

  pageInTree.page.childPages = sortBy(
    await Promise.all(pageInTree.childPages.map(async (childPage) => await renderLiquidInTitles(childPage, context))),
    // Sort by the ordered array of `children` in the frontmatter.
    pageInTree.page.children
  )
}
