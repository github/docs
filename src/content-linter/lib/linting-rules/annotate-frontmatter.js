import { addError, filterTokens } from 'markdownlint-rule-helpers'
import matter from 'gray-matter'

export const annotateFrontmatter = {
  names: ['GHD040', 'annotate-frontmatter'],
  description:
    'Annotations defined in Markdown must contain a specific layout frontmatter property.',
  tags: ['code', 'annotate'],
  information: new URL('https://github.com/github/docs/blob/main/src/content-linter/README.md'),
  function: function GHD040(params, onError) {
    filterTokens(params, 'fence', (token) => {
      if (!token.info.includes('annotate')) return
      const fm = matter(params.frontMatterLines.join('\n')).data
      if (fm.layout && fm.layout === 'inline') return

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
