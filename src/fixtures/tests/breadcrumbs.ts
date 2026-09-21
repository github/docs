import { describe, expect, test } from 'vitest'

import { getDOM } from '@/tests/helpers/e2etest'

describe('breadcrumbs', () => {
  test('links always prefixed with language', async () => {
    const $ = await getDOM('/get-started/start-your-journey/hello-world')
    const links = $('[data-testid=breadcrumbs-bar] a')
    // Home and the two ancestors are links; the current article is static text.
    expect(links.length).toBe(3)
    links.each((i, element) => {
      const href = $(element).attr('href')!
      // The Home crumb points at the locale root (`/en` on the default version,
      // no trailing slash); every other crumb is under `/en/…`. Both are
      // language-prefixed, which is what this test guards.
      expect(href === '/en' || href.startsWith('/en/')).toBe(true)
    })
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
    const current = $('[data-testid=breadcrumbs-bar] [aria-current=page]')
    expect(current.text()).toBe('Bar')
  })

  test('article pages show home, ancestor links, and a non-clickable current article in the secondary bar', async () => {
    const $ = await getDOM('/get-started/start-your-journey/hello-world')
    const links = $('[data-testid=breadcrumbs-bar] a')
    const current = $('[data-testid=breadcrumbs-bar] [aria-current=page]')
    expect(links.length).toBe(3)
    expect($(links[0]).text()).toBe('Home')
    expect($(links[1]).text()).toBe('Get started')
    expect($(links[1]).hasClass('d-none')).toBe(false)
    expect($(links[2]).text()).toBe('Start your journey')
    expect($(links[2]).hasClass('d-none')).toBe(false)
    expect(current.length).toBe(1)
    expect(current.text()).toBe('Hello World')
    expect(current.is('a')).toBe(false)
    expect(current.attr('href')).toBeUndefined()
    // The secondary-bar variant shows the full trail (no hidden last crumb).
    expect(current.hasClass('d-none')).toBe(false)
  })

  test('works for enterprise-server articles too', async () => {
    const $ = await getDOM('/enterprise-server@latest/get-started/start-your-journey/hello-world')
    const links = $('[data-testid=breadcrumbs-bar] a')
    const current = $('[data-testid=breadcrumbs-bar] [aria-current=page]')
    expect(links.length).toBe(3)
    expect($(links[0]).text()).toBe('Home')
    expect($(links[1]).text()).toBe('Get started')
    expect($(links[2]).text()).toBe('Start your journey')
    expect(current.text()).toBe('Hello World')
  })

  test('works for titles that depend on Liquid', async () => {
    const $fpt = await getDOM('/get-started/start-your-journey/dynamic-title')
    const fptCurrent = $fpt('[data-testid=breadcrumbs-bar] [aria-current=page]')
    expect(fptCurrent.text()).toBe('Hello HubGit')

    const $ghec = await getDOM(
      '/enterprise-cloud@latest/get-started/start-your-journey/dynamic-title',
    )
    const ghecCurrent = $ghec('[data-testid=breadcrumbs-bar] [aria-current=page]')
    expect(ghecCurrent.text()).toBe('Greetings HubGit Enterprise Cloud')
  })

  test('early access article pages show home and ancestor links with the current article', async () => {
    const $ = await getDOM('/early-access/secrets/deeper/mariana-trench')
    const $breadcrumbTitles = $('[data-testid=breadcrumbs-bar] [data-testid=breadcrumb-title]')
    const $breadcrumbLinks = $('[data-testid=breadcrumbs-bar] a')
    const current = $('[data-testid=breadcrumbs-bar] [aria-current=page]')

    expect($breadcrumbTitles.length).toBe(0)
    expect($breadcrumbLinks.length).toBe(2)
    expect($($breadcrumbLinks[0]).attr('title')).toBe('Home')
    expect($($breadcrumbLinks[1]).attr('title')).toBe('Deeper secrets')
    expect(current.text()).toBe('Mariana Trench')
  })
})
