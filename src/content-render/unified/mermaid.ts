// Renders ```mermaid fences to inline SVG with Pele, so diagrams need no client JavaScript.
// Fences nested in a ````text fence keep their language as text and stay as source.

import { visit, SKIP } from 'unist-util-visit'
import { h } from 'hastscript'
import { fromHtml } from 'hast-util-from-html'
import { toString } from 'hast-util-to-string'
import murmur from 'imurmurhash'
import { PeleError, render } from 'pele'
import type { Element, Root } from 'hast'
import { createLogger } from '@/observability/logger'

const logger = createLogger(import.meta.url)

// Matches the max-width of the article column in ArticleGridLayout and ArticleInlineLayout.
const ARTICLE_WIDTH = 720

export default function mermaid() {
  return (tree: Root) => {
    let count = 0
    visit(tree, 'element', (node, index, parent) => {
      if (index === undefined || !parent || !isMermaidBlock(node)) return
      const source = toString(node)
      // Diagrams on one page need distinct title and description IDs.
      const idPrefix = `mermaid-${murmur(source).result().toString(36)}-${count++}`
      try {
        const { svg } = render(source, {
          maxWidth: ARTICLE_WIDTH,
          // Pele flips layouts to vertical only below the breakpoint and only when they do not fit.
          directionBreakpoint: ARTICLE_WIDTH + 1,
          idPrefix,
          // Diagram links and images skip docs link rewriting and checks.
          images: false,
          links: false,
        })
        const diagram = fromHtml(svg, { fragment: true }).children as Element[]
        parent.children[index] = h('div', { className: 'mermaid-diagram' }, diagram)
        return SKIP
      } catch (error) {
        if (!(error instanceof PeleError)) throw error
        // Leave the source as a code block, so one bad diagram does not break the page.
        logger.warn('Could not render Mermaid diagram', {
          code: error.code,
          line: error.line,
          column: error.column,
        })
      }
    })
  }
}

function isMermaidBlock(node: Element): boolean {
  if (node.tagName !== 'pre') return false
  const code = node.children[0]
  if (code?.type !== 'element' || code.tagName !== 'code') return false
  const classNames = code.properties.className
  return Array.isArray(classNames) && classNames.includes('language-mermaid')
}
