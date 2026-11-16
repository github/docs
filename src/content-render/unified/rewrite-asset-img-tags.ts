import type { Element, Node } from 'hast'
import { visit, SKIP } from 'unist-util-visit'
import { IMAGE_DENSITY } from '../../assets/lib/image-density'

// Dynamic asset URLs accept this width, and end-to-end tests assert it by import.
export const MAX_WIDTH = 1440

const DEFAULT_IMAGE_DENSITY = '2x'

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

// PNG assets get a picture wrapper so browsers can prefer the generated WebP source.
// <img src="/assets/cb-1234/images/help.png" alt="Help"> becomes a picture with:
// <source srcset="/assets/cb-1234/mw-1440/images/help.webp 2x" type="image/webp">
// <img src="/assets/cb-1234/images/help.png" alt="Help">
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

        // Stop before visiting the cloned PNG child and recursing forever.
        return SKIP
      }
    })
  }
}

// dynamic-assets.ts reads the mw- segment between the cache-buster and image path.
// /assets/cb-1234/images/help.png becomes /assets/cb-1234/mw-1440/images/help.png.
function injectMaxWidth(pathname: string, maxWidth: number): string {
  const split = pathname.split('/')
  const inject = `mw-${maxWidth}`
  if (split.includes(inject)) {
    throw new Error(`pathname already includes '${inject}'`)
  }
  split.splice(3, 0, inject)
  return split.join('/')
}
