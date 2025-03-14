import { describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test.js'
import { githubOwnedActionReferences } from '../../lib/linting-rules/github-owned-action-references.js'

describe(githubOwnedActionReferences.names.join(' - '), () => {
  test('Using hardcoded GitHub-owned actions causes error', async () => {
    const markdown = [
      'Hello actions/checkout@v2 apps.',
      'A actions/delete-package-versions@v2 for apps.',
      'Hello actions/download-artifact@v2.',
      'actions/cache@432433423423',
      'actions/cache@',
      '[link title](/actions/cache)',
    ].join('\n')
    const result = await runRule(githubOwnedActionReferences, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(3)
  })
})
