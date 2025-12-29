import { createContext, useContext } from 'react'
import type { SearchContextT } from '../types'

export const SearchContext = createContext<SearchContextT | null>(null)

export const useSearchContext = (): SearchContextT => {
  const context = useContext(SearchContext)

  if (!context) {
    throw new Error('"useSearchContext" may only be used inside "SearchContext.Provider"')
  }

  return context
}
