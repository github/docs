import { afterEach, describe, expect, test, vi } from 'vitest'

import { isHeadless } from '@/events/components/is-headless'

const androidChromeUA =
  'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Mobile Safari/537.36'

function stubBrowser({
  window = {},
  navigator = {},
}: {
  window?: Record<string, unknown>
  navigator?: Record<string, unknown>
} = {}) {
  vi.stubGlobal('window', { outerHeight: 800, innerHeight: 700, ...window })
  vi.stubGlobal('navigator', {
    webdriver: false,
    userAgent: androidChromeUA,
    appVersion: androidChromeUA.replace('Mozilla/', ''),
    languages: ['en-US'],
    mimeTypes: { length: 2 },
    ...navigator,
  })
}

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('isHeadless', () => {
  test('returns false for a regular browser', () => {
    stubBrowser()
    expect(isHeadless()).toBe(false)
  })

  // Browsers without a built-in PDF viewer report an empty mimeTypes list.
  test('returns false for a regular browser with no mimeTypes', () => {
    stubBrowser({ navigator: { mimeTypes: { length: 0 } } })
    expect(isHeadless()).toBe(false)
  })

  test('returns true when webdriver is set', () => {
    stubBrowser({ navigator: { webdriver: true } })
    expect(isHeadless()).toBe(true)
  })

  test('returns true for a HeadlessChrome user agent', () => {
    const ua = androidChromeUA.replace('Chrome/', 'HeadlessChrome/')
    stubBrowser({ navigator: { userAgent: ua, appVersion: ua.replace('Mozilla/', '') } })
    expect(isHeadless()).toBe(true)
  })

  test('returns true when the window has no height', () => {
    stubBrowser({ window: { outerHeight: 0 } })
    expect(isHeadless()).toBe(true)
  })

  test('returns true when there are no languages', () => {
    stubBrowser({ navigator: { languages: [] } })
    expect(isHeadless()).toBe(true)
  })

  test('returns false under Playwright even with webdriver set', () => {
    stubBrowser({ window: { GHDOCSPLAYWRIGHT: 1 }, navigator: { webdriver: true } })
    expect(isHeadless()).toBe(false)
  })
})
