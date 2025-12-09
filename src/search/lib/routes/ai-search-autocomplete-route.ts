import type { Request, Response } from 'express'

import { searchCacheControl } from '@/frame/middleware/cache-control'
import { setFastlySurrogateKey, SURROGATE_ENUMS } from '@/frame/middleware/set-fastly-surrogate-key'
import { getAISearchAutocompleteResults } from '@/search/lib/get-elasticsearch-results/ai-search-autocomplete'
import { getSearchFromRequestParams } from '@/search/lib/search-request-params/get-search-from-request-params'
import { handleGetSearchResultsError } from '@/search/middleware/search-routes'

export async function aiSearchAutocompleteRoute(req: Request, res: Response) {
  // If no query is provided, we want to return the top 5 most popular terms
  // This is a special case for AI search autocomplete
  // So we use `force` to allow the query to be empty without the usual validation error
  const force = {} as any
  if (!req.query.query) {
    force.query = ''
  }
  const {
    indexName,
    validationErrors,
    searchParams: { query, size, debug },
  } = getSearchFromRequestParams(req, 'aiSearchAutocomplete', force)
  if (validationErrors.length) {
    return res.status(400).json(validationErrors[0])
  }

  const getResultOptions = {
    indexName,
    query,
    size,
    debug,
  }
  try {
    const { meta, hits } = await getAISearchAutocompleteResults(getResultOptions)

    if (process.env.NODE_ENV !== 'development') {
      searchCacheControl(res)
      setFastlySurrogateKey(res, SURROGATE_ENUMS.DEFAULT)
    }

    res.status(200).json({ meta, hits })
  } catch (error) {
    await handleGetSearchResultsError(req, res, error, getResultOptions)
  }
}
