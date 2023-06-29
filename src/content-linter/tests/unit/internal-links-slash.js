import { jest } from '@jest/globals'
import markdownlint from 'markdownlint'

import { internalLinksSlash } from '../../lib/linting-rules/internal-links-slash.js'
import { testOptions } from '../../lib/default-markdownlint-options.js'

jest.setTimeout(60 * 1000)

const fixtureFile = 'src/content-linter/tests/fixtures/internal-links-slash.md'
const options = testOptions('MD113', internalLinksSlash, fixtureFile)
const result = await markdownlint.promises.markdownlint(options)

test('relative links start with /', () => {
  const errors = result[fixtureFile]
  expect(Object.keys(result).length).toBe(1)
  expect(errors.length).toBe(1)
  expect(errors.map((error) => error.lineNumber)).toEqual([5])
})
