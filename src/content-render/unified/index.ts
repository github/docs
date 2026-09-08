import type { Processor } from 'unified'
import type { Nodes as HastNodes, Root as HastRoot } from 'hast'
import { fastTextOnly } from '@/content-render/unified/text-only'
import { createProcessor, createMarkdownOnlyProcessor } from '@/content-render/unified/processor'
import type { Context } from '@/types'

interface RenderOptions {
  textOnly?: boolean
}

export async function renderUnified(
  template: string,
  context: Context,
  options: RenderOptions = {},
) {
  const processor = createProcessor(context)
  const vFile = await processor.process(template)
  let html = vFile.toString()

  if (options.textOnly) {
    html = fastTextOnly(html)
  }

  return html.trim()
}

/**
 * Run the same unified pipeline as `renderUnified`, but stop before the terminal
 * rehype-stringify step and return the hast (HTML AST) tree instead of a string.
 *
 * The 18 transform plugins all run during `processor.run()`; rehype-stringify is
 * only invoked by `processor.stringify()`. So we get the fully transformed hast
 * from a single pass, then derive the legacy HTML string from that exact same
 * tree. This guarantees the string and hast can never drift, and avoids running
 * the pipeline twice for consumers that still need the string (mini-TOC text,
 * search indexing, validators).
 */
export async function renderUnifiedToHast(
  template: string,
  context: Context,
): Promise<{ hast: HastRoot; html: string }> {
  const processor = createProcessor(context) as unknown as Processor
  const mdast = processor.parse(template)
  const hast = (await processor.run(mdast)) as HastNodes
  const html = processor.stringify(hast).toString()
  // Strip `position` data (line/column offsets) the parser leaves on every node.
  // It is useless to the client and meaningfully inflates the serialized tree we
  // ship through the Next props boundary. Done after deriving `html` so the
  // string output is byte-identical to the legacy path.
  stripPositions(hast)
  return { hast: hast as HastRoot, html: html.trim() }
}

/**
 * Recursively delete `position` fields from a hast/unist tree in place.
 * Avoids adding a dependency (unist-util-remove-position) for one field.
 */
function stripPositions(node: HastNodes): void {
  if (node && typeof node === 'object') {
    if ('position' in node) delete (node as { position?: unknown }).position
    const children = (node as { children?: HastNodes[] }).children
    if (Array.isArray(children)) {
      for (const child of children) stripPositions(child)
    }
  }
}

export async function renderMarkdown(template: string, context: Context) {
  const processor = createMarkdownOnlyProcessor(context)
  const vFile = await processor.process(template)
  const markdown = vFile.toString()

  return markdown.trim()
}
