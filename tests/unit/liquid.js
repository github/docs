const { liquid } = require('../../lib/render-content')
const middleware = require('../../middleware/contextualizers/short-versions')
const allVersions = require('../../lib/all-versions')
const enterpriseServerReleases = require('../../lib/enterprise-server-releases')

const template = `
  {% if currentVersion ver_gt "enterprise-server@2.13" %}up to date{% endif %}
  {% if currentVersion ver_lt "enterprise-server@2.13" %}out of date{% endif %}
`

const shortVersionsTemplate = `
 {% ifver fpt %} I am FPT {% endif %}
 {% ifver ghae %} I am GHAE {% endif %}
 {% ifver ghes %} I am GHES {% endif %}
 {% ifver ghes = 3.1 %} I am GHES = 3.1 {% endif %}
 {% ifver ghes > 3.1 %} I am GHES > 3.1 {% endif %}
 {% ifver ghes < 3.1 %} I am GHES < 3.1 {% endif %}
 {% ifver fpt or ghes < 3.0 %} I am FTP or GHES < 3.0 {% endif %}
 {% ifver ghes < 3.1 and ghes > 2.22 %} I am 3.0 only {% endif %}
`

describe('liquid template parser', () => {
  describe('custom operators', () => {
    describe('ver_gt', () => {
      test('works as expected', async () => {
        const context = { currentVersion: 'enterprise-server@2.14' }
        const output = await liquid.parseAndRender(template, context)
        expect(output.trim()).toBe('up to date')
      })

      test('returns false when given value is not numeric, like `dotcom`', async () => {
        const context = { currentVersion: 'free-pro-team@latest' }

        const output = await liquid.parseAndRender(template, context)
        expect(output.trim()).toBe('')
      })

      test('returns false when given value is falsy', async () => {
        const context = {}
        const output = await liquid.parseAndRender(template, context)
        expect(output.trim()).toBe('')
      })
    })

    describe('ver_lt', () => {
      test('works as expected', async () => {
        const context = { currentVersion: 'enterprise-server@2.12' }
        const output = await liquid.parseAndRender(template, context)
        expect(output.trim()).toBe('out of date')
      })
    })
  })

  describe('short versions', () => {
    // Create a fake req so we can test the shortVersions middleware
    const req = { language: 'en', query: {} }

    test('FPT works as expected when it is FPT', async () => {
      req.context = {
        currentVersion: 'free-pro-team@latest',
        page: {},
        allVersions,
        enterpriseServerReleases
      }
      await middleware(req, null, () => {})
      const output = await liquid.parseAndRender(shortVersionsTemplate, req.context)
      // We should have TWO results because we are supporting two shortcuts
      expect(output.replace(/\s\s+/g, ' ').trim()).toBe('I am FPT I am FTP or GHES < 3.0')
    })

    test('GHAE works as expected', async () => {
      req.context = {
        currentVersion: 'github-ae@latest',
        page: {},
        allVersions,
        enterpriseServerReleases
      }
      await middleware(req, null, () => {})
      const output = await liquid.parseAndRender(shortVersionsTemplate, req.context)
      expect(output.trim()).toBe('I am GHAE')
    })

    test('GHES works as expected', async () => {
      req.context = {
        currentVersion: 'enterprise-server@2.22',
        page: {},
        allVersions,
        enterpriseServerReleases
      }
      await middleware(req, null, () => {})
      const output = await liquid.parseAndRender(shortVersionsTemplate, req.context)
      expect(output.replace(/\s\s+/g, ' ').trim()).toBe('I am GHES I am GHES < 3.1 I am FTP or GHES < 3.0')
    })

    test('AND statements work as expected', async () => {
      req.context = {
        currentVersion: 'enterprise-server@3.0',
        page: {},
        allVersions,
        enterpriseServerReleases
      }
      await middleware(req, null, () => {})
      const output = await liquid.parseAndRender(shortVersionsTemplate, req.context)
      expect(output.replace(/\s\s+/g, ' ').trim()).toBe('I am GHES I am GHES < 3.1 I am 3.0 only')
    })
  })
})
