import path from 'path'

import { describe, expect, test, vi } from 'vitest'

import { loadPages } from '@/frame/lib/page-data'

describe('redirect orphans', () => {
  // Because calling `loadPages` will trigger a warmup, this can potentially
  // be very slow in CI. So we need a timeout.
  vi.setConfig({ testTimeout: 60 * 1000 })

  test('no redirect_from entry has a trailing slash', async () => {
    // Only doing English because they're the only files we do PRs for.
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
