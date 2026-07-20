import { describe, expect, test } from 'vitest'

import type { Element } from 'domhandler'

import { getDOM } from '@/tests/helpers/e2etest'

describe('breadcrumbs', () => {
  test('links always prefixed with language', async () => {
    const $ = await getDOM('/get-started/start-your-journey/hello-world')
    const links = $('[data-testid=breadcrumbs-bar] a')
    links.each((i, element) => {
      const href = $(element).attr('href')!
      // The Home crumb points at the locale root (`/en` on the default version,
      // no trailing slash); every other crumb is under `/en/…`. Both are
      // language-prefixed, which is what this test guards.
      expect(href === '/en' || href.startsWith('/en/')).toBe(true)
    })
    // Home crumb + the three trail crumbs for this path.
    expect.assertions(4)
  })

  test('top-level hidden /search page has no breadcrumbs', async () => {
    const $ = await getDOM('/search')
    const links = $('[data-testid=breadcrumbs-bar] a')
    expect(links.length).toBe(0)
    const headers = $('[data-testid=breadcrumbs-header]')
    expect(headers.length).toBe(0)
  })

  test('short titles are preferred', async () => {
    const $ = await getDOM('/get-started/foo/bar')
    const links = $('[data-testid=breadcrumbs-bar] li:last-child a')
    expect(links.text()).toBe('Bar')
  })

  test('article pages have breadcrumbs in the secondary bar with home, product, category, subcategory, and article (all shown)', async () => {
    const $ = await getDOM('/get-started/start-your-journey/hello-world')
    const links = $('[data-testid=breadcrumbs-bar] a')
    // The secondary bar leads with a Home crumb, then the page trail.
    expect(links.length).toBe(4)
    expect($(links[0]).text()).toBe('Home')
    expect($(links[1]).text()).toBe('Get started')
    expect($(links[1]).attr('class')!.includes('d-none')).toBe(false)
    expect($(links[2]).text()).toBe('Start your journey')
    expect($(links[2]).attr('class')!.includes('d-none')).toBe(false)
    expect($(links[3]).text()).toBe('Hello World')
    // The secondary-bar variant shows the full trail (no hidden last crumb).
    expect($(links[3]).attr('class')!.includes('d-none')).toBe(false)
  })

  test('works for enterprise-server articles too', async () => {
    const $ = await getDOM('/enterprise-server@latest/get-started/start-your-journey/hello-world')
    const links = $('[data-testid=breadcrumbs-bar] a')
    expect(links.length).toBe(4)
    expect($(links[0]).text()).toBe('Home')
    expect($(links[1]).text()).toBe('Get started')
    expect($(links[2]).text()).toBe('Start your journey')
    expect($(links[3]).text()).toBe('Hello World')
  })

  test('works for titles that depend on Liquid', async () => {
    const $fpt = await getDOM('/get-started/start-your-journey/dynamic-title')
    const fptLinks = $fpt('[data-testid=breadcrumbs-bar] a')
    // [0] is the Home crumb; the article is the last crumb.
    expect($fpt(fptLinks[3]).text()).toBe('Hello HubGit')

    const $ghec = await getDOM(
      '/enterprise-cloud@latest/get-started/start-your-journey/dynamic-title',
    )
    const ghecLinks = $ghec('[data-testid=breadcrumbs-bar] a')
    expect($ghec(ghecLinks[3]).text()).toBe('Greetings HubGit Enterprise Cloud')
  })

  test('early access article pages have breadcrumbs with home, product, category, and article', async () => {
    const $ = await getDOM('/early-access/secrets/deeper/mariana-trench')
    const $breadcrumbTitles = $('[data-testid=breadcrumbs-bar] [data-testid=breadcrumb-title]')
    const $breadcrumbLinks = $('[data-testid=breadcrumbs-bar] a')

    expect($breadcrumbTitles.length).toBe(0)
    // Home crumb + the two early-access crumbs.
    expect($breadcrumbLinks.length).toBe(3)
    expect(($breadcrumbLinks[0] as Element).attribs.title).toBe('Home')
    expect(($breadcrumbLinks[1] as Element).attribs.title).toBe('Deeper secrets')
    expect(($breadcrumbLinks[2] as Element).attribs.title).toBe('Mariana Trench')
  })
})
