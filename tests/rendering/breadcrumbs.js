const { getDOM, getJSON } = require('../helpers/supertest')

const describeInternalOnly = process.env.GITHUB_REPOSITORY === 'github/docs-internal' ? describe : describe.skip

describe('breadcrumbs', () => {
  jest.setTimeout(300 * 1000)

  describe('rendering', () => {
    test('top-level product pages have breadcrumbs', async () => {
      const $ = await getDOM('/github')
      expect($('.breadcrumbs')).toHaveLength(1)
    })

    test('article pages have breadcrumbs with product, category, maptopic, and article', async () => {
      const $ = await getDOM('/github/getting-started-with-github/supported-browsers')
      const $breadcrumbs = $('.breadcrumbs a')

      expect($breadcrumbs).toHaveLength(4)
      expect($breadcrumbs.eq(0).attr('title')).toBe('product: GitHub.com')
      expect($breadcrumbs.eq(1).attr('title')).toBe('category: Getting started')
      expect($breadcrumbs.eq(2).attr('title')).toBe('maptopic: Using GitHub')
      expect($breadcrumbs.eq(3).attr('title')).toBe('article: Supported browsers')
    })

    test('maptopic pages include their own grayed-out breadcrumb', async () => {
      const $ = await getDOM('/github/getting-started-with-github/using-github')
      const $breadcrumbs = $('.breadcrumbs a')

      expect($breadcrumbs).toHaveLength(3)
      expect($breadcrumbs.eq(0).attr('title')).toBe('product: GitHub.com')
      expect($breadcrumbs.eq(1).attr('title')).toBe('category: Getting started')
      expect($breadcrumbs.eq(2).attr('title')).toBe('maptopic: Using GitHub')
      expect($breadcrumbs.eq(2).hasClass('color-text-tertiary')).toBe(true)
    })

    test('works for enterprise user pages', async () => {
      const $ = await getDOM('/en/enterprise/user/github/getting-started-with-github/supported-browsers')
      const $breadcrumbs = $('.breadcrumbs a')
      expect($breadcrumbs).toHaveLength(4)
      // The product is still GitHub.com on an Enterprise Server version
      expect($breadcrumbs.eq(0).attr('title')).toBe('product: GitHub.com')
    })

    test('parses Liquid variables inside titles', async () => {
      const $ = await getDOM('/en/enterprise/admin/enterprise-support')
      const $breadcrumbs = $('.breadcrumbs a')
      expect($breadcrumbs).toHaveLength(2)
      expect($breadcrumbs.eq(1).attr('title')).toBe('category: Working with GitHub Support')
    })

    test('English breadcrumbs link to English pages', async () => {
      const $ = await getDOM('/en/github/setting-up-and-managing-your-github-user-account')
      const $breadcrumbs = $('.breadcrumbs a')
      expect($breadcrumbs.eq(0).attr('href')).toBe('/en/github')
    })

    test('localized breadcrumbs link to localize pages', async () => {
      const $ = await getDOM('/ja/github/setting-up-and-managing-your-github-user-account')
      const $breadcrumbs = $('.breadcrumbs a')
      expect($breadcrumbs.eq(0).attr('href')).toBe('/ja/github')
    })
  })

  describeInternalOnly('early access rendering', () => {
    test('top-level product pages have breadcrumbs', async () => {
      const $ = await getDOM('/early-access/github/articles/using-gist-playground')
      expect($('.breadcrumbs')).toHaveLength(1)
    })

    test('early access article pages have breadcrumbs with product, category, and article', async () => {
      const $ = await getDOM('/early-access/github/enforcing-best-practices-with-github-policies/about-github-policies')
      const $breadcrumbSpans = $('.breadcrumbs span')
      const $breadcrumbLinks = $('.breadcrumbs a')

      expect($breadcrumbSpans).toHaveLength(2)
      expect($breadcrumbLinks).toHaveLength(2)
      expect($breadcrumbSpans.eq(0).text()).toBe('Early Access documentation')
      expect($breadcrumbSpans.eq(1).text()).toBe('GitHub.com')
      expect($breadcrumbLinks.eq(0).attr('title')).toBe('category: Enforcing best practices with GitHub Policies')
      expect($breadcrumbLinks.eq(1).attr('title')).toBe('article: About GitHub Policies')
      expect($breadcrumbLinks.eq(1).hasClass('color-text-tertiary')).toBe(true)
    })
  })

  describe('context.breadcrumbs object', () => {
    test('works on product index pages', async () => {
      const breadcrumbs = await getJSON('/en/github?json=breadcrumbs')
      const expected = {
        product: {
          href: '/en/github',
          title: 'GitHub.com'
        }
      }
      expect(breadcrumbs).toEqual(expected)
    })

    test('works on category index pages', async () => {
      const breadcrumbs = await getJSON('/en/github/authenticating-to-github?json=breadcrumbs')
      const expected = {
        product: {
          href: '/en/github',
          title: 'GitHub.com'
        },
        category: {
          href: '/en/github/authenticating-to-github',
          title: 'Authentication'
        }
      }
      expect(breadcrumbs).toEqual(expected)
    })

    test('works on maptopic pages', async () => {
      const breadcrumbs = await getJSON('/en/github/authenticating-to-github/keeping-your-account-and-data-secure?json=breadcrumbs')
      const expected = {
        product: {
          href: '/en/github',
          title: 'GitHub.com'
        },
        category: {
          href: '/en/github/authenticating-to-github',
          title: 'Authentication'
        },
        maptopic: {
          href: '/en/github/authenticating-to-github/keeping-your-account-and-data-secure',
          title: 'Keeping your account and data secure'
        }
      }
      expect(breadcrumbs).toEqual(expected)
    })

    test('works on articles that DO have maptopics ', async () => {
      const breadcrumbs = await getJSON('/en/github/authenticating-to-github/creating-a-strong-password?json=breadcrumbs')
      const expected = {
        product: {
          href: '/en/github',
          title: 'GitHub.com'
        },
        category: {
          href: '/en/github/authenticating-to-github',
          title: 'Authentication'
        },
        maptopic: {
          href: '/en/github/authenticating-to-github/keeping-your-account-and-data-secure',
          title: 'Keeping your account and data secure'
        },
        article: {
          href: '/en/github/authenticating-to-github/creating-a-strong-password',
          title: 'Creating a strong password'
        }
      }
      expect(breadcrumbs).toEqual(expected)
    })

    test('works on articles that DO NOT have maptopics ', async () => {
      const breadcrumbs = await getJSON('/github/site-policy/github-privacy-statement?json=breadcrumbs')
      const expected = {
        product: {
          href: '/en/github',
          title: 'GitHub.com'
        },
        category: {
          href: '/en/github/site-policy',
          title: 'Site policy'
        },
        article: {
          href: '/en/github/site-policy/github-privacy-statement',
          title: 'GitHub Privacy Statement'
        }
      }
      expect(breadcrumbs).toEqual(expected)
    })

    test('returns an empty object on the landing page', async () => {
      const breadcrumbs = await getJSON('/en?json=breadcrumbs')
      expect(breadcrumbs).toEqual({})
    })
  })
})
