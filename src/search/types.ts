import type { SearchTotalHits } from '@elastic/elasticsearch/lib/api/types'

import type {
  AdditionalIncludes,
  ComputedSearchQueryParamsMap,
} from '@/search/lib/search-request-params/types'

export type SearchTypes = 'generalSearch' | 'generalAutocomplete' | 'aiSearchAutocomplete'

// Responses to API routes
export interface GeneralSearchResponse {
  meta: SearchResultsMeta & {
    page: number
  }
  hits: GeneralSearchHit[]
  aggregations?: SearchResultAggregations | null
}

export interface AutocompleteSearchResponse {
  meta: SearchResultsMeta
  hits: AutocompleteSearchHit[]
}

export interface CombinedSearchResponse {
  aiAutocompleteSuggestions: AutocompleteSearchResponse
  generalSearchResults: GeneralSearchResponse
}

// Response to middleware /search route
export interface SearchOnReqObject<Type extends SearchTypes> {
  searchParams: ComputedSearchQueryParamsMap[Type]
  validationErrors: SearchValidationErrorEntry[]
  results?: GeneralSearchResponse
}

export interface SearchValidationErrorEntry {
  error: string
  key?: string
  field?: string
}

// - - - Types for building the search responses - - -
export interface GeneralSearchHitWithoutIncludes {
  id: string
  url: string
  title: string
  breadcrumbs: string
  topics?: string[]
  score?: number
  popularity?: number
  es_url?: string
  highlights: {
    [key: string]: string[]
  }
}

export type GeneralSearchHit = GeneralSearchHitWithoutIncludes & {
  [key in AdditionalIncludes]?: string
}

export interface AutocompleteSearchHit {
  term?: string
  highlights: string[]
}

export type SearchAggregation = {
  key: string
  count: number
}

export type SearchResultAggregations = {
  [key: string]: SearchAggregation[]
}

type SearchResultsMeta = {
  found: SearchTotalHits
  took: {
    query_msec: number
    total_msec: number
  }
  size: number
}
