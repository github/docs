import { visitParents } from 'unist-util-visit-parents'

interface ElementNode {
  type: 'element'
  tagName: string
  properties: {
    // Properties can have any value type (strings, booleans, arrays, etc.)
    [key: string]: any
  }
  _scoped?: boolean
}

interface AncestorNode {
  properties?: {
    className?: string[]
  }
}

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

function matcher(node: any): node is ElementNode {
  return node.type === 'element' && node.tagName === 'td' && !('scope' in node.properties)
}

function insideRowheaders(ancestors: AncestorNode[]): boolean {
  return ancestors.some(
    (node: AncestorNode) =>
      node.properties &&
      node.properties.className &&
      node.properties.className.includes('rowheaders'),
  )
}

// ancestors is an array of hast nodes without proper TypeScript definitions
function visitor(node: ElementNode, ancestors: any[]): void {
  if (insideRowheaders(ancestors)) {
    const tr = ancestors.at(-1) as ElementNode
    if (!tr._scoped) {
      tr._scoped = true
      node.properties.scope = 'row'
      node.tagName = 'th'
    }
  }
}

// tree is a hast root node without proper TypeScript definitions
export default function rewriteForRowheaders() {
  return (tree: any) => visitParents(tree, matcher, visitor)
}
