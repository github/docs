import { getSearchFromRequestParams } from '@/search/lib/search-request-params/get-search-from-request-params'
import { getAISearchAutocompleteResults } from '@/search/lib/get-elasticsearch-results/ai-search-autocomplete'
import { searchCacheControl } from '@/frame/middleware/cache-control'
import { SURROGATE_ENUMS, setFastlySurrogateKey } from '@/frame/middleware/set-fastly-surrogate-key'
import { handleGetSearchResultsError } from '@/search/middleware/search-routes'

import type { Request, Response } from 'express'
import type { CombinedSearchResponse, GeneralSearchResponse } from '@/search/types'
import { getGeneralSearchResults } from '../get-elasticsearch-results/general-search'

const AUTOCOMPLETE_SUGGESTIONS_SIZE = 4
const GENERAL_RESULTS_SIZE = 4

export async function combinedSearchRoute(req: Request, res: Response) {
  const {
    indexName: aiIndexName,
    validationErrors: aiValidationErrors,
    searchParams: { query: aiQuery, debug },
  } = getSearchFromRequestParams(req, 'aiSearchAutocomplete', {
    // Force query to override validation to allow empty string
    // Because if query is empty, we still return top AI suggestions
    query: typeof req.query.query !== 'string' ? '' : req.query.query,
  })

  const {
    indexName: generalSearchIndexName,
    validationErrors: generalValidationErrors,
    searchParams: { query: generalQuery },
  } = getSearchFromRequestParams(req, 'generalSearch', {
    query: typeof req.query.query !== 'string' ? '' : req.query.query,
  })

  const combinedValidationErrors = aiValidationErrors.concat(generalValidationErrors)
  if (combinedValidationErrors.length) {
    return res.status(400).json(combinedValidationErrors[0])
  }

  try {
    const autocompletePromise = getAISearchAutocompleteResults({
      indexName: aiIndexName,
      query: aiQuery,
      size: AUTOCOMPLETE_SUGGESTIONS_SIZE,
      debug,
    })

    // If query is empty for general search, we don't include general results
    let generalSearchPromise = {} as Promise<GeneralSearchResponse>
    if (generalQuery !== '') {
      generalSearchPromise = getGeneralSearchResults({
        indexName: generalSearchIndexName,
        searchParams: {
          query: generalQuery,
          size: GENERAL_RESULTS_SIZE,
          debug: debug || false,
          // Keys below are hard-coded and consistent
          sort: 'best',
          aggregate: ['toplevel'],
          autocomplete: false,
          highlights: [],
          include: [],
          toplevel: [],
          page: 1,
          version: '',
          language: '',
        },
      })
    } else {
      generalSearchPromise = Promise.resolve({
        meta: {} as any,
        hits: [],
      })
    }

    // Async fetch both results from Elasticsearch
    const [aiSearchResults, generalSearchResults] = await Promise.all([
      autocompletePromise,
      generalSearchPromise,
    ])

    if (process.env.NODE_ENV !== 'development') {
      searchCacheControl(res)
      setFastlySurrogateKey(res, SURROGATE_ENUMS.MANUAL)
    }

    const results: CombinedSearchResponse = {
      aiAutocompleteSuggestions: {
        meta: aiSearchResults.meta,
        hits: aiSearchResults.hits,
      },
      generalSearchResults: {
        meta: generalSearchResults.meta,
        hits: generalSearchResults.hits,
      },
    }

    res.status(200).json(results)
  } catch (error) {
    await handleGetSearchResultsError(
      req,
      res,
      error,
      JSON.stringify(
        {
          indexName: { aiIndexName, generalSearchIndexName },
          query: { aiQuery, generalQuery },
          size: { AUTOCOMPLETE_SUGGESTIONS_SIZE, GENERAL_RESULTS_SIZE },
        },
        null,
        2,
      ),
    )
  }
}
