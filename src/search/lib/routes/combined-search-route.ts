import { getSearchFromRequestParams } from '@/search/lib/search-request-params/get-search-from-request-params'
import { getAISearchAutocompleteResults } from '@/search/lib/get-elasticsearch-results/ai-search-autocomplete'
import { searchCacheControl } from '@/frame/middleware/cache-control'
import { SURROGATE_ENUMS, setFastlySurrogateKey } from '@/frame/middleware/set-fastly-surrogate-key'
import { handleGetSearchResultsError } from '@/search/middleware/search-routes'
import { handleExternalSearchAnalytics } from '@/search/lib/helpers/external-search-analytics'

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
    // force lets empty autocomplete queries return the top AI suggestions.
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

  const analyticsError = await handleExternalSearchAnalytics(req, 'combined-search')
  if (analyticsError) {
    return res.status(analyticsError.status).json({
      error: analyticsError.error,
    })
  }

  try {
    const autocompletePromise = getAISearchAutocompleteResults({
      indexName: aiIndexName,
      query: aiQuery,
      size: AUTOCOMPLETE_SUGGESTIONS_SIZE,
      debug,
    })

    // Empty queries skip Elasticsearch and use an empty general-search fallback.
    let generalSearchPromise = {} as Promise<GeneralSearchResponse>
    if (generalQuery !== '') {
      generalSearchPromise = getGeneralSearchResults({
        indexName: generalSearchIndexName,
        searchParams: {
          query: generalQuery,
          size: GENERAL_RESULTS_SIZE,
          debug: debug || false,
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
        meta: {
          found: { value: 0, relation: 'eq' },
          took: { query_msec: 0, total_msec: 0 },
          // Use the requested size so page-count math stays finite.
          size: GENERAL_RESULTS_SIZE,
          page: 1,
        },
        hits: [],
      })
    }

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
