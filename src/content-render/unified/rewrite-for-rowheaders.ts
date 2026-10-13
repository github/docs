import { visitParents } from 'unist-util-visit-parents'
import type { Element, Root } from 'hast'

interface ScopedElement extends Element {
  _scoped?: boolean
}

// In .rowheaders tables, the first cell acts as a row-scoped header for accessibility.
// <div class="rowheaders"><tr><td>Plan</td></tr></div> becomes:
// <div class="rowheaders"><tr><th scope="row">Plan</th></tr></div>.

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
