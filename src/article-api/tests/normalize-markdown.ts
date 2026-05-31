import { describe, expect, test } from 'vitest'

import { collapseBlankLines, normalizeRenderedMarkdown } from '@/article-api/lib/normalize-markdown'

describe('collapseBlankLines', () => {
  test('collapses 3+ newlines down to 2', () => {
    const input = 'one\n\n\n\ntwo'
    expect(collapseBlankLines(input)).toBe('one\n\ntwo')
  })

  test('leaves single blank lines untouched', () => {
    const input = 'one\n\ntwo'
    expect(collapseBlankLines(input)).toBe('one\n\ntwo')
  })

  test('leaves single newlines untouched', () => {
    const input = 'one\ntwo'
    expect(collapseBlankLines(input)).toBe('one\ntwo')
  })

  test('handles multiple runs across the document', () => {
    const input = 'a\n\n\nb\n\n\n\nc\n\nd'
    expect(collapseBlankLines(input)).toBe('a\n\nb\n\nc\n\nd')
  })

  test('preserves trailing newline', () => {
    const input = 'one\n\n\ntwo\n'
    expect(collapseBlankLines(input)).toBe('one\n\ntwo\n')
  })

  test('also collapses blank-line runs inside fenced code blocks', () => {
    // Markdown preserves blank lines inside ``` fences in the rendered
    // <pre><code>, so this regex does change rendered code-block output.
    // That is intentional: 3+ blank lines in a code sample is noise we want
    // to collapse the same way we do everywhere else.
    const input = 'before\n\n```\ncode\n\n\n\nmore code\n```\n\nafter'
    expect(collapseBlankLines(input)).toBe('before\n\n```\ncode\n\nmore code\n```\n\nafter')
  })
})

describe('normalizeRenderedMarkdown', () => {
  test('applies blank-line collapsing', () => {
    expect(normalizeRenderedMarkdown('a\n\n\n\nb')).toBe('a\n\nb')
  })
})
