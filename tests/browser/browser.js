import { jest } from '@jest/globals'
import { latest } from '../../lib/enterprise-server-releases.js'
import languages from '../../lib/languages.js'

jest.useFakeTimers()

/* global page, browser */
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
    await page.click('[data-testid=site-search-input]')
    await page.type('[data-testid=site-search-input]', 'actions')
    await page.waitForSelector('.ais-Hits')
    const hits = await page.$$('.ais-Hits-item')
    expect(hits.length).toBeGreaterThan(5)
  })

  it('works on mobile landing pages', async () => {
    await page.goto('http://localhost:4001/en/actions')
    await page.click('[data-testid=mobile-menu-button]')
    await page.click('[data-testid=mobile-header] [data-testid=site-search-input]')
    await page.type('[data-testid=mobile-header] [data-testid=site-search-input]', 'workflows')
    await page.waitForSelector('.ais-Hits')
    const hits = await page.$$('.ais-Hits-item')
    expect(hits.length).toBeGreaterThan(5)
  })

  it('works on desktop landing pages', async () => {
    const initialViewport = page.viewport()
    await page.setViewport({ width: 1024, height: 768 })
    await page.goto('http://localhost:4001/en/actions')
    await page.click('[data-testid=desktop-header] [data-testid=site-search-input]')
    await page.type('[data-testid=desktop-header] [data-testid=site-search-input]', 'workflows')
    await page.waitForSelector('.ais-Hits')
    const hits = await page.$$('.ais-Hits-item')
    expect(hits.length).toBeGreaterThan(5)
    await page.setViewport(initialViewport)
  })
  // 404 page is statically generated with next, so search is not available, but may possibly be brought back
  it.skip('works on 404 error page', async () => {
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
    newPage.on('request', (interceptedRequest) => {
      if (interceptedRequest.method() === 'GET' && /search\?/i.test(interceptedRequest.url())) {
        const { searchParams } = new URL(interceptedRequest.url())
        expect(searchParams.get('version')).toBe('2.22')
        expect(searchParams.get('language')).toBe('ja')
      }
      interceptedRequest.continue()
    })

    await newPage.click('[data-testid=mobile-menu-button]')
    const searchInput = await newPage.$(
      '[data-testid=mobile-header] [data-testid=site-search-input]'
    )
    await searchInput.click()
    await searchInput.type('test')
    await newPage.waitForSelector('.search-result')
  })

  it('sends the correct data to search for GHAE', async () => {
    expect.assertions(2)

    const newPage = await browser.newPage()
    await newPage.goto('http://localhost:4001/en/github-ae@latest/admin/overview')

    await newPage.setRequestInterception(true)
    newPage.on('request', (interceptedRequest) => {
      if (interceptedRequest.method() === 'GET' && /search\?/i.test(interceptedRequest.url())) {
        const { searchParams } = new URL(interceptedRequest.url())
        expect(searchParams.get('version')).toBe('ghae')
        expect(searchParams.get('language')).toBe('en')
      }
      interceptedRequest.continue()
    })

    await newPage.click('[data-testid=mobile-menu-button]')
    const searchInput = await newPage.$(
      '[data-testid=mobile-header] [data-testid=site-search-input]'
    )
    await searchInput.click()
    await searchInput.type('test')
    await newPage.waitForSelector('.search-result')
  })
})

describe('survey', () => {
  jest.setTimeout(3 * 60 * 1000)

  it('sends an event to /events when submitting form', async () => {
    // Visit a page that displays the prompt
    await page.goto(
      'http://localhost:4001/en/actions/getting-started-with-github-actions/about-github-actions'
    )

    // Track network requests
    await page.setRequestInterception(true)
    page.on('request', (request) => {
      // Ignore GET requests
      if (!/\/events$/.test(request.url())) return request.continue()
      expect(request.method()).toMatch(/POST|PUT/)
      request.respond({
        contentType: 'application/json',
        body: JSON.stringify({ id: 'abcd1234' }),
        status: 200,
      })
    })

    // When I click the "Yes" button
    await page.click('[data-testid=survey-form] [for=survey-yes]')
    // (sent a POST request to /events)
    // I see the request for my email
    await page.waitForSelector('[data-testid=survey-form] [type="email"]')

    // When I fill in my email and submit the form
    await page.type('[data-testid=survey-form] [type="email"]', 'test@example.com')

    await page.click('[data-testid=survey-form] [type="submit"]')
    // (sent a PUT request to /events/{id})
    // I see the feedback
    await page.waitForSelector('[data-testid=survey-end]')
  })
})

describe('csrf meta', () => {
  it('should have a csrf-token meta tag on the page', async () => {
    await page.goto(
      'http://localhost:4001/en/actions/getting-started-with-github-actions/about-github-actions'
    )
    await page.waitForSelector('meta[name="csrf-token"]')
  })
})

describe('platform specific content', () => {
  // from tests/javascripts/user-agent.js
  const userAgents = [
    {
      name: 'Mac',
      id: 'mac',
      ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9',
    },
    {
      name: 'Windows',
      id: 'windows',
      ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36',
    },
    {
      name: 'Linux',
      id: 'linux',
      ua: 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1',
    },
  ]
  const linuxUserAgent = userAgents[2]
  const pageWithSwitcher =
    'http://localhost:4001/en/github/using-git/configuring-git-to-handle-line-endings'
  const pageWithoutSwitcher = 'http://localhost:4001/en/github/using-git'
  const pageWithDefaultPlatform =
    'http://localhost:4001/en/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service'

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
      const selectedPlatform = await page.evaluate((el) => el.textContent, selectedPlatformElement)
      expect(selectedPlatform).toBe(agent.name)
    }
  })

  it('should prefer defaultPlatform from frontmatter', async () => {
    for (const agent of userAgents) {
      await page.setUserAgent(agent.ua)
      await page.goto(pageWithDefaultPlatform)
      const defaultPlatform = await page.$eval(
        '[data-default-platform]',
        (el) => el.dataset.defaultPlatform
      )
      const selectedPlatformElement = await page.waitForSelector('a.platform-switcher.selected')
      const selectedPlatform = await page.evaluate((el) => el.textContent, selectedPlatformElement)
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
      const otherPlatforms = platforms.filter((e) => e !== platform)
      for (const other of otherPlatforms) {
        await page.waitForSelector(`.extended-markdown.${other}`, { hidden: true, timeout: 3000 })
      }
    }
  })
})

describe('tool specific content', () => {
  const pageWithSingleSwitcher =
    'http://localhost:4001/en/actions/managing-workflow-runs/manually-running-a-workflow'
  const pageWithoutSwitcher =
    'http://localhost:4001/en/billing/managing-billing-for-github-sponsors/about-billing-for-github-sponsors'
  const pageWithMultipleSwitcher =
    'http://localhost:4001/en/issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects'

  it('should have a tool switcher if a tool switcher is included', async () => {
    await page.goto(pageWithSingleSwitcher)
    const nav = await page.$$('nav#tool-switcher')
    const switches = await page.$$('a.tool-switcher')
    const selectedSwitch = await page.$$('a.tool-switcher.selected')
    expect(nav).toHaveLength(1)
    expect(switches.length).toBeGreaterThan(1)
    expect(selectedSwitch).toHaveLength(1)
  })

  it('should have multiple tool switchers if multiple tools switchers are included', async () => {
    await page.goto(pageWithMultipleSwitcher)
    const toolSelector = await page.$$('nav#tool-switcher')
    const switches = await page.$$('a.tool-switcher')
    const selectedSwitch = await page.$$('a.tool-switcher.selected')
    expect(toolSelector.length).toBeGreaterThan(1)
    expect(switches.length).toBeGreaterThan(1)
    expect(selectedSwitch.length).toEqual(toolSelector.length)
  })

  it('should NOT have a tool switcher if no tool switcher is included', async () => {
    await page.goto(pageWithoutSwitcher)
    const toolSelector = await page.$$('nav#tool-switcher')
    const switches = await page.$$('a.tool-switcher')
    const selectedSwitch = await page.$$('a.tool-switcher.selected')
    expect(toolSelector).toHaveLength(0)
    expect(switches).toHaveLength(0)
    expect(selectedSwitch).toHaveLength(0)
  })

  it('should use cli if no defaultTool is specified and if webui is not one of the tools', async () => {
    await page.goto(pageWithMultipleSwitcher)
    const selectedToolElement = await page.waitForSelector('a.tool-switcher.selected')
    const selectedTool = await page.evaluate((el) => el.textContent, selectedToolElement)
    expect(selectedTool).toBe('GitHub CLI')
  })

  it('should use webui if no defaultTool is specified and if webui is one of the tools', async () => {
    await page.goto(pageWithSingleSwitcher)
    const selectedToolElement = await page.waitForSelector('a.tool-switcher.selected')
    const selectedTool = await page.evaluate((el) => el.textContent, selectedToolElement)
    expect(selectedTool).toBe('GitHub.com')
  })

  it('should use the recorded user selection', async () => {
    // With no user data, the selected tool is GitHub.com
    await page.goto(pageWithSingleSwitcher)
    let selectedToolElement = await page.waitForSelector('a.tool-switcher.selected')
    let selectedTool = await page.evaluate((el) => el.textContent, selectedToolElement)
    expect(selectedTool).toBe('GitHub.com')

    await page.click(`.tool-switcher[data-tool="cli"]`)

    // Revisiting the page after CLI is selected results in CLI as the selected tool
    await page.goto(pageWithSingleSwitcher)
    selectedToolElement = await page.waitForSelector('a.tool-switcher.selected')
    selectedTool = await page.evaluate((el) => el.textContent, selectedToolElement)
    expect(selectedTool).toBe('GitHub CLI')
  })

  it('should show the content for the selected tool only', async () => {
    await page.goto(pageWithSingleSwitcher)

    const tools = ['webui', 'cli']
    for (const tool of tools) {
      await page.click(`.tool-switcher[data-tool="${tool}"]`)

      // content for selected tool is expected to become visible
      await page.waitForSelector(`.extended-markdown.${tool}`, { visible: true, timeout: 3000 })

      // only a single tab should be selected
      const selectedSwitch = await page.$$('a.tool-switcher.selected')
      expect(selectedSwitch).toHaveLength(1)

      // content for NOT selected tools is expected to become hidden
      const otherTools = tools.filter((e) => e !== tool)
      for (const other of otherTools) {
        await page.waitForSelector(`.extended-markdown.${other}`, { hidden: true, timeout: 3000 })
      }
    }
  })

  it('selecting a tool in one switcher will control all tool switchers on the page', async () => {
    await page.goto(pageWithMultipleSwitcher)

    const tools = { cli: 'GitHub CLI', curl: 'cURL' }
    for (const [tool, toolName] of Object.entries(tools)) {
      await page.click(`.tool-switcher[data-tool="${tool}"]`)

      // content for selected tool is expected to become visible
      await page.waitForSelector(`.extended-markdown.${tool}`, { visible: true, timeout: 3000 })

      // all tabs should be selected
      const toolSelector = await page.$$('nav#tool-switcher')
      const selectedSwitch = await page.$$('a.tool-switcher.selected')
      expect(selectedSwitch).toHaveLength(toolSelector.length)

      const selectedToolElement = await page.waitForSelector('a.tool-switcher.selected')
      const selectedTool = await page.evaluate((el) => el.textContent, selectedToolElement)
      expect(selectedTool).toBe(toolName)
    }
  })
})

describe('code examples', () => {
  it('loads correctly', async () => {
    await page.goto('http://localhost:4001/en/actions')
    const shownCards = await page.$$('[data-testid=code-example-card]')
    const shownNoResult = await page.$('[data-testid=code-examples-no-results]')
    expect(shownCards.length).toBeGreaterThan(0)
    expect(shownNoResult).toBeNull()
  })

  it('filters cards', async () => {
    await page.goto('http://localhost:4001/en/actions')
    await page.click('[data-testid=code-examples-input]')
    await page.type('[data-testid=code-examples-input]', 'issues')
    const shownCards = await page.$$('[data-testid=code-example-card]')
    expect(shownCards.length).toBeGreaterThan(1)
  })

  it('shows more cards', async () => {
    await page.goto('http://localhost:4001/en/actions')
    const initialCards = await page.$$('[data-testid=code-example-card]')
    await page.click('[data-testid=code-examples-show-more]')
    const moreCards = await page.$$('[data-testid=code-example-card]')
    expect(moreCards.length).toBe(initialCards.length * 2)
  })

  it('displays no result message', async () => {
    await page.goto('http://localhost:4001/en/actions')
    await page.click('[data-testid=code-examples-input]')
    await page.type('[data-testid=code-examples-input]', 'this should not work')
    const shownCards = await page.$$('[data-testid=code-example-card]')
    expect(shownCards.length).toBe(0)
    const noResultsMessage = await page.$('[data-testid=code-examples-no-results]')
    expect(noResultsMessage).not.toBeNull()
  })
})

describe('filter cards', () => {
  it('works with select input', async () => {
    await page.goto('http://localhost:4001/en/actions/guides')
    await page.select('[data-testid=card-filter-dropdown][name="type"]', 'overview')
    const shownCards = await page.$$('[data-testid=article-card]')
    const shownCardTypes = await page.$$eval('[data-testid=article-card-type]', (cardTypes) =>
      cardTypes.map((cardType) => cardType.textContent)
    )
    shownCardTypes.map((type) => expect(type).toBe('Overview'))
    expect(shownCards.length).toBeGreaterThan(0)
  })

  it('works with select input on an Enterprise version', async () => {
    await page.goto(`http://localhost:4001/en/enterprise-server@${latest}/actions/guides`)
    await page.select('[data-testid=card-filter-dropdown][name="type"]', 'overview')
    const shownCards = await page.$$('[data-testid=article-card]')
    const shownCardTypes = await page.$$eval('[data-testid=article-card-type]', (cardTypes) =>
      cardTypes.map((cardType) => cardType.textContent)
    )
    shownCardTypes.map((type) => expect(type).toBe('Overview'))
    expect(shownCards.length).toBeGreaterThan(0)
  })
})

describe('language banner', () => {
  it('directs user to the English version of the article', async () => {
    const wipLanguageKey = Object.keys(languages).find((key) => languages[key].wip)

    // This kinda sucks, but if we don't have a WIP language, we currently can't
    // run a reliable test. But hey, on the bright side, if we don't have a WIP
    // language then this code will never run anyway!
    if (wipLanguageKey) {
      const res = await page.goto(`http://localhost:4001/${wipLanguageKey}/actions`)
      expect(res.ok()).toBe(true)
      const href = await page.$eval('a#to-english-doc', (el) => el.href)
      expect(href.endsWith('/en/actions')).toBe(true)
    }
  })
})

// The Explorer in the iFrame will not be accessible on localhost
// There's a url in github.com that uses ?query= for a graphql query instead of a search query, so we're hiding the Search bar on this page
describe('GraphQL Explorer', () => {
  it('hides search bar on GraphQL Explorer page', async () => {
    const explorerUrl = 'http://localhost:4001/en/graphql/overview/explorer'
    await page.goto(`${explorerUrl}`)
    const searchBar = await page.$$('[data-testid=site-search-input]')
    expect(searchBar.length).toBe(0)
  })
})

// Skipping because next/links are disabled by default for now
describe.skip('next/link client-side navigation', () => {
  jest.setTimeout(60 * 1000)

  it('should have 200 response to /_next/data when link is clicked', async () => {
    const initialViewport = page.viewport()
    await page.setViewport({ width: 1024, height: 768 })
    await page.goto('http://localhost:4001/en/actions/guides')

    const [response] = await Promise.all([
      page.waitForResponse((response) =>
        response.url().startsWith('http://localhost:4001/_next/data')
      ),
      page.waitForNavigation({ waitUntil: 'networkidle2' }),
      page.click('.sidebar-articles:nth-child(2) .sidebar-article:nth-child(1) a'),
    ])

    expect(response.status()).toBe(200)
    await page.setViewport(initialViewport)
  })
})
