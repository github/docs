import { describe, expect, test } from 'vitest'

import {
  getComponentTheme,
  getCssTheme,
  defaultCSSTheme,
  defaultComponentTheme,
} from '../components/useTheme'

interface ThemeCookieValue {
  color_mode?: string
  light_theme?: {
    name: string
    color_mode: string
  }
  dark_theme?: {
    name: string
    color_mode: string
  }
}

describe('getTheme basics', () => {
  test('always return an object with certain keys', () => {
    const cookieValue = JSON.stringify({} as ThemeCookieValue)
    expect(getCssTheme(cookieValue)).toEqual(defaultCSSTheme)
    expect(getComponentTheme(cookieValue)).toEqual(defaultComponentTheme)
  })

  test('ignore "junk" cookie values', () => {
    const cookieValue = '[This is not valid JSON}'
    expect(getCssTheme(cookieValue)).toEqual(defaultCSSTheme)
    expect(getComponentTheme(cookieValue)).toEqual(defaultComponentTheme)
  })

  test('respect the color_mode cookie value', () => {
    const cookieValue = JSON.stringify({
      color_mode: 'dark',
      light_theme: { name: 'light_colorblind', color_mode: 'light' },
      dark_theme: { name: 'dark_tritanopia', color_mode: 'dark' },
    } as ThemeCookieValue)

    const cssTheme = getCssTheme(cookieValue)
    expect(cssTheme.colorMode).toBe('dark')
    expect(cssTheme.darkTheme).toBe(defaultCSSTheme.darkTheme)
    expect(cssTheme.lightTheme).toBe(defaultCSSTheme.lightTheme)

    const componentTheme = getComponentTheme(cookieValue)
    expect(componentTheme.colorMode).toBe('night')
    expect(componentTheme.nightScheme).toBe(defaultComponentTheme.nightScheme)
    expect(componentTheme.dayScheme).toBe(defaultComponentTheme.dayScheme)
  })
})
