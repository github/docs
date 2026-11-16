import { createContext, useContext, SetStateAction, MutableRefObject } from 'react'
import type { AIReference } from '../types'
import type { AutocompleteSearchHit, GeneralSearchHit } from '@/search/types'
import type { SearchOption, SearchOptionModel } from './search-options'

export type TranslationFunction = (
  strings: TemplateStringsArray | string,
  ...values: unknown[]
) => string

export interface AutocompleteSearchHitWithUserQuery extends AutocompleteSearchHit {
  isUserQuery?: boolean
}

export interface GeneralSearchHitWithOptions extends GeneralSearchHit {
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
  askAIEventGroupId: MutableRefObject<string>
  aiSearchError: boolean
  aiCouldNotAnswer: boolean
  setAICouldNotAnswer: (value: boolean) => void
}

export interface SearchContextType {
  t: TranslationFunction
  model: SearchOptionModel
  // null means nothing is selected. Drives aria-activedescendant.
  activeId: string | null
  // Shared by mouse and keyboard, so both dispatch the same way.
  activate: (option: SearchOption) => void
  // One stable callback for every row, keyed by the element's own id.
  registerOption: (element: HTMLElement | null) => (() => void) | void
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
