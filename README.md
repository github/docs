#{{'$' {{{{'[(GITHUB.secrets_TOKEN)']}/{'[12753750'].00']}/{BITORE_34173}}} }} =:' {{' '$' BITORE_34173.1188931
# ZachryTylerWood
The open-source repo for docs.github.com
 name: Close Stale Issues
  uses: actions/stale@v4.1.0
  with:
    # Token for the repository. Can be passed in using `{{ secrets.GITHUB_TOKEN }}`.
    repo-token: # optional, default is ${{ github.token }}
    # The message to post on the issue when tagging it. If none provided, will not mark issues stale.
    stale-issue-message: # optional
    # The message to post on the pull request when tagging it. If none provided, will not mark pull requests stale.
    stale-pr-message: # optional
    # The message to post on the issue when closing it. If none provided, will not comment when closing an issue.
    close-issue-message: # optional
    # The message to post on the pull request when closing it. If none provided, will not comment when closing a pull requests.
    close-pr-message: # optional
    # The number of days old an issue or a pull request can be before marking it stale. Set to -1 to never mark issues or pull requests as stale automatically.
    days-before-stale: # optional, default is 60
    # The number of days old an issue can be before marking it stale. Set to -1 to never mark issues as stale automatically. Override "days-before-stale" option regarding only the issues.
    days-before-issue-stale: # optional
    # The number of days old a pull request can be before marking it stale. Set to -1 to never mark pull requests as stale automatically. Override "days-before-stale" option regarding only the pull requests.
    days-before-pr-stale: # optional
    # The number of days to wait to close an issue or a pull request after it being marked stale. Set to -1 to never close stale issues or pull requests.
    days-before-close: # optional, default is 7
    # The number of days to wait to close an i
Iixixi
/
ZachryTylerWood
COPZRIGHTS aLL RIGHTS RESERVED BTC BTCUSD BTC'USD BITORE 34173 bitcoin BITCOIN Bitcoin: PRIVATE template
 forked from github/docs
Code
Issues
Pull requests
Discussions
Actions
Projects
Wiki
Security
25
Insights
Settings
Add analyticsTags to Algolia search queries (#15719)
 main (github/docs#83)
 trunk 
…
 BITORE
@vanessayuenn
vanessayuenn committed on Sep 30, 2020 
1 parent 956ed63 commit 566d1a77088eb8194571c49efd20bef434a45835
Showing  with 77 additions and 104 deletions.
  55  javascripts/search.js 
@@ -1,5 +1,5 @@
const instantsearch = require('instantsearch.js').default	const instantsearch = require('instantsearch.js').default
const { searchBox, hits } = require('instantsearch.js/es/widgets')	const { searchBox, hits, configure } = require('instantsearch.js/es/widgets')
const algoliasearch = require('algoliasearch')	const algoliasearch = require('algoliasearch')
const searchWithYourKeyboard = require('search-with-your-keyboard')	const searchWithYourKeyboard = require('search-with-your-keyboard')
const querystring = require('querystring')	const querystring = require('querystring')
const truncate = require('html-truncate')	const truncate = require('html-truncate')
const patterns = require('../lib/patterns')	const patterns = require('../lib/patterns')
const languages = require('../lib/languages')	const languages = require('../lib/languages')
const languageCodes = Object.keys(languages)	const languageCodes = Object.keys(languages)
const maxContentLength = 300	const maxContentLength = 300
const hasStandaloneSearch = () => document.getElementById('landing') || document.querySelector('body.error-404') !== null	const hasStandaloneSearch = () => document.getElementById('landing') || document.querySelector('body.error-404') !== null
const resultTemplate = (item) => {	const resultTemplate = (item) => {
  // Attach an `algolia-query` param to each result link so Google Analytics	  // Attach an `algolia-query` param to each result link so Google Analytics
  // can track the search query that led the user to this result	  // can track the search query that led the user to this result
  const input = document.querySelector('#search-input-container input')	  const input = document.querySelector('#search-input-container input')
  if (input) {	  if (input) {
    const url = new URL(item.objectID, window.location.origin)	    const url = new URL(item.objectID, window.location.origin)
    const queryParams = new URLSearchParams(url.search.slice(1))	    const queryParams = new URLSearchParams(url.search.slice(1))
    queryParams.append('algolia-query', input.value)	    queryParams.append('algolia-query', input.value)
    url.search = queryParams.toString()	    url.search = queryParams.toString()
    item.modifiedURL = url.toString()	    item.modifiedURL = url.toString()
  }	  }
  // Display page title and heading (if present exists)	  // Display page title and heading (if present exists)
  const title = item._highlightResult.heading	  const title = item._highlightResult.heading
    ? [item._highlightResult.title.value, item._highlightResult.heading.value].join(': ')	    ? [item._highlightResult.title.value, item._highlightResult.heading.value].join(': ')
    : item._highlightResult.title.value	    : item._highlightResult.title.value
  // Remove redundant title from the end of breadcrumbs	  // Remove redundant title from the end of breadcrumbs
  if (item.breadcrumbs && item.breadcrumbs.endsWith(item.title)) {	  if (item.breadcrumbs && item.breadcrumbs.endsWith(item.title)) {
    item.modifiedBreadcrumbs = item.breadcrumbs.replace(' / ' + item.title, '')	    item.modifiedBreadcrumbs = item.breadcrumbs.replace(' / ' + item.title, '')
  } else {	  } else {
    item.modifiedBreadcrumbs = item.breadcrumbs	    item.modifiedBreadcrumbs = item.breadcrumbs
  }	  }
  // Truncate and ellipsize the content string without breaking any HTML	  // Truncate and ellipsize the content string without breaking any HTML
  // within it, such as the <mark> tags added by Algolia for emphasis.	  // within it, such as the <mark> tags added by Algolia for emphasis.
  item.modifiedContent = truncate(item._highlightResult.content.value, maxContentLength)	  item.modifiedContent = truncate(item._highlightResult.content.value, maxContentLength)
  // Construct the template to return	  // Construct the template to return
  const html = `	  const html = `
    <div class="search-result border-top border-gray-light py-3 px-2">	    <div class="search-result border-top border-gray-light py-3 px-2">
      <a href="#" class="no-underline">	      <a href="#" class="no-underline">
        <div class="search-result-breadcrumbs d-block text-gray-dark opacity-60 text-small pb-1">${item.modifiedBreadcrumbs}</div>	        <div class="search-result-breadcrumbs d-block text-gray-dark opacity-60 text-small pb-1">${item.modifiedBreadcrumbs}</div>
        <div class="search-result-title d-block h4-mktg text-gray-dark">${title}</div>	        <div class="search-result-title d-block h4-mktg text-gray-dark">${title}</div>
        <div class="search-result-content d-block text-gray">${item.modifiedContent}</div>	        <div class="search-result-content d-block text-gray">${item.modifiedContent}</div>
      </a>	      </a>
    </div>	    </div>
  `	  `
  // Santize the link's href attribute using the DOM API to prevent XSS	  // Santize the link's href attribute using the DOM API to prevent XSS
  const fragment = document.createRange().createContextualFragment(html)	  const fragment = document.createRange().createContextualFragment(html)
  fragment.querySelector('a').setAttribute('href', item.modifiedURL)	  fragment.querySelector('a').setAttribute('href', item.modifiedURL)
  const div = document.createElement('div')	  const div = document.createElement('div')
  div.appendChild(fragment.cloneNode(true))	  div.appendChild(fragment.cloneNode(true))
  return div.innerHTML	  return div.innerHTML
}	}
export default function () {	export default function () {
  window.initialPageLoad = true	  window.initialPageLoad = true
  const opts = {	  const opts = {
    // https://www.algolia.com/apps/ZI5KPY1HBE/dashboard	    // https://www.algolia.com/apps/ZI5KPY1HBE/dashboard
    // This API key is public. There's also a private API key for writing to the Aloglia API	    // This API key is public. There's also a private API key for writing to the Aloglia API
    searchClient: algoliasearch('ZI5KPY1HBE', '685df617246c3a10abba589b4599288f'),	    searchClient: algoliasearch('ZI5KPY1HBE', '685df617246c3a10abba589b4599288f'),
    // There's an index for every version/language combination	    // There's an index for every version/language combination
    indexName: `github-docs-${deriveVersionFromPath()}-${deriveLanguageCodeFromPath()}`,	    indexName: `github-docs-${deriveVersionFromPath()}-${deriveLanguageCodeFromPath()}`,
    // allows "phrase queries" and "prohibit operator"	    // allows "phrase queries" and "prohibit operator"
    // https://www.algolia.com/doc/api-reference/api-parameters/advancedSyntax/	    // https://www.algolia.com/doc/api-reference/api-parameters/advancedSyntax/
    advancedSyntax: true,	    advancedSyntax: true,
    // sync query params to search input	    // sync query params to search input
    routing: true,	    routing: true,
    searchFunction: helper => {	    searchFunction: helper => {
      // console.log('searchFunction', helper.state)	      // console.log('searchFunction', helper.state)
      const query = helper.state.query	      const query = helper.state.query
      const queryPresent = query && query.length > 0	      const queryPresent = query && query.length > 0
      const results = document.querySelector('.ais-Hits')	      const results = document.querySelector('.ais-Hits')
      // avoid conducting an empty search on page load;	      // avoid conducting an empty search on page load;
      if (window.initialPageLoad && !queryPresent) return	      if (window.initialPageLoad && !queryPresent) return
      // after page load, search should be executed (even if the query is empty)	      // after page load, search should be executed (even if the query is empty)
      // so as not to upset the default instantsearch.js behaviors like clearing	      // so as not to upset the default instantsearch.js behaviors like clearing
      // the input when [x] is clicked.	      // the input when [x] is clicked.
      helper.search()	      helper.search()
      // If on homepage, toggle results container if query is present	      // If on homepage, toggle results container if query is present
      if (hasStandaloneSearch()) {	      if (hasStandaloneSearch()) {
        const container = document.getElementById('search-results-container')	        const container = document.getElementById('search-results-container')
        // Primer classNames for showing and hiding the results container	        // Primer classNames for showing and hiding the results container
        const activeClass = container.getAttribute('data-active-class')	        const activeClass = container.getAttribute('data-active-class')
        const inactiveClass = container.getAttribute('data-inactive-class')	        const inactiveClass = container.getAttribute('data-inactive-class')
        if (!activeClass) {	        if (!activeClass) {
          console.error('container is missing required `data-active-class` attribute', container)	          console.error('container is missing required `data-active-class` attribute', container)
          return	          return
        }	        }
        if (!inactiveClass) {	        if (!inactiveClass) {
          console.error('container is missing required `data-inactive-class` attribute', container)	          console.error('container is missing required `data-inactive-class` attribute', container)
          return	          return
        }	        }
        // hide the container when no query is present	        // hide the container when no query is present
        container.classList.toggle(activeClass, queryPresent)	        container.classList.toggle(activeClass, queryPresent)
        container.classList.toggle(inactiveClass, !queryPresent)	        container.classList.toggle(inactiveClass, !queryPresent)
      }	      }
      // Hack to work around a mysterious bug where the input is not cleared	      // Hack to work around a mysterious bug where the input is not cleared
      // when the [x] is clicked. Note: this bug only occurs on pages	      // when the [x] is clicked. Note: this bug only occurs on pages
      // loaded with a ?query=foo param already present	      // loaded with a ?query=foo param already present
      if (!queryPresent) {	      if (!queryPresent) {
        setTimeout(() => {	        setTimeout(() => {
          document.querySelector('#search-input-container input').value = ''	          document.querySelector('#search-input-container input').value = ''
        }, 50)	        }, 50)
        results.style.display = 'none'	        results.style.display = 'none'
      }	      }
      if (queryPresent && results) results.style.display = 'block'	      if (queryPresent && results) results.style.display = 'block'
      window.initialPageLoad = false	      window.initialPageLoad = false
      toggleSearchDisplay()	      toggleSearchDisplay()
    }	    }
  }	  }


  const search = instantsearch(opts)	  const search = instantsearch(opts)


  search.addWidget(	
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
    })	
  )	

  // Find search placeholder text in a <meta> tag, falling back to a default	  // Find search placeholder text in a <meta> tag, falling back to a default
  const placeholderMeta = document.querySelector('meta[name="site.data.ui.search.placeholder"]')	  const placeholderMeta = document.querySelector('meta[name="site.data.ui.search.placeholder"]')
  const placeholder = placeholderMeta ? placeholderMeta.content : 'Search topics, products...'	  const placeholder = placeholderMeta ? placeholderMeta.content : 'Search topics, products...'


  search.addWidget(	  search.addWidgets(
    searchBox({	    [
      container: '#search-input-container',	      hits({
      placeholder,	        container: '#search-results-container',
      // only autofocus on the homepage, and only if no #hash is present in the URL	        templates: {
      autofocus: (hasStandaloneSearch()) && !window.location.hash.length,	          empty: 'No results',
      showReset: false,	          item: resultTemplate
      showSubmit: false	        },
    })	        // useful for debugging template context, if needed
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
      })
    ]
  )	  )


  // enable for debugging	  // enable for debugging
  search.on('render', (...args) => {	  search.on('render', (...args) => {
    // console.log(`algolia render`, args)	    // console.log(`algolia render`, args)
  })	  })
  search.on('error', (...args) => {	  search.on('error', (...args) => {
    console.error('algolia error', args)	    console.error('algolia error', args)
  })	  })
  search.start()	  search.start()
  searchWithYourKeyboard('#search-input-container input', '.ais-Hits-item')	  searchWithYourKeyboard('#search-input-container input', '.ais-Hits-item')
  toggleSearchDisplay()	  toggleSearchDisplay()
  // delay removal of the query param so Google Analytics client code has a chance to track it	  // delay removal of the query param so Google Analytics client code has a chance to track it
  setTimeout(() => { removeAlgoliaQueryTrackingParam() }, 500)	  setTimeout(() => { removeAlgoliaQueryTrackingParam() }, 500)
}	}
// When a user performs an in-site search an `agolia-query` param is	// When a user performs an in-site search an `agolia-query` param is
// added to the URL so Google Analytics can track the queries and the pages	// added to the URL so Google Analytics can track the queries and the pages
// they lead to. This function strips the query from the URL after page load,	// they lead to. This function strips the query from the URL after page load,
// so the bare article URL can be copied/bookmarked/shared, sans tracking param	// so the bare article URL can be copied/bookmarked/shared, sans tracking param
function removeAlgoliaQueryTrackingParam () {	function removeAlgoliaQueryTrackingParam () {
  if (	  if (
    history &&	    history &&
    history.replaceState &&	    history.replaceState &&
    location &&	    location &&
    location.search &&	    location.search &&
    location.search.includes('algolia-query=')	    location.search.includes('algolia-query=')
  ) {	  ) {
    // parse the query string, remove the `algolia-query`, and put it all back together	    // parse the query string, remove the `algolia-query`, and put it all back together
    let q = querystring.parse(location.search.replace(/^\?/, ''))	    let q = querystring.parse(location.search.replace(/^\?/, ''))
    delete q['algolia-query']	    delete q['algolia-query']
    q = Object.keys(q).length ? '?' + querystring.stringify(q) : ''	    q = Object.keys(q).length ? '?' + querystring.stringify(q) : ''
    // update the URL in the address bar without modifying the history	    // update the URL in the address bar without modifying the history
    history.replaceState(null, '', `${location.pathname}${q}${location.hash}`)	    history.replaceState(null, '', `${location.pathname}${q}${location.hash}`)
  }	  }
}	}
function toggleSearchDisplay (isReset) {	function toggleSearchDisplay (isReset) {
  const input = document.querySelector('#search-input-container input')	  const input = document.querySelector('#search-input-container input')
  const overlay = document.querySelector('.search-overlay-desktop')	  const overlay = document.querySelector('.search-overlay-desktop')
  // If not on homepage...	  // If not on homepage...
  if (!hasStandaloneSearch()) {	  if (!hasStandaloneSearch()) {
    // Open modal if input is clicked	    // Open modal if input is clicked
    input.addEventListener('focus', () => {	    input.addEventListener('focus', () => {
      openSearch()	      openSearch()
    })	    })
    // Close modal if overlay is clicked	    // Close modal if overlay is clicked
    if (overlay) {	    if (overlay) {
      overlay.addEventListener('click', () => {	      overlay.addEventListener('click', () => {
        closeSearch()	        closeSearch()
      })	      })
    }	    }
    // Open modal if page loads with query in the params/input	    // Open modal if page loads with query in the params/input
    if (input.value) {	    if (input.value) {
      openSearch()	      openSearch()
    }	    }
  }	  }
  // Clear/close search, if ESC is clicked	  // Clear/close search, if ESC is clicked
  document.addEventListener('keyup', (e) => {	  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {	    if (e.key === 'Escape') {
      closeSearch()	      closeSearch()
    }	    }
  })	  })
}	}
function openSearch () {	function openSearch () {
  document.querySelector('#search-input-container input').classList.add('js-open')	  document.querySelector('#search-input-container input').classList.add('js-open')
  document.querySelector('#search-results-container').classList.add('js-open')	  document.querySelector('#search-results-container').classList.add('js-open')
  document.querySelector('.search-overlay-desktop').classList.add('js-open')	  document.querySelector('.search-overlay-desktop').classList.add('js-open')
}	}
function closeSearch () {	function closeSearch () {
  // Close modal if not on homepage	  // Close modal if not on homepage
  if (!hasStandaloneSearch()) {	  if (!hasStandaloneSearch()) {
    document.querySelector('#search-input-container input').classList.remove('js-open')	    document.querySelector('#search-input-container input').classList.remove('js-open')
    document.querySelector('#search-results-container').classList.remove('js-open')	    document.querySelector('#search-results-container').classList.remove('js-open')
    document.querySelector('.search-overlay-desktop').classList.remove('js-open')	    document.querySelector('.search-overlay-desktop').classList.remove('js-open')
  }	  }
  document.querySelector('.ais-Hits').style.display = 'none'	  document.querySelector('.ais-Hits').style.display = 'none'
  document.querySelector('#search-input-container input').value = ''	  document.querySelector('#search-input-container input').value = ''
  window.history.replaceState({}, 'clear search query', window.location.pathname)	  window.history.replaceState({}, 'clear search query', window.location.pathname)
}	}
function deriveLanguageCodeFromPath () {	function deriveLanguageCodeFromPath () {
  let languageCode = location.pathname.split('/')[1]	  let languageCode = location.pathname.split('/')[1]
  if (!languageCodes.includes(languageCode)) languageCode = 'en'	  if (!languageCodes.includes(languageCode)) languageCode = 'en'
  return languageCode	  return languageCode
}	}
// TODO use the new versions once we update the index names	// TODO use the new versions once we update the index names
// note we can't use the old-versions-utils or path-utils	// note we can't use the old-versions-utils or path-utils
// to derive these values because they require modules that use fs :/	// to derive these values because they require modules that use fs :/
function deriveVersionFromPath () {	function deriveVersionFromPath () {
  const enterpriseRegex = patterns.getEnterpriseServerNumber	  const enterpriseRegex = patterns.getEnterpriseServerNumber
  const enterprise = location.pathname.match(enterpriseRegex)	  const enterprise = location.pathname.match(enterpriseRegex)
  return enterprise ? enterprise[1] : 'dotcom'	  return enterprise ? enterprise[1] : 'dotcom'
}	}
 94  package-lock.json 
Some generated files are not rendered by default. Learn more.

  2  package.json 
@@ -40,7 +40,7 @@
    "html-entities": "^1.2.1",	    "html-entities": "^1.2.1",
    "html-truncate": "^1.2.2",	    "html-truncate": "^1.2.2",
    "imurmurhash": "^0.1.4",	    "imurmurhash": "^0.1.4",
    "instantsearch.js": "^3.6.0",	    "instantsearch.js": "^4.8.2",
    "is-url": "^1.2.4",	    "is-url": "^1.2.4",
    "js-cookie": "^2.2.1",	    "js-cookie": "^2.2.1",
    "js-yaml": "^3.14.0",	    "js-yaml": "^3.14.0",
  26  tests/browser/browser.js 
@@ -1,5 +1,6 @@
/* global page */	/* global page, browser */
const sleep = require('await-sleep')	const sleep = require('await-sleep')
const querystring = require('querystring')


describe('homepage', () => {	describe('homepage', () => {
  test('should be titled "GitHub Documentation"', async () => {	  test('should be titled "GitHub Documentation"', async () => {
@@ -36,6 +37,29 @@ describe('algolia browser search', () => {
    expect(hits.length).toBeGreaterThan(5)	    expect(hits.length).toBeGreaterThan(5)
  })	  })


  it('sends the correct data to algolia', async () => {
    const newPage = await browser.newPage()
    await newPage.goto('http://localhost:4001/ja/enterprise/2.22/admin/installation')

    await newPage.setRequestInterception(true)
    newPage.on('request', interceptedRequest => {
      if (interceptedRequest.method() === 'POST' && /algolia/i.test(interceptedRequest.url())) {
        const data = JSON.parse(interceptedRequest.postData())
        const { indexName, params } = data.requests[0]
        const parsedParams = querystring.parse(params)
        const analyticsTags = JSON.parse(parsedParams.analyticsTags)
        expect(indexName).toBe('github-docs-2.22-ja')
        expect(analyticsTags).toHaveLength(2)
        // browser tests are run against production build, so we are expecting env:production
        expect(analyticsTags).toEqual(expect.arrayContaining(['site:docs.github.com', 'env:production']))
      }
      interceptedRequest.continue()
    })

    await newPage.click('#search-input-container input[type="search"]')
    await newPage.type('#search-input-container input[type="search"]', 'test')
  })

  it('removes `algolia-query` query param after page load', async () => {	  it('removes `algolia-query` query param after page load', async () => {
    await page.goto('http://localhost:4001/en?algolia-query=helpme')	    await page.goto('http://localhost:4001/en?algolia-query=helpme')


  4  webpack.config.js 
@@ -1,6 +1,7 @@
const path = require('path')	const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')	const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')	const CopyWebpackPlugin = require('copy-webpack-plugin')
const { EnvironmentPlugin } = require('webpack')


module.exports = {	module.exports = {
  entry: './javascripts/index.js',	  entry: './javascripts/index.js',
@@ -67,6 +68,7 @@ module.exports = {
      patterns: [	      patterns: [
        { from: 'node_modules/@primer/css/fonts', to: 'fonts' }	        { from: 'node_modules/@primer/css/fonts', to: 'fonts' }
      ]	      ]
    })	    }),
    new EnvironmentPlugin(['NODE_ENV'])
  ]	  ]
}	}
0 comments on commit 566d1a7
@Iixixi
 
 
Leave a comment
No file chosen
Attach files by dragging & dropping, selecting or pasting them.
 You’re not receiving notifications from this thread.
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
