import { EventType } from '@/events/types'
import { CombinedSearchResponse } from '@/search/types'
import { DEFAULT_VERSION } from '@/versions/components/useVersion'
import { NextRouter } from 'next/router'
import { sendEvent } from '@/events/components/events'
import { SEARCH_OVERLAY_EVENT_GROUP } from '@/events/components/event-groups'
import { sanitizeSearchQuery } from '@/search/lib/sanitize-search-query'

export const GENERAL_SEARCH_CONTEXT = 'general-search'
export const AI_SEARCH_CONTEXT = 'ai-search'

// The overlay's own params, which never travel to a destination page.
const OVERLAY_PARAMS = [
  'search-overlay-open',
  'search-overlay-input',
  'search-overlay-ask-ai',
  'query',
]

// Carries tool pickers, platform switches, and feature flags to the destination URL.
// Not built from `router.query`, which also holds dynamic route params like `restPage`.
// A `restPage` search param outranks the real path, so navigation would stay on this article.
// Reads `window`, so call it only from event handlers, never during render.
export function inheritableSearchParams(): URLSearchParams {
  const params = new URLSearchParams(window.location.search)
  for (const key of OVERLAY_PARAMS) {
    params.delete(key)
  }
  return params
}

export function withInheritedParams(url: string): string {
  const qs = inheritableSearchParams().toString()
  return qs ? `${url}?${qs}` : url
}

export function executeGeneralSearch(
  router: NextRouter,
  currentVersion: string,
  localQuery: string,
  debug = false,
  eventGroupId?: string,
) {
  sendEvent({
    type: EventType.search,
    search_query: sanitizeSearchQuery(localQuery),
    search_context: GENERAL_SEARCH_CONTEXT,
    eventGroupKey: SEARCH_OVERLAY_EVENT_GROUP,
    eventGroupId,
  })

  let asPath = `/${router.locale}`
  if (currentVersion !== DEFAULT_VERSION) {
    asPath += `/${currentVersion}`
  }
  asPath += '/search'
  const params = new URLSearchParams(window.location.search || {})
  params.set('query', localQuery)
  if (debug) {
    params.set('debug', '1')
  }
  if (params.has('search-overlay-open')) {
    params.delete('search-overlay-open')
  }
  // A new query starts on page 1 of all results, so an old page or category filter cannot leave it empty.
  params.delete('page')
  params.delete('toplevel')
  asPath += `?${params}`
  router.push(asPath, undefined, { shallow: false })
}

// A real href, so cmd-click and "copy link address" work on "View all N results".
// Skips the current query string, so a copied link opens the results page without the overlay.
// Reads no `window`: this renders during SSR, and a different client href breaks hydration.
export function buildGeneralSearchPath(
  router: NextRouter,
  currentVersion: string,
  localQuery: string,
  debug = false,
) {
  let asPath = `/${router.locale}`
  if (currentVersion !== DEFAULT_VERSION) {
    asPath += `/${currentVersion}`
  }
  const params = new URLSearchParams({ query: localQuery })
  if (debug) {
    params.set('debug', '1')
  }
  return `${asPath}/search?${params}`
}

export async function executeAISearch(version: string, query: string, debug = false) {
  const body = {
    query,
    version,
    client_name: 'docs.github.com-client',
    ...(debug && { debug: '1' }),
  }

  const response = await fetch(`/api/ai-search/v1`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  return response
}

export async function executeCombinedSearch(
  router: NextRouter,
  version: string,
  query: string,
  debug = false,
  abortSignal?: AbortSignal,
) {
  const language = router.locale || 'en'

  const params = new URLSearchParams({ query, version, language })
  if (debug) {
    params.set('debug', '1')
  }

  // client_name identifies frontend requests to the search API.
  params.set('client_name', 'docs.github.com-client')

  // Autocomplete intentionally requests four results.
  params.set('size', '4')

  const response = await fetch(`/api/search/combined-search/v1?${params}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    signal: abortSignal || undefined,
  })
  if (!response?.ok) {
    throw new Error(
      `Failed to fetch ai autocomplete search results.\nStatus ${response.status}\n${response.statusText}`,
    )
  }

  const results = (await response.json()) as CombinedSearchResponse

  return {
    aiAutocompleteOptions: results?.aiAutocompleteSuggestions,
    generalSearchResults: results?.generalSearchResults,
  }
}
