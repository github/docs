import { describe, expect, test } from 'vitest'

import { get } from '@/tests/helpers/e2etest'
import { USER_VERSION_COOKIE_NAME } from '@/frame/lib/constants'
import { latest } from '@/versions/lib/enterprise-server-releases'

describe('version cookie redirects', () => {
  test('homepage redirects to preferred version from cookie', async () => {
    const res = await get('/', {
      headers: {
        Cookie: `${USER_VERSION_COOKIE_NAME}=enterprise-cloud@latest`,
      },
      followRedirects: false,
    })
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe('/en/enterprise-cloud@latest')
    expect(res.headers.vary).toContain('x-user-version')
  })

  test('homepage redirects to /en when no version cookie', async () => {
    const res = await get('/', { followRedirects: false })
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe('/en')
    expect(res.headers.vary).toContain('x-user-version')
  })

  test('homepage redirects to /en when fpt version in cookie', async () => {
    const res = await get('/', {
      headers: {
        Cookie: `${USER_VERSION_COOKIE_NAME}=free-pro-team@latest`,
      },
      followRedirects: false,
    })
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe('/en')
  })

  test('ignores invalid version in cookie', async () => {
    const res = await get('/', {
      headers: {
        Cookie: `${USER_VERSION_COOKIE_NAME}=invalid-version`,
      },
      followRedirects: false,
    })
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe('/en')
  })

  test('homepage redirects to enterprise-server version from cookie', async () => {
    const res = await get('/', {
      headers: {
        Cookie: `${USER_VERSION_COOKIE_NAME}=enterprise-server@${latest}`,
      },
      followRedirects: false,
    })
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe(`/en/enterprise-server@${latest}`)
  })
})

// See github/technical-content#7227. Before this, the cookie was only ever consulted on the bare
// homepage, so every deep link served Free/Pro/Team no matter what the reader preferred.
describe('version cookie on article URLs', () => {
  // Exists in Free/Pro/Team and in Enterprise Cloud.
  const versioned = '/en/get-started/start-your-journey/what-is-github'
  // Exists only in Free/Pro/Team.
  const fptOnly = '/en/get-started/learning-to-code/getting-started-with-git'

  test('unversioned article redirects to the preferred version', async () => {
    const res = await get(versioned, {
      headers: { Cookie: `${USER_VERSION_COOKIE_NAME}=enterprise-cloud@latest` },
      followRedirects: false,
    })
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe(
      '/en/enterprise-cloud@latest/get-started/start-your-journey/what-is-github',
    )
    expect(res.headers.vary).toContain('x-user-version')
    // Listed once, not twice. The manual append is skipped on the redirect path because
    // `languageAndVersionCacheControl` already names it.
    expect(res.headers.vary!.match(/x-user-version/g)).toHaveLength(1)
  })

  // A 301 would let a browser cache one reader's preference for that URL forever.
  test('the redirect is never permanent', async () => {
    const res = await get(versioned, {
      headers: { Cookie: `${USER_VERSION_COOKIE_NAME}=enterprise-cloud@latest` },
      followRedirects: false,
    })
    expect(res.statusCode).not.toBe(301)
  })

  test('the preferred version is served without redirecting again', async () => {
    const res = await get(
      '/en/enterprise-cloud@latest/get-started/start-your-journey/what-is-github',
      {
        headers: { Cookie: `${USER_VERSION_COOKIE_NAME}=enterprise-cloud@latest` },
        followRedirects: false,
      },
    )
    expect(res.statusCode).toBe(200)
  })

  // The escape hatch. `getRedirect` strips the `/free-pro-team@latest` prefix, so without
  // reading the request path we would bounce this reader straight back to Enterprise Cloud
  // and they could never look at the Free/Pro/Team article on purpose.
  test('an explicit free-pro-team URL beats the cookie', async () => {
    const res = await get(
      '/en/free-pro-team@latest/get-started/start-your-journey/what-is-github',
      {
        headers: { Cookie: `${USER_VERSION_COOKIE_NAME}=enterprise-cloud@latest` },
        followRedirects: false,
      },
    )
    expect(res.headers.location).toBe(versioned)
  })

  test('an explicit enterprise-server URL beats the cookie', async () => {
    const res = await get(
      `/en/enterprise-server@${latest}/get-started/start-your-journey/what-is-github`,
      {
        headers: { Cookie: `${USER_VERSION_COOKIE_NAME}=enterprise-cloud@latest` },
        followRedirects: false,
      },
    )
    expect(res.statusCode).toBe(200)
  })

  test('an article with no such version stays put', async () => {
    const res = await get(fptOnly, {
      headers: { Cookie: `${USER_VERSION_COOKIE_NAME}=enterprise-cloud@latest` },
      followRedirects: false,
    })
    expect(res.statusCode).toBe(200)
  })

  // Varying only for cookie holders would let this cached response be handed to a reader
  // who should have been redirected.
  test('varies on the cookie even for readers who have not set one', async () => {
    const res = await get(versioned, { followRedirects: false })
    expect(res.statusCode).toBe(200)
    expect(res.headers.vary).toContain('x-user-version')
  })

  test('query params survive the redirect', async () => {
    const res = await get(`${versioned}?json=breadcrumbs`, {
      headers: { Cookie: `${USER_VERSION_COOKIE_NAME}=enterprise-cloud@latest` },
      followRedirects: false,
    })
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe(
      '/en/enterprise-cloud@latest/get-started/start-your-journey/what-is-github?json=breadcrumbs',
    )
  })

  // Staying in the reader's language is covered by the unit tests in
  // src/redirects/tests/version-preference.ts. It cannot be covered here because this
  // suite runs against real content, and only English is loaded.
})
