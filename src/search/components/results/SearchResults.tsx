import { Box, Pagination, Text } from '@primer/react'
import { SearchIcon } from '@primer/octicons-react'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import cx from 'classnames'

import { useTranslation } from '@/languages/components/useTranslation'
import { Link } from '@/frame/components/Link'
import { sendEvent, uuidv4 } from '@/events/components/events'
import { EventType } from '@/events/types'

import styles from './SearchResults.module.scss'

import type { SearchQueryContentT } from '@/search/components/types'
import type { GeneralSearchHitWithoutIncludes, GeneralSearchResponse } from '@/search/types'
import type { SearchTotalHits } from '@elastic/elasticsearch/lib/api/types'
import { GENERAL_SEARCH_RESULTS } from '@/events/components/event-groups'

type Props = {
  results: GeneralSearchResponse
  searchParams: SearchQueryContentT
}
export function SearchResults({ results, searchParams }: Props) {
  const pages = Math.ceil((results.meta.found as SearchTotalHits).value / results.meta.size)
  const { page } = results.meta
  const searchEventGroupId = useRef<string>('')
  useEffect(() => {
    searchEventGroupId.current = uuidv4()
  }, [results])

  return (
    <div>
      <SearchResultHits
        hits={results.hits}
        searchParams={searchParams}
        eventGroupId={searchEventGroupId}
      />
      {pages > 1 && <ResultsPagination page={page} totalPages={pages} />}
    </div>
  )
}

function SearchResultHits({
  hits,
  searchParams,
  eventGroupId,
}: {
  hits: GeneralSearchHitWithoutIncludes[]
  searchParams: SearchQueryContentT
  eventGroupId: React.MutableRefObject<string>
}) {
  return (
    <div>
      {hits.length === 0 && <NoSearchResults />}
      {hits.map((hit, index) => (
        <SearchResultHit
          key={hit.id}
          hit={hit}
          query={searchParams.query}
          totalHits={hits.length}
          index={index}
          debug={searchParams.debug}
          eventGroupId={eventGroupId}
        />
      ))}
    </div>
  )
}

function NoSearchResults() {
  const { t } = useTranslation('search_results')
  return (
    <div className="d-flex flex-items-center flex-column my-6 border rounded-2">
      <div className="d-flex flex-items-center flex-column p-4">
        <SearchIcon size={24} />
        <p className="f2 mt-3">{t('n_results').replace('{n}', '0')}</p>
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
  eventGroupId,
}: {
  hit: GeneralSearchHitWithoutIncludes
  query: string
  totalHits: number
  index: number
  debug: boolean
  eventGroupId: React.MutableRefObject<string>
}) {
  const title =
    hit.highlights.title && hit.highlights.title.length > 0 ? hit.highlights.title[0] : hit.title

  let content = ''
  if (hit.highlights.content_explicit?.length) {
    content = hit.highlights.content_explicit[0]
  } else if (hit.highlights.content?.length) {
    content = hit.highlights.content[0]
  }

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
          className="color-fg-accent search-result-link"
          dangerouslySetInnerHTML={{ __html: title }}
          data-group-key={GENERAL_SEARCH_RESULTS}
          onClick={() => {
            sendEvent({
              type: EventType.searchResult,
              search_result_query: Array.isArray(query) ? query[0] : query,
              search_result_index: index,
              search_result_total: totalHits,
              search_result_rank: (totalHits - index) / totalHits,
              search_result_url: hit.url,
              eventGroupKey: GENERAL_SEARCH_RESULTS,
              eventGroupId: eventGroupId.current,
            })
          }}
        ></Link>
      </h2>
      {content && <div dangerouslySetInnerHTML={{ __html: content }}></div>}
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
  const [asPath, setAsPath] = useState('')
  const [asPathRoot, asPathQuery = ''] = router.asPath.split('#')[0].split('?')

  useEffect(() => {
    if (asPath) {
      const firstSearchResult = document.getElementsByClassName(
        'search-result-link',
      )[0] as HTMLElement
      firstSearchResult?.focus()
    }
  }, [asPath])

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
    <div className={styles.paginationFocus}>
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
            setAsPath(asPath)
            router.push(asPath)
          }}
        />
      </Box>
    </div>
  )
}
