// Shallow URL updates keep query controls in sync without reloading the page.

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { parseDebug } from '@/search/components/hooks/useQuery'

type UseQueryParamReturn<T extends string | boolean> = {
  debug: boolean
  queryParam: T
  // Resolves once the URL write lands. A caller about to navigate must await it: the write is
  // a `router.replace` of the current path, and overlapping a `router.push` gets one cancelled.
  setQueryParam: (value: T) => Promise<void>
}

export function useQueryParam(queryParamKey: string, isBoolean: true): UseQueryParamReturn<boolean>
export function useQueryParam(queryParamKey: string, isBoolean?: false): UseQueryParamReturn<string>
export function useQueryParam(
  queryParamKey: string,
  isBoolean?: boolean,
): UseQueryParamReturn<boolean> | UseQueryParamReturn<string> {
  const router = useRouter()

  const [queryParamString, setQueryParamState] = useState<string>('')
  const [debug, setDebug] = useState<boolean>(false)
  const queryParam: string | boolean = isBoolean ? queryParamString === 'true' : queryParamString

  // Read URL values only on route changes, so React state owns later edits.
  useEffect(() => {
    let initialQueryParam = ''
    const paramValue = router.query[queryParamKey]
    if (paramValue) {
      initialQueryParam = Array.isArray(paramValue) ? paramValue[0] : paramValue
    }
    setQueryParamState(initialQueryParam)
    setDebug(parseDebug(router.query.debug || '') || false)
  }, [queryParamKey, router.pathname])

  const setQueryParam = async (value: string | boolean) => {
    const newValue = typeof value === 'boolean' ? (value ? 'true' : '') : value

    // Always set state: the effect above skips navigations within the same dynamic route.
    setQueryParamState(newValue)

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

    await router.replace(newUrl, undefined, { shallow: true, locale: router.locale, scroll: false })
  }

  if (isBoolean) {
    return {
      debug,
      queryParam: queryParam as boolean,
      setQueryParam: setQueryParam as (value: boolean) => Promise<void>,
    }
  }
  return {
    debug,
    queryParam: queryParam as string,
    setQueryParam: setQueryParam as (value: string) => Promise<void>,
  }
}
