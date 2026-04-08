import fs from 'fs'
import type { Element, Node } from 'hast'
import { visit } from 'unist-util-visit'

// Process-level cache for stat results — file sizes don't change between deploys.
const statCache = new Map<string, number | null>()

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

  const filePath = src.slice(1)

  // Check cache first — avoids repeated statSync for the same image
  if (statCache.has(filePath)) {
    const cachedSize = statCache.get(filePath)
    if (!cachedSize) return
    const split = src.split('/')
    split.splice(2, 0, `cb-${cachedSize}`)
    return split.join('/')
  }

  try {
    const stats = fs.statSync(filePath)
    statCache.set(filePath, stats.size || null)
    if (!stats.size) return
    const hash = `${stats.size}`
    const split = src.split('/')
    split.splice(2, 0, `cb-${hash}`)
    return split.join('/')
  } catch {
    statCache.set(filePath, null)
    console.warn(
      `Failed to get a hash for ${src} ` +
        '(This is mostly harmless and can happen with outdated translations).',
    )
  }
}
