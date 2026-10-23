import { describe, expect, test } from 'vitest'

import { decodeHash, findHashTarget } from '@/frame/components/ClientSideHashFocus'

describe('decodeHash', () => {
  test('decodes percent-encoded non-ASCII ids', () => {
    const hash = new URL('https://docs.github.com/ja/page#copilot-の動作のしくみ').hash
    expect(hash).not.toBe('#copilot-の動作のしくみ')
    expect(decodeHash(hash)).toBe('copilot-の動作のしくみ')
  })

  test('leaves ASCII ids unchanged', () => {
    expect(decodeHash('#get-access')).toBe('get-access')
  })

  test('returns the raw value for malformed percent-encoding', () => {
    expect(decodeHash('#100%')).toBe('100%')
  })

  test('returns an empty string for an empty hash', () => {
    expect(decodeHash('')).toBe('')
    expect(decodeHash('#')).toBe('')
  })
})

describe('findHashTarget', () => {
  const rootWith = (...ids: string[]) => ({
    getElementById: (id: string) => (ids.includes(id) ? ({ id } as HTMLElement) : null),
  })

  test('finds a non-ASCII id from the encoded location hash', () => {
    const hash = new URL('https://docs.github.com/ja/page#copilot-の動作のしくみ').hash
    expect(findHashTarget(rootWith('copilot-の動作のしくみ'), hash)?.id).toBe(
      'copilot-の動作のしくみ',
    )
  })

  test('removes the fragment delimiter only once', () => {
    expect(findHashTarget(rootWith('get-access'), '##get-access')).toBeNull()
    expect(findHashTarget(rootWith('#get-access'), '##get-access')?.id).toBe('#get-access')
    expect(findHashTarget(rootWith('#の'), '#%23%E3%81%AE')?.id).toBe('#の')
  })

  test('returns null for an empty hash', () => {
    expect(findHashTarget(rootWith(''), '')).toBeNull()
    expect(findHashTarget(rootWith(''), '#')).toBeNull()
  })
})
