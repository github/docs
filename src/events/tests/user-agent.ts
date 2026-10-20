import { describe, expect, test } from 'vitest'

import { parseUserAgent } from '../components/user-agent'

describe('parseUserAgent', () => {
  test('android, chrome', () => {
    const ua =
      'Mozilla/5.0 (Linux; Android 8.0.0; SM-G960F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36'
    const { os, browser } = parseUserAgent(ua)
    expect(os).toBe('android')
    expect(browser).toBe('chrome')
  })

  test('ios, safari', () => {
    const ua =
      'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1'
    const { os, browser } = parseUserAgent(ua)
    expect(os).toBe('ios')
    expect(browser).toBe('safari')
  })

  test('ios, chrome', () => {
    const ua =
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/119.0.6045.169 Mobile/15E148 Safari/604.1'
    const { os, browser, browser_version } = parseUserAgent(ua)
    expect(os).toBe('ios')
    expect(browser).toBe('chrome')
    expect(browser_version).toBe('119.0.6045.169')
  })

  test('ios, firefox', () => {
    const ua =
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/119.0 Mobile/15E148 Safari/605.1.15'
    const { os, browser, browser_version } = parseUserAgent(ua)
    expect(os).toBe('ios')
    expect(browser).toBe('firefox')
    expect(browser_version).toBe('119.0')
  })

  test('ios, edge', () => {
    const ua =
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) EdgiOS/119.0.2151.65 Version/17.0 Mobile/15E148 Safari/604.1'
    const { os, browser, browser_version } = parseUserAgent(ua)
    expect(os).toBe('ios')
    expect(browser).toBe('edge')
    expect(browser_version).toBe('119.0.2151.65')
  })

  test('android, edge', () => {
    const ua =
      'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36 EdgA/119.0.2151.78'
    const { os, browser, browser_version } = parseUserAgent(ua)
    expect(os).toBe('android')
    expect(browser).toBe('edge')
    expect(browser_version).toBe('119.0.2151.78')
  })

  test('ipad on ios 12, safari', () => {
    const ua =
      'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1'
    const { os, browser } = parseUserAgent(ua)
    expect(os).toBe('ios')
    expect(browser).toBe('safari')
  })

  test('windows, edge', () => {
    const ua =
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246'
    const { os, browser } = parseUserAgent(ua)
    expect(os).toBe('windows')
    expect(browser).toBe('edge')
  })

  test('mac, edge', () => {
    const ua =
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.203'
    const { os, browser } = parseUserAgent(ua)
    expect(os).toBe('mac')
    expect(browser).toBe('edge')
  })

  test('mac, safari', () => {
    const ua =
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9'
    const { os, browser } = parseUserAgent(ua)
    expect(os).toBe('mac')
    expect(browser).toBe('safari')
  })

  test('windows, chrome', () => {
    const ua =
      'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36'
    const { os, browser } = parseUserAgent(ua)
    expect(os).toBe('windows')
    expect(browser).toBe('chrome')
  })

  test('linux, firefox', () => {
    const ua = 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1'
    const { os, browser } = parseUserAgent(ua)
    expect(os).toBe('linux')
    expect(browser).toBe('firefox')
  })

  test('mac, opera', () => {
    const ua =
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 OPR/101.0.0.0'
    const { os, browser } = parseUserAgent(ua)
    expect(os).toBe('mac')
    expect(browser).toBe('opera')
  })

  test('other, other', () => {
    const ua = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
    const { os, browser } = parseUserAgent(ua)
    expect(os).toBe('other')
    expect(browser).toBe('other')
  })
})
