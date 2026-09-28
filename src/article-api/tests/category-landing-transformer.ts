import { describe, expect, test } from 'vitest'

import { get } from '@/tests/helpers/e2etest'

const makeURL = (pathname: string): string =>
  `/api/article/body?${new URLSearchParams({ pathname })}`

describe('category landing transformer', () => {
  // Only pages with layout: category-landing use this transformer.
  test('handles subcategory pages without category-landing layout', async () => {
    const res = await get(makeURL('/en/get-started/start-your-journey'))

    expect([200, 403]).toContain(res.statusCode)
  })
})
