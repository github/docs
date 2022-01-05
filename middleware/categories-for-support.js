import path from 'path'

import { cacheControlFactory } from './cache-control.js'

const renderOpts = { textOnly: true, encodeEntities: true }

const cacheControl = cacheControlFactory(60 * 60 * 24)

// Module-global variable that gets populate once the categoriesForSupport()
// runs at least once.
let globalAllCategoriesCache = null

// This middleware exposes a list of all categories and child articles at /categories.json.
// GitHub Support uses this for internal ZenDesk search functionality.
export default async function categoriesForSupport(req, res, next) {
  const englishSiteTree = req.context.siteTree.en

  const allCategories = globalAllCategoriesCache || []
  if (!allCategories.length) {
    await Promise.all(
      Object.keys(englishSiteTree).map(async (version) => {
        await Promise.all(
          englishSiteTree[version].childPages.map(async (productPage) => {
            if (productPage.page.relativePath.startsWith('early-access')) return
            if (!productPage.childPages) return

            await Promise.all(
              productPage.childPages.map(async (categoryPage) => {
                // We can't get the rendered titles from middleware/render-tree-titles
                // here because that middleware only runs on the current version, and this
                // middleware processes all versions.
                const name = categoryPage.page.title.includes('{')
                  ? await categoryPage.page.renderProp('title', req.context, renderOpts)
                  : categoryPage.page.title

                allCategories.push({
                  name,
                  published_articles: await findArticlesPerCategory(categoryPage, [], req.context),
                })
              })
            )
          })
        )
      })
    )
    if (allCategories.length && process.env.NODE_ENV !== 'development') {
      globalAllCategoriesCache = allCategories
    }
  }

  // Cache somewhat aggressively but note that it will be soft-purged
  // in every prod deployment.
  cacheControl(res)

  // Undo the cookie setting that CSRF sets.
  res.removeHeader('set-cookie')

  return res.json(allCategories)
}

async function findArticlesPerCategory(currentPage, articlesArray, context) {
  if (currentPage.page.documentType === 'article') {
    const title = currentPage.page.title.includes('{')
      ? await currentPage.page.renderProp('title', context, renderOpts)
      : currentPage.page.title

    articlesArray.push({
      title,
      slug: path.basename(currentPage.href),
    })
  }

  if (!currentPage.childPages) return articlesArray

  // Run recursively to find any articles deeper in the tree.
  await Promise.all(
    currentPage.childPages.map(async (childPage) => {
      await findArticlesPerCategory(childPage, articlesArray, context)
    })
  )

  return articlesArray
}
