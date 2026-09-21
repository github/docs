import { describe, expect, test } from 'vitest'

import { getVersionPreference, pathNamesAVersion } from '@/redirects/lib/version-preference'
import { latest } from '@/versions/lib/enterprise-server-releases'

const GHEC = 'enterprise-cloud@latest'
const GHES = `enterprise-server@${latest}`

// A stand-in for `req.context.pages`, which is keyed by full versioned permalink.
// `/actions/versioned` exists in all three versions, `/actions/fpt-only` only in the
// unversioned one.
const pages = Object.fromEntries(
  [
    '/en/actions/versioned',
    `/en/${GHEC}/actions/versioned`,
    `/en/${GHES}/actions/versioned`,
    '/en/actions/fpt-only',
    '/en/actions/ghec-only',
    `/en/${GHEC}/actions/ghec-only`,
    '/ja/actions/versioned',
    `/ja/${GHEC}/actions/versioned`,
  ].map((permalink) => [permalink, {}]),
)

describe('pathNamesAVersion', () => {
  test.each([
    ['/en/enterprise-cloud@latest/actions/foo', true],
    ['/en/free-pro-team@latest/actions/foo', true],
    ['/en/enterprise-server@latest/actions/foo', true],
    // Deprecated releases are not keys of `allVersions`, but naming one is still
    // an explicit request and has to beat the cookie.
    ['/en/enterprise-server@3.0/actions/foo', true],
    ['/en/github-ae@latest/actions/foo', true],
    // Legacy shapes that carry no `@`.
    ['/en/enterprise-server/3.9/actions/foo', true],
    ['/en/enterprise/3.3/actions/foo', true],
    // No version named.
    ['/en/actions/foo', false],
    ['/actions/foo', false],
    ['/en', false],
    ['/', false],
  ])('%s -> %s', (path, expected) => {
    expect(pathNamesAVersion(path)).toBe(expected)
  })
})

describe('getVersionPreference', () => {
  test('redirects an unversioned article to the preferred version', () => {
    expect(
      getVersionPreference('/en/actions/versioned', '/en/actions/versioned', GHEC, pages),
    ).toEqual({ vary: true, redirectTo: `/en/${GHEC}/actions/versioned` })
  })

  test('leaves an explicitly versioned URL alone', () => {
    const path = `/en/${GHES}/actions/versioned`
    expect(getVersionPreference(path, path, GHEC, pages)).toEqual({ vary: false })
  })

  // The escape hatch. `getRedirect` strips `/free-pro-team@latest` before the middleware
  // gets here, so the resolved path looks unversioned. Only the request path still shows
  // that the reader asked for Free/Pro/Team on purpose.
  test('leaves an explicit free-pro-team URL alone even after the prefix is stripped', () => {
    expect(
      getVersionPreference(
        '/en/free-pro-team@latest/actions/versioned',
        '/en/actions/versioned',
        GHEC,
        pages,
      ),
    ).toEqual({ vary: false })
  })

  test('falls back silently when the article has no such version', () => {
    expect(
      getVersionPreference('/en/actions/fpt-only', '/en/actions/fpt-only', GHEC, pages),
    ).toEqual({ vary: false })
  })

  test('does nothing without a cookie, but still varies', () => {
    expect(
      getVersionPreference('/en/actions/versioned', '/en/actions/versioned', undefined, pages),
    ).toEqual({ vary: true })
  })

  test('redirects to an enterprise-server preference too', () => {
    expect(
      getVersionPreference('/en/actions/versioned', '/en/actions/versioned', GHES, pages),
    ).toEqual({ vary: true, redirectTo: `/en/${GHES}/actions/versioned` })
  })

  // The partial case: this article has a version the cookie could have selected, just not
  // the one this reader asked for. No redirect, but the response still depends on the
  // cookie, so it must not be cached as though it were the same for everyone.
  test('varies without redirecting when the cookie names a version this article lacks', () => {
    expect(
      getVersionPreference('/en/actions/ghec-only', '/en/actions/ghec-only', GHES, pages),
    ).toEqual({ vary: true })
  })

  test('treats free-pro-team in the cookie as no preference', () => {
    expect(
      getVersionPreference(
        '/en/actions/versioned',
        '/en/actions/versioned',
        'free-pro-team@latest',
        pages,
      ),
    ).toEqual({ vary: true })
  })

  test('keeps the reader in their language', () => {
    expect(
      getVersionPreference('/ja/actions/versioned', '/ja/actions/versioned', GHEC, pages),
    ).toEqual({ vary: true, redirectTo: `/ja/${GHEC}/actions/versioned` })
  })

  test('resolves a renamed article in one hop', () => {
    expect(
      getVersionPreference('/en/actions/old-name', '/en/actions/versioned', GHEC, pages),
    ).toEqual({ vary: true, redirectTo: `/en/${GHEC}/actions/versioned` })
  })

  test('keeps the .md extension', () => {
    expect(
      getVersionPreference('/en/actions/versioned.md', '/en/actions/versioned.md', GHEC, pages),
    ).toEqual({ vary: true, redirectTo: `/en/${GHEC}/actions/versioned.md` })
  })

  test('ignores external redirects', () => {
    expect(
      getVersionPreference('/en/actions/versioned', 'https://github.com/foo', GHEC, pages),
    ).toEqual({ vary: false })
  })

  test('ignores paths that are not articles', () => {
    expect(getVersionPreference('/en/search', '/en/search', GHEC, pages)).toEqual({ vary: false })
    expect(getVersionPreference('/healthcheck', '/healthcheck', GHEC, pages)).toEqual({
      vary: false,
    })
  })

  // The redirect target names a version, so the next request short-circuits on
  // `pathNamesAVersion` and cannot bounce back.
  test('cannot loop', () => {
    const first = getVersionPreference(
      '/en/actions/versioned',
      '/en/actions/versioned',
      GHEC,
      pages,
    )
    expect(first.redirectTo).toBe(`/en/${GHEC}/actions/versioned`)
    expect(getVersionPreference(first.redirectTo!, first.redirectTo!, GHEC, pages)).toEqual({
      vary: false,
    })
  })
})
