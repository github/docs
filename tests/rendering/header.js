import { expect, jest } from '@jest/globals'

import { getDOM } from '../helpers/e2etest.js'
import { oldestSupported } from '../../lib/enterprise-server-releases.js'
import { getUserLanguage } from '../helpers/script-data.js'

describe('header', () => {
  jest.setTimeout(5 * 60 * 1000)

  test('includes localized meta tags', async () => {
    const $ = await getDOM('/en')
    expect($('link[rel="alternate"]').length).toBeGreaterThan(2)
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
      const $ = await getDOM(
        '/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule'
      )
      expect(
        $(
          'li a[href="/ja/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule"]'
        ).length
      ).toBe(1)
    })

    test('display the native name and the English name for each translated language', async () => {
      const $ = await getDOM('/en')

      expect($('[data-testid=language-picker] li a[href="/en"]').text().trim()).toBe('English')
      expect($('[data-testid=language-picker] li a[href="/cn"]').text().trim()).toBe('简体中文')
      expect($('[data-testid=language-picker] li a[href="/ja"]').text().trim()).toBe('日本語')
    })

    test('emphasize the current language', async () => {
      const $ = await getDOM('/en')
      expect($('[data-testid=desktop-header] [data-testid=language-picker] button').text()).toBe(
        'English'
      )
    })
  })

  describe('notices', () => {
    // Docs engineering issue: 1055
    test.skip('displays a "localization in progress" notice for WIP languages', async () => {
      const $ = await getDOM('/de')
      expect($('[data-testid=header-notification][data-type=TRANSLATION]').length).toBe(1)
      expect($('[data-testid=header-notification] a[href="/en"]').length).toBe(1)
    })

    test('displays "complete" notice for non-WIP non-English languages', async () => {
      const $ = await getDOM('/ja')
      expect($('[data-testid=header-notification][data-type=TRANSLATION]').length).toBe(1)
      expect($('[data-testid=header-notification] a[href="/en"]').length).toBe(1)
      expect($('[data-testid=header-notification] a[href*="github.com/contact"]').length).toBe(1)
    })

    // Docs Engineering issue: 966
    test.skip('does not display any notices for English', async () => {
      const $ = await getDOM('/en')
      expect($('[data-testid=header-notification]').length).toBe(0)
    })

    test('displays translation disclaimer notice on localized site-policy pages', async () => {
      const $ = await getDOM('/ja/site-policy/other-site-policies/github-logo-policy')
      // The first case is for a complete translation, the second case is for a page pending complete translation.
      expect(
        $(
          '[data-testid=header-notification][data-type=TRANSLATION] a[href="https://github.com/github/site-policy/issues"]'
        ).length ||
          $(
            '[data-testid=header-notification][data-type=TRANSLATION] a[href="https://github.com/contact?form[subject]=translation%20issue%20on%20docs.github.com&form[comments]="]'
          ).length
      ).toBe(1)
    })

    test("renders a link to the same page in user's preferred language, if available", async () => {
      const headers = { 'accept-language': 'ja' }
      const $ = await getDOM('/en', { headers })
      expect(getUserLanguage($)).toBe('ja')
    })

    test("renders a link to the same page if user's preferred language is Chinese - PRC", async () => {
      const headers = { 'accept-language': 'zh-CN' }
      const $ = await getDOM('/en', { headers })
      expect(getUserLanguage($)).toBe('cn')
    })

    test("renders a link to the same page in user's preferred language from multiple, if available", async () => {
      const headers = { 'accept-language': 'ja, *;q=0.9' }
      const $ = await getDOM('/en', { headers })
      expect(getUserLanguage($)).toBe('ja')
    })

    test("renders a link to the same page in user's preferred language with weights, if available", async () => {
      const headers = { 'accept-language': 'ja;q=1.0, *;q=0.9' }
      const $ = await getDOM('/en', { headers })
      expect(getUserLanguage($)).toBe('ja')
    })

    test("renders a link to the user's 2nd preferred language if 1st is not available", async () => {
      const headers = { 'accept-language': 'zh-TW,zh;q=0.9,ja *;q=0.8' }
      const $ = await getDOM('/en', { headers })
      expect(getUserLanguage($)).toBe('ja')
    })
  })

  describe('mobile-only product dropdown links', () => {
    test('include Get started and admin, and emphasize the current product', async () => {
      const $ = await getDOM(
        '/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer'
      )
      const getStarted = $('div ul ul li a[href="/en/get-started"]')
      expect(getStarted.length).toBe(1)
      expect(getStarted.text().trim()).toBe('Get started')

      const ghec = $(`[data-testid=product-picker] a[href="/en/enterprise-cloud@latest/admin"]`)
      expect(ghec.length).toBe(1)
      expect(ghec.text().trim()).toBe('Enterprise administrators')
    })

    test("point to homepages in the current page's language", async () => {
      const $ = await getDOM('/ja/github/site-policy/github-terms-of-service')
      const $breadcrumbRefs = $('[data-testid=breadcrumbs] a')
      expect($breadcrumbRefs[0].attribs.href.startsWith('/ja')).toBe(true)
      const $sidebarRefs = $('[data-testid=sidebar] a')
      expect($sidebarRefs[0].attribs.href.startsWith('/ja')).toBe(true)
    })

    test('emphasizes the product that corresponds to the current page', async () => {
      const $ = await getDOM(
        `/en/enterprise-server@${oldestSupported}/get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-a-git-repository-using-the-command-line`
      )

      expect($('[data-testid=product-picker] summary').text()).toBe('Get started')
    })
  })
})
