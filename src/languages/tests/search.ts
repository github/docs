import { describe, expect, test } from 'vitest'

import { languageKeys } from '@/languages/lib/languages'
import { get } from '@/tests/helpers/e2etest'

const langs = languageKeys.filter((lang) => lang !== 'en')

// Skipping for now, as we would need to download the indexes with LFS
// in Actions to run these. Explore again after ES switch over.
describe.skip('search', () => {
  test.each(langs)('search in %s', async (lang) => {
    const res = await get(`/search?language=${lang}&version=dotcom&query=pages`)
    expect(res.statusCode).toBe(200)
  })
})
