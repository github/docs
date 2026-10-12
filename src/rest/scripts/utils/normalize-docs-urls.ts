// github/github emits GitHub Enterprise Cloud docs URLs like "enterprise-cloud@latest//rest/...".
// Browsers allow the double slash, but published docs should use clean URLs.
const DOUBLE_SLASH_RE = /(docs\.github\.com\/[^/]+@[^/]+)\/\//g

export function normalizeDocsUrls(html: string): string {
  return html.replace(DOUBLE_SLASH_RE, '$1/')
}
