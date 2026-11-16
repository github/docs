import { visit, SKIP } from 'unist-util-visit'
import type { Element, Root } from 'hast'

// Unified preserves invalid Markdown table rows whose cells are all empty.
// Remove them so malformed content does not render blank rows.
// <tr><td></td><td></td></tr> becomes no row.

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
