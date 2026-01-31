import { describe, expect, test } from 'vitest'

import { get } from '@/tests/helpers/e2etest'

const makeURL = (pathname: string): string =>
  `/api/article/body?${new URLSearchParams({ pathname })}`

describe('discovery landing transformer', () => {
  test('renders a discovery landing page in markdown', async () => {
    // /en/get-started/carousel is a discovery landing page with recommended carousel
    const res = await get(makeURL('/en/get-started/carousel'))
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toContain('text/markdown')

    // Check for title and intro
    expect(res.body).toContain('# Landing Page Carousel')
    expect(res.body).toContain('A test category page for testing the LandingCarousel component')

    // Should have Articles section with all descendant articles
    expect(res.body).toContain('## Articles')
    expect(res.body).toContain('[Carousel Article One]')
    expect(res.body).toContain('[Carousel Article Two]')
    expect(res.body).toContain('[Carousel Article Three]')
  })

  test('renders a discovery landing page with children', async () => {
    // /en/get-started/article-grid-discovery has discovery landing with children
    const res = await get(makeURL('/en/get-started/article-grid-discovery'))
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toContain('text/markdown')

    // Check for title
    expect(res.body).toContain('# Article Grid Discovery')

    // Should have Articles section with all descendant articles (recursive)
    expect(res.body).toContain('## Articles')
    expect(res.body).toContain('[Grid Article One]')
    expect(res.body).toContain('[Grid Article Two]')
    expect(res.body).toContain('[Grid Article Three]')
    expect(res.body).toContain('[Grid Article Four]')
  })

  test('handles discovery landing structure consistently', async () => {
    // Discovery pages should have a consistent structure
    const res = await get(makeURL('/en/get-started/carousel'))
    expect(res.statusCode).toBe(200)

    // Should have intro
    expect(res.body).toMatch(/^# .+\n\n.+\n\n/)

    // Should have at least one section
    expect(res.body).toContain('##')
  })
})
