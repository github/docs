import { visitParents } from 'unist-util-visit-parents'
import type { Root, Element } from 'hast'
import type { Transformer } from 'unified'

// Header cells in table heads need column scope for screen reader navigation.
// <thead><tr><th>Name</th></tr></thead> becomes:
// <thead><tr><th scope="col">Name</th></tr></thead>.

export default function rewriteTheadThScope(): Transformer<Root> {
  return (tree: Root) =>
    visitParents(tree, 'element', (node, ancestors) => {
      const el = node as Element
      if (el.tagName !== 'th' || 'scope' in el.properties) return
      const parent = ancestors.at(-1) as Element | undefined
      if (parent && parent.tagName === 'tr') {
        const grandParent = ancestors.at(-2) as Element | undefined
        if (grandParent && grandParent.tagName === 'thead') {
          el.properties.scope = 'col'
        }
      }
    })
}
