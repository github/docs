import { addError, filterTokens } from 'markdownlint-rule-helpers'
import { getFrontmatter } from '../helpers/utils.js'

export const annotateFrontmatter = {
  names: ['GHD007', 'annotate-frontmatter'],
  description:
    'Annotations defined in Markdown must contain a specific layout frontmatter property.',
  tags: ['code', 'annotate'],
  function: function GHD007(params, onError) {
    filterTokens(params, 'fence', (token) => {
      if (!token.info.includes('annotate')) return
      const fm = getFrontmatter(params.frontMatterLines)
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
