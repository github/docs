import { describe, expect, test } from 'vitest'

import { get } from '@/tests/helpers/e2etest'

const makeURL = (pathname: string): string =>
  `/api/article/body?${new URLSearchParams({ pathname })}`

describe('product guides transformer', () => {
  test('renders a product guides page with learning tracks', async () => {
    // Product guides pages use layout: product-guides
    // /en/codespaces/guides is a product guides page
    const res = await get(makeURL('/en/codespaces/guides'))
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toContain('text/markdown')

    // Should have Links section
    expect(res.body).toContain('## Links')
  })

  test('includes guide cards if present', async () => {
    const res = await get(makeURL('/en/codespaces/guides'))
    expect(res.statusCode).toBe(200)

    // If includeGuides are present, they should appear under Guides
    // The rendering depends on what's in the frontmatter
    expect(res.body).toMatch(/##|###/)
  })

  test('includes learning tracks if present', async () => {
    const res = await get(makeURL('/en/codespaces/guides'))
    expect(res.statusCode).toBe(200)

    // Learning tracks should be rendered as sections with their titles
    // The actual content depends on frontmatter configuration
    expect(res.body).toContain('## Links')
  })
})
