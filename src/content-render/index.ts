import { renderLiquid } from './liquid/index'
import { renderMarkdown, renderUnified, renderUnifiedToHast } from './unified/index'
import { engine } from './liquid/engine'
import type { Context } from '@/types'
import type { Root as HastRoot } from 'hast'
import { createLogger } from '@/observability/logger'

const logger = createLogger(import.meta.url)

interface RenderOptions {
  cache?: boolean | ((template: string, context: Context) => string)
  filename?: string
  textOnly?: boolean
}

const globalCache = new Map<string, string>()

export async function renderContent(
  template = '',
  context: Context = {} as Context,
  options: RenderOptions = {},
): Promise<string> {
  // Falsy templates cannot render into content, so skip Liquid and unified work.
  if (!template) return template
  let cacheKey: string | null = null
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
      return globalCache.get(cacheKey) as string
    }
  }
  try {
    template = await renderLiquid(template, context)
    if (context.markdownRequested) {
      // Skip remark without internal links; link rewriting is the only markdownRequested transformation.
      if (!/\]\(\s*<?\//.test(template) && !/\]:\s*\//.test(template)) {
        return template.trim()
      }
      return await renderMarkdown(template, context)
    }

    const html = await renderUnified(template, context, options)
    if (cacheKey) {
      globalCache.set(cacheKey, html)
    }
    return html
  } catch (error) {
    if (options.filename) {
      logger.error('renderContent failed on file', { filename: options.filename })
    }
    throw error
  }
}

function getDefaultCacheKey(template: string, context: Context): string {
  return `${template}:${context.currentVersion}:${context.currentLanguage}`
}

// render-page sends the hast tree through Next props so React can render the
// article body without injecting the derived HTML string.
// The same unified pass produces html and hast, so both outputs stay consistent.
// renderContentToHast always produces HTML; use renderContent for markdown output.
export async function renderContentToHast(
  template = '',
  context: Context = {} as Context,
  options: Pick<RenderOptions, 'filename'> = {},
): Promise<{ html: string; hast: HastRoot | null }> {
  if (!template) return { html: template, hast: null }
  if (context.markdownRequested) {
    throw new Error(
      'renderContentToHast does not support markdownRequested; use renderContent for markdown output',
    )
  }
  try {
    const liquidRendered = await renderLiquid(template, context)
    const { hast, html } = await renderUnifiedToHast(liquidRendered, context)
    return { html, hast }
  } catch (error) {
    if (options.filename) {
      logger.error('renderContentToHast failed on file', { filename: options.filename })
    }
    throw error
  }
}

export const liquid = engine
