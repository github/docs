import findPageInSiteTree from '../../lib/find-page-in-site-tree.js'

// This module adds either flatTocItems or nestedTocItems to the context object for
// product, categorie, and map topic TOCs that don't have other layouts specified.
// They are rendered by includes/generic-toc-flat.html or inclueds/generic-toc-nested.html.
export default async function genericToc(req, res, next) {
  if (!req.context.page) return next()
  if (req.context.currentLayoutName !== 'default') return next()
  // This middleware can only run on product, category, and map topics.
  if (req.context.page.documentType === 'homepage' || req.context.page.documentType === 'article')
    return next()

  // This one product TOC is weird.
  const isOneOffProductToc = req.context.page.relativePath === 'github/index.md'

  // There are different types of TOC depending on the document type.
  const tocTypes = {
    product: 'flat',
    category: 'nested',
    mapTopic: 'flat',
  }

  // Find the current TOC type based on the current document type.
  const currentTocType = tocTypes[req.context.page.documentType]

  // Find the part of the site tree that corresponds to the current path.
  const treePage = findPageInSiteTree(
    req.context.currentProductTree,
    req.context.currentEnglishTree,
    req.pagePath
  )

  // Only include hidden child items on a TOC page if it's an Early Access category or
  // map topic page, not a product or 'articles' fake cagegory page (e.g., /early-access/github/articles).
  // This is because we don't want entire EA product TOCs to be publicly browseable, but anything at the category
  // or below level is fair game because that content is scoped to specific features.
  const isCategoryOrMapTopic =
    req.context.page.documentType === 'category' || req.context.page.documentType === 'mapTopic'
  const isEarlyAccess = req.context.currentPath.includes('/early-access/')
  const isArticlesCategory = req.context.currentPath.endsWith('/articles')

  req.context.showHiddenTocItems = isCategoryOrMapTopic && isEarlyAccess && !isArticlesCategory

  // Conditionally run getTocItems() recursively.
  let isRecursive
  // Conditionally render intros.
  let renderIntros

  // Get an array of child links with intros and add it to the context object.
  if (currentTocType === 'flat' && !isOneOffProductToc) {
    isRecursive = false
    renderIntros = true
    req.context.genericTocFlat = await getTocItems(
      treePage.childPages,
      req.context,
      isRecursive,
      renderIntros
    )
  }

  // Get an array of child map topics and their child articles and add it to the context object.
  if (currentTocType === 'nested' || isOneOffProductToc) {
    isRecursive = !isOneOffProductToc
    renderIntros = false
    req.context.genericTocNested = await getTocItems(
      treePage.childPages,
      req.context,
      isRecursive,
      renderIntros
    )
  }

  return next()
}

async function getTocItems(pagesArray, context, isRecursive, renderIntros) {
  return (
    await Promise.all(
      pagesArray.map(async (child) => {
        // only include a hidden page if showHiddenTocItems is true
        if (child.page.hidden && !context.showHiddenTocItems) return

        return {
          title: child.renderedFullTitle,
          fullPath: child.href,
          // renderProp is the most expensive part of this function.
          intro: renderIntros
            ? await child.page.renderProp('intro', context, { unwrap: true })
            : null,
          childTocItems:
            isRecursive && child.childPages
              ? await getTocItems(child.childPages, context, isRecursive, renderIntros)
              : null,
        }
      })
    )
  ).filter(Boolean)
}
