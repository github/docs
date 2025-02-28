import { V1_ADDITIONAL_INCLUDES } from '@/search/lib/search-request-params/search-params-objects'

import { SearchTypes, SearchValidationErrorEntry } from '@/search/types'

export type HighlightOptions = 'title' | 'content' | 'content_explicit' | 'term'

export type AdditionalIncludes = (typeof V1_ADDITIONAL_INCLUDES)[number]

export interface ComputedSearchQueryParams {
  query: string
  size: number
  version: string
  language: string
  // These are optional, so we need to use ComputedSearchQueryParamsMap in functions to get the exact types per Search Type
  page?: number
  sort?: string
  highlights?: HighlightOptions[]
  autocomplete?: boolean
  debug?: boolean
  include?: AdditionalIncludes[]
  toplevel?: string[]
  aggregate?: string[]
}

export interface ComputedSearchQueryParamsMap {
  generalSearch: ComputedSearchQueryParams & {
    page: number
    sort: string
    highlights: HighlightOptions[]
    autocomplete: boolean
    debug: boolean
    include: AdditionalIncludes[]
    toplevel: string[]
    aggregate: string[]
  }
  generalAutocomplete: ComputedSearchQueryParams
  aiSearchAutocomplete: ComputedSearchQueryParams
}

export interface SearchRequestQueryParams {
  key: keyof ComputedSearchQueryParams
  default_?: any
  cast?: (value: any) => any
  validate?: (value: any) => boolean
  multiple?: boolean
}

export interface GetSearchRequestReturn<Type extends SearchTypes> {
  indexName: string
  searchParams: ComputedSearchQueryParamsMap[Type]
  validationErrors: SearchValidationErrorEntry[]
}
