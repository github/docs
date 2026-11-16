import { describe, expect, test, vi } from 'vitest'

import { SearchPageTransformer } from '@/article-api/transformers/search-page-transformer'
import type { Context, Page } from '@/types'

const stubPage = {
  relativePath: 'search/index.md',
  renderTitle: vi.fn().mockResolvedValue('Search'),
} as unknown as Page

describe('SearchPageTransformer', () => {
  test('points to the versioned Search API endpoint', async () => {
    const transformer = new SearchPageTransformer()
    const result = await transformer.transform(stubPage, '/en/search', {} as Context)

    expect(result).toContain('# Search')
    // The bare /api/search path redirects, and curl requests without client_name get a 400.
    expect(result).toContain(
      'curl "https://docs.github.com/api/search/v1?query=actions&client_name=docs-api-example&language=en&version=free-pro-team@latest"',
    )
  })
})
