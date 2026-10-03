// /search page requests attach general-search results for search-results.tsx.
// /api/search/v1 requests use search-routes.ts instead.

import { fetchWithRetry } from '@/frame/lib/fetch-utils'
import { Request, Response, NextFunction } from 'express'
import { createLogger } from '@/observability/logger'
import { errors } from '@elastic/elasticsearch'
import statsd, { adaptForTimer } from '@/observability/lib/statsd'

import { getPathWithoutVersion, getPathWithoutLanguage } from '@/frame/lib/path-utils'
import { getGeneralSearchResults } from '@/search/lib/get-elasticsearch-results/general-search'
import { getSearchFromRequestParams } from '@/search/lib/search-request-params/get-search-from-request-params'

import type { ComputedSearchQueryParamsMap } from '@/search/lib/search-request-params/types'
import type {
  GeneralSearchResponse,
  SearchOnReqObject,
  SearchTypes,
  SearchValidationErrorEntry,
} from '@/search/types'

const logger = createLogger(import.meta.url)

interface Context<Type extends SearchTypes> {
  currentVersion: string
  currentLanguage: string
  search: SearchOnReqObject<Type>
}

interface CustomRequest<Type extends SearchTypes> extends Request {
  pagePath: string
  context: Context<Type>
}

// contextualizeGeneralSearch includes toplevel for category chips. Elasticsearch
// already returns toplevel in _source_includes, so this needs no mapping change
// or reindex. The default include array comes from module-level default_: [], so
// in-place mutation would leak toplevel into later requests, including public
// /api/search/v1.
export default async function contextualizeGeneralSearch(
  req: CustomRequest<'generalSearch'>,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const { pagePath } = req
  if (getPathWithoutLanguage(getPathWithoutVersion(pagePath)) !== '/search') {
    return next()
  }

  // Earlier middleware sets language and version on req.context.
  const { indexName, searchParams, validationErrors } = getSearchFromRequestParams(
    req,
    'generalSearch',
    {
      version: req.context.currentVersion,
      language: req.context.currentLanguage,
    },
  )

  if (validationErrors.map((error: SearchValidationErrorEntry) => error.key).includes('query')) {
    if (Array.isArray(searchParams.query)) {
      searchParams.query = searchParams.query[0]
    } else if (!searchParams.query) {
      // Cast missing query to an empty string so search page rendering gets a string.
      searchParams.query = ''
    }
  }

  searchParams.aggregate = ['toplevel']

  // Category chips need toplevel; assign a new include array to avoid shared defaults.
  if (!searchParams.include.includes('toplevel')) {
    searchParams.include = [...searchParams.include, 'toplevel']
  }

  req.context.search = {
    searchParams,
    validationErrors,
  }

  if (!validationErrors.length && searchParams.query) {
    // Local development proxies to production when ELASTICSEARCH_URL is unset.
    if (!process.env.ELASTICSEARCH_URL) {
      if (searchParams.aggregate && searchParams.toplevel && searchParams.toplevel.length > 0) {
        // Fetch unfiltered aggregations separately when toplevel filters apply.
        const searchWithoutFilter = Object.fromEntries(
          Object.entries(searchParams).filter(([key]) => key !== 'toplevel'),
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
      const timed = statsd.asyncTimer(
        adaptForTimer(getGeneralSearchResults),
        'contextualize.search',
        tags,
      )
      const getGeneralSearchArgs = {
        indexName,
        searchParams,
      }
      try {
        if (searchParams.aggregate && searchParams.toplevel && searchParams.toplevel.length > 0) {
          // Fetch unfiltered aggregations separately when toplevel filters apply.
          const searchWithoutFilter = Object.fromEntries(
            Object.entries(searchParams).filter(([key]) => key !== 'toplevel'),
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
        // Rethrow Elasticsearch response errors as plain errors so users get a 500.
        if (error instanceof errors.ResponseError) {
          logger.error('Error calling getSearchResults', {
            indexName,
            searchParams,
            error,
            meta: error?.meta?.body,
          })
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
  // Local proxied search must forward include so category chips receive toplevel.
  'include',
]

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
  // client_name marks local proxy requests as first-party for analytics validation.
  url.searchParams.set('client_name', 'docs.github.com-client')
  logger.info('Proxying search', { url: url.toString() })

  const response = await fetchWithRetry(url.toString())
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`)
  }
  return response.json() as Promise<GeneralSearchResponse>
}
