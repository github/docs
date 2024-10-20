import { createContext, useContext } from 'react'

import type { SearchT } from '../types'

export type SearchContextT = {
  search: SearchT
}

export const SearchContext = createContext<SearchContextT | null>(null)

export const useSearchContext = (): SearchContextT => {
  const context = useContext(SearchContext)

  if (!context) {
    throw new Error('"useSearchContext" may only be used inside "SearchContext.Provider"')
  }

  return context
}
