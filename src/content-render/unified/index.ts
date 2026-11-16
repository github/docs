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

// renderUnifiedToHast derives HTML from the same transformed HAST tree it returns,
// so string and tree consumers cannot drift or run the pipeline twice.
export async function renderUnifiedToHast(
  template: string,
  context: Context,
): Promise<{ hast: HastRoot; html: string }> {
  const processor = createProcessor(context) as unknown as Processor
  const mdast = processor.parse(template)
  const hast = (await processor.run(mdast)) as HastNodes
  const html = processor.stringify(hast).toString()
  // Strip positions after stringifying to shrink Next props without changing the HTML output.
  stripPositions(hast)
  return { hast: hast as HastRoot, html: html.trim() }
}

// Delete position fields in place to avoid a dependency for one field.
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
