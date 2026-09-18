import { afterEach, describe, expect, test, vi } from 'vitest'

import { getBrandColorMode } from '@/color-schemes/lib/get-brand-color-mode'

function withColorMode(value: string | null) {
  const element = { getAttribute: (name: string) => (name === 'data-color-mode' ? value : null) }
  vi.stubGlobal('document', { documentElement: element })
}

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('getBrandColorMode', () => {
  test.each([
    ['dark', 'dark'],
    ['light', 'light'],
  ])('follows <html> data-color-mode=%s', (attribute, expected) => {
    withColorMode(attribute)
    expect(getBrandColorMode()).toBe(expected)
  })

  test.each([
    // Brand has no `auto` mode, so anything not `dark` has to render light.
    ['auto', 'light'],
    ['nonsense', 'light'],
    [null, 'light'],
  ])('falls back to light for data-color-mode=%s', (attribute, expected) => {
    withColorMode(attribute)
    expect(getBrandColorMode()).toBe(expected)
  })

  test('returns light when there is no document', () => {
    vi.stubGlobal('document', undefined)
    expect(getBrandColorMode()).toBe('light')
  })
})
