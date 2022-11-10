export default function glossaries(req, res, next) {
  if (!req.pagePath.endsWith('get-started/quickstart/github-glossary')) return next()

  const glossaries = req.context.site.data.glossaries.external
  req.context.glossaries = glossaries.sort((a, b) => a.term.localeCompare(b.term))

  return next()
}
