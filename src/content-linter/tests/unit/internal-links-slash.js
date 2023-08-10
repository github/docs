import { jest } from '@jest/globals'

import { runRule } from '../../lib/init-test.js'
import { internalLinksSlash } from '../../lib/linting-rules/internal-links-slash.js'

jest.setTimeout(60 * 1000)

const fixtureFile = 'src/content-linter/tests/fixtures/internal-links-slash.md'
const result = await runRule(internalLinksSlash, fixtureFile)
const errors = result[fixtureFile]

describe(internalLinksSlash.names.join(' - '), () => {
  test('relative links start with /', () => {
    expect(Object.keys(result).length).toBe(1)
    expect(errors.length).toBe(1)
    expect(errors.map((error) => error.lineNumber)).toEqual([5])
  })
})
