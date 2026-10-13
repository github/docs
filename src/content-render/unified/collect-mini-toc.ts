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

// Collect heading href, title, level, and platform during rendering, so callers
// do not re-parse HTML. Run after heading-links so anchors exist.
const collectMiniToc: Plugin<[CollectMiniTocOptions], Root> = ({ collectInto }) => {
  if (!collectInto) return

  return (tree: Root) => {
    visitParents(tree, 'element', (node, ancestors) => {
      const el = node as Element
      if (!/^h[1-6]$/.test(el.tagName)) return
      if (!el.properties?.id) return

      // Hidden headings must not appear in the mini TOC.
      for (const anc of ancestors) {
        if (anc.type === 'element') {
          const ancEl = anc as Element
          if (ancEl.properties?.hidden === true) return
        }
      }

      const headingLevel = parseInt(el.tagName.charAt(1), 10)

      // heading-links.ts creates the anchor child that owns the rendered heading text.
      const anchor = el.children.find(
        (child): child is Element =>
          child.type === 'element' && child.tagName === 'a' && hasClassName(child, 'heading-link'),
      )
      if (!anchor) return

      const href = anchor.properties?.href as string | undefined
      if (!href) return

      // heading-links.ts inserts heading-link-symbol directly, so direct filtering is enough.
      const textChildren = (anchor.children || []).filter(
        (child: ElementContent) =>
          !(child.type === 'element' && (child as Element).tagName === 'span'),
      )

      const title = textChildren.map((child) => toString(child)).join('')

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
