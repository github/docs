import { describe, expect, test } from '@jest/globals'
import {
  getComponentTheme,
  getCssTheme,
  defaultCSSTheme,
  defaultComponentTheme,
} from '../components/useTheme.ts'

describe('getTheme basics', () => {
  test('always return an object with certain keys', () => {
    const cookieValue = JSON.stringify({})
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
    })

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
