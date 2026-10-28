import { describe, expect, test, vi } from 'vitest'

import { validateDocsUrl } from '@/links/lib/validate-docs-urls'

// Stub the site and request context so the test avoids loading all content.
vi.mock('@/frame/lib/warm-server', () => ({
  default: vi.fn(async () => ({ pages: {}, redirects: {} })),
}))
vi.mock('@/frame/middleware/context/context', () => ({
  default: vi.fn(),
}))

describe('validateDocsUrl', () => {
  test('reports a missing page with a fragment as not found', async () => {
    const checks = await validateDocsUrl(
      { missing: '/copilot/unwritten-page#setup' },
      { checkFragments: true },
    )
    expect(checks).toEqual([
      {
        identifier: 'missing',
        url: '/copilot/unwritten-page#setup',
        pageURL: '/en/copilot/unwritten-page',
        fragment: 'setup',
        found: false,
      },
    ])
  })
})
