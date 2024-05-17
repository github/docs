import { expect, test, vi } from 'vitest'
import { get, getDOM } from '#src/tests/helpers/e2etest.js'

import { describeIfDocsEarlyAccess } from '#src/tests/helpers/conditional-runs.js'
import languages from '#src/languages/lib/languages.js'

const VALID_EARLY_ACCESS_URI = '/early-access/github/save-time-with-slash-commands'

describeIfDocsEarlyAccess('early access rendering', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  test('viewing landing page', async () => {
    const res = await get('/en/early-access')
    expect(res.statusCode).toBe(404)
  })

  test('redirect to known docs-early-access page', async () => {
    const res = await get(VALID_EARLY_ACCESS_URI)
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe(`/en${VALID_EARLY_ACCESS_URI}`)
  })

  test('render known docs-early-access page', async () => {
    const res = await get(VALID_EARLY_ACCESS_URI, { followAllRedirects: true })
    expect(res.statusCode).toBe(200)
  })

  test('404 if any other language than English', async () => {
    for (const code of Object.keys(languages)) {
      if (code === 'en') {
        // This is tested elsewhere
        continue
      }
      const res = await get(`/${code}${VALID_EARLY_ACCESS_URI}`)
      expect(res.statusCode).toBe(404)
    }
  })

  test('no language dropdown present', async () => {
    const $ = await getDOM(VALID_EARLY_ACCESS_URI)
    expect($('[data-testid=language-picker]').length).toBe(0)
  })
})
