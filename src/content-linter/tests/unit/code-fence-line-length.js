import { describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test.js'
import { codeFenceLineLength } from '../../lib/linting-rules/code-fence-line-length.js'

describe(codeFenceLineLength.names.join(' - '), () => {
  test('line length of max + 1 fails', async () => {
    const markdown = [
      '```shell',
      '111',
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      'bbb',
      '```',
    ].join('\n')
    const result = await runRule(codeFenceLineLength, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(3)
    expect(errors[0].errorRange).toEqual([1, 61])
    expect(errors[0].fixInfo).toBeNull()
  })
  test('line length less than or equal to max length passes', async () => {
    const markdown = [
      '```javascript',
      '111',
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      '```',
    ].join('\n')
    const result = await runRule(codeFenceLineLength, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })
  test('multiple lines in code block that exceed max length fail', async () => {
    const markdown = [
      '```',
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccc',
      '1',
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb',
      '```',
    ].join('\n')
    const result = await runRule(codeFenceLineLength, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(2)
    expect(errors[0].lineNumber).toBe(2)
    expect(errors[1].lineNumber).toBe(4)
    expect(errors[0].errorRange).toEqual([1, 61])
    expect(errors[1].errorRange).toEqual([1, 61])
  })
})
