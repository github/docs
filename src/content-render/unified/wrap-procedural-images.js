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

function matcher(node) {
  return node.type === 'element' && node.tagName === 'img'
}

function insideOlLi(ancestors) {
  const li = ancestors.findIndex((node) => node.tagName === 'li')
  if (li > -1) {
    const ol = ancestors.slice(0, li).findIndex((node) => node.tagName === 'ol')
    return ol > -1
  }
  return false
}

function visitor(node, ancestors) {
  if (insideOlLi(ancestors)) {
    const shallowClone = Object.assign({}, node)
    shallowClone.tagName = 'div'
    shallowClone.properties = { class: 'procedural-image-wrapper' }
    shallowClone.children = [node]
    const parent = ancestors.at(-1)
    parent.children = parent.children.map((child) => {
      if (child.tagName === 'img') {
        return shallowClone
      }
      return child
    })
  }
}

export default function wrapProceduralImages() {
  return (tree) => visitParents(tree, matcher, visitor)
}
