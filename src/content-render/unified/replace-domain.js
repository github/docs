/**
 * This makes it so that the `github.com` or `HOSTNAME` in a code snippet
 * becomes replacable.
 */

import { visit } from 'unist-util-visit'

// Don't use `g` on these regexes
const VALID_REPLACEMENTS = [[/\bHOSTNAME\b/, 'HOSTNAME']]

const CODE_FENCE_KEYWORD = 'replacedomain'

const matcher = (node) => {
  return (
    node.type === 'element' &&
    node.tagName === 'pre' &&
    node.children[0]?.data?.meta[CODE_FENCE_KEYWORD]
  )
}

export default function alerts() {
  return (tree) => {
    visit(tree, matcher, (node) => {
      const code = node.children[0].children[0].value
      for (const [regex, replacement] of VALID_REPLACEMENTS) {
        if (regex.test(code)) {
          const codeTag = node.children[0]
          const replacements = codeTag.properties['data-replacedomain'] || []
          if (!replacements.includes(replacement)) {
            replacements.push(replacement)
            codeTag.properties['data-replacedomain'] = replacements
          }
        }
      }
    })
  }
}
