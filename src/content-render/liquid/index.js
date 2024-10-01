import { processLiquidPost } from './post.js'
import { engine } from './engine.js'

export async function renderLiquid(template, context) {
  template = await engine.parseAndRender(template, context)
  template = processLiquidPost(template)
  return template
}
