import type { Response, NextFunction } from 'express'

import type { Context, ExtendedRequest, Glossary } from '@/types'
import { getDataByLanguage } from '@/data-directory/lib/get-data'
import { liquid } from '@/content-render/index'
import { executeWithFallback } from '@/languages/lib/render-with-fallback'
import { correctTranslatedContentStrings } from '@/languages/lib/correct-translation-content'

export default async function glossaries(req: ExtendedRequest, res: Response, next: NextFunction) {
  if (!req.pagePath) throw new Error('request is not contextualized')
  if (!req.pagePath.endsWith('/get-started/learning-about-github/github-glossary')) return next()

  if (!req.context) throw new Error('request is not contextualized')

  // Skip unsupported versions so ifversion Liquid errors do not replace the later 404.
  if (!req.context.currentVersionObj) return next()

  // Translated glossaries need English descriptions to repair corrupted Liquid before rendering.
  const enGlossaryMap = new Map()
  if (req.context.currentLanguage !== 'en') {
    const enGlossariesRaw: Glossary[] = getDataByLanguage('glossaries.external', 'en') as Glossary[]

    for (const { term, description } of enGlossariesRaw) {
      enGlossaryMap.set(term, description)
    }
  }

  // github-glossary.md injects glossary descriptions before their Liquid renders.
  const glossariesRaw: Glossary[] = getDataByLanguage(
    'glossaries.external',
    req.context.currentLanguage!,
  ) as Glossary[]
  const glossariesList = (
    await Promise.all(
      glossariesRaw.map(async (glossary) => {
        let { description } = glossary
        if (req.context!.currentLanguage !== 'en') {
          description = correctTranslatedContentStrings(
            description,
            // English Markdown repairs Liquid line breaks; some translated terms lack matches.
            enGlossaryMap.get(glossary.term) || '',
            { code: req.context!.currentLanguage },
          )
        }
        description = await executeWithFallback(
          req.context!,
          () => liquid.parseAndRender(description, req.context),
          (enContext: Context) => {
            const { term } = glossary
            // Skip translated terms missing from the English glossary.
            if (!enGlossaryMap.has(term)) return
            const enDescription = enGlossaryMap.get(term)
            return liquid.parseAndRender(enDescription, enContext)
          },
        )
        // Object.assign preserves the getDataByLanguage cache object shared across requests.
        return Object.assign({}, glossary, { description })
      }),
    )
  ).filter(Boolean)

  req.context.glossaries = glossariesList.sort((a, b) =>
    a.term.localeCompare(b.term, req.context!.currentLanguage),
  )

  return next()
}
