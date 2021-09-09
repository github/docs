import { useState, useEffect, useRef, ReactNode } from 'react'
import { useRouter } from 'next/router'
import debounce from 'lodash/debounce'
import cx from 'classnames'

import { useTranslation } from 'components/hooks/useTranslation'
import { sendEvent, EventType } from 'components/lib/events'
import { useMainContext } from './context/MainContext'
import { useVersion } from 'components/hooks/useVersion'
import { useLanguages } from './context/LanguagesContext'

import styles from './Search.module.scss'

type SearchResult = {
  url: string
  breadcrumbs: string
  heading: string
  title: string
  content: string
}

type Props = {
  isOverlay?: boolean
  variant?: 'compact' | 'expanded'
  autoFocus?: boolean
  updateSearchParams?: boolean
  children?: (props: { SearchInput: ReactNode; SearchResults: ReactNode }) => ReactNode
}
export function Search({
  autoFocus = false,
  isOverlay = false,
  updateSearchParams = true,
  variant = 'compact',
  children,
}: Props) {
  const router = useRouter()
  const [query, setQuery] = useState(router.query.query || '')
  const [results, setResults] = useState<Array<SearchResult>>([])
  const [isLoading, setIsLoading] = useState(false)
  const [activeHit, setActiveHit] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const { t } = useTranslation('search')
  const { currentVersion } = useVersion()
  const { languages } = useLanguages()

  // Figure out language and version for index
  const { searchVersions, nonEnterpriseDefaultVersion } = useMainContext()
  // fall back to the non-enterprise default version (FPT currently) on the homepage, 404 page, etc.
  const version = searchVersions[currentVersion] || searchVersions[nonEnterpriseDefaultVersion]
  const language = (Object.keys(languages).includes(router.locale || '') && router.locale) || 'en'

  // If the user shows up with a query in the URL, go ahead and search for it
  useEffect(() => {
    if (updateSearchParams && router.query.query) {
      /* await */ fetchSearchResults((router.query.query as string).trim())
    }
  }, [])

  // Search with your keyboard
  useEffect(() => {
    document.addEventListener('keydown', searchWithYourKeyboard)
    return () => document.removeEventListener('keydown', searchWithYourKeyboard)
  }, [results, activeHit])

  function searchWithYourKeyboard(event: KeyboardEvent) {
    switch (event.key) {
      case '/':
        // when an input is focused, `/` should have no special behavior
        if (['INPUT', 'TEXTAREA', 'SEARCH'].includes(document?.activeElement?.tagName || '')) break
        event.preventDefault() // prevent slash from being typed into input
        inputRef.current?.focus()
        break
      case 'Escape':
        closeSearch()
        break
      case 'ArrowDown':
        if (!results.length) break
        event.preventDefault() // prevent window scrolling
        if (activeHit >= results.length) break
        setActiveHit(activeHit + 1)
        break
      case 'ArrowUp':
        if (!results.length) break
        event.preventDefault() // prevent window scrolling
        if (activeHit === 0) break
        setActiveHit(activeHit - 1)
        break
      case 'Enter':
        // look for a link in the given hit, then visit it
        if (activeHit === 0 || !results.length) break
        window.location.href = results[activeHit - 1]?.url
        break
    }
  }

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

    // deactivate any active hit when typing in search box
    setActiveHit(0)

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
        setResults([])
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
    setResults([])
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
          'z-1 pb-4 px-3',
          styles.resultsContainer,
          isOverlay && styles.resultsContainerOverlay,
          query && styles.resultsContainerOpen
        )}
      >
        {results.length > 0 ? (
          <ol data-testid="search-results" className="d-block mt-2">
            {results.map(({ url, breadcrumbs, heading, title, content }, index) => {
              const isActive = index === activeHit
              return (
                <li
                  key={url}
                  data-testid="search-result"
                  className={cx(
                    'list-style-none overflow-hidden rounded-3 color-text-primary border',
                    isActive ? 'color-bg-tertiary' : 'color-border-transparent'
                  )}
                  onMouseEnter={() => setActiveHit(index)}
                >
                  <div className={cx('py-3 px-3', isActive && 'color-border-secondary')}>
                    <a className="no-underline color-text-primary" href={url}>
                      {/* Breadcrumbs in search records don't include the page title. These fields may contain <mark> elements that we need to render */}
                      <div
                        className={'d-block opacity-60 text-small pb-1'}
                        dangerouslySetInnerHTML={{ __html: breadcrumbs }}
                      />
                      <div
                        className={cx(styles.searchResultTitle, 'd-block f4 font-weight-semibold')}
                        dangerouslySetInnerHTML={{
                          __html: heading ? `${title}: ${heading}` : title,
                        }}
                      />
                      <div
                        className={cx(styles.searchResultContent, 'd-block overflow-hidden')}
                        style={{ maxHeight: '4rem' }}
                        dangerouslySetInnerHTML={{ __html: content }}
                      />
                    </a>
                  </div>
                </li>
              )
            })}
          </ol>
        ) : (
          isOverlay && (
            <div className="mt-2 px-6">
              {isLoading ? <span>{t('loading')}...</span> : <span>{t('no_results')}.</span>}
            </div>
          )
        )}
      </div>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        className={cx('-z-1', isOverlay && query ? styles.searchOverlayOpen : 'd-none')}
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
              'form-control px-5 f4',
              variant === 'compact' && 'py-2',
              variant === 'expanded' && 'py-3',
              isOverlay && styles.searchInputOverlay,
              !isOverlay && 'width-full',
              isOverlay && query && styles.searchInputExpanded
            )}
            style={{
              background:
                'var(--color-bg-primary) url("/assets/images/octicons/search.svg") no-repeat 6px',
            }}
            type="search"
            placeholder={t`placeholder`}
            /* eslint-disable-next-line jsx-a11y/no-autofocus */
            autoFocus={autoFocus}
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
