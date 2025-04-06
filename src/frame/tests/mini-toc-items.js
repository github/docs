import { describe, expect, test } from 'vitest'

import getMiniTocItems from '#src/frame/lib/get-mini-toc-items'

function generateHeading(h) {
  return (slug) => `<${h} id="${slug}">
    <a href="${slug}" class="heading-link">
      ${slug}
    </a>
  </${h}>`
}

const h1 = generateHeading('h1')
const h2 = generateHeading('h2')
const h3 = generateHeading('h3')
const h4 = generateHeading('h4')
const h5 = generateHeading('h5')

describe('mini toc items', () => {
  // Mock scenario from: /en/rest/reference/activity
  test('basic nested structure is created', async () => {
    const html = [
      h1('test'),
      h2('section-1'),
      h3('section-1-A'),
      h3('section-1-B'),
      h3('section-1-C'),
      h2('section-2'),
      h3('section-2-A'),
    ].join('\n')
    const tocItems = getMiniTocItems(html, 3)
    expect(tocItems.length).toBe(2)
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
    const html = [
      h1('test'),
      h3('section-1-A'),
      h3('section-1-B'),
      h2('section-2'),
      h3('section-2-A'),
      h2('section-3'),
      h3('section-3-A'),
    ].join('\n')
    const tocItems = getMiniTocItems(html, 3)
    expect(tocItems.length).toBe(4)
    expect(tocItems[3].items.length).toBe(1)
  })

  // Mock scenario from: /en/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization
  test('creates empty toc', async () => {
    const html = h1('test')
    const tocItems = getMiniTocItems(html, 3)
    expect(tocItems.length).toBe(0)
  })

  // Mock scenario from: /en/repositories/creating-and-managing-repositories/about-repositories
  test('creates flat toc', async () => {
    const html = [h1('test'), h2('section-1'), h2('section-2')].join('\n')
    const tocItems = getMiniTocItems(html, 3)
    expect(tocItems.length).toBe(2)
    expect(tocItems[0].items).toBeUndefined()
  })

  test('handles deeply nested toc', async () => {
    const html = [
      h1('test'),
      h2('section-1'),
      h2('section-2'),
      h3('section-2-A'),
      h4('section-2-A-1'),
      h5('section-2-A-1-a'),
      h2('section-3'),
    ].join('\n')
    const tocItems = getMiniTocItems(html, 5)
    expect(tocItems.length).toBe(3)
    expect(tocItems[1].items[0].items[0].items.length).toBe(1)
  })
})
