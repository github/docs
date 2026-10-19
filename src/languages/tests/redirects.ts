import { describe, expect, test } from 'vitest'

import { languageKeys } from '@/languages/lib/languages-server'
import { get } from '@/tests/helpers/e2etest'
import { USER_LANGUAGE_COOKIE_NAME } from '@/frame/lib/constants'

const langs = languageKeys.filter((lang) => lang !== 'en')

describe('redirects', () => {
  test.each(langs)('redirects to %s if accept-language', async (lang) => {
    const res = await get('/get-started', {
      headers: { 'accept-language': lang },
      followRedirects: false,
    })
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe(`/${lang}/get-started`)
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=\d+/)
    expect(res.headers['set-cookie']).toBeUndefined()
  })

  test.runIf(langs.includes('zh')).each(['zh-CN', 'zh-Hans,en;q=0.8', 'zh-cn,en-us;q=0.5'])(
    'redirects to zh if accept-language is %s',
    async (acceptLanguage) => {
      const res = await get('/get-started', {
        headers: { 'accept-language': acceptLanguage },
        followRedirects: false,
      })
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe('/zh/get-started')
    },
  )

  test.each(langs)('redirects to %s if USER_LANGUAGE_COOKIE_NAME', async (lang) => {
    const res = await get('/get-started', {
      headers: {
        'accept-language': 'en',
        Cookie: `${USER_LANGUAGE_COOKIE_NAME}=${lang}`,
      },
      followRedirects: false,
    })
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe(`/${lang}/get-started`)
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=\d+/)
    expect(res.headers['set-cookie']).toBeUndefined()
  })

  test.each([
    ['/jp', '/ja'],
    ['/br', '/pt'],
    ['/zh-CN', '/zh'],
    ['/kr', '/ko'],
  ])('redirects %s to %s', async (from, to_) => {
    const res = await get(from)
    expect(res.statusCode).toBe(301)
    expect(res.headers['cache-control']).toMatch(/max-age=\d+/)
    expect(res.headers.location).toBe(to_)
  })
})
