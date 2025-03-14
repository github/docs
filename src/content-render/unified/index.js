import { fastTextOnly } from './text-only.js'
import { createProcessor, createMarkdownOnlyProcessor } from './processor.js'

export async function renderUnified(template, context, options) {
  const processor = createProcessor(context)
  const vFile = await processor.process(template)
  let html = vFile.toString()

  if (options.textOnly) {
    html = fastTextOnly(html)
  }

  return html.trim()
}

export async function renderMarkdown(template, context, options) {
  const processor = createMarkdownOnlyProcessor(context)
  const vFile = await processor.process(template)
  let markdown = vFile.toString()

  return markdown.trim()
}
