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

// parse multiple times because some templates contain more templates. :]
export async function renderContent(
  template = '',
  context: Context = {} as Context,
  options: RenderOptions = {},
): Promise<string> {
  // If called with a falsy template, it can't ever become something
  // when rendered. We can exit early to save some pointless work.
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
      // Skip the remark pipeline when there are no internal links to rewrite,
      // since link rewriting is the only transformation the pipeline performs.
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

/**
 * Like `renderContent`, but returns the hast (HTML AST) tree alongside the
 * derived HTML string, both produced from a single unified pass. Used by the
 * render-page boundary to thread a serializable AST to the React layer instead
 * of an opaque HTML string, so React can render the body itself rather than
 * injecting raw HTML (github/docs-engineering#6619).
 *
 * Does liquid first (same as renderContent), then runs the unified pipeline but
 * stops before rehype-stringify. The `html` returned here is derived from the
 * exact same tree, so it stays consistent with `hast`.
 *
 * Unlike `renderContent`, this does not support `context.markdownRequested`:
 * the hast path always produces HTML. Callers that need markdown output should
 * use `renderContent`.
 */
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
