// Carries the page's `feature` query param over to a link while keeping the link's own query and fragment.
export function addFeatureParamToHref(href: string, search: string): string {
  const feature = new URLSearchParams(search).get('feature')
  // In-page fragment links never reach the server, so they gain nothing from the param.
  if (!feature || !href || href.startsWith('#')) return href

  const hashIndex = href.indexOf('#')
  const beforeHash = hashIndex === -1 ? href : href.slice(0, hashIndex)
  const hash = hashIndex === -1 ? '' : href.slice(hashIndex)
  const queryIndex = beforeHash.indexOf('?')
  const path = queryIndex === -1 ? beforeHash : beforeHash.slice(0, queryIndex)
  const params = new URLSearchParams(queryIndex === -1 ? '' : beforeHash.slice(queryIndex + 1))
  params.set('feature', feature)
  return `${path}?${params.toString()}${hash}`
}
