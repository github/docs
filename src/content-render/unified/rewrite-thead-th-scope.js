import { visitParents } from 'unist-util-visit-parents'

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

function matcher(node) {
  return node.type === 'element' && node.tagName === 'th' && !('scope' in node.properties)
}

function visitor(node, ancestors) {
  const parent = ancestors.at(-1)
  if (parent && parent.tagName === 'tr') {
    const grandParent = ancestors.at(-2)
    if (grandParent && grandParent.tagName === 'thead') {
      node.properties.scope = 'col'
    }
  }
}

export default function rewriteTheadThScope() {
  return (tree) => visitParents(tree, matcher, visitor)
}
