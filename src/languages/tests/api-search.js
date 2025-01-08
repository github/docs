import { expect, test, vi } from 'vitest'

import { describeIfElasticsearchURL } from '#src/tests/helpers/conditional-runs.js'
import { get } from '#src/tests/helpers/e2etest.js'

// This suite only runs if $ELASTICSEARCH_URL is set.
describeIfElasticsearchURL('search v1 middleware in non-English', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  test('basic search in Japanese', async () => {
    const sp = new URLSearchParams()
    // To see why this will work,
    // see src/search/tests/fixtures/search-indexes/github-docs-dotcom-en-records.json
    // which clearly has a record with the title "Foo"
    sp.set('query', 'foo')
    sp.set('language', 'ja')
    const res = await get('/api/search/v1?' + sp)
    expect(res.statusCode).toBe(200)
    const results = JSON.parse(res.body)

    expect(results.meta).toBeTruthy()
    expect(results.meta.found.value).toBeGreaterThanOrEqual(1)
    expect(results.meta.found.relation).toBeTruthy()
    expect(results.meta.page).toBe(1)
    expect(results.meta.size).toBeGreaterThanOrEqual(1)
    expect(results.meta.took.query_msec).toBeGreaterThanOrEqual(0)
    expect(results.meta.took.total_msec).toBeGreaterThanOrEqual(0)

    // Might be empty but at least an array
    expect(results.hits).toBeTruthy()
    // The word 'foo' appears in more than 1 document in the fixtures.
    expect(results.hits.length).toBeGreaterThanOrEqual(1)
    // ...but only one has the word "foo" in its title so we can
    // be certain it comes first.
    const hit = results.hits[0]
    // This specifically checks what we expect of version v1
    expect(hit.url).toBe('/ja/foo')
    expect(hit.title).toBe('フー')
    expect(hit.breadcrumbs).toBe('fooing')
  })
})
