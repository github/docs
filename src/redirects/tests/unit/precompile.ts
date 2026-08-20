import { describe, expect, test, vi } from 'vitest'

import type { Page } from '@/types'

vi.mock('@/frame/lib/read-json-file', () => ({
  readCompressedJsonFileFallback: () => ({}),
}))

vi.mock('../../lib/exception-redirects', () => ({
  default: () => ({}),
}))

const { default: precompileRedirects } = await import('../../lib/precompile')
const { default: generateRedirectsForPermalinks } = await import('../../lib/permalinks')

// Minimal stand-in for a Page instance. precompileRedirects() only relies on
// `languageCode`, `permalinks`, and `buildRedirects()`.
function makePage(
  languageCode: string,
  permalinks: { pageVersion: string; hrefWithoutLanguage: string }[],
  redirectFrom: string[],
): Page {
  const fullPermalinks = permalinks.map((permalink) => ({
    languageCode,
    title: 'Title',
    href: `/${languageCode}${permalink.hrefWithoutLanguage}`,
    ...permalink,
  }))
  return {
    languageCode,
    permalinks: fullPermalinks,
    redirect_from: redirectFrom,
    buildRedirects: () => generateRedirectsForPermalinks(fullPermalinks, redirectFrom),
  } as unknown as Page
}

describe('precompileRedirects', () => {
  test('removes a redirect_from-generated redirect that clobbers a live old-page permalink, but keeps it for versions where the old page is absent', async () => {
    // The old page only exists in GHES 3.14.
    const oldPage = makePage(
      'en',
      [
        {
          pageVersion: 'enterprise-server@3.14',
          hrefWithoutLanguage: '/enterprise-server@3.14/foo',
        },
      ],
      [],
    )

    // The replacement page exists in both 3.14 and 3.15, and declares
    // `redirect_from: ['/foo']`, which would otherwise clobber the old
    // page's live permalink in 3.14.
    const newPage = makePage(
      'en',
      [
        {
          pageVersion: 'enterprise-server@3.14',
          hrefWithoutLanguage: '/enterprise-server@3.14/bar',
        },
        {
          pageVersion: 'enterprise-server@3.15',
          hrefWithoutLanguage: '/enterprise-server@3.15/bar',
        },
      ],
      ['/foo'],
    )

    const redirects = await precompileRedirects([oldPage, newPage])

    // The old page's live permalink in 3.14 must not be clobbered by the
    // replacement page's redirect_from.
    expect(redirects['/enterprise-server@3.14/foo']).toBeUndefined()

    // But in 3.15, where the old page doesn't exist, the redirect must
    // still be there.
    expect(redirects['/enterprise-server@3.15/foo']).toBe('/enterprise-server@3.15/bar')
  })
})
