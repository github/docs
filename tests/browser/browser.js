/* global page, browser */
const sleep = require('await-sleep')
const querystring = require('querystring')

describe('homepage', () => {
  test('should be titled "GitHub Documentation"', async () => {
    await page.goto('http://localhost:4001')
    await expect(page.title()).resolves.toMatch('GitHub Documentation')
  })
})

describe('algolia browser search', () => {
  it('works on the homepage', async () => {
    await page.goto('http://localhost:4001/en')
    await page.click('#search-input-container input[type="search"]')
    await page.type('#search-input-container input[type="search"]', 'actions')
    await page.waitForSelector('.ais-Hits')
    const hits = await page.$$('.ais-Hits-item')
    expect(hits.length).toBeGreaterThan(5)
  })

  it('works on article pages', async () => {
    await page.goto('http://localhost:4001/en/actions')
    await page.click('#search-input-container input[type="search"]')
    await page.type('#search-input-container input[type="search"]', 'workflows')
    await page.waitForSelector('.ais-Hits')
    const hits = await page.$$('.ais-Hits-item')
    expect(hits.length).toBeGreaterThan(5)
  })

  it('works on 404 error page', async () => {
    await page.goto('http://localhost:4001/en/404')
    await page.click('#search-input-container input[type="search"]')
    await page.type('#search-input-container input[type="search"]', 'actions')
    await page.waitForSelector('.ais-Hits')
    const hits = await page.$$('.ais-Hits-item')
    expect(hits.length).toBeGreaterThan(5)
  })

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

  it('removes `algolia-query` query param after page load', async () => {
    await page.goto('http://localhost:4001/en?algolia-query=helpme')

    // check that the query is still present at page load
    let location = await getLocationObject(page)
    expect(location.search).toBe('?algolia-query=helpme')

    // query removal is in a setInterval, so wait a bit
    await sleep(1000)

    // check that the query has been removed after a bit
    location = await getLocationObject(page)
    expect(location.search).toBe('')
  })

  it('does not remove hash when removing `algolia-query` query', async () => {
    await page.goto('http://localhost:4001/en?algolia-query=helpme#some-header')

    // check that the query is still present at page load
    let location = await getLocationObject(page)
    expect(location.search).toBe('?algolia-query=helpme')

    // query removal is in a setInterval, so wait a bit
    await sleep(1000)

    // check that the query has been removed after a bit
    location = await getLocationObject(page)
    expect(location.search).toBe('')
    expect(location.hash).toBe('#some-header')
  })
})

describe('helpfulness', () => {
  it('sends an event to /events when submitting form', async () => {
    // Visit a page that displays the prompt
    await page.goto('http://localhost:4001/en/actions/getting-started-with-github-actions/about-github-actions')

    // Track network requests
    await page.setRequestInterception(true)
    page.on('request', request => {
      // Ignore GET requests
      if (!/\/events$/.test(request.url())) return request.continue()
      expect(request.method()).toMatch(/POST|PUT/)
      request.respond({
        contentType: 'application/json',
        body: JSON.stringify({ id: 'abcd1234' }),
        status: 200
      })
    })

    // When I click the "Yes" button
    await page.click('#helpfulness-sm [for=helpfulness-yes-sm]')
    // (sent a POST request to /events)
    // I see the request for my email
    await page.waitForSelector('#helpfulness-sm [type="email"]')

    // When I fill in my email and submit the form
    await page.type('#helpfulness-sm [type="email"]', 'test@example.com')

    await sleep(1000)

    await page.click('#helpfulness-sm [type="submit"]')
    // (sent a PUT request to /events/{id})
    // I see the feedback
    await page.waitForSelector('#helpfulness-sm [data-help-end]')
  })
})

describe('csrf meta', () => {
  it('should have a csrf-token meta tag on the page', async () => {
    await page.goto('http://localhost:4001/en/actions/getting-started-with-github-actions/about-github-actions')
    await page.waitForSelector('meta[name="csrf-token"]')
  })
})

async function getLocationObject (page) {
  const location = await page.evaluate(() => {
    return Promise.resolve(JSON.stringify(window.location, null, 2))
  })
  return JSON.parse(location)
}
