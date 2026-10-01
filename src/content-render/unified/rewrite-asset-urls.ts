import fs from 'fs'
import type { Element, Node } from 'hast'
import { visit } from 'unist-util-visit'
import { createLogger } from '@/observability/logger'

const logger = createLogger(import.meta.url)

// Process-level cache avoids repeated stat calls; asset files do not change while it runs.
const statCache = new Map<string, number | null>()

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

// Cache-busted asset and public image URLs support indefinite caching.
// /assets/images/help.png becomes /assets/cb-1234/images/help.png.
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

  // Reuse stat results to avoid repeated statSync calls for the same image.
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
    logger.warn('Failed to get a hash for asset URL', { src })
  }
}
