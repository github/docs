module.exports = function earlyAccessContext (req, res, next) {
  if (process.env.NODE_ENV === 'production') {
    return res.status(403).end()
  }

  const earlyAccessPages = req.context.pages
    .filter(page => page.hidden)
    .sort((a, b) => b.relativePath.localeCompare(a.relativePath))

  let urls = []
  earlyAccessPages.forEach(page => {
    const pageUrls = page.permalinks.map(permalink => permalink.href)
    urls = urls.concat(pageUrls)
  })

  const earlyAccessPageLinks = `
${urls.map(url => `- [${url}](${url})`).join('\n')}
`

  // Add to the rendering context
  req.context.earlyAccessPageLinks = earlyAccessPageLinks

  return next()
}
