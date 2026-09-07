import { describe, expect, test } from 'vitest'

import { get } from '@/tests/helpers/e2etest'

const makeURL = (pathname: string): string =>
  `/api/article/body?${new URLSearchParams({ pathname })}`

describe('bespoke landing transformer', () => {
  test('renders a bespoke landing page with all sections', async () => {
    // /en/get-started/article-grid-bespoke is a bespoke landing page
    const res = await get(makeURL('/en/get-started/article-grid-bespoke'))
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toContain('text/markdown')

    // Check for title
    expect(res.body).toContain('# Article Grid Bespoke Landing')

    // Should have intro
    expect(res.body).toContain('A test page for testing')
  })

  test('renders all descendant articles recursively', async () => {
    const res = await get(makeURL('/en/get-started/article-grid-bespoke'))
    expect(res.statusCode).toBe(200)

    // Should have Articles section with all descendant articles (recursive)
    expect(res.body).toContain('## Articles')
    expect(res.body).toContain('[Grid Article One]')
    expect(res.body).toContain('[Grid Article Two]')
    expect(res.body).toContain('[Grid Article Three]')
    expect(res.body).toContain('[Grid Article Four]')
  })
})
