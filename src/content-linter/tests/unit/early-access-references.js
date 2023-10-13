import { runRule } from '../../lib/init-test.js'
import {
  earlyAccessReferences,
  frontmatterEarlyAccessReferences,
} from '../../lib/linting-rules/early-access-references.js'

const FIXTURE_FILEPATH_NON_EA = 'src/content-linter/tests/fixtures/not-secret.md'
const FIXTURE_FILEPATH_EA = 'src/content-linter/tests/fixtures/early-access/secret.md'
const fmOptions = { markdownlintOptions: { frontMatter: null } }

describe(earlyAccessReferences.names.join(' - '), () => {
  test('non-early access file with early access references fails', async () => {
    const result = await runRule(earlyAccessReferences, { files: [FIXTURE_FILEPATH_NON_EA] })
    const errors = result[FIXTURE_FILEPATH_NON_EA]
    expect(errors.length).toBe(8)
    const lineNumbers = errors.map((error) => error.lineNumber)
    expect(lineNumbers.includes(13)).toBe(true)
    expect(lineNumbers.includes(14)).toBe(false)
    expect(errors[0].errorRange).toEqual([1, 12])
  })
  test('early access file with early access references passes', async () => {
    const result = await runRule(earlyAccessReferences, { files: [FIXTURE_FILEPATH_EA] })
    const errors = result[FIXTURE_FILEPATH_EA]
    expect(errors.length).toBe(0)
  })
})

describe(frontmatterEarlyAccessReferences.names.join(' - '), () => {
  test('non-early access file with early access references fails', async () => {
    const result = await runRule(frontmatterEarlyAccessReferences, {
      files: [FIXTURE_FILEPATH_NON_EA],
      ...fmOptions,
    })
    const errors = result[FIXTURE_FILEPATH_NON_EA]
    expect(errors.length).toBe(3)
    const lineNumbers = errors.map((error) => error.lineNumber)
    expect(lineNumbers.includes(2)).toBe(true)
    expect(lineNumbers.includes(3)).toBe(true)
    expect(lineNumbers.includes(4)).toBe(false)
    expect(lineNumbers.includes(5)).toBe(false)
    expect(errors[0].errorRange).toEqual([8, 12])
    expect(errors[1].errorRange).toEqual([15, 12], [28, 12])
  })
  test('early access file with early access references passes', async () => {
    const result = await runRule(frontmatterEarlyAccessReferences, {
      files: [FIXTURE_FILEPATH_EA],
      ...fmOptions,
    })
    const errors = result[FIXTURE_FILEPATH_EA]
    expect(errors.length).toBe(0)
  })
})
