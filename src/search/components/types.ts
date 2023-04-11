export type SearchResultHitT = {
  id: string
  url: string
  title: string
  breadcrumbs: string
  highlights: {
    title?: string[]
    content?: string[]
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

export type SearchResultsT = {
  meta: SearchResultsMeta
  hits: SearchResultHitT[]
}
