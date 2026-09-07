import { describe, expect, test } from 'vitest'

import { colorModeScript } from '../lib/color-mode-script'
import { getCssTheme } from '../components/useTheme'

// The inline script can't import the React `useTheme` module at runtime (it
// runs before any bundle loads), so it reimplements the same validation. These
// tests run the script against a fake `document` and assert it produces the
// exact same result as `getCssTheme`, which keeps the two in sync.
function runScript(rawCookie: string) {
  const attrs: Record<string, string> = {}
  const fakeDocument = {
    cookie: rawCookie,
    documentElement: {
      setAttribute(name: string, value: string) {
        attrs[name] = value
      },
    },
  }
  new Function('document', colorModeScript)(fakeDocument)
  return attrs
}

function cookieFor(value: object) {
  // The real cookie value is URL-encoded JSON, like the browser stores it.
  return `color_mode=${encodeURIComponent(JSON.stringify(value))}`
}

function expectMatchesGetCssTheme(rawCookie: string, cookieValue: string) {
  const css = getCssTheme(cookieValue)
  expect(runScript(rawCookie)).toEqual({
    'data-color-mode': css.colorMode,
    'data-light-theme': css.lightTheme,
    'data-dark-theme': css.darkTheme,
  })
}

describe('colorModeScript', () => {
  test('falls back to defaults when no cookie is set', () => {
    expectMatchesGetCssTheme('', '')
  })

  test('falls back to defaults on junk cookie values', () => {
    expectMatchesGetCssTheme('color_mode=not-valid-json', '')
  })

  test('respects a valid color_mode cookie', () => {
    const value = {
      color_mode: 'dark',
      light_theme: { name: 'light_colorblind', color_mode: 'light' },
      dark_theme: { name: 'dark_tritanopia', color_mode: 'dark' },
    }
    expectMatchesGetCssTheme(cookieFor(value), JSON.stringify(value))
  })

  test('honors supported named themes', () => {
    const value = {
      color_mode: 'auto',
      light_theme: { name: 'light', color_mode: 'light' },
      dark_theme: { name: 'dark_dimmed', color_mode: 'dark' },
    }
    expectMatchesGetCssTheme(cookieFor(value), JSON.stringify(value))
  })

  test('ignores unknown modes and themes', () => {
    const value = {
      color_mode: 'sepia',
      light_theme: { name: 'rainbow', color_mode: 'rainbow' },
      dark_theme: { name: 'midnight', color_mode: 'midnight' },
    }
    expectMatchesGetCssTheme(cookieFor(value), JSON.stringify(value))
  })

  test('reads the cookie even when other cookies are present', () => {
    const value = { color_mode: 'light' }
    const rawCookie = `_octo=GH1.1; color_mode=${encodeURIComponent(
      JSON.stringify(value),
    )}; logged_in=no`
    expectMatchesGetCssTheme(rawCookie, JSON.stringify(value))
  })
})
