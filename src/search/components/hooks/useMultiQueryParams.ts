import { useRouter } from 'next/router'
import { useState, useEffect, useRef, useCallback } from 'react'

export type QueryParams = {
  'search-overlay-input': string
  'search-overlay-ask-ai': string // "true" or ""
  debug: string
  'articles-category': string
  'articles-filter': string
  'articles-page': string
}

const initialKeys: (keyof QueryParams)[] = [
  // Used to persist search state
  'search-overlay-input',
  'search-overlay-ask-ai',
  // Used to debug search result
  'debug',
  // Used to filter category and search results of Articles on landing pages
  'articles-category',
  'articles-filter',
  'articles-page',
]

// When we need to update 2 query params simultaneously, we can use this hook to prevent race conditions
export function useMultiQueryParams(options?: {
  useHistory?: boolean
  excludeFromHistory?: (keyof QueryParams)[]
}) {
  const router = useRouter()
  const pushTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const useHistory = options?.useHistory ?? false
  // When using browser history, exclude these params from being updated on back/forward navigation (like search input which causes race conditions)
  const excludeFromHistory = options?.excludeFromHistory ?? []

  const getInitialParams = (): QueryParams => {
    const searchParams =
      typeof window !== 'undefined'
        ? new URLSearchParams(window.location.search)
        : new URLSearchParams(router.asPath.split('?')[1] || '')
    const params: QueryParams = {
      'search-overlay-input': searchParams.get('search-overlay-input') || '',
      'search-overlay-ask-ai': searchParams.get('search-overlay-ask-ai') || '',
      debug: searchParams.get('debug') || '',
      'articles-category': searchParams.get('articles-category') || '',
      'articles-filter': searchParams.get('articles-filter') || '',
      'articles-page': searchParams.get('articles-page') || '',
    }
    return params
  }

  const [params, setParams] = useState<QueryParams>(getInitialParams)

  // Only set the initial query param values on page load, the rest of the time we use React state
  useEffect(() => {
    setParams(getInitialParams())
  }, [router.pathname])

  // Listen to browser back/forward button navigation (only if history is being used)
  useEffect(() => {
    if (!useHistory) return

    const handleRouteChange = () => {
      // When the route changes (e.g., back button), update state from URL
      // But preserve excluded params from current state to avoid race conditions
      setParams((currentParams) => {
        const newParams = getInitialParams()
        // Keep excluded params from current state instead of reading from URL
        for (const key of excludeFromHistory) {
          newParams[key] = currentParams[key]
        }
        return newParams
      })
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events, useHistory, excludeFromHistory])

  const updateParams = useCallback(
    (updates: Partial<QueryParams>, shouldPushHistory = false) => {
      // Use functional state update to avoid depending on params in the closure
      setParams((currentParams) => {
        const newParams = { ...currentParams, ...updates }
        const [asPathWithoutHash] = router.asPath.split('#')
        const [asPathRoot, asPathQuery = ''] = asPathWithoutHash.split('?')
        const searchParams = new URLSearchParams(asPathQuery)
        for (const key of initialKeys) {
          if (key === 'search-overlay-ask-ai') {
            if (newParams[key] === 'true') {
              searchParams.set(key, 'true')
            } else {
              searchParams.delete(key)
            }
          } else {
            if (newParams[key]) {
              searchParams.set(key, newParams[key])
            } else {
              searchParams.delete(key)
            }
          }
        }
        const paramsString = searchParams.toString() ? `?${searchParams.toString()}` : ''
        let newUrl = `${asPathRoot}${paramsString}`
        if (asPathRoot !== '/' && router.locale) {
          newUrl = `${router.locale}${asPathRoot}${paramsString}`
        }
        if (!newUrl.startsWith('/')) {
          newUrl = `/${newUrl}`
        }

        // Debounce the router push so we don't push a new URL for every keystroke
        if (pushTimeoutRef.current) clearTimeout(pushTimeoutRef.current)
        pushTimeoutRef.current = setTimeout(async () => {
          // Always preserve scroll position during router update to prevent jumps
          // Component-level scroll logic (like pagination scroll) will handle intentional scrolling
          const scrollY = window.scrollY
          const scrollX = window.scrollX

          // Use router.push for history entries (category/page changes), router.replace for others (search)
          const routerMethod = shouldPushHistory ? router.push : router.replace
          await routerMethod(newUrl, undefined, {
            shallow: true,
            locale: router.locale,
            scroll: false,
          })

          // Restore scroll position after router update
          // This prevents unintended scrolling; intentional scrolling is handled by components
          window.scrollTo(scrollX, scrollY)
        }, 100)

        return newParams
      })
    },
    [router],
  )

  return { params, updateParams }
}
