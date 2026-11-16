type LinksJSON = Array<{
  type: 'reference' | 'inline'
  url: string
  product: string
}>

// Analytics records inline AI-response links and embedding reference links in one JSON payload.
// The product field lets reports group the most popular sourced references.
export function generateAISearchLinksJson(
  sourcesBuffer: Array<{ url: string }>,
  aiResponse: string,
): string {
  const linksJson = [] as LinksJSON
  const inlineLinks = extractMarkdownLinks(aiResponse)
  for (const link of inlineLinks) {
    const product = extractProductFromDocsUrl(link)
    linksJson.push({
      type: 'inline',
      url: link,
      product,
    })
  }
  for (const source of sourcesBuffer) {
    const product = extractProductFromDocsUrl(source.url)
    linksJson.push({
      type: 'reference',
      url: source.url,
      product,
    })
  }

  return JSON.stringify(linksJson)
}

function extractMarkdownLinks(markdownResponse: string) {
  // Example: [Actions](https://docs.github.com/actions) yields the URL.
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g

  const urls = []
  let match

  while ((match = regex.exec(markdownResponse)) !== null) {
    urls.push(match[2])
  }

  return urls.filter((url) => {
    try {
      new URL(url)
      return true
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      return false
    }
  })
}

function extractProductFromDocsUrl(url: string): string {
  const urlObject = new URL(url)
  if (urlObject.hostname !== 'docs.github.com') {
    return ''
  }
  const pathname = urlObject.pathname

  const segments = pathname.split('/').filter((segment) => segment)

  // This heuristic treats only two-character locale prefixes as localized paths.
  if (segments.length === 0) {
    return ''
  }

  if (segments[0].length === 2) {
    if (segments.length < 2) {
      return ''
    }
    // Versioned paths put the product after the version segment.
    if (segments[1].includes('@')) {
      return segments[2] || ''
    }
    return segments[1]
  }

  return segments[0]
}
