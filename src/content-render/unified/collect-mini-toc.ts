import { visitParents } from 'unist-util-visit-parents'
import { toString } from 'hast-util-to-string'
import type { Plugin } from 'unified'
import type { Root, Element, ElementContent } from 'hast'
import type { CollectedHeading } from '@/frame/lib/get-mini-toc-items'

interface CollectMiniTocOptions {
  collectInto?: CollectedHeading[]
}

function hasClassName(el: Element, name: string): boolean {
  const cls = el.properties?.className
  if (Array.isArray(cls)) return cls.includes(name)
  if (typeof cls === 'string') return cls.split(/\s+/).includes(name)
  return false
}

function getClassString(el: Element): string {
  const cls = el.properties?.className
  if (Array.isArray(cls)) return cls.join(' ')
  if (typeof cls === 'string') return cls
  return ''
}

// Rehype plugin that collects heading data (href, title, level, platform)
// during rendering, so callers don't need to re-parse the HTML.
// Place this after heading-links in the processor chain.
const collectMiniToc: Plugin<[CollectMiniTocOptions], Root> = ({ collectInto }) => {
  if (!collectInto) return

  return (tree: Root) => {
    visitParents(tree, 'element', (node, ancestors) => {
      const el = node as Element
      if (!/^h[1-6]$/.test(el.tagName)) return
      if (!el.properties?.id) return

      // Skip headings inside hidden ancestors
      for (const anc of ancestors) {
        if (anc.type === 'element') {
          const ancEl = anc as Element
          if (ancEl.properties?.hidden === true) return
        }
      }

      const headingLevel = parseInt(el.tagName.charAt(1), 10)

      // Find the anchor child that heading-links.ts created
      const anchor = el.children.find(
        (child): child is Element =>
          child.type === 'element' && child.tagName === 'a' && hasClassName(child, 'heading-link'),
      )
      if (!anchor) return

      const href = anchor.properties?.href as string | undefined
      if (!href) return

      // Filter out direct-child <span> elements (and their content).
      // heading-links.ts always inserts the heading-link-symbol span as a
      // direct child of the anchor, so filtering direct children is sufficient.
      const textChildren = (anchor.children || []).filter(
        (child: ElementContent) =>
          !(child.type === 'element' && (child as Element).tagName === 'span'),
      )

      const title = textChildren.map((child) => toString(child)).join('')

      // Detect platform from ghd-tool ancestor
      let platform = ''
      for (const anc of ancestors) {
        if (anc.type === 'element' && hasClassName(anc as Element, 'ghd-tool')) {
          platform = getClassString(anc as Element)
          break
        }
      }

      collectInto.push({ href, title: title.trim(), headingLevel, platform })
    })
  }
}

export default collectMiniToc
