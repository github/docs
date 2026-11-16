import path from 'path'

import { describe, expect, test, vi } from 'vitest'

import { loadPages } from '@/frame/lib/page-data'

describe('redirect orphans', () => {
  // loadPages warms up the page cache, which can be slow in CI, so this test needs a timeout.
  vi.setConfig({ testTimeout: 60 * 1000 })

  test('no redirect_from entry has a trailing slash', async () => {
    // Only English files receive pull requests, so test English redirect_from entries.
    const pageList = await loadPages(undefined, ['en'])

    const errors = []
    for (const page of pageList) {
      for (const redirectFrom of page.redirect_from || []) {
        if (redirectFrom.endsWith('/') && redirectFrom.startsWith('/')) {
          errors.push(
            `In ${path.join('content', page.relativePath)} redirect entry (${redirectFrom}) has a trailing slash`,
          )
        }
      }
    }
    expect(errors.length, errors.join('\n')).toBe(0)
  })
})
