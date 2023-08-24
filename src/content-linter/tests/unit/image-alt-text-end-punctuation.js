import { jest } from '@jest/globals'

import { runRule } from '../../lib/init-test.js'
import { imageAltTextEndPunctuation } from '../../lib/linting-rules/image-alt-text-end-punctuation.js'

jest.setTimeout(60 * 1000)

const fixtureFile = 'src/content-linter/tests/fixtures/image-alt-text-end-punctuation.md'
const result = await runRule(imageAltTextEndPunctuation, fixtureFile)
const errors = result[fixtureFile]

describe(imageAltTextEndPunctuation.names.join(' - '), () => {
  test('image alt text must have an end punctuation', () => {
    expect(Object.keys(result).length).toBe(1)
    expect(errors.length).toBe(2)
    expect(errors.map((error) => error.lineNumber)).toEqual([3, 15])
  })
})
