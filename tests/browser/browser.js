import { jest } from '@jest/globals'
import { latest, oldestSupported } from '../../lib/enterprise-server-releases.js'

jest.useFakeTimers({ legacyFakeTimers: true })

/* global page, browser */
describe('homepage', () => {
  jest.setTimeout(60 * 1000)

  test('should be titled "GitHub Documentation"', async () => {
    await page.goto('http://localhost:4000')
    await expect(page.title()).resolves.toMatch('GitHub Documentation')
  })
})

// Note, we can only test Elasticsearch searches on things we have indexed
// in the fixtures. See the contents of /tests/content/fixtures/search-indexes/
describe('browser search', () => {
  jest.setTimeout(60 * 1000)

  it('works on small and x-small viewport landing pages', async () => {
    await page.setViewport({ width: 500, height: 700 })
    await page.goto('http://localhost:4000/en/actions')
    await page.click('[data-testid=mobile-search-button]')
    await page.click('[data-testid=site-search-input]')
    await page.type('[data-testid=site-search-input]', 'foo')
    await page.keyboard.press('Enter')
    await page.waitForSelector('[data-testid=search-result]')
    const hits = await page.$$('[data-testid=search-result]')
    expect(hits.length).toBeGreaterThan(1)
  })

  it('works on medium -> x-large viewport landing pages', async () => {
    const initialViewport = page.viewport()
    await page.setViewport({ width: 1000, height: 768 })
    await page.goto('http://localhost:4000/en/actions')
    await page.click('[data-testid=desktop-header] [data-testid=site-search-input]')
    await page.type('[data-testid=desktop-header] [data-testid=site-search-input]', 'foo')
    await page.keyboard.press('Enter')
    await page.waitForSelector('[data-testid=search-result]')
    const hits = await page.$$('[data-testid=search-result]')
    expect(hits.length).toBeGreaterThan(1)
    await page.setViewport(initialViewport)
  })
  // 404 page is statically generated with next, so search is not available, but may possibly be brought back
  // Docs Engineering issue: 961
  it.skip('works on 404 error page', async () => {
    await page.goto('http://localhost:4000/en/404')
    await page.click('[data-testid=search] input[type="search"]')
    await page.type('[data-testid=search] input[type="search"]', 'actions')
    await page.keyboard.press('Enter')
    await page.waitForSelector('[data-testid=search-results]')
    const hits = await page.$$('[data-testid=search-result]')
    expect(hits.length).toBeGreaterThan(5)
  })

  // Elasticsearch fixtures only work for dotco and GHAE
  it.skip('sends the correct data to search for Enterprise Server', async () => {
    expect.assertions(2)

    const newPage = await browser.newPage()
    await newPage.goto(
      `http://localhost:4000/en/enterprise-server@${oldestSupported}/admin/installation`
    )

    await newPage.setRequestInterception(true)
    newPage.on('request', (interceptedRequest) => {
      if (
        interceptedRequest.method() === 'GET' &&
        /api\/search\/legacy\?/i.test(interceptedRequest.url())
      ) {
        const { searchParams } = new URL(interceptedRequest.url())
        expect(searchParams.get('version')).toBe(oldestSupported)
        expect(searchParams.get('language')).toBe('en')
      }
      interceptedRequest.continue()
    })

    const searchInput = await newPage.$('[data-testid=site-search-input]')
    await searchInput.click()
    await searchInput.type('code')
    await page.keyboard.press('Enter')
    await newPage.waitForSelector('[data-testid=search-result]')
  })

  it('sends the correct data to search for dotcom', async () => {
    expect.assertions(2)

    const newPage = await browser.newPage()
    await newPage.goto('http://localhost:4000/en')

    await newPage.setRequestInterception(true)
    newPage.on('request', (interceptedRequest) => {
      if (
        interceptedRequest.method() === 'GET' &&
        /api\/search\/v1\?/i.test(interceptedRequest.url())
      ) {
        const { searchParams } = new URL(interceptedRequest.url())
        expect(searchParams.get('version')).toBe('free-pro-team@latest')
        expect(searchParams.get('language')).toBe('en')
      }
      interceptedRequest.continue()
    })

    const searchInput = await newPage.$('[data-testid=site-search-input]')
    await searchInput.click()
    await searchInput.type('foo')
    await newPage.keyboard.press('Enter')
    await newPage.waitForSelector('[data-testid=search-result]')
  })

  it('sends the correct data to search for GHAE', async () => {
    expect.assertions(2)

    const newPage = await browser.newPage()
    await newPage.goto('http://localhost:4000/en/github-ae@latest/admin/overview')

    await newPage.setRequestInterception(true)
    newPage.on('request', (interceptedRequest) => {
      if (
        interceptedRequest.method() === 'GET' &&
        /api\/search\/v1\?/i.test(interceptedRequest.url())
      ) {
        const { searchParams } = new URL(interceptedRequest.url())
        expect(searchParams.get('version')).toBe('github-ae@latest')
        expect(searchParams.get('language')).toBe('en')
      }
      interceptedRequest.continue()
    })

    const searchInput = await newPage.$('[data-testid=site-search-input]')
    await searchInput.click()
    await searchInput.type('silly')
    await newPage.keyboard.press('Enter')
    await newPage.waitForSelector('[data-testid=search-results]')
  })
})

describe('x-large viewports - 1280+', () => {
  jest.setTimeout(60 * 1000)
  it('in article breadcrumbs at xl viewport should remove last breadcrumb', async () => {
    await page.setViewport({ width: 1300, height: 700 })
    await page.goto(
      'http://localhost:4000/en/enterprise-cloud@latest/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise'
    )
    const breadcrumbsElement = await page.$$('[data-testid=breadcrumbs-in-article] ul li')
    const breadcrumbsMissingElement = await page.$$(
      '[data-testid=breadcrumbs-in-article] ul li .d-none'
    )
    expect(breadcrumbsMissingElement.length).toBe(1)
    expect(breadcrumbsElement.length).toBe(4)
  })
})

describe('large -> x-large viewports - 1012+', () => {
  jest.setTimeout(60 * 1000)
  it('version picker is visible in header', async () => {
    await page.setViewport({ width: 1013, height: 700 })
    await page.goto('http://localhost:4000/en/actions')
    await page.click('[data-testid=version-picker]')
    const versionItems = await page.$$('[data-testid=version-picker-item]')
    expect(versionItems.length).toBeGreaterThan(0)
  })

  it('language picker is visible in header', async () => {
    await page.goto('http://localhost:4000/en/actions')
    const languagePickerElement = await page.$$('[data-testid=language-picker]')
    expect(languagePickerElement.length).toBe(1)
  })

  it('sign up button is visible in header', async () => {
    const signUpElement = await page.$('[data-testid=header-signup]')
    const signUpValue = await signUpElement.evaluate((el) => el.textContent)
    expect(signUpValue).toBe('Sign up')
  })
})

describe('large viewports - 1012-1279', () => {
  jest.setTimeout(60 * 1000)
  it('hamburger button for sidebar overlay is visible', async () => {
    await page.setViewport({ width: 1013, height: 700 })
    await page.goto('http://localhost:4000/en/actions')
    await page.click('[data-testid=sidebar-hamburger]')
    const sidebarElement = await page.$('[data-testid=sidebar-product-dialog]')
    const sideBarValue = await sidebarElement.evaluate((el) => el.textContent)
    expect(sideBarValue).toBe('GitHub Actions')
  })

  it('breadcrumbs show up in the header', async () => {
    await page.goto(
      'http://localhost:4000/en/enterprise-cloud@latest/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise'
    )
    const breadcrumbsElement = await page.$$('[data-testid=breadcrumbs-header] ul li')
    const breadcrumbsMissingElement = await page.$$(
      '[data-testid=breadcrumbs-header] ul li .d-none'
    )
    expect(breadcrumbsMissingElement.length).toBe(0)
    expect(breadcrumbsElement.length).toBe(4)
  })
})

describe('medium viewports - 768-1011', () => {
  jest.setTimeout(60 * 1000)
  it('version picker is visible', async () => {
    await page.setViewport({ width: 1000, height: 700 })
    await page.goto('http://localhost:4000/ja/actions')
    await page.click('[data-testid=version-picker]')
    const versionItems = await page.$$('[data-testid=version-picker-item]')
    expect(versionItems.length).toBeGreaterThan(0)
  })

  it('language picker icon is in mobile menu', async () => {
    await page.goto('http://localhost:4000/en/actions')
    await page.click('[data-testid=mobile-menu]')
    await page.click('[data-testid=open-mobile-menu] [data-testid=language-picker]')
    const defaultLanguageElement = await page.$('[data-testid=default-language]')
    const languageValue = await defaultLanguageElement.evaluate((el) => el.textContent)
    expect(languageValue).toBe('English')
  })

  it('sign up button is in mobile menu', async () => {
    const signUpElement = await page.$('[data-testid=mobile-signup]')
    const signUpValue = await signUpElement.evaluate((el) => el.textContent)
    expect(signUpValue).toBe('Sign up')
  })

  it('hamburger button for sidebar overlay is visible', async () => {
    await page.click('[data-testid=sidebar-hamburger]')
    const sidebarElement = await page.$('[data-testid=sidebar-product-dialog]')
    const sideBarValue = await sidebarElement.evaluate((el) => el.textContent)
    expect(sideBarValue).toBe('GitHub Actions')
  })
})

describe('small -> x-small viewports - under 544 -> 767', () => {
  jest.setTimeout(60 * 1000)
  it('sign up button is not visible', async () => {
    await page.setViewport({ width: 500, height: 700 })
    await page.goto('http://localhost:4000/en/actions')
    const signUpElement = await page.$('[data-testid=header-signup] a')
    const classes = Object.values(await signUpElement.evaluate((el) => el.classList))
    expect(classes).toEqual(expect.arrayContaining(['d-none', 'd-lg-flex']))
  })

  it('language picker is not visible', async () => {
    const languagePickerElement = await page.$('[data-testid=language-picker]')
    const parentNode = await languagePickerElement.getProperty('parentNode')
    const classes = Object.values(await parentNode.evaluate((el) => el.classList))
    expect(classes).toEqual(expect.arrayContaining(['d-none', 'd-lg-flex']))
  })

  it('version picker is not visible', async () => {
    const hiddenElements = await page.evaluate(() => {
      const data = []
      const elements = document.getElementsByClassName('hide-sm')
      for (const element of elements)
        data.push(element.firstElementChild.getAttribute('data-testid'))

      return data
    })
    expect(hiddenElements).toEqual(['version-picker'])
  })

  it('version picker icon is in mobile menu', async () => {
    await page.click('[data-testid=mobile-menu]')
    await page.click('[data-testid=open-mobile-menu] [data-testid=version-picker]')
    const versionItems = await page.$$('[data-testid=version-picker-item]')
    expect(versionItems.length).toBeGreaterThan(0)
  })

  it('language picker icon is in mobile menu', async () => {
    await page.click('[data-testid=open-mobile-menu] [data-testid=language-picker]')
    const defaultLanguageElement = await page.$('[data-testid=default-language]')
    const languageValue = await defaultLanguageElement.evaluate((el) => el.textContent)
    expect(languageValue).toBe('English')
  })

  it('sign up button is in mobile menu', async () => {
    const signUpElement = await page.$('[data-testid=mobile-signup]')
    const signUpValue = await signUpElement.evaluate((el) => el.textContent)
    expect(signUpValue).toBe('Sign up')
  })

  it('hamburger button for sidebar overlay is visible', async () => {
    await page.click('[data-testid=sidebar-hamburger]')
    const sidebarElement = await page.$('[data-testid=sidebar-product-dialog]')
    const sideBarValue = await sidebarElement.evaluate((el) => el.textContent)
    expect(sideBarValue).toBe('GitHub Actions')
  })
})

describe('survey', () => {
  jest.setTimeout(3 * 60 * 1000)

  it('sends an event to /events when submitting form', async () => {
    // Visit a page that displays the prompt
    await page.goto(
      'http://localhost:4000/en/actions/getting-started-with-github-actions/about-github-actions'
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

describe('platform picker', () => {
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
  const pageWithPlatformPicker =
    'http://localhost:4000/en/github/using-git/configuring-git-to-handle-line-endings'
  const pageWithoutPlatformPicker = 'http://localhost:4000/en/github/using-git'
  const pageWithDefaultPlatform =
    'http://localhost:4000/en/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service'

  it('should have a platform picker', async () => {
    await page.goto(pageWithPlatformPicker)
    const nav = await page.$$('[data-testid=platform-picker]')
    const switches = await page.$$('[data-testid=platform-picker] div a')
    const selectedSwitch = await page.$$('[data-testid=platform-picker] div a.PRC-selected')
    expect(nav).toHaveLength(1)
    expect(switches.length).toBeGreaterThan(1)
    expect(selectedSwitch).toHaveLength(1)
  })

  it('should NOT have a platform picker', async () => {
    await page.goto(pageWithoutPlatformPicker)
    const nav = await page.$$('[data-testid=platform-picker]')
    const switches = await page.$$('[data-testid=platform-picker] div a')
    const selectedSwitch = await page.$$('[data-testid=platform-picker] div a.PRC-selected')
    expect(nav).toHaveLength(0)
    expect(switches).toHaveLength(0)
    expect(selectedSwitch).toHaveLength(0)
  })

  it('should detect platform from user agent', async () => {
    for (const agent of userAgents) {
      await page.setUserAgent(agent.ua)
      await page.goto(pageWithPlatformPicker)
      const selectedPlatformElement = await page.waitForSelector(
        '[data-testid=platform-picker] div a.PRC-selected'
      )
      const selectedPlatform = await page.evaluate(
        (el) => el.dataset.platform,
        selectedPlatformElement
      )
      expect(selectedPlatform).toBe(agent.name.toLowerCase())
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
      const selectedPlatformElement = await page.waitForSelector(
        '[data-testid=platform-picker] div a.PRC-selected'
      )
      const selectedPlatform = await page.evaluate((el) => el.textContent, selectedPlatformElement)
      expect(defaultPlatform).toBe(linuxUserAgent.id)
      expect(selectedPlatform).toBe(linuxUserAgent.name)
    }
  })

  it('should show the content for the selected platform only', async () => {
    await page.goto(pageWithPlatformPicker)

    const platforms = ['mac', 'windows', 'linux']
    for (const platform of platforms) {
      await page.click(`[data-testid=platform-picker] [data-platform=${platform}]`)

      // content for selected platform is expected to become visible
      await page.waitForSelector(`.extended-markdown.${platform}`, { visible: true, timeout: 3000 })

      // only a single tab should be selected
      const selectedSwitch = await page.$$('[data-testid=platform-picker] .PRC-selected')
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
    'http://localhost:4000/en/actions/managing-workflow-runs/manually-running-a-workflow'
  const pageWithoutSwitcher =
    'http://localhost:4000/en/billing/managing-billing-for-github-sponsors/about-billing-for-github-sponsors'
  const pageWithMultipleSwitcher =
    'http://localhost:4000/en/issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects'

  it('should have a tool switcher if a tool switcher is included', async () => {
    await page.goto(pageWithSingleSwitcher)
    const nav = await page.$$('[data-testid="tool-picker"]')
    const switches = await page.$$('[data-testid="tool-picker"] div a')
    const selectedSwitch = await page.$$('[data-testid="tool-picker"] div a.PRC-selected')
    expect(nav).toHaveLength(1)
    expect(switches.length).toBeGreaterThan(1)
    expect(selectedSwitch).toHaveLength(1)
  })

  it('should NOT have a tool switcher if no tool switcher is included', async () => {
    await page.goto(pageWithoutSwitcher)
    const nav = await page.$$('[data-testid="tool-picker"]')
    const switches = await page.$$('[data-testid="tool-picker"] div a')
    const selectedSwitch = await page.$$('[data-testid="tool-picker"] div a.PRC-selected')
    expect(nav).toHaveLength(0)
    expect(switches).toHaveLength(0)
    expect(selectedSwitch).toHaveLength(0)
  })

  it('should use cli if no defaultTool is specified and if webui is not one of the tools', async () => {
    await page.goto(pageWithMultipleSwitcher)
    const selectedToolElement = await page.waitForSelector(
      '[data-testid="tool-picker"] div a.PRC-selected'
    )
    const selectedTool = await page.evaluate((el) => el.textContent, selectedToolElement)
    expect(selectedTool).toBe('GitHub CLI')
  })

  it('should use webui if no defaultTool is specified and if webui is one of the tools', async () => {
    await page.goto(pageWithSingleSwitcher)
    const selectedToolElement = await page.waitForSelector(
      '[data-testid="tool-picker"] div a.PRC-selected'
    )
    const selectedTool = await page.evaluate((el) => el.textContent, selectedToolElement)
    expect(selectedTool).toBe('Web browser')
  })

  it('should use the recorded user selection', async () => {
    // With no user data, the selected tool is GitHub.com
    await page.goto(pageWithSingleSwitcher)
    let selectedToolElement = await page.waitForSelector(
      '[data-testid="tool-picker"] div a.PRC-selected'
    )
    let selectedTool = await page.evaluate((el) => el.textContent, selectedToolElement)
    expect(selectedTool).toBe('Web browser')

    await page.click('[data-testid="tool-picker"] [data-tool="cli"]')

    // Revisiting the page after CLI is selected results in CLI as the selected tool
    await page.goto(pageWithSingleSwitcher)
    selectedToolElement = await page.waitForSelector(
      '[data-testid="tool-picker"] div a.PRC-selected'
    )
    selectedTool = await page.evaluate((el) => el.textContent, selectedToolElement)
    expect(selectedTool).toBe('GitHub CLI')
  })

  it('should show the content for the selected tool only', async () => {
    await page.goto(pageWithSingleSwitcher)

    const tools = ['webui', 'cli']
    for (const tool of tools) {
      await page.click(`[data-tool="${tool}"]`)

      // content for selected tool is expected to become visible
      await page.waitForSelector(`.extended-markdown.${tool}`, { visible: true, timeout: 3000 })

      // only a single tab should be selected
      const selectedSwitch = await page.$$('[data-testid="tool-picker"] div a.PRC-selected')
      expect(selectedSwitch).toHaveLength(1)

      // content for NOT selected tools is expected to become hidden
      const otherTools = tools.filter((e) => e !== tool)
      for (const other of otherTools) {
        await page.waitForSelector(`.extended-markdown.${other}`, { hidden: true, timeout: 3000 })
      }
    }
  })
})

describe('code examples', () => {
  it('loads correctly', async () => {
    await page.goto('http://localhost:4000/en/code-security')
    const shownCards = await page.$$('[data-testid=code-example-card]')
    const shownNoResult = await page.$('[data-testid=code-examples-no-results]')
    expect(shownCards.length).toBeGreaterThan(0)
    expect(shownNoResult).toBeNull()
  })

  it('filters cards', async () => {
    await page.goto('http://localhost:4000/en/code-security')
    await page.click('[data-testid=code-examples-input]')
    await page.type('[data-testid=code-examples-input]', 'policy')
    await page.click('[data-testid=code-examples-search-btn]')
    const shownCards = await page.$$('[data-testid=code-example-card]')
    expect(shownCards.length).toBeGreaterThan(1)
  })

  it('shows more cards', async () => {
    await page.goto('http://localhost:4000/en/code-security')
    const initialCards = await page.$$('[data-testid=code-example-card]')
    await page.click('[data-testid=code-examples-show-more]')
    const moreCards = await page.$$('[data-testid=code-example-card]')
    expect(moreCards.length).toBeGreaterThan(initialCards.length)
  })

  it('displays no result message', async () => {
    await page.goto('http://localhost:4000/en/code-security')
    await page.click('[data-testid=code-examples-input]')
    await page.type('[data-testid=code-examples-input]', 'this should not work')
    await page.click('[data-testid=code-examples-search-btn]')
    const shownCards = await page.$$('[data-testid=code-example-card]')
    expect(shownCards.length).toBe(0)
    const noResultsMessage = await page.$('[data-testid=code-examples-no-results]')
    expect(noResultsMessage).not.toBeNull()
  })
})

describe('filter cards', () => {
  it('works with select input', async () => {
    await page.goto('http://localhost:4000/en/code-security/guides')
    // 2nd element is 'Overview'
    await page.click('[data-testid=card-filter-types] button')
    await page.click('[data-testid=types-dropdown] > div > ul > li:nth-child(2)')
    const shownCards = await page.$$('[data-testid=article-card]')
    const shownCardTypes = await page.$$eval('[data-testid=article-card-type]', (cardTypes) =>
      cardTypes.map((cardType) => cardType.textContent)
    )
    shownCardTypes.map((type) => expect(type).toBe('Overview'))
    expect(shownCards.length).toBeGreaterThan(0)
  })

  it('works with select input on an Enterprise version', async () => {
    await page.goto(`http://localhost:4000/en/enterprise-server@${latest}/code-security/guides`)
    // 2nd element is 'Overview'
    await page.click('[data-testid=card-filter-types] button')
    await page.click('[data-testid=types-dropdown] > div > ul > li:nth-child(2)')
    const shownCards = await page.$$('[data-testid=article-card]')
    const shownCardTypes = await page.$$eval('[data-testid=article-card-type]', (cardTypes) =>
      cardTypes.map((cardType) => cardType.textContent)
    )
    shownCardTypes.map((type) => expect(type).toBe('Overview'))
    expect(shownCards.length).toBeGreaterThan(0)
  })
})

// Skipping because next/links are disabled by default for now
// Docs Engineering issue: 962
describe.skip('next/link client-side navigation', () => {
  jest.setTimeout(60 * 1000)

  it('should have 200 response to /_next/data when link is clicked', async () => {
    const initialViewport = page.viewport()
    await page.setViewport({ width: 1024, height: 768 })
    await page.goto('http://localhost:4000/en/actions/guides')

    const [response] = await Promise.all([
      page.waitForResponse((response) =>
        response.url().startsWith('http://localhost:4000/_next/data')
      ),
      page.waitForNavigation({ waitUntil: 'networkidle2' }),
      page.click(
        '[data-testid=sidebar-article-group]:nth-child(2) [data-testid=sidebar-article]:nth-child(1) a'
      ),
    ])

    expect(response.status()).toBe(200)
    await page.setViewport(initialViewport)
  })
})

describe('iframe pages', () => {
  it('can open YouTube embed iframes', async () => {
    // Going to create a fresh page instance, so we can intercept the requests.
    const newPage = await browser.newPage()

    await newPage.setRequestInterception(true)
    const interceptedURLs = []
    newPage.on('request', (request) => {
      interceptedURLs.push(request.url())
      request.continue()
    })
    const failedURLs = []
    newPage.on('requestfailed', (request) => {
      failedURLs.push(request.url())
      request.continue()
    })

    // Hardcoded path to a page where we know we have a YouTube embed
    const res = await newPage.goto('http://localhost:4000/en/codespaces')

    expect(res.ok()).toBeTruthy()
    expect(failedURLs.length, `Following URLs ${failedURLs.join(', ')} failed`).toBeFalsy()

    const iframeSrc = await newPage.$eval('iframe', (el) => el.src)
    expect(iframeSrc.startsWith('https://www.youtube-nocookie.com/embed')).toBeTruthy()
    expect(
      interceptedURLs.filter((url) => url.startsWith('https://www.youtube-nocookie.com/')).length
    ).toBeTruthy()
  })
})
