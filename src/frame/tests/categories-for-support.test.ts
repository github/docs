import { describe, expect, test, vi } from 'vitest'
import type { Response } from 'express'
import type { ExtendedRequest, Page, Tree } from '@/types'
import categoriesForSupport from '@/frame/middleware/categories-for-support'

type Category = {
  name: string
  published_articles: { title: string; url: string }[]
}

const createPage = (page: Partial<Page>): Page =>
  ({
    title: '',
    relativePath: '',
    renderProp: vi.fn(),
    ...page,
  }) as Page

const createTree = (
  href: string,
  page: Partial<Page>,
  childPages: Tree[] = [],
  crossProductChild = false,
): Tree => ({
  href,
  page: createPage(page),
  children: undefined,
  childPages,
  ...(crossProductChild ? { crossProductChild } : {}),
})

const article = (href: string, title: string, crossProductChild = false) =>
  createTree(href, { title, documentType: 'article' }, [], crossProductChild)

async function getCategories(productChildPages: Tree[]) {
  const product = createTree(
    '/en/pull-requests',
    { title: 'Pull requests', relativePath: 'pull-requests/index.md', documentType: 'product' },
    productChildPages,
  )
  const root = createTree('/en', { title: 'Home' }, [product])
  const req = {
    context: { siteTree: { en: { 'free-pro-team@latest': root } } },
  } as unknown as ExtendedRequest
  let body: Category[] = []
  const res = {
    hasHeader: () => false,
    set: vi.fn(),
    json: (data: Category[]) => {
      body = data
      return res
    },
  } as unknown as Response
  await categoriesForSupport(req, res)
  return body
}

describe('categoriesForSupport', () => {
  test('excludes cross-product children and lists each article once per category', async () => {
    const nested = article('/en/pull-requests/how-tos/automate/with-actions', 'With actions')
    const howTos = createTree(
      '/en/pull-requests/how-tos',
      { title: 'How-tos', documentType: 'category' },
      [
        createTree(
          '/en/pull-requests/how-tos/collaborate',
          { title: 'Collaborate', documentType: 'subcategory' },
          [article('/en/pull-requests/how-tos/collaborate/review', 'Review')],
        ),
        createTree(
          '/en/pull-requests/how-tos/stacked',
          { title: 'Stacked', documentType: 'category' },
          [
            article('/en/pull-requests/how-tos/collaborate/review', 'Review', true),
            article('/en/rest/pulls/pulls', 'REST API endpoints for pull requests', true),
          ],
        ),
        createTree(
          '/en/pull-requests/how-tos/automate',
          { title: 'Automate', documentType: 'subcategory' },
          [nested],
        ),
        nested,
      ],
    )
    const foreignCategory = createTree(
      '/en/rest/pulls',
      { title: 'Pulls', documentType: 'category' },
      [article('/en/rest/pulls/pulls', 'REST API endpoints for pull requests')],
      true,
    )

    const categories = await getCategories([howTos, foreignCategory])

    expect(categories.map((c) => c.name)).toEqual(['How-tos'])
    const urls = categories[0].published_articles.map((a) => a.url)
    expect(urls).toHaveLength(2)
    expect(urls).toEqual(
      expect.arrayContaining([
        '/pull-requests/how-tos/collaborate/review',
        '/pull-requests/how-tos/automate/with-actions',
      ]),
    )
    expect(urls).not.toContain('/rest/pulls/pulls')
  })
})
