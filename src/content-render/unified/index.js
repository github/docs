import { fastTextOnly } from './text-only.js'
import { createProcessor } from './processor.js'

export async function renderUnified(template, context, options) {
  const processor = createProcessor(context)
  const vFile = await processor.process(template)
  let html = vFile.toString()

  if (options.textOnly) {
    html = fastTextOnly(html)
  }

  return html.trim()
}
