import { visit, SKIP } from 'unist-util-visit'

/**
 * Where it can mutate the AST to swap from:
 *
 *   <table>
 *     <tr>
 *       <td>Someting</td>
 *       <td>...</td>
 *     </tr>
 *     <tr>
 *       <td></td>
 *       <td></td>
 *     </td>
 *     <tr>
 *       <td>Anything</td>
 *       <td>...</td>
 *     </tr>
 *
 *
 * to:
 *

 *   <table>
 *     <tr>
 *       <td>Someting</td>
 *       <td>...</td>
 *     </tr>
 *     <tr>
 *       <td>Anything</td>
 *       <td>...</td>
 *     </tr>
 *
 * Essentially, it looks for `<tr>` rows where all children are `<td>`
 * and have no children of their own.
 *
 * If the Markdown is this:
 *
 *     | Header 1 | Header 2 | Header 3 |
 *     | --- | --- | --- |
 *     | |
 *     | Foo | Bar | Buzz |
 *     | Fun | Pun | Bun |
 *
 * ...then Unified will give us a tree that contains a row with 3 cells,
 * and their `.children` properties will all be `[]`.
 *
 * Note that the above Markdown is invalid, because the number of columns
 * isn't the same all the way down. But Unified will still parse it.
 * */

// node is a hast element node without proper TypeScript definitions
function matcher(node: any): boolean {
  return node.type === 'element' && node.tagName === 'tr'
}

// node, parent, and grandChild are hast element nodes without proper TypeScript definitions
function visitor(
  node: any,
  index: number | undefined,
  parent: any,
): [typeof SKIP, number] | undefined {
  if (
    node.children.every(
      (grandChild: any) =>
        grandChild.type === 'element' && grandChild.tagName === 'td' && !grandChild.children.length,
    )
  ) {
    if (index !== undefined) {
      parent.children.splice(index, 1)
      return [SKIP, index]
    }
  }
}

// tree is a hast root node without proper TypeScript definitions
export default function rewriteEmptyTableRows() {
  return (tree: any) => visit(tree, matcher, visitor)
}
