import { getDataByLanguage } from '../../lib/get-data.js'
import liquid from '../../lib/render-content/liquid.js'

export default async function glossaries(req, res, next) {
  if (!req.pagePath.endsWith('get-started/quickstart/github-glossary')) return next()

  // The glossaries Yaml file contains descriptions that might contain
  // Liquid. They need to be rendered out.
  // The github-glossary.md file uses Liquid to generate the Markdown.
  // It uses Liquid to say `{{ glossary.description }}` but once that's
  // injected there it needs to have its own possible Liquid rendered out.
  const glossariesRaw = getDataByLanguage('glossaries.external', req.context.currentLanguage)
  const glossaries = await Promise.all(
    glossariesRaw.map(async (glossary) => {
      // It's important to use `Object.assign` here to avoid mutating the
      // original object because from `getDataByLanguage`, reads from an
      // in-memory cache so if we mutated it, it would be mutated for all.
      return Object.assign({}, glossary, {
        description: await liquid.parseAndRender(glossary.description, req.context),
      })
    })
  )

  req.context.glossaries = glossaries.sort((a, b) => a.term.localeCompare(b.term))

  return next()
}
