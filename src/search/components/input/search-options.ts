import type { AIReference } from '../types'
import type { AutocompleteSearchHit, GeneralSearchHit } from '@/search/types'
import { MAX_REFERENCES_TO_SHOW } from '@/search/lib/ai-search-constants'

import type {
  AutocompleteSearchHitWithUserQuery,
  GeneralSearchHitWithOptions,
} from './SearchContext'

export type SearchOptionKind = 'ai' | 'reference' | 'general' | 'search-docs' | 'view-all'

type OptionBase = {
  // The DOM id and the only value aria-activedescendant takes. Set only here, so no renderer
  // computes it from an offset.
  id: string
  // 0-based rank within this option's kind.
  groupRank: number
}

export type SearchOption =
  | (OptionBase & { kind: 'ai'; payload: AutocompleteSearchHitWithUserQuery })
  | (OptionBase & { kind: 'reference'; payload: AIReference })
  | (OptionBase & { kind: 'general'; payload: GeneralSearchHitWithOptions })
  | (OptionBase & { kind: 'search-docs'; payload: GeneralSearchHitWithOptions })
  | (OptionBase & { kind: 'view-all'; payload: { href: string; label: string } })

export type AiOption = Extract<SearchOption, { kind: 'ai' }>
export type ReferenceOption = Extract<SearchOption, { kind: 'reference' }>
export type GeneralOption = Extract<SearchOption, { kind: 'general' | 'search-docs' }>
export type ViewAllOption = Extract<SearchOption, { kind: 'view-all' }>

export type SearchOptionModel = {
  // Every arrow-navigable row, in render order. Each renders exactly one role="option".
  options: SearchOption[]
  // Slices of `options` that share object identities, not copies.
  ai: AiOption[]
  references: ReferenceOption[]
  general: GeneralOption[]
  viewAll: ViewAllOption | null
  // Render "No results found" as plain text, not an option, and announce it.
  noResults: boolean
}

export const VIEW_ALL_OPTION_ID = 'search-option-view-all'
export const SEARCH_DOCS_OPTION_ID = 'search-option-search-docs'

type BuildInput = {
  query: string
  isAskAIState: boolean
  searchLoading: boolean
  // The spinner replaces the suggestion rows, so they leave the arrow order.
  // The pinned view-all renders outside the spinner and stays.
  suggestionsHidden: boolean
  aiSearchError: boolean
  aiCouldNotAnswer: boolean
  autoCompleteSearchError: boolean
  aiAutocompleteOptions: AutocompleteSearchHit[]
  aiReferences: AIReference[]
  generalSearchResults: GeneralSearchHit[]
  showViewAllResults: boolean
  viewAllHref: string
  viewAllLabel: string
}

// Defines everything the arrow keys can reach. Stays pure and React-free, so tests can cover
// every state and the calling memo has a complete dependency list.
// Never count options from the DOM, or aria-activedescendant can name rows that don't exist.
export function buildSearchOptions({
  query,
  isAskAIState,
  searchLoading,
  suggestionsHidden,
  aiSearchError,
  aiCouldNotAnswer,
  autoCompleteSearchError,
  aiAutocompleteOptions,
  aiReferences,
  generalSearchResults,
  showViewAllResults,
  viewAllHref,
  viewAllLabel,
}: BuildInput): SearchOptionModel {
  const hasQuery = query.trim() !== ''

  const ai: AiOption[] = []
  const references: ReferenceOption[] = []
  const general: GeneralOption[] = []
  let viewAll: ViewAllOption | null = null
  let noResults = false

  if (isAskAIState) {
    // On an AI error, neither the answer nor its source rows render.
    if (!aiCouldNotAnswer && !aiSearchError) {
      // Truncate here, not in the renderer, so aria-activedescendant never names a missing row.
      const shown = aiReferences.slice(0, MAX_REFERENCES_TO_SHOW)
      for (const [index, reference] of shown.entries()) {
        references.push({
          kind: 'reference',
          id: `search-option-reference-${index}`,
          groupRank: index,
          payload: reference,
        })
      }
    }
  } else if (!aiSearchError) {
    // The user's own query leads the AI rows; drop the suggestion that duplicates it.
    const aiPayloads: AutocompleteSearchHitWithUserQuery[] = [
      ...(hasQuery
        ? [
            {
              term: query,
              title: query,
              highlights: [],
              isUserQuery: true,
            } as unknown as AutocompleteSearchHitWithUserQuery,
          ]
        : []),
      ...aiAutocompleteOptions.filter((option) => option.term !== query),
    ]
    for (const [index, payload] of aiPayloads.entries()) {
      ai.push({
        kind: 'ai',
        id: `search-option-ai-${index}`,
        groupRank: index,
        payload,
      })
    }
  }

  if (generalSearchResults.length > 0) {
    for (const [index, payload] of generalSearchResults.entries()) {
      general.push({
        kind: 'general',
        id: `search-option-general-${index}`,
        groupRank: index,
        payload,
      })
    }
    if (showViewAllResults) {
      viewAll = {
        kind: 'view-all',
        id: VIEW_ALL_OPTION_ID,
        groupRank: 0,
        payload: { href: viewAllHref, label: viewAllLabel },
      }
    }
  } else if (autoCompleteSearchError) {
    // Results failed, so offer a full docs search for the query. Never coexists with view-all.
    if (hasQuery) {
      general.push({
        kind: 'search-docs',
        id: SEARCH_DOCS_OPTION_ID,
        groupRank: 0,
        payload: { title: query } as GeneralSearchHitWithOptions,
      })
    }
  } else if (hasQuery && !searchLoading) {
    noResults = true
  }

  // Must match render order: AI rows or references, then docs rows, then view-all last.
  const rows = suggestionsHidden ? [] : [...ai, ...references, ...general]
  const options = [...rows, ...(viewAll ? [viewAll] : [])]

  return { options, ai, references, general, viewAll, noResults }
}
