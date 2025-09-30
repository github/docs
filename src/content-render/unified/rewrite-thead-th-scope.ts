import { visitParents } from 'unist-util-visit-parents'
import type { Root } from 'hast'
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

function matcher(node: any): boolean {
  // Using any type due to complex type conflicts between different versions of
  // @types/hast and @types/unist used by various dependencies. The node should be
  // an Element with tagName 'th' and no existing 'scope' property.
  return node.type === 'element' && node.tagName === 'th' && !('scope' in node.properties)
}

function visitor(node: any, ancestors: any[]): void {
  // Using any type for the same reason as matcher - complex type conflicts between
  // hast/unist type definitions across different package versions
  const parent = ancestors.at(-1)
  if (parent && parent.tagName === 'tr') {
    const grandParent = ancestors.at(-2)
    if (grandParent && grandParent.tagName === 'thead') {
      node.properties.scope = 'col'
    }
  }
}

export default function rewriteTheadThScope(): Transformer<Root> {
  return (tree: Root) => visitParents(tree, matcher, visitor)
}
