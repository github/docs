export type SearchResultHitT = {
  id: string
  url: string
  title: string
  breadcrumbs: string
  highlights: {
    title?: string[]
    content?: string[]
    content_explicit?: string[]
  }
  score?: number
  popularity?: number
  es_url?: string
}

type SearchResultsMeta = {
  found: {
    value: number
    relation: string
  }
  took: {
    query_msec: number
    total_msec: number
  }
  page: number
  size: number
}

type Aggregation = {
  key: string
  count: number
}

export type SearchResultAggregations = {
  [key: string]: Aggregation[]
}

export type SearchResultsT = {
  meta: SearchResultsMeta
  hits: SearchResultHitT[]
  aggregations?: SearchResultAggregations
}

export type SearchQueryT = {
  query: string
  debug: boolean
}

export type SearchValidationErrorT = {
  error: string
  // key: string
}

export type SearchT = {
  search: SearchQueryT
  results?: SearchResultsT
  validationErrors: SearchValidationErrorT[]
}
