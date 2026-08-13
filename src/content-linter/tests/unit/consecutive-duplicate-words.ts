import { describe, expect, test } from 'vitest'

import { runRule } from '@/content-linter/lib/init-test'
import { consecutiveDuplicateWords } from '@/content-linter/lib/linting-rules/consecutive-duplicate-words'

describe(consecutiveDuplicateWords.names.join(' - '), () => {
  test('reports lowercase and case-insensitive duplicate words', async () => {
    const markdown = [
      'You will use use this process.',
      'For more more information, see the guide.',
      'This version is newer than the the published version.',
      'Open the Terminal Chat chat window.',
      'Create an Azure Blob Storage storage account.',
      'The café café is nearby.',
    ].join('\n')

    const result = await runRule(consecutiveDuplicateWords, { strings: { markdown } })
    const errors = result.markdown

    expect(errors).toHaveLength(6)
    expect(errors.map((error) => error.lineNumber)).toEqual([1, 2, 3, 4, 5, 6])
    expect(errors[0].errorDetail).toBe('Check whether the repeated word "use" is intentional.')
    expect(errors[0].errorRange).toEqual([14, 3])
    expect(errors[3].errorRange).toEqual([24, 4])
    expect(errors[4].errorRange).toEqual([30, 7])
  })

  test('reports duplicates in common Markdown prose constructs', async () => {
    const markdown = [
      '# A repeated repeated heading',
      '',
      '* A duplicate duplicate list item.',
      '',
      '> A repeated repeated blockquote.',
      '',
      '**Terminal Chat chat** window.',
      '',
      '[More more information](https://example.com).',
      '',
      '| Value | Description |',
      '| --- | --- |',
      '| Test | A repeated repeated value. |',
    ].join('\n')

    const result = await runRule(consecutiveDuplicateWords, { strings: { markdown } })
    const errors = result.markdown

    expect(errors).toHaveLength(6)
    expect(errors.map((error) => error.lineNumber)).toEqual([1, 3, 5, 7, 9, 13])
    expect(errors[3].errorRange).toEqual([17, 4])
    expect(errors[4].errorRange).toEqual([7, 4])
  })

  test('reports every duplicate pair on the same line', async () => {
    const markdown = 'This is is wrong, and that that is also wrong.'

    const result = await runRule(consecutiveDuplicateWords, { strings: { markdown } })
    const errors = result.markdown

    expect(errors).toHaveLength(2)
    expect(errors.map((error) => error.errorRange)).toEqual([
      [9, 2],
      [28, 4],
    ])
  })

  test('reports accurate ranges after encoded text and tabs', async () => {
    const markdown = ['An &amp; repeated repeated phrase.', 'This is\tis wrong.'].join('\n')

    const result = await runRule(consecutiveDuplicateWords, { strings: { markdown } })
    const errors = result.markdown

    expect(errors).toHaveLength(2)
    expect(errors.map((error) => error.errorRange)).toEqual([
      [19, 8],
      [9, 2],
    ])
  })

  test('reports sentence-like prose in text fences', async () => {
    const markdown = [
      '```text',
      'Currently, the option is used to to pass a token.',
      '',
      'view View sub-issues',
      '```',
    ].join('\n')

    const result = await runRule(consecutiveDuplicateWords, { strings: { markdown } })
    const errors = result.markdown

    expect(errors).toHaveLength(1)
    expect(errors[0].lineNumber).toBe(2)
    expect(errors[0].errorRange).toEqual([34, 2])
  })

  test('ignores code, placeholders, operators, punctuation, and hyphenated words', async () => {
    const markdown = [
      'This is very, very important.',
      'Follow the how-to to complete the setup.',
      'Use logical OR or logical AND.',
      'Replace hostname HOSTNAME in the command.',
      'Click **Delete Tag TAG NAME**.',
      'The API API pair is intentionally tested separately.',
      '`use use` is an inline code example.',
      '',
      '```shell',
      'python -m venv venv',
      '```',
      '',
      '<a class="btn btn-primary">Button</a>',
    ].join('\n')

    const result = await runRule(consecutiveDuplicateWords, { strings: { markdown } })
    const errors = result.markdown

    expect(errors).toHaveLength(1)
    expect(errors[0].errorDetail).toBe('Check whether the repeated word "API" is intentional.')
    expect(errors[0].lineNumber).toBe(6)
  })

  test('respects Markdownlint suppression comments', async () => {
    const markdown = [
      '<!-- markdownlint-disable-next-line GHD068 -->',
      'The words had had a deliberate meaning.',
      'This is is still an error.',
    ].join('\n')

    const result = await runRule(consecutiveDuplicateWords, { strings: { markdown } })
    const errors = result.markdown

    expect(errors).toHaveLength(1)
    expect(errors[0].lineNumber).toBe(3)
  })
})
