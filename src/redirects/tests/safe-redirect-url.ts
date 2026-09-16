import { describe, expect, test } from 'vitest'

import { safeRedirectUrl } from '@/frame/middleware/safe-redirect'

describe('safeRedirectUrl', () => {
  test('collapses leading double slashes to single slash', () => {
    expect(safeRedirectUrl('//evil.com')).toBe('/evil.com')
  })

  test('collapses leading triple slashes to single slash', () => {
    expect(safeRedirectUrl('///evil.com')).toBe('/evil.com')
  })

  test('collapses many leading slashes to single slash', () => {
    expect(safeRedirectUrl('////evil.com/path')).toBe('/evil.com/path')
  })

  test('preserves single leading slash', () => {
    expect(safeRedirectUrl('/en/get-started')).toBe('/en/get-started')
  })

  test('preserves query strings', () => {
    expect(safeRedirectUrl('//evil.com?a=1&b=2')).toBe('/evil.com?a=1&b=2')
  })

  test('does not modify double slashes in the middle of a path', () => {
    expect(safeRedirectUrl('/en//get-started')).toBe('/en//get-started')
  })

  test('handles root path', () => {
    expect(safeRedirectUrl('/')).toBe('/')
  })

  test('handles empty string', () => {
    expect(safeRedirectUrl('')).toBe('')
  })
})
