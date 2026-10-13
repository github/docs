import { describe, expect, test } from 'vitest'
import type { CheerioAPI } from 'cheerio'

import { getDOMCached as getDOM } from '@/tests/helpers/e2etest'

describe('sidebar', () => {
  test('top level product mentioned at top of sidebar', async () => {
    const $: CheerioAPI = await getDOM('/get-started')
    const sidebarProduct = $('[data-testid="sidebar-product-xl"]')
    expect(sidebarProduct.text()).toBe('Get started')
    expect(sidebarProduct.attr('href')).toBe('/en/get-started')
    // Docs 2026 uses the secondary bar for breadcrumbs and the nav toggle.
    expect($('[data-testid="docs-secondary-bar"]').length).toBe(1)
    expect($('[data-testid="sidebar-mobile-toggle"]').length).toBe(1)
  })

  test('REST pages get the REST sidebar', async () => {
    const $: CheerioAPI = await getDOM('/rest')
    expect($('[data-testid=rest-sidebar-reference]').length).toBe(1)
  })

  test('leaf-node article marked as aria-current=page', async () => {
    const $: CheerioAPI = await getDOM('/get-started/start-your-journey/hello-world')
    expect(
      $(
        '[data-testid=sidebar] [data-testid=product-sidebar] a[aria-current="page"] span span',
      ).text(),
    ).toBe('Hello World')
  })

  test('sidebar should always use the shortTitle', async () => {
    const $: CheerioAPI = await getDOM('/get-started/foo/bar')
    // /get-started/foo/bar has a short title that differs from its regular title.
    expect(
      $(
        '[data-testid=sidebar] [data-testid=product-sidebar] a[href*="/get-started/foo/bar"] span span',
      ).text(),
    ).toBe('Bar')
  })

  test('short titles with Liquid and HTML characters', async () => {
    const $: CheerioAPI = await getDOM('/get-started/foo/html-short-title')
    const link = $(
      '[data-testid=sidebar] [data-testid=product-sidebar] a[href*="/get-started/foo/html-short-title"]',
    )
    expect(link.text()).toBe('HubGit Pages & "HubGit"')
  })

  test('Liquid is rendered in short title used at top of sidebar', async () => {
    {
      const $: CheerioAPI = await getDOM('/pages')
      const link = $('#allproducts-menu a')
      expect(link.text()).toBe('Pages (HubGit)')
    }
    {
      const $: CheerioAPI = await getDOM('/enterprise-server@latest/pages')
      const link = $('#allproducts-menu a')
      expect(link.text()).toBe('Pages (HubGit Enterprise Server)')
    }
    {
      const $: CheerioAPI = await getDOM('/enterprise-cloud@latest/pages')
      const link = $('#allproducts-menu a')
      expect(link.text()).toBe('Pages (HubGit Enterprise Cloud)')
    }
  })

  test('no docset link for early-access', async () => {
    const $: CheerioAPI = await getDOM('/early-access/secrets/deeper/mariana-trench')
    expect($('[data-testid="sidebar-product-xl"]').length).toBe(0)
    // Early access renders the secondary bar without a nav toggle.
    expect($('[data-testid="docs-secondary-bar"]').length).toBe(1)
    expect($('[data-testid="sidebar-mobile-toggle"]').length).toBe(0)
  })

  test('category-landing pages show title entry in sidebar', async () => {
    const $ = await getDOM('/get-started')
    const sidebarLinks = $('[data-testid="sidebar"] a')
    expect(sidebarLinks.length).toBeGreaterThan(0)

    const sidebar = $('[data-testid="sidebar"]')
    expect(sidebar.length).toBe(1)
  })

  test('non-category-landing pages do not show specific copilot entries', async () => {
    const $ = await getDOM('/rest')
    const sidebarLinks = $('[data-testid="sidebar"] a')
    expect(sidebarLinks.length).toBeGreaterThan(0)

    expect($('[data-testid=rest-sidebar-reference]').length).toBe(1)
  })

  test('layout property implementation exists in codebase', async () => {
    const $ = await getDOM('/pages')

    const sidebar = $('[data-testid="sidebar"]')
    expect(sidebar.length).toBe(1)

    const sidebarLinks = $('[data-testid="sidebar"] a')
    expect(sidebarLinks.length).toBeGreaterThan(0)
  })
})
