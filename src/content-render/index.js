import { renderLiquid } from './liquid/index.js'
import { renderUnified } from './unified/index.js'
import { engine } from './liquid/engine.js'

// parse multiple times because some templates contain more templates. :]
export async function renderContent(template = '', context = {}, options = {}) {
  // If called with a falsy template, it can't ever become something
  // when rendered. We can exit early to save some pointless work.
  if (!template) return template
  try {
    template = await renderLiquid(template, context)
    const html = await renderUnified(template, context, options)
    return html
  } catch (error) {
    if (options.filename) {
      console.error(`renderContent failed on file: ${options.filename}`)
    }
    throw error
  }
}

export const liquid = engine
