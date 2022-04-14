import React, { useState, useEffect, useRef, ReactNode, RefObject } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import cx from 'classnames'
import { ActionList, DropdownMenu, Flash, Label, Overlay } from '@primer/react'
import { ItemInput } from '@primer/react/lib/ActionList/List'

import { useTranslation } from 'components/hooks/useTranslation'
import { sendEvent, EventType } from 'components/lib/events'
import { useMainContext } from './context/MainContext'
import { DEFAULT_VERSION, useVersion } from 'components/hooks/useVersion'
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
        router.replace(`/?${params.toString()}`, asPath, { shallow: true })
      } else {
        router.replace(asPath, undefined, { shallow: true })
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
          query || searchError ? 'd-block' : 'd-none',
          (query || searchError) && styles.resultsContainerOpen
        )}
      >
        {searchError ? (
          <ShowSearchError
            error={searchError}
            isHeaderSearch={isHeaderSearch}
            isMobileSearch={isMobileSearch}
          />
        ) : (
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
        )}
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
    <div data-testid="search">
      <div className="position-relative z-2">
        <form role="search" className="width-full d-flex" noValidate onSubmit={onFormSubmit}>
          <label className="text-normal width-full">
            <span
              className="visually-hidden"
              aria-label={t`label`}
              aria-describedby={t`description`}
            >{t`placeholder`}</span>
            <input
              data-testid="site-search-input"
              ref={inputRef}
              className={cx(
                styles.searchInput,
                iconSize === 24 && styles.searchIconBackground24,
                iconSize === 24 && 'form-control px-6 f4',
                iconSize === 16 && styles.searchIconBackground16,
                iconSize === 16 && 'form-control px-5 f4',
                variant === 'compact' && 'py-2',
                variant === 'expanded' && 'py-3',
                isHeaderSearch && styles.searchInputHeader,
                !isHeaderSearch && 'width-full',
                isHeaderSearch && query && styles.searchInputExpanded,
                isHeaderSearch && query && 'position-absolute top-0 right-0'
              )}
              type="search"
              placeholder={t`placeholder`}
              autoComplete={localQuery ? 'on' : 'off'}
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              maxLength={512}
              onChange={onSearch}
              value={localQuery}
              aria-label={t`label`}
              aria-describedby={t`description`}
            />
          </label>
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

function ShowSearchError({
  error,
  isHeaderSearch,
  isMobileSearch,
}: {
  error: Error
  isHeaderSearch: boolean
  isMobileSearch: boolean
}) {
  const { t } = useTranslation('search')
  return (
    <Flash
      variant="danger"
      sx={{ margin: isMobileSearch || isHeaderSearch ? '2rem 2rem 0 2em' : '1rem' }}
    >
      <p>{t('search_error')}</p>
      {process.env.NODE_ENV === 'development' && (
        <p>
          <small>
            <code>{error.toString()}</code>
          </small>
        </p>
      )}
    </Flash>
  )
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
  const [selectedVersion, setSelectedVersion] = useState<ItemInput | undefined>()

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

  const searchVersions: ItemInput[] = versions.map(({ title, version }) => {
    return {
      text: title,
      key: version,
    }
  })

  const redirectParams: {
    query: string
    debug?: string
  } = { query }

  if (debug) redirectParams.debug = JSON.stringify(debug)

  const redirectQuery = `?${new URLSearchParams(redirectParams).toString()}`

  useEffect(() => {
    if (selectedVersion) {
      const params = new URLSearchParams(redirectParams)
      let asPath = `/${router.locale}`

      if (params.toString()) {
        asPath += `?${params.toString()}`
      }

      if (selectedVersion.key === DEFAULT_VERSION) {
        router.push(`/?${params.toString()}`, asPath)
      } else {
        router.push(`/${router.locale}/${selectedVersion.key}${redirectQuery}`)
      }
    }
  }, [selectedVersion])

  if (results) {
    const ActionListResults = (
      <div
        data-testid="search-results"
        className={cx(
          'mt-3',
          isHeaderSearch && styles.headerSearchResults,
          isHeaderSearch && 'overflow-auto'
        )}
      >
        <div className={cx(styles.versionSearchContainer, 'mt-4 pb-4 width-full border-bottom')}>
          <p className={cx(styles.searchWording, 'f6 ml-4 d-inline-block')}>
            You're searching the <strong>{searchVersion}</strong> version.
          </p>
          <div className="float-right mr-4">
            <p
              aria-describedby={`You're searching the ${searchVersion} version`}
              className={cx(styles.selectWording, 'f6 d-inline-block')}
            >
              Select version:
            </p>
            <DropdownMenu
              placeholder={searchVersion}
              items={searchVersions}
              selectedItem={selectedVersion}
              onChange={setSelectedVersion}
            />
          </div>
        </div>
        {/* We might have results AND isLoading. For example, the user typed
        a first word, and is now typing more. */}
        {isLoading && (
          <p className="d-block ml-4 mt-4">
            <span>{t('loading')}...</span>
          </p>
        )}
        <h1 className="ml-4 f2 mt-4">
          {t('search_results_for')}: {query}
        </h1>
        <p className="ml-4 mb-4 text-normal f5">
          {t('matches_displayed')}: {results.length === 0 ? t('no_results') : results.length}
        </p>

        <ActionList
          items={results.map(({ url, breadcrumbs, title, content, score, popularity }) => {
            return {
              key: url,
              text: title,
              renderItem: () => (
                <ActionList.Item as="div">
                  <Link href={url} className="no-underline color-fg-default">
                    <li
                      data-testid="search-result"
                      className={cx('list-style-none', styles.resultsContainer)}
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
                        <h2
                          className={cx('mt-2 text-normal f3 d-block')}
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
                          className={'d-block mt-2 opacity-70 text-small'}
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
            <Overlay
              initialFocusRef={anchorRef}
              returnFocusRef={anchorRef}
              ignoreClickRefs={[anchorRef]}
              onEscape={() => closeSearch()}
              onClickOutside={() => closeSearch()}
              aria-labelledby="title"
              sx={
                isHeaderSearch
                  ? {
                      background: 'none',
                      boxShadow: 'none',
                      position: 'static',
                      overflowY: 'auto',
                      maxHeight: '80vh',
                      maxWidth: '96%',
                      margin: '1.5em 2em 0 0.5em',
                      scrollbarWidth: 'none',
                    }
                  : window.innerWidth < 1012
                  ? {
                      marginTop: '28rem',
                      marginLeft: '5rem',
                    }
                  : {
                      marginTop: '15rem',
                      marginLeft: '5rem',
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
