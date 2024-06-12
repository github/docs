import Head from 'next/head'
import { Heading } from '@primer/react'

import { useTranslation } from 'src/languages/components/useTranslation'
import { DEFAULT_VERSION, useVersion } from 'src/versions/components/useVersion'
import { useNumberFormatter } from 'src/search/components/useNumberFormatter'
import { SearchResults } from 'src/search/components/SearchResults'
import { NoQuery } from 'src/search/components/NoQuery'
import { useMainContext } from 'src/frame/components/context/MainContext'
import { ValidationErrors } from './ValidationErrors'
import { useSearchContext } from './context/SearchContext'

export function Search() {
  const { search } = useSearchContext()

  const { formatInteger } = useNumberFormatter()
  const { t } = useTranslation('search_results')
  const { currentVersion } = useVersion()

  const { query } = search.search

  // A reference to the `content/search/index.md` Page object.
  // Not to be confused with the "page" that is for paginating
  // results.
  const { allVersions, page: documentPage } = useMainContext()
  const searchVersion = allVersions[currentVersion].versionTitle

  const { results, validationErrors } = search
  const hasQuery = Boolean((query && query.trim()) || '')

  // Mostly to satisfy TypeScript because the useMainContext hook
  // is run on every request and every request doesn't have a page.
  let pageTitle = documentPage?.fullTitle || 'Search'
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
          {pageTitle}
        </Heading>
      )}

      {/* Not having a query is actually a validation error.
        But it's a bit harsh to call it an "error".
        Simply going to "/en/search" shouldn't show an error message.
        It should be a "no query" message, which is a bit more "gentle".
         */}
      {!hasQuery ? (
        <NoQuery />
      ) : validationErrors.length > 0 ? (
        <ValidationErrors errors={validationErrors} />
      ) : null}

      {results ? <SearchResults results={results} search={search.search} /> : null}
    </div>
  )
}
