import { describe, expect, test } from 'vitest'

import { inLiquid } from '@/workflows/lib/in-liquid'

// inLiquid caches tokens by file path, so each case uses its own path.
describe('inLiquid', () => {
  test('finds a data tag', () => {
    const contents = 'Intro\n\n{% data reusables.a.b %}\n'
    expect(inLiquid('content/data-tag.md', contents, 'reusables.a.b')).toBe(true)
  })

  test('finds an indented_data_reference tag', () => {
    const contents = '1. Step\n\n   {% indented_data_reference reusables.a.b spaces=3 %}\n'
    expect(inLiquid('content/indented-tag.md', contents, 'reusables.a.b')).toBe(true)
  })

  test('finds an indented_data_reference tag without spaces', () => {
    const contents = '{% indented_data_reference reusables.a.b %}\n'
    expect(inLiquid('content/indented-tag-no-spaces.md', contents, 'reusables.a.b')).toBe(true)
  })

  test('does not match a data tag with a longer reference', () => {
    const contents = '{% data reusables.a.bc %}\n'
    expect(inLiquid('content/data-tag-prefix.md', contents, 'reusables.a.b')).toBe(false)
  })

  test('does not match an indented_data_reference tag with a longer reference', () => {
    const contents = '{% indented_data_reference reusables.a.b-c spaces=3 %}\n'
    expect(inLiquid('content/indented-tag-prefix.md', contents, 'reusables.a.b')).toBe(false)
  })

  test('returns false for content without Liquid', () => {
    expect(inLiquid('content/no-liquid.md', 'Plain text\n', 'reusables.a.b')).toBe(false)
  })
})
