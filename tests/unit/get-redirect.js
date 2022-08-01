import { describe, expect, test } from '@jest/globals'

import getRedirect, { splitPathByLanguage } from '../../lib/get-redirect.js'
import { latest } from '../../lib/enterprise-server-releases.js'

describe('splitPathByLanguage', () => {
  test('basic', () => {
    const [language, withoutLanguage] = splitPathByLanguage('/foo/')
    expect(language).toBe('en')
    expect(withoutLanguage).toBe('/foo/')
  })
  test('already has /en in it', () => {
    const [language, withoutLanguage] = splitPathByLanguage('/en/foo/')
    expect(language).toBe('en')
    expect(withoutLanguage).toBe('/foo/')
  })
  test('basic with different fallback', () => {
    const [language, withoutLanguage] = splitPathByLanguage('/foo/', 'ja')
    expect(language).toBe('ja')
    expect(withoutLanguage).toBe('/foo/')
  })
  test('already has /en different fallback', () => {
    const [language, withoutLanguage] = splitPathByLanguage('/en/foo/', 'ja')
    expect(language).toBe('en')
    expect(withoutLanguage).toBe('/foo/')
  })
  test('unrecognized prefix is ignored', () => {
    const [language, withoutLanguage] = splitPathByLanguage('/sv/foo/')
    expect(language).toBe('en')
    expect(withoutLanguage).toBe('/sv/foo/')
  })
})

describe('getRedirect basics', () => {
  it('should sometimes not correct the version prefix', () => {
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

  it('should return undefined if nothing could be found', () => {
    const ctx = {
      pages: {},
      redirects: {},
    }
    expect(getRedirect('/foo/pizza', ctx)).toBeUndefined()
  })

  it('should just inject language on version "home pages"', () => {
    const ctx = {
      pages: {},
      redirects: {},
    }
    expect(getRedirect('/github-ae@latest', ctx)).toBe('/en/github-ae@latest')

    expect(getRedirect('/enterprise-cloud@latest', ctx)).toBe('/en/enterprise-cloud@latest')

    expect(getRedirect('/enterprise-server@3.3', ctx)).toBe('/en/enterprise-server@3.3')

    expect(getRedirect('/enterprise-server@latest', ctx)).toBe(`/en/enterprise-server@${latest}`)
    expect(getRedirect('/enterprise-server', ctx)).toBe(`/en/enterprise-server@${latest}`)
  })

  it('should always "remove" the free-pro-team prefix', () => {
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

  it('should handle some odd exceptions', () => {
    const ctx = {
      pages: {},
      redirects: {},
    }
    expect(getRedirect('/desktop/guides/foo/bar', ctx)).toBe('/en/desktop/foo/bar')
    expect(getRedirect('/admin/guides/foo/bar', ctx)).toBe(
      `/en/enterprise-server@${latest}/admin/foo/bar`
    )
    expect(getRedirect('/admin/something/else', ctx)).toBe(
      `/en/enterprise-server@${latest}/admin/something/else`
    )
    expect(getRedirect('/insights/stuff', ctx)).toBe(
      `/en/enterprise-server@${latest}/insights/stuff`
    )
  })

  it('should figure out redirect based on presence of pages in certain cases', () => {
    const ctx = {
      pages: {
        '/en/enterprise-server@3.2/foo/bar': null,
        '/en/enterprise-server@3.2/admin/github-management': null,
      },
      redirects: {},
    }
    // Replacing `/user` with `` worked because there exits a page of such name.
    expect(getRedirect('/enterprise-server@3.2/user/foo/bar', ctx)).toBe(
      '/en/enterprise-server@3.2/foo/bar'
    )
    expect(getRedirect('/enterprise-server@3.2/admin/guides/user-management', ctx)).toBe(
      '/en/enterprise-server@3.2/admin/github-management'
    )
  })

  it('should always correct the old enterprise prefix', () => {
    const ctx = {
      pages: {},
      redirects: {
        '/enterprise-server@3.3/foo': '/enterprise-server@3.3/bar',
      },
    }
    expect(getRedirect('/enterprise', ctx)).toBe(`/en/enterprise-server@${latest}`)
    expect(getRedirect('/enterprise/3.3', ctx)).toBe('/en/enterprise-server@3.3')
    expect(getRedirect('/enterprise/3.3/something', ctx)).toBe(
      '/en/enterprise-server@3.3/something'
    )
    // but also respect redirects if there are some
    expect(getRedirect('/enterprise/3.3/foo', ctx)).toBe('/en/enterprise-server@3.3/bar')

    // Unique snowflake pattern
    expect(getRedirect('/enterprise/github/admin/foo', ctx)).toBe(
      `/en/enterprise-server@${latest}/github/admin/foo`
    )
  })

  it('should not do anything on some prefixes', () => {
    const ctx = {
      pages: {},
      redirects: {},
    }
    // Nothing's needed here because it's not /admin/guides and
    // it already has the enterprise-server prefix.
    expect(getRedirect(`/en/enterprise-server@${latest}/admin/something/else`, ctx)).toBeUndefined()
    expect(getRedirect(`/en/enterprise-cloud@latest/user/foo`, ctx)).toBeUndefined()
  })

  it('should only inject language sometimes', () => {
    const ctx = {
      pages: {},
      redirects: {
        '/foo': '/bar',
      },
    }
    // Nothing's needed here because it's not /admin/guides and
    // it already has the enterprise-server prefix.
    expect(getRedirect('/foo', ctx)).toBe('/en/bar')
    expect(getRedirect('/en/foo', ctx)).toBe('/en/bar')
    expect(getRedirect('/ja/foo', ctx)).toBe('/ja/bar')
  })

  it('should redirect both the prefix and the path needs to change', () => {
    const ctx = {
      pages: {},
      redirects: {
        [`/enterprise-server@${latest}/foo`]: `/enterprise-server@${latest}/bar`,
      },
    }
    // Nothing's needed here because it's not /admin/guides and
    // it already has the enterprise-server prefix.
    expect(getRedirect('/enterprise-server/foo', ctx)).toBe(`/en/enterprise-server@${latest}/bar`)
  })

  it('should redirect according to the req.context.userLanguage', () => {
    const ctx = {
      pages: {},
      redirects: {
        '/foo': '/bar',
      },
      userLanguage: 'ja',
    }
    expect(getRedirect('/foo', ctx)).toBe(`/ja/bar`)
    // falls back to 'en' if it's falsy
    ctx.userLanguage = null
    expect(getRedirect('/foo', ctx)).toBe(`/en/bar`)
  })

  it('should work for some deprecated enterprise-server URLs too', () => {
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
