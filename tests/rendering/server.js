import enterpriseServerReleases from '#src/versions/lib/enterprise-server-releases.js'
import { get, getDOM, head, post } from '../helpers/e2etest.js'
import { describeViaActionsOnly } from '../helpers/conditional-runs.js'
import { loadPages } from '../../lib/page-data.js'
import CspParse from 'csp-parse'
import {
  SURROGATE_ENUMS,
  makeLanguageSurrogateKey,
} from '../../middleware/set-fastly-surrogate-key.js'
import { describe, jest } from '@jest/globals'

const AZURE_STORAGE_URL = 'githubdocs.azureedge.net'

jest.useFakeTimers({ legacyFakeTimers: true })

describe('server', () => {
  jest.setTimeout(60 * 1000)

  beforeAll(async () => {
    // The first page load takes a long time so let's get it out of the way in
    // advance to call out that problem specifically rather than misleadingly
    // attributing it to the first test
    const res = await get('/en')
    expect(res.statusCode).toBe(200)
  })

  test('supports HEAD requests', async () => {
    const res = await head('/en')
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-length']).toBe('0')
    expect(res.body).toBe('')
    // Because the HEAD requests can't be different no matter what's
    // in the request headers (Accept-Language or Cookies)
    // it's safe to let it cache. The only key is the URL.
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=\d+/)
  })

  test('renders the homepage', async () => {
    const res = await get('/en')
    expect(res.statusCode).toBe(200)
  })

  test('sets Content Security Policy (CSP) headers', async () => {
    const res = await get('/en')
    expect(res.statusCode).toBe(200)
    expect('content-security-policy' in res.headers).toBe(true)

    const csp = new CspParse(res.headers['content-security-policy'])
    expect(csp.get('default-src')).toBe("'none'")

    expect(csp.get('font-src').includes("'self'")).toBe(true)
    expect(csp.get('font-src').includes(AZURE_STORAGE_URL)).toBe(true)

    expect(csp.get('connect-src').includes("'self'")).toBe(true)

    expect(csp.get('img-src').includes("'self'")).toBe(true)
    expect(csp.get('img-src').includes(AZURE_STORAGE_URL)).toBe(true)

    expect(csp.get('script-src').includes("'self'")).toBe(true)

    expect(csp.get('style-src').includes("'self'")).toBe(true)
    expect(csp.get('style-src').includes("'unsafe-inline'")).toBe(true)

    expect(csp.get('manifest-src').includes("'self'")).toBe(true)
  })

  test('sets Fastly cache control headers', async () => {
    const res = await get('/en')
    expect(res.statusCode).toBe(200)
    expect(res.headers['cache-control']).toMatch(/public, max-age=/)

    const surrogateKeySplit = res.headers['surrogate-key'].split(/\s/g)
    expect(surrogateKeySplit.includes(SURROGATE_ENUMS.DEFAULT)).toBeTruthy()
    expect(surrogateKeySplit.includes(makeLanguageSurrogateKey('en'))).toBeTruthy()
  })

  test('does not render duplicate <html> or <body> tags', async () => {
    const $ = await getDOM('/en')
    expect($('html').length).toBe(1)
    expect($('body').length).toBe(1)
  })

  test('renders a 404 page', async () => {
    // Important to use the prefix /en/ on the failing URL or else
    // it will render a very basic plain text 404 response.
    const $ = await getDOM('/en/not-a-real-page', { allow404: true })
    expect($('h1').first().text()).toBe('Ooops!')
    expect($.text().includes("It looks like this page doesn't exist.")).toBe(true)
    expect(
      $.text().includes(
        'We track these errors automatically, but if the problem persists please feel free to contact us.',
      ),
    ).toBe(true)
    expect($.res.statusCode).toBe(404)
  })

  // When using `got()` to send full end-to-end URLs, you can't use
  // URLs like in this test because got will
  // throw `RequestError: URI malformed`.
  // So for now, this test is skipped.
  test.skip('renders a 400 for invalid paths', async () => {
    const $ = await getDOM('/en/%7B%')
    expect($.res.statusCode).toBe(400)
  })

  test('renders a 500 page when errors are thrown', async () => {
    const $ = await getDOM('/_500', { allow500s: true })
    expect($('h1').first().text()).toBe('Ooops!')
    expect($.text().includes('It looks like something went wrong.')).toBe(true)
    expect(
      $.text().includes(
        'We track these errors automatically, but if the problem persists please feel free to contact us.',
      ),
    ).toBe(true)
    expect($.res.statusCode).toBe(500)
  })

  test('returns a 400 when POST-ed invalid JSON', async () => {
    const res = await post('/', {
      body: 'not real JSON',
      headers: {
        'content-type': 'application/json',
      },
    })
    expect(res.statusCode).toBe(400)
  })

  // see issue 9678
  test('does not use cached intros in map topics', async () => {
    let $ = await getDOM(
      '/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-a-git-repository-using-the-command-line',
    )
    const articleIntro = $('[data-testid="lead"]').text()
    $ = await getDOM(
      '/en/enterprise/2.16/user/importing-your-projects-to-github/importing-source-code-to-github',
    )
    const mapTopicIntro = $('.map-topic').first().next().text()
    expect(articleIntro).not.toEqual(mapTopicIntro)
  })

  test('serves /categories.json for support team usage', async () => {
    const res = await get('/categories.json')
    expect(res.statusCode).toBe(200)

    // check for CORS header
    expect(res.headers['access-control-allow-origin']).toBe('*')

    // Check that it can be cached at the CDN
    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)

    const categories = JSON.parse(res.body)
    expect(Array.isArray(categories)).toBe(true)
    expect(categories.length).toBeGreaterThan(1)
    categories.forEach((category) => {
      expect('name' in category).toBe(true)
      expect('published_articles' in category).toBe(true)
    })
  })

  describeViaActionsOnly('Early Access articles', () => {
    test('have noindex meta tags', async () => {
      const allPages = await loadPages()
      // This is what the earlyAccessContext middleware does to get a
      // list of early-access pages for that TOC it displays when
      // viewing /en/early-access in development.
      // Here we're using it to get a least 1 page we can end-to-end
      // test to look at it's meta tags.
      const hiddenPages = allPages.filter(
        (page) =>
          page.languageCode === 'en' &&
          page.hidden &&
          page.relativePath.startsWith('early-access') &&
          !page.relativePath.endsWith('index.md'),
      )
      for (const { href } of hiddenPages[0].permalinks) {
        const $ = await getDOM(href)
        expect($('meta[content="noindex"]').length).toBe(1)
      }
    })
  })

  describe('redirects', () => {
    test('redirects old articles to their English URL', async () => {
      const res = await get('/articles/deleting-a-team', { followRedirects: false })
      expect(res.statusCode).toBe(302)
      expect(res.headers['set-cookie']).toBeUndefined()
      // language specific caching
      expect(res.headers['cache-control']).toContain('public')
      expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
      expect(res.headers.vary).toContain('accept-language')
      expect(res.headers.vary).toContain('x-user-language')
    })

    test('redirects / to /en when no language preference is specified', async () => {
      const res = await get('/')
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe('/en')
      expect(res.headers['set-cookie']).toBeUndefined()
      // language specific caching
      expect(res.headers['cache-control']).toContain('public')
      expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
      expect(res.headers.vary).toContain('accept-language')
      expect(res.headers.vary).toContain('x-user-language')
    })

    // This test exists because in a previous life, our NextJS used to
    // 500 if the 'Accept-Language' header was malformed.
    // We *used* have a custom middleware to cope with this and force a
    // fallback redirect.
    // See internal issue 19909
    test('redirects /en if Accept-Language header is malformed', async () => {
      const res = await get('/', {
        headers: {
          'accept-language': 'ldfir;',
        },
        followRedirects: false,
      })

      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe('/en')
      expect(res.headers['set-cookie']).toBeUndefined()
      // language specific caching
      expect(res.headers['cache-control']).toContain('public')
      expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
      expect(res.headers.vary).toContain('accept-language')
      expect(res.headers.vary).toContain('x-user-language')
    })

    test('redirects / to /en when unsupported language preference is specified', async () => {
      const res = await get('/', {
        headers: {
          // Tagalog: https://www.loc.gov/standards/iso639-2/php/langcodes_name.php?iso_639_1=tl
          'accept-language': 'tl',
        },
        followRedirects: false,
      })
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe('/en')
      expect(res.headers['set-cookie']).toBeUndefined()
      // language specific caching
      expect(res.headers['cache-control']).toContain('public')
      expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
      expect(res.headers.vary).toContain('accept-language')
      expect(res.headers.vary).toContain('x-user-language')
    })

    test('adds English prefix to old article URLs', async () => {
      const res = await get('/articles/deleting-a-team')
      expect(res.statusCode).toBe(302)
      expect(res.headers.location.startsWith('/en/')).toBe(true)
      expect(res.headers['set-cookie']).toBeUndefined()
      // language specific caching
      expect(res.headers['cache-control']).toContain('public')
      expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
      expect(res.headers.vary).toContain('accept-language')
      expect(res.headers.vary).toContain('x-user-language')
    })

    test('redirects that not only injects /en/ should have cache-control', async () => {
      const res = await get('/en/articles/deleting-a-team')
      expect(res.statusCode).toBe(301)
      expect(res.headers['cache-control']).toContain('public')
      expect(res.headers['cache-control']).toMatch(/max-age=\d+/)
    })
  })
})

describe('static routes', () => {
  it('serves content from the /assets directory', async () => {
    const res = await get('/assets/images/site/be-social.gif')
    expect(res.statusCode).toBe(200)
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=\d+/)
    // Because static assets shouldn't be setting a cookie.
    expect(res.headers['set-cookie']).toBeUndefined()
    // The "Surrogate-Key" header is set so we can do smart invalidation
    // in the Fastly CDN. This needs to be available for static assets too.
    expect(res.headers['surrogate-key']).toBeTruthy()
    expect(res.headers.etag).toBeUndefined()
    expect(res.headers['last-modified']).toBeTruthy()
  })

  it('rewrites /assets requests from a cache-busting prefix', async () => {
    // The rewrite-asset-urls.js Markdown plugin will do this to img tags.
    const res = await get('/assets/cb-123456/images/site/be-social.gif')
    expect(res.statusCode).toBe(200)
    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=\d+/)
    expect(res.headers['surrogate-key']).toBe(SURROGATE_ENUMS.MANUAL)
  })

  it('no manual surrogate key for /assets requests without caching-busting prefix', async () => {
    const res = await get('/assets/images/site/be-social.gif')
    expect(res.statusCode).toBe(200)
    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=\d+/)

    const surrogateKeySplit = res.headers['surrogate-key'].split(/\s/g)
    expect(surrogateKeySplit.includes(SURROGATE_ENUMS.DEFAULT)).toBeTruthy()
    expect(surrogateKeySplit.includes(makeLanguageSurrogateKey())).toBeTruthy()
  })

  it('serves schema files from the /data/graphql directory at /public', async () => {
    const res = await get('/public/schema.docs.graphql')
    expect(res.statusCode).toBe(200)
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=\d+/)
    // Because static assets shouldn't be setting a cookie.
    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers.etag).toBeUndefined()
    expect(res.headers['last-modified']).toBeTruthy()

    expect(
      (await get(`/public/ghes-${enterpriseServerReleases.latest}/schema.docs-enterprise.graphql`))
        .statusCode,
    ).toBe(200)
    expect(
      (
        await get(
          `/public/ghes-${enterpriseServerReleases.oldestSupported}/schema.docs-enterprise.graphql`,
        )
      ).statusCode,
    ).toBe(200)
    expect((await get('/public/ghae/schema.docs-ghae.graphql')).statusCode).toBe(200)
  })

  test('does not serve repo contents that live outside the /assets directory', async () => {
    const paths = [
      '/package.json',
      '/README.md',
      '/server.js',
      '/.git',
      '/.env',
      // Also add paths that aren't at the root. But it doesn't matter
      // which page this is done for so much.
      '/en/billing/.env',
      '/en/billing/.env.local',
      '/en/pages/.env_sample',
      '/en/pages/.env.development.local',
    ]
    for (const path of paths) {
      const res = await get(path)
      expect(res.statusCode).toBe(404)
      expect(res.headers['content-type']).toMatch('text/plain')
      expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
      expect(res.headers['cache-control']).toMatch('public')
    }
    expect.assertions(4 * paths.length)
  })

  test('junk requests with or without query strings is 404', async () => {
    const paths = ['/env', '/xmlrpc.php', '/wp-login.php']
    for (const path of paths) {
      const res = await get(`${path}?r=${Math.random()}`)
      expect(res.statusCode).toBe(404)
      expect(res.headers['content-type']).toMatch('text/plain')
      expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
      expect(res.headers['cache-control']).toMatch('public')
    }
    expect.assertions(4 * paths.length)
  })
})
