import { visit, SKIP } from 'unist-util-visit'
import { IMAGE_DENSITY } from '../../assets/lib/image-density.js'

// This number must match a width we're willing to accept in a dynamic
// asset URL.
// (note this is exported for the sake of end-to-end tests' assertions)
export const MAX_WIDTH = 1440

const DEFAULT_IMAGE_DENSITY = '2x'

// Matches any <img> tags with an href that starts with `/assets/`
const matcher = (node) =>
  node.type === 'element' &&
  node.tagName === 'img' &&
  node.properties &&
  node.properties.src &&
  node.properties.src.startsWith('/assets/')

/**
 * Where it can mutate the AST to swap from:
 *
 *   <img src="/assets/help.png" alt="Alternative text">
 *
 * To:
 *
 *   <picture>
 *     <source srcset="/assets/help.web" format="image/webp">
 *     <img src="/assets/help.png" alt="Alternative text">
 *   </picture>
 *
 * */
export default function rewriteAssetImgTags() {
  return (tree) => {
    visit(tree, matcher, (node) => {
      if (node.properties.src.endsWith('.png')) {
        const copyPNG = structuredClone(node)

        const originalSrc = node.properties.src
        const originalSrcWithoutCb = originalSrc.replace(/cb-\w+\//, '')
        const webpSrc = injectMaxWidth(node.properties.src.replace(/\.png$/, '.webp'), MAX_WIDTH)
        const srcset = `${webpSrc} ${IMAGE_DENSITY[originalSrcWithoutCb] || DEFAULT_IMAGE_DENSITY}`

        const sourceWEBP = {
          type: 'element',
          tagName: 'source',
          properties: {
            srcset,
            type: 'image/webp',
          },
          children: [],
        }
        node.children.push(sourceWEBP)

        node.children.push(copyPNG)
        node.tagName = 'picture'
        delete node.properties.alt
        delete node.properties.src
        // Don't go further or else you end up in an infinite recursion
        return SKIP
      }
    })
  }
}

/**
 * Given a pathname, insert the `/_mw-DDDD/`.
 *
 * For example, if the pathname is `/assets/cb-1234/images/foo.png`
 * return `/assets/cb-1234/_mw-1440/images/foo.png`
 */
function injectMaxWidth(pathname, maxWidth) {
  const split = pathname.split('/')
  // This prefix needs to match what's possibly expected in dynamic-assets.js
  const inject = `mw-${maxWidth}`
  if (split.includes(inject)) {
    throw new Error(`pathname already includes '${inject}'`)
  }
  split.splice(3, 0, inject)
  return split.join('/')
}
