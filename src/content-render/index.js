import { renderLiquid } from './liquid/index.js'
import { renderUnified } from './unified/index.js'
import { engine } from './liquid/engine.js'

const globalCache = new Map()

// parse multiple times because some templates contain more templates. :]
export async function renderContent(template = '', context = {}, options = {}) {
  // If called with a falsy template, it can't ever become something
  // when rendered. We can exit early to save some pointless work.
  if (!template) return template
  let cacheKey = null
  if (options && options.cache) {
    if (!context) throw new Error("If setting 'cache' in options, the 'context' must be set too")
    if (typeof options.cache === 'function') {
      cacheKey = options.cache(template, context)
    } else {
      cacheKey = getDefaultCacheKey(template, context)
    }
    if (cacheKey && typeof cacheKey !== 'string') {
      throw new Error('cache option must return a string if truthy')
    }
    if (globalCache.has(cacheKey)) {
      return globalCache.get(cacheKey)
    }
  }
  try {
    template = await renderLiquid(template, context)
    const html = await renderUnified(template, context, options)
    if (cacheKey) {
      globalCache.set(cacheKey, html)
    }
    return html
  } catch (error) {
    if (options.filename) {
      console.error(`renderContent failed on file: ${options.filename}`)
    }
    throw error
  }
}

function getDefaultCacheKey(template, context) {
  return `${template}:${context.currentVersion}:${context.currentLanguage}`
}

export const liquid = engine
