import type { Element, Node } from 'hast'
import { visit, SKIP } from 'unist-util-visit'
import { IMAGE_DENSITY } from '../../assets/lib/image-density'

// This number must match a width we're willing to accept in a dynamic
// asset URL.
// (note this is exported for the sake of end-to-end tests' assertions)
export const MAX_WIDTH = 1440

const DEFAULT_IMAGE_DENSITY = '2x'

// Matches any <img> tags with an href that starts with `/assets/`
function isAssetImg(node: Node): node is Element {
  return (
    node.type === 'element' &&
    (node as Element).tagName === 'img' &&
    !!(node as Element).properties &&
    !!(node as Element).properties?.src &&
    typeof (node as Element).properties?.src === 'string' &&
    ((node as Element).properties?.src as string).startsWith('/assets/')
  )
}

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
  return (tree: Node) => {
    visit(tree, 'element', (node: Node) => {
      if (!isAssetImg(node)) return

      const src = node.properties?.src as string
      if (src.endsWith('.png')) {
        const copyPNG = structuredClone(node)

        const originalSrc = src
        const originalSrcWithoutCb = originalSrc.replace(/cb-\w+\//, '')
        const webpSrc = injectMaxWidth(src.replace(/\.png$/, '.webp'), MAX_WIDTH)
        const srcset = `${webpSrc} ${IMAGE_DENSITY[originalSrcWithoutCb] || DEFAULT_IMAGE_DENSITY}`

        const sourceWEBP: Element = {
          type: 'element',
          tagName: 'source',
          properties: {
            srcset,
            type: 'image/webp',
          },
          children: [],
        }

        node.children = node.children || []
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
function injectMaxWidth(pathname: string, maxWidth: number): string {
  const split = pathname.split('/')
  // This prefix needs to match what's possibly expected in dynamic-assets.js
  const inject = `mw-${maxWidth}`
  if (split.includes(inject)) {
    throw new Error(`pathname already includes '${inject}'`)
  }
  split.splice(3, 0, inject)
  return split.join('/')
}
