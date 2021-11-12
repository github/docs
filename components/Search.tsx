import React, { useState, useEffect, useRef, ReactNode, RefObject } from 'react'
import { useRouter } from 'next/router'
import debounce from 'lodash/debounce'
import cx from 'classnames'

import { useTranslation } from 'components/hooks/useTranslation'
import { sendEvent, EventType } from 'components/lib/events'
import { useMainContext } from './context/MainContext'
import { useVersion } from 'components/hooks/useVersion'
import { useLanguages } from './context/LanguagesContext'

import styles from './Search.module.scss'
import { ActionList, Label, Link, Overlay } from '@primer/components'

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
  variant?: 'compact' | 'expanded'
  updateSearchParams?: boolean
  iconSize: number
  children?: (props: { SearchInput: ReactNode; SearchResults: ReactNode }) => ReactNode
}
export function Search({
  isHeaderSearch = false,
  updateSearchParams = true,
  variant = 'compact',
  iconSize = 24,
  children,
}: Props) {
  const router = useRouter()
  const [query, setQuery] = useState(router.query.query || '')
  const [results, setResults] = useState<Array<SearchResult> | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const { t } = useTranslation('search')
  const { currentVersion } = useVersion()
  const { languages } = useLanguages()
  const initialRender = useRef(true)

  // Figure out language and version for index
  const { searchVersions, nonEnterpriseDefaultVersion } = useMainContext()
  // fall back to the non-enterprise default version (FPT currently) on the homepage, 404 page, etc.
  const version = searchVersions[currentVersion] || searchVersions[nonEnterpriseDefaultVersion]
  const language = (Object.keys(languages).includes(router.locale || '') && router.locale) || 'en'
  const isHomePage = !('productId' in router.query)

  // If the user shows up with a query in the URL, go ahead and search for it
  useEffect(() => {
    if (
      (!isHeaderSearch && isHomePage && router.query.query) ||
      (isHeaderSearch && updateSearchParams && router.query.query)
    ) {
      /* await */ fetchSearchResults((router.query.query as string).trim())
    }
  }, [])

  // If the version changed from the dropdown version or language picker
  // close the search pane and clear the query
  // If the version changed from the search result window, keep the query
  // and results but reset the versionFromSearchPane value
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
    } else {
      closeSearch()
    }
  }, [currentVersion, language])

  // When the user finishes typing, update the results
  async function onSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const xquery = e.target?.value?.trim()
    setQuery(xquery)

    // Update the URL with the search parameters in the query string
    if (updateSearchParams) {
      const pushUrl = new URL(location.toString())
      pushUrl.searchParams.set('query', xquery)
      history.pushState({}, '', pushUrl.toString())
    }
    return await fetchSearchResults(xquery)
  }

  // If there's a query, call the endpoint
  // Otherwise, there's no results by default
  async function fetchSearchResults(xquery: string) {
    setIsLoading(true)
    try {
      if (xquery) {
        const endpointUrl = new URL(location.origin)
        endpointUrl.pathname = '/search'
        const endpointParams: Record<string, string> = {
          language,
          version,
          query: xquery,
        }
        endpointUrl.search = new URLSearchParams(endpointParams).toString()

        const response = await fetch(endpointUrl.toString(), {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        })
        setResults(response.ok ? await response.json() : [])
      } else {
        setResults(null)
      }
    } finally {
      setIsLoading(false)
    }

    // Analytics tracking
    if (xquery) {
      sendEvent({
        type: EventType.search,
        search_query: xquery,
        // search_context
      })
    }
  }

  // Close panel if overlay is clicked
  function closeSearch() {
    setQuery('')
    setResults(null)
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  // Prevent the page from refreshing when you "submit" the form
  function preventRefresh(evt: React.FormEvent) {
    evt.preventDefault()
  }

  const SearchResults = (
    <>
      <div
        id="search-results-container"
        className={cx(
          'z-1 pb-5 px-3',
          isHeaderSearch && 'pt-9',
          styles.resultsContainer,
          isHeaderSearch && styles.resultsContainerHeader,
          query && styles.resultsContainerOpen
        )}
      >
        <div id="__primerPortalRoot__" />
        <ShowSearchResults
          anchorRef={inputRef}
          isHeaderSearch={isHeaderSearch}
          isLoading={isLoading}
          results={results}
          closeSearch={closeSearch}
          debug={'debug' in router.query}
          query={query}
        />
      </div>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        className={cx('-z-1', isHeaderSearch && query ? styles.headerSearchOpen : 'd-none')}
        onClick={closeSearch}
      />
    </>
  )

  const SearchInput = (
    <div data-testid="search" aria-hidden="true">
      <div className="position-relative z-2">
        <form role="search" className="width-full d-flex" noValidate onSubmit={preventRefresh}>
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
              isHeaderSearch && query && styles.searchInputExpanded
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
            onChange={debounce(onSearch, 200)}
            defaultValue={query}
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

function ShowSearchResults({
  anchorRef,
  isHeaderSearch,
  isLoading,
  results,
  closeSearch,
  debug,
  query,
}: {
  anchorRef: RefObject<HTMLElement>
  isHeaderSearch: boolean
  isLoading: boolean
  results: SearchResult[] | null
  closeSearch: () => void
  debug: boolean
  query: string | string[]
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
  const redirectQuery = query ? `?query=${query}` : ''

  if (results !== null) {
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
    // When there are search results, it doesn't matter if this is overlay or not.
    return (
      <div>
        {
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
            <div data-testid="search-results">
              <div className="my-4">
                <p className="ml-4">
                  You're searching the <span className="color-fg-attention">{searchVersion}</span>{' '}
                  version. Didn't find what you're looking for? Click a different version to try
                  again.
                </p>
                {versions.map(({ title, version }) => {
                  return (
                    <button key={version} className="btn mr-2 mt-4 ml-4" type="button">
                      <a href={`/${router.locale}/${version}${redirectQuery}`}>{title}</a>
                    </button>
                  )
                })}
              </div>
              <ActionList
                items={results.map(({ url, breadcrumbs, title, content, score, popularity }) => {
                  return {
                    key: url,
                    text: title,
                    renderItem: () => (
                      <ActionList.Item as="div">
                        <Link href={url} className="no-underline color-fg-default">
                          <li
                            key={url}
                            data-testid="search-result"
                            className={cx('list-style-none')}
                          >
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
                                className={cx(
                                  styles.searchResultTitle,
                                  'mt-2 d-block f4 text-semibold'
                                )}
                                dangerouslySetInnerHTML={{
                                  __html: title,
                                }}
                              />
                              <div
                                className={cx(
                                  styles.searchResultContent,
                                  'mt-1 d-block overflow-hidden'
                                )}
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
          </Overlay>
        }
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
