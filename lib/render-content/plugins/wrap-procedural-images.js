import { visitParents } from 'unist-util-visit-parents'

// This is the first file that uses Array.prototype.at, so we polyfill it here.
// It first appeared in Node 16.6 which is quite old now. But we have this
// code because at least two staff contributors were caught by this as
// they had old versions of Node.
// Node 16 has ends getting maintance fixes on 2023-09-11. By then
// we can't justify this hack anymore. But for now, it minimizes the
// friction for any contributor (staff or open source) that might not
// have made the upgrade yet.
if (!Array.prototype.at) {
  console.warn('POLYFILLING Array.prototype.at.')
  console.warn('Please consider upgrading your version of Node.')
  // eslint-disable-next-line no-extend-native
  Object.defineProperty(Array.prototype, 'at', {
    value: function (index) {
      // Convert the index to a positive integer
      const length = this.length >>> 0
      let relativeIndex = index >> 0

      // Handle negative indices
      if (relativeIndex < 0) {
        relativeIndex += length
      }

      // Check if the index is within the valid range
      if (relativeIndex >= 0 && relativeIndex < length) {
        return this[relativeIndex]
      }

      // Return undefined if the index is out of range
      return undefined
    },
    configurable: true,
    writable: true,
  })
}

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
 *       <span class="procedural-image-wrapper">
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
    shallowClone.tagName = 'span'
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
