import { jest } from '@jest/globals'

import { runRule } from '../../lib/init-test.js'
import { imageFileKebab } from '../../lib/linting-rules/image-file-kebab'

jest.setTimeout(20 * 1000)

const fixtureFile = 'src/content-linter/tests/fixtures/image-file-kebab.md'
const result = await runRule(imageFileKebab, fixtureFile)
const errors = result[fixtureFile]

describe(imageFileKebab.names.join(' - '), () => {
  test('image file with lowercase kebab case', () => {
    expect(Object.keys(result).length).toBe(1)
    expect(errors.length).toBe(4)
    expect(errors.map((error) => error.lineNumber)).toEqual([4, 5, 6, 7])
  })
})
