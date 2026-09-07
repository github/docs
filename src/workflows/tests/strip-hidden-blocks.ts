import { describe, expect, test } from 'vitest'

import { stripHiddenBlocks } from '../sync-sdk-docs/strip-hidden-blocks'

const FENCE = '```'

describe('stripHiddenBlocks', () => {
  test('removes a hidden range and keeps the visible sample', () => {
    const input = [
      '<!-- docs-validate: hidden -->',
      `${FENCE}go`,
      'package main',
      '',
      'func main() {',
      '\tclient := copilot.NewClient(nil)',
      '\t_ = client',
      '}',
      FENCE,
      '<!-- /docs-validate: hidden -->',
      '',
      `${FENCE}go`,
      'client := copilot.NewClient(nil)',
      FENCE,
    ].join('\n')

    const { content, removed, unbalanced } = stripHiddenBlocks(input)

    expect(removed).toBe(1)
    expect(unbalanced).toBe(0)
    expect(content).toBe([`${FENCE}go`, 'client := copilot.NewClient(nil)', FENCE].join('\n'))
    expect(content).not.toContain('package main')
    expect(content).not.toContain('docs-validate')
  })

  test('collapses the blank lines left behind inside a details block', () => {
    const input = [
      '<details>',
      '<summary><strong>Go</strong></summary>',
      '',
      '<!-- docs-validate: hidden -->',
      `${FENCE}go`,
      'package main',
      FENCE,
      '<!-- /docs-validate: hidden -->',
      '',
      `${FENCE}go`,
      'client := copilot.NewClient(nil)',
      FENCE,
      '',
      '</details>',
    ].join('\n')

    const { content } = stripHiddenBlocks(input)

    expect(content).toBe(
      [
        '<details>',
        '<summary><strong>Go</strong></summary>',
        '',
        `${FENCE}go`,
        'client := copilot.NewClient(nil)',
        FENCE,
        '',
        '</details>',
      ].join('\n'),
    )
    expect(content).not.toMatch(/\n\n\n/)
  })

  test('removes every range in a file with multiple language tabs', () => {
    const tab = (lang: string, hiddenBody: string, visibleBody: string) =>
      [
        '<details>',
        `<summary><strong>${lang}</strong></summary>`,
        '',
        '<!-- docs-validate: hidden -->',
        `${FENCE}${lang.toLowerCase()}`,
        hiddenBody,
        FENCE,
        '<!-- /docs-validate: hidden -->',
        '',
        `${FENCE}${lang.toLowerCase()}`,
        visibleBody,
        FENCE,
        '',
        '</details>',
      ].join('\n')

    const input = [
      tab('Go', 'package main', 'visible go'),
      tab('Python', 'def main():', 'visible python'),
    ].join('\n')

    const { content, removed } = stripHiddenBlocks(input)

    expect(removed).toBe(2)
    expect(content).not.toContain('package main')
    expect(content).not.toContain('def main():')
    expect(content).toContain('visible go')
    expect(content).toContain('visible python')
  })

  test('handles a hidden range containing multiple fences', () => {
    const input = [
      '<!-- docs-validate: hidden -->',
      `${FENCE}go`,
      'package main',
      FENCE,
      `${FENCE}go`,
      'package other',
      FENCE,
      '<!-- /docs-validate: hidden -->',
      '',
      `${FENCE}go`,
      'visible',
      FENCE,
    ].join('\n')

    const { content, removed } = stripHiddenBlocks(input)

    expect(removed).toBe(1)
    expect(content).not.toContain('package main')
    expect(content).not.toContain('package other')
    expect(content).toContain('visible')
  })

  test('leaves markers that appear inside a code fence', () => {
    const input = [
      'Use the marker like this:',
      '',
      `${FENCE}markdown`,
      '<!-- docs-validate: hidden -->',
      '<!-- /docs-validate: hidden -->',
      FENCE,
      '',
      'Done.',
    ].join('\n')

    const { content, removed, unbalanced } = stripHiddenBlocks(input)

    expect(removed).toBe(0)
    expect(unbalanced).toBe(0)
    expect(content).toBe(input)
  })

  test('leaves an unclosed opener in place and reports it', () => {
    const input = [
      '<!-- docs-validate: hidden -->',
      `${FENCE}go`,
      'package main',
      FENCE,
      '',
      'Trailing prose that must survive.',
    ].join('\n')

    const { content, removed, unbalanced } = stripHiddenBlocks(input)

    expect(removed).toBe(0)
    expect(unbalanced).toBe(1)
    expect(content).toBe(input)
    expect(content).toContain('Trailing prose that must survive.')
  })

  test('treats a second opener before any close as unbalanced', () => {
    const input = [
      '<!-- docs-validate: hidden -->',
      `${FENCE}go`,
      'first',
      FENCE,
      '<!-- docs-validate: hidden -->',
      `${FENCE}go`,
      'second',
      FENCE,
      '<!-- /docs-validate: hidden -->',
      '',
      `${FENCE}go`,
      'visible',
      FENCE,
    ].join('\n')

    const { content, removed, unbalanced } = stripHiddenBlocks(input)

    expect(unbalanced).toBe(1)
    expect(removed).toBe(1)
    // The malformed opener survives; the well-formed range after it is removed.
    expect(content).toContain('first')
    expect(content).not.toContain('second')
    expect(content).toContain('visible')
  })

  test('leaves documents without markers byte-for-byte unchanged', () => {
    const input = [
      '## Heading',
      '',
      '<!-- docs-validate: skip -->',
      '',
      `${FENCE}java`,
      'var client = new CopilotClient();',
      FENCE,
      '',
      '<!-- docs-validate: wrap-async -->',
      '',
      `${FENCE}typescript`,
      'const client = new CopilotClient();',
      FENCE,
      '',
    ].join('\n')

    const { content, removed, unbalanced } = stripHiddenBlocks(input)

    expect(removed).toBe(0)
    expect(unbalanced).toBe(0)
    expect(content).toBe(input)
  })

  test('preserves trailing newlines', () => {
    const input = `<!-- docs-validate: hidden -->\n${FENCE}go\nhidden\n${FENCE}\n<!-- /docs-validate: hidden -->\n\n${FENCE}go\nvisible\n${FENCE}\n`

    const { content } = stripHiddenBlocks(input)

    expect(content).toBe(`${FENCE}go\nvisible\n${FENCE}\n`)
    expect(content.endsWith('\n')).toBe(true)
  })

  test('tolerates whitespace variations in the markers', () => {
    const input = [
      '<!--   docs-validate:   hidden   -->',
      `${FENCE}go`,
      'hidden',
      FENCE,
      '<!--  /  docs-validate:  hidden  -->',
      '',
      `${FENCE}go`,
      'visible',
      FENCE,
    ].join('\n')

    const { content, removed } = stripHiddenBlocks(input)

    expect(removed).toBe(1)
    expect(content).toBe([`${FENCE}go`, 'visible', FENCE].join('\n'))
  })

  test('matches markers case-insensitively and tolerates trailing content', () => {
    const input = [
      '<!-- DOCS-VALIDATE: Hidden --> keep-me-out',
      `${FENCE}go`,
      'hidden',
      FENCE,
      '<!-- /Docs-Validate: HIDDEN -->',
      '',
      'after',
    ].join('\n')

    const { content, removed, unbalanced } = stripHiddenBlocks(input)

    expect(removed).toBe(1)
    expect(unbalanced).toBe(0)
    expect(content).toBe('after')
  })

  test('does not merge paragraphs when the range has no blank line on either side', () => {
    const input = [
      'before',
      '<!-- docs-validate: hidden -->',
      `${FENCE}go`,
      'hidden',
      FENCE,
      '<!-- /docs-validate: hidden -->',
      'after',
    ].join('\n')

    const { content, removed } = stripHiddenBlocks(input)

    expect(removed).toBe(1)
    // A blank line is inserted so "before" and "after" stay separate paragraphs.
    expect(content).toBe(['before', '', 'after'].join('\n'))
  })

  test('ignores a shorter fence nested inside a longer one', () => {
    const outer = '````'
    const input = [
      outer,
      // These lines are sample text inside the four-backtick fence, so the
      // markers and the inner fence must not be interpreted.
      '<!-- docs-validate: hidden -->',
      `${FENCE}go`,
      'sample',
      FENCE,
      '<!-- /docs-validate: hidden -->',
      outer,
      '',
      '<!-- docs-validate: hidden -->',
      `${FENCE}go`,
      'hidden',
      FENCE,
      '<!-- /docs-validate: hidden -->',
      '',
      'after',
    ].join('\n')

    const { content, removed, unbalanced } = stripHiddenBlocks(input)

    expect(removed).toBe(1)
    expect(unbalanced).toBe(0)
    expect(content).toBe(
      [
        outer,
        '<!-- docs-validate: hidden -->',
        `${FENCE}go`,
        'sample',
        FENCE,
        '<!-- /docs-validate: hidden -->',
        outer,
        '',
        'after',
      ].join('\n'),
    )
  })

  test('treats an indented fence beyond three spaces as content, not a fence', () => {
    const input = [
      '<!-- docs-validate: hidden -->',
      `   ${FENCE}go`,
      'hidden',
      `   ${FENCE}`,
      '<!-- /docs-validate: hidden -->',
      '',
      'after',
    ].join('\n')

    const { content, removed } = stripHiddenBlocks(input)

    expect(removed).toBe(1)
    expect(content).toBe('after')
  })
})
