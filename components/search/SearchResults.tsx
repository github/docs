import { Box, Pagination, Text, Heading } from '@primer/react'
import { useRouter } from 'next/router'

import type { SearchResultsT, SearchResultHitT } from './types'
import { useTranslation } from 'components/hooks/useTranslation'
import { Link } from 'components/Link'
import { useQuery } from 'components/hooks/useQuery'

type Props = {
  results: SearchResultsT
}
export function SearchResults({ results }: Props) {
  const { t } = useTranslation('search')

  const pages = Math.ceil(results.meta.found.value / results.meta.size)
  const { page } = results.meta

  return (
    <div>
      <p>
        <Text>
          {t('results_found')
            .replace('{n}', results.meta.found.value.toLocaleString())
            .replace('{s}', results.meta.took.total_msec.toFixed(0))}{' '}
        </Text>
        <br />
        {pages > 1 && (
          <Text>
            {t('results_page').replace('{page}', page).replace('{pages}', pages.toLocaleString())}
          </Text>
        )}
      </p>

      <SearchResultHits hits={results.hits} />

      {pages > 1 && <ResultsPagination page={page} totalPages={pages} />}
    </div>
  )
}

function SearchResultHits({ hits }: { hits: SearchResultHitT[] }) {
  const { debug } = useQuery()
  return (
    <div>
      {hits.length === 0 && <NoSearchResults />}
      {hits.map((hit) => (
        <SearchResultHit key={hit.id} hit={hit} debug={debug} />
      ))}
    </div>
  )
}

function NoSearchResults() {
  const { t } = useTranslation('search')
  return (
    <div className="my-6">
      <Heading as="h2" sx={{ fontSize: 1 }}>
        {t('nothing_found')}
      </Heading>
    </div>
  )
}

function SearchResultHit({ hit, debug }: { hit: SearchResultHitT; debug: boolean }) {
  const title =
    hit.highlights.title && hit.highlights.title.length > 0 ? hit.highlights.title[0] : hit.title

  return (
    <div className="my-6">
      <h2 className="f3">
        <Link
          href={hit.url}
          className="color-fg-accent"
          dangerouslySetInnerHTML={{ __html: title }}
        ></Link>
      </h2>
      <h3 className="text-normal f4 mb-2">{hit.breadcrumbs}</h3>
      <ul className="ml-3">
        {(hit.highlights.content || []).map((highlight, i) => {
          return <li key={highlight + i} dangerouslySetInnerHTML={{ __html: highlight }}></li>
        })}
      </ul>
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

  const [asPathRoot, asPathQuery = ''] = router.asPath.split('?')

  function hrefBuilder(page: number) {
    const params = new URLSearchParams(asPathQuery)
    if (page === 1) {
      params.delete('page')
    } else {
      params.set('page', `${page}`)
    }
    return `/${router.locale}${asPathRoot}?${params.toString()}`
  }

  return (
    <Box borderRadius={2} p={2}>
      <Pagination
        pageCount={totalPages}
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
            asPath += `?${params.toString()}`
          }
          router.push(asPath, undefined, { shallow: true })
        }}
      />
    </Box>
  )
}
