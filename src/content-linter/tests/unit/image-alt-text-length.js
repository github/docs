import { jest } from '@jest/globals'
import markdownlint from 'markdownlint'

import { incorrectAltTextLength } from '../../lib/linting-rules/image-alt-text-length.js'
import { testOptions } from '../../lib/default-markdownlint-options.js'

const fixtureFile = 'src/content-linter/tests/fixtures/image-alt-text-length.md'

describe('image alt text length rule', () => {
  jest.setTimeout(60 * 1000)
  const options = testOptions('MD111', incorrectAltTextLength, fixtureFile)

  const result = markdownlint.sync(options)
  test('image with correct length alt text', () => {
    const errors = result[fixtureFile]
    expect(Object.keys(result).length).toBe(1)
    expect(errors.length).toBe(2)
    expect(errors.map((error) => error.lineNumber)).toEqual([1, 7])
  })
})
