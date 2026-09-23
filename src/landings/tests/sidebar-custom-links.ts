import { describe, expect, test } from 'vitest'

import { getDOMCached as getDOM } from '@/tests/helpers/e2etest'

describe('sidebar custom links', () => {
  test.skip('page with sidebarLink frontmatter shows custom link in sidebar', async () => {
    const $ = await getDOM('/get-started/sidebar-test')

    const customLink = $('[data-testid="sidebar"] a:contains("All sidebar test items")')
    expect(customLink.length).toBe(1)
    expect(customLink.attr('href')).toBe('/get-started/sidebar-test')
  })

  test('page without sidebarLink frontmatter does not show custom link', async () => {
    // Using a page that's not in the get-started section to avoid seeing the foo sidebarLink
    const $ = await getDOM('/actions')

    const customLinks = $('[data-testid="sidebar"] a:contains("All sidebar test items")')
    expect(customLinks.length).toBe(0)
  })

  test.skip('sidebarLink with custom text appears correctly', async () => {
    const $ = await getDOM('/get-started/sidebar-test')

    // The fixture sidebar-test page should have "All sidebar test items" as custom text
    const customLink = $('[data-testid="sidebar"] a:contains("All sidebar test items")')
    expect(customLink.text().trim()).toBe('All sidebar test items')
  })

  test.skip('sidebarLink appears in correct location within sidebar', async () => {
    const $ = await getDOM('/get-started/sidebar-test')

    const customLink = $('[data-testid="sidebar"] a:contains("All sidebar test items")')
    expect(customLink.length).toBe(1)
    expect(customLink.attr('href')).toBe('/get-started/sidebar-test')

    const testSection = customLink.closest('[role="group"], ul')
    const allLinks = testSection.find('a')
    const customLinkIndex = allLinks.index(customLink)
    expect(customLinkIndex).toBe(0) // Should be the first link in the subnav
  })

  test.skip('sidebar custom link has correct aria attributes', async () => {
    const $ = await getDOM('/get-started/sidebar-test')

    const customLink = $('[data-testid="sidebar"] a:contains("All sidebar test items")')
    expect(customLink.length).toBe(1)

    // Verify the custom link has proper attributes (aria-current depends on current page logic)
    expect(customLink.attr('href')).toBeDefined()
    expect(customLink.text().trim()).toBe('All sidebar test items')
  })

  test('sidebar custom link does not appear on unrelated pages', async () => {
    // Using actions page which is completely unrelated to get-started/foo
    const $ = await getDOM('/actions')

    const customLink = $('[data-testid="sidebar"] a:contains("All sidebar test items")')
    expect(customLink.length).toBe(0)
  })
})
