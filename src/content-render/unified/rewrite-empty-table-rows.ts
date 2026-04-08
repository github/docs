import { visit, SKIP } from 'unist-util-visit'
import type { Element, Root } from 'hast'

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

export default function rewriteEmptyTableRows() {
  return (tree: Root) =>
    visit(tree, 'element', (node, index, parent) => {
      const el = node as Element
      if (el.tagName !== 'tr') return
      if (
        el.children.every(
          (grandChild) =>
            grandChild.type === 'element' &&
            grandChild.tagName === 'td' &&
            !grandChild.children.length,
        )
      ) {
        if (index !== undefined && parent) {
          parent.children.splice(index, 1)
          return [SKIP, index] as const
        }
      }
    })
}
