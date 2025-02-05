import { getSearchFromRequestParams } from '@/search/lib/search-request-params/get-search-from-request-params'
import { getAISearchAutocompleteResults } from '@/search/lib/get-elasticsearch-results/ai-search-autocomplete'
import { getAutocompleteSearchResults } from '@/search/lib/get-elasticsearch-results/general-autocomplete'
import { searchCacheControl } from '@/frame/middleware/cache-control'
import { SURROGATE_ENUMS, setFastlySurrogateKey } from '@/frame/middleware/set-fastly-surrogate-key'
import { handleGetSearchResultsError } from '@/search/middleware/search-routes'

import type { Request, Response } from 'express'
import type { CombinedAutocompleteSearchResponse } from '@/search/types'

interface CacheEntry {
  timestamp: number
  data: CombinedAutocompleteSearchResponse
}

// We want to cache when the query is just an empty string
// These are the defaults that are shown when the user first opens the search overlay
const autocompleteCache = new Map<string, CacheEntry>()

// Within 24 hours the top autocomplete options might be updated
const EMPTY_QUERY_CACHE_KEY = 'emptyQueries'
const CACHE_DURATION_MS = 24 * 60 * 60 * 1000 // 24 hours
const size = 5

export async function combinedAutocompleteRoute(req: Request, res: Response) {
  const {
    indexName: aiIndexName,
    validationErrors: aiValidationErrors,
    searchParams: { query: aiQuery, debug },
  } = getSearchFromRequestParams(req, 'aiSearchAutocomplete', {
    // Force query to override validation to allow empty string
    query: typeof req.query.query !== 'string' ? '' : req.query.query,
  })

  const {
    indexName: generalIndexName,
    validationErrors: generalValidationErrors,
    searchParams: { query: generalQuery },
  } = getSearchFromRequestParams(req, 'generalAutocomplete', {
    query: typeof req.query.query !== 'string' ? '' : req.query.query,
  })

  const combinedValidationErrors = aiValidationErrors.concat(generalValidationErrors)
  if (combinedValidationErrors.length) {
    return res.status(400).json(combinedValidationErrors[0])
  }

  // Check if both queries are empty
  const isEmptyQuery =
    (!aiQuery || aiQuery.trim() === '') && (!generalQuery || generalQuery.trim() === '')

  if (isEmptyQuery) {
    const cached = autocompleteCache.get(EMPTY_QUERY_CACHE_KEY)
    const now = Date.now()

    if (cached && now - cached.timestamp < CACHE_DURATION_MS) {
      // Serve cached results
      return res.status(200).json(cached.data)
    }
  }

  try {
    // Async fetch both results from Elasticsearch
    const [aiSearchResults, generalSearchResults] = await Promise.all([
      getAISearchAutocompleteResults({
        indexName: aiIndexName,
        query: aiQuery,
        size,
        debug,
      }),
      getAutocompleteSearchResults({
        indexName: generalIndexName,
        query: generalQuery,
        size,
        debug,
      }),
    ])

    if (process.env.NODE_ENV !== 'development') {
      searchCacheControl(res)
      setFastlySurrogateKey(res, SURROGATE_ENUMS.MANUAL)
    }

    const results: CombinedAutocompleteSearchResponse = {
      aiAutocomplete: {
        meta: aiSearchResults.meta,
        hits: aiSearchResults.hits,
      },
      generalAutocomplete: {
        meta: generalSearchResults.meta,
        hits: generalSearchResults.hits,
      },
    }

    // If both queries are empty, cache the results
    if (isEmptyQuery) {
      autocompleteCache.set(EMPTY_QUERY_CACHE_KEY, {
        timestamp: Date.now(),
        data: results,
      })
    }

    res.status(200).json(results)
  } catch (error) {
    await handleGetSearchResultsError(
      req,
      res,
      error,
      JSON.stringify(
        {
          indexName: { aiIndexName, generalIndexName },
          query: { aiQuery, generalQuery },
          size,
        },
        null,
        2,
      ),
    )
  }
}
