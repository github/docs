import findPageInSiteTree from '../../lib/find-page-in-site-tree.js'

// This module adds either flatTocItems or nestedTocItems to the context object for
// product, categorie, and map topic TOCs that don't have other layouts specified.
// They are rendered by includes/generic-toc-flat.html or inclueds/generic-toc-nested.html.
export default async function genericToc(req, res, next) {
  if (!req.context.page) return next()
  if (req.context.currentLayoutName !== 'default') return next()
  // This middleware can only run on product, category, and map topics.
  if (
    req.context.page.documentType === 'homepage' ||
    req.context.page.documentType === 'article' ||
    req.context.page.relativePath === 'search/index.md'
  )
    return next()

  // This one product TOC is weird.
  const isOneOffProductToc = req.context.page.relativePath === 'github/index.md'

  // There are different types of TOC depending on the document type.
  const tocTypes = {
    product: 'flat',
    category: 'nested',
    mapTopic: 'flat',
  }

  // Frontmatter can optionally be set on an Early Access product to show hidden child items.
  // If so, this is a special case where we want to override the flat tocType and use a nested type.
  const earlyAccessToc = req.context.page.earlyAccessToc

  // Find the current TOC type based on the current document type.
  const currentTocType = earlyAccessToc ? 'nested' : tocTypes[req.context.page.documentType]

  // Find the part of the site tree that corresponds to the current path.
  const treePage = findPageInSiteTree(
    req.context.currentProductTree,
    req.context.currentEnglishTree,
    req.pagePath,
  )

  // By default, only include hidden child items on a TOC page if it's an Early Access category or
  // map topic page, not a product or 'articles' fake cagegory page (e.g., /early-access/github/articles).
  // This is because we don't want entire EA product TOCs to be publicly browseable, but anything at the category
  // or below level is fair game because that content is scoped to specific features.
  const isCategoryOrMapTopic =
    req.context.page.documentType === 'category' || req.context.page.documentType === 'mapTopic'
  const isEarlyAccess = req.context.currentPath.includes('/early-access/')
  const isArticlesCategory = req.context.currentPath.endsWith('/articles')

  const includeHidden =
    earlyAccessToc || (isCategoryOrMapTopic && isEarlyAccess && !isArticlesCategory)

  // Conditionally run getTocItems() recursively.
  let isRecursive
  // Conditionally render intros.
  let renderIntros

  // Get an array of child links with intros and add it to the context object.
  if (currentTocType === 'flat' && !isOneOffProductToc) {
    isRecursive = false
    renderIntros = true
    req.context.genericTocFlat = await getTocItems(treePage, req.context, {
      recurse: isRecursive,
      renderIntros,
      includeHidden,
    })
  }

  // Get an array of child map topics and their child articles and add it to the context object.
  if (currentTocType === 'nested' || isOneOffProductToc) {
    isRecursive = !isOneOffProductToc
    renderIntros = false
    req.context.genericTocNested = await getTocItems(treePage, req.context, {
      recurse: isRecursive,
      renderIntros,
      includeHidden,
    })
  }

  return next()
}

// Return a nested object that contains the bits and pieces we need
// for the tree which is used for sidebars and listing
async function getTocItems(node, context, opts) {
  // Cleaner than trying to be too terse inside the `.filter()` inline callback.
  function filterHidden(child) {
    return opts.includeHidden || !child.page.hidden
  }

  return await Promise.all(
    node.childPages.filter(filterHidden).map(async (child) => {
      const { page } = child
      const title = await page.renderProp('rawTitle', context, { textOnly: true })
      let intro = null
      if (opts.renderIntros) {
        intro = ''
        if (page.rawIntro) {
          // The intro can contain Markdown even though it might not
          // contain any Liquid.
          // Deliberately don't use `textOnly:true` here because we intend
          // to display the intro, in a table of contents component,
          // with the HTML (dangerouslySetInnerHTML).
          intro = await page.renderProp('rawIntro', context)
        }
      }

      let childTocItems = null
      if (opts.recurse) {
        childTocItems = []
        if (child.childPages) {
          childTocItems.push(...(await getTocItems(child, context, opts)))
        }
      }

      const fullPath = child.href
      return {
        title,
        fullPath,
        intro,
        childTocItems,
      }
    }),
  )
}
