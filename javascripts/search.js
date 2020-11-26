import { sendEvent } from './events'
const instantsearch = require('instantsearch.js').default
const { searchBox, hits, configure, analytics } = require('instantsearch.js/es/widgets')
const algoliasearch = require('algoliasearch')
const searchWithYourKeyboard = require('search-with-your-keyboard')
const querystring = require('querystring')
const truncate = require('html-truncate')
const languages = require('../lib/languages')
const allVersions = require('../lib/all-versions')
const nonEnterpriseDefaultVersion = require('../lib/non-enterprise-default-version')

const languageCodes = Object.keys(languages)
const maxContentLength = 300

const hasStandaloneSearch = () => document.getElementById('landing') || document.querySelector('body.error-404') !== null

const resultTemplate = (item) => {
  // Attach an `algolia-query` param to each result link so analytics
  // can track the search query that led the user to this result
  const input = document.querySelector('#search-input-container input')
  if (input) {
    const url = new URL(item.objectID, window.location.origin)
    const queryParams = new URLSearchParams(url.search.slice(1))
    queryParams.append('algolia-query', input.value)
    url.search = queryParams.toString()
    item.modifiedURL = url.toString()
  }

  // Display page title and heading (if present exists)
  const title = item._highlightResult.heading
    ? [item._highlightResult.title.value, item._highlightResult.heading.value].join(': ')
    : item._highlightResult.title.value

  // Remove redundant title from the end of breadcrumbs
  if (item.breadcrumbs && item.breadcrumbs.endsWith(item.title)) {
    item.modifiedBreadcrumbs = item.breadcrumbs.replace(' / ' + item.title, '')
  } else {
    item.modifiedBreadcrumbs = item.breadcrumbs
  }

  // Truncate and ellipsize the content string without breaking any HTML
  // within it, such as the <mark> tags added by Algolia for emphasis.
  item.modifiedContent = truncate(item._highlightResult.content.value, maxContentLength)

  // Construct the template to return
  const html = `
    <div class="search-result border-top border-gray-light py-3 px-2">
      <a href="#" class="no-underline">
        <div class="search-result-breadcrumbs d-block text-gray-dark opacity-60 text-small pb-1">${item.modifiedBreadcrumbs}</div>
        <div class="search-result-title d-block h4-mktg text-gray-dark">${title}</div>
        <div class="search-result-content d-block text-gray">${item.modifiedContent}</div>
      </a>
    </div>
  `

  // Santize the link's href attribute using the DOM API to prevent XSS
  const fragment = document.createRange().createContextualFragment(html)
  fragment.querySelector('a').setAttribute('href', item.modifiedURL)
  const div = document.createElement('div')
  div.appendChild(fragment.cloneNode(true))

  return div.innerHTML
}

export default function () {
  window.initialPageLoad = true
  const opts = {

    // https://www.algolia.com/apps/ZI5KPY1HBE/dashboard
    // This API key is public. There's also a private API key for writing to the Aloglia API
    searchClient: algoliasearch('ZI5KPY1HBE', '685df617246c3a10abba589b4599288f'),

    // There's an index for every version/language combination
    indexName: `github-docs-${deriveVersionFromPath()}-${deriveLanguageCodeFromPath()}`,

    // allows "phrase queries" and "prohibit operator"
    // https://www.algolia.com/doc/api-reference/api-parameters/advancedSyntax/
    advancedSyntax: true,

    // sync query params to search input
    routing: true,

    searchFunction: helper => {
      // console.log('searchFunction', helper.state)
      const query = helper.state.query
      const queryPresent = query && query.length > 0
      const results = document.querySelector('.ais-Hits')
      // avoid conducting an empty search on page load;
      if (window.initialPageLoad && !queryPresent) return

      // after page load, search should be executed (even if the query is empty)
      // so as not to upset the default instantsearch.js behaviors like clearing
      // the input when [x] is clicked.
      helper.search()

      // If on homepage, toggle results container if query is present
      if (hasStandaloneSearch()) {
        const container = document.getElementById('search-results-container')
        // Primer classNames for showing and hiding the results container
        const activeClass = container.getAttribute('data-active-class')
        const inactiveClass = container.getAttribute('data-inactive-class')

        if (!activeClass) {
          console.error('container is missing required `data-active-class` attribute', container)
          return
        }

        if (!inactiveClass) {
          console.error('container is missing required `data-inactive-class` attribute', container)
          return
        }

        // hide the container when no query is present
        container.classList.toggle(activeClass, queryPresent)
        container.classList.toggle(inactiveClass, !queryPresent)
      }

      // Hack to work around a mysterious bug where the input is not cleared
      // when the [x] is clicked. Note: this bug only occurs on pages
      // loaded with a ?query=foo param already present
      if (!queryPresent) {
        setTimeout(() => {
          document.querySelector('#search-input-container input').value = ''
        }, 50)
        results.style.display = 'none'
      }

      if (queryPresent && results) results.style.display = 'block'
      window.initialPageLoad = false
      toggleSearchDisplay()
    }
  }

  const search = instantsearch(opts)

  // Find search placeholder text in a <meta> tag, falling back to a default
  const placeholderMeta = document.querySelector('meta[name="site.data.ui.search.placeholder"]')
  const placeholder = placeholderMeta ? placeholderMeta.content : 'Search topics, products...'

  search.addWidgets(
    [
      hits({
        container: '#search-results-container',
        templates: {
          empty: 'No results',
          item: resultTemplate
        },
        // useful for debugging template context, if needed
        transformItems: items => {
          // console.log(`transformItems`, items)
          return items
        }
      }),
      configure({
        analyticsTags: [
          'site:docs.github.com',
          `env:${process.env.NODE_ENV}`
        ]
      }),
      searchBox({
        container: '#search-input-container',
        placeholder,
        // only autofocus on the homepage, and only if no #hash is present in the URL
        autofocus: (hasStandaloneSearch()) && !window.location.hash.length,
        showReset: false,
        showSubmit: false
      }),
      analytics({
        pushFunction (params, state, results) {
          sendEvent({
            type: 'search',
            search_query: results.query
            // search_context
          })
        }
      })
    ]
  )

  // enable for debugging
  search.on('render', (...args) => {
    // console.log(`algolia render`, args)
  })

  search.on('error', (...args) => {
    console.error('algolia error', args)
  })

  search.start()
  searchWithYourKeyboard('#search-input-container input', '.ais-Hits-item')
  toggleSearchDisplay()

  // delay removal of the query param so analytics client code has a chance to track it
  setTimeout(() => { removeAlgoliaQueryTrackingParam() }, 500)
}

// When a user performs an in-site search an `algolia-query` param is
// added to the URL so analytics can track the queries and the pages
// they lead to. This function strips the query from the URL after page load,
// so the bare article URL can be copied/bookmarked/shared, sans tracking param
function removeAlgoliaQueryTrackingParam () {
  if (
    history &&
    history.replaceState &&
    location &&
    location.search &&
    location.search.includes('algolia-query=')
  ) {
    // parse the query string, remove the `algolia-query`, and put it all back together
    let q = querystring.parse(location.search.replace(/^\?/, ''))
    delete q['algolia-query']
    q = Object.keys(q).length ? '?' + querystring.stringify(q) : ''

    // update the URL in the address bar without modifying the history
    history.replaceState(null, '', `${location.pathname}${q}${location.hash}`)
  }
}

function toggleSearchDisplay (isReset) {
  const input = document.querySelector('#search-input-container input')
  const overlay = document.querySelector('.search-overlay-desktop')

  // If not on homepage...
  if (!hasStandaloneSearch()) {
    // Open modal if input is clicked
    input.addEventListener('focus', () => {
      openSearch()
    })

    // Close modal if overlay is clicked
    if (overlay) {
      overlay.addEventListener('click', () => {
        closeSearch()
      })
    }

    // Open modal if page loads with query in the params/input
    if (input.value) {
      openSearch()
    }
  }

  // Clear/close search, if ESC is clicked
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      closeSearch()
    }
  })
}

function openSearch () {
  document.querySelector('#search-input-container input').classList.add('js-open')
  document.querySelector('#search-results-container').classList.add('js-open')
  document.querySelector('.search-overlay-desktop').classList.add('js-open')
}

function closeSearch () {
  // Close modal if not on homepage
  if (!hasStandaloneSearch()) {
    document.querySelector('#search-input-container input').classList.remove('js-open')
    document.querySelector('#search-results-container').classList.remove('js-open')
    document.querySelector('.search-overlay-desktop').classList.remove('js-open')
  }

  document.querySelector('.ais-Hits').style.display = 'none'
  document.querySelector('#search-input-container input').value = ''
  window.history.replaceState({}, 'clear search query', window.location.pathname)
}

function deriveLanguageCodeFromPath () {
  let languageCode = location.pathname.split('/')[1]
  if (!languageCodes.includes(languageCode)) languageCode = 'en'
  return languageCode
}

function deriveVersionFromPath () {
  // fall back to the non-enterprise default version (FPT currently) on the homepage, 404 page, etc.
  const version = location.pathname.split('/')[2] || nonEnterpriseDefaultVersion
  const versionObject = allVersions[version] || allVersions[nonEnterpriseDefaultVersion]

  // if GHES, returns the release number like 2.21, 2.22, etc.
  // if FPT, returns 'dotcom'
  // if GHAE, returns 'ghae'
  return versionObject.plan === 'enterprise-server'
    ? versionObject.currentRelease
    : versionObject.miscBaseName
}
