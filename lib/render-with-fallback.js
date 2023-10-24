import { renderContent } from '#src/content-render/index.js'
import Page from './page.js'
import { TitleFromAutotitleError } from '#src/content-render/unified/rewrite-local-links.js'

class EmptyTitleError extends Error {}

const LIQUID_ERROR_NAMES = new Set(['RenderError', 'ParseError', 'TokenizationError'])
export const isLiquidError = (error) =>
  error instanceof Error && error.name && LIQUID_ERROR_NAMES.has(error.name)

const isAutotitleError = (error) => error instanceof TitleFromAutotitleError
const isEmptyTitleError = (error) => error instanceof EmptyTitleError

const isFallbackableError = (error) =>
  isLiquidError(error) || isAutotitleError(error) || isEmptyTitleError(error)

// Returns a string by wrapping `renderContent()`. The input string to
// `renderContent` is one that contains Liquid and Markdown. The output
// is HTML.
// But what the wrapper does is that it watches out for possible Liquid
// related rendering errors AND if the context has been prepared with a
// sync callable that can yield the English equivalent.
// So it's up to how the `context` is prepared if it has a `getEnglishPage`
// function. This means, we can know, in the middleware (which is a
// highter level than `lib/`) how to use the URL to figure out the
// equivalent English page instance.
export async function renderContentWithFallback(page, property, context, options) {
  if (!(page instanceof Page)) {
    throw new Error(`The first argument has to be Page instance (not ${typeof page})`)
  }
  if (typeof property !== 'string') {
    throw new Error(`The second argument has to be a string (not ${typeof property})`)
  }
  const template = page[property]
  try {
    const output = await renderContent(template, context, options)
    if (options && options.throwIfEmpty && !output.trim()) {
      throw new EmptyTitleError(`output for property '${property}' became empty`)
    }
    return output
  } catch (error) {
    // Only bother trying to fallback if it was an error we *can* fall back
    // on English for.
    if (isFallbackableError(error) && context.getEnglishPage) {
      const enPage = context.getEnglishPage(context)
      const englishTemplate = enPage[property]
      // If you don't change the context, it'll confuse the liquid plugins
      // like `data.js` that uses `environment.scope.currentLanguage`
      const enContext = Object.assign({}, context, { currentLanguage: 'en' })
      // Try again!
      return await renderContent(englishTemplate, enContext, options)
    }
    throw error
  }
}

// Returns the result of executing the first function, but if it fails
// return the result of executing the second function.
// In particular, "fails" means if it's deemed an error thrown that we
// can fall back for.
// When it executes the fallback function, it creates a shallow copy of
// the original `context` but with the `currentLanguage:'en'` set on it.
//
// You can use this function to do things like this:
//
//   const title = await executeWithFallback(
//     context,
//     () => renderContent(track.title, context, renderOpts),
//     (enContext) => renderContent(enTrack.title, enContext, renderOpts)
//   )
//
export async function executeWithFallback(context, callable, fallback) {
  try {
    return await callable(context)
  } catch (error) {
    if (isFallbackableError(error) && context.currentLanguage !== 'en') {
      const enContext = Object.assign({}, context, { currentLanguage: 'en' })
      return await fallback(enContext)
    }
    throw error
  }
}
