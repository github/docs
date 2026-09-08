import { describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test'
import { frontmatterDocsTeamMetrics } from '../../lib/linting-rules/frontmatter-docs-team-metrics'

const fmOptions = { markdownlintOptions: { frontMatter: null } }

const MISSING = {
  'content/copilot/how-tos/copilot-cli/article.md':
    '---\ntitle: Test\nversions:\n  feature: copilot\n---\n',
}
const HAS = {
  'content/copilot/how-tos/copilot-cli/article.md':
    '---\ntitle: Test\nversions:\n  feature: copilot\ndocsTeamMetrics:\n  - copilot-cli\n---\n',
}
const NO_MATCH = {
  'content/copilot/how-tos/other/article.md':
    '---\ntitle: Test\nversions:\n  feature: copilot\n---\n',
}

describe(frontmatterDocsTeamMetrics.names.join(' - '), () => {
  test('file in copilot-cli path without docsTeamMetrics fails', async () => {
    const result = await runRule(frontmatterDocsTeamMetrics, { strings: MISSING, ...fmOptions })
    const errors = result[Object.keys(MISSING)[0]]
    expect(errors.length).toBe(1)
    expect(errors[0].ruleNames).toContain('GHD066')
  })

  test('file in copilot-cli path with correct docsTeamMetrics passes', async () => {
    const result = await runRule(frontmatterDocsTeamMetrics, { strings: HAS, ...fmOptions })
    const errors = result[Object.keys(HAS)[0]]
    expect(errors.length).toBe(0)
  })

  test('file not in a matching path is skipped', async () => {
    const result = await runRule(frontmatterDocsTeamMetrics, { strings: NO_MATCH, ...fmOptions })
    const errors = result[Object.keys(NO_MATCH)[0]]
    expect(errors.length).toBe(0)
  })
})
