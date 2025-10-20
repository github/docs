import { fastTextOnly } from '@/content-render/unified/text-only'
import { createProcessor, createMarkdownOnlyProcessor } from '@/content-render/unified/processor'

interface RenderOptions {
  textOnly?: boolean
}

export async function renderUnified(template: string, context: any, options: RenderOptions = {}) {
  const processor = createProcessor(context)
  const vFile = await processor.process(template)
  let html = vFile.toString()

  if (options.textOnly) {
    html = fastTextOnly(html)
  }

  return html.trim()
}

export async function renderMarkdown(template: string, context: any) {
  const processor = createMarkdownOnlyProcessor(context)
  const vFile = await processor.process(template)
  const markdown = vFile.toString()

  return markdown.trim()
}
