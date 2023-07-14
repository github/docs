import { jest } from '@jest/globals'

import { runRule } from '../../lib/init-test.js'
import { codeFenceLineLength } from '../../lib/linting-rules/code-fence-line-length.js'

jest.setTimeout(60 * 1000)

const fixtureFilePath = 'src/content-linter/tests/fixtures/code-fence-line-length.md'
const result = await runRule(codeFenceLineLength, fixtureFilePath)
const errors = result[fixtureFilePath]

describe(codeFenceLineLength.names.join(' - '), () => {
  test('line length of max length + 1 fails', async () => {
    expect(errors.map((error) => error.lineNumber).includes(7)).toBe(true)
  })
  test('line length equals max length passes', async () => {
    expect(errors.map((error) => error.lineNumber).includes(15)).toBe(false)
  })
  test('line length less than max length passes', async () => {
    expect(errors.map((error) => error.lineNumber).includes(22)).toBe(false)
  })
  test('multiple lines in code block that exceed max length fail', async () => {
    expect(errors.map((error) => error.lineNumber).includes(28)).toBe(true)
    expect(errors.map((error) => error.lineNumber).includes(30)).toBe(true)
  })
  test('errors only occur on expected lines', async () => {
    expect(errors.length).toBe(3)
  })
})
