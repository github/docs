import { Box, Pagination, Text } from '@primer/react'
import { SearchIcon } from '@primer/octicons-react'
import { useRouter } from 'next/router'
import cx from 'classnames'

import type { SearchResultsT, SearchResultHitT, SearchQueryT } from './types'
import { useTranslation } from 'src/languages/components/useTranslation'
import { Link } from 'components/Link'
import { sendEvent, EventType } from 'src/events/components/events'

import styles from './SearchResults.module.scss'

type Props = {
  results: SearchResultsT
  search: SearchQueryT
}
export function SearchResults({ results, search }: Props) {
  const pages = Math.ceil(results.meta.found.value / results.meta.size)
  const { page } = results.meta

  return (
    <div>
      <SearchResultHits hits={results.hits} search={search} />
      {pages > 1 && <ResultsPagination page={page} totalPages={pages} />}
    </div>
  )
}

function SearchResultHits({ hits, search }: { hits: SearchResultHitT[]; search: SearchQueryT }) {
  return (
    <div>
      {hits.length === 0 && <NoSearchResults />}
      {hits.map((hit, index) => (
        <SearchResultHit
          key={hit.id}
          hit={hit}
          query={search.query}
          totalHits={hits.length}
          index={index}
          debug={search.debug}
        />
      ))}
    </div>
  )
}

function NoSearchResults() {
  const { t } = useTranslation('search')
  return (
    <div className="d-flex flex-items-center flex-column my-6 border rounded-2">
      <div className="d-flex flex-items-center flex-column p-4">
        <SearchIcon size={24} />
        <Text className="f2 mt-3">{t('n_results').replace('{n}', 0)}</Text>
      </div>
    </div>
  )
}

function SearchResultHit({
  hit,
  query,
  totalHits,
  index,
  debug,
}: {
  hit: SearchResultHitT
  query: string
  totalHits: number
  index: number
  debug: boolean
}) {
  const title =
    hit.highlights.title && hit.highlights.title.length > 0 ? hit.highlights.title[0] : hit.title

  return (
    <div className={cx('my-6', styles.search_result)} data-testid="search-result">
      <p className="text-normal f5 color-fg-muted" style={{ wordSpacing: 2 }}>
        {hit.breadcrumbs.length > 1 && (
          <>
            <strong>{hit.breadcrumbs.split('/')[0]}</strong>
            {hit.breadcrumbs.replace(hit.breadcrumbs.split('/')[0], '')} /
          </>
        )}
      </p>
      <h2 className="f3">
        <Link
          href={hit.url}
          className="color-fg-accent"
          dangerouslySetInnerHTML={{ __html: title }}
          onClick={() => {
            sendEvent({
              type: EventType.searchResult,
              search_result_query: Array.isArray(query) ? query[0] : query,
              search_result_index: index,
              search_result_total: totalHits,
              search_result_rank: (totalHits - index) / totalHits,
              search_result_url: hit.url,
            })
          }}
        ></Link>
      </h2>
      {hit.highlights.content && hit.highlights.content.length > 0 && (
        <div dangerouslySetInnerHTML={{ __html: hit.highlights.content[0] }}></div>
      )}
      {debug && (
        <Text as="p" fontWeight="bold">
          score: <code style={{ marginRight: 10 }}>{hit.score}</code> popularity:{' '}
          <code>{hit.popularity}</code>
        </Text>
      )}
    </div>
  )
}

function ResultsPagination({ page, totalPages }: { page: number; totalPages: number }) {
  const router = useRouter()

  const [asPathRoot, asPathQuery = ''] = router.asPath.split('#')[0].split('?')

  function hrefBuilder(page: number) {
    const params = new URLSearchParams(asPathQuery)
    if (page === 1) {
      params.delete('page')
    } else {
      params.set('page', `${page}`)
    }
    return `/${router.locale}${asPathRoot}?${params}`
  }

  return (
    <Box borderRadius={2} p={2}>
      <Pagination
        pageCount={Math.min(totalPages, 10)}
        currentPage={page}
        hrefBuilder={hrefBuilder}
        onPageChange={(event, page) => {
          event.preventDefault()

          const [asPathRoot, asPathQuery = ''] = router.asPath.split('#')[0].split('?')
          const params = new URLSearchParams(asPathQuery)
          if (page !== 1) {
            params.set('page', `${page}`)
          } else {
            params.delete('page')
          }
          let asPath = `/${router.locale}${asPathRoot}`
          if (params.toString()) {
            asPath += `?${params}`
          }
          router.push(asPath)
        }}
      />
    </Box>
  )
}
