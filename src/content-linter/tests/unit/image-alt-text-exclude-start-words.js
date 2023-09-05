import { jest } from '@jest/globals'

import { runRule } from '../../lib/init-test.js'
import { imageAltTextExcludeStartWords } from '../../lib/linting-rules/image-alt-text-exclude-start-words.js'

jest.setTimeout(60 * 1000)

const fixtureFile = 'src/content-linter/tests/fixtures/image-alt-text-exclude-start-words.md'
const result = await runRule(imageAltTextExcludeStartWords, fixtureFile)
const errors = result[fixtureFile]

describe(imageAltTextExcludeStartWords.names.join(' - '), () => {
  test('image alt text does not start with exclude words', () => {
    expect(Object.keys(result).length).toBe(1)
    expect(errors.length).toBe(4)
    expect(errors.map((error) => error.lineNumber)).toEqual([2, 3, 4, 5])
  })
})
