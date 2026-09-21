// Normalizes the double slashes in GHEC docs URLs. The upstream OpenAPI spec in
// github/github contains URLs like "enterprise-cloud@latest//rest/...". The
// extra slash is harmless in browsers but trips CCR lint errors.
const DOUBLE_SLASH_RE = /(docs\.github\.com\/[^/]+@[^/]+)\/\//g

export function normalizeDocsUrls(html: string): string {
  return html.replace(DOUBLE_SLASH_RE, '$1/')
}
