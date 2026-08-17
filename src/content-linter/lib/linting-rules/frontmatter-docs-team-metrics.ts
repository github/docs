import { addError } from 'markdownlint-rule-helpers'
import type { RuleParams, RuleErrorCallback } from '@/content-linter/types'

import { getFrontmatter } from '../helpers/utils'

// docsTeamMetrics values that must appear in frontmatter whenever the file
// path contains the value as a substring. Add a value here only if it maps
// cleanly to a directory/path segment in content/. Values not listed here
// are not enforced by this rule.
const PATH_ENFORCED_METRICS: string[] = ['copilot-cli']

export const frontmatterDocsTeamMetrics = {
  names: ['GHD066', 'frontmatter-docs-team-metrics'],
  description:
    'Articles whose path contains a path-enforced docsTeamMetrics value must include that value in their docsTeamMetrics frontmatter property.',
  tags: ['frontmatter', 'docs-team-metrics'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    const fm = getFrontmatter(params.lines)
    if (!fm) return

    const filePath = params.name

    // Determine which path-enforced metrics values match this file's path.
    const expectedValues = PATH_ENFORCED_METRICS.filter((value) => filePath.includes(value))
    if (expectedValues.length === 0) return

    const currentValues: string[] = Array.isArray(fm.docsTeamMetrics) ? fm.docsTeamMetrics : []

    const missingValues = expectedValues.filter((v) => !currentValues.includes(v))
    if (missingValues.length === 0) return

    // Report on the first line of frontmatter (the opening ---)
    addError(
      onError,
      1,
      `Missing docsTeamMetrics: [${missingValues.join(', ')}]. Add it to frontmatter, or remove the value from PATH_ENFORCED_METRICS in src/content-linter/lib/linting-rules/frontmatter-docs-team-metrics.ts if it should no longer be enforced by file path.`,
      undefined,
      undefined,
      null,
    )
  },
}
