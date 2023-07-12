import { jest } from '@jest/globals'

import { runRule } from '../../lib/init-test.js'
import { internalLinksLang } from '../../lib/linting-rules/internal-links-lang.js'

jest.setTimeout(30 * 1000)
const fixtureFilePath = 'src/content-linter/tests/fixtures/internal-links-lang.md'
const result = await runRule(internalLinksLang, fixtureFilePath)
const errors = result[fixtureFilePath]

describe(internalLinksLang.names.join(' - '), () => {
  test('internal links and hardcoded language codes', () => {
    expect(Object.keys(result).length).toBe(1)
    expect(errors.length).toBe(3)
    expect(errors.map((error) => error.lineNumber)).toEqual([3, 4, 8])
  })
})
