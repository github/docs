import { describe, expect, test } from 'vitest'

import { runRule } from '@/content-linter/lib/init-test'
import { hardcodedDataVariable } from '@/content-linter/lib/linting-rules/hardcoded-data-variable'

describe(hardcodedDataVariable.names.join(' - '), () => {
  test('Using hardcoded personal access token string causes error', async (): Promise<void> => {
    const markdown: string = [
      'Hello personal access token for apps.',
      'A Personal access token for apps.',
      'Lots of PERSONAL ACCESS TOKENS for apps.',
      'access tokens for apps.',
      'personal access token and a Personal Access Tokens',
    ].join('\n')
    const result = await runRule(hardcodedDataVariable, {
      strings: { markdown },
      files: undefined,
      ruleConfig: true,
    })
    const errors = result.markdown
    expect(errors.length).toBe(5)
    expect(errors[errors.length - 2].lineNumber).toBe(5)
    expect(errors[errors.length - 1].lineNumber).toBe(5)
  })
})
