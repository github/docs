import type { Response } from 'express'

import { defaultCacheControl } from './cache-control'
import type { Context, ExtendedRequest, Tree } from '@/types'

const renderOpts = { textOnly: true }

type Article = {
  title: string
  url: string
}
type Category = {
  name: string
  published_articles: Article[]
}

// /categories.json gives GitHub Support categories and child articles for Zendesk search.
export default async function categoriesForSupport(req: ExtendedRequest, res: Response) {
  const englishSiteTree = req.context!.siteTree!.en
  const allCategories: Category[] = []

  const fpt = englishSiteTree['free-pro-team@latest']
  for (const productPage of Object.values(fpt.childPages!)) {
    if (productPage.page.relativePath.startsWith('early-access')) continue
    if (!productPage.childPages || !productPage.childPages.length) continue
    // Cross-product children are references to pages that already appear in their own category.
    const categoryPages = productPage.childPages.filter((child) => !child.crossProductChild)
    await Promise.all(
      categoryPages.map(async (categoryPage) => {
        // Site-tree titles are raw, so render any that contain Liquid.
        if (!req.context) return
        const name = categoryPage.page.title.includes('{')
          ? await categoryPage.page.renderProp('title', req.context, renderOpts)
          : categoryPage.page.title

        allCategories.push({
          name,
          published_articles: await findArticlesPerCategory(categoryPage, [], req.context),
        })
      }),
    )
  }

  // Use the default browser and CDN cache policy.
  defaultCacheControl(res)

  return res.json(allCategories)
}

async function findArticlesPerCategory(
  currentPage: Tree,
  articlesArray: Article[],
  context: Context,
) {
  if (currentPage.page.documentType === 'article') {
    const title = currentPage.page.title.includes('{')
      ? await currentPage.page.renderProp('title', context, renderOpts)
      : currentPage.page.title

    const url = currentPage.href.replace('/en/', '/')
    // An index.md can list an article both directly and through its parent subcategory.
    if (!articlesArray.some((article) => article.url === url)) {
      articlesArray.push({ title, url })
    }
  }

  if (!currentPage.childPages) return articlesArray

  await Promise.all(
    currentPage.childPages
      .filter((childPage) => !childPage.crossProductChild)
      .map(async (childPage) => {
        await findArticlesPerCategory(childPage, articlesArray, context)
      }),
  )

  return articlesArray
}
