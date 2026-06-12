import { processLiquidPost } from './post'
import { engine } from './engine'
import type { Context } from '@/types'

export async function renderLiquid(template: string, context: Context): Promise<string> {
  if (template.includes('{%') || template.includes('{{')) {
    template = await engine.parseAndRender(template, context)
  }
  template = processLiquidPost(template)
  return template
}
