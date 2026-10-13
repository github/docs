import { renderContent } from '@/content-render/index'
import Page from '@/frame/lib/page'
import { TitleFromAutotitleError } from '@/content-render/unified/rewrite-local-links'
import type { Context, Page as PageType } from '@/types'

export class EmptyTitleError extends Error {}

export interface LiquidToken {
  file?: string
  getPosition?: () => [number, number]
}

// Use LiquidError instead of mutating Error objects with type assertions.
export class LiquidError extends Error {
  token?: LiquidToken
  originalError?: Error

  constructor(message: string, name: 'ParseError' | 'RenderError' | 'TokenizationError') {
    super(message)
    this.name = name
  }
}

interface RenderOptions {
  throwIfEmpty?: boolean
  textOnly?: boolean
  cache?: boolean | ((template: string, context: Context) => string)
  [key: string]: unknown
}

const LIQUID_ERROR_NAMES = new Set(['RenderError', 'ParseError', 'TokenizationError'])
export const isLiquidError = (error: unknown): error is LiquidError =>
  error instanceof Error && error.name !== undefined && LIQUID_ERROR_NAMES.has(error.name)

const isAutotitleError = (error: unknown): error is TitleFromAutotitleError =>
  error instanceof TitleFromAutotitleError

const isEmptyTitleError = (error: unknown): error is EmptyTitleError =>
  error instanceof EmptyTitleError

const isFallbackableError = (error: unknown): boolean =>
  isLiquidError(error) || isAutotitleError(error) || isEmptyTitleError(error)

// HTML comments expose fallback errors to translators without rendering visible page text.
export function createTranslationFallbackComment(error: Error, property: string): string {
  const errorType = error.name || 'UnknownError'
  const errorDetails: string[] = []

  errorDetails.push(`TRANSLATION_FALLBACK`)
  errorDetails.push(`prop=${property}`)
  errorDetails.push(`type=${errorType}`)

  if (isLiquidError(error)) {
    if (error.token) {
      if (error.token.file) {
        errorDetails.push(`file=${error.token.file}`)
      }
      if (error.token.getPosition) {
        const [line, col] = error.token.getPosition()
        errorDetails.push(`line=${line}`)
        errorDetails.push(`col=${col}`)
      }
    }

    const originalMessage = error.originalError?.message || error.message
    if (originalMessage) {
      let cleanMessage = originalMessage.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim()

      if (cleanMessage.length > 200) {
        cleanMessage = `${cleanMessage.substring(0, 200)}...`
      }

      errorDetails.push(`msg="${cleanMessage.replace(/"/g, "'")}"`)
    }
  } else if (isAutotitleError(error)) {
    if (error.message) {
      const cleanMessage = error.message
        .replace(/\n/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .substring(0, 200)
      errorDetails.push(`msg="${cleanMessage.replace(/"/g, "'")}"`)
    }
  } else if (isEmptyTitleError(error)) {
    errorDetails.push(`msg="Content became empty after rendering"`)
  }

  return `<!-- ${errorDetails.join(' ')} -->`
}

// Render translated Liquid and fall back to the English Page when translation
// errors can use English safely. Middleware sets getEnglishPage because it can
// resolve the English page from the URL.
export async function renderContentWithFallback(
  // Callers pass the Page interface, but fallback rendering needs a Page instance.
  page: PageType,
  property: string,
  context: Context,
  options?: RenderOptions,
): Promise<string> {
  if (!(page instanceof Page)) {
    throw new Error(`The first argument has to be Page instance (not ${typeof page})`)
  }
  if (typeof property !== 'string') {
    throw new Error(`The second argument has to be a string (not ${typeof property})`)
  }
  const template = (page as unknown as Record<string, string>)[property]
  try {
    const output = await renderContent(template, context, options)
    if (options && options.throwIfEmpty && !output.trim()) {
      throw new EmptyTitleError(`output for property '${property}' became empty`)
    }
    return output
  } catch (error) {
    // Fall back only for errors the English page can mask.
    if (isFallbackableError(error) && context.getEnglishPage) {
      const enPage = context.getEnglishPage(context)
      const englishTemplate = (enPage as unknown as Record<string, string>)[property]
      // Set currentLanguage to en so Liquid plugins such as data.ts read English data.
      const enContext = Object.assign({}, context, { currentLanguage: 'en' })

      const fallbackContent = await renderContent(englishTemplate, enContext, options)

      // HTML fallback comments break textOnly output, so add them only for non-English HTML.
      if (context.currentLanguage !== 'en' && !options?.textOnly) {
        const errorComment = createTranslationFallbackComment(error as Error, property)
        return `${errorComment}\n${fallbackContent}`
      }

      return fallbackContent
    }
    throw error
  }
}

// Run the fallback with an English context when the callable fails with a
// fallbackable translation error.
// Example:
// const title = await executeWithFallback(
//   context,
//   () => renderContent(track.title, context, renderOpts),
//   (enContext) => renderContent(enTrack.title, enContext, renderOpts),
// )
export async function executeWithFallback<T>(
  context: Context,
  callable: (context: Context) => T | Promise<T>,
  fallback: (enContext: Context) => T | Promise<T>,
): Promise<T> {
  try {
    return await Promise.resolve(callable(context))
  } catch (error) {
    if (isFallbackableError(error) && context.currentLanguage !== 'en') {
      const enContext = Object.assign({}, context, { currentLanguage: 'en' })
      const fallbackContent = await Promise.resolve(fallback(enContext))

      // Only HTML fallback content can carry a comment without changing plain-text output.
      if (typeof fallbackContent === 'string' && /<[^>]+>/.test(fallbackContent)) {
        const errorComment = createTranslationFallbackComment(error as Error, 'content')
        return `${errorComment}\n${fallbackContent}` as T
      }

      return fallbackContent
    }
    throw error
  }
}
