import { languageKeys } from '../../lib/languages.js'
import { get } from '../helpers/e2etest.js'
import { PREFERRED_LOCALE_COOKIE_NAME } from '../../lib/constants.js'

const NO_CACHE_CONTROL = 'private, no-store, max-age=0'

const langs = languageKeys.filter((lang) => lang !== 'en')

describe('redirects', () => {
  test.each(langs)('redirects to %s if accept-language', async (lang) => {
    const res = await get('/get-started', {
      headers: { 'accept-language': lang },
      followRedirects: false,
    })
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe(`/${lang}/get-started`)
    expect(res.headers['cache-control']).toBe(NO_CACHE_CONTROL)
    expect(res.headers['set-cookie']).toBeUndefined()
  })

  test.each(langs)('redirects to %s if PREFERRED_LOCALE_COOKIE_NAME', async (lang) => {
    const res = await get('/get-started', {
      headers: {
        'accept-language': 'en',
        Cookie: `${PREFERRED_LOCALE_COOKIE_NAME}=${lang}`,
      },
      followRedirects: false,
    })
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe(`/${lang}/get-started`)
    expect(res.headers['cache-control']).toBe(NO_CACHE_CONTROL)
    expect(res.headers['set-cookie']).toBeUndefined()
  })

  test('redirects accidental /jp* requests to /ja*', async () => {
    const res = await get('/jp')
    expect(res.statusCode).toBe(301)
    expect(res.headers.location).toBe('/ja')
  })

  test('redirects accidental /zh-CN* requests to /cn*', async () => {
    const res = await get('/zh-CN')
    expect(res.statusCode).toBe(301)
    expect(res.headers.location).toBe('/cn')
  })
})
