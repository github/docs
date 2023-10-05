import { expect } from '@jest/globals'

import { runRule } from '../../lib/init-test.js'
import { frontmatterHiddenDocs } from '../../lib/linting-rules/frontmatter-hidden-docs.js'

const ACTIONS_FIXTURE = 'src/content-linter/tests/fixtures/actions/hidden.md'
const EARLY_ACCESS_FIXTURE = 'tests/fixtures/content/early-access/secrets/early-days.md'
const EXPERIMENTAL_FIXTURE = 'src/content-linter/tests/fixtures/actions/experimental.md'
const fmOptions = { markdownlintOptions: { frontMatter: null } }

describe(frontmatterHiddenDocs.names.join(' - '), () => {
  test('hidden file in actions directory fails', async () => {
    const result = await runRule(frontmatterHiddenDocs, { files: [ACTIONS_FIXTURE], ...fmOptions })
    const errors = result[ACTIONS_FIXTURE]
    expect(errors.length).toBe(1)
  })
  test('hidden file with hasExperimentalAlternative passes', async () => {
    const result = await runRule(frontmatterHiddenDocs, {
      files: [EXPERIMENTAL_FIXTURE],
      ...fmOptions,
    })
    const errors = result[EXPERIMENTAL_FIXTURE]
    expect(errors.length).toBe(0)
  })
  test('hidden file in early-access directory passes', async () => {
    const result = await runRule(frontmatterHiddenDocs, {
      files: [EARLY_ACCESS_FIXTURE],
      ...fmOptions,
    })
    const errors = result[EARLY_ACCESS_FIXTURE]
    expect(errors.length).toBe(0)
  })
})
