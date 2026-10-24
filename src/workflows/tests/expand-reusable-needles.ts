import { describe, expect, test } from 'vitest'

import { expandReusableNeedles, inLiquid, reusableNeedle } from '@/workflows/lib/in-liquid'

const reusableFiles = new Map([
  ['data/reusables/nested/a.md', 'Inner text\n'],
  ['data/reusables/nested/b.md', 'Before\n\n{% data reusables.nested.a %}\n'],
  ['data/reusables/nested/c.md', '{% data reusables.nested.b %}\n\nAfter\n'],
  ['data/reusables/nested/d.md', '{% data reusables.nested.e %}\n'],
  ['data/reusables/nested/e.md', '{% data reusables.nested.d %}\n'],
  ['data/reusables/nested/f.md', '{% data reusables.nested.unrelated %}\n'],
  ['data/reusables/nested/g.md', 'Tip\n'],
  [
    'data/reusables/nested/h.md',
    '1. Step\n\n   {% indented_data_reference reusables.nested.g spaces=3 %}\n',
  ],
])

describe('reusableNeedle', () => {
  test('converts forward and back slashes to dots', () => {
    expect(reusableNeedle('data/reusables/nested/b.md')).toBe('reusables.nested.b')
    expect(reusableNeedle('data/reusables/nested\\b.md')).toBe('reusables.nested.b')
  })
})

describe('expandReusableNeedles', () => {
  test('adds reusables that include a needle through other reusables', () => {
    const expanded = expandReusableNeedles(new Set(['reusables.nested.a']), reusableFiles)
    expect([...expanded].sort()).toEqual([
      'reusables.nested.a',
      'reusables.nested.b',
      'reusables.nested.c',
    ])
  })

  test('stops on reusables that include each other', () => {
    const expanded = expandReusableNeedles(new Set(['reusables.nested.d']), reusableFiles)
    expect([...expanded].sort()).toEqual(['reusables.nested.d', 'reusables.nested.e'])
  })

  test('adds reusables that include a needle with indented_data_reference', () => {
    const expanded = expandReusableNeedles(new Set(['reusables.nested.g']), reusableFiles)
    expect([...expanded].sort()).toEqual(['reusables.nested.g', 'reusables.nested.h'])
  })

  test('keeps needles that no reusable includes', () => {
    const expanded = expandReusableNeedles(new Set(['reusables.nested.c']), reusableFiles)
    expect([...expanded]).toEqual(['reusables.nested.c'])
  })

  test('finds a content file that includes only the outer reusable', () => {
    const contents = 'Intro\n\n{% data reusables.nested.c %}\n'
    const expanded = expandReusableNeedles(new Set(['reusables.nested.a']), reusableFiles)
    expect(inLiquid('content/outer.md', contents, 'reusables.nested.a')).toBe(false)
    expect([...expanded].some((needle) => inLiquid('content/outer.md', contents, needle))).toBe(
      true,
    )
  })
})
