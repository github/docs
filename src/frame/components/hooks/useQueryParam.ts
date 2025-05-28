// A generic hook for getting and setting a query parameter without reloading the page
// The `queryParam` variable returned from this method are stateful and will be set to the query param on page load

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { parseDebug } from '@/search/components/hooks/useQuery'

type UseQueryParamReturn<T extends string | boolean> = {
  debug: boolean
  queryParam: T
  setQueryParam: (value: T) => void
}

// Overloads so we can use this for a boolean or string query param
// eslint-disable-next-line no-redeclare
export function useQueryParam(queryParamKey: string, isBoolean: true): UseQueryParamReturn<boolean>
// eslint-disable-next-line no-redeclare
export function useQueryParam(queryParamKey: string, isBoolean?: false): UseQueryParamReturn<string>
// eslint-disable-next-line no-redeclare
export function useQueryParam(
  queryParamKey: string,
  isBoolean?: boolean,
): UseQueryParamReturn<any> {
  const router = useRouter()

  const [queryParamString, setQueryParamState] = useState<string>('')
  const [debug, setDebug] = useState<boolean>(false)
  const queryParam: string | boolean = isBoolean ? queryParamString === 'true' : queryParamString

  // Only set the initial query param values on page load, the rest of the time we use React state
  useEffect(() => {
    let initialQueryParam = ''
    const paramValue = router.query[queryParamKey]
    if (paramValue) {
      initialQueryParam = Array.isArray(paramValue) ? paramValue[0] : paramValue
    }
    setQueryParamState(initialQueryParam)
    setDebug(parseDebug(router.query.debug || '') || false)
  }, [queryParamKey, router.pathname])

  const setQueryParam = (value: string | boolean) => {
    const newValue = typeof value === 'boolean' ? (value ? 'true' : '') : value
    const [asPathWithoutHash] = router.asPath.split('#')
    const [asPathRoot, asPathQuery = ''] = asPathWithoutHash.split('?')
    const currentParams = new URLSearchParams(asPathQuery)
    if (newValue) {
      currentParams.set(queryParamKey, newValue)
    } else {
      currentParams.delete(queryParamKey)
    }
    const paramsString = currentParams.toString() ? `?${currentParams.toString()}` : ''
    let newUrl = `${asPathRoot}${paramsString}`
    if (asPathRoot !== '/' && router.locale) {
      newUrl = `${router.locale}${asPathRoot}${paramsString}`
    }
    if (!newUrl.startsWith('/')) {
      newUrl = `/${newUrl}`
    }

    router.replace(newUrl, undefined, { shallow: true, locale: router.locale, scroll: false })

    setQueryParamState(newValue)
  }

  return {
    debug,
    queryParam: queryParam as any, // Type will be set based on overloads
    setQueryParam,
  }
}
