import React from 'react'
import { SearchOverlay } from './SearchOverlay'
import { QueryParams } from '../hooks/useMultiQueryParams'

type Props = {
  isSearchOpen: boolean
  setIsSearchOpen: (value: boolean) => Promise<void>
  params: QueryParams
  updateParams: (updates: Partial<QueryParams>) => void
  // Drops a debounced search-input URL write that has not fired yet.
  cancelPendingParamsUpdate: () => void
  searchButtonRef: React.RefObject<HTMLButtonElement | null>
}

export function SearchOverlayContainer({
  isSearchOpen,
  setIsSearchOpen,
  params,
  updateParams,
  cancelPendingParamsUpdate,
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
          // A pending input write would restore `search-overlay-open` after this close.
          cancelPendingParamsUpdate()
          setIsSearchOpen(false)
        }}
        // Writes the closed state to the URL and resolves once it lands, so the caller can
        // navigate afterwards. Writing it at all keeps Back from reopening the dialog; waiting
        // for it keeps the write from overlapping the navigation, which Next would cancel.
        onNavigateAway={async () => {
          cancelPendingParamsUpdate()
          await setIsSearchOpen(false)
        }}
      />
    )
  }

  return null
}
