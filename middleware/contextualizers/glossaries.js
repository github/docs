import { getDataByLanguage } from '../../lib/get-data.js'
import { liquid } from '#src/content-render/index.js'
import { executeWithFallback } from '../../lib/render-with-fallback.js'
import { correctTranslatedContentStrings } from '../../lib/correct-translation-content.js'

export default async function glossaries(req, res, next) {
  if (!req.pagePath.endsWith('get-started/quickstart/github-glossary')) return next()

  // If the current version (which is found as part of the URL), does not
  // correspond to a supported version, the Liquid rendering will fail
  // (if there's uses of `ifversion` in any the Liquid).
  // So we'll skip this contextualizer and let the 404 error take over later.
  if (!req.context.currentVersionObj) return next()

  // When the current language is *not* English, we'll need to get the English
  // glossary based on the term. We'll use this to render the translated
  // glossaries. For example, if the Korean translation has a corruption
  // in its description we need to know the English equivalent.
  const enGlossaryMap = new Map()
  // But we don't need to bother if the current language is English.
  if (req.context.currentLanguage !== 'en') {
    const enGlossariesRaw = getDataByLanguage('glossaries.external', 'en')
    enGlossariesRaw.forEach(({ term, description }) => {
      enGlossaryMap.set(term, description)
    })
  }

  // The glossaries Yaml file contains descriptions that might contain
  // Liquid. They need to be rendered out.
  // The github-glossary.md file uses Liquid to generate the Markdown.
  // It uses Liquid to say `{{ glossary.description }}` but once that's
  // injected there it needs to have its own possible Liquid rendered out.
  const glossariesRaw = getDataByLanguage('glossaries.external', req.context.currentLanguage)
  const glossaries = (
    await Promise.all(
      glossariesRaw.map(async (glossary) => {
        let { description } = glossary
        if (req.context.currentLanguage !== 'en') {
          description = correctTranslatedContentStrings(
            description,
            // The function needs the English equialent of the translated
            // Markdown. It's to make possible corrections to the
            // translation's Liquid which might have lost important
            // linebreaks.
            // But because the terms themselves are often translated,
            // in this mapping we often don't have an English equivalent.
            // So that's why we fall back on the empty string.
            enGlossaryMap.get(glossary.term) || '',
            { code: req.context.currentLanguage },
          )
        }
        description = await executeWithFallback(
          req.context,
          () => liquid.parseAndRender(description, req.context),
          (enContext) => {
            const { term } = glossary
            // It *could* be that the translation is referring to a term
            // that no longer exists in the English glossary. In that case,
            // simply skip this term.
            if (!enGlossaryMap.has(term)) return
            const enDescription = enGlossaryMap.get(term)
            return liquid.parseAndRender(enDescription, enContext)
          },
        )
        // It's important to use `Object.assign` here to avoid mutating the
        // original object because from `getDataByLanguage`, reads from an
        // in-memory cache so if we mutated it, it would be mutated for all.
        return Object.assign({}, glossary, { description })
      }),
    )
  ).filter(Boolean)

  req.context.glossaries = glossaries.sort((a, b) =>
    a.term.localeCompare(b.term, req.context.currentLanguage),
  )

  return next()
}
