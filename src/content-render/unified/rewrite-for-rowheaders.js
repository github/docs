import { visitParents } from 'unist-util-visit-parents'

/**
 * Where it can mutate the AST to swap from:
 *
 *   <div class="rowheaders">
 *
 *     ...
 *     <tbody>
 *       <tr>
 *         <td>...</td>
 *         <td>...</td>
 *     ...
 *
 *   </div>
 *
 * to:
 *
 *
 *   <div class="rowheaders">
 *
 *     ...
 *     <tbody>
 *       <tr>
 *         <td scope="row">...</td>
 *         <td>...</td>
 *     ...
 *
 *   </div>
 *
 * In other words, if contained in a `.rowheaders`, the *first* `<td>`
 * in a `<tr>` should have `scope="row"`.
 *
 * */

function matcher(node) {
  return node.type === 'element' && node.tagName === 'td' && !('scope' in node.properties)
}

function insideRowheaders(ancestors) {
  return ancestors.some(
    (node) =>
      node.properties &&
      node.properties.className &&
      node.properties.className.includes('rowheaders'),
  )
}

function visitor(node, ancestors) {
  if (insideRowheaders(ancestors)) {
    const tr = ancestors.at(-1)
    if (!tr._scoped) {
      tr._scoped = true
      node.properties.scope = 'row'
      node.tagName = 'th'
    }
  }
}

export default function rewriteForRowheaders() {
  return (tree) => visitParents(tree, matcher, visitor)
}
