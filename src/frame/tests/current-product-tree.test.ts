import { describe, expect, test, vi } from 'vitest'
import type { Response, NextFunction } from 'express'
import type { ExtendedRequest, Page, Tree } from '@/types'
import currentProductTree from '@/frame/middleware/context/current-product-tree'

const currentVersion = 'free-pro-team@latest'

const createPage = (page: Partial<Page>): Page =>
  ({
    title: '',
    rawTitle: '',
    intro: '',
    markdown: '',
    mtime: 1,
    permalinks: [],
    versions: {},
    applicableVersions: [currentVersion],
    render: vi.fn(),
    renderProp: vi.fn(),
    renderTitle: vi.fn(),
    ...page,
  }) as Page

const createTree = (href: string, page: Page, childPages: Tree[] = []): Tree => ({
  href,
  page,
  children: undefined,
  childPages,
})

const createRequest = (): ExtendedRequest => {
  const englishProduct = createPage({
    title: 'Product',
    rawTitle: 'Product',
    languageCode: 'en',
    documentType: 'product',
  })
  const englishArticle = createPage({
    title: 'English full title',
    rawTitle: 'English full title',
    shortTitle: 'English short title',
    rawShortTitle: 'English short title',
    languageCode: 'en',
    documentType: 'article',
  })
  const translatedProduct = createPage({
    title: 'Producto',
    rawTitle: 'Producto',
    languageCode: 'es',
    documentType: 'product',
  })
  const translatedArticle = createPage({
    title: 'Título completo traducido',
    rawTitle: 'Título completo traducido',
    shortTitle: 'English short title',
    rawShortTitle: 'English short title',
    languageCode: 'es',
    documentType: 'article',
  })

  const englishTree = createTree('/en/product', englishProduct, [
    createTree('/en/product/article', englishArticle),
  ])
  const translatedTree = createTree('/es/product', translatedProduct, [
    createTree('/es/product/article', translatedArticle),
  ])

  return {
    context: {
      page: translatedArticle,
      pages: {
        '/en/product': englishProduct,
        '/en/product/article': englishArticle,
        '/es/product': translatedProduct,
        '/es/product/article': translatedArticle,
      },
      siteTree: {
        en: { [currentVersion]: englishTree },
        es: { [currentVersion]: translatedTree },
      },
      currentLanguage: 'es',
      currentVersion,
      currentProduct: 'product',
    },
  } as unknown as ExtendedRequest
}

describe('currentProductTree middleware', () => {
  test('uses the translated shortTitle even when it matches the English shortTitle', async () => {
    const req = createRequest()
    const next = vi.fn() as NextFunction

    await currentProductTree(req, {} as Response, next)

    expect(req.context!.currentProductTreeTitles!.childPages[0]).toMatchObject({
      title: 'Título completo traducido',
      shortTitle: 'English short title',
    })
    expect(req.context!.sidebarTree!.childPages[0].title).toBe('English short title')
    expect(next).toHaveBeenCalled()
  })
})
