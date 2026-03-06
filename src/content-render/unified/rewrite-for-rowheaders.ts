import { visitParents } from 'unist-util-visit-parents'
import type { Element, Root } from 'hast'

interface ScopedElement extends Element {
  _scoped?: boolean
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

export default function rewriteForRowheaders() {
  return (tree: Root) =>
    visitParents(tree, 'element', (node, ancestors) => {
      const el = node as Element
      if (el.tagName !== 'td' || 'scope' in el.properties) return

      const insideRowheaders = ancestors.some((ancestor) => {
        const ancestorEl = ancestor as Partial<Element>
        return (
          ancestorEl.properties &&
          Array.isArray(ancestorEl.properties.className) &&
          ancestorEl.properties.className.includes('rowheaders')
        )
      })

      if (insideRowheaders) {
        const tr = ancestors.at(-1) as ScopedElement
        if (!tr._scoped) {
          tr._scoped = true
          el.properties.scope = 'row'
          el.tagName = 'th'
        }
      }
    })
}
