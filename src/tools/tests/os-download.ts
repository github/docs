import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { afterEach, describe, expect, test, vi } from 'vitest'

import type { Components } from 'hast-util-to-jsx-runtime'

import { renderHTMLString } from '@/frame/components/ui/RenderedHTML/render-html-string'
import { OsDownloadLink, replaceDownloadLabel } from '@/tools/components/OsDownloadLink'
import {
  archFromUserAgent,
  detectDownloadKey,
  pickDownloadKey,
  type NavigatorLike,
} from '@/tools/lib/os-download'

// Mock the translation hook so server rendering does not need MainContext.
vi.mock('@/languages/components/useTranslation', () => ({
  useTranslation: () => ({
    t: (key: string) => (key === 'download_for' ? 'Download for {os}' : key),
  }),
}))

const UA = {
  macChrome:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
  macSafari:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15',
  windowsEdge:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36 Edg/141.0.0.0',
  linuxFirefoxArm: 'Mozilla/5.0 (X11; Linux aarch64; rv:143.0) Gecko/20100101 Firefox/143.0',
  linuxFirefoxX64: 'Mozilla/5.0 (X11; Linux x86_64; rv:143.0) Gecko/20100101 Firefox/143.0',
  linuxChrome:
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
  android:
    'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Mobile Safari/537.36',
  iphone:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1',
  chromeOS:
    'Mozilla/5.0 (X11; CrOS x86_64 14541.0.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
}

function nav(userAgent: string, extra: Partial<NavigatorLike> = {}): NavigatorLike {
  return { userAgent, ...extra }
}

function withArch(architecture: string): NavigatorLike['userAgentData'] {
  return { getHighEntropyValues: async () => ({ architecture }) }
}

describe('pickDownloadKey', () => {
  test.each([
    [{ os: 'mac', arch: 'unknown' }, 'mac'],
    [{ os: 'mac', arch: 'arm' }, 'mac'],
    [{ os: 'mac', arch: 'x86' }, 'mac-intel'],
    [{ os: 'mac', arch: 'arm', isTouchMac: true }, null],
    [{ os: 'windows', arch: 'unknown' }, 'windows'],
    [{ os: 'windows', arch: 'arm' }, 'windows-arm'],
    [{ os: 'linux', arch: 'x86' }, 'linux'],
    [{ os: 'linux', arch: 'arm' }, 'linux-arm'],
    [{ os: 'ios', arch: 'arm' }, null],
    [{ os: 'android', arch: 'arm' }, null],
    [{ os: 'cros', arch: 'x86' }, null],
    [{ os: 'other', arch: 'unknown' }, null],
  ] as const)('%o -> %s', (input, expected) => {
    expect(pickDownloadKey(input)).toBe(expected)
  })
})

describe('archFromUserAgent', () => {
  test('reads Linux architecture tokens', () => {
    expect(archFromUserAgent(UA.linuxFirefoxArm)).toBe('arm')
    expect(archFromUserAgent(UA.linuxFirefoxX64)).toBe('x86')
    expect(archFromUserAgent('Mozilla/5.0 (X11; Linux i686)')).toBe('unknown')
  })
})

describe('detectDownloadKey', () => {
  test('uses client hints for architecture when available', async () => {
    expect(await detectDownloadKey(nav(UA.macChrome, { userAgentData: withArch('x86') }))).toBe(
      'mac-intel',
    )
    expect(await detectDownloadKey(nav(UA.macChrome, { userAgentData: withArch('arm') }))).toBe(
      'mac',
    )
    expect(await detectDownloadKey(nav(UA.windowsEdge, { userAgentData: withArch('arm') }))).toBe(
      'windows-arm',
    )
    // Chromium freezes Linux user agents to x86_64, so client hints win.
    expect(await detectDownloadKey(nav(UA.linuxChrome, { userAgentData: withArch('arm') }))).toBe(
      'linux-arm',
    )
  })

  test('falls back to defaults without client hints', async () => {
    expect(await detectDownloadKey(nav(UA.macSafari))).toBe('mac')
    expect(await detectDownloadKey(nav(UA.windowsEdge))).toBe('windows')
    expect(await detectDownloadKey(nav(UA.linuxFirefoxX64))).toBe('linux')
    expect(await detectDownloadKey(nav(UA.linuxFirefoxArm))).toBe('linux-arm')
  })

  test('falls back when client hints reject', async () => {
    const userAgentData = {
      getHighEntropyValues: () => Promise.reject(new Error('blocked')),
    }
    expect(await detectDownloadKey(nav(UA.windowsEdge, { userAgentData }))).toBe('windows')
  })

  test('skips iPad, phones, and ChromeOS', async () => {
    expect(await detectDownloadKey(nav(UA.macSafari, { maxTouchPoints: 5 }))).toBeNull()
    expect(await detectDownloadKey(nav(UA.iphone))).toBeNull()
    expect(await detectDownloadKey(nav(UA.android))).toBeNull()
    expect(await detectDownloadKey(nav(UA.chromeOS))).toBeNull()
  })
})

describe('OsDownloadLink rendering', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  // markdownComponents pulls in Primer CSS that Vitest cannot load, so map a directly.
  test('server render keeps the fallback link unchanged', () => {
    const html =
      '<a href="https://github.com/features/ai/github-app" target="_blank" class="btn js-os-download" data-os-download-mac="https://gh.io/copilot-app-mac"><svg aria-hidden="true"></svg> <span class="js-os-download-label">Download app</span></a>'
    const components = { a: OsDownloadLink } as unknown as Partial<Components>
    const errors = vi.spyOn(console, 'error').mockImplementation(() => {})
    expect(renderToStaticMarkup(renderHTMLString(html, components))).toBe(html)
    expect(errors).not.toHaveBeenCalled()
  })

  test('replaceDownloadLabel swaps only the label span', () => {
    const children = [
      createElement('svg', { key: 'icon', 'aria-hidden': 'true' }),
      ' ',
      createElement('span', { key: 'label', className: 'js-os-download-label' }, 'Download app'),
    ]
    const out = renderToStaticMarkup(
      createElement('a', null, replaceDownloadLabel(children, 'Download for macOS')),
    )
    expect(out).toBe(
      '<a><svg aria-hidden="true"></svg> <span class="js-os-download-label">Download for macOS</span></a>',
    )
  })
})
