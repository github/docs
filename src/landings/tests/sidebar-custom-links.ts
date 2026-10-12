import { describe, expect, test } from 'vitest'

import { getDOMCached as getDOM } from '@/tests/helpers/e2etest'

describe('sidebar custom links', () => {
  test('page with sidebarLink frontmatter shows custom link in sidebar', async () => {
    const $ = await getDOM('/get-started/sidebar-test')

    const customLink = $('[data-testid="sidebar"] a:contains("All sidebar test items")')
    expect(customLink.length).toBe(1)
    expect(customLink.attr('href')).toBe('/en/get-started/sidebar-test')
  })

  test('page without sidebarLink frontmatter does not show custom link', async () => {
    // The /actions page avoids the get-started section, which has fixture sidebarLink data.
    const $ = await getDOM('/actions')

    const customLinks = $('[data-testid="sidebar"] a:contains("All sidebar test items")')
    expect(customLinks.length).toBe(0)
  })

  test('sidebarLink with custom text appears correctly', async () => {
    const $ = await getDOM('/get-started/sidebar-test')

    const customLink = $('[data-testid="sidebar"] a:contains("All sidebar test items")')
    expect(customLink.text().trim()).toBe('All sidebar test items')
  })

  test('sidebarLink appears in correct location within sidebar', async () => {
    const $ = await getDOM('/get-started/sidebar-test')

    const customLink = $('[data-testid="sidebar"] a:contains("All sidebar test items")')
    expect(customLink.length).toBe(1)
    expect(customLink.attr('href')).toBe('/en/get-started/sidebar-test')

    const testSection = customLink.closest('[role="group"], ul')
    const allLinks = testSection.find('a')
    const customLinkIndex = allLinks.index(customLink)
    expect(customLinkIndex).toBe(0) // Custom sidebar links appear first in their subnav.
  })

  test('sidebar custom link has correct aria-current attribute', async () => {
    const $ = await getDOM('/get-started/sidebar-test')

    const customLink = $('[data-testid="sidebar"] a:contains("All sidebar test items")')
    expect(customLink.length).toBe(1)

    expect(customLink.attr('aria-current')).toBe('page')
    expect(customLink.text().trim()).toBe('All sidebar test items')
  })

  test('sidebar custom link does not appear on unrelated pages', async () => {
    // The /actions page avoids the get-started section, which has fixture sidebarLink data.
    const $ = await getDOM('/actions')

    const customLink = $('[data-testid="sidebar"] a:contains("All sidebar test items")')
    expect(customLink.length).toBe(0)
  })
})
