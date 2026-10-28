import path from 'path'
import { describe, expect, test } from 'vitest'
import { isPathWithin } from '@/content-render/lib/is-path-within'

const p = (...segments: string[]) => path.join(...segments)

describe('isPathWithin', () => {
  test('matches files inside the target directory', () => {
    expect(isPathWithin(p('content', 'search', 'foo.md'), p('content', 'search'))).toBe(true)
    expect(isPathWithin(p('content', 'search', 'a', 'index.md'), p('content', 'search'))).toBe(true)
  })

  test('matches the target file itself', () => {
    const file = p('content', 'search', 'foo.md')
    expect(isPathWithin(file, file)).toBe(true)
  })

  test('does not match sibling directories that share a name prefix', () => {
    expect(isPathWithin(p('content', 'search-github', 'foo.md'), p('content', 'search'))).toBe(
      false,
    )
    expect(
      isPathWithin(p('content', 'rest', 'gitignore', 'x.md'), p('content', 'rest', 'git')),
    ).toBe(false)
  })

  test('does not match sibling files that share a name prefix', () => {
    expect(isPathWithin(p('content', 'a', 'foo-bar.md'), p('content', 'a', 'foo'))).toBe(false)
  })

  test('accepts a trailing separator on the target', () => {
    expect(isPathWithin(p('content', 'search', 'foo.md'), `${p('content', 'search')}/`)).toBe(true)
    expect(
      isPathWithin(p('content', 'search-github', 'foo.md'), `${p('content', 'search')}/`),
    ).toBe(false)
  })
})
