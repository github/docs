#!/usr/bin/env node
// add a new redirect string to redirect_from frontmatter

export default function addRedirectToFrontmatter(redirectFromData, newRedirectString) {
  if (Array.isArray(redirectFromData) && !redirectFromData.includes(newRedirectString)) {
    redirectFromData.push(newRedirectString)
  } else if (typeof redirectFromData === 'string') {
    redirectFromData = [redirectFromData]
    redirectFromData.push(newRedirectString)
  } else {
    redirectFromData = [newRedirectString]
  }

  return redirectFromData
}
