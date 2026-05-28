import { addError } from 'markdownlint-rule-helpers'
import type { RuleParams, RuleErrorCallback } from '@/content-linter/types'

import { getFrontmatter } from '../helpers/utils'
import { docsTeamMetricsEnum } from '@/frame/lib/frontmatter'

// Paths (directory or filename substrings) excluded from this rule.
const EXCLUDED_PATHS: string[] = []

export const frontmatterDocsTeamMetrics = {
  names: ['GHD066', 'frontmatter-docs-team-metrics'],
  description:
    'Articles whose path contains a docsTeamMetrics value must include that value in their docsTeamMetrics frontmatter property.',
  tags: ['frontmatter', 'docs-team-metrics'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    const fm = getFrontmatter(params.lines)
    if (!fm) return

    const filePath = params.name

    if (EXCLUDED_PATHS.some((exc) => filePath.includes(exc))) return

    // Determine which docsTeamMetrics values match this file's path.
    const expectedValues = docsTeamMetricsEnum.filter((value) => filePath.includes(value))
    if (expectedValues.length === 0) return

    const currentValues: string[] = Array.isArray(fm.docsTeamMetrics) ? fm.docsTeamMetrics : []

    const missingValues = expectedValues.filter((v) => !currentValues.includes(v))
    if (missingValues.length === 0) return

    // Report on the first line of frontmatter (the opening ---)
    addError(
      onError,
      1,
      `Missing docsTeamMetrics: [${missingValues.join(', ')}]. Add it to frontmatter, or add the file path to EXCLUDED_PATHS in src/content-linter/lib/linting-rules/frontmatter-docs-team-metrics.ts.`,
      undefined,
      undefined,
      null,
    )
  },
}
