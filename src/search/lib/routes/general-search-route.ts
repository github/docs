import type { Request, Response } from 'express'

import { searchCacheControl } from '@/frame/middleware/cache-control'
import { setFastlySurrogateKey, SURROGATE_ENUMS } from '@/frame/middleware/set-fastly-surrogate-key'
import { getSearchFromRequestParams } from '@/search/lib/search-request-params/get-search-from-request-params'
import { getGeneralSearchResults } from '@/search/lib/get-elasticsearch-results/general-search'
import { handleGetSearchResultsError } from '@/search/middleware/search-routes'
import { handleExternalSearchAnalytics } from '@/search/lib/helpers/external-search-analytics'

export async function generalSearchRoute(req: Request, res: Response) {
  const { indexName, searchParams, validationErrors } = getSearchFromRequestParams(
    req,
    'generalSearch',
  )
  if (validationErrors.length) {
    // We only send the first validation error to the user
    return res.status(400).json(validationErrors[0])
  }

  // Handle search analytics and client_name validation
  const analyticsError = await handleExternalSearchAnalytics(req, 'general-search')
  if (analyticsError) {
    return res.status(analyticsError.status).json({
      error: analyticsError.error,
    })
  }

  const getResultOptions = {
    indexName,
    searchParams,
  }
  try {
    const { meta, hits, aggregations } = await getGeneralSearchResults(getResultOptions)

    if (process.env.NODE_ENV !== 'development') {
      searchCacheControl(res)
      // We can cache this without purging it after every deploy
      // because the API search is only used as a proxy for local
      // and review environments.
      setFastlySurrogateKey(res, SURROGATE_ENUMS.MANUAL)
    }

    res.status(200).json({ meta, hits, aggregations })
  } catch (error) {
    await handleGetSearchResultsError(req, res, error, getResultOptions)
  }
}
