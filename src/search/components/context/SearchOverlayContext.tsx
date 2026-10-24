import { createContext, useContext, PropsWithChildren } from 'react'
import { useQueryParam } from '@/frame/components/hooks/useQueryParam'

type SearchOverlayState = {
  isSearchOpen: boolean
  // Resolves once the URL write lands; await it before navigating away.
  setIsSearchOpen: (open: boolean) => Promise<void>
}

const SearchOverlayContext = createContext<SearchOverlayState | undefined>(undefined)

export function SearchOverlayContextProvider({ children }: PropsWithChildren) {
  const { queryParam: isSearchOpen, setQueryParam: setIsSearchOpen } = useQueryParam(
    'search-overlay-open',
    true,
  )

  return (
    <SearchOverlayContext.Provider value={{ isSearchOpen, setIsSearchOpen } as SearchOverlayState}>
      {children}
    </SearchOverlayContext.Provider>
  )
}

export const useSearchOverlayContext = () => {
  const ctx = useContext(SearchOverlayContext)
  if (!ctx)
    throw new Error('useSearchOverlayContext must be used inside <SearchOverlayContextProvider>')
  return ctx
}
