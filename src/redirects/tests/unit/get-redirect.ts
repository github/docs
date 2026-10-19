import { describe, expect, test } from 'vitest'

import getRedirect from '../../lib/get-redirect'
import type { Context } from '@/types'
import {
  latest,
  latestStable,
  supported,
  oldestSupported,
} from '@/versions/lib/enterprise-server-releases'

type TestContext = {
  [key: string]: unknown
  pages: Record<string, unknown>
  redirects: Record<string, string>
}

const previousEnterpriserServerVersion = supported[1]

describe('getRedirect basics', () => {
  // Static developer.json redirects must win before legacy enterprise prefixes are normalized.
  // For /enterprise/3.0/foo/bar, lookup happens before /enterprise-server@3.0 rewriting.
  test('should sometimes not correct the version prefix', () => {
    const uri = '/enterprise/3.0/foo/bar'
    const ctx: TestContext = {
      pages: {},
      redirects: {
        '/enterprise/3.0/foo/bar': '/something/else',
      },
    }
    expect(getRedirect(uri, ctx as unknown as Context)).toBe('/en/something/else')
  })

  test('should return undefined if nothing could be found', () => {
    const ctx: TestContext = {
      pages: {},
      redirects: {},
    }
    expect(getRedirect('/foo/pizza', ctx as unknown as Context)).toBeUndefined()
  })

  test('should just inject language on version "home pages"', () => {
    const ctx: TestContext = {
      pages: {},
      redirects: {},
    }
    expect(getRedirect('/enterprise-cloud@latest', ctx as unknown as Context)).toBe(
      '/en/enterprise-cloud@latest',
    )

    expect(getRedirect(`/enterprise-server@${oldestSupported}`, ctx as unknown as Context)).toBe(
      `/en/enterprise-server@${oldestSupported}`,
    )

    expect(getRedirect('/enterprise-server@latest', ctx as unknown as Context)).toBe(
      `/en/enterprise-server@${latestStable}`,
    )
    expect(getRedirect('/enterprise-server', ctx as unknown as Context)).toBe(
      `/en/enterprise-server@${latestStable}`,
    )
  })

  test('should always "remove" the free-pro-team prefix', () => {
    const ctx = {
      pages: {},
      redirects: {
        '/foo': '/bar',
      },
    }
    expect(getRedirect('/free-pro-team@latest', ctx as unknown as Context)).toBe('/en')
    // free-pro-team@latest is versionless, so the language prefix remains.
    expect(getRedirect('/en/free-pro-team@latest', ctx as unknown as Context)).toBe('/en')
    expect(getRedirect('/free-pro-team@latest/pizza', ctx as unknown as Context)).toBe('/en/pizza')
    expect(getRedirect('/free-pro-team@latest/foo', ctx as unknown as Context)).toBe('/en/bar')
    expect(getRedirect('/free-pro-team@latest/github', ctx as unknown as Context)).toBe(
      '/en/github',
    )
  })

  test('should handle some odd exceptions', () => {
    const ctx: TestContext = {
      pages: {},
      redirects: {},
    }
    expect(getRedirect('/desktop/guides/foo/bar', ctx as unknown as Context)).toBe(
      '/en/desktop/foo/bar',
    )
    expect(getRedirect('/admin/guides/foo/bar', ctx as unknown as Context)).toBe(
      `/en/enterprise-server@${latest}/admin/foo/bar`,
    )
    expect(getRedirect('/admin/something/else', ctx as unknown as Context)).toBe(
      `/en/enterprise-server@${latest}/admin/something/else`,
    )
    expect(getRedirect('/insights/stuff', ctx as unknown as Context)).toBe(
      `/en/enterprise-server@${latest}/insights/stuff`,
    )
  })

  test('should figure out redirect based on presence of pages in certain cases', () => {
    const ctx: TestContext = {
      pages: {
        [`/en/enterprise-server@${previousEnterpriserServerVersion}/foo/bar`]: null,
        [`/en/enterprise-server@${previousEnterpriserServerVersion}/admin/github-management`]: null,
      },
      redirects: {},
    }
    // The /user prefix can drop because the resulting page exists.
    expect(
      getRedirect(
        `/enterprise-server@${previousEnterpriserServerVersion}/user/foo/bar`,
        ctx as unknown as Context,
      ),
    ).toBe(`/en/enterprise-server@${previousEnterpriserServerVersion}/foo/bar`)
    expect(
      getRedirect(
        `/enterprise-server@${previousEnterpriserServerVersion}/admin/guides/user-management`,
        ctx as unknown as Context,
      ),
    ).toBe(`/en/enterprise-server@${previousEnterpriserServerVersion}/admin/github-management`)
  })

  test('should always correct the old enterprise prefix', () => {
    const ctx = {
      pages: {},
      redirects: {
        [`/enterprise-server@${previousEnterpriserServerVersion}/foo`]: `/enterprise-server@${previousEnterpriserServerVersion}/bar`,
      },
    }
    expect(getRedirect('/enterprise', ctx as unknown as Context)).toBe(
      `/en/enterprise-server@${latest}`,
    )
    expect(
      getRedirect(`/enterprise/${previousEnterpriserServerVersion}`, ctx as unknown as Context),
    ).toBe(`/en/enterprise-server@${previousEnterpriserServerVersion}`)
    expect(
      getRedirect(
        `/enterprise/${previousEnterpriserServerVersion}/something`,
        ctx as unknown as Context,
      ),
    ).toBe(`/en/enterprise-server@${previousEnterpriserServerVersion}/something`)
    // Respect redirects after normalizing the old enterprise prefix.
    expect(
      getRedirect(`/enterprise/${previousEnterpriserServerVersion}/foo`, ctx as unknown as Context),
    ).toBe(`/en/enterprise-server@${previousEnterpriserServerVersion}/bar`)

    // /enterprise/github paths map to enterprise-server github/admin paths.
    expect(getRedirect('/enterprise/github/admin/foo', ctx as unknown as Context)).toBe(
      `/en/enterprise-server@${latest}/github/admin/foo`,
    )
  })

  test('should not do anything on some prefixes', () => {
    const ctx: TestContext = {
      pages: {},
      redirects: {},
    }
    // No admin/guides rewrite applies when the path already has enterprise-server.
    expect(
      getRedirect(
        `/en/enterprise-server@${latest}/admin/something/else`,
        ctx as unknown as Context,
      ),
    ).toBeUndefined()
    expect(
      getRedirect(`/en/enterprise-cloud@latest/user/foo`, ctx as unknown as Context),
    ).toBeUndefined()
  })

  test('should redirect both the prefix and the path needs to change', () => {
    const ctx = {
      pages: {},
      redirects: {
        [`/enterprise-server@${latest}/foo`]: `/enterprise-server@${latest}/bar`,
        [`/enterprise-server@${latestStable}/foo`]: `/enterprise-server@${latestStable}/bar`,
      },
    }
    // enterprise-server without a version resolves to latest stable before redirect lookup.
    expect(getRedirect('/enterprise-server/foo', ctx as unknown as Context)).toBe(
      `/en/enterprise-server@${latestStable}/bar`,
    )
  })

  // Functional redirects cover enterprise-server 3.0 and later without lookup entries.
  test('should work for some deprecated enterprise-server URLs too', () => {
    const ctx: TestContext = {
      pages: {},
      redirects: {},
    }
    expect(getRedirect('/enterprise/3.0', ctx as unknown as Context)).toBe(
      '/en/enterprise-server@3.0',
    )
    expect(getRedirect('/enterprise/3.0/foo', ctx as unknown as Context)).toBe(
      '/en/enterprise-server@3.0/foo',
    )
  })
})

describe('github-ae@latest', () => {
  test('home page should redirect to enterprise-cloud home page', () => {
    const ctx: TestContext = {
      pages: {},
      redirects: {},
    }
    expect(getRedirect('/github-ae@latest', ctx as unknown as Context)).toBe(
      '/en/enterprise-cloud@latest',
    )
    expect(getRedirect('/en/github-ae@latest', ctx as unknown as Context)).toBe(
      '/en/enterprise-cloud@latest',
    )
  })
  test('should redirect to home page for admin/release-notes', () => {
    const ctx: TestContext = {
      pages: {},
      redirects: {},
    }
    expect(getRedirect('/github-ae@latest/admin/release-notes', ctx as unknown as Context)).toBe(
      '/en',
    )
    expect(getRedirect('/en/github-ae@latest/admin/release-notes', ctx as unknown as Context)).toBe(
      '/en',
    )
  })
  test('a page that does exits, without correction, in enterprise-cloud', () => {
    const ctx: TestContext = {
      pages: {
        '/en/enterprise-cloud@latest/foo': null,
      },
      redirects: {},
    }
    expect(getRedirect('/github-ae@latest/foo', ctx as unknown as Context)).toBe(
      '/en/enterprise-cloud@latest/foo',
    )
    expect(getRedirect('/en/github-ae@latest/foo', ctx as unknown as Context)).toBe(
      '/en/enterprise-cloud@latest/foo',
    )
  })
  test("a page that doesn't exist in enterprise-cloud but in FPT", () => {
    const ctx: TestContext = {
      pages: {
        '/en/foo': true,
      },
      redirects: {},
    }
    expect(getRedirect('/github-ae@latest/foo', ctx as unknown as Context)).toBe('/en/foo')
    expect(getRedirect('/en/github-ae@latest/foo', ctx as unknown as Context)).toBe('/en/foo')
  })
  test("a page that doesn't exist in enterprise-cloud or in FPT", () => {
    const ctx: TestContext = {
      pages: {
        '/en/foo': true,
      },
      redirects: {},
    }
    expect(getRedirect('/github-ae@latest/bar', ctx as unknown as Context)).toBe('/en')
    expect(getRedirect('/en/github-ae@latest/bar', ctx as unknown as Context)).toBe('/en')
  })
  test('a URL with legacy redirects, that redirects to enterprise-cloud', () => {
    const ctx: TestContext = {
      pages: {
        '/en/foo': true,
        '/en/enterprise-cloud@latest/foo': true,
      },
      redirects: {
        '/food': '/foo',
      },
    }
    expect(getRedirect('/github-ae@latest/food', ctx as unknown as Context)).toBe(
      '/en/enterprise-cloud@latest/foo',
    )
    expect(getRedirect('/en/github-ae@latest/food', ctx as unknown as Context)).toBe(
      '/en/enterprise-cloud@latest/foo',
    )
  })
  test("a URL with legacy redirects, that can't redirect to enterprise-cloud", () => {
    const ctx: TestContext = {
      pages: {
        '/en/foo': true,
        // No enterprise-cloud page exists here, so GitHub AE falls back to Free/Pro/Team.
      },
      redirects: {
        '/food': '/foo',
      },
    }
    expect(getRedirect('/github-ae@latest/food', ctx as unknown as Context)).toBe('/en/foo')
    expect(getRedirect('/en/github-ae@latest/food', ctx as unknown as Context)).toBe('/en/foo')
  })
  test('should 404 if nothing matches at all', () => {
    const ctx = {
      pages: {},
      redirects: {},
    }
    expect(getRedirect('/github-ae@latest/never/heard/of', ctx as unknown as Context)).toBe('/en')
    expect(getRedirect('/en/github-ae@latest/never/heard/of', ctx as unknown as Context)).toBe(
      '/en',
    )
  })
})
