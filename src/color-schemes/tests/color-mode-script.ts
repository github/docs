import { describe, expect, test } from 'vitest'

import { colorModeScript } from '../lib/color-mode-script'
import { getCssTheme, SupportedTheme } from '../components/useTheme'

// The inline script runs before any bundle loads, so it reimplements
// `useTheme`'s validation instead of importing it. These tests assert the two
// stay in sync.
function runScript(
  rawCookie: string,
  { prefersDark = false, matchMedia = true, legacyListener = false } = {},
) {
  const attrs: Record<string, string> = {}
  const listeners: Array<(event: { matches: boolean }) => void> = []
  // `matches` reads this through a getter, so `flipSystemPreference` changes
  // what an already-registered handler sees.
  const os = { prefersDark }
  const subscribe = (handler: (event: { matches: boolean }) => void) => {
    listeners.push(handler)
  }
  const fakeDocument = {
    cookie: rawCookie,
    documentElement: {
      setAttribute(name: string, value: string) {
        attrs[name] = value
      },
    },
  }
  const fakeWindow = matchMedia
    ? {
        matchMedia(query: string) {
          return {
            get matches() {
              return query.includes('dark') ? os.prefersDark : !os.prefersDark
            },
            ...(legacyListener
              ? { addListener: subscribe }
              : {
                  addEventListener: (_: string, handler: (event: { matches: boolean }) => void) =>
                    subscribe(handler),
                }),
          }
        },
      }
    : {}

  new Function('document', 'window', colorModeScript)(fakeDocument, fakeWindow)
  return {
    attrs,
    listeners,
    flipSystemPreference() {
      os.prefersDark = !os.prefersDark
      for (const handler of listeners) handler({ matches: os.prefersDark })
    },
  }
}

function cookieFor(value: object) {
  // The real cookie value is URL-encoded JSON, like the browser stores it.
  return `color_mode=${encodeURIComponent(JSON.stringify(value))}`
}

function expectMatchesGetCssTheme(rawCookie: string, cookieValue: string, prefersDark = false) {
  const css = getCssTheme(cookieValue)
  // Primitives select on the (mode, theme) pair, so the effective theme has to
  // land on the attribute for the resolved mode.
  const mode = css.colorMode === 'auto' ? (prefersDark ? 'dark' : 'light') : css.colorMode
  const theme = mode === 'dark' ? css.darkTheme : css.lightTheme
  const resolved = theme.startsWith('dark') ? 'dark' : 'light'
  expect(runScript(rawCookie, { prefersDark }).attrs).toEqual({
    'data-color-mode': resolved,
    'data-color-mode-preference': css.colorMode,
    'data-light-theme': resolved === 'light' ? theme : css.lightTheme,
    'data-dark-theme': resolved === 'dark' ? theme : css.darkTheme,
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

  test('survives an explicitly null theme without discarding the mode', () => {
    // A default parameter covers `undefined`, not `null`.
    const value = { color_mode: 'dark', light_theme: null }
    expectMatchesGetCssTheme(cookieFor(value), JSON.stringify(value))
    expect(runScript(cookieFor(value)).attrs['data-color-mode']).toBe('dark')
  })

  test('reads the cookie even when other cookies are present', () => {
    const value = { color_mode: 'light' }
    const rawCookie = `_octo=GH1.1; color_mode=${encodeURIComponent(
      JSON.stringify(value),
    )}; logged_in=no`
    expectMatchesGetCssTheme(rawCookie, JSON.stringify(value))
  })

  describe('resolves `auto` against the system preference', () => {
    for (const [prefersDark, expected] of [
      [false, 'light'],
      [true, 'dark'],
    ] as const) {
      test(`prefers-color-scheme: ${expected}`, () => {
        const { attrs } = runScript(cookieFor({ color_mode: 'auto' }), { prefersDark })
        expect(attrs['data-color-mode']).toBe(expected)
        expect(attrs['data-color-mode-preference']).toBe('auto')
      })
    }

    test('no cookie at all still resolves, because the default mode is auto', () => {
      expect(runScript('', { prefersDark: true }).attrs['data-color-mode']).toBe('dark')
      expect(runScript('').attrs['data-color-mode']).toBe('light')
    })

    test('keeps following the OS after load, but only for `auto`', () => {
      expect(runScript(cookieFor({ color_mode: 'auto' })).listeners).toHaveLength(1)
      expect(runScript(cookieFor({ color_mode: 'light' })).listeners).toHaveLength(0)
      expect(runScript(cookieFor({ color_mode: 'dark' })).listeners).toHaveLength(0)
    })

    test('the registered listener actually re-resolves the attributes', () => {
      const run = runScript(cookieFor({ color_mode: 'auto' }))
      expect(run.attrs['data-color-mode']).toBe('light')
      run.flipSystemPreference()
      expect(run.attrs['data-color-mode']).toBe('dark')
      run.flipSystemPreference()
      expect(run.attrs['data-color-mode']).toBe('light')
      expect(run.attrs['data-color-mode-preference']).toBe('auto')
    })

    test('falls back to the deprecated addListener when addEventListener is absent', () => {
      // Pre-14 Safari exposes only `addListener`, so this branch is live.
      const run = runScript(cookieFor({ color_mode: 'auto' }), { legacyListener: true })
      expect(run.attrs['data-color-mode']).toBe('light')
      expect(run.listeners).toHaveLength(1)
      run.flipSystemPreference()
      expect(run.attrs['data-color-mode']).toBe('dark')

      expect(
        runScript(cookieFor({ color_mode: 'dark' }), { legacyListener: true }).listeners,
      ).toHaveLength(0)
    })

    test('still writes the attributes when matchMedia is unavailable', () => {
      // The script's DOM block sits in a try/catch, so an unguarded matchMedia
      // call would leave <html> with no attributes at all.
      const { attrs } = runScript(cookieFor({ color_mode: 'auto' }), { matchMedia: false })
      expect(attrs['data-color-mode']).toBe('light')
      expect(attrs['data-color-mode-preference']).toBe('auto')
      expect(
        runScript(cookieFor({ color_mode: 'dark' }), { matchMedia: false }).attrs[
          'data-color-mode'
        ],
      ).toBe('dark')
    })

    test('an explicit mode wins over the opposite system preference', () => {
      expect(
        runScript(cookieFor({ color_mode: 'light' }), { prefersDark: true }).attrs[
          'data-color-mode'
        ],
      ).toBe('light')
      expect(runScript(cookieFor({ color_mode: 'dark' })).attrs['data-color-mode']).toBe('dark')
    })
  })

  describe('follows the effective theme, not the raw mode', () => {
    test('a dark day theme makes the document dark', () => {
      const { attrs } = runScript(
        cookieFor({ color_mode: 'light', light_theme: { name: 'dark', color_mode: 'dark' } }),
      )
      expect(attrs['data-color-mode']).toBe('dark')
      expect(attrs['data-dark-theme']).toBe('dark')
    })

    test('a dark day theme variant reaches primitives intact', () => {
      const { attrs } = runScript(
        cookieFor({
          color_mode: 'light',
          light_theme: { name: 'dark_dimmed', color_mode: 'dark' },
          dark_theme: { name: 'dark_high_contrast', color_mode: 'dark' },
        }),
      )
      // Resolved dark by the DAY theme, so data-dark-theme carries that, not the
      // separately configured night theme.
      expect(attrs['data-color-mode']).toBe('dark')
      expect(attrs['data-dark-theme']).toBe('dark_dimmed')
    })

    test('dark theme variants still count as dark', () => {
      for (const name of ['dark_dimmed', 'dark_high_contrast']) {
        const { attrs } = runScript(
          cookieFor({ color_mode: 'dark', dark_theme: { name, color_mode: 'dark' } }),
        )
        expect(attrs['data-color-mode']).toBe('dark')
        expect(attrs['data-dark-theme']).toBe(name)
      }
    })

    test('auto picks the theme belonging to the side the OS is on', () => {
      const value = cookieFor({
        color_mode: 'auto',
        light_theme: { name: 'dark', color_mode: 'dark' },
        dark_theme: { name: 'dark_dimmed', color_mode: 'dark' },
      })
      expect(runScript(value).attrs['data-color-mode']).toBe('dark')
      expect(runScript(value, { prefersDark: true }).attrs['data-color-mode']).toBe('dark')
    })

    test('every supported theme classifies the same under both operators', () => {
      // <html> must classify a theme's lightness the same way @primer/react does
      // for its own wrapper: `startsWith('dark')` here, `includes('dark')` there.
      // A name like `high_contrast_dark` would split them.
      for (const name of Object.values(SupportedTheme)) {
        expect(`${name} startsWith:${name.startsWith('dark')}`).toBe(
          `${name} startsWith:${name.includes('dark')}`,
        )
      }
    })
  })
})
