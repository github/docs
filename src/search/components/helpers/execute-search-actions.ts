import { EventType } from '@/events/types'
import { CombinedSearchResponse } from '@/search/types'
import { DEFAULT_VERSION } from '@/versions/components/useVersion'
import { NextRouter } from 'next/router'
import { sendEvent } from 'src/events/components/events'
import { SEARCH_OVERLAY_EVENT_GROUP } from '@/events/components/event-groups'

// Search context values for identifying each search event
export const GENERAL_SEARCH_CONTEXT = 'general-search'
export const AI_SEARCH_CONTEXT = 'ai-search'
export const COMBINED_SEARCH_CONTEXT = 'combined-search'

// The logic that redirects to the /search page with the proper query params
// The query params will be consumed in the general search middleware
export function executeGeneralSearch(
  router: NextRouter,
  currentVersion: string,
  localQuery: string,
  debug = false,
  eventGroupId?: string,
) {
  sendEvent({
    type: EventType.search,
    search_query: localQuery,
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
  // Close the search overlay
  if (params.has('search-overlay-open')) {
    params.delete('search-overlay-open')
  }
  asPath += `?${params}`
  router.push(asPath)
}

export async function executeAISearch(
  router: NextRouter,
  version: string,
  query: string,
  debug = false,
) {
  let language = router.locale || 'en'

  const body = {
    query,
    version,
    language,
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

/**
 * The AJAX request logic that fetches combined search results AI autocomplete suggestions + general search suggestions
 */
export async function executeCombinedSearch(
  router: NextRouter,
  version: string,
  query: string,
  debug = false,
  abortSignal?: AbortSignal,
  eventGroupId?: string,
) {
  sendEvent({
    type: EventType.search,
    // TODO: Remove PII so we can include the actual query
    search_query: 'REDACTED',
    search_context: COMBINED_SEARCH_CONTEXT,
    eventGroupKey: SEARCH_OVERLAY_EVENT_GROUP,
    eventGroupId: eventGroupId,
  })

  let language = router.locale || 'en'

  const params = new URLSearchParams({ query: query, version, language })
  if (debug) {
    params.set('debug', '1')
  }

  // Always fetch 4 results for autocomplete
  params.set('size', '4')

  const response = await fetch(`/api/search/combined-search/v1?${params}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    // Allow the caller to pass in an AbortSignal to cancel the request
    signal: abortSignal || undefined,
  })
  if (!response.ok) {
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
