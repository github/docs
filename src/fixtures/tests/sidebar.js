import { describe, expect, test } from 'vitest'

import { getDOMCached as getDOM } from '#src/tests/helpers/e2etest.js'

describe('sidebar', () => {
  test('top level product mentioned at top of sidebar', async () => {
    const $ = await getDOM('/get-started')
    // Desktop
    const sidebarProduct = $('[data-testid="sidebar-product-xl"]')
    expect(sidebarProduct.text()).toBe('Get started')
    expect(sidebarProduct.attr('href')).toBe('/en/get-started')
    // Mobile
    expect($('[data-testid="header-subnav"]').length).toBe(1)
    expect($('[data-testid="header-subnav-hamburger"]').length).toBe(1)
  })

  test('REST pages get the REST sidebar', async () => {
    const $ = await getDOM('/rest')
    expect($('[data-testid=rest-sidebar-reference]').length).toBe(1)
  })

  test('leaf-node article marked as aria-current=page', async () => {
    const $ = await getDOM('/get-started/start-your-journey/hello-world')
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
    expect(link.text()).toBe('HubGit Pages & "HubGit"')
  })

  test('Liquid is rendered in short title used at top of sidebar', async () => {
    // Free, pro, team
    {
      const $ = await getDOM('/pages')
      const link = $('#allproducts-menu a')
      expect(link.text()).toBe('Pages (HubGit)')
    }
    // Enterprise Server
    {
      const $ = await getDOM('/enterprise-server@latest/pages')
      const link = $('#allproducts-menu a')
      expect(link.text()).toBe('Pages (HubGit Enterprise Server)')
    }
    // Enterprise Cloud
    {
      const $ = await getDOM('/enterprise-cloud@latest/pages')
      const link = $('#allproducts-menu a')
      expect(link.text()).toBe('Pages (HubGit Enterprise Cloud)')
    }
  })

  test('no docset link for early-access', async () => {
    const $ = await getDOM('/early-access/secrets/deeper/mariana-trench')
    // Deskop
    expect($('[data-testid="sidebar-product-xl"]').length).toBe(0)
    // Mobile
    expect($('[data-testid="header-subnav"]').length).toBe(1)
    expect($('[data-testid="header-subnav-hamburger"]').length).toBe(0)
  })
})
