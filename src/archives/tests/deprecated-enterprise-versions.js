import { describe, expect, test, vi } from 'vitest'

import enterpriseServerReleases from '#src/versions/lib/enterprise-server-releases.js'
import { get, getDOM } from '#src/tests/helpers/e2etest.js'
import { SURROGATE_ENUMS } from '#src/frame/middleware/set-fastly-surrogate-key.js'

describe('enterprise deprecation', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  test('redirects language-prefixed requests for deprecated enterprise content', async () => {
    const res = await get('/en/enterprise/2.12')
    expect(res.statusCode).toBe(301)
    expect(res.headers.location).toBe('/enterprise/2.12')
  })

  test('redirects language-prefixed requests for deprecated version 11.10.340', async () => {
    const res = await get('/en/enterprise/11.10.340')
    expect(res.statusCode).toBe(301)
    expect(res.headers.location).toBe('/enterprise/11.10.340')
  })

  test('redirects non-language-prefixed requests for deprecated enterprise content >=2.13', async () => {
    const res = await get('/enterprise/2.13')
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe('/en/enterprise/2.13')
  })

  test('workaround for lost frontmatter redirects works in deprecated enterprise content >=2.13', async () => {
    const res = await get(
      '/en/enterprise/2.15/user/articles/viewing-contributions-on-your-profile-page',
    )
    expect(res.statusCode).toBe(301)
    expect(res.headers.location).toBe(
      '/en/enterprise/2.15/user/articles/viewing-contributions-on-your-profile',
    )
  })

  test('can access redirects from redirects.json in deprecated enterprise content >2.17', async () => {
    const res = await get('/enterprise/2.19/admin/categories/time')
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe(
      '/en/enterprise-server@2.19/admin/configuration/configuring-time-synchronization',
    )
  })

  test('handles requests for deprecated Enterprise pages ( >=2.13 )', async () => {
    expect(enterpriseServerReleases.deprecated.includes('2.13')).toBe(true)
    const $ = await getDOM('/en/enterprise/2.13/user/articles/about-branches')
    expect($.res.statusCode).toBe(200)
    expect($('h1').first().text()).toBe('About branches')
  })

  test('sets the expected headers for deprecated Enterprise pages', async () => {
    const res = await get('/en/enterprise/2.13/user/articles/about-branches')
    expect(res.statusCode).toBe(200)
    expect(res.headers['x-robots-tag']).toBe('noindex')
    expect(res.headers['surrogate-key']).toBe(SURROGATE_ENUMS.MANUAL)
    expect(res.headers['set-cookie']).toBeUndefined()
  })

  test('handles requests for deprecated Enterprise pages ( <2.13 )', async () => {
    expect(enterpriseServerReleases.deprecated.includes('2.12')).toBe(true)
    const $ = await getDOM('/enterprise/2.12/user/articles/about-branches')
    expect($.res.statusCode).toBe(200)
    expect($('h2').text()).toBe('About branches')
  })

  test('handles requests for deprecated Enterprise version 11.10.340', async () => {
    expect(enterpriseServerReleases.deprecated.includes('11.10.340')).toBe(true)
    const $ = await getDOM('/enterprise/11.10.340/admin/articles/adding-teams')
    expect($.res.statusCode).toBe(200)
    expect($('h2').text()).toBe('Adding teams')
  })

  test('has working admin guide links ( <2.13 )', async () => {
    const guidesPath = '/enterprise/2.12/admin'
    let $ = await getDOM(`${guidesPath}/guides`)
    const firstLink = $('[class="guide-section"]').children('a').attr('href')

    $ = await getDOM(`${guidesPath}/${firstLink}`)
    expect($.res.statusCode).toBe(200)
    // this test assumes the Installation guide is the first link on the guides page
    expect($('h2').text()).toBe('Installing and configuring GitHub Enterprise')
  })
})

// Starting with the deprecation of 3.0, it's the first time we deprecate
// enterprise versions since redirects is a *function* rather than a
// lookup in a big object.
describe('recently deprecated redirects', () => {
  test('basic enterprise 3.0 redirects', async () => {
    const res = await get('/enterprise/3.0')
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe('/en/enterprise-server@3.0')
    expect(res.headers['set-cookie']).toBeUndefined()
    // language specific caching
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers.vary).toContain('accept-language')
    expect(res.headers.vary).toContain('x-user-language')
  })

  test('already languaged enterprise 3.0 redirects', async () => {
    const res = await get('/en/enterprise/3.0')
    expect(res.statusCode).toBe(301)
    expect(res.headers.location).toBe('/en/enterprise-server@3.0')
    // 301 redirects are safe to cache aggressively
    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
  })

  test('redirects enterprise-server 3.0 with actual redirect without language', async () => {
    const res = await get(
      '/enterprise-server@3.0/github/getting-started-with-github/githubs-products',
    )
    expect(res.statusCode).toBe(302)
    expect(res.headers['set-cookie']).toBeUndefined()
    // language specific caching
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers.vary).toContain('accept-language')
    expect(res.headers.vary).toContain('x-user-language')
    // This is based on
    // https://github.com/github/help-docs-archived-enterprise-versions/blob/master/3.0/redirects.json
    expect(res.headers.location).toBe(
      '/en/enterprise-server@3.0/get-started/learning-about-github/githubs-products',
    )
  })

  test('follow redirects enterprise-server 3.0 with actual redirect without language', async () => {
    const res = await get(
      '/enterprise-server@3.0/github/getting-started-with-github/githubs-products',
      { followAllRedirects: true },
    )
    expect(res.statusCode).toBe(200)
  })
})

describe('deprecation banner', () => {
  test('renders a deprecation warning banner on oldest supported Enterprise version', async () => {
    const $ = await getDOM(`/en/enterprise/${enterpriseServerReleases.oldestSupported}`)
    expect($('[data-testid=deprecation-banner]').length).toBe(1)
  })

  test('does not render a deprecation warning banner on other Enterprise versions', async () => {
    const $ = await getDOM(`/en/enterprise/${enterpriseServerReleases.latest}`)
    expect($('[data-testid=deprecation-banner]').length).toBe(0)
  })

  test('deprecation warning banner includes a date', async () => {
    const $ = await getDOM(`/en/enterprise/${enterpriseServerReleases.oldestSupported}`)
    expect($('[data-testid=deprecation-banner] b').text().endsWith('discontinued on .')).toBe(false)
  })

  test('deprecation warning banner includes the right text depending on the date', async () => {
    const $ = await getDOM(`/en/enterprise/${enterpriseServerReleases.oldestSupported}`)
    const expectedString = enterpriseServerReleases.isOldestReleaseDeprecated
      ? 'was discontinued'
      : 'will be discontinued'
    expect($('[data-testid=deprecation-banner] b').text().includes(expectedString)).toBe(true)
  })
})

describe('does not render survey prompt or contribution button', () => {
  test('does not render survey prompt', async () => {
    let $ = await getDOM(`/en/enterprise/${enterpriseServerReleases.latest}/github`)
    expect($('[data-testid="survey-form"]').length).toBeGreaterThan(0)
    $ = await getDOM(`/en/enterprise/${enterpriseServerReleases.oldestSupported}/github`)
    if (enterpriseServerReleases.isOldestReleaseDeprecated) {
      expect($('[data-testid="survey-form"]').length).toBe(0)
    } else {
      expect($('[data-testid="survey-form"]').length).toBeGreaterThan(0)
    }
  })

  test('does not render contribution button', async () => {
    let $ = await getDOM(`/en/enterprise/${enterpriseServerReleases.latest}/github`)
    expect($('.contribution').length).toBeGreaterThan(0)
    $ = await getDOM(`/en/enterprise/${enterpriseServerReleases.oldestSupported}/github`)
    if (enterpriseServerReleases.isOldestReleaseDeprecated) {
      expect($('.contribution').length).toBe(0)
    } else {
      expect($('[data-testid=survey-form]').length).toBeGreaterThan(0)
    }
  })
})

describe('JS and CSS assets', () => {
  test('returns the expected CSS file > 2.18', async () => {
    const result = await get('/enterprise/2.18/dist/index.css', {
      headers: {
        Referrer: '/en/enterprise/2.18',
      },
    })
    expect(result.statusCode).toBe(200)
    expect(result.headers['x-is-archived']).toBe('true')
    expect(result.headers['content-type']).toBe('text/css; charset=utf-8')
    expect(result.headers['cache-control']).toContain('public')
    expect(result.headers['cache-control']).toMatch(/max-age=[1-9]/)
    expect(result.headers['surrogate-key']).toBe(SURROGATE_ENUMS.MANUAL)
  })

  test('returns the expected CSS file', async () => {
    const result = await get('/stylesheets/index.css', {
      headers: {
        Referrer: '/en/enterprise/2.13',
      },
    })
    expect(result.statusCode).toBe(200)
    expect(result.headers['x-is-archived']).toBe('true')
    expect(result.headers['content-type']).toBe('text/css; charset=utf-8')
  })

  test('returns the expected JS file > 2.18 by using Referrer', async () => {
    const result = await get('/enterprise/2.18/dist/index.js', {
      headers: {
        Referrer: '/en/enterprise/2.18',
      },
    })
    expect(result.statusCode).toBe(200)
    expect(result.headers['x-is-archived']).toBe('true')
    expect(result.headers['content-type']).toBe('application/javascript; charset=utf-8')
  })

  test("cannot return the archived asset if there's no Referrer", async () => {
    const result = await get('/enterprise/2.18/dist/index.js', {
      headers: {
        // No Referrer header set at all.
      },
    })
    expect(result.statusCode).toBe(404)
  })

  test('cannot return the archived asset if empty Referrer', async () => {
    const result = await get('/enterprise/2.18/dist/index.js', {
      headers: {
        Referrer: '',
      },
    })
    expect(result.statusCode).toBe(404)
  })

  test('returns the expected JS file', async () => {
    const result = await get('/javascripts/index.js', {
      headers: {
        Referrer: '/en/enterprise/2.13',
      },
    })
    expect(result.statusCode).toBe(200)
    expect(result.headers['x-is-archived']).toBe('true')
    expect(result.headers['content-type']).toBe('application/javascript; charset=utf-8')
  })

  test('returns the expected image', async () => {
    const result = await get('/assets/images/octicons/hamburger.svg', {
      headers: {
        Referrer: '/en/enterprise/2.17',
      },
    })
    expect(result.statusCode).toBe(200)
    expect(result.headers['x-is-archived']).toBe('true')
    expect(result.headers['content-type']).toBe('image/svg+xml; charset=utf-8')
  })

  test('returns the expected node_modules', async () => {
    const result = await get(
      '/node_modules/instantsearch.js/dist/instantsearch.production.min.js',
      {
        headers: {
          Referrer: '/en/enterprise/2.17',
        },
      },
    )
    expect(result.statusCode).toBe(200)
    expect(result.headers['x-is-archived']).toBe('true')
    expect(result.headers['content-type']).toBe('application/javascript; charset=utf-8')
  })

  test('returns the expected favicon', async () => {
    const result = await get('/assets/images/site/favicon.svg', {
      headers: {
        Referrer: '/en/enterprise/2.18',
      },
    })
    expect(result.statusCode).toBe(200)
    expect(result.headers['x-is-archived']).toBe('true')
    expect(result.headers['content-type']).toBe('image/svg+xml; charset=utf-8')
  })

  test('returns the expected CSS file ( <2.13 )', async () => {
    const result = await get('/assets/stylesheets/application.css', {
      headers: {
        Referrer: '/en/enterprise/2.12',
      },
    })
    expect(result.statusCode).toBe(200)
    expect(result.headers['x-is-archived']).toBe('true')
    expect(result.headers['content-type']).toBe('text/css; charset=utf-8')
  })

  test('ignores invalid paths', async () => {
    const result = await get('/pizza/index.css', {
      headers: {
        Referrer: '/en/enterprise/2.13',
      },
    })
    expect(result.statusCode).toBe(404)
    expect(result.headers['x-is-archived']).toBeUndefined()
  })
})
