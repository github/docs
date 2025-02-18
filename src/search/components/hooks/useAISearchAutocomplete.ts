import { useState, useRef, useCallback, useEffect } from 'react'
import debounce from 'lodash/debounce'
import { NextRouter } from 'next/router'
import { AutocompleteSearchHit } from '@/search/types'
import { executeAIAutocompleteSearch } from '@/search/components/helpers/execute-search-actions'

type AutocompleteOptions = {
  aiAutocompleteOptions: AutocompleteSearchHit[]
}

type UseAutocompleteProps = {
  router: NextRouter
  currentVersion: string
  debug: boolean
  eventGroupIdRef: React.MutableRefObject<string>
}

type UseAutocompleteReturn = {
  autoCompleteOptions: AutocompleteOptions
  searchLoading: boolean
  setSearchLoading: (loading: boolean) => void
  searchError: boolean
  updateAutocompleteResults: (query: string) => void
  clearAutocompleteResults: () => void
}

const DEBOUNCE_TIME = 300 // In milliseconds

// Results are only cached for the current session
// We cache results so if a user presses backspace, we can show the results immediately without burdening the API
let sessionCache = {} as Record<string, AutocompleteOptions>

// Helper to incorporate version & locale into the cache key
function getCacheKey(query: string, version: string, locale: string) {
  return `${query}__${version}__${locale}`
}

// Helpers surrounding the ai-search-autocomplete request to lessen the # of requests made to our API
// There are 3 methods for reducing the # of requests:
// 1. Debouncing the request to prevent multiple requests while the user is typing
// 2. Caching the results of the request so if the user presses backspace, we can show the results immediately without burdening the API
// 3. Aborting in-flight requests if the user types again before the previous request has completed
export function useAISearchAutocomplete({
  router,
  currentVersion,
  debug,
  eventGroupIdRef,
}: UseAutocompleteProps): UseAutocompleteReturn {
  const [autoCompleteOptions, setAutoCompleteOptions] = useState<AutocompleteOptions>({
    aiAutocompleteOptions: [],
  })
  const [searchLoading, setSearchLoading] = useState<boolean>(true)
  const [searchError, setSearchError] = useState<boolean>(false)

  // Support for aborting in-flight requests (e.g. user starts typing while a request is still pending)
  const abortControllerRef = useRef<AbortController | null>(null)

  // Debounce to prevent requests while user is (quickly) typing
  const debouncedFetchRef = useRef<ReturnType<typeof debounce> | null>(null)

  useEffect(() => {
    debouncedFetchRef.current = debounce((value: string) => {
      fetchAutocompleteResults(value)
    }, DEBOUNCE_TIME) // 300ms debounce

    return () => {
      debouncedFetchRef.current?.cancel()
    }
  }, [])

  const fetchAutocompleteResults = useCallback(
    async (queryValue: string) => {
      // Cancel any ongoing request
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }

      // Build cache key based on query, version, and locale
      const cacheKey = getCacheKey(queryValue, currentVersion, router.locale || 'en')

      // Check if the result is in cache
      if (sessionCache[cacheKey]) {
        setAutoCompleteOptions(sessionCache[cacheKey])
        setSearchLoading(false)
        return
      }

      setSearchLoading(true)

      // Create a new AbortController for the new request
      const controller = new AbortController()
      abortControllerRef.current = controller

      try {
        const { aiAutocompleteOptions } = await executeAIAutocompleteSearch(
          router,
          currentVersion,
          queryValue,
          debug,
          controller.signal, // Pass in the signal to allow the request to be aborted
          eventGroupIdRef.current,
        )

        const results: AutocompleteOptions = {
          aiAutocompleteOptions,
        }

        // Update cache
        sessionCache[cacheKey] = results

        // Update state with fetched results
        setAutoCompleteOptions(results)
        setSearchLoading(false)
      } catch (error: any) {
        if (error.name === 'AbortError') {
          return
        }
        console.error(error)
        setSearchError(true)
        setSearchLoading(false)
      }
    },
    [router, currentVersion, debug],
  )

  // Entry function called when the user types in the search input
  const updateAutocompleteResults = useCallback((queryValue: string) => {
    // When the input is empty, don't debounce the request
    // We want to immediately show the autocomplete options (that may be cached)
    if (queryValue === '') {
      debouncedFetchRef.current?.cancel()
      fetchAutocompleteResults('')
      return
    } else {
      debouncedFetchRef.current?.(queryValue)
    }
  }, [])

  const clearAutocompleteResults = useCallback(() => {
    setAutoCompleteOptions({
      aiAutocompleteOptions: [],
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
    autoCompleteOptions,
    searchLoading,
    setSearchLoading,
    searchError,
    updateAutocompleteResults,
    clearAutocompleteResults,
  }
}
