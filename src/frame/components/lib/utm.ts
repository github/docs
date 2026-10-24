// Preserve UTMs for github.com and its subdomains, such as blog.github.com, but skip docs.github.com.
// Match on the hostname so other sites with github.com in the path or query are left alone.
export function shouldPreserveUtm(url: string): boolean {
  let urlObj: URL
  try {
    urlObj = new URL(url)
  } catch {
    return false
  }
  if (urlObj.protocol !== 'https:' && urlObj.protocol !== 'http:') return false
  const { hostname } = urlObj
  if (hostname === 'docs.github.com') return false
  return hostname === 'github.com' || hostname.endsWith('.github.com')
}
