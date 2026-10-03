import { expect, test, vi } from 'vitest'

import { describeIfElasticsearchURL } from '@/tests/helpers/conditional-runs'
import { get } from '@/tests/helpers/e2etest'

// This suite only runs if $ELASTICSEARCH_URL is set.
// The basic Japanese search test uses localized /ja/foo and /ja/bar records from
// src/search/tests/fixtures/search-indexes/tests_github-docs_general-search_fpt_ja-records.json.
describeIfElasticsearchURL('search v1 middleware in non-English', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  test('basic search in Japanese', async () => {
    const sp = new URLSearchParams()
    sp.set('query', 'foo')
    sp.set('language', 'ja')
    const res = await get(`/api/search/v1?${sp}`)
    expect(res.statusCode).toBe(200)
    const results = JSON.parse(res.body)

    expect(results.meta).toBeTruthy()
    expect(results.meta.found.value).toBeGreaterThanOrEqual(1)
    expect(results.meta.found.relation).toBeTruthy()
    expect(results.meta.page).toBe(1)
    expect(results.meta.size).toBeGreaterThanOrEqual(1)
    expect(results.meta.took.query_msec).toBeGreaterThanOrEqual(0)
    expect(results.meta.took.total_msec).toBeGreaterThanOrEqual(0)

    // The fixture query must return a nonempty hits value before this test reads hits[0].
    expect(results.hits).toBeTruthy()
    // The query matches multiple Japanese records; /ja/foo should rank first.
    expect(results.hits.length).toBeGreaterThanOrEqual(1)
    const hit = results.hits[0]
    // Search v1 returns the localized foo page first.
    expect(hit.url).toBe('/ja/foo')
    expect(hit.title).toBe('フー')
    expect(hit.breadcrumbs).toBe('fooing')
  })
})
