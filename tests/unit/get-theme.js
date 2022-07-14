import { describe, expect, test } from '@jest/globals'

import { getTheme, defaultCSSTheme, defaultComponentTheme } from '../../lib/get-theme.js'

function serializeCookieValue(obj) {
  return encodeURIComponent(JSON.stringify(obj))
}

describe('getTheme basics', () => {
  test('always return an object with certain keys', () => {
    const req = {} // doesn't even have a `.cookies`.
    const theme = getTheme(req)
    expect(theme.colorMode).toBe(defaultComponentTheme.colorMode)
    expect(theme.nightTheme).toBe(defaultComponentTheme.nightTheme)
    expect(theme.dayTheme).toBe(defaultComponentTheme.dayTheme)
    const cssTheme = getTheme(req, true)
    expect(cssTheme.colorMode).toBe(defaultCSSTheme.colorMode)
    expect(cssTheme.nightTheme).toBe(defaultCSSTheme.nightTheme)
    expect(cssTheme.dayTheme).toBe(defaultCSSTheme.dayTheme)
  })

  test('respect the color_mode cookie value', () => {
    const req = {
      cookies: {
        color_mode: serializeCookieValue({
          color_mode: 'dark',
          light_theme: { name: 'light_colorblind', color_mode: 'light' },
          dark_theme: { name: 'dark_tritanopia', color_mode: 'dark' },
        }),
      },
    }
    const theme = getTheme(req)
    expect(theme.colorMode).toBe('night')
    expect(theme.nightTheme).toBe(defaultComponentTheme.nightTheme)
    expect(theme.dayTheme).toBe(defaultComponentTheme.dayTheme)

    const cssTheme = getTheme(req, true)
    expect(cssTheme.colorMode).toBe('dark')
    expect(cssTheme.nightTheme).toBe(defaultCSSTheme.nightTheme)
    expect(cssTheme.dayTheme).toBe(defaultCSSTheme.dayTheme)
  })

  test('respect the color_mode cookie value', () => {
    const req = {
      cookies: {
        color_mode: serializeCookieValue({
          color_mode: 'dark',
          light_theme: { name: 'light_colorblind', color_mode: 'light' },
          dark_theme: { name: 'dark_tritanopia', color_mode: 'dark' },
        }),
      },
    }
    const theme = getTheme(req)
    expect(theme.colorMode).toBe('night')
    expect(theme.nightTheme).toBe(defaultComponentTheme.nightTheme)
    expect(theme.dayTheme).toBe(defaultComponentTheme.dayTheme)

    const cssTheme = getTheme(req, true)
    expect(cssTheme.colorMode).toBe('dark')
    expect(cssTheme.nightTheme).toBe(defaultCSSTheme.nightTheme)
    expect(cssTheme.dayTheme).toBe(defaultCSSTheme.dayTheme)
  })

  test('ignore "junk" cookie values', () => {
    const req = {
      cookies: {
        color_mode: '[This is not valid JSON}',
      },
    }
    const theme = getTheme(req)
    expect(theme.colorMode).toBe('auto')
    expect(theme.nightTheme).toBe(defaultComponentTheme.nightTheme)
    expect(theme.dayTheme).toBe(defaultComponentTheme.dayTheme)

    const cssTheme = getTheme(req, true)
    expect(cssTheme.colorMode).toBe('auto')
    expect(cssTheme.nightTheme).toBe(defaultCSSTheme.nightTheme)
    expect(cssTheme.dayTheme).toBe(defaultCSSTheme.dayTheme)
  })
})
