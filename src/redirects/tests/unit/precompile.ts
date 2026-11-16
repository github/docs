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

// makePage supplies only the Page fields precompileRedirects needs: languageCode, permalinks, and
// buildRedirects.
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
    // The old page exists only in GHES 3.14.
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

    // redirect_from on the replacement page must not clobber the old GHES 3.14 permalink.
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

    // The GHES 3.14 old-page permalink wins over the replacement page's redirect_from.
    expect(redirects['/enterprise-server@3.14/foo']).toBeUndefined()

    // GHES 3.15 lacks the old page, so redirect_from still creates the redirect.
    expect(redirects['/enterprise-server@3.15/foo']).toBe('/enterprise-server@3.15/bar')
  })
})
