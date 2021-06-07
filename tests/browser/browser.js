/* global page, browser */
const sleep = require('await-sleep')
const { latest } = require('../../lib/enterprise-server-releases')
const languages = require('../../lib/languages')

describe('homepage', () => {
  jest.setTimeout(60 * 1000)

  test('should be titled "GitHub Documentation"', async () => {
    await page.goto('http://localhost:4001')
    await expect(page.title()).resolves.toMatch('GitHub Documentation')
  })
})

describe('browser search', () => {
  jest.setTimeout(60 * 1000)

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

  it('sends the correct data to search for Enterprise Server', async () => {
    expect.assertions(2)

    const newPage = await browser.newPage()
    await newPage.goto('http://localhost:4001/ja/enterprise-server@2.22/admin/installation')

    await newPage.setRequestInterception(true)
    newPage.on('request', interceptedRequest => {
      if (interceptedRequest.method() === 'GET' && /search\?/i.test(interceptedRequest.url())) {
        const { searchParams } = new URL(interceptedRequest.url())
        expect(searchParams.get('version')).toBe('2.22')
        expect(searchParams.get('language')).toBe('ja')
      }
      interceptedRequest.continue()
    })

    await newPage.click('#search-input-container input[type="search"]')
    await newPage.type('#search-input-container input[type="search"]', 'test')
    await newPage.waitForSelector('.search-result')
  })

  it('sends the correct data to search for GHAE', async () => {
    expect.assertions(2)

    const newPage = await browser.newPage()
    await newPage.goto('http://localhost:4001/en/github-ae@latest/admin/overview')

    await newPage.setRequestInterception(true)
    newPage.on('request', interceptedRequest => {
      if (interceptedRequest.method() === 'GET' && /search\?/i.test(interceptedRequest.url())) {
        const { searchParams } = new URL(interceptedRequest.url())
        expect(searchParams.get('version')).toBe('ghae')
        expect(searchParams.get('language')).toBe('en')
      }
      interceptedRequest.continue()
    })

    await newPage.click('#search-input-container input[type="search"]')
    await newPage.type('#search-input-container input[type="search"]', 'test')
    await newPage.waitForSelector('.search-result')
  })
})

describe('survey', () => {
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
    await page.click('.js-survey [for=survey-yes]')
    // (sent a POST request to /events)
    // I see the request for my email
    await page.waitForSelector('.js-survey [type="email"]')

    // When I fill in my email and submit the form
    await page.type('.js-survey [type="email"]', 'test@example.com')

    await sleep(1000)

    await page.click('.js-survey [type="submit"]')
    // (sent a PUT request to /events/{id})
    // I see the feedback
    await page.waitForSelector('.js-survey [data-help-end]')
  })
})

describe('csrf meta', () => {
  it('should have a csrf-token meta tag on the page', async () => {
    await page.goto('http://localhost:4001/en/actions/getting-started-with-github-actions/about-github-actions')
    await page.waitForSelector('meta[name="csrf-token"]')
  })
})

describe('platform specific content', () => {
  // from tests/javascripts/user-agent.js
  const userAgents = [
    { name: 'Mac', id: 'mac', ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9' },
    { name: 'Windows', id: 'windows', ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36' },
    { name: 'Linux', id: 'linux', ua: 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1' }
  ]
  const linuxUserAgent = userAgents[2]
  const pageWithSwitcher = 'http://localhost:4001/en/github/using-git/configuring-git-to-handle-line-endings'
  const pageWithoutSwitcher = 'http://localhost:4001/en/github/using-git'
  const pageWithDefaultPlatform = 'http://localhost:4001/en/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service'

  it('should have a platform switcher', async () => {
    await page.goto(pageWithSwitcher)
    const nav = await page.$$('nav.UnderlineNav')
    const switches = await page.$$('a.platform-switcher')
    const selectedSwitch = await page.$$('a.platform-switcher.selected')
    expect(nav).toHaveLength(1)
    expect(switches.length).toBeGreaterThan(1)
    expect(selectedSwitch).toHaveLength(1)
  })

  it('should NOT have a platform switcher', async () => {
    await page.goto(pageWithoutSwitcher)
    const nav = await page.$$('nav.UnderlineNav')
    const switches = await page.$$('a.platform-switcher')
    const selectedSwitch = await page.$$('a.platform-switcher.selected')
    expect(nav).toHaveLength(0)
    expect(switches).toHaveLength(0)
    expect(selectedSwitch).toHaveLength(0)
  })

  it('should detect platform from user agent', async () => {
    for (const agent of userAgents) {
      await page.setUserAgent(agent.ua)
      await page.goto(pageWithSwitcher)
      const selectedPlatformElement = await page.waitForSelector('a.platform-switcher.selected')
      const selectedPlatform = await page.evaluate(el => el.textContent, selectedPlatformElement)
      expect(selectedPlatform).toBe(agent.name)
    }
  })

  it('should prefer defaultPlatform from frontmatter', async () => {
    for (const agent of userAgents) {
      await page.setUserAgent(agent.ua)
      await page.goto(pageWithDefaultPlatform)
      const defaultPlatform = await page.$eval('[data-default-platform]', el => el.dataset.defaultPlatform)
      const selectedPlatformElement = await page.waitForSelector('a.platform-switcher.selected')
      const selectedPlatform = await page.evaluate(el => el.textContent, selectedPlatformElement)
      expect(defaultPlatform).toBe(linuxUserAgent.id)
      expect(selectedPlatform).toBe(linuxUserAgent.name)
    }
  })

  it('should show the content for the selected platform only', async () => {
    await page.goto(pageWithSwitcher)

    const platforms = ['mac', 'windows', 'linux']
    for (const platform of platforms) {
      await page.click(`.platform-switcher[data-platform="${platform}"]`)

      // content for selected platform is expected to become visible
      await page.waitForSelector(`.extended-markdown.${platform}`, { visible: true, timeout: 3000 })

      // only a single tab should be selected
      const selectedSwitch = await page.$$('a.platform-switcher.selected')
      expect(selectedSwitch).toHaveLength(1)

      // content for NOT selected platforms is expected to become hidden
      const otherPlatforms = platforms.filter(e => e !== platform)
      for (const other of otherPlatforms) {
        await page.waitForSelector(`.extended-markdown.${other}`, { hidden: true, timeout: 3000 })
      }
    }
  })
})

describe('card filters', () => {
  it('loads correctly', async () => {
    await page.goto('http://localhost:4001/en/actions')
    const shownCards = await page.$$('.js-filter-card:not(.d-none)')
    const shownNoResult = await page.$('.js-filter-card-no-results:not(.d-none)')
    const maxCards = await page.$eval('.js-filter-card-show-more', btn => parseInt(btn.dataset.jsFilterCardMax))
    expect(shownCards.length).toBe(maxCards)
    expect(shownNoResult).toBeNull()
  })

  it('filters cards', async () => {
    await page.goto('http://localhost:4001/en/actions')
    await page.click('input.js-filter-card-filter')
    await page.type('input.js-filter-card-filter', 'issues')
    const shownCards = await page.$$('.js-filter-card:not(.d-none)')
    const showMoreClasses = await page.$eval('.js-filter-card-show-more', btn => Object.values(btn.classList))
    expect(showMoreClasses).toContain('d-none')
    expect(shownCards.length).toBeGreaterThan(1)
  })

  it('works with select input', async () => {
    await page.goto('http://localhost:4001/en/actions/guides')
    await page.select('.js-filter-card-filter-dropdown[name="type"]', 'overview')
    const shownCards = await page.$$('.js-filter-card:not(.d-none)')
    const shownCardsAttrib = await page.$$eval('.js-filter-card:not(.d-none)', cards =>
      cards.map(card => card.dataset.type)
    )
    shownCardsAttrib.map(attrib => expect(attrib).toBe('overview'))
    expect(shownCards.length).toBeGreaterThan(0)
  })

  it('works with select input on an Enterprise version', async () => {
    await page.goto(`http://localhost:4001/en/enterprise-server@${latest}/actions/guides`)
    await page.select('.js-filter-card-filter-dropdown[name="type"]', 'overview')
    const shownCards = await page.$$('.js-filter-card:not(.d-none)')
    const shownCardsAttrib = await page.$$eval('.js-filter-card:not(.d-none)', cards =>
      cards.map(card => card.dataset.type)
    )
    shownCardsAttrib.map(attrib => expect(attrib).toBe('overview'))
    expect(shownCards.length).toBeGreaterThan(0)
  })

  it('shows more cards', async () => {
    await page.goto('http://localhost:4001/en/actions')
    const maxCards = await page.$eval('.js-filter-card-show-more', btn => parseInt(btn.dataset.jsFilterCardMax))
    await page.click('.js-filter-card-show-more')
    const shownCards = await page.$$('.js-filter-card:not(.d-none)')
    expect(shownCards.length).toBe(maxCards * 2)
  })

  it('displays no result message', async () => {
    await page.goto('http://localhost:4001/en/actions')
    await page.click('input.js-filter-card-filter')
    await page.type('input.js-filter-card-filter', 'this should not work')
    const shownCards = await page.$$('.js-filter-card:not(.d-none)')
    expect(shownCards.length).toBe(0)
    const noResultsClasses = await page.$eval('.js-filter-card-no-results', elem => Object.values(elem.classList))
    expect(noResultsClasses).not.toContain('d-none')
  })
})

describe('language banner', () => {
  it('directs user to the English version of the article', async () => {
    const wipLanguageKey = Object.keys(languages).find(key => languages[key].wip)

    // This kinda sucks, but if we don't have a WIP language, we currently can't
    // run a reliable test. But hey, on the bright side, if we don't have a WIP
    // language then this code will never run anyway!
    if (wipLanguageKey) {
      const res = await page.goto(`http://localhost:4001/${wipLanguageKey}/actions`)
      expect(res.ok()).toBe(true)
      const href = await page.$eval('a#to-english-doc', el => el.href)
      expect(href.endsWith('/en/actions')).toBe(true)
    }
  })
})

// The Explorer in the iFrame will not be accessible on localhost, but we can still
// test the query param handling
describe('GraphQL Explorer', () => {
  it('preserves query strings on the Explorer page without opening search', async () => {
    const queryString = `query {
  viewer {
    foo
  }
}`
    // Encoded as: query%20%7B%0A%20%20viewer%20%7B%0A%20%20%20%20foo%0A%20%20%7D%0A%7D
    const encodedString = encodeURIComponent(queryString)
    const explorerUrl = 'http://localhost:4001/en/graphql/overview/explorer'

    await page.goto(`${explorerUrl}?query=${encodedString}`)

    // On non-Explorer pages, query params handled by search JS get form-encoded using `+` instead of `%20`.
    // So on these pages, the following test will be false; but on the Explorer page, it should be true.
    expect(page.url().endsWith(encodedString)).toBe(true)

    // On non-Explorer pages, query params handled by search JS will populate in the search box and the `js-open`
    // class is added. On these pages, the following test will NOT be null; but on the Explorer page, it should be null.
    await page.waitForSelector('#search-results-container')
    const searchResult = await page.$('#search-results-container.js-open')
    expect(searchResult).toBeNull()
  })
})

describe('nextjs query param', () => {
  jest.setTimeout(60 * 1000)

  it('conditionally renders through nextjs pipeline depending on FEATURE_NEXTJS value', async () => {
    const flagVal = require('../../feature-flags.json').FEATURE_NEXTJS
    await page.goto('http://localhost:4001/en/actions?nextjs=')
    const nextWrapper = await page.$('#__next')
    flagVal === true ? expect(nextWrapper).toBeDefined() : expect(nextWrapper).toBeNull()
  })

  it('does not render through nextjs pipeline when nextjs query param is missing', async () => {
    await page.goto('http://localhost:4001/en/actions')
    const nextWrapper = await page.$('#__next')
    expect(nextWrapper).toBeNull()
  })
})
