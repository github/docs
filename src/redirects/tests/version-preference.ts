import { describe, expect, test } from 'vitest'

import { getVersionPreference, pathNamesAVersion } from '@/redirects/lib/version-preference'
import { latest } from '@/versions/lib/enterprise-server-releases'

const GHEC = 'enterprise-cloud@latest'
const GHES = `enterprise-server@${latest}`

// pages stands in for req.context.pages, keyed by full versioned permalink.
// /actions/versioned exists in all three versions; /actions/fpt-only exists only unversioned.
// /actions/no-fpt has no Free/Pro/Team version, like much of /admin.
const pages = Object.fromEntries(
  [
    '/en/actions/versioned',
    `/en/${GHEC}/actions/versioned`,
    `/en/${GHES}/actions/versioned`,
    '/en/actions/fpt-only',
    '/en/actions/ghec-only',
    `/en/${GHEC}/actions/ghec-only`,
    `/en/${GHEC}/actions/no-fpt`,
    `/en/${GHES}/actions/no-fpt`,
    '/ja/actions/versioned',
    `/ja/${GHEC}/actions/versioned`,
    '/en',
    `/en/${GHEC}`,
    '/ja',
    `/ja/${GHEC}`,
  ].map((permalink) => [permalink, {}]),
)

describe('pathNamesAVersion', () => {
  test.each([
    ['/en/enterprise-cloud@latest/actions/foo', true],
    ['/en/free-pro-team@latest/actions/foo', true],
    ['/en/enterprise-server@latest/actions/foo', true],
    // Deprecated releases are absent from allVersions, but explicit version paths beat the cookie.
    ['/en/enterprise-server@3.0/actions/foo', true],
    ['/en/github-ae@latest/actions/foo', true],
    // Legacy shapes without @ still name a version.
    ['/en/enterprise-server/3.9/actions/foo', true],
    ['/en/enterprise/3.3/actions/foo', true],
    // These paths name no version.
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

  // free-pro-team@latest is an escape hatch: getRedirect strips it before this helper runs.
  // The original request path still proves the reader explicitly asked for Free/Pro/Team.
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

  // If the cookie names a version the article lacks, the response still depends on the cookie.
  // Vary prevents caches from serving that fallback response to readers with other preferences.
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

  // Versionless URLs for articles without Free/Pro/Team resolve to their first version.
  // The cookie still overrides that default because the reader named no version.
  test('overrides the first-version fallback for articles without Free/Pro/Team', () => {
    expect(
      getVersionPreference('/en/actions/no-fpt', `/en/${GHEC}/actions/no-fpt`, GHES, pages),
    ).toEqual({ vary: true, redirectTo: `/en/${GHES}/actions/no-fpt` })
  })

  test('varies on the first-version fallback without a cookie', () => {
    expect(
      getVersionPreference('/en/actions/no-fpt', `/en/${GHEC}/actions/no-fpt`, undefined, pages),
    ).toEqual({ vary: true })
  })

  test('leaves an explicitly versioned URL alone when the target is versioned too', () => {
    const path = `/en/${GHEC}/actions/no-fpt`
    expect(getVersionPreference(path, path, GHES, pages)).toEqual({ vary: false })
  })

  test('leaves a deprecated version target alone', () => {
    expect(
      getVersionPreference(
        '/en/actions/no-fpt',
        '/en/enterprise-server@3.0/actions/no-fpt',
        GHES,
        pages,
      ),
    ).toEqual({ vary: false })
  })

  test('redirects a language homepage to the preferred version', () => {
    expect(getVersionPreference('/en', '/en', GHEC, pages)).toEqual({
      vary: true,
      redirectTo: `/en/${GHEC}`,
    })
    expect(getVersionPreference('/ja', '/ja', GHEC, pages)).toEqual({
      vary: true,
      redirectTo: `/ja/${GHEC}`,
    })
  })

  test('varies a language homepage without a cookie', () => {
    expect(getVersionPreference('/en', '/en', undefined, pages)).toEqual({ vary: true })
  })

  test('leaves an explicit free-pro-team homepage alone', () => {
    expect(getVersionPreference('/en/free-pro-team@latest', '/en', GHEC, pages)).toEqual({
      vary: false,
    })
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

  // The follow-up request names a version, so it short-circuits on pathNamesAVersion.
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
