// add a new redirect string to redirect_from frontmatter

module.exports = function addRedirectToFrontmatter (redirectFromData, newRedirectString) {
  if (Array.isArray(redirectFromData)) {
    redirectFromData.push(newRedirectString)
  } else if (typeof redirectFromData === 'string') {
    redirectFromData = [redirectFromData]
    redirectFromData.push(newRedirectString)
  } else {
    redirectFromData = [newRedirectString]
  }

  return redirectFromData
}
