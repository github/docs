import { describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test.js'
import { hardcodedDataVariable } from '../../lib/linting-rules/hardcoded-data-variable.js'

describe(hardcodedDataVariable.names.join(' - '), () => {
  test('Using hardcoded personal access token string causes error', async () => {
    const markdown = [
      'Hello personal access token for apps.',
      'A Personal access token for apps.',
      'Lots of PERSONAL ACCESS TOKENS for apps.',
      'access tokens for apps.',
      'personal access token and a Personal Access Tokens',
    ].join('\n')
    const result = await runRule(hardcodedDataVariable, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(5)
    expect(errors[errors.length - 2].lineNumber).toBe(5)
    expect(errors[errors.length - 1].lineNumber).toBe(5)
  })
})
