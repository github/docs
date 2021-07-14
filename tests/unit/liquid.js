const { liquid } = require('../../lib/render-content')
const shortVersionsMiddleware = require('../../middleware/contextualizers/short-versions')
const featureVersionsMiddleware = require('../../middleware/contextualizers/features')
const allVersions = require('../../lib/all-versions')
const enterpriseServerReleases = require('../../lib/enterprise-server-releases')
const loadSiteData = require('../../lib/site-data')

const template = `
  {% if currentVersion ver_gt "enterprise-server@2.13" %}up to date{% endif %}
  {% if currentVersion ver_lt "enterprise-server@2.13" %}out of date{% endif %}
`

const shortVersionsTemplate = `
  {% ifversion fpt %} I am FPT {% endif %}
  {% ifversion ghae %} I am GHAE {% endif %}
  {% ifversion ghes %} I am GHES {% endif %}
  {% ifversion ghes = 3.1 %} I am GHES = 3.1 {% endif %}
  {% ifversion ghes > 3.1 %} I am GHES > 3.1 {% endif %}
  {% ifversion ghes < 3.1 %} I am GHES < 3.1 {% endif %}
  {% ifversion fpt or ghes < 3.0 %} I am FTP or GHES < 3.0 {% endif %}
  {% ifversion ghes < 3.1 and ghes > 2.22 %} I am 3.0 only {% endif %}
`

const negativeVersionsTemplate = `
  {% ifversion not ghae %} I am not GHAE {% endif %}
  {% ifversion not ghes %} I am not GHES {% endif %}
  {% ifversion ghes != 3.1 %} I am not GHES 3.1 {% endif %}
`

const featureVersionsTemplate = `
  {% if placeholder %} I am placeholder content {% endif %}
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
      await shortVersionsMiddleware(req, null, () => {})
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
      await shortVersionsMiddleware(req, null, () => {})
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
      await shortVersionsMiddleware(req, null, () => {})
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
      await shortVersionsMiddleware(req, null, () => {})
      const output = await liquid.parseAndRender(shortVersionsTemplate, req.context)
      expect(output.replace(/\s\s+/g, ' ').trim()).toBe('I am GHES I am GHES < 3.1 I am 3.0 only')
    })

    test('NOT statements work as expected on versions without numbered releases', async () => {
      req.context = {
        currentVersion: 'github-ae@latest',
        page: {},
        allVersions,
        enterpriseServerReleases
      }
      await shortVersionsMiddleware(req, null, () => {})
      const output = await liquid.parseAndRender(negativeVersionsTemplate, req.context)
      expect(output.replace(/\s\s+/g, ' ').trim()).toBe('I am not GHES I am not GHES 3.1')
    })

    test('NOT statements work as expected on versions with numbered releases', async () => {
      req.context = {
        currentVersion: 'enterprise-server@3.0',
        page: {},
        allVersions,
        enterpriseServerReleases
      }
      await shortVersionsMiddleware(req, null, () => {})
      const output = await liquid.parseAndRender(negativeVersionsTemplate, req.context)
      expect(output.replace(/\s\s+/g, ' ').trim()).toBe('I am not GHAE I am not GHES 3.1')
    })

    test('The != operator works as expected', async () => {
      req.context = {
        currentVersion: 'enterprise-server@3.1',
        page: {},
        allVersions,
        enterpriseServerReleases
      }
      await shortVersionsMiddleware(req, null, () => {})
      const output = await liquid.parseAndRender(negativeVersionsTemplate, req.context)
      expect(output.replace(/\s\s+/g, ' ').trim()).toBe('I am not GHAE')
    })
  })

  describe('feature versions', () => {
    // Create a fake req so we can test the feature versions middleware
    const req = { language: 'en', query: {} }

    let siteData
    beforeAll(async () => {
      const allSiteData = await loadSiteData()
      siteData = allSiteData.en.site
    })

    test('does not render in FPT because feature is not available in FPT', async () => {
      req.context = {
        currentVersion: 'free-pro-team@latest',
        page: {},
        allVersions,
        enterpriseServerReleases,
        site: siteData
      }
      await featureVersionsMiddleware(req, null, () => {})
      const outputFpt = await liquid.parseAndRender(featureVersionsTemplate, req.context)
      expect(outputFpt.includes('placeholder content')).toBe(false)
    })

    test('renders in GHES because feature is available in GHES', async () => {
      req.context = {
        currentVersion: `enterprise-server@${enterpriseServerReleases.latest}`,
        page: {},
        allVersions,
        enterpriseServerReleases,
        site: siteData
      }
      await featureVersionsMiddleware(req, null, () => {})
      const outputFpt = await liquid.parseAndRender(featureVersionsTemplate, req.context)
      expect(outputFpt.includes('placeholder content')).toBe(true)
    })

    test('renders in GHAE because feature is available in GHAE', async () => {
      req.context = {
        currentVersion: 'github-ae@latest',
        page: {},
        allVersions,
        enterpriseServerReleases,
        site: siteData
      }
      await featureVersionsMiddleware(req, null, () => {})
      const outputFpt = await liquid.parseAndRender(featureVersionsTemplate, req.context)
      expect(outputFpt.includes('placeholder content')).toBe(true)
    })
  })
})
