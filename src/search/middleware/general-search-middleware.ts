/*
This file & middleware is for when a user requests our /search page e.g. 'docs.github.com/search?query=foo'
 We make whatever search is in the ?query= parameter and attach it to req.search 
 req.search is then consumed by the search component in 'src/search/pages/search.tsx' 

When a user directly hits our API e.g. /api/search/v1?query=foo, they will hit the routes in ./search-routes.ts
*/

import got from 'got'
import { Request, Response, NextFunction } from 'express'
import { errors } from '@elastic/elasticsearch'
import statsd from '@/observability/lib/statsd.js'

import { getPathWithoutVersion, getPathWithoutLanguage } from '@/frame/lib/path-utils'
import { getGeneralSearchResults } from '@/search/lib/get-elasticsearch-results/general-search'
import { getSearchFromRequestParams } from '@/search/lib/search-request-params/get-search-from-request-params'

import type { ComputedSearchQueryParamsMap } from '@/search/lib/search-request-params/types'
import type {
  GeneralSearchResponse,
  SearchOnReqObject,
  SearchTypes,
  SearchValidationErrorEntry,
} from '@/search/types.js'

interface Context<Type extends SearchTypes> {
  currentVersion: string
  currentLanguage: string
  search: SearchOnReqObject<Type>
}

interface CustomRequest<Type extends SearchTypes> extends Request {
  pagePath: string
  context: Context<Type>
}

export default async function contextualizeGeneralSearch(
  req: CustomRequest<'generalSearch'>,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const { pagePath } = req
  if (getPathWithoutLanguage(getPathWithoutVersion(pagePath)) !== '/search') {
    return next()
  }

  // Since this is a middleware language & version are already set in req.context via a prior middleware
  const { indexName, searchParams, validationErrors } = getSearchFromRequestParams(
    req,
    'generalSearch',
    // Force the version and language keys to be set from the `req.context` object
    {
      version: req.context.currentVersion,
      language: req.context.currentLanguage,
    },
  )

  if (validationErrors.map((error: SearchValidationErrorEntry) => error.key).includes('query')) {
    if (Array.isArray(searchParams.query)) {
      searchParams.query = searchParams.query[0]
    } else if (!searchParams.query) {
      searchParams.query = '' // If 'undefined' we need to cast to string
    }
  }

  searchParams.aggregate = ['toplevel']

  req.context.search = {
    searchParams,
    validationErrors,
  }

  if (!validationErrors.length && searchParams.query) {
    // In local dev ELASTICSEARCH_URL may not be set, so we proxy the search to prod
    if (!process.env.ELASTICSEARCH_URL) {
      if (searchParams.aggregate && searchParams.toplevel && searchParams.toplevel.length > 0) {
        // Do 2 searches. One without filtering to get the aggregations
        const searchWithoutFilter = Object.fromEntries(
          Object.entries(searchParams).filter(([key]) => key !== 'topLevel'),
        )
        searchWithoutFilter.size = 0
        const { aggregations } = await getProxySearch(
          searchWithoutFilter as ComputedSearchQueryParamsMap['generalSearch'],
        )
        const searchWithoutAggregate = Object.fromEntries(
          Object.entries(searchParams).filter(([key]) => key !== 'aggregate'),
        )
        req.context.search.results = await getProxySearch(
          searchWithoutAggregate as ComputedSearchQueryParamsMap['generalSearch'],
        )
        req.context.search.results.aggregations = aggregations
      } else {
        req.context.search.results = await getProxySearch(searchParams)
      }
    } else {
      const tags: string[] = [`indexName:${indexName}`, `toplevels:${searchParams.toplevel.length}`]
      const timed = statsd.asyncTimer(getGeneralSearchResults, 'contextualize.search', tags)
      const getGeneralSearchArgs = {
        indexName,
        searchParams,
      }
      try {
        if (searchParams.aggregate && searchParams.toplevel && searchParams.toplevel.length > 0) {
          // Do 2 searches. One without filtering to get the aggregations
          const searchWithoutFilter = Object.fromEntries(
            Object.entries(searchParams).filter(([key]) => key !== 'topLevel'),
          )
          searchWithoutFilter.size = 0
          const { aggregations } = await timed({
            ...getGeneralSearchArgs,
            searchParams: searchWithoutFilter as ComputedSearchQueryParamsMap['generalSearch'],
          })
          req.context.search.results = await timed(getGeneralSearchArgs)
          req.context.search.results.aggregations = aggregations
        } else {
          req.context.search.results = await timed(getGeneralSearchArgs)
        }
      } catch (error) {
        // If the Elasticsearch sends a 4XX we want the user to see a 500
        if (error instanceof errors.ResponseError) {
          console.error(
            'Error calling getSearchResults(%s):',
            JSON.stringify({
              indexName,
              searchParams,
            }),
            error,
          )
          if (error?.meta?.body) {
            console.error(`Meta:`, error.meta.body)
          }
          throw new Error(error.message)
        } else {
          throw error
        }
      }
    }
  }

  return next()
}

const SEARCH_KEYS_TO_QUERY_STRING: (keyof ComputedSearchQueryParamsMap['generalSearch'])[] = [
  'query',
  'version',
  'language',
  'page',
  'aggregate',
  'toplevel',
  'size',
]

// Proxy the API endpoint with the relevant search params
async function getProxySearch(
  search: ComputedSearchQueryParamsMap['generalSearch'],
): Promise<GeneralSearchResponse> {
  const url = new URL('https://docs.github.com/api/search/v1')
  for (const key of SEARCH_KEYS_TO_QUERY_STRING) {
    const value = search[key]
    if (typeof value === 'boolean') {
      url.searchParams.set(key, value ? 'true' : 'false')
    } else if (Array.isArray(value)) {
      for (const v of value) {
        url.searchParams.append(key, v)
      }
    } else if (typeof value === 'number') {
      url.searchParams.set(key, `${value}`)
    } else if (value) {
      url.searchParams.set(key, value)
    }
  }
  console.log(`Proxying search to ${url}`)
  return got(url).json<GeneralSearchResponse>()
}
