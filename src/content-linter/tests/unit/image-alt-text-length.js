import { jest } from '@jest/globals'

import { runRule } from '../../lib/init-test.js'
import { incorrectAltTextLength } from '../../lib/linting-rules/image-alt-text-length.js'

jest.setTimeout(60 * 1000)

const fixtureFile = 'src/content-linter/tests/fixtures/image-alt-text-length.md'
const result = await runRule(incorrectAltTextLength, fixtureFile)
const errors = result[fixtureFile]

describe(incorrectAltTextLength.names.join(' - '), () => {
  test('image with correct length alt text', () => {
    expect(Object.keys(result).length).toBe(1)
    expect(errors.length).toBe(2)
    expect(errors.map((error) => error.lineNumber)).toEqual([1, 7])
  })
})
