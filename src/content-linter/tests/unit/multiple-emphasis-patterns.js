import { describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test.js'
import { multipleEmphasisPatterns } from '../../lib/linting-rules/multiple-emphasis-patterns.js'

describe(multipleEmphasisPatterns.names.join(' - '), () => {
  test('Single emphasis types pass', async () => {
    const markdown = [
      'This is **bold text** that is fine.',
      'This is *italic text* that is okay.',
      'This is `code text` that is acceptable.',
      'This is a SCREAMING_CASE_WORD that is allowed.',
      'This is __bold with underscores__ that works.',
      'This is _italic with underscores_ that works.',
    ].join('\n')
    const result = await runRule(multipleEmphasisPatterns, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('Multiple emphasis types in same string are flagged', async () => {
    const markdown = [
      'This is **bold and `code`** in the same string.',
      'This is ***bold and italic*** combined.',
      'This is `code with **bold**` inside.',
      'This is ___bold and italic___ with underscores.',
    ].join('\n')
    const result = await runRule(multipleEmphasisPatterns, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(4)
    expect(errors[0].lineNumber).toBe(1)
    expect(errors[1].lineNumber).toBe(2)
    expect(errors[2].lineNumber).toBe(3)
    expect(errors[3].lineNumber).toBe(4)
  })

  test('Nested emphasis patterns are flagged', async () => {
    const markdown = [
      'This is **bold with `code` inside**.',
      'This is `code with **bold** nested`.',
    ].join('\n')
    const result = await runRule(multipleEmphasisPatterns, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(2)
    expect(errors[0].lineNumber).toBe(1)
    expect(errors[1].lineNumber).toBe(2)
  })

  test('Separate emphasis patterns on same line pass', async () => {
    const markdown = [
      'This is **bold** and this is *italic* but separate.',
      'Here is `code` and here is UPPERCASE but apart.',
      'First **bold**, then some text, then *italic*.',
    ].join('\n')
    const result = await runRule(multipleEmphasisPatterns, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('Code blocks are ignored', async () => {
    const markdown = [
      '```javascript',
      'const text = "**bold** and `code` mixed";',
      'const more = "***triple emphasis***";',
      '```',
      '',
      '    // Indented code block',
      '    const example = "**bold** with `code`";',
    ].join('\n')
    const result = await runRule(multipleEmphasisPatterns, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('Inline code prevents other emphasis detection', async () => {
    const markdown = [
      'Use `**bold**` to make text bold.',
      'The `*italic*` syntax creates italic text.',
      'Type `__bold__` for bold formatting.',
    ].join('\n')
    const result = await runRule(multipleEmphasisPatterns, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(2) // Code with bold inside is detected
  })

  test('Complex mixed emphasis patterns', async () => {
    const markdown = [
      'This is **bold and `code`** mixed.',
      'Here is ***bold italic*** combined.',
      'Text with __bold and `code`__ together.',
    ].join('\n')
    const result = await runRule(multipleEmphasisPatterns, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(3)
    expect(errors[0].lineNumber).toBe(1)
    expect(errors[1].lineNumber).toBe(2)
    expect(errors[2].lineNumber).toBe(3)
  })

  test('Edge case: adjacent emphasis without overlap passes', async () => {
    const markdown = [
      'This is **bold**_italic_ adjacent but not overlapping.',
      'Here is `code`**bold** touching but separate.',
      'Text with UPPERCASE**bold** next to each other.',
    ].join('\n')
    const result = await runRule(multipleEmphasisPatterns, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('Triple asterisk bold+italic is flagged', async () => {
    const markdown = [
      'This is ***bold and italic*** combined.',
      'Here is ___bold and italic___ with underscores.',
    ].join('\n')
    const result = await runRule(multipleEmphasisPatterns, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(2)
    expect(errors[0].lineNumber).toBe(1)
    expect(errors[1].lineNumber).toBe(2)
  })

  test('Mixed adjacent emphasis types are allowed', async () => {
    const markdown = [
      'This has **bold** and normal text.',
      'This has **bold** and other text.',
      'The API key and **configuration** work.',
      'The API key and **setup** process.',
    ].join('\n')
    const result = await runRule(multipleEmphasisPatterns, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('Autogenerated files are skipped', async () => {
    const frontmatter = ['---', 'title: API Reference', 'autogenerated: rest', '---'].join('\n')
    const markdown = [
      'This is **bold and `code`** mixed.',
      'This is ***bold italic*** combined.',
    ].join('\n')
    const result = await runRule(multipleEmphasisPatterns, {
      strings: {
        markdown: frontmatter + '\n' + markdown,
      },
    })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('Links with emphasis are handled correctly', async () => {
    const markdown = [
      'See [**bold link**](http://example.com) for details.',
      'Check [*italic link*](http://example.com) here.',
      'Visit [`code link`](http://example.com) for info.',
      'Go to [**bold and `code`**](http://example.com) - should be flagged.',
    ].join('\n')
    const result = await runRule(multipleEmphasisPatterns, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(4)
  })

  test('Headers with emphasis are checked', async () => {
    const markdown = [
      '# This is **bold** header',
      '## This is *italic* header',
      '### This is **bold and `code`** header',
      '#### This is normal header',
    ].join('\n')
    const result = await runRule(multipleEmphasisPatterns, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(3)
  })

  test('List items with emphasis are checked', async () => {
    const markdown = [
      '- This is **bold** item',
      '- This is *italic* item',
      '- This is **bold and `code`** item',
      '1. This is numbered **bold** item',
      '2. This is numbered ***bold italic*** item',
    ].join('\n')
    const result = await runRule(multipleEmphasisPatterns, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(2)
    expect(errors[0].lineNumber).toBe(3)
    expect(errors[1].lineNumber).toBe(5)
  })

  test('Escaped emphasis characters are ignored', async () => {
    const markdown = [
      'This has \\*\\*escaped\\*\\* asterisks.',
      'This has \\`escaped\\` backticks.',
      'This has \\_escaped\\_ underscores.',
    ].join('\n')
    const result = await runRule(multipleEmphasisPatterns, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('Rule has correct metadata', () => {
    expect(multipleEmphasisPatterns.names).toEqual(['GHD050', 'multiple-emphasis-patterns'])
    expect(multipleEmphasisPatterns.description).toContain('emphasis')
    expect(multipleEmphasisPatterns.tags).toContain('formatting')
    expect(multipleEmphasisPatterns.tags).toContain('emphasis')
    expect(multipleEmphasisPatterns.tags).toContain('style')
    expect(multipleEmphasisPatterns.severity).toBe('warning')
  })

  test('Empty content does not cause errors', async () => {
    const markdown = ['', '   ', '\t'].join('\n')
    const result = await runRule(multipleEmphasisPatterns, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('Single character emphasis is handled', async () => {
    const markdown = [
      'This is **a** single letter.',
      'This is *b* single letter.',
      'This is `c` single letter.',
      'This is **a** and *b* separate.',
      'This is **`x`** nested single chars.',
    ].join('\n')
    const result = await runRule(multipleEmphasisPatterns, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1) // Nested single chars still flagged
    expect(errors[0].lineNumber).toBe(5)
  })
})
