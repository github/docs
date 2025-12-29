import { processLiquidPost } from './post'
import { engine } from './engine'

export async function renderLiquid(template: string, context: any): Promise<string> {
  template = await engine.parseAndRender(template, context)
  template = processLiquidPost(template)
  return template
}
