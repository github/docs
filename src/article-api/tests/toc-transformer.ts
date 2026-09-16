import { describe, expect, test } from 'vitest'

import { get } from '@/tests/helpers/e2etest'

const makeURL = (pathname: string): string =>
  `/api/article/body?${new URLSearchParams({ pathname })}`

describe('toc transformer', () => {
  test('renders a category page (3-segment URL) with children', async () => {
    // /en/actions/category is a category page (documentType: category) with children but no layout
    const res = await get(makeURL('/en/actions/category'))
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toContain('text/markdown')

    // Check for title and intro
    expect(res.body).toContain('# Category page of GitHub Actions')
    expect(res.body).toContain('Learn how to migrate your existing CI/CD workflows')

    // Should have Links section with children (uses full title, not shortTitle)
    expect(res.body).toContain('## Links')
    expect(res.body).toContain('[Subcategory page about Actions](/en/actions/category/subcategory)')
  })

  test('renders a subcategory page (4+-segment URL) with children', async () => {
    // /en/actions/category/subcategory is a subcategory page (documentType: subcategory) with children but no layout
    const res = await get(makeURL('/en/actions/category/subcategory'))
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toContain('text/markdown')

    // Check for title
    expect(res.body).toContain('# Subcategory page about Actions')

    // Should have Links section with children
    expect(res.body).toContain('## Links')
  })

  test('includes child intro text', async () => {
    const res = await get(makeURL('/en/actions/category'))
    expect(res.statusCode).toBe(200)

    // Each child link should have its intro text below
    expect(res.body).toContain("Here's the intro for")
  })

  test('resolves child page titles correctly', async () => {
    const res = await get(makeURL('/en/actions/category/subcategory'))
    expect(res.statusCode).toBe(200)

    // Should NOT have href paths as titles
    expect(res.body).not.toContain('* [/en/actions/category/subcategory/')

    // Should have proper article titles (or shortTitle)
    expect(res.body).toMatch(/\[.*\]\(\/en\/actions\/category\/subcategory\/.*\)/)
  })
})
