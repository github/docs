import fs from 'fs'
import type { Element, Node } from 'hast'
import { visit } from 'unist-util-visit'

// Matches any <img> tags with an href that starts with `/assets/` or '/public/'
function isAssetOrPublicImg(node: Node): node is Element {
  return (
    node.type === 'element' &&
    (node as Element).tagName === 'img' &&
    !!(node as Element).properties &&
    !!(node as Element).properties?.src &&
    typeof (node as Element).properties?.src === 'string' &&
    (((node as Element).properties?.src as string).startsWith('/assets/') ||
      ((node as Element).properties?.src as string).startsWith('/public/'))
  )
}

// Content authors write images like `![Alt](/assets/images/foo.png`, but
// for caching purposes we want to rewrite those so they can be cached
// indefinitely.
export default function rewriteImgSources() {
  return (tree: Node) => {
    visit(tree, 'element', (node: Node) => {
      if (!isAssetOrPublicImg(node)) return

      const newSrc = getNewSrc(node)
      if (newSrc) {
        node.properties.src = newSrc
      }
    })
  }
}

function getNewSrc(node: Element): string | undefined {
  const src = node.properties?.src as string
  if (!src.startsWith('/')) return

  try {
    const filePath = src.slice(1)
    const stats = fs.statSync(filePath)
    // The size is not perfect but it's good enough. The size is
    // very fast to pick up without needing to do a deep hashing of the
    // image's content. It's perfectly possible that someone edits an
    // image and it's size doesn't change. Although very unlikely.
    // The slightest change to the image is more likely to either increase
    // or decrease the image size by at least 1 byte.
    // Also, because of this limitation, we're not confident to cache the
    // image more than say 24h. But in the unlikely event that someone does
    // edit an image and the size doesn't change, there's always the
    // escape hatch that you can soft-purge all manual CDN surrogate keys.
    if (!stats.size) return
    const hash = `${stats.size}`
    const split = src.split('/')
    split.splice(2, 0, `cb-${hash}`)
    return split.join('/')
  } catch {
    console.warn(
      `Failed to get a hash for ${src} ` +
        '(This is mostly harmless and can happen with outdated translations).',
    )
  }
}
