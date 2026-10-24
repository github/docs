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

// Each search type owns its query-parameter schema. API callers turn validation
// errors into 400s; /search middleware renders them.
// General search defaults missing page values to 1.
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
      ;(searchParams[key] as unknown) = forceParams[key]
      continue
    }

    let value: unknown = req.query[key]
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

    ;(searchParams[key] as unknown) = value
  }

  let indexName = ''
  if (!validationErrors.length) {
    const getIndexResults = getElasticSearchIndex(type, searchParams.version, searchParams.language)
    indexName = getIndexResults.indexName
  }

  return { indexName, searchParams, validationErrors }
}
