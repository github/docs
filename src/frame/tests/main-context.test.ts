import { describe, expect, test } from 'vitest'
import type { Response } from 'express'

import { getMainContext } from '@/frame/components/context/MainContext'
import type { ExtendedRequest } from '@/types'

const UI_NAMESPACES = [
  'alerts',
  'header',
  'search',
  'old_search',
  'survey',
  'toc',
  'meta',
  'scroll_button',
  'pages',
  'picker',
  'footer',
  'contribution_cta',
  'support',
  'rest',
  'cookbook_landing',
  'code_tabs',
]

function createRequest(cookies: Record<string, string>): ExtendedRequest {
  return {
    cookies,
    protocol: 'https',
    hostname: 'docs.github.com',
    originalUrl: '/en/get-started/foo/bar',
    get: () => undefined,
    context: {
      site: { data: { ui: Object.fromEntries(UI_NAMESPACES.map((ns) => [ns, {}])) } },
      page: { documentType: 'article', title: 'Bar', permalinks: [] },
      sidebarTree: { title: 'Get started', href: '/en/get-started', childPages: [] },
      enterpriseServerReleases: { releasesWithOldestDeprecationDate: [], releaseCandidate: null },
      enterpriseServerVersions: [],
      allVersions: {},
      currentVersion: 'free-pro-team@latest',
      currentPathWithoutLanguage: '/get-started/foo/bar',
      nonEnterpriseDefaultVersion: 'free-pro-team@latest',
    },
  } as unknown as ExtendedRequest
}

const res = { statusCode: 200 } as Response

describe('getMainContext', () => {
  // Page HTML and _next/data are publicly CDN-cached without varying on Cookie.
  test('does not depend on per-user sidebar cookies', async () => {
    const withCookies = await getMainContext(
      createRequest({
        sidebar_expanded: JSON.stringify({ '/en/get-started': false }),
        sidebar_collapsed: 'true',
      }),
      res,
    )
    const withoutCookies = await getMainContext(createRequest({}), res)

    expect(withCookies).not.toHaveProperty('sidebarExpanded')
    expect(withCookies).not.toHaveProperty('sidebarCollapsed')
    expect(withCookies).toEqual(withoutCookies)
  })
})
