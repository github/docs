import { afterEach, describe, expect, test, vi } from 'vitest'

import { USER_VERSION_COOKIE_NAME } from '@/frame/lib/constants'

async function loadCookiesWithDocument(protocol: string) {
  const written: string[] = []
  vi.stubGlobal('document', {
    location: { protocol },
    get cookie() {
      return ''
    },
    set cookie(value: string) {
      written.push(value)
    },
  })
  vi.resetModules()
  const { default: Cookies } = await import('@/frame/components/lib/cookies')
  return { Cookies, written }
}

afterEach(() => {
  vi.unstubAllGlobals()
  vi.resetModules()
})

describe('client cookies', () => {
  test('preference cookies use SameSite=Lax so cross-site navigations send them', async () => {
    const { Cookies, written } = await loadCookiesWithDocument('https:')
    Cookies.set(USER_VERSION_COOKIE_NAME, 'enterprise-cloud@latest')
    expect(written).toHaveLength(1)
    expect(written[0]).toContain(`${USER_VERSION_COOKIE_NAME}=enterprise-cloud@latest`)
    expect(written[0]).toContain('sameSite=lax')
    expect(written[0]).not.toContain('sameSite=strict')
    expect(written[0]).toContain('secure')
  })

  test('cookies are not marked secure on http', async () => {
    const { Cookies, written } = await loadCookiesWithDocument('http:')
    Cookies.set(USER_VERSION_COOKIE_NAME, 'enterprise-cloud@latest')
    expect(written[0]).toContain('sameSite=lax')
    expect(written[0]).not.toContain('secure')
  })
})
