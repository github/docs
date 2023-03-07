import { getDataByLanguage } from '../../lib/get-data.js'

export default function glossaries(req, res, next) {
  if (!req.pagePath.endsWith('get-started/quickstart/github-glossary')) return next()

  const glossaries = getDataByLanguage('glossaries.external', req.context.currentLanguage)
  req.context.glossaries = glossaries.sort((a, b) => a.term.localeCompare(b.term))

  return next()
}
