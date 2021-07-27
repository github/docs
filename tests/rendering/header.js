import { getDOM } from '../helpers/supertest.js'
import { oldestSupported, latest } from '../../lib/enterprise-server-releases.js'
import { jest } from '@jest/globals'

describe('header', () => {
  jest.setTimeout(5 * 60 * 1000)

  test('includes localized meta tags', async () => {
    const $ = await getDOM('/en')
    expect($('meta[name="next-head-count"]').length).toBe(1)
  })

  test("includes a link to the homepage (in the current page's language)", async () => {
    let $ = await getDOM('/en')
    expect($('#github-logo a[href="/en"]').length).toBe(2)

    $ = await getDOM('/ja')
    expect($('#github-logo a[href="/ja"]').length).toBe(2)
    expect($('#github-logo a[href="/en"]').length).toBe(0)
  })

  describe('language links', () => {
    test('lead to the same page in a different language', async () => {
      const $ = await getDOM('/github/administering-a-repository/managing-a-branch-protection-rule')
      expect(
        $(
          '[data-testid=language-picker] a[href="/ja/github/administering-a-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule"]'
        ).length
      ).toBe(1)
    })

    test('display the native name and the English name for each translated language', async () => {
      const $ = await getDOM('/en')
      expect($('[data-testid=language-picker] a[href="/en/"]').text().trim()).toBe('English')
      expect($('[data-testid=language-picker] a[href="/cn/"]').text().trim()).toBe(
        '简体中文 (Simplified Chinese)'
      )
      expect($('[data-testid=language-picker] a[href="/ja/"]').text().trim()).toBe(
        '日本語 (Japanese)'
      )
    })

    test('emphasize the current language', async () => {
      const $ = await getDOM('/en')
      expect($('[data-testid=language-picker] a[href="/en/"]').length).toBe(1)
      expect($('[data-testid=language-picker] a[href="/ja/"]').length).toBe(1)
    })
  })

  describe('notices', () => {
    test('displays a "localization in progress" notice for WIP languages', async () => {
      const $ = await getDOM('/de')
      expect($('.header-notifications.translation_notice').length).toBe(1)
      expect($('.header-notifications a[href="/en"]').length).toBe(1)
    })

    test('displays "complete" notice for non-WIP non-English languages', async () => {
      const $ = await getDOM('/ja')
      expect($('.header-notifications.translation_notice').length).toBe(1)
      expect($('.header-notifications a[href="/en"]').length).toBe(1)
      expect($('.header-notifications a[href*="github.com/contact"]').length).toBe(1)
    })

    test.skip('does not display any notices for English', async () => {
      const $ = await getDOM('/en')
      expect($('.header-notifications').length).toBe(0)
    })

    test('displays translation disclaimer notice on localized site-policy pages', async () => {
      const $ = await getDOM('/ja/github/site-policy/github-logo-policy')
      expect(
        $(
          '.header-notifications.translation_notice a[href="https://github.com/github/site-policy/issues"]'
        ).length
      ).toBe(1)
    })

    test("renders a link to the same page in user's preferred language, if available", async () => {
      const headers = { 'accept-language': 'ja' }
      const $ = await getDOM('/en', headers)
      expect($('.header-notifications.translation_notice').length).toBe(1)
      expect($('.header-notifications a[href*="/ja"]').length).toBe(1)
    })

    test("renders a link to the same page if user's preferred language is Chinese - PRC", async () => {
      const headers = { 'accept-language': 'zh-CN' }
      const $ = await getDOM('/en', headers)
      expect($('.header-notifications.translation_notice').length).toBe(1)
      expect($('.header-notifications a[href*="/cn"]').length).toBe(1)
    })

    test("does not render a link when user's preferred language is Chinese - Taiwan", async () => {
      const headers = { 'accept-language': 'zh-TW' }
      const $ = await getDOM('/en', headers)
      expect($('.header-notifications').length).toBe(0)
    })

    test("does not render a link when user's preferred language is English", async () => {
      const headers = { 'accept-language': 'en' }
      const $ = await getDOM('/en', headers)
      expect($('.header-notifications').length).toBe(0)
    })

    test("renders a link to the same page in user's preferred language from multiple, if available", async () => {
      const headers = { 'accept-language': 'ja, *;q=0.9' }
      const $ = await getDOM('/en', headers)
      expect($('.header-notifications.translation_notice').length).toBe(1)
      expect($('.header-notifications a[href*="/ja"]').length).toBe(1)
    })

    test("renders a link to the same page in user's preferred language with weights, if available", async () => {
      const headers = { 'accept-language': 'ja;q=1.0, *;q=0.9' }
      const $ = await getDOM('/en', headers)
      expect($('.header-notifications.translation_notice').length).toBe(1)
      expect($('.header-notifications a[href*="/ja"]').length).toBe(1)
    })

    test("renders a link to the user's 2nd preferred language if 1st is not available", async () => {
      const headers = { 'accept-language': 'zh-TW,zh;q=0.9,ja *;q=0.8' }
      const $ = await getDOM('/en', headers)
      expect($('.header-notifications.translation_notice').length).toBe(1)
      expect($('.header-notifications a[href*="/ja"]').length).toBe(1)
    })

    test('renders no notices if no language preference is available', async () => {
      const headers = { 'accept-language': 'zh-TW,zh;q=0.9,zh-SG *;q=0.8' }
      const $ = await getDOM('/en', headers)
      expect($('.header-notifications').length).toBe(0)
    })
  })

  describe('mobile-only product dropdown links', () => {
    test('include github and admin, and emphasize the current product', async () => {
      const $ = await getDOM('/en/articles/enabling-required-status-checks')
      const github = $('#homepages a.active[href="/en/github"]')
      expect(github.length).toBe(1)
      expect(github.text().trim()).toBe('GitHub')
      expect(github.attr('class').includes('active')).toBe(true)

      const ghe = $(`#homepages a[href="/en/enterprise-server@${latest}/admin"]`)
      expect(ghe.length).toBe(1)
      expect(ghe.text().trim()).toBe('Enterprise administrators')
      expect(ghe.attr('class').includes('active')).toBe(false)
    })

    test("point to homepages in the current page's language", async () => {
      const $ = await getDOM(
        '/ja/github/administering-a-repository/defining-the-mergeability-of-pull-requests'
      )
      expect($('#homepages a.active[href="/ja/github"]').length).toBe(1)
      expect($(`#homepages a[href="/ja/enterprise-server@${latest}/admin"]`).length).toBe(1)
    })

    test('emphasizes the product that corresponds to the current page', async () => {
      const $ = await getDOM(
        `/en/enterprise/${oldestSupported}/user/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address`
      )
      expect($(`#homepages a.active[href="/en/enterprise-server@${latest}/admin"]`).length).toBe(0)
      expect($('#homepages a[href="/en/github"]').length).toBe(1)
      expect($('#homepages a.active[href="/en/github"]').length).toBe(1)
    })
  })
})
