import { jest } from '@jest/globals'

import { getDOMCached as getDOM } from '../helpers/e2etest.js'

describe('sidebar', () => {
  jest.setTimeout(10 * 60 * 1000)
  describe('nav', () => {
    test('top level product mentioned at top of sidebar', async () => {
      const $ = await getDOM('/get-started')
      expect($('[data-testid="sidebar-product-xl"]').text()).toBe('Get started')
    })

    test('REST pages get the REST sidebar', async () => {
      const $ = await getDOM('/rest')
      expect($('[data-testid=rest-sidebar-reference]').length).toBe(1)
    })

    test('leaf-node article marked as aria-current=page', async () => {
      const $ = await getDOM('/get-started/quickstart/hello-world')
      expect(
        $(
          '[data-testid=sidebar] [data-testid=product-sidebar] a[aria-current="page"] div span',
        ).text(),
      ).toBe('Hello World')
    })

    test('sidebar should always use the shortTitle', async () => {
      const $ = await getDOM('/get-started/foo/bar')
      // The page /get-started/foo/bar has a short title that is different
      // from its regular title.
      expect(
        $(
          '[data-testid=sidebar] [data-testid=product-sidebar] a[href*="/get-started/foo/bar"] div span',
        ).text(),
      ).toBe('Bar')
    })

    test('short titles with Liquid and HTML characters', async () => {
      const $ = await getDOM('/get-started/foo/html-short-title')
      const link = $(
        '[data-testid=sidebar] [data-testid=product-sidebar] a[href*="/get-started/foo/html-short-title"]',
      )
      expect(link.text()).toBe('GitHub Pages & "GitHub"')
    })
  })
})
