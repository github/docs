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
  'search-overlay-input',
  'search-overlay-ask-ai',
  'debug',
  // Landing pages filter article lists with these keys.
  'articles-category',
  'articles-filter',
  'articles-page',
]

// Updating related query params in one state change prevents router races.
export function useMultiQueryParams(options?: {
  useHistory?: boolean
  excludeFromHistory?: (keyof QueryParams)[]
}) {
  const router = useRouter()
  const pushTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const useHistory = options?.useHistory ?? false
  // These keys keep current React state during back and forward navigation to avoid URL races.
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

  // React state owns query params after the route path initializes them.
  useEffect(() => {
    setParams(getInitialParams())
  }, [router.pathname])

  useEffect(() => {
    if (!useHistory) return

    const handleRouteChange = () => {
      // Preserve excluded params from current state during back and forward navigation.
      setParams((currentParams) => {
        const newParams = getInitialParams()
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
      // A functional update keeps params out of this callback's dependencies.
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
          // Preserve scroll position so component scroll logic stays in control.
          const scrollY = window.scrollY
          const scrollX = window.scrollX

          // Category and page changes push history entries; search edits replace the current entry.
          const routerMethod = shouldPushHistory ? router.push : router.replace
          await routerMethod(newUrl, undefined, {
            shallow: true,
            locale: router.locale,
            scroll: false,
          })

          window.scrollTo(scrollX, scrollY)
        }, 100)

        return newParams
      })
    },
    [router],
  )

  return { params, updateParams }
}
