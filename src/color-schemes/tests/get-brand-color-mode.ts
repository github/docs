import { describe, expect, test } from 'vitest'

import { getBrandColorMode } from '@/color-schemes/lib/get-brand-color-mode'

describe('getBrandColorMode', () => {
  test.each([
    ['light', 'light'],
    ['dark', 'dark'],
    ['dark_dimmed', 'dark'],
    ['dark_high_contrast', 'dark'],
  ])('maps the %s scheme to %s mode', (scheme, mode) => {
    expect(getBrandColorMode(scheme)).toBe(mode)
  })
})
