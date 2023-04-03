import useSWR from 'swr'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Heading } from '@primer/react'

import { sendEvent, EventType } from 'src/events/browser'
import { useTranslation } from 'components/hooks/useTranslation'
import { DEFAULT_VERSION, useVersion } from 'components/hooks/useVersion'
import { useNumberFormatter } from 'components/hooks/useNumberFormatter'
import type { SearchResultsT } from 'src/search/components/types'
import { SearchResults } from 'src/search/components/SearchResults'
import { SearchError } from 'src/search/components/SearchError'
import { NoQuery } from 'src/search/components/NoQuery'
import { Loading } from 'src/search/components/Loading'
import { useQuery } from 'components/hooks/useQuery'
import { usePage } from 'components/hooks/usePage'
import { useMainContext } from 'components/context/MainContext'

export function Search() {
  const { locale } = useRouter()
  const { formatInteger } = useNumberFormatter()
  const { t } = useTranslation('search')
  const { currentVersion } = useVersion()
  const { query, debug } = useQuery()
  const { page } = usePage()

  // A reference to the `content/search/index.md` Page object.
  // Not to be confused with the "page" that is for paginating
  // results.
  const { allVersions, page: documentPage } = useMainContext()
  const searchVersion = allVersions[currentVersion].versionTitle

  const sp = new URLSearchParams()
  const hasQuery = Boolean(query.trim())
  if (hasQuery) {
    sp.set('query', query.trim())
    sp.set('language', locale || 'en')
    if (debug) sp.set('debug', 'true')
    sp.set('version', currentVersion)
    if (page !== 1) {
      sp.set('page', `${page}`)
    }
  }

  const inDebugMode = process.env.NODE_ENV === 'development'

  const { data: results, error } = useSWR<SearchResultsT | null, Error | null>(
    hasQuery ? `/api/search/v1?${sp.toString()}` : null,
    async (url) => {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`${response.status} on ${url}`)
      }
      return await response.json()
    },
    {
      onSuccess: () => {
        sendEvent({
          type: EventType.search,
          search_query: query,
        })
      },
      // Because the backend never changes between fetches, we can treat
      // it as an immutable resource and disable these revalidation
      // checks.
      revalidateIfStale: inDebugMode,
      revalidateOnFocus: inDebugMode,
      revalidateOnReconnect: inDebugMode,
    }
  )

  let pageTitle = documentPage.fullTitle
  if (hasQuery) {
    pageTitle = `${t('search_results_for')} "${query.trim()}"`
    if (currentVersion !== DEFAULT_VERSION) {
      pageTitle += ` (${searchVersion})`
    }
    if (results) {
      pageTitle = `${formatInteger(results.meta.found.value)} ${pageTitle}`
    }
  }

  return (
    <div className="container-xl px-3 px-md-6 my-4" data-testid="search-results">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {hasQuery && (
        <Heading as="h1" className="mb-2">
          {t('search_results_for')} "{query.trim()}"
        </Heading>
      )}

      {error ? (
        <SearchError error={error} />
      ) : results ? (
        <SearchResults results={results} query={query} />
      ) : hasQuery ? (
        <Loading />
      ) : (
        <NoQuery />
      )}
    </div>
  )
}
