import { expect, jest } from '@jest/globals'

import { runRule } from '../../lib/init-test.js'
import { earlyAccessReferences } from '../../lib/linting-rules/early-access-references.js'

const FIXTURE_FILEPATH_NON_EA = 'src/content-linter/tests/fixutres/not-secret.md'
const FIXTURE_FILEPATH_EA = 'src/content-linter/tests/fixutres/early-access/secret.md'
jest.setTimeout(20 * 1000)

describe(earlyAccessReferences.names.join(' - '), () => {
  test('non-early access file with early access references fails', async () => {
    const result = await runRule(earlyAccessReferences, { files: [FIXTURE_FILEPATH_NON_EA] })
    const errors = result[FIXTURE_FILEPATH_NON_EA]
    expect(errors.length).toBe(10)
    // Frontmatter errors won't have an accurate line number
    // and will have "Frontmatter: " prepended to the errorDetail message
    const markdownErrors = errors.filter((error) => !error.errorDetail.startsWith('Frontmatter:'))
    const lineNumbers = markdownErrors.map((error) => error.lineNumber)
    expect(lineNumbers.includes(13)).toBe(true)
    expect(lineNumbers.includes(14)).toBe(false)
    expect(markdownErrors[0].errorRange).toEqual([1, 12])
    expect(markdownErrors[1].errorRange).toEqual([16, 12])
  })
  test('early access file with early access references passes', async () => {
    const result = await runRule(earlyAccessReferences, { files: [FIXTURE_FILEPATH_EA] })
    const errors = result[FIXTURE_FILEPATH_EA]
    expect(errors.length).toBe(0)
  })
})
