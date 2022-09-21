import { expect } from '@jest/globals'
import getMiniTocItems from '../../lib/get-mini-toc-items'

describe('mini toc items', () => {
  // Mock scenario from: /en/rest/reference/activity
  test('basic nested structure is created', async () => {
    const html = `
      <body>
        <h1>Test</h1>
        <h2>Section 1</h2>
        <h3>Section 1 A</h3>
        <h3>Section 1 B</h3>
        <h3>Section 1 C</h3>
        <h2>Section 2</h2>
        <h3>Section 2 A</h3>
      </body>
    `
    const tocItems = getMiniTocItems(html, 3)
    expect(tocItems[0].items.length).toBe(3)
  })

  /**
   * Mock scenario from: /en/rest/reference/apps
   * The TOC starts out with lower importance headers that aren't nested in higher importance headers
   *
   *     3
   *     3
   *   2
   *     3
   *   2
   *     3
   */
  test('creates toc that starts with lower importance headers', async () => {
    const html = `
      <h1>Test</h1>
      <h3>Section 1 A</h3>
      <h3>Section 1 B</h3>
      <h2>Section 2</h2>
      <h3>Section 2 A</h3>
      <h2>Section 3</h2>
      <h3>Section 3 A</h3>
    `
    const tocItems = getMiniTocItems(html, 3)
    expect(tocItems.length).toBe(4)
    expect(tocItems[3].items.length).toBe(1)
  })

  // Mock scenario from: /en/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization
  test('creates empty toc', async () => {
    const html = `
      <h1>Test</h1>
    `
    const tocItems = getMiniTocItems(html, 3)
    expect(tocItems.length).toBe(0)
  })

  // Mock scenario from: /en/repositories/creating-and-managing-repositories/about-repositories
  test('creates flat toc', async () => {
    const html = `
      <h1>Test</h1>
      <h2>Section 1</h2>
      <h2>Section 2</h2>
    `
    const tocItems = getMiniTocItems(html, 3)
    expect(tocItems.length).toBe(2)
    expect(tocItems[0].items).toBeUndefined()
  })

  test('handles deeply nested toc', async () => {
    const html = `
      <h1>Test</h1>
      <h2>Section 1</h2>
      <h2>Section 2</h2>
      <h3>Section 2 A</h3>
      <h4>Section 2 A 1</h4>
      <h5>Section 2 A 1 a</h5>
      <h2>Section 3</h2>
    `
    const tocItems = getMiniTocItems(html, 5)
    expect(tocItems.length).toBe(3)
    expect(tocItems[1].items[0].items[0].items.length).toBe(1)
  })
})
