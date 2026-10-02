import { describe, expect, test } from 'vitest'

import { languageKeys } from '@/languages/lib/languages-server'
import { get } from '@/tests/helpers/e2etest'

const langs = languageKeys.filter((lang) => lang !== 'en')

// Fixture indexing creates only English and Japanese indexes, so this suite cannot
// run against every non-English language in CI.
describe.skip('search', () => {
  test.each(langs)('search in %s', async (lang) => {
    const res = await get(`/search?language=${lang}&version=dotcom&query=pages`)
    expect(res.statusCode).toBe(200)
  })
})
