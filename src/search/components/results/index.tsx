import Head from 'next/head'
import { Heading } from '@primer/react-brand'

import { useTranslation } from '@/languages/components/useTranslation'
import { DEFAULT_VERSION, useVersion } from '@/versions/components/useVersion'
import { useNumberFormatter } from '@/search/components/hooks/useNumberFormatter'
import { SearchResults } from '@/search/components/results/SearchResults'
import { NoQuery } from '@/search/components/results/NoQuery'
import { useMainContext } from '@/frame/components/context/MainContext'
import { ValidationErrors } from '@/search/components/results/ValidationErrors'
import { useSearchContext } from '@/search/components/context/SearchContext'
import type { estypes } from '@elastic/elasticsearch'

import styles from './SearchPage.module.scss'

export function Search() {
  const { search } = useSearchContext()

  const { formatInteger } = useNumberFormatter()
  const { t } = useTranslation('search_results')
  const { currentVersion } = useVersion()

  const { query } = search.searchParams

  // documentPage is content/search/index.md, not the page query param for pagination.
  const { allVersions, page: documentPage } = useMainContext()
  const searchVersion = allVersions[currentVersion].versionTitle

  const { results, validationErrors } = search
  const hasQuery = Boolean((query && query.trim()) || '')

  // useMainContext runs on every request, including requests without a page.
  let pageTitle = documentPage?.fullTitle || 'Search'
  if (hasQuery) {
    pageTitle = `${t('search_results_for')} "${query.trim()}"`
    if (currentVersion !== DEFAULT_VERSION) {
      pageTitle += ` (${searchVersion})`
    }
    if (results) {
      pageTitle = `${formatInteger((results.meta.found as estypes.SearchTotalHits).value)} ${pageTitle}`
    }
  }

  return (
    <div data-testid="search-results">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {hasQuery && (
        <div className={styles.hero}>
          <Heading as="h1" size="3" className={styles.heroTitle}>
            {pageTitle}
          </Heading>
        </div>
      )}

      {/* Empty query validates as an error, but /en/search shows the no-query state instead. */}
      {!hasQuery ? (
        <NoQuery />
      ) : validationErrors.length > 0 ? (
        <ValidationErrors errors={validationErrors} />
      ) : null}

      {results ? <SearchResults results={results} searchParams={search.searchParams} /> : null}
    </div>
  )
}
