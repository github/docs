import { describe, expect, test } from 'vitest'

import {
  buildSearchOptions,
  VIEW_ALL_OPTION_ID,
  SEARCH_DOCS_OPTION_ID,
} from '@/search/components/input/search-options'
import { MAX_REFERENCES_TO_SHOW } from '@/search/lib/ai-search-constants'
import type { AIReference } from '@/search/components/types'
import type { AutocompleteSearchHit, GeneralSearchHit } from '@/search/types'

function generalHits(n: number): GeneralSearchHit[] {
  return Array.from({ length: n }, (_, i) => ({
    title: `Doc ${i}`,
    url: `/doc-${i}`,
  })) as unknown as GeneralSearchHit[]
}

function aiHits(...terms: string[]): AutocompleteSearchHit[] {
  return terms.map((term) => ({ term, highlights: [] })) as unknown as AutocompleteSearchHit[]
}

function references(n: number): AIReference[] {
  return Array.from({ length: n }, (_, i) => ({
    title: `Source ${i}`,
    url: `/source-${i}`,
  })) as unknown as AIReference[]
}

const base = {
  query: 'repository',
  isAskAIState: false,
  searchLoading: false,
  suggestionsHidden: false,
  aiSearchError: false,
  aiCouldNotAnswer: false,
  autoCompleteSearchError: false,
  aiAutocompleteOptions: [] as AutocompleteSearchHit[],
  aiReferences: [] as AIReference[],
  generalSearchResults: [] as GeneralSearchHit[],
  showViewAllResults: false,
  viewAllHref: '/en/search?query=repository',
  viewAllLabel: 'View all 12 results',
}

describe('buildSearchOptions', () => {
  test('ids are unique across every state permutation', () => {
    // The whole model rests on id uniqueness: a duplicate makes aria-activedescendant and
    // the element map ambiguous, silently.
    for (const isAskAIState of [true, false]) {
      for (const aiSearchError of [true, false]) {
        for (const autoCompleteSearchError of [true, false]) {
          for (const aiCouldNotAnswer of [true, false]) {
            for (const generalCount of [0, 3]) {
              for (const showViewAllResults of [true, false]) {
                const { options } = buildSearchOptions({
                  ...base,
                  isAskAIState,
                  aiSearchError,
                  autoCompleteSearchError,
                  aiCouldNotAnswer,
                  aiAutocompleteOptions: aiHits('a', 'b'),
                  aiReferences: references(3),
                  generalSearchResults: generalHits(generalCount),
                  showViewAllResults: showViewAllResults && generalCount > 0,
                })
                const ids = options.map((option) => option.id)
                expect(new Set(ids).size, `duplicate id in ${JSON.stringify(ids)}`).toBe(ids.length)
              }
            }
          }
        }
      }
    }
  })

  test('references are truncated to the render cap', () => {
    // Regression: the old model pushed every reference into the navigable list while only
    // MAX_REFERENCES_TO_SHOW rendered, so arrowing past the cap pointed
    // aria-activedescendant at an element that did not exist.
    const model = buildSearchOptions({
      ...base,
      isAskAIState: true,
      aiReferences: references(MAX_REFERENCES_TO_SHOW + 2),
    })
    expect(model.references).toHaveLength(MAX_REFERENCES_TO_SHOW)
    expect(model.options.filter((option) => option.kind === 'reference')).toHaveLength(
      MAX_REFERENCES_TO_SHOW,
    )
  })

  test('view-all is the last option when present', () => {
    const model = buildSearchOptions({
      ...base,
      aiAutocompleteOptions: aiHits('a'),
      generalSearchResults: generalHits(3),
      showViewAllResults: true,
    })
    expect(model.options.at(-1)?.id).toBe(VIEW_ALL_OPTION_ID)
    expect(model.viewAll?.payload.href).toBe(base.viewAllHref)
  })

  test('no view-all option when it is not shown', () => {
    const model = buildSearchOptions({ ...base, generalSearchResults: generalHits(3) })
    expect(model.viewAll).toBeNull()
    expect(model.options.some((option) => option.id === VIEW_ALL_OPTION_ID)).toBe(false)
  })

  test('search-docs and view-all can never coexist', () => {
    // They are mutually exclusive by construction: search-docs only appears when there are
    // no general results, and view-all only when there are some.
    const model = buildSearchOptions({
      ...base,
      autoCompleteSearchError: true,
      generalSearchResults: [],
      showViewAllResults: true,
    })
    const kinds = model.options.map((option) => option.kind)
    expect(kinds).toContain('search-docs')
    expect(kinds).not.toContain('view-all')
  })

  test('no-results is reported as a flag, not as an option', () => {
    // Keeping it out of the model is what lets the arrow keys stay a plain step with no
    // skip rule — the old implementation carried a skip arm in both directions for it.
    const model = buildSearchOptions({ ...base, aiSearchError: true })
    expect(model.noResults).toBe(true)
    expect(model.general).toHaveLength(0)
    expect(model.options).toHaveLength(0)
  })

  test('groupRank is contiguous from zero within each kind', () => {
    const model = buildSearchOptions({
      ...base,
      aiAutocompleteOptions: aiHits('a', 'b'),
      generalSearchResults: generalHits(4),
      showViewAllResults: true,
    })
    // The user's own query leads the AI rows, so there is one more than was supplied.
    expect(model.ai.map((option) => option.groupRank)).toEqual([0, 1, 2])
    expect(model.general.map((option) => option.groupRank)).toEqual([0, 1, 2, 3])
  })

  test('general ids do not shift when the AI group above them changes size', () => {
    // Under the old offset scheme a docs row's id moved whenever the AI group grew, which
    // is what made the ids unstable to assert against.
    const withoutAI = buildSearchOptions({ ...base, generalSearchResults: generalHits(2) })
    const withAI = buildSearchOptions({
      ...base,
      aiAutocompleteOptions: aiHits('a', 'b', 'c'),
      generalSearchResults: generalHits(2),
    })
    expect(withoutAI.general.map((o) => o.id)).toEqual(withAI.general.map((o) => o.id))
  })

  test('the query row is dropped from AI suggestions when it duplicates the query', () => {
    const model = buildSearchOptions({
      ...base,
      query: 'repository',
      aiAutocompleteOptions: aiHits('repository', 'other'),
    })
    const terms = model.ai.map((option) => option.payload.term)
    expect(terms).toEqual(['repository', 'other'])
  })

  test('an empty query produces no AI rows', () => {
    const model = buildSearchOptions({ ...base, query: '   ', aiAutocompleteOptions: [] })
    expect(model.ai).toHaveLength(0)
    expect(model.noResults).toBe(false)
  })

  test('ask-AI state with couldNotAnswer exposes no reference options', () => {
    const model = buildSearchOptions({
      ...base,
      isAskAIState: true,
      aiCouldNotAnswer: true,
      aiReferences: references(3),
    })
    expect(model.references).toHaveLength(0)
  })

  test('the search-docs row carries the stable singleton id', () => {
    const model = buildSearchOptions({ ...base, autoCompleteSearchError: true })
    expect(model.general[0].id).toBe(SEARCH_DOCS_OPTION_ID)
  })

  test('ask-AI state with an AI error exposes no reference options', () => {
    // The answer, and with it the source rows, does not render on an AI error.
    const model = buildSearchOptions({
      ...base,
      isAskAIState: true,
      aiSearchError: true,
      aiReferences: references(3),
    })
    expect(model.references).toHaveLength(0)
    expect(model.options.some((option) => option.kind === 'reference')).toBe(false)
  })

  test('rows hidden behind the spinner leave the arrow-key order, view-all stays', () => {
    const model = buildSearchOptions({
      ...base,
      suggestionsHidden: true,
      aiAutocompleteOptions: aiHits('how do I create a repository'),
      generalSearchResults: generalHits(3),
      showViewAllResults: true,
    })
    expect(model.options.map((option) => option.id)).toEqual([VIEW_ALL_OPTION_ID])
    // The renderer's slices are untouched, so the rows come back unchanged afterwards.
    expect(model.general).toHaveLength(3)
  })
})
