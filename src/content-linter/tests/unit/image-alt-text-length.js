import { jest } from '@jest/globals'

import { runRule } from '../../lib/init-test.js'
import { incorrectAltTextLength } from '../../lib/linting-rules/image-alt-text-length.js'

jest.setTimeout(60 * 1000)

describe(incorrectAltTextLength.names.join(' - '), () => {
  test('image with incorrect alt text length fails', async () => {
    const markdown = [
      '![012345678901234567890123456789012345678](./image.png)',
      '![0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567891](./image.png)',
    ].join('\n')
    const result = await runRule(incorrectAltTextLength, { markdown })
    const errors = result.markdown
    expect(errors.length).toBe(2)
    expect(errors[0].lineNumber).toBe(1)
    expect(errors[1].lineNumber).toBe(2)
    expect(errors[0].errorRange).toEqual([3, 39])
    expect(errors[1].errorRange).toEqual([3, 151])
  })
  test('image with correct lenght alt test passes', async () => {
    const markdown = [
      '![0123456789012345678901234567890123456789](./image.png)',
      '![012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789](./image.png)',
    ].join('\n')
    const result = await runRule(incorrectAltTextLength, { markdown })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })
})
