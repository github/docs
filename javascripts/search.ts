import { tags } from './hyperscript'
import { sendEvent, EventType } from './events'
import searchWithYourKeyboard from 'search-with-your-keyboard'

let $searchInputContainer: HTMLElement | null | undefined
let $searchResultsContainer: HTMLElement | null | undefined
let $searchOverlay: HTMLElement | null | undefined
let $searchInput: HTMLInputElement | null | undefined

let isExplorerPage: boolean

// This is our default placeholder, but it can be localized with a <meta> tag
let placeholder = 'Search topics, products...'
let version: string
let language: string

export default function search() {
  // @ts-ignore
  if (window.IS_NEXTJS_PAGE) return

  // We don't want to mess with query params intended for the GraphQL Explorer
  isExplorerPage = Boolean(document.getElementById('graphiql'))

  // First, only initialize search if the elements are on the page
  $searchInputContainer = document.getElementById('search-input-container')
  $searchResultsContainer = document.getElementById('search-results-container')
  if (!$searchInputContainer || !$searchResultsContainer) return

  // This overlay exists so if you click off the search, it closes
  $searchOverlay = document.querySelector('.search-overlay-desktop') as HTMLElement

  // There's an index for every version/language combination
  const { languages, versions, nonEnterpriseDefaultVersion } = JSON.parse(
    (document.getElementById('expose') as HTMLScriptElement)?.text || ''
  ).searchOptions
  version = deriveVersionFromPath(versions, nonEnterpriseDefaultVersion)
  language = deriveLanguageCodeFromPath(languages)

  // Find search placeholder text in a <meta> tag, falling back to a default
  const $placeholderMeta = document.querySelector(
    'meta[name="site.data.ui.search.placeholder"]'
  ) as HTMLMetaElement
  if ($placeholderMeta) {
    placeholder = $placeholderMeta.content
  }

  // Write the search form into its container
  $searchInputContainer.append(tmplSearchInput())
  $searchInput = $searchInputContainer.querySelector('input') as HTMLInputElement

  // Prevent 'enter' from refreshing the page
  ;($searchInputContainer.querySelector('form') as HTMLFormElement).addEventListener(
    'submit',
    (evt) => evt.preventDefault()
  )

  // Search when the user finished typing
  $searchInput.addEventListener('keyup', debounce(onSearch))

  // Adds ability to navigate search results with keyboard (up, down, enter, esc)
  searchWithYourKeyboard('#search-input-container input', '.ais-Hits-item')

  // If the user already has a query in the URL, parse it and search away
  if (!isExplorerPage) {
    parseExistingSearch()
  }

  // If not on home page, decide if search panel should be open
  toggleSearchDisplay() // must come after parseExistingSearch
}

// The home page and 404 pages have a standalone search
function hasStandaloneSearch() {
  return document.getElementById('landing') || document.querySelector('body.error-404') !== null
}

function toggleSearchDisplay() {
  // Clear/close search, if ESC is clicked
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      closeSearch()
    }
  })

  // If not on homepage...
  if (hasStandaloneSearch()) return

  // Open panel if input is clicked
  $searchInput?.addEventListener('focus', openSearch)

  // Close panel if overlay is clicked
  if ($searchOverlay) {
    $searchOverlay.addEventListener('click', closeSearch)
  }

  // Open panel if page loads with query in the params/input
  if ($searchInput?.value) {
    openSearch()
  }
}

// On most pages, opens the search panel
function openSearch() {
  $searchInput?.classList.add('js-open')
  $searchResultsContainer?.classList.add('js-open')
  $searchOverlay?.classList.add('js-open')
}

// Close panel if not on homepage
function closeSearch() {
  if (!hasStandaloneSearch()) {
    $searchInput?.classList.remove('js-open')
    $searchResultsContainer?.classList.remove('js-open')
    $searchOverlay?.classList.remove('js-open')
  }

  if ($searchInput) $searchInput.value = ''
  onSearch()
}

function deriveLanguageCodeFromPath(languageCodes: Array<string>) {
  let languageCode = location.pathname.split('/')[1]
  if (!languageCodes.includes(languageCode)) languageCode = 'en'
  return languageCode
}

function deriveVersionFromPath(
  allVersions: Record<string, string>,
  nonEnterpriseDefaultVersion: string
) {
  // fall back to the non-enterprise default version (FPT currently) on the homepage, 404 page, etc.
  const versionStr = location.pathname.split('/')[2] || nonEnterpriseDefaultVersion
  return allVersions[versionStr] || allVersions[nonEnterpriseDefaultVersion]
}

// Wait for the event to stop triggering for X milliseconds before responding
function debounce(fn: Function, delay = 300) {
  let timer: number
  return (...args: Array<any>) => {
    clearTimeout(timer)
    timer = window.setTimeout(() => fn.apply(null, args), delay)
  }
}

// When the user finishes typing, update the results
async function onSearch() {
  const query = $searchInput?.value || ''

  // Update the URL with the search parameters in the query string
  // UNLESS this is the GraphQL Explorer page, where a query in the URL is a GraphQL query
  const pushUrl = new URL(location.toString())
  pushUrl.search = query && !isExplorerPage ? new URLSearchParams({ query }).toString() : ''
  history.pushState({}, '', pushUrl.toString())

  // If there's a query, call the endpoint
  // Otherwise, there's no results by default
  let results = []
  if (query.trim()) {
    const endpointUrl = new URL(location.origin)
    endpointUrl.pathname = '/search'
    endpointUrl.search = new URLSearchParams({ language, version, query }).toString()

    const response = await fetch(endpointUrl.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    results = response.ok ? await response.json() : []
  }

  // Either way, update the display
  $searchResultsContainer?.querySelectorAll('*').forEach((el) => el.remove())
  $searchResultsContainer?.append(tmplSearchResults(results))
  toggleStandaloneSearch()

  // Analytics tracking
  if (query.trim()) {
    sendEvent({
      type: EventType.search,
      search_query: query,
      // search_context
    })
  }
}

// If on homepage, toggle results container if query is present
function toggleStandaloneSearch() {
  if (!hasStandaloneSearch()) return

  const query = $searchInput?.value
  const queryPresent = Boolean(query && query.length > 0)
  const $results = document.querySelector('.ais-Hits') as HTMLElement

  // Primer classNames for showing and hiding the results container
  const activeClass = $searchResultsContainer?.getAttribute('data-active-class')
  const inactiveClass = $searchResultsContainer?.getAttribute('data-inactive-class')

  if (!activeClass) {
    console.error(
      'container is missing required `data-active-class` attribute',
      $searchResultsContainer
    )
    return
  }

  if (!inactiveClass) {
    console.error(
      'container is missing required `data-inactive-class` attribute',
      $searchResultsContainer
    )
    return
  }

  // hide the container when no query is present
  $searchResultsContainer?.classList.toggle(activeClass, queryPresent)
  $searchResultsContainer?.classList.toggle(inactiveClass, !queryPresent)

  if (queryPresent && $results) $results.style.display = 'block'
}

// If the user shows up with a query in the URL, go ahead and search for it
function parseExistingSearch() {
  const params = new URLSearchParams(location.search)
  if (!params.has('query')) return
  if ($searchInput) $searchInput.value = params.get('query') || ''
  onSearch()
}

/** * Template functions ***/

function tmplSearchInput() {
  // only autofocus on the homepage, and only if no #hash is present in the URL
  const autofocus = (hasStandaloneSearch() && !location.hash.length) || null
  const { div, form, input, button } = tags
  return div(
    { class: 'ais-SearchBox' },
    form(
      { role: 'search', class: 'ais-SearchBox-form', novalidate: true },
      input({
        class: 'ais-SearchBox-input',
        type: 'search',
        placeholder,
        autofocus,
        autocomplete: 'off',
        autocorrect: 'off',
        autocapitalize: 'off',
        spellcheck: 'false',
        maxlength: '512',
      }),
      button({
        class: 'ais-SearchBox-submit',
        type: 'submit',
        title: 'Submit the search query.',
        hidden: true,
      })
    )
  )
}

type SearchResult = {
  url: string
  breadcrumbs: string
  heading: string
  title: string
  content: string
}

function tmplSearchResults(items: Array<SearchResult>) {
  const { div, ol, li } = tags
  return div(
    { class: 'ais-Hits', style: 'display:block' },
    ol(
      { class: 'ais-Hits-list' },
      items.map((item) => li({ class: 'ais-Hits-item' }, tmplSearchResult(item)))
    )
  )
}

function tmplSearchResult({ url, breadcrumbs, heading, title, content }: SearchResult) {
  const { div, a } = tags
  return div(
    { class: 'search-result border-top color-border-secondary py-3 px-2' },
    a(
      { href: url, class: 'no-underline' },
      div(
        {
          class: 'search-result-breadcrumbs d-block color-text-primary opacity-60 text-small pb-1',
        },
        // Breadcrumbs in search records don't include the page title
        markify(breadcrumbs || '')
      ),
      div(
        { class: 'search-result-title d-block h4-mktg color-text-primary' },
        // Display page title and heading (if present exists)
        markify(heading ? `${title}: ${heading}` : title)
      ),
      div({ class: 'search-result-content d-block color-text-secondary' }, markify(content))
    )
  )
}

// Convert mark tags in search responses
function markify(text: string) {
  const { mark } = tags
  return text.split(/<\/?mark>/g).map((el, i) => (i % 2 ? mark(el) : el))
}
