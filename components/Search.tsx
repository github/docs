import React, { useState, useEffect, useRef, ReactNode, RefObject } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import cx from 'classnames'
import { ActionList, Label, Overlay } from '@primer/components'

import { useTranslation } from 'components/hooks/useTranslation'
import { sendEvent, EventType } from 'components/lib/events'
import { useMainContext } from './context/MainContext'
import { useVersion } from 'components/hooks/useVersion'
import { useQuery } from 'components/hooks/useQuery'
import { Link } from 'components/Link'
import { useLanguages } from './context/LanguagesContext'

import styles from './Search.module.scss'

type SearchResult = {
  url: string
  breadcrumbs: string
  title: string
  content: string
  score: number
  popularity: number
}

type Props = {
  isHeaderSearch?: boolean
  isMobileSearch?: boolean
  variant?: 'compact' | 'expanded'
  iconSize: number
  children?: (props: { SearchInput: ReactNode; SearchResults: ReactNode }) => ReactNode
}
export function Search({
  isHeaderSearch = false,
  isMobileSearch = false,
  variant = 'compact',
  iconSize = 24,
  children,
}: Props) {
  const router = useRouter()
  const { query, debug } = useQuery()
  const [localQuery, setLocalQuery] = useState(query)
  const [debouncedQuery, setDebouncedQuery] = useDebounce<string>(localQuery, 300)
  const inputRef = useRef<HTMLInputElement>(null)
  const { t } = useTranslation('search')
  const { currentVersion } = useVersion()
  const { languages } = useLanguages()

  // Figure out language and version for index
  const { searchVersions, nonEnterpriseDefaultVersion } = useMainContext()
  // fall back to the non-enterprise default version (FPT currently) on the homepage, 404 page, etc.
  const version = searchVersions[currentVersion] || searchVersions[nonEnterpriseDefaultVersion]
  const language = (Object.keys(languages).includes(router.locale || '') && router.locale) || 'en'

  const fetchURL = query
    ? `/search?${new URLSearchParams({
        language,
        version,
        query,
      })}`
    : null

  const { data: results, error: searchError } = useSWR<SearchResult[], Error>(
    fetchURL,
    async (url: string) => {
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
          // search_context
        })
      },
      // Because the backend never changes between fetches, we can treat
      // it as an immutable resource and disable these revalidation
      // checks.
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  )

  const [previousResults, setPreviousResults] = useState<SearchResult[] | undefined>()
  useEffect(() => {
    if (results) {
      setPreviousResults(results)
    } else if (!query) {
      setPreviousResults(undefined)
    }
  }, [results, query])

  // The `isLoading` boolean will become false every time the useSWR hook
  // fires off a new XHR. So it toggles from false/true often.
  // But we don't want to display "Loading..." every time a new XHR query
  // begins, immediately, because the XHR requests are usually very fast
  // so that you just see it flicker by. That's why we introduce a
  // debounced version of that same boolean value.
  // The problem is that the debounce is *trailing*. Meaning, it will
  // always yield the last thing you sent to it, but with a delay.
  // The problem is that, by the time the debounce finally fires,
  // it might say 'true' when in fact the XHR has finished! That would
  // mean saying "Loading..." is a lie!
  // That's why we combine them into a final one. We're basically doing
  // this to favor *NOT* saying "Loading...".
  const isLoadingRaw = Boolean(query && !results && !searchError)
  const [isLoadingDebounced] = useDebounce<boolean>(isLoadingRaw, 500)
  const isLoading = isLoadingRaw && isLoadingDebounced

  useEffect(() => {
    if ((router.query.query || '') !== debouncedQuery) {
      const [asPathRoot, asPathQuery = ''] = router.asPath.split('?')
      const params = new URLSearchParams(asPathQuery)
      if (debouncedQuery) {
        params.set('query', debouncedQuery)
      } else {
        params.delete('query')
      }
      let asPath = `/${router.locale}${asPathRoot}`
      if (params.toString()) {
        asPath += `?${params.toString()}`
      }
      // Workaround a next.js routing behavior that
      // will cause the default locale path of the index page
      // "/en" to change to just "/".
      if (router.pathname === '/') {
        // Don't include router.locale so next doesn't attempt a
        // request to `/_next/static/chunks/pages/en.js`
        router.replace(`/?${params.toString()}`, asPath)
      } else {
        router.replace(asPath)
      }
    }
  }, [debouncedQuery])

  // When the user finishes typing, update the results
  function onSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setLocalQuery(e.target.value)
  }
  useEffect(() => {
    if (localQuery.trim()) {
      if (localQuery.endsWith(' ')) {
        setDebouncedQuery(localQuery.trim())
      }
    } else {
      setDebouncedQuery('')
    }
  }, [localQuery])

  // Close panel if overlay is clicked
  function closeSearch() {
    setLocalQuery('')
  }

  // Prevent the page from refreshing when you "submit" the form
  function onFormSubmit(evt: React.FormEvent) {
    evt.preventDefault()
    if (localQuery.trim()) {
      setDebouncedQuery(localQuery.trim())
    }
  }

  const SearchResults = (
    <>
      <div
        id="search-results-container"
        className={cx(
          'z-1 pb-5 px-3',
          isHeaderSearch &&
            'pt-9 color-bg-default color-shadow-medium position-absolute top-0 right-0',
          styles.resultsContainer,
          isHeaderSearch && styles.resultsContainerHeader,
          query ? 'd-block' : 'd-none',
          query && styles.resultsContainerOpen
        )}
      >
        <ShowSearchResults
          anchorRef={inputRef}
          isHeaderSearch={isHeaderSearch}
          isMobileSearch={isMobileSearch}
          isLoading={isLoading}
          results={previousResults}
          closeSearch={closeSearch}
          debug={debug}
          query={query}
        />
      </div>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        className={cx(
          '-z-1',
          isHeaderSearch && query
            ? 'position-fixed top-0 right-0 bottom-0 left-0 d-block'
            : 'd-none',
          isHeaderSearch && query && styles.headerSearchOpen
        )}
        onClick={closeSearch}
      />
    </>
  )

  const SearchInput = (
    <div data-testid="search" aria-hidden="true">
      <div className="position-relative z-2">
        <form role="search" className="width-full d-flex" noValidate onSubmit={onFormSubmit}>
          <input
            data-testid="site-search-input"
            ref={inputRef}
            className={cx(
              styles.searchInput,
              iconSize === 24 && 'form-control px-6 f4',
              iconSize === 16 && 'form-control px-5 f4',
              variant === 'compact' && 'py-2',
              variant === 'expanded' && 'py-3',
              isHeaderSearch && styles.searchInputHeader,
              !isHeaderSearch && 'width-full',
              isHeaderSearch && query && styles.searchInputExpanded,
              isHeaderSearch && query && 'position-absolute top-0 right-0'
            )}
            style={{
              background: `var(--color-canvas-default) url("/assets/images/octicons/search-${iconSize}.svg") no-repeat ${
                iconSize === 24 ? '12px' : '6px'
              }`,
            }}
            type="search"
            placeholder={t`placeholder`}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            maxLength={512}
            onChange={onSearch}
            value={localQuery}
          />
          <button className="d-none" type="submit" title="Submit the search query." hidden />
        </form>
      </div>
    </div>
  )

  return (
    <>
      {typeof children === 'function' ? (
        children({ SearchInput, SearchResults })
      ) : (
        <>
          {SearchInput}
          {SearchResults}
        </>
      )}
    </>
  )
}

function useDebounce<T>(value: T, delay?: number): [T, (value: T) => void] {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)
    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return [debouncedValue, setDebouncedValue]
}

function ShowSearchResults({
  anchorRef,
  isHeaderSearch,
  isMobileSearch,
  isLoading,
  results,
  closeSearch,
  debug,
  query,
}: {
  anchorRef: RefObject<HTMLElement>
  isHeaderSearch: boolean
  isMobileSearch: boolean
  isLoading: boolean
  results: SearchResult[] | undefined
  closeSearch: () => void
  debug: boolean
  query: string
}) {
  const { t } = useTranslation('search')
  const router = useRouter()
  const { currentVersion } = useVersion()
  const { allVersions } = useMainContext()
  const searchVersion = allVersions[currentVersion].versionTitle
  const latestVersions = new Set(
    Object.keys(allVersions)
      .map((version) => allVersions[version].latestVersion)
      .filter((version) => version !== currentVersion)
  )

  const versions = Array.from(latestVersions).map((version) => {
    return {
      title: allVersions[version].versionTitle,
      version: version,
    }
  })

  const redirectParams: {
    query: string
    debug?: string
  } = { query }
  if (debug) redirectParams.debug = JSON.stringify(debug)
  const redirectQuery = `?${new URLSearchParams(redirectParams).toString()}`

  if (results) {
    if (results.length === 0) {
      // When there results, but exactly 0, it matters if this is the overlay or not.
      if (isHeaderSearch) {
        return (
          <div className="mt-5 px-6">
            {isLoading ? <span>{t('loading')}...</span> : <span>{t('no_results')}.</span>}
          </div>
        )
      } else {
        return (
          <p data-testid="no-search-results" className="d-block mt-4">
            {t('no_results')}.
          </p>
        )
      }
    }

    const ActionListResults = (
      <div
        data-testid="search-results"
        className={cx(
          'mt-3',
          isHeaderSearch && styles.headerSearchResults,
          isHeaderSearch && 'overflow-auto'
        )}
      >
        <div className="my-4">
          <p className="mx-4">
            You're searching the <span className="color-fg-attention">{searchVersion}</span>{' '}
            version. Didn't find what you're looking for? Click a different version to try again.
          </p>
          {versions.map(({ title, version }) => {
            return (
              <button key={version} className="btn mr-2 mt-4 ml-4" type="button">
                <a href={`/${router.locale}/${version}${redirectQuery}`}>{title}</a>
              </button>
            )
          })}
        </div>
        {/* We might have results AND isLoading. For example, the user typed
        a first word, and is now typing more. */}
        <p className="d-block mt-4">
          {isLoading ? <span>{t('loading')}...</span> : <span>&nbsp;</span>}
        </p>

        <ActionList
          items={results.map(({ url, breadcrumbs, title, content, score, popularity }) => {
            return {
              key: url,
              text: title,
              renderItem: () => (
                <ActionList.Item as="div">
                  <Link href={url} className="no-underline color-fg-default">
                    <li data-testid="search-result" className={cx('list-style-none')}>
                      <div className={cx('py-2 px-3')}>
                        {/* Breadcrumbs in search records don't include the page title. These fields may contain <mark> elements that we need to render */}
                        <Label variant="small" sx={{ bg: 'accent.emphasis' }}>
                          {breadcrumbs.length === 0
                            ? title.replace(/<\/?[^>]+(>|$)|(\/)/g, '')
                            : breadcrumbs
                                .split(' / ')
                                .slice(0, 1)
                                .join(' ')
                                .replace(/<\/?[^>]+(>|$)|(\/)/g, '')}
                        </Label>
                        {debug && (
                          <small className="float-right">
                            score: {score.toFixed(4)} popularity: {popularity.toFixed(4)}
                          </small>
                        )}
                        <div
                          className={cx('mt-2 d-block f4 text-semibold')}
                          dangerouslySetInnerHTML={{
                            __html: title,
                          }}
                        />
                        <div
                          className={cx(styles.searchResultContent, 'mt-1 d-block overflow-hidden')}
                          style={{ maxHeight: '2.5rem' }}
                          dangerouslySetInnerHTML={{ __html: content }}
                        />
                        <div
                          className={'d-block mt-2 opacity-60 text-small'}
                          dangerouslySetInnerHTML={
                            breadcrumbs.length === 0
                              ? { __html: `${title}`.replace(/<\/?[^>]+(>|$)|(\/)/g, '') }
                              : {
                                  __html: breadcrumbs
                                    .split(' / ')
                                    .slice(0, breadcrumbs.length - 1)
                                    .join(' / ')
                                    .replace(/<\/?[^>]+(>|$)/g, ''),
                                }
                          }
                        />
                      </div>
                    </li>
                  </Link>
                </ActionList.Item>
              ),
            }
          })}
        />
      </div>
    )
    // When there are search results, it doesn't matter if this is overlay or not.
    return (
      <div>
        {!isHeaderSearch && !isMobileSearch ? (
          <>
            {/* Only if you're going to use an <Overlay> do you need
          to specify a portal div tag. */}
            <div id="__primerPortalRoot__" />
            <Overlay
              initialFocusRef={anchorRef}
              returnFocusRef={anchorRef}
              ignoreClickRefs={[anchorRef]}
              onEscape={() => closeSearch()}
              onClickOutside={() => closeSearch()}
              aria-labelledby="title"
              sx={
                isHeaderSearch && {
                  background: 'none',
                  boxShadow: 'none',
                  position: 'static',
                  overflowY: 'auto',
                  maxHeight: '80vh',
                  maxWidth: '96%',
                  margin: '1.5em 2em 0 0.5em',
                  scrollbarWidth: 'none',
                }
              }
            >
              {ActionListResults}
            </Overlay>
          </>
        ) : (
          ActionListResults
        )}
      </div>
    )
  }

  // We have no results at all, but perhaps we're waiting.
  if (isHeaderSearch) {
    return (
      <div className="mt-2 px-6 pt-3">
        {isLoading ? <span>{t('loading')}...</span> : <span>&nbsp;</span>}
      </div>
    )
  }
  return (
    <p data-testid="results-spacer" className="d-block mt-4">
      {/*
        This exists so that there's always *something* displayed in the
        DOM with or without a search result.
        That way, the vertical space is predetermined as a minimum.
        Note: Perhaps it would be better to use CSS but by using a
        real, but empty, DOM element, the height is always minimal and
        always perfectly accurate.
      */}
      {isLoading ? <span>{t('loading')}...</span> : <span>&nbsp;</span>}
    </p>
  )
}
