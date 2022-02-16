import { jest, beforeAll, expect } from '@jest/globals'

import { getDOM } from '../helpers/supertest.js'
import { loadPages } from '../../lib/page-data.js'

describe('process learning tracks', () => {
  let pageList

  // Because calling `loadPages` will trigger a warmup, this can potentially
  // be very slow in CI. So we need a timeout.
  jest.setTimeout(60 * 1000)

  beforeAll(async () => {
    // Only doing English because they're the only files we do PRs for.
    pageList = (await loadPages()).filter((page) => page.languageCode === 'en')
  })

  test('pages with learningTracks ', async () => {
    for (const page of pageList) {
      if (page.learningTracks && page.learningTracks.length > 0) {
        for (const permalink of page.permalinks) {
          const $ = await getDOM(permalink.href)
          expect($('[data-testid="learning-track"]').length).toBeGreaterThanOrEqual(1)
        }
      }
    }
  })
})
