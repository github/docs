import { jest } from '@jest/globals'

import { getDOMCached as getDOM } from '../helpers/e2etest.js'

describe('sidebar', () => {
  jest.setTimeout(10 * 60 * 1000)

  describe('home page', () => {
    test('includes external links', async () => {
      const $ = await getDOM('/')
      // Because we know exactly what's in the `externalProducts`
      // frontmatter property of tests/fixtures/content/index.md
      // We can predict what to expect to be present.
      const links = $('[data-testid=sidebar] a[href="https://github.com"]')
      expect(links.text()).toBe('GitHub itself')
    })

    test('early access is never a link', async () => {
      const $ = await getDOM('/')
      const links = $('[data-testid=sidebar] a[href]')
      // The `content/index.md` has to list `early-access` in `children:`
      // or else those pages won't become part of the site tree. But
      // they should not actually appear in the side bar.
      const earlyAccessLinks = links.filter((i, link) =>
        $(link).attr('href').split('/').includes('early-access')
      )
      expect(earlyAccessLinks.length).toBe(0)
    })
  })

  describe('nav', () => {
    test('top level product mentioned at top of sidebar', async () => {
      const $ = await getDOM('/get-started')
      expect($('[data-testid="sidebar-product-xl"]').text()).toBe('Get started')
    })

    test('leaf-node article marked as data-is-current-page=true', async () => {
      const $ = await getDOM('/get-started/quickstart/hello-world')
      expect($('[data-testid=sidebar] [data-is-current-page="true"]').text()).toBe('Hello World')
    })
  })
})
