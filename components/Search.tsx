import { useState, useEffect, useRef, Children, ReactNode } from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'
import debounce from 'lodash/debounce'
import { useTranslation } from 'components/hooks/useTranslation'
import { sendEvent } from '../javascripts/events'
import { useMainContext } from './context/MainContext'
import { useVersion } from 'components/hooks/useVersion'

type SearchResult = {
  url: string
  breadcrumbs: string
  heading: string
  title: string
  content: string
}

type Props = {
  isStandalone?: boolean
  updateSearchParams?: boolean
  children?: (props: { SearchInput: ReactNode; SearchResults: ReactNode }) => ReactNode
}
// Homepage and 404 should be `isStandalone`, all others not
// `updateSearchParams` should be false on the GraphQL explorer page
export function Search({ isStandalone = false, updateSearchParams = true, children }: Props) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Array<SearchResult>>([])
  const [activeHit, setActiveHit] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const { t } = useTranslation('search')
  const { currentVersion } = useVersion()

  // Figure out language and version for index
  const { expose } = useMainContext()
  const {
    searchOptions: { languages, versions, nonEnterpriseDefaultVersion },
  } = JSON.parse(expose)
  const router = useRouter()
  // fall back to the non-enterprise default version (FPT currently) on the homepage, 404 page, etc.
  const version = versions[currentVersion] || versions[nonEnterpriseDefaultVersion]
  const language = (languages.includes(router.locale) && router.locale) || 'en'

  // If the user shows up with a query in the URL, go ahead and search for it
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    if (params.has('query')) {
      const xquery = params.get('query')?.trim() || ''
      setQuery(xquery)
      /* await */ fetchSearchResults(xquery)
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
        // when the input is focused, `/` should have no special behavior
        if ((event.target as HTMLInputElement)?.type === 'search') break
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

    // Analytics tracking
    if (xquery) {
      sendEvent({
        type: 'search',
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
      <div id="search-results-container" className={results.length ? 'js-open' : ''}>
        {Boolean(results.length) && (
          <div className="ais-Hits d-block">
            <ol className="ais-Hits-list">
              {results.map(({ url, breadcrumbs, heading, title, content }, index) => (
                <li
                  key={url}
                  className={'ais-Hits-item' + (index + 1 === activeHit ? ' active' : '')}
                >
                  <div className="search-result border-top color-border-secondary py-3 px-2">
                    <a className="no-underline" href={url}>
                      {/* Breadcrumbs in search records don't include the page title. These fields may contain <mark> elements that we need to render */}
                      <div
                        className="search-result-breadcrumbs d-block color-text-primary opacity-60 text-small pb-1"
                        dangerouslySetInnerHTML={{ __html: breadcrumbs }}
                      />
                      <div
                        className="search-result-title d-block h4-mktg color-text-primary"
                        dangerouslySetInnerHTML={{
                          __html: heading ? `${title}: ${heading}` : title,
                        }}
                      />
                      <div
                        className="search-result-content d-block color-text-secondary"
                        dangerouslySetInnerHTML={{ __html: content }}
                      />
                    </a>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
      <div
        className={'search-overlay-desktop' + (!isStandalone && query ? ' js-open' : '')}
        onClick={closeSearch}
      ></div>
    </>
  )

  const SearchInput = (
    <div id="search-input-container" aria-hidden="true">
      <div className="ais-SearchBox">
        <form role="search" className="ais-SearchBox-form" noValidate onSubmit={preventRefresh}>
          <input
            ref={inputRef}
            className={'ais-SearchBox-input' + (isStandalone || query ? ' js-open' : '')}
            type="search"
            placeholder={t`placeholder`}
            autoFocus={isStandalone}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            maxLength={512}
            onChange={debounce(onSearch, 200)}
            defaultValue={query}
          />
          <button
            className="ais-SearchBox-submit"
            type="submit"
            title="Submit the search query."
            hidden
          />
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
