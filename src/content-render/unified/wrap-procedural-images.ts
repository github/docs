import type { Element, Node, Parent } from 'hast'
import { visitParents } from 'unist-util-visit-parents'

/**
 * Where it can mutate the AST to swap from:
 *
 *   <ol>
 *     <li>
 *       <img src="..." />
 *
 * to:
 *
 *   <ol>
 *     <li>
 *       <div class="procedural-image-wrapper">
 *         <img src="..." />
 *
 *
 * */

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

function visitor(node: Element, ancestors: Parent[]): void {
  if (!insideOlLi(ancestors)) return
  const parent = ancestors.at(-1)
  if (!parent || !parent.children) return

  // When the image is already inside a <p> (the writer left a blank line before
  // it), the paragraph already provides spacing. Wrapping a <div> inside that
  // <p> produces invalid HTML (`<div>` cannot be a descendant of `<p>`), which
  // the browser silently repairs for dangerouslySetInnerHTML but causes a React
  // hydration mismatch when the content is rendered as real elements. So only
  // add the wrapper for the no-<p> (tight list) case it was designed for.
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
