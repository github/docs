import { addError } from 'markdownlint-rule-helpers'

import { getFrontmatter } from '../helpers/utils.js'

export const frontmatterHiddenDocs = {
  names: ['GHD010', 'frontmatter-hidden-docs'],
  description:
    'Articles with frontmatter property `hidden` can only be located in specific products',
  tags: ['frontmatter', 'feature', 'early-access'],
  function: (params, onError) => {
    const fm = getFrontmatter(params.lines)
    if (!fm || !fm.hidden) return

    // If the article has an experimental alternative, it's allowed to be hidden
    if (fm.hasExperimentalAlternative) return

    // Hidden docs can be located in these content directories:
    const allowedProductPaths = [
      'content/early-access',
      'content/site-policy',
      'content/search',
      'content/video-transcripts',
    ]

    if (allowedProductPaths.some((allowedPath) => params.name.includes(allowedPath))) return

    const hiddenLine = params.lines.find((line) => line.startsWith('hidden:'))
    const lineNumber = params.lines.indexOf(hiddenLine) + 1

    addError(
      onError,
      lineNumber,
      `The 'hidden' frontmatter property is only allowed in these directories: ${allowedProductPaths.join(
        ', ',
      )}`,
      hiddenLine,
      [1, hiddenLine.length], // No range applicable
      null, // No fix possible
    )
  },
}
