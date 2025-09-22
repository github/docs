// @ts-ignore - markdownlint-rule-helpers doesn't provide TypeScript declarations
import { addError, filterTokens } from 'markdownlint-rule-helpers'

import { getFrontmatter } from '@/content-linter/lib/helpers/utils'
import type { RuleParams, RuleErrorCallback, MarkdownToken } from '@/content-linter/types'

interface Frontmatter {
  layout?: string
  [key: string]: any
}

export const codeAnnotations = {
  names: ['GHD007', 'code-annotations'],
  description:
    'Code annotations defined in Markdown must contain a specific layout frontmatter property',
  tags: ['code', 'feature', 'annotate', 'frontmatter'],
  parser: 'markdownit' as const,
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    filterTokens(params, 'fence', (token: MarkdownToken) => {
      if (!token.info?.includes('annotate')) return
      const fm: Frontmatter | null = getFrontmatter(params.frontMatterLines)
      if (!fm || (fm.layout && fm.layout === 'inline')) return

      addError(
        onError,
        token.lineNumber,
        `When you include 'annotate' in a code fence, you must also include 'layout: inline' in the frontmatter.`,
        token.line,
        [1, token.line.length],
        null, // No fix possible
      )
    })
  },
}
