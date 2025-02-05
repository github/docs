// A generic hook for getting and setting a query parameter without reloading the page
// The `queryParam` variable returned from this method are stateful and will be set to the query param on page load

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
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

  // Determine the initial value of the query param
  let initialQueryParam = ''
  const paramValue = router.query[queryParamKey]

  if (paramValue) {
    if (Array.isArray(paramValue)) {
      initialQueryParam = paramValue[0]
    } else {
      initialQueryParam = paramValue
    }
  }

  const debugValue = parseDebug(router.query.debug)

  // Return type will be set based on overloads
  const [queryParamString, setQueryParamState] = useState<string>(initialQueryParam)
  const [debug] = useState<boolean>(debugValue)

  // If the query param changes in the URL, update the state
  useEffect(() => {
    const paramValue = router.query[queryParamKey]

    if (paramValue) {
      if (Array.isArray(paramValue)) {
        setQueryParamState(paramValue[0])
      } else {
        setQueryParamState(paramValue)
      }
    }
  }, [router.query, queryParamKey])

  // Determine the type of queryParam based on isBoolean
  const queryParam: string | boolean = isBoolean ? queryParamString === 'true' : queryParamString

  const setQueryParam = (value: string | boolean) => {
    const { pathname, hash, search } = window.location

    let newValue: string = value as string

    // If it's a false boolean or empty string, just remove the query param
    if (!value) {
      newValue = ''
    } else if (typeof value === 'boolean') {
      newValue = 'true'
    }

    const params = new URLSearchParams(search)
    if (newValue) {
      params.set(queryParamKey, newValue)
    } else {
      params.delete(queryParamKey)
    }

    const newSearch = params.toString()
    const newUrl = newSearch ? `${pathname}?${newSearch}${hash}` : `${pathname}${hash}`

    window.history.replaceState({}, '', newUrl)
    setQueryParamState(newValue)
  }

  return {
    debug,
    queryParam: queryParam as any, // Type will be set based on overloads
    setQueryParam: setQueryParam as any,
  }
}
