const { getDOM, getJSON } = require('../helpers')
const nonEnterpriseDefaultVersion = require('../../lib/non-enterprise-default-version')

const testFeatureNewVersions = process.env.FEATURE_NEW_VERSIONS ? test : test.skip
const testFeatureOldVersions = process.env.FEATURE_NEW_VERSIONS ? test.skip : test

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

    testFeatureNewVersions('maptopic pages include their own grayed-out breadcrumb', async () => {
      const $ = await getDOM('/github/getting-started-with-github/using-github')
      const $breadcrumbs = $('.breadcrumbs a')

      expect($breadcrumbs).toHaveLength(3)
      expect($breadcrumbs.eq(0).attr('title')).toBe('product: GitHub.com')
      expect($breadcrumbs.eq(1).attr('title')).toBe('category: Getting started')
      expect($breadcrumbs.eq(2).attr('title')).toBe('maptopic: Using GitHub')
      expect($breadcrumbs.eq(2).hasClass('text-gray-light')).toBe(true)
    })

    testFeatureOldVersions('maptopic pages include their own grayed-out breadcrumb', async () => {
      const $ = await getDOM('/github/getting-started-with-github/using-github')
      const $breadcrumbs = $('.breadcrumbs a')

      expect($breadcrumbs).toHaveLength(3)
      expect($breadcrumbs.eq(0).attr('title')).toBe('product: GitHub.com')
      expect($breadcrumbs.eq(1).attr('title')).toBe('category: Getting started')
      expect($breadcrumbs.eq(2).attr('title')).toBe('maptopic: Using GitHub')
      expect($breadcrumbs.eq(2).hasClass('text-gray-light')).toBe(true)
    })

    testFeatureNewVersions('works for enterprise user pages', async () => {
      const $ = await getDOM('/en/enterprise/user/github/getting-started-with-github/supported-browsers')
      const $breadcrumbs = $('.breadcrumbs a')
      expect($breadcrumbs).toHaveLength(4)
      // The product is still GitHub.com on an Enterprise Server version
      expect($breadcrumbs.eq(0).attr('title')).toBe('product: GitHub.com')
    })

    testFeatureOldVersions('works for enterprise user pages', async () => {
      const $ = await getDOM('/en/enterprise/user/github/getting-started-with-github/supported-browsers')
      const $breadcrumbs = $('.breadcrumbs a')
      expect($breadcrumbs).toHaveLength(4)
      expect($breadcrumbs.eq(0).attr('title')).toBe('product: GitHub Enterprise Server')
    })

    test('parses Liquid variables inside titles', async () => {
      const $ = await getDOM('/en/enterprise/admin/enterprise-support')
      const $breadcrumbs = $('.breadcrumbs a')
      expect($breadcrumbs).toHaveLength(2)
      expect($breadcrumbs.eq(1).attr('title')).toBe('category: Working with GitHub Support')
    })

    testFeatureNewVersions('English breadcrumbs link to English pages', async () => {
      const $ = await getDOM('/en/github/getting-started-with-github')
      const $breadcrumbs = $('.breadcrumbs a')
      expect($breadcrumbs.eq(0).attr('href')).toBe(`/en/${nonEnterpriseDefaultVersion}/github`)
    })

    testFeatureOldVersions('English breadcrumbs link to English pages', async () => {
      const $ = await getDOM('/en/github/getting-started-with-github')
      const $breadcrumbs = $('.breadcrumbs a')
      expect($breadcrumbs.eq(0).attr('href')).toBe('/en/github')
    })

    testFeatureNewVersions('localized breadcrumbs link to localize pages', async () => {
      const $ = await getDOM('/ja/github/getting-started-with-github')
      const $breadcrumbs = $('.breadcrumbs a')
      expect($breadcrumbs.eq(0).attr('href')).toBe(`/ja/${nonEnterpriseDefaultVersion}/github`)
    })

    testFeatureOldVersions('localized breadcrumbs link to localize pages', async () => {
      const $ = await getDOM('/ja/github/getting-started-with-github')
      const $breadcrumbs = $('.breadcrumbs a')
      expect($breadcrumbs.eq(0).attr('href')).toBe('/ja/github')
    })
  })

  describe('context.breadcrumbs object', () => {
    testFeatureNewVersions('works on product index pages', async () => {
      const breadcrumbs = await getJSON('/en/github?json=breadcrumbs')
      const expected = {
        product: {
          href: `/${nonEnterpriseDefaultVersion}/github`,
          title: 'GitHub.com'
        }
      }
      expect(breadcrumbs).toEqual(expected)
    })

    testFeatureOldVersions('works on product index pages', async () => {
      const breadcrumbs = await getJSON('/en/github?json=breadcrumbs')
      const expected = {
        product: {
          href: '/github',
          title: 'GitHub.com'
        }
      }
      expect(breadcrumbs).toEqual(expected)
    })

    testFeatureNewVersions('works on category index pages', async () => {
      const breadcrumbs = await getJSON('/en/github/authenticating-to-github?json=breadcrumbs')
      const expected = {
        product: {
          href: `/${nonEnterpriseDefaultVersion}/github`,
          title: 'GitHub.com'
        },
        category: {
          href: `/${nonEnterpriseDefaultVersion}/github/authenticating-to-github`,
          title: 'Authentication'
        }
      }
      expect(breadcrumbs).toEqual(expected)
    })

    testFeatureOldVersions('works on category index pages', async () => {
      const breadcrumbs = await getJSON('/en/github/authenticating-to-github?json=breadcrumbs')
      const expected = {
        product: {
          href: '/github',
          title: 'GitHub.com'
        },
        category: {
          href: '/github/authenticating-to-github',
          title: 'Authentication'
        }
      }
      expect(breadcrumbs).toEqual(expected)
    })

    testFeatureNewVersions('works on maptopic pages', async () => {
      const breadcrumbs = await getJSON('/en/github/authenticating-to-github/keeping-your-account-and-data-secure?json=breadcrumbs')
      const expected = {
        product: {
          href: `/${nonEnterpriseDefaultVersion}/github`,
          title: 'GitHub.com'
        },
        category: {
          href: `/${nonEnterpriseDefaultVersion}/github/authenticating-to-github`,
          title: 'Authentication'
        },
        maptopic: {
          href: `/${nonEnterpriseDefaultVersion}/github/authenticating-to-github/keeping-your-account-and-data-secure`,
          title: 'Keeping your account and data secure'
        }
      }
      expect(breadcrumbs).toEqual(expected)
    })

    testFeatureOldVersions('works on maptopic pages', async () => {
      const breadcrumbs = await getJSON('/en/github/authenticating-to-github/keeping-your-account-and-data-secure?json=breadcrumbs')
      const expected = {
        product: {
          href: '/github',
          title: 'GitHub.com'
        },
        category: {
          href: '/github/authenticating-to-github',
          title: 'Authentication'
        },
        maptopic: {
          href: '/github/authenticating-to-github/keeping-your-account-and-data-secure',
          title: 'Keeping your account and data secure'
        }
      }
      expect(breadcrumbs).toEqual(expected)
    })

    testFeatureNewVersions('works on articles that DO have maptopics ', async () => {
      const breadcrumbs = await getJSON('/en/github/authenticating-to-github/creating-a-strong-password?json=breadcrumbs')
      const expected = {
        product: {
          href: `/${nonEnterpriseDefaultVersion}/github`,
          title: 'GitHub.com'
        },
        category: {
          href: `/${nonEnterpriseDefaultVersion}/github/authenticating-to-github`,
          title: 'Authentication'
        },
        maptopic: {
          href: `/${nonEnterpriseDefaultVersion}/github/authenticating-to-github/keeping-your-account-and-data-secure`,
          title: 'Keeping your account and data secure'
        },
        article: {
          href: `/${nonEnterpriseDefaultVersion}/github/authenticating-to-github/creating-a-strong-password`,
          title: 'Creating a strong password'
        }
      }
      expect(breadcrumbs).toEqual(expected)
    })

    testFeatureOldVersions('works on articles that DO have maptopics ', async () => {
      const breadcrumbs = await getJSON('/en/github/authenticating-to-github/creating-a-strong-password?json=breadcrumbs')
      const expected = {
        product: {
          href: '/github',
          title: 'GitHub.com'
        },
        category: {
          href: '/github/authenticating-to-github',
          title: 'Authentication'
        },
        maptopic: {
          href: '/github/authenticating-to-github/keeping-your-account-and-data-secure',
          title: 'Keeping your account and data secure'
        },
        article: {
          href: '/github/authenticating-to-github/creating-a-strong-password',
          title: 'Creating a strong password'
        }
      }
      expect(breadcrumbs).toEqual(expected)
    })

    testFeatureNewVersions('works on articles that DO NOT have maptopics ', async () => {
      const breadcrumbs = await getJSON('/github/site-policy/github-privacy-statement?json=breadcrumbs')
      const expected = {
        product: {
          href: `/${nonEnterpriseDefaultVersion}/github`,
          title: 'GitHub.com'
        },
        category: {
          href: `/${nonEnterpriseDefaultVersion}/github/site-policy`,
          title: 'Site policy'
        },
        article: {
          href: `/${nonEnterpriseDefaultVersion}/github/site-policy/github-privacy-statement`,
          title: 'GitHub Privacy Statement'
        }
      }
      expect(breadcrumbs).toEqual(expected)
    })

    testFeatureOldVersions('works on articles that DO NOT have maptopics ', async () => {
      const breadcrumbs = await getJSON('/github/site-policy/github-privacy-statement?json=breadcrumbs')
      const expected = {
        product: {
          href: '/github',
          title: 'GitHub.com'
        },
        category: {
          href: '/github/site-policy',
          title: 'Site policy'
        },
        article: {
          href: '/github/site-policy/github-privacy-statement',
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
