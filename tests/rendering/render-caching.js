import cheerio from 'cheerio'
import { expect, jest, test } from '@jest/globals'

import { get } from '../helpers/e2etest.js'
// import { PREFERRED_LOCALE_COOKIE_NAME } from '../../middleware/detect-language.js'
import { getNextData, getPrimerData } from '../helpers/script-data.js'

const serializeTheme = (theme) => {
  return encodeURIComponent(JSON.stringify(theme))
}

describe('in-memory render caching', () => {
  jest.setTimeout(30 * 1000)

  test('second render should be a cache hit with different theme properties', async () => {
    const cookieValue1 = {
      color_mode: 'light',
      light_theme: { name: 'light', color_mode: 'light' },
      dark_theme: { name: 'dark_high_contrast', color_mode: 'dark' },
    }
    // Light mode first
    const res1 = await get('/en', {
      headers: {
        cookie: `color_mode=${serializeTheme(cookieValue1)}`,
      },
    })
    // Because these are effectively end-to-end tests, you can't expect
    // the first request to be a cache miss because another end-to-end
    // test might have "warmed up" this endpoint.
    expect(res1.headers['x-middleware-cache']).toBeTruthy()
    const $1 = cheerio.load(res1.text)
    expect($1('body').data('color-mode')).toBe(cookieValue1.color_mode)
    const themeProps1 = getNextData($1).props.themeProps
    expect(themeProps1.colorMode).toBe('day')

    const cookieValue2 = {
      color_mode: 'dark',
      light_theme: { name: 'light', color_mode: 'light' },
      dark_theme: { name: 'dark_high_contrast', color_mode: 'dark' },
    }
    const res2 = await get('/en', {
      headers: {
        cookie: `color_mode=${serializeTheme(cookieValue2)}`,
      },
    })
    expect(res2.headers['x-middleware-cache']).toBeTruthy()
    const $2 = cheerio.load(res2.text)
    expect($2('body').data('color-mode')).toBe(cookieValue2.color_mode)
    const themeProps2 = getNextData($2).props.themeProps
    expect(themeProps2.colorMode).toBe('night')
  })

  test('second render should be cache hit with different resolvedServerColorMode in __PRIMER_DATA__', async () => {
    await get('/en') // first render to assert the next render comes from cache

    const res = await get('/en', {
      headers: {
        cookie: `color_mode=${serializeTheme({
          color_mode: 'dark',
          light_theme: { name: 'light', color_mode: 'light' },
          dark_theme: { name: 'dark_high_contrast', color_mode: 'dark' },
        })}`,
      },
    })
    expect(res.headers['x-middleware-cache']).toBeTruthy()
    const $ = cheerio.load(res.text)
    const data = getPrimerData($)
    expect(data.resolvedServerColorMode).toBe('night')

    // Now do it all over again but with a light color mode
    const res2 = await get('/en', {
      headers: {
        cookie: `color_mode=${serializeTheme({
          color_mode: 'light',
          light_theme: { name: 'light', color_mode: 'light' },
          dark_theme: { name: 'dark_high_contrast', color_mode: 'dark' },
        })}`,
      },
    })
    expect(res2.headers['x-middleware-cache']).toBeTruthy()
    const $2 = cheerio.load(res2.text)
    const data2 = getPrimerData($2)
    expect(data2.resolvedServerColorMode).toBe('day')
  })
})
