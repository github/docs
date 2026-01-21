import { describe, expect, test } from 'vitest'

import { get } from '@/tests/helpers/e2etest'

const makeURL = (pathname: string): string =>
  `/api/article/body?${new URLSearchParams({ pathname })}`

describe('product landing transformer', () => {
  test('renders a product landing page with basic structure', async () => {
    // /en/actions is a product landing page in fixtures
    const res = await get(makeURL('/en/actions'))
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toContain('text/markdown')

    // Check for title
    expect(res.body).toContain('# GitHub Actions Documentation')

    // Should have intro
    expect(res.body).toContain('Automate away with')
  })

  test('renders child categories under Links section', async () => {
    const res = await get(makeURL('/en/actions'))
    expect(res.statusCode).toBe(200)

    // All children should be listed under Links section
    expect(res.body).toContain('## Links')

    // Should contain child categories from fixtures (uses full title, not shortTitle)
    expect(res.body).toContain('[Category page of GitHub Actions](/en/actions/category)')
    expect(res.body).toContain('[Using workflows](/en/actions/using-workflows)')
  })

  test('includes child intros', async () => {
    const res = await get(makeURL('/en/actions'))
    expect(res.statusCode).toBe(200)

    // Each child should have its intro
    expect(res.body).toContain('Learn how to migrate your existing CI/CD workflows')
    expect(res.body).toContain('Learn how to use workflows')
  })
})
