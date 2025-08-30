import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'

export type QueryParams = {
  'search-overlay-input': string
  'search-overlay-ask-ai': string // "true" or ""
  debug: string
}

const initialKeys: (keyof QueryParams)[] = [
  'search-overlay-input',
  'search-overlay-ask-ai',
  'debug',
]

// When we need to update 2 query params simultaneously, we can use this hook to prevent race conditions
export function useMultiQueryParams() {
  const router = useRouter()
  const pushTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const getInitialParams = (): QueryParams => {
    const searchParams =
      typeof window !== 'undefined'
        ? new URLSearchParams(window.location.search)
        : new URLSearchParams(router.asPath.split('?')[1] || '')
    const params: QueryParams = {
      'search-overlay-input': searchParams.get('search-overlay-input') || '',
      'search-overlay-ask-ai': searchParams.get('search-overlay-ask-ai') || '',
      debug: searchParams.get('debug') || '',
    }
    return params
  }

  const [params, setParams] = useState<QueryParams>(getInitialParams)

  // Only set the initial query param values on page load, the rest of the time we use React state
  useEffect(() => {
    setParams(getInitialParams())
  }, [router.pathname])

  const updateParams = (updates: Partial<QueryParams>) => {
    const newParams = { ...params, ...updates }
    const [asPathWithoutHash] = router.asPath.split('#')
    const [asPathRoot, asPathQuery = ''] = asPathWithoutHash.split('?')
    const searchParams = new URLSearchParams(asPathQuery)
    initialKeys.forEach((key) => {
      if (key === 'search-overlay-ask-ai') {
        newParams[key] === 'true' ? searchParams.set(key, 'true') : searchParams.delete(key)
      } else {
        newParams[key] ? searchParams.set(key, newParams[key]) : searchParams.delete(key)
      }
    })
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
    pushTimeoutRef.current = setTimeout(() => {
      router.replace(newUrl, undefined, { shallow: true, locale: router.locale, scroll: false })
    }, 100)

    setParams(newParams)
  }

  return { params, updateParams }
}
