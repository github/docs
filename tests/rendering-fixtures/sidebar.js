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
      const links = $('[data-testid=sidebar] ul li div div span a[href="https://github.com"]')
      expect(links.text()).toBe('GitHub itself')
    })

    test('early access is never a link', async () => {
      const $ = await getDOM('/')
      const links = $('[data-testid=sidebar] ul li div div span a[href]')
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

    test('leaf-node article marked as aria-current=true', async () => {
      const $ = await getDOM('/get-started/quickstart/hello-world')
      expect(
        $(
          '[data-testid=sidebar] [data-testid=sidebar-article-group] li[aria-current="true"]'
        ).text()
      ).toBe('Hello World')
    })

    test('sidebar should always use the shortTitle', async () => {
      const $ = await getDOM('/get-started/foo')
      // The page /get-started/foo/bar has a short title that is different
      // from its regular title.
      expect($('[data-testid=sidebar] a[href*="/get-started/foo/bar"]').text()).toBe('Bar')
    })

    test('short titles with Liquid and HTML characters', async () => {
      const $ = await getDOM('/get-started/foo')
      const link = $('[data-testid=sidebar] a[href*="/get-started/foo/html-short-title"]')
      expect(link.text()).toBe('GitHub Pages & "GitHub"')
      expect(link.html()).toBe(
        '<li class="PRIVATE_TreeView-item" tabindex="0" id="/en/get-started/foo/html-short-title" role="treeitem" aria-labelledby="react-aria-27" aria-describedby="react-aria-28 react-aria-29" aria-level="2" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level:2"><div style="grid-area:spacer;display:flex"><div style="width:100%;display:flex"><div class="PRIVATE_TreeView-item-level-line"/></div></div><div id="react-aria-27" class="PRIVATE_TreeView-item-content"><span class="PRIVATE_TreeView-item-content-text">GitHub Pages &amp; &quot;GitHub&quot;</span></div></div></li>'
      )
    })
  })
})
