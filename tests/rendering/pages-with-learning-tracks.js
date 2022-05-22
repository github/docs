import { jest, expect } from '@jest/globals'

import { getDOM } from '../helpers/e2etest.js'
import { loadPages } from '../../lib/page-data.js'

describe('process learning tracks', () => {
  // Because calling `loadPages` will trigger a warmup, this can potentially
  // be very slow in CI. So we need a timeout.
  jest.setTimeout(60 * 1000)

  test('pages with learningTracks ', async () => {
    const pageList = await loadPages(undefined, ['en'])

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
