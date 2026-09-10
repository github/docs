import { Heading, Pagination, Text, Token } from '@primer/react-brand'
import { SearchIcon } from '@primer/octicons-react'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import cx from 'classnames'

import { useTranslation } from '@/languages/components/useTranslation'
import { Link } from '@/frame/components/Link'
import { sendEvent, uuidv4 } from '@/events/components/events'
import { EventType } from '@/events/types'

import styles from './SearchResults.module.scss'

import type { SearchQueryContentT } from '@/search/components/types'
import type { GeneralSearchHit, GeneralSearchResponse } from '@/search/types'
import type { estypes } from '@elastic/elasticsearch'
import { GENERAL_SEARCH_RESULTS } from '@/events/components/event-groups'
import { RenderedHTML } from '@/frame/components/ui/RenderedHTML/RenderedHTML'
import { renderHTMLString } from '@/frame/components/ui/RenderedHTML/render-html-string'
import { markdownComponents } from '@/frame/components/ui/MarkdownContent/markdownComponents'

type Props = {
  results: GeneralSearchResponse
  searchParams: SearchQueryContentT
}
export function SearchResults({ results, searchParams }: Props) {
  const pages = Math.ceil((results.meta.found as estypes.SearchTotalHits).value / results.meta.size)
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
  hits: GeneralSearchHit[]
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
    <div className={styles.noResults}>
      <SearchIcon size={24} />
      <Text as="p" size="400" className={styles.noResultsText}>
        {t('n_results').replace('{n}', '0')}
      </Text>
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
  hit: GeneralSearchHit
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

  // The title, category chip, snippet and debug line are all *direct* children of the grid
  // root on purpose. Wrapping the title and chip in a flex row would make that wrapper the
  // first <div> in the result, and src/search/tests/rendering.ts reads a <div> inside the
  // result to assert the highlighted snippet.
  return (
    <div className={cx(styles.searchResult, styles.search_result)} data-testid="search-result">
      <Heading as="h2" size="subhead-medium" className={styles.resultTitle}>
        <Link
          href={hit.url}
          className={cx('search-result-link', styles.resultTitleLink)}
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
        >
          {renderHTMLString(title, markdownComponents)}
        </Link>
      </Heading>
      {/*
        A hit carries exactly one `toplevel`, so this is deliberately a single chip; the "+N"
        overflow chip in the design needs a real `topics` array indexed first. Rendered as a
        span and never an anchor, because every <a> inside a result must carry the versioned
        pathname (asserted in src/search/tests/rendering.ts).
      */}
      {hit.toplevel && (
        <Token
          className={styles.resultTopic}
          data-testid="search-result-toplevel"
          variant="default"
        >
          {hit.toplevel}
        </Token>
      )}
      {content && (
        <RenderedHTML
          as="div"
          className={styles.resultSnippet}
          data-testid="search-result-content"
          html={content}
        />
      )}
      {debug && (
        <p className={styles.debugText}>
          score: <code className={styles.debugCode}>{hit.score}</code> popularity:{' '}
          <code>{hit.popularity}</code>
        </p>
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

  function hrefBuilder(pageNumber: number) {
    const params = new URLSearchParams(asPathQuery)
    if (pageNumber === 1) {
      params.delete('page')
    } else {
      params.set('page', `${pageNumber}`)
    }
    return `/${router.locale}${asPathRoot}?${params}`
  }

  return (
    <div className={styles.paginationFocus}>
      <div className={styles.paginationWrapper}>
        <Pagination
          pageCount={Math.min(totalPages, 10)}
          currentPage={page}
          hrefBuilder={hrefBuilder}
          onPageChange={(event: React.MouseEvent, pageNum: number) => {
            event.preventDefault()

            const [pathRoot, pathQuery = ''] = router.asPath.split('#')[0].split('?')
            const params = new URLSearchParams(pathQuery)
            if (pageNum !== 1) {
              params.set('page', `${pageNum}`)
            } else {
              params.delete('page')
            }
            let newPath = `/${router.locale}${pathRoot}`
            if (params.toString()) {
              newPath += `?${params}`
            }
            setAsPath(newPath)
            router.push(newPath)
          }}
        />
      </div>
    </div>
  )
}
