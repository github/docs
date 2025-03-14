import { GeneralSearchResponse, SearchValidationErrorEntry } from 'src/search/types'

export interface SearchContextT {
  search: {
    results?: GeneralSearchResponse
    searchParams: SearchQueryContentT
    validationErrors: SearchValidationErrorEntry[]
  }
}

// Parts of the search query that are set to the search context
export type SearchQueryContentT = {
  query: string
  debug: boolean
}

export type AIReference = {
  url: string
  title: string
  index: string
}
