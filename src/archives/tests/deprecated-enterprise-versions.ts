import { describe, expect, test, vi } from 'vitest'

import enterpriseServerReleases from '@/versions/lib/enterprise-server-releases'
import { get, getDOM } from '@/tests/helpers/e2etest'
import { SURROGATE_ENUMS } from '@/frame/middleware/set-fastly-surrogate-key'
import {
  ARCHIVED_BUILD_MANIFEST_STUB_PATH,
  injectArchivedBuildManifestStub,
} from '@/archives/middleware/archived-enterprise-versions'

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

  test('redirects double-slash paths in deprecated enterprise content to the collapsed path', async () => {
    const res = await get('/en/enterprise-server@3.5//admin/overview')
    expect(res.statusCode).toBe(301)
    expect(res.headers.location).toBe('/en/enterprise-server@3.5/admin/overview')

    const res2 = await get('/en/enterprise/2.15/user//articles/about-branches')
    expect(res2.statusCode).toBe(301)
    expect(res2.headers.location).toBe('/en/enterprise/2.15/user/articles/about-branches')
  })

  test('redirects a doubled language prefix from the archived language picker to the chosen language', async () => {
    const res = await get('/es/ja/enterprise-server@3.17/get-started?tool=webui')
    expect(res.statusCode).toBe(301)
    expect(res.headers.location).toBe('/ja/enterprise-server@3.17/get-started?tool=webui')
  })

  test('handles requests for deprecated Enterprise pages ( >=2.13 )', async () => {
    expect(enterpriseServerReleases.deprecated.includes('2.13')).toBe(true)
    const { $, res } = await getDOM('/en/enterprise/2.13/user/articles/about-branches')
    expect(res.statusCode).toBe(200)
    expect($('h1').first().text()).toBe('About branches')
  })

  test('sets the expected headers for deprecated Enterprise pages', async () => {
    const res = await get('/en/enterprise/2.13/user/articles/about-branches')
    expect(res.statusCode).toBe(200)
    expect(res.headers['x-robots-tag']).toBe('noindex')
    expect(res.headers['surrogate-key']).toBe(SURROGATE_ENUMS.MANUAL)
    expect(res.headers['set-cookie']).toBeUndefined()
  })

  test('does not put request host headers into deprecated Enterprise pages ( 3.2-3.9 )', async () => {
    const res = await get(
      '/en/enterprise-server@3.5/admin/overview/about-github-enterprise-server',
      {
        headers: {
          'x-host': 'evil.example"><script>alert(1)</script>',
          'x-forwarded-host': 'evil.example',
          'x-forwarded-proto': 'javascript',
        },
      },
    )
    expect(res.statusCode).toBe(200)
    expect(res.body).not.toContain('evil.example')
    expect(res.body).not.toContain('javascript://')
    expect(res.body).toContain('src="/enterprise-server@3.5/_next/')
  })

  test('handles requests for deprecated Enterprise pages ( <2.13 )', async () => {
    expect(enterpriseServerReleases.deprecated.includes('2.12')).toBe(true)
    const { $, res } = await getDOM('/enterprise/2.12/user/articles/about-branches')
    expect(res.statusCode).toBe(200)
    expect($('h2').text()).toBe('About branches')
  })

  test('handles requests for deprecated Enterprise version 11.10.340', async () => {
    expect(enterpriseServerReleases.deprecated.includes('11.10.340')).toBe(true)
    const { $, res } = await getDOM('/enterprise/11.10.340/admin/articles/adding-teams')
    expect(res.statusCode).toBe(200)
    expect($('h2').text()).toBe('Adding teams')
  })

  test('has working admin guide links ( <2.13 )', async () => {
    const guidesPath = '/enterprise/2.12/admin'
    const { $: $1 } = await getDOM(`${guidesPath}/guides`)
    const firstLink = $1('[class="guide-section"]').children('a').attr('href')

    const { $: $2, res } = await getDOM(`${guidesPath}/${firstLink}`)
    expect(res.statusCode).toBe(200)
    // The test follows the first link, which is the Installation guide.
    expect($2('h2').text()).toBe('Installing and configuring GitHub Enterprise')
  })
})

// Enterprise 3.0 redirects use getRedirect plus redirects.json instead of a static object.
describe('recently deprecated redirects', () => {
  test('basic enterprise 3.0 redirects', async () => {
    const res = await get('/enterprise/3.0')
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe('/en/enterprise-server@3.0')
    expect(res.headers['set-cookie']).toBeUndefined()
    // Language-specific redirects vary by language headers.
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers.vary).toContain('accept-language')
    expect(res.headers.vary).toContain('x-user-language')
  })

  test('already languaged enterprise 3.0 redirects', async () => {
    const res = await get('/en/enterprise/3.0')
    expect(res.statusCode).toBe(301)
    expect(res.headers.location).toBe('/en/enterprise-server@3.0')
    // 301 redirects can cache aggressively.
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
    // Language-specific redirects vary by language headers.
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers.vary).toContain('accept-language')
    expect(res.headers.vary).toContain('x-user-language')
    // Matches https://github.com/github/docs-ghes-3.0/blob/main/redirects.json.
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
    const { $ } = await getDOM(`/en/enterprise/${enterpriseServerReleases.oldestSupported}`)
    expect($('[data-testid=deprecation-banner]').length).toBe(1)
  })

  test('does not render a deprecation warning banner on other Enterprise versions', async () => {
    const { $ } = await getDOM(`/en/enterprise/${enterpriseServerReleases.latest}`)
    expect($('[data-testid=deprecation-banner]').length).toBe(0)
  })

  test('deprecation warning banner includes a date', async () => {
    const { $ } = await getDOM(`/en/enterprise/${enterpriseServerReleases.oldestSupported}`)
    expect($('[data-testid=deprecation-banner] b').text().endsWith('discontinued on .')).toBe(false)
  })

  test('deprecation warning banner includes the right text depending on the date', async () => {
    const { $ } = await getDOM(`/en/enterprise/${enterpriseServerReleases.oldestSupported}`)
    const expectedString = enterpriseServerReleases.isOldestReleaseDeprecated
      ? 'was discontinued'
      : 'will be discontinued'
    expect($('[data-testid=deprecation-banner] b').text().includes(expectedString)).toBe(true)
  })
})

describe('does not render survey prompt or contribution button', () => {
  test('does not render survey prompt', async () => {
    const { $: $1 } = await getDOM(`/en/enterprise/${enterpriseServerReleases.latest}/github`)
    expect($1('[data-testid="survey-form"]').length).toBeGreaterThan(0)
    const { $: $2 } = await getDOM(
      `/en/enterprise/${enterpriseServerReleases.oldestSupported}/github`,
    )
    if (enterpriseServerReleases.isOldestReleaseDeprecated) {
      expect($2('[data-testid="survey-form"]').length).toBe(0)
    } else {
      expect($2('[data-testid="survey-form"]').length).toBeGreaterThan(0)
    }
  })

  test('does not render contribution button', async () => {
    const { $: $1 } = await getDOM(`/en/enterprise/${enterpriseServerReleases.latest}/github`)
    expect($1('.contribution').length).toBeGreaterThan(0)
    const { $: $2 } = await getDOM(
      `/en/enterprise/${enterpriseServerReleases.oldestSupported}/github`,
    )
    if (enterpriseServerReleases.isOldestReleaseDeprecated) {
      expect($2('.contribution').length).toBe(0)
    } else {
      expect($2('[data-testid=survey-form]').length).toBeGreaterThan(0)
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

  test('404 if the pathname contains URL characters (../)', async () => {
    const result = await get('/enterprise/2.18/dist/index../css', {
      headers: {
        Referrer: '/en/enterprise/2.18',
      },
    })
    expect(result.statusCode).toBe(404)
    expect(result.headers['x-is-archived']).toBeUndefined()
    expect(result.headers['content-type']).toBe('text/plain; charset=utf-8')
    expect(result.headers['cache-control']).toContain('public')
    expect(result.headers['cache-control']).toMatch(/max-age=[1-9]/)
  })

  test('404 if the pathname contains URL characters (://)', async () => {
    const result = await get('/enterprise/2.18/dist/index.csshttp://example.com', {
      headers: {
        Referrer: '/en/enterprise/2.18',
      },
    })
    expect(result.statusCode).toBe(404)
    expect(result.headers['x-is-archived']).toBeUndefined()
    expect(result.headers['content-type']).toBe('text/plain; charset=utf-8')
    expect(result.headers['cache-control']).toContain('public')
    expect(result.headers['cache-control']).toMatch(/max-age=[1-9]/)
  })

  test('404 if the pathname contains URL characters (@)', async () => {
    const result = await get('/enterprise/2.18/dist/index.css:password@example.com', {
      headers: {
        Referrer: '/en/enterprise/2.18',
      },
    })
    expect(result.statusCode).toBe(404)
    expect(result.headers['x-is-archived']).toBeUndefined()
    expect(result.headers['content-type']).toBe('text/plain; charset=utf-8')
    expect(result.headers['cache-control']).toContain('public')
    expect(result.headers['cache-control']).toMatch(/max-age=[1-9]/)
  })
})

describe('archived build manifest stub', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  const stubTag = `<script src="${ARCHIVED_BUILD_MANIFEST_STUB_PATH}"></script>`

  test('injects the stub first in <head> for Next.js archives', () => {
    const html =
      '<html><head><meta charset="utf-8"><script src="/a.js" defer></script></head>' +
      '<body><script id="__NEXT_DATA__" type="application/json">{}</script></body></html>'
    expect(injectArchivedBuildManifestStub(html)).toBe(html.replace('<head>', `<head>${stubTag}`))
  })

  test('does not inject the stub into non-Next.js archives', () => {
    const html = '<html><head><title>x</title></head><body></body></html>'
    expect(injectArchivedBuildManifestStub(html)).toBe(html)
  })

  test('serves the stub as same-origin JavaScript even with an archive Referrer', async () => {
    const res = await get(ARCHIVED_BUILD_MANIFEST_STUB_PATH, {
      headers: { Referrer: '/en/enterprise-server@3.18/admin' },
    })
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toMatch(/javascript/)
    expect(res.body).toContain('self.__BUILD_MANIFEST=')
  })

  test('adds the stub to Next.js archived pages and not to older archives', async () => {
    const nextEra = await get(
      '/en/enterprise-server@3.5/admin/overview/about-github-enterprise-server',
    )
    expect(nextEra.statusCode).toBe(200)
    expect(nextEra.body).toContain(stubTag)

    const legacy = await get('/en/enterprise/2.13/user/articles/about-branches')
    expect(legacy.statusCode).toBe(200)
    expect(legacy.body).not.toContain(stubTag)
  })
})
