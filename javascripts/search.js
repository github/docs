import { tags } from './hyperscript'
import { sendEvent } from './events'
const searchWithYourKeyboard = require('search-with-your-keyboard')
const truncate = require('html-truncate')
const languages = require('../lib/languages')
const allVersions = require('../lib/all-versions')
const nonEnterpriseDefaultVersion = require('../lib/non-enterprise-default-version')

const languageCodes = Object.keys(languages)
const maxContentLength = 300

let $searchInputContainer
let $searchResultsContainer
let $searchOverlay
let $searchInput

let placeholder = 'Search topics, products...'
let version
let language

export default function search () {
  $searchInputContainer = document.getElementById('search-input-container')
  $searchResultsContainer = document.getElementById('search-results-container')

  if (!$searchInputContainer || !$searchResultsContainer) return

  $searchOverlay = document.querySelector('.search-overlay-desktop')

  // There's an index for every version/language combination
  version = deriveVersionFromPath()
  language = deriveLanguageCodeFromPath()

  // Find search placeholder text in a <meta> tag, falling back to a default
  const $placeholderMeta = document.querySelector('meta[name="site.data.ui.search.placeholder"]')
  if ($placeholderMeta) {
    placeholder = $placeholderMeta.content
  }

  $searchInputContainer.append(tmplSearchInput())
  $searchInput = $searchInputContainer.querySelector('input')

  searchWithYourKeyboard('#search-input-container input', '.ais-Hits-item')
  toggleSearchDisplay()

  $searchInputContainer.querySelector('form')
    .addEventListener('submit', evt => evt.preventDefault())
  $searchInput.addEventListener('keyup', debounce(onSearch))
}

// The home page and 404 pages have a standalone search
function hasStandaloneSearch () {
  return document.getElementById('landing') ||
    document.querySelector('body.error-404') !== null
}

function toggleSearchDisplay () {
  // Clear/close search, if ESC is clicked
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      closeSearch()
    }
  })

  // If not on homepage...
  if (hasStandaloneSearch()) return

  const $input = $searchInput

  // Open modal if input is clicked
  $input.addEventListener('focus', () => {
    openSearch()
  })

  // Close modal if overlay is clicked
  if ($searchOverlay) {
    $searchOverlay.addEventListener('click', () => {
      closeSearch()
    })
  }

  // Open modal if page loads with query in the params/input
  if ($input.value) {
    openSearch()
  }
}

function openSearch () {
  $searchInput.classList.add('js-open')
  $searchResultsContainer.classList.add('js-open')
  $searchOverlay.classList.add('js-open')
}

function closeSearch () {
  // Close modal if not on homepage
  if (!hasStandaloneSearch()) {
    $searchInput.classList.remove('js-open')
    $searchResultsContainer.classList.remove('js-open')
    $searchOverlay.classList.remove('js-open')
  }

  const $hits = $searchResultsContainer.querySelector('.ais-Hits')
  if ($hits) $hits.style.display = 'none'
  $searchInput.value = ''
}

function deriveLanguageCodeFromPath () {
  let languageCode = location.pathname.split('/')[1]
  if (!languageCodes.includes(languageCode)) languageCode = 'en'
  return languageCode
}

function deriveVersionFromPath () {
  // fall back to the non-enterprise default version (FPT currently) on the homepage, 404 page, etc.
  const versionStr = location.pathname.split('/')[2] || nonEnterpriseDefaultVersion
  const versionObject = allVersions[versionStr] || allVersions[nonEnterpriseDefaultVersion]

  // if GHES, returns the release number like 2.21, 2.22, etc.
  // if FPT, returns 'dotcom'
  // if GHAE, returns 'ghae'
  return versionObject.plan === 'enterprise-server'
    ? versionObject.currentRelease
    : versionObject.miscBaseName
}

function debounce (fn, delay = 300) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(null, args), delay)
  }
}

async function onSearch (evt) {
  const query = evt.target.value

  const url = new URL(location.origin)
  url.pathname = '/search'
  url.search = new URLSearchParams({ query, version, language }).toString()

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const results = response.ok ? await response.json() : []

  $searchResultsContainer.querySelectorAll('*').forEach(el => el.remove())
  $searchResultsContainer.append(
    tmplSearchResults(results)
  )

  toggleStandaloneSearch()

  // Analytics tracking
  sendEvent({
    type: 'search',
    search_query: query
    // search_context
  })
}

// If on homepage, toggle results container if query is present
function toggleStandaloneSearch () {
  if (!hasStandaloneSearch()) return

  const query = $searchInput.value
  const queryPresent = query && query.length > 0
  const $results = document.querySelector('.ais-Hits')

  // Primer classNames for showing and hiding the results container
  const activeClass = $searchResultsContainer.getAttribute('data-active-class')
  const inactiveClass = $searchResultsContainer.getAttribute('data-inactive-class')

  if (!activeClass) {
    console.error('container is missing required `data-active-class` attribute', $searchResultsContainer)
    return
  }

  if (!inactiveClass) {
    console.error('container is missing required `data-inactive-class` attribute', $searchResultsContainer)
    return
  }

  // hide the container when no query is present
  $searchResultsContainer.classList.toggle(activeClass, queryPresent)
  $searchResultsContainer.classList.toggle(inactiveClass, !queryPresent)

  if (queryPresent && $results) $results.style.display = 'block'
}

/** * Template functions ***/

function tmplSearchInput () {
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
        maxlength: '512'
      }),
      button({
        class: 'ais-SearchBox-submit',
        type: 'submit',
        title: 'Submit the search query.',
        hidden: true
      })
    )
  )
}

function tmplSearchResults (items) {
  const { div, ol, li } = tags
  return div(
    { class: 'ais-Hits', style: 'display:block' },
    ol(
      { class: 'ais-Hits-list' },
      items.map(item => li(
        { class: 'ais-Hits-item' },
        tmplSearchResult(item)
      ))
    )
  )
}

function tmplSearchResult ({ url, breadcrumbs, heading, title, content }) {
  const { div, a } = tags
  return div(
    { class: 'search-result border-top border-gray-light py-3 px-2' },
    a(
      { href: url, class: 'no-underline' },
      div(
        { class: 'search-result-breadcrumbs d-block text-gray-dark opacity-60 text-small pb-1' },
        // Remove redundant title from the end of breadcrumbs
        markify((breadcrumbs || '').replace(` / ${title}`, ''))
      ),
      div(
        { class: 'search-result-title d-block h4-mktg text-gray-dark' },
        // Display page title and heading (if present exists)
        markify(heading ? `${title}: ${heading}` : title)
      ),
      div(
        { class: 'search-result-content d-block text-gray' },
        // Truncate without breaking inner HTML tags
        markify(truncate(content, maxContentLength))
      )
    )
  )
}

// Convert em to mark tags in search responses
function markify (text) {
  const { mark } = tags
  return text
    .split(/<\/?mark>/g)
    .map((el, i) => i % 2 ? mark(el) : el)
}
