import { describe, expect, test } from 'vitest'

import { get } from '@/tests/helpers/e2etest'

const makeURL = (pathname: string): string =>
  `/api/article/body?${new URLSearchParams({ pathname })}`

describe('bespoke landing transformer', () => {
  test('renders a bespoke landing page with all sections', async () => {
    const res = await get(makeURL('/en/get-started/article-grid-bespoke'))
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toContain('text/markdown')

    expect(res.body).toContain('# Article Grid Bespoke Landing')

    expect(res.body).toContain('A test page for testing')
  })

  test('renders all descendant articles recursively', async () => {
    const res = await get(makeURL('/en/get-started/article-grid-bespoke'))
    expect(res.statusCode).toBe(200)

    expect(res.body).toContain('## Articles')
    expect(res.body).toContain('[Grid Article One]')
    expect(res.body).toContain('[Grid Article Two]')
    expect(res.body).toContain('[Grid Article Three]')
    expect(res.body).toContain('[Grid Article Four]')
  })

  test('renders intro links as a getting started section', async () => {
    const res = await get(makeURL('/en/get-started/article-grid-bespoke'))
    expect(res.statusCode).toBe(200)

    const start = res.body.indexOf('## Links')
    expect(start).toBeGreaterThan(-1)
    const end = res.body.indexOf('\n## ', start)
    const linksSection = res.body.slice(start, end === -1 ? undefined : end)
    expect(linksSection).toContain('### Getting started')
    expect(linksSection).toContain(
      '[Grid Article One](/en/get-started/article-grid-bespoke/grid-category-one/grid-article-one)',
    )
    expect(linksSection).toContain(
      '[Grid Article Three](/en/get-started/article-grid-bespoke/grid-category-two/grid-article-three)',
    )
    expect(linksSection).not.toContain('[Grid Article Two]')
  })
})
