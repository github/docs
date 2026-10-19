import { GeneralSearchResponse, SearchValidationErrorEntry } from '@/search/types'

export interface SearchContextT {
  search: {
    results?: GeneralSearchResponse
    searchParams: SearchQueryContentT
    validationErrors: SearchValidationErrorEntry[]
  }
}

export type SearchQueryContentT = {
  query: string
  debug: boolean
}

export type AIReference = {
  url: string
  title: string
  index: string
}
