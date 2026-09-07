import { describe, expect, test } from 'vitest'

import { get } from '@/tests/helpers/e2etest'

const makeURL = (pathname: string): string =>
  `/api/article/body?${new URLSearchParams({ pathname })}`

describe('category landing transformer', () => {
  test('handles subcategory pages without category-landing layout', async () => {
    // /en/get-started/start-your-journey is a subcategory index page without category-landing layout
    // It should return 403 (not transformed) or be handled by default behavior
    const res = await get(makeURL('/en/get-started/start-your-journey'))

    // This page doesn't have category-landing layout, so it won't be transformed
    // That's expected behavior - only pages with layout: category-landing are transformed
    expect([200, 403]).toContain(res.statusCode)
  })
})
