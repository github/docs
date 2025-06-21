import { describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test.js'
import { noteWarningFormatting } from '../../lib/linting-rules/note-warning-formatting.js'

describe(noteWarningFormatting.names.join(' - '), () => {
  test('Correctly formatted legacy notes pass', async () => {
    const markdown = [
      'This is a paragraph.',
      '',
      '{% note %}',
      '',
      '**Note:** This is a properly formatted note.',
      '',
      '{% endnote %}',
      '',
      'Another paragraph follows.',
    ].join('\n')
    const result = await runRule(noteWarningFormatting, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('Correctly formatted new-style callouts pass', async () => {
    const markdown = [
      'This is a paragraph.',
      '',
      '> [!NOTE]',
      '> This is a properly formatted callout note.',
      '',
      'Another paragraph follows.',
    ].join('\n')
    const result = await runRule(noteWarningFormatting, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('Missing line break before legacy note is flagged', async () => {
    const markdown = [
      'This is a paragraph.',
      '{% note %}',
      '**Note:** This note needs a line break before it.',
      '{% endnote %}',
    ].join('\n')
    const result = await runRule(noteWarningFormatting, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(2)
    if (errors[0].detail) {
      expect(errors[0].detail).toContain('Add a blank line before {% note %}')
    }
  })

  test('Missing line break after legacy note is flagged', async () => {
    const markdown = [
      '',
      '{% note %}',
      '**Note:** This note needs a line break after it.',
      '{% endnote %}',
      'This paragraph is too close.',
    ].join('\n')
    const result = await runRule(noteWarningFormatting, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(4)
    if (errors[0].detail) {
      expect(errors[0].detail).toContain('Add a blank line after {% endnote %}')
    }
  })

  test('Missing line break before new-style callout is flagged', async () => {
    const markdown = [
      'This is a paragraph.',
      '> [!WARNING]',
      '> This warning needs a line break before it.',
    ].join('\n')
    const result = await runRule(noteWarningFormatting, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(2)
    if (errors[0].detail) {
      expect(errors[0].detail).toContain('Add a blank line before > [!WARNING]')
    }
  })

  test('Missing line break after new-style callout is flagged', async () => {
    const markdown = [
      '',
      '> [!DANGER]',
      '> This danger callout needs a line break after it.',
      'This paragraph is too close.',
    ].join('\n')
    const result = await runRule(noteWarningFormatting, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(4)
    if (errors[0].detail) {
      expect(errors[0].detail).toContain('Add a blank line after > [!DANGER]')
    }
  })

  test('Too many bullet points in legacy note is flagged', async () => {
    const markdown = [
      '',
      '{% note %}',
      '',
      '**Note:** This note has too many bullets:',
      '',
      '* First bullet point',
      '* Second bullet point',
      '* Third bullet point (this should be flagged)',
      '',
      '{% endnote %}',
      '',
    ].join('\n')
    const result = await runRule(noteWarningFormatting, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(8)
    if (errors[0].detail) {
      expect(errors[0].detail).toContain('Do not include more than 2 bullet points')
    }
  })

  test('Too many bullet points in new-style callout is flagged', async () => {
    const markdown = [
      '',
      '> [!NOTE]',
      '> This callout has too many bullets:',
      '>',
      '> * First bullet point',
      '> * Second bullet point',
      '> * Third bullet point (this should be flagged)',
      '',
    ].join('\n')
    const result = await runRule(noteWarningFormatting, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(7)
    if (errors[0].detail) {
      expect(errors[0].detail).toContain('Do not include more than 2 bullet points')
    }
  })

  test('Missing prefix in legacy note is flagged and fixable', async () => {
    const markdown = [
      '',
      '{% note %}',
      '',
      'This note is missing the proper prefix.',
      '',
      '{% endnote %}',
      '',
    ].join('\n')
    const result = await runRule(noteWarningFormatting, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(4)
    if (errors[0].detail) {
      expect(errors[0].detail).toContain('should start with **Note:**')
    }
    expect(errors[0].fixInfo).toBeDefined()
    if (errors[0].fixInfo) {
      expect(errors[0].fixInfo.insertText).toBe('**Note:** ')
    }
  })

  test('Orphaned note prefix outside callout is flagged', async () => {
    const markdown = [
      'This is a regular paragraph.',
      '',
      '**Note:** This note prefix should be inside a callout block.',
      '',
      'Another paragraph.',
    ].join('\n')
    const result = await runRule(noteWarningFormatting, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(3)
    if (errors[0].detail) {
      expect(errors[0].detail).toContain('should be inside a callout block')
    }
  })

  test('Orphaned warning prefix outside callout is flagged', async () => {
    const markdown = [
      'Regular content here.',
      '',
      '**Warning:** This warning should be in a proper callout.',
      '',
      'More content.',
    ].join('\n')
    const result = await runRule(noteWarningFormatting, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(3)
    if (errors[0].detail) {
      expect(errors[0].detail).toContain('Warning prefix should be inside a callout block')
    }
  })

  test('Feedback forms in legacy notes are not flagged for missing prefix', async () => {
    const markdown = [
      '',
      '{% note %}',
      '',
      'Did you successfully complete this task?',
      '',
      '<a href="https://example.com" class="btn">Yes</a>',
      '',
      '{% endnote %}',
      '',
    ].join('\n')
    const result = await runRule(noteWarningFormatting, { strings: { markdown } })
    const errors = result.markdown
    // Should only flag missing line breaks, not missing prefix for feedback forms
    expect(errors.length).toBe(0)
  })

  test('Multiple formatting issues are all caught', async () => {
    const markdown = [
      'Paragraph without break.',
      '{% note %}',
      'Missing prefix and has bullets:',
      '* First bullet',
      '* Second bullet',
      '* Third bullet (too many)',
      '{% endnote %}',
      'No break after note.',
      '',
      '**Danger:** Orphaned danger prefix.',
    ].join('\n')
    const result = await runRule(noteWarningFormatting, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(5)

    // Check we get all expected error types by line numbers and error count
    const errorLines = errors.map((e) => e.lineNumber).sort((a, b) => a - b)
    expect(errorLines).toEqual([2, 3, 6, 7, 10])

    // Verify we have the expected number of different types of errors:
    // 1. Missing line break before note (line 2)
    // 2. Missing prefix in note content (line 3)
    // 3. Too many bullet points (line 6)
    // 4. Missing line break after note (line 7)
    // 5. Orphaned danger prefix (line 10)
    expect(errors.length).toBe(5)
  })

  test('Mixed legacy and new-style callouts work correctly', async () => {
    const markdown = [
      'Some content.',
      '',
      '{% note %}',
      '**Note:** This is a legacy note.',
      '{% endnote %}',
      '',
      'More content.',
      '',
      '> [!WARNING]',
      '> This is a new-style warning.',
      '',
      'Final content.',
    ].join('\n')
    const result = await runRule(noteWarningFormatting, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('Different callout types are handled correctly', async () => {
    const markdown = [
      '',
      '> [!NOTE]',
      '> This is a note callout.',
      '',
      '> [!WARNING]',
      '> This is a warning callout.',
      '',
      '> [!DANGER]',
      '> This is a danger callout.',
      '',
    ].join('\n')
    const result = await runRule(noteWarningFormatting, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('Autogenerated files are skipped', async () => {
    const frontmatter = ['---', 'title: API Reference', 'autogenerated: rest', '---'].join('\n')
    const markdown = [
      'Content.',
      '{% note %}',
      'Badly formatted note.',
      '{% endnote %}',
      'More content.',
    ].join('\n')
    const result = await runRule(noteWarningFormatting, {
      strings: {
        markdown: frontmatter + '\n' + markdown,
      },
    })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('Empty notes and callouts do not cause errors', async () => {
    const markdown = ['', '{% note %}', '', '{% endnote %}', '', '> [!NOTE]', '>', ''].join('\n')
    const result = await runRule(noteWarningFormatting, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('Warning severity is set correctly', () => {
    expect(noteWarningFormatting.severity).toBe('warning')
  })

  test('Rule has correct metadata', () => {
    expect(noteWarningFormatting.names).toEqual(['GHD049', 'note-warning-formatting'])
    expect(noteWarningFormatting.description).toContain('style guide')
    expect(noteWarningFormatting.tags).toContain('callouts')
    expect(noteWarningFormatting.tags).toContain('notes')
    expect(noteWarningFormatting.tags).toContain('warnings')
  })
})
