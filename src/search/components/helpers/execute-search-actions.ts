import { EventType } from '@/events/types'
import { AutocompleteSearchResponse } from '@/search/types'
import { DEFAULT_VERSION } from '@/versions/components/useVersion'
import { NextRouter } from 'next/router'
import { sendEvent } from 'src/events/components/events'
import { ASK_AI_EVENT_GROUP, SEARCH_OVERLAY_EVENT_GROUP } from '@/events/components/event-groups'

// Search context values for identifying each search event
export const GENERAL_SEARCH_CONTEXT = 'general-search'
export const AI_SEARCH_CONTEXT = 'ai-search'
export const AI_AUTOCOMPLETE_SEARCH_CONTEXT = 'ai-search-autocomplete'

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
  const params = new URLSearchParams({ query: localQuery })
  if (debug) {
    params.set('debug', '1')
  }
  asPath += `?${params}`
  router.push(asPath)
}

export async function executeAISearch(
  router: NextRouter,
  version: string,
  query: string,
  debug = false,
  eventGroupId?: string,
) {
  sendEvent({
    type: EventType.search,
    // TODO: Remove PII so we can include the actual query
    search_query: 'REDACTED',
    search_context: AI_SEARCH_CONTEXT,
    eventGroupKey: ASK_AI_EVENT_GROUP,
    eventGroupId,
  })

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

// The AJAX request logic that fetches the autocomplete options for AI autocomplete sugggestions
export async function executeAIAutocompleteSearch(
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
    search_context: AI_AUTOCOMPLETE_SEARCH_CONTEXT,
    eventGroupKey: SEARCH_OVERLAY_EVENT_GROUP,
    eventGroupId: eventGroupId,
  })

  let language = router.locale || 'en'

  const params = new URLSearchParams({ query: query, version, language })
  if (debug) {
    params.set('debug', '1')
  }

  // Always fetch 5 results for autocomplete
  params.set('size', '5')

  const response = await fetch(`/api/search/ai-search-autocomplete/v1?${params}`, {
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
  const results = (await response.json()) as AutocompleteSearchResponse
  return {
    aiAutocompleteOptions: results?.hits || [],
  }
}
