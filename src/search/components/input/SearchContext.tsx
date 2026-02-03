import { createContext, useContext, RefObject, SetStateAction, MutableRefObject } from 'react'
import type { AIReference } from '../types'
import type { AutocompleteSearchHit, GeneralSearchHit } from '@/search/types'

export interface AutocompleteSearchHitWithUserQuery extends AutocompleteSearchHit {
  isUserQuery?: boolean
}

export interface GeneralSearchHitWithOptions extends GeneralSearchHit {
  isViewAllResults?: boolean
  isNoResultsFound?: boolean
  isSearchDocsOption?: boolean
}

export interface AskAIState {
  isAskAIState: boolean
  aiQuery: string
  debug: boolean
  currentVersion: string
  setAISearchError: (isError?: boolean) => void
  references: AIReference[]
  setReferences: (value: SetStateAction<AIReference[]>) => void
  referencesIndexOffset: number
  referenceOnSelect: (url: string) => void
  askAIEventGroupId: MutableRefObject<string>
  aiSearchError: boolean
  aiCouldNotAnswer: boolean
  setAICouldNotAnswer: (value: boolean) => void
}

export interface SearchContextType {
  t: any
  generalSearchOptions: GeneralSearchHitWithOptions[]
  aiOptionsWithUserInput: AutocompleteSearchHitWithUserQuery[]
  generalSearchResultOnSelect: (selectedOption: GeneralSearchHit) => void
  aiAutocompleteOnSelect: (selectedOption: AutocompleteSearchHit) => void
  performGeneralSearch: () => void
  selectedIndex: number
  listElementsRef: RefObject<Array<HTMLLIElement | null>>
  askAIState: AskAIState
  showSpinner: boolean
  searchLoading: boolean
  previousSuggestionsListHeight: number | string
}

export const SearchContext = createContext<SearchContextType | null>(null)

export const useSearchContext = () => {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchContext.Provider')
  }
  return context
}
