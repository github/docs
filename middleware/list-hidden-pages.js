module.exports = async function listHidden (req, res, next) {
  if (process.env.NODE_ENV === 'production') {
    return res.status(403).end()
  }

  const hiddenPages = req.context.pages
    .filter(page => page.hidden)
    .sort((a, b) => b.relativePath.localeCompare(a.relativePath))

  let urls = []
  hiddenPages.forEach(page => {
    const pageUrls = page.permalinks.map(permalink => permalink.href)
    urls = urls.concat(pageUrls)
  })

  const output = `
  <ul>
    ${urls.map(url => `<li><a href="${url}">${url}</li>`).join('\n')}
  </ul>
  `

  return res.send(output)
}
