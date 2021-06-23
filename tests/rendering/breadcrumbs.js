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
      const $ = await getDOM('/github/authenticating-to-github/troubleshooting-ssh/using-ssh-over-the-https-port')
      const $breadcrumbs = $('.breadcrumbs a')

      expect($breadcrumbs).toHaveLength(4)
      expect($breadcrumbs[0].attribs.title).toBe('product: GitHub.com')
      expect($breadcrumbs[1].attribs.title).toBe('category: Authentication')
      expect($breadcrumbs[2].attribs.title).toBe('mapTopic: Troubleshooting SSH')
      expect($breadcrumbs[3].attribs.title).toBe('article: Using SSH over the HTTPS port')
    })

    test('maptopic pages include their own grayed-out breadcrumb', async () => {
      const $ = await getDOM('/github/authenticating-to-github/keeping-your-account-and-data-secure')
      const $breadcrumbs = $('.breadcrumbs a')

      expect($breadcrumbs).toHaveLength(3)
      expect($breadcrumbs[0].attribs.title).toBe('product: GitHub.com')
      expect($breadcrumbs[1].attribs.title).toBe('category: Authentication')
      expect($breadcrumbs[2].attribs.title).toBe('mapTopic: Keeping your account and data secure')
      expect($breadcrumbs[2].attribs.class.includes('color-text-tertiary')).toBe(true)
    })

    test('works for enterprise user pages', async () => {
      const $ = await getDOM('/en/enterprise-server/github/authenticating-to-github/troubleshooting-ssh/recovering-your-ssh-key-passphrase')
      const $breadcrumbs = $('.breadcrumbs a')
      expect($breadcrumbs).toHaveLength(4)
      // The product is still GitHub.com on an Enterprise Server version
      expect($breadcrumbs[0].attribs.title).toBe('product: GitHub.com')
    })

    test('parses Liquid variables inside titles', async () => {
      const $ = await getDOM('/en/enterprise/admin/enterprise-support')
      const $breadcrumbs = $('.breadcrumbs a')
      expect($breadcrumbs).toHaveLength(2)
      expect($breadcrumbs[1].attribs.title).toBe('category: Working with GitHub Support')
    })

    test('English breadcrumbs link to English pages', async () => {
      const $ = await getDOM('/en/github/setting-up-and-managing-your-github-user-account')
      const $breadcrumbs = $('.breadcrumbs a')
      expect($breadcrumbs[0].attribs.href).toBe('/en/github')
    })

    test('localized breadcrumbs link to localize pages', async () => {
      const $ = await getDOM('/ja/github/setting-up-and-managing-your-github-user-account')
      const $breadcrumbs = $('.breadcrumbs a')
      expect($breadcrumbs[0].attribs.href).toBe('/ja/github')
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
      expect($breadcrumbSpans[0].children[0].data).toBe('Early Access documentation')
      expect($breadcrumbSpans[1].children[0].data).toBe('GitHub.com')
      expect($breadcrumbLinks[0].attribs.title).toBe('category: Enforcing best practices with GitHub Policies')
      expect($breadcrumbLinks[1].attribs.title).toBe('article: About GitHub Policies')
      expect($breadcrumbLinks[1].attribs.class.includes('color-text-tertiary')).toBe(true)
    })
  })

  describe('context.breadcrumbs object', () => {
    test('works on product index pages', async () => {
      const breadcrumbs = await getJSON('/en/github?json=breadcrumbs')
      const expected = [
        {
          documentType: 'product',
          href: '/en/github',
          title: 'GitHub.com'
        }
      ]
      expect(breadcrumbs).toEqual(expected)
    })

    test('works on category index pages', async () => {
      const breadcrumbs = await getJSON('/en/github/authenticating-to-github?json=breadcrumbs')
      const expected = [
        {
          documentType: 'product',
          href: '/en/github',
          title: 'GitHub.com'
        },
        {
          documentType: 'category',
          href: '/en/github/authenticating-to-github',
          title: 'Authentication'
        }
      ]
      expect(breadcrumbs).toEqual(expected)
    })

    test('works on maptopic pages', async () => {
      const breadcrumbs = await getJSON('/en/github/authenticating-to-github/keeping-your-account-and-data-secure?json=breadcrumbs')
      const expected = [
        {
          documentType: 'product',
          href: '/en/github',
          title: 'GitHub.com'
        },
        {
          documentType: 'category',
          href: '/en/github/authenticating-to-github',
          title: 'Authentication'
        },
        {
          documentType: 'mapTopic',
          href: '/en/github/authenticating-to-github/keeping-your-account-and-data-secure',
          title: 'Keeping your account and data secure'
        }
      ]
      expect(breadcrumbs).toEqual(expected)
    })

    test('works on articles that DO have maptopics ', async () => {
      const breadcrumbs = await getJSON('/en/github/authenticating-to-github/creating-a-strong-password?json=breadcrumbs')
      const expected = [
        {
          documentType: 'product',
          href: '/en/github',
          title: 'GitHub.com'
        },
        {
          documentType: 'category',
          href: '/en/github/authenticating-to-github',
          title: 'Authentication'
        },
        {
          documentType: 'mapTopic',
          href: '/en/github/authenticating-to-github/keeping-your-account-and-data-secure',
          title: 'Keeping your account and data secure'
        },
        {
          documentType: 'article',
          href: '/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-strong-password',
          title: 'Creating a strong password'
        }
      ]
      expect(breadcrumbs).toEqual(expected)
    })

    test('works on articles that DO NOT have maptopics ', async () => {
      const breadcrumbs = await getJSON('/github/site-policy/github-privacy-statement?json=breadcrumbs')
      const expected = [
        {
          documentType: 'product',
          href: '/en/github',
          title: 'GitHub.com'
        },
        {
          documentType: 'category',
          href: '/en/github/site-policy',
          title: 'Site policy'
        },
        {
          documentType: 'article',
          href: '/en/github/site-policy/github-privacy-statement',
          title: 'GitHub Privacy Statement'
        }
      ]
      expect(breadcrumbs).toEqual(expected)
    })

    test('returns an empty array on the landing page', async () => {
      const breadcrumbs = await getJSON('/en?json=breadcrumbs')
      expect(breadcrumbs).toEqual([])
    })
  })
})
