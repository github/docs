type LinksJSON = Array<{
  type: 'reference' | 'inline'
  url: string
  product: string
}>

// We use this to generate a JSON string that includes all of the links:
// 1. Included in the AI response (inline)
// 2. Used to generate the AI response via an embedding (reference)
//
// We include the JSON string in our analytics events so we can see the
// most popular sourced references, among other things.
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

// Get all links in a markdown text
function extractMarkdownLinks(markdownResponse: string) {
  // This regex matches markdown links of the form [text](url)
  // Explanation:
  // \[([^\]]+)\]   : Matches the link text inside square brackets (one or more non-']' characters).
  // \(             : Matches the opening parenthesis.
  // ([^)]+)        : Captures the URL (one or more characters that are not a closing parenthesis).
  // \)             : Matches the closing parenthesis.
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g

  const urls = []
  let match

  while ((match = regex.exec(markdownResponse)) !== null) {
    urls.push(match[2])
  }

  // Filter out any invalid URLs
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

// Given a Docs URL, extract the product name
function extractProductFromDocsUrl(url: string): string {
  const pathname = new URL(url).pathname

  const segments = pathname.split('/').filter((segment) => segment)

  // If the first segment is a language code (2 characters), then product is the next segment.
  // Otherwise, assume the first segment is the product.
  if (segments.length === 0) {
    return ''
  }

  if (segments[0].length === 2) {
    return segments[1] || ''
  }

  return segments[0]
}
