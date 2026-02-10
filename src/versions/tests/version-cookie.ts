import { describe, expect, test } from 'vitest'

import { get } from '@/tests/helpers/e2etest'
import { USER_VERSION_COOKIE_NAME } from '@/frame/lib/constants'

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
        Cookie: `${USER_VERSION_COOKIE_NAME}=enterprise-server@3.15`,
      },
      followRedirects: false,
    })
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe('/en/enterprise-server@3.15')
  })
})
