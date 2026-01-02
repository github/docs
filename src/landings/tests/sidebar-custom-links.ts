import { describe, expect, test } from 'vitest'

import { getDOMCached as getDOM } from '@/tests/helpers/e2etest'

describe('sidebar custom links', () => {
  test.skip('page with sidebarLink frontmatter shows custom link in sidebar', async () => {
    // Test that a page with sidebarLink frontmatter property shows the custom link
    const $ = await getDOM('/get-started/sidebar-test')

    // Check that the custom sidebar link appears
    const customLink = $('[data-testid="sidebar"] a:contains("All sidebar test items")')
    expect(customLink.length).toBe(1)
    expect(customLink.attr('href')).toBe('/get-started/sidebar-test')
  })

  test('page without sidebarLink frontmatter does not show custom link', async () => {
    // Test that pages without sidebarLink don't show custom links
    // Using a page that's not in the get-started section to avoid seeing the foo sidebarLink
    const $ = await getDOM('/actions')

    // Check that no custom sidebar links appear
    const customLinks = $('[data-testid="sidebar"] a:contains("All sidebar test items")')
    expect(customLinks.length).toBe(0)
  })

  test.skip('sidebarLink with custom text appears correctly', async () => {
    // Test that custom text in sidebarLink appears correctly
    const $ = await getDOM('/get-started/sidebar-test')

    // The fixture sidebar-test page should have "All sidebar test items" as custom text
    const customLink = $('[data-testid="sidebar"] a:contains("All sidebar test items")')
    expect(customLink.text().trim()).toBe('All sidebar test items')
  })

  test.skip('sidebarLink appears in correct location within sidebar', async () => {
    // Test that the custom link appears as the first item in the subnav
    const $ = await getDOM('/get-started/sidebar-test')

    // Find the custom link directly in the sidebar
    const customLink = $('[data-testid="sidebar"] a:contains("All sidebar test items")')
    expect(customLink.length).toBe(1)
    expect(customLink.attr('href')).toBe('/get-started/sidebar-test')

    // Verify it appears before other child pages
    const testSection = customLink.closest('[role="group"], ul')
    const allLinks = testSection.find('a')
    const customLinkIndex = allLinks.index(customLink)
    expect(customLinkIndex).toBe(0) // Should be the first link in the subnav
  })

  test.skip('sidebar custom link has correct aria attributes', async () => {
    // Test accessibility attributes on custom sidebar links
    const $ = await getDOM('/get-started/sidebar-test')

    const customLink = $('[data-testid="sidebar"] a:contains("All sidebar test items")')
    expect(customLink.length).toBe(1)

    // Verify the custom link has proper attributes (aria-current depends on current page logic)
    expect(customLink.attr('href')).toBeDefined()
    expect(customLink.text().trim()).toBe('All sidebar test items')
  })

  test('sidebar custom link does not appear on unrelated pages', async () => {
    // Test that custom links only appear in relevant contexts
    // Using actions page which is completely unrelated to get-started/foo
    const $ = await getDOM('/actions')

    // The sidebar test custom link should not appear on unrelated pages
    const customLink = $('[data-testid="sidebar"] a:contains("All sidebar test items")')
    expect(customLink.length).toBe(0)
  })
})
