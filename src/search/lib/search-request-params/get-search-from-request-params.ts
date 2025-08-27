import type { Request } from 'express'
import { format } from 'node:util'

import { getElasticSearchIndex } from '@/search/lib/elasticsearch-indexes'
import {
  ValidationError,
  getSearchRequestParamsObject,
} from '@/search/lib/search-request-params/search-params-objects'

import type {
  ComputedSearchQueryParams,
  ComputedSearchQueryParamsMap,
  GetSearchRequestReturn,
} from '@/search/lib/search-request-params/types'
import type { SearchTypes, SearchValidationErrorEntry } from '@/search/types'

type ForceParams = {
  [K in keyof ComputedSearchQueryParams]?: ComputedSearchQueryParams[K]
}

// Fetches the Search Params Object based on the type of request and uses that object to validate the passed in request parameters
// For example, if the request is a general search request, the general search params object expects a `page` key, e.g. ?page=1 on the request
// If that key is not present, it will be added to the validation errors array which will result in a 400 to the user.
export function getSearchFromRequestParams<Type extends SearchTypes>(
  req: Request,
  type: Type,
  forceParams: ForceParams = {} as ForceParams,
): GetSearchRequestReturn<Type> {
  const searchParamsObject = getSearchRequestParamsObject(type)

  const searchParams: ComputedSearchQueryParamsMap[Type] = {} as ComputedSearchQueryParamsMap[Type]
  const validationErrors: SearchValidationErrorEntry[] = []

  for (const { key, default_, cast, validate, multiple } of searchParamsObject) {
    if (key in forceParams) {
      ;(searchParams[key] as any) = forceParams[key] as any
      continue
    }

    let value = req.query[key]
    if (!value || (typeof value === 'string' && !value.trim())) {
      if (default_ === undefined) {
        validationErrors.push({ error: `No truthy value for key '${key}'`, key })
        continue
      }
      value = default_
    }
    if (cast) {
      value = cast(value)
    }
    try {
      if (validate && !validate(value)) {
        validationErrors.push({
          error: format('Not a valid value (%O) for key %O', value, key),
          key,
        })
      }
    } catch (err) {
      if (err instanceof ValidationError) {
        validationErrors.push({ error: err.toString(), field: key })
      } else {
        throw err
      }
    }
    if (!multiple && Array.isArray(value)) {
      validationErrors.push({
        error: format('Cannot have multiple values (%O) for key %O', value, key),
        key,
      })
    }

    ;(searchParams[key] as any) = value
  }

  let indexName = ''
  if (!validationErrors.length) {
    const getIndexResults = getElasticSearchIndex(type, searchParams.version, searchParams.language)
    indexName = getIndexResults.indexName
  }

  return { indexName, searchParams, validationErrors }
}
