import { describe, expect, test } from 'vitest'
import cheerio from 'cheerio'

import { getDOM, head } from '@/tests/helpers/e2etest'

describe('subcategories', () => {
  test('get-started/start-your-journey subcategory', async () => {
    const $: cheerio.Root = await getDOM('/get-started/start-your-journey')
    const lead = $('[data-search=lead]').text()
    expect(lead).toMatch('Get started using HubGit to manage Git repositories')

    const links = $('[data-testid=table-of-contents] a[href]')
    expect(links.length).toBeGreaterThan(0)
    // They all have the same prefix
    const hrefs = links.map((i: number, el: any) => $(el).attr('href')).get()
    expect(
      hrefs.every((href: string) => href.startsWith('/en/get-started/start-your-journey/')),
    ).toBeTruthy()
    // The all resolve to a 200 OK without redirects
    const responses = await Promise.all(hrefs.map((href: string) => head(href)))
    expect(responses.every((r: any) => r.statusCode === 200)).toBeTruthy()
  })

  test('actions/category/subcategory subcategory has its articles intro', async () => {
    const $: cheerio.Root = await getDOM('/actions/category/subcategory')
    const lead = $('[data-search=lead]').text()
    expect(lead).toMatch("Here's the intro for HubGit Actions.")

    const links = $('[data-testid=table-of-contents] a[href]')
    const hrefs = links.map((i: number, el: any) => $(el).attr('href')).get()
    expect(hrefs.every((href: string) => href.startsWith('/en/actions/category/'))).toBeTruthy()

    const firstArticleH2 = $('[data-testid=table-of-contents] h2').first()
    expect(firstArticleH2.text()).toMatch('Article title')

    const firstArticleIntro = $('[data-testid=table-of-contents] p').first()
    // Its HTML in the intro is escaped and Markdown converted
    expect(firstArticleIntro.html()).toMatch(
      'This page uses &lt; and &gt; in the title and <code>shortTitle</code>',
    )
  })
})

describe('categories', () => {
  test('actions/category subcategory', async () => {
    const $: cheerio.Root = await getDOM('/actions/category')
    const lead = $('[data-search=lead]').text()
    expect(lead).toMatch('Learn how to migrate your existing CI/CD')

    const links = $('[data-testid=table-of-contents] a[href]')
    expect(links.length).toBeGreaterThan(0)
    // They all have the same prefix
    const hrefs = links.map((i: number, el: any) => $(el).attr('href')).get()
    expect(hrefs.every((href: string) => href.startsWith('/en/actions/category/'))).toBeTruthy()
    // The all resolve to a 200 OK without redirects
    const responses = await Promise.all(hrefs.map((href: string) => head(href)))
    expect(responses.every((r: any) => r.statusCode === 200)).toBeTruthy()
  })
})
