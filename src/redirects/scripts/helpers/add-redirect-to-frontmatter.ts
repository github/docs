// add a new redirect string to redirect_from frontmatter

export default function addRedirectToFrontmatter(
  redirectFromData: string | string[] | undefined,
  newRedirectString: string,
): string[] {
  if (Array.isArray(redirectFromData) && !redirectFromData.includes(newRedirectString)) {
    redirectFromData.push(newRedirectString)
    return redirectFromData
  } else if (typeof redirectFromData === 'string') {
    const redirectArray = [redirectFromData]
    redirectArray.push(newRedirectString)
    return redirectArray
  } else {
    return [newRedirectString]
  }
}
