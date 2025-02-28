import { describe, expect, test } from 'vitest'

import getRedirect from '../../lib/get-redirect.js'
import {
  latest,
  latestStable,
  supported,
  oldestSupported,
} from '#src/versions/lib/enterprise-server-releases.js'

const previousEnterpriserServerVersion = supported[1]

describe('getRedirect basics', () => {
  test('should sometimes not correct the version prefix', () => {
    // This essentially tests legacy entries that come from the
    // `developer.json` file. Normally, we would have first
    // rewritten `/enterprise/3.0` to `/enterprise-server@3.0`
    // and then, from there, worried about the remaining `/foo/bar`
    // part.
    // But some redirects from `developer.json` as old and static.
    const uri = '/enterprise/3.0/foo/bar'
    const ctx = {
      pages: {},
      redirects: {
        '/enterprise/3.0/foo/bar': '/something/else',
      },
    }
    expect(getRedirect(uri, ctx)).toBe('/en/something/else')
  })

  test('should return undefined if nothing could be found', () => {
    const ctx = {
      pages: {},
      redirects: {},
    }
    expect(getRedirect('/foo/pizza', ctx)).toBeUndefined()
  })

  test('should just inject language on version "home pages"', () => {
    const ctx = {
      pages: {},
      redirects: {},
    }
    expect(getRedirect('/enterprise-cloud@latest', ctx)).toBe('/en/enterprise-cloud@latest')

    expect(getRedirect(`/enterprise-server@${oldestSupported}`, ctx)).toBe(
      `/en/enterprise-server@${oldestSupported}`,
    )

    expect(getRedirect('/enterprise-server@latest', ctx)).toBe(
      `/en/enterprise-server@${latestStable}`,
    )
    expect(getRedirect('/enterprise-server', ctx)).toBe(`/en/enterprise-server@${latestStable}`)
  })

  test('should always "remove" the free-pro-team prefix', () => {
    const ctx = {
      pages: {},
      redirects: {
        '/foo': '/bar',
      },
    }
    expect(getRedirect('/free-pro-team@latest', ctx)).toBe('/en')
    // Language is fine, but the version needs to be "removed"
    expect(getRedirect('/en/free-pro-team@latest', ctx)).toBe('/en')
    expect(getRedirect('/free-pro-team@latest/pizza', ctx)).toBe('/en/pizza')
    expect(getRedirect('/free-pro-team@latest/foo', ctx)).toBe('/en/bar')
    expect(getRedirect('/free-pro-team@latest/github', ctx)).toBe('/en/github')
  })

  test('should handle some odd exceptions', () => {
    const ctx = {
      pages: {},
      redirects: {},
    }
    expect(getRedirect('/desktop/guides/foo/bar', ctx)).toBe('/en/desktop/foo/bar')
    expect(getRedirect('/admin/guides/foo/bar', ctx)).toBe(
      `/en/enterprise-server@${latest}/admin/foo/bar`,
    )
    expect(getRedirect('/admin/something/else', ctx)).toBe(
      `/en/enterprise-server@${latest}/admin/something/else`,
    )
    expect(getRedirect('/insights/stuff', ctx)).toBe(
      `/en/enterprise-server@${latest}/insights/stuff`,
    )
  })

  test('should figure out redirect based on presence of pages in certain cases', () => {
    const ctx = {
      pages: {
        [`/en/enterprise-server@${previousEnterpriserServerVersion}/foo/bar`]: null,
        [`/en/enterprise-server@${previousEnterpriserServerVersion}/admin/github-management`]: null,
      },
      redirects: {},
    }
    // Replacing `/user` with `` worked because there exits a page of such name.
    expect(
      getRedirect(`/enterprise-server@${previousEnterpriserServerVersion}/user/foo/bar`, ctx),
    ).toBe(`/en/enterprise-server@${previousEnterpriserServerVersion}/foo/bar`)
    expect(
      getRedirect(
        `/enterprise-server@${previousEnterpriserServerVersion}/admin/guides/user-management`,
        ctx,
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
    expect(getRedirect('/enterprise', ctx)).toBe(`/en/enterprise-server@${latest}`)
    expect(getRedirect(`/enterprise/${previousEnterpriserServerVersion}`, ctx)).toBe(
      `/en/enterprise-server@${previousEnterpriserServerVersion}`,
    )
    expect(getRedirect(`/enterprise/${previousEnterpriserServerVersion}/something`, ctx)).toBe(
      `/en/enterprise-server@${previousEnterpriserServerVersion}/something`,
    )
    // but also respect redirects if there are some
    expect(getRedirect(`/enterprise/${previousEnterpriserServerVersion}/foo`, ctx)).toBe(
      `/en/enterprise-server@${previousEnterpriserServerVersion}/bar`,
    )

    // Unique snowflake pattern
    expect(getRedirect('/enterprise/github/admin/foo', ctx)).toBe(
      `/en/enterprise-server@${latest}/github/admin/foo`,
    )
  })

  test('should not do anything on some prefixes', () => {
    const ctx = {
      pages: {},
      redirects: {},
    }
    // Nothing's needed here because it's not /admin/guides and
    // it already has the enterprise-server prefix.
    expect(getRedirect(`/en/enterprise-server@${latest}/admin/something/else`, ctx)).toBeUndefined()
    expect(getRedirect(`/en/enterprise-cloud@latest/user/foo`, ctx)).toBeUndefined()
  })

  test('should redirect both the prefix and the path needs to change', () => {
    const ctx = {
      pages: {},
      redirects: {
        [`/enterprise-server@${latest}/foo`]: `/enterprise-server@${latest}/bar`,
        [`/enterprise-server@${latestStable}/foo`]: `/enterprise-server@${latestStable}/bar`,
      },
    }
    // Nothing's needed here because it's not /admin/guides and
    // it already has the enterprise-server prefix.
    expect(getRedirect('/enterprise-server/foo', ctx)).toBe(
      `/en/enterprise-server@${latestStable}/bar`,
    )
  })

  test('should work for some deprecated enterprise-server URLs too', () => {
    // Starting with enterprise-server 3.0, we have made redirects become
    // a *function* rather than a lookup on a massive object.
    const ctx = {
      pages: {},
      redirects: {},
    }
    expect(getRedirect('/enterprise/3.0', ctx)).toBe('/en/enterprise-server@3.0')
    expect(getRedirect('/enterprise/3.0/foo', ctx)).toBe('/en/enterprise-server@3.0/foo')
  })
})

describe('github-ae@latest', () => {
  test('home page should redirect to enterprise-cloud home page', () => {
    const ctx = {
      pages: {},
      redirects: {},
    }
    expect(getRedirect('/github-ae@latest', ctx)).toBe('/en/enterprise-cloud@latest')
    expect(getRedirect('/en/github-ae@latest', ctx)).toBe('/en/enterprise-cloud@latest')
  })
  test('should redirect to home page for admin/release-notes', () => {
    const ctx = {
      pages: {},
      redirects: {},
    }
    expect(getRedirect('/github-ae@latest/admin/release-notes', ctx)).toBe('/en')
    expect(getRedirect('/en/github-ae@latest/admin/release-notes', ctx)).toBe('/en')
  })
  test('a page that does exits, without correction, in enterprise-cloud', () => {
    const ctx = {
      pages: {
        '/en/enterprise-cloud@latest/foo': null,
      },
      redirects: {},
    }
    expect(getRedirect('/github-ae@latest/foo', ctx)).toBe('/en/enterprise-cloud@latest/foo')
    expect(getRedirect('/en/github-ae@latest/foo', ctx)).toBe('/en/enterprise-cloud@latest/foo')
  })
  test("a page that doesn't exist in enterprise-cloud but in FPT", () => {
    const ctx = {
      pages: {
        '/en/foo': true,
      },
      redirects: {},
    }
    expect(getRedirect('/github-ae@latest/foo', ctx)).toBe('/en/foo')
    expect(getRedirect('/en/github-ae@latest/foo', ctx)).toBe('/en/foo')
  })
  test("a page that doesn't exist in enterprise-cloud or in FPT", () => {
    const ctx = {
      pages: {
        '/en/foo': true,
      },
      redirects: {},
    }
    expect(getRedirect('/github-ae@latest/bar', ctx)).toBe('/en')
    expect(getRedirect('/en/github-ae@latest/bar', ctx)).toBe('/en')
  })
  test('a URL with legacy redirects, that redirects to enterprise-cloud', () => {
    const ctx = {
      pages: {
        '/en/foo': true,
        '/en/enterprise-cloud@latest/foo': true,
      },
      redirects: {
        '/food': '/foo',
      },
    }
    expect(getRedirect('/github-ae@latest/food', ctx)).toBe('/en/enterprise-cloud@latest/foo')
    expect(getRedirect('/en/github-ae@latest/food', ctx)).toBe('/en/enterprise-cloud@latest/foo')
  })
  test("a URL with legacy redirects, that can't redirect to enterprise-cloud", () => {
    const ctx = {
      pages: {
        '/en/foo': true,
        // Note the lack of an enterprise-cloud page here
      },
      redirects: {
        '/food': '/foo',
      },
    }
    expect(getRedirect('/github-ae@latest/food', ctx)).toBe('/en/foo')
    expect(getRedirect('/en/github-ae@latest/food', ctx)).toBe('/en/foo')
  })
  test('should 404 if nothing matches at all', () => {
    const ctx = {
      pages: {},
      redirects: {},
    }
    expect(getRedirect('/github-ae@latest/never/heard/of', ctx)).toBe('/en')
    expect(getRedirect('/en/github-ae@latest/never/heard/of', ctx)).toBe('/en')
  })
})
