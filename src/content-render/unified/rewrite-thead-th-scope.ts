import { visitParents } from 'unist-util-visit-parents'
import type { Root, Element } from 'hast'
import type { Transformer } from 'unified'

/**
 * Where it can mutate the AST to swap from:
 *
 *   <thead>
 *     <tr>
 *       <th>...</th>
 *       <th>...</th>
 *
 * to:
 *   <thead>
 *     <tr>
 *       <th scope="col">...</th>
 *       <th scope="col">...</th>
 *
 * */

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
