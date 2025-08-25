import { describe, expect, test } from 'vitest'
import cheerio from 'cheerio'

import { getDOM } from '@/tests/helpers/e2etest'

describe('permission statements', () => {
  test('article page product statement', async () => {
    const $: cheerio.Root = await getDOM('/get-started/foo/page-with-callout')
    const callout = $('[data-testid=product-statement] div')
    expect(callout.html()).toBe('<p>Callout for HubGit Pages</p>')
  })

  test('callout disappears depend on Liquid inside it', async () => {
    // This page has `product:` property which is a piece of Liquid
    // which makes it so that the rendered output of that becomes
    // an empty string.
    // This test tests that alert is not rendered if its output
    // "exits" but is empty.
    const $: cheerio.Root = await getDOM(
      '/enterprise-server@latest/get-started/foo/page-with-callout',
    )
    const callout = $('[data-testid=product-statement]')
    expect(callout.length).toBe(0)
  })

  test('toc landing page', async () => {
    const $: cheerio.Root = await getDOM('/actions/category')
    const callout = $('[data-testid=product-statement] div')
    expect(callout.html()).toBe('<p>This is the callout text</p>')
  })

  test('page with permission frontmatter', async () => {
    const $: cheerio.Root = await getDOM('/get-started/markdown/permissions')
    const html = $('[data-testid=permissions-statement] div').html()
    // Markdown
    expect(html).toMatch('<strong>admin</strong>')
    // Liquid
    expect(html).toMatch('HubGit Pages site')
  })

  test('page with permission frontmatter and product statement', async () => {
    const $: cheerio.Root = await getDOM(
      '/get-started/foo/page-with-permissions-and-product-callout',
    )
    const html = $('[data-testid=permissions-callout] div').html()
    // part of the UI
    expect(html).toMatch('Who can use this feature')

    const permission = $('[data-testid=permissions-statement] div')
    expect(permission.html()).toBe('<p>This is a permission callout</p>')

    const product = $('[data-testid=product-statement] div')
    expect(product.html()).toBe('<p>Callout for HubGit Pages</p>')
  })
})
