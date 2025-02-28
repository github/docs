import path from 'path'

import { describe, expect, test, vi } from 'vitest'

import { loadPages } from '#src/frame/lib/page-data.js'
import Permalink from '#src/frame/lib/permalink.js'

describe('redirect orphans', () => {
  // Because calling `loadPages` will trigger a warmup, this can potentially
  // be very slow in CI. So we need a timeout.
  vi.setConfig({ testTimeout: 60 * 1000 })

  test('no page is a redirect in another file', async () => {
    // Only doing English because they're the only files we do PRs for.
    const pageList = await loadPages(undefined, ['en'])

    const redirectFroms = new Map()
    for (const page of pageList) {
      for (const redirectFrom of page.redirect_from || []) {
        if (redirectFrom.endsWith('/') && redirectFrom.startsWith('/')) {
          throw new Error(
            `In ${path.join(
              'content',
              page.relativePath,
            )} redirect entry (${redirectFrom}) has a trailing slash`,
          )
        }
        redirectFroms.set(redirectFrom, page.relativePath)
      }
    }

    const errors = []
    for (const page of pageList) {
      const asPath = Permalink.relativePathToSuffix(page.relativePath)
      if (redirectFroms.has(asPath)) {
        errors.push(
          `${asPath} is a redirect_from in ${path.join('content', redirectFroms.get(asPath))}`,
        )
      }
    }
    expect(errors.length, errors.join('\n')).toBe(0)
  })
})
