import { describe, expect, test } from 'vitest'

import { formatFileList } from '@/workflows/lib/format-file-list'

describe('formatFileList', () => {
  test('wraps each path in a code span list item', () => {
    expect(formatFileList(['.github/workflows/test.yml', 'package.json'])).toBe(
      '\n - `.github/workflows/test.yml`\n - `package.json`',
    )
  })

  test('keeps mentions and links inside a code span', () => {
    expect(formatFileList(['src/x @github/some-team [link](https://example.com).md'])).toBe(
      '\n - `src/x @github/some-team [link](https://example.com).md`',
    )
  })

  test('collapses line breaks so a path cannot start a new block', () => {
    const output = formatFileList(['a\n\n**note**\r\nb.md'])
    expect(output).toBe('\n - `a **note** b.md`')
    expect(output.split('\n')).toHaveLength(2)
  })

  test('uses a longer fence when the path contains backticks', () => {
    expect(formatFileList(['src/a`b.md'])).toBe('\n - `` src/a`b.md ``')
    expect(formatFileList(['src/a``b`.md'])).toBe('\n - ``` src/a``b`.md ```')
  })
})
