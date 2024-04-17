import { describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test.js'
import { imageAltTextEndPunctuation } from '../../lib/linting-rules/image-alt-text-end-punctuation.js'

describe(imageAltTextEndPunctuation.names.join(' - '), () => {
  test('image alt text without end punctuation errors', async () => {
    const markdown = [
      '# Heading',
      '',
      '![GitHub Documentation is here](./image.png)',
      '',
      '!["image"](./image.png)',
    ].join('\n')
    const result = await runRule(imageAltTextEndPunctuation, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(2)
    expect(errors.map((error) => error.lineNumber)).toEqual([3, 5])
    expect(errors[0].errorRange).toEqual([3, 28])
    expect(errors[1].errorRange).toEqual([3, 7])
    expect(errors[0].fixInfo).toEqual({
      lineNumber: 3,
      editColumn: 31,
      deleteCount: 0,
      insertText: '.',
    })
    expect(errors[1].fixInfo).toEqual({
      lineNumber: 5,
      editColumn: 9,
      deleteCount: 0,
      insertText: '.',
    })
  })
  test('image alt text with end punctuation passes', async () => {
    const markdown = [
      '# Heading',
      '',
      '![GitHub Documentation is found on this site.](./image.png)',
      '',
      "GitHub Documentation's logo looks like this: ![logo of GitHub Docs?](./image.png) over here.",
      '',
      '!["image".](./image.png)',
      '!["image!"](./image.png)',
      '!["image"!](./image.png)',
      '!["image?"](./image.png)',
      '!["image"?](./image.png)',
      '!["image."](./image.png)',
    ].join('\n')
    const result = await runRule(imageAltTextEndPunctuation, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })
  test('image alt text that is entirely empty', async () => {
    const markdown = [
      '# Heading',
      '',
      // Completely empty
      '![](/images/this-is-ok.png)',
    ].join('\n')
    const result = await runRule(imageAltTextEndPunctuation, { strings: { markdown } })
    const errors = result.markdown
    // This rule is not concerned with empty alt text
    // That will be caught by the incorrect-alt-text-length rule
    // So technically, it's not imageAltTextEndPunctuation's problem.
    expect(errors.length).toBe(0)
  })
})
