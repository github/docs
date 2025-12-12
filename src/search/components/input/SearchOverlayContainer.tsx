import React from 'react'
import { SearchOverlay } from './SearchOverlay'
import { QueryParams } from '../hooks/useMultiQueryParams'

type Props = {
  isSearchOpen: boolean
  setIsSearchOpen: (value: boolean) => void
  params: QueryParams
  updateParams: (updates: Partial<QueryParams>) => void
  searchButtonRef: React.RefObject<HTMLButtonElement>
}

export function SearchOverlayContainer({
  isSearchOpen,
  setIsSearchOpen,
  params,
  updateParams,
  searchButtonRef,
}: Props) {
  const debug = params.debug === 'true'

  if (isSearchOpen) {
    return (
      <SearchOverlay
        searchOverlayOpen={isSearchOpen}
        parentRef={searchButtonRef}
        debug={debug}
        params={params}
        updateParams={updateParams}
        onClose={() => {
          setIsSearchOpen(false)
        }}
      />
    )
  }

  return null
}
