import type { Element, Node, Parent } from 'hast'
import { visitParents } from 'unist-util-visit-parents'

// Procedural list images get a wrapper so tight list items keep the expected spacing.
// <li><img src="step.png"></li> becomes:
// <li><div class="procedural-image-wrapper"><img src="step.png"></div></li>.

function isImgElement(node: Node): node is Element {
  return node.type === 'element' && (node as Element).tagName === 'img'
}

function insideOlLi(ancestors: Parent[]): boolean {
  const li = ancestors.findIndex((node) => (node as Element).tagName === 'li')
  if (li > -1) {
    const ol = ancestors.slice(0, li).findIndex((node) => (node as Element).tagName === 'ol')
    return ol > -1
  }
  return false
}

// When a writer leaves a blank line before a list image, Markdown wraps it in a paragraph.
// The visitor skips that branch because the paragraph already adds spacing, and div wrappers
// inside paragraphs cause hydration mismatches.
function visitor(node: Element, ancestors: Parent[]): void {
  if (!insideOlLi(ancestors)) return
  const parent = ancestors.at(-1)
  if (!parent || !parent.children) return

  if ((parent as Element).tagName === 'p') return

  const shallowClone: Element = Object.assign({}, node)
  shallowClone.tagName = 'div'
  shallowClone.properties = { class: 'procedural-image-wrapper' }
  shallowClone.children = [node]
  parent.children = parent.children.map((child) => {
    if (child.type === 'element' && (child as Element).tagName === 'img') {
      return shallowClone
    }
    return child
  })
}

export default function wrapProceduralImages() {
  return (tree: Node) =>
    visitParents(tree, 'element', (node: Node, ancestors: Parent[]) => {
      if (isImgElement(node)) {
        visitor(node, ancestors)
      }
    })
}
