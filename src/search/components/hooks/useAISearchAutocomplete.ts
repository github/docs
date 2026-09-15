import { useState, useRef, useCallback, useEffect } from 'react'
import debounce from 'lodash/debounce'
import { NextRouter } from 'next/router'
import { AutocompleteSearchHit, GeneralSearchHit } from '@/search/types'
import { executeCombinedSearch } from '@/search/components/helpers/execute-search-actions'

type SearchOptions = {
  aiAutocompleteOptions: AutocompleteSearchHit[]
  generalSearchResults: GeneralSearchHit[]
  totalGeneralSearchResults: number
}

type UseCombinedSearchProps = {
  router: NextRouter
  currentVersion: string
  debug: boolean
}

type UseCombinedSearchReturn = {
  autoCompleteOptions: SearchOptions
  searchLoading: boolean
  setSearchLoading: (loading: boolean) => void
  searchError: boolean
  updateAutocompleteResults: (query: string) => void
  clearAutocompleteResults: () => void
}

const DEBOUNCE_TIME = 100 // In milliseconds

// Cached for the current page session only, so backspacing reuses results
// instead of hitting the API again.
const sessionCache = {} as Record<string, SearchOptions>

function getCacheKey(query: string, version: string, locale: string) {
  return `${query}__${version}__${locale}`
}

// Three things keep the number of ai-search-autocomplete requests down:
// debouncing while the user types, caching so backspace is free, and each new
// fetch aborting the previous in-flight one.
export function useCombinedSearchResults({
  router,
  currentVersion,
  debug,
}: UseCombinedSearchProps): UseCombinedSearchReturn {
  const [searchOptions, setSearchOptions] = useState<SearchOptions>({
    aiAutocompleteOptions: [],
    generalSearchResults: [],
    totalGeneralSearchResults: 0,
  })
  const [searchLoading, setSearchLoading] = useState<boolean>(true)
  const [searchError, setSearchError] = useState<boolean>(false)

  const abortControllerRef = useRef<AbortController | null>(null)

  const debouncedFetchRef = useRef<ReturnType<typeof debounce> | null>(null)

  useEffect(() => {
    debouncedFetchRef.current = debounce((value: string) => {
      fetchAutocompleteResults(value)
    }, DEBOUNCE_TIME)

    return () => {
      debouncedFetchRef.current?.cancel()
    }
  }, [])

  const fetchAutocompleteResults = useCallback(
    async (queryValue: string) => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }

      setSearchLoading(true)

      const cacheKey = getCacheKey(queryValue, currentVersion, router.locale || 'en')

      if (sessionCache[cacheKey]) {
        setSearchOptions(sessionCache[cacheKey])
        setSearchLoading(false)
        return
      }

      if (searchError) {
        setSearchOptions({
          aiAutocompleteOptions: [],
          generalSearchResults: [],
          totalGeneralSearchResults: 0,
        })
        setSearchLoading(false)
        return
      }

      const controller = new AbortController()
      abortControllerRef.current = controller

      try {
        const { aiAutocompleteOptions, generalSearchResults } = await executeCombinedSearch(
          router,
          currentVersion,
          queryValue,
          debug,
          controller.signal, // Pass in the signal to allow the request to be aborted
        )

        const results = {
          aiAutocompleteOptions: aiAutocompleteOptions.hits,
          generalSearchResults: generalSearchResults?.hits || [],
          totalGeneralSearchResults: generalSearchResults?.meta?.found?.value || 0,
        }

        sessionCache[cacheKey] = results

        setSearchOptions(results)
        setSearchLoading(false)
      } catch (error: unknown) {
        // Aborted fetch() requests reject with a DOMException (not always an
        // Error instance), so match on the name rather than the prototype.
        if (
          typeof error === 'object' &&
          error !== null &&
          'name' in error &&
          (error as { name?: unknown }).name === 'AbortError'
        ) {
          return
        }
        console.error(error)
        setSearchError(true)
        setSearchOptions({
          aiAutocompleteOptions: [],
          generalSearchResults: [],
          totalGeneralSearchResults: 0,
        })
        setSearchLoading(false)
      }
    },
    [router, currentVersion, debug],
  )

  // Entry function called when the user types in the search input
  const updateAutocompleteResults = useCallback((queryValue: string) => {
    // Don't debounce an empty input: show the (possibly cached) options at once.
    if (queryValue === '') {
      debouncedFetchRef.current?.cancel()
      fetchAutocompleteResults('')
      return
    } else {
      debouncedFetchRef.current?.(queryValue)
    }
  }, [])

  const clearAutocompleteResults = useCallback(() => {
    setSearchOptions({
      aiAutocompleteOptions: [],
      generalSearchResults: [],
      totalGeneralSearchResults: 0,
    })
    setSearchLoading(false)
    setSearchError(false)
  }, [])

  // Cleanup function to cancel any ongoing requests when unmounting
  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort()
    }
  }, [])

  return {
    autoCompleteOptions: searchOptions,
    searchLoading,
    setSearchLoading,
    searchError,
    updateAutocompleteResults,
    clearAutocompleteResults,
  }
}
