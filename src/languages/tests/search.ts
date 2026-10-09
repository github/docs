import { expect, test, vi } from 'vitest'

import { describeIfElasticsearchURL } from '@/tests/helpers/conditional-runs'
import { getDOM } from '@/tests/helpers/e2etest'

// Fixture indexing creates only English and Japanese indexes, so Japanese
// stands in for every non-English language.
describeIfElasticsearchURL('search page in non-English languages', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  // src/search/tests/fixtures/search-indexes/tests_github-docs_general-search_fpt_ja-records.json has title "フー".
  test('renders Japanese search results', async () => {
    const $ = await getDOM('/ja/search?query=foo')
    const titles = $('[data-testid="search-result"] h2')
      .map((i, el) => $(el).text())
      .get()
    expect(titles).toContain('フー')
  })
})
