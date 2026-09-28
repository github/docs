import { beforeAll, describe, expect, test, vi } from 'vitest'

import enterpriseServerReleases from '@/versions/lib/enterprise-server-releases'
import { get, getDOM, head, post } from '@/tests/helpers/e2etest'
import { describeViaActionsOnly } from '@/tests/helpers/conditional-runs'
import { loadPages } from '@/frame/lib/page-data'
import {
  SURROGATE_ENUMS,
  makeLanguageSurrogateKey,
  makePageSurrogateKey,
} from '@/frame/middleware/set-fastly-surrogate-key'

interface Category {
  name: string
  published_articles: string[]
}

// Match unmaintained csp-parse: lowercase the policy, split directives on semicolons, and join
// each directive's values with spaces. get() returns '' when a directive is absent.
function parseCsp(policy: string) {
  const directives = new Map<string, string>()
  for (const part of (policy || '').toLowerCase().split(';')) {
    const [name, ...values] = part.trim().split(/\s+/)
    if (name) directives.set(name, values.join(' '))
  }
  return {
    get: (directive: string) => directives.get(directive) || '',
  }
}

describe('server', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  // Warm /en first so a slow first page load fails here instead of in the first test.
  beforeAll(async () => {
    const res = await get('/en')
    expect(res.statusCode).toBe(200)
  })

  test('supports HEAD requests', async () => {
    const res = await head('/en')
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-length']).toBe('0')
    expect(res.body).toBe('')
    // HEAD responses ignore Accept-Language and Cookies, so URL alone can key the public cache.
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

    const csp = parseCsp(res.headers['content-security-policy'])
    expect(csp.get('default-src')).toBe("'none'")

    expect(csp.get('font-src').includes("'self'")).toBe(true)

    expect(csp.get('connect-src').includes("'self'")).toBe(true)

    expect(csp.get('img-src').includes("'self'")).toBe(true)

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
    expect(surrogateKeySplit.includes(makeLanguageSurrogateKey('en'))).toBeTruthy()
  })

  test('caches responses with short edge freshness and a week-long stale window', async () => {
    const week = 60 * 60 * 24 * 7
    for (const path of ['/en/get-started', '/robots.txt']) {
      const res = await get(path)
      expect(res.statusCode).toBe(200)
      const surrogate = res.headers['surrogate-control']
      expect(surrogate).toContain(`stale-while-revalidate=${week}`)
      expect(surrogate).toContain(`stale-if-error=${week}`)
      // Edge freshness is short (well under the week-long stale window).
      const maxAge = Number(surrogate.match(/(?:^|[ ,])max-age=(\d+)/)?.[1])
      expect(maxAge).toBeGreaterThan(0)
      expect(maxAge).toBeLessThan(week)
    }
    // Browser cache stays short: 60s, unpurgeable.
    const res = await get('/en/get-started')
    expect(res.headers['cache-control']).toMatch(/(^|[ ,])max-age=60([ ,]|$)/)
  })

  test('sets fine-grained product and version surrogate keys on content pages', async () => {
    const res = await get('/en/get-started')
    expect(res.statusCode).toBe(200)
    const keys = res.headers['surrogate-key'].split(/\s/g)
    expect(keys[0]).toBe(makeLanguageSurrogateKey('en'))
    expect(keys).toContain('product:get-started')
    expect(keys).toContain('product:get-started,language:en')
    expect(keys.some((key: string) => /^version:.+/.test(key))).toBe(true)
    // The render key must match the purge key derived from content/get-started/index.md.
    expect(keys).toContain('language:en,path:get-started/index.md')
    expect(keys).toContain(makePageSurrogateKey('en', 'get-started/index.md'))
    expect(keys.length).toBeLessThanOrEqual(6)
  })

  test('does not render duplicate <html> or <body> tags', async () => {
    const $ = await getDOM('/en')
    expect($('html').length).toBe(1)
    expect($('body').length).toBe(1)
  })

  test('renders a 404 page', async () => {
    // The /en/ prefix reaches the full 404 page instead of the plain text fallback.
    const $ = await getDOM('/en/not-a-real-page', { allow404: true })
    expect(($ as unknown as { text(): string }).text()).toContain('Page not found.')
    expect($.res.statusCode).toBe(404)
  })

  test('renders a 404 for language prefixed versioned non-existent pages', async () => {
    const res = await get('/en/enterprise-cloud@latest/nonexistent-page')
    expect(res.statusCode).toBe(404)
  })

  // The skip predates the native-fetch helper, which sends this malformed path unchanged.
  test.skip('renders a 400 for invalid paths', async () => {
    const $ = await getDOM('/en/%7B%')
    expect($.res.statusCode).toBe(400)
  })

  test('renders a 500 page when errors are thrown', async () => {
    const $ = await getDOM('/_500', { allow500s: true })
    expect($('h1').first().text()).toBe('Ooops!')
    // Cheerio v1 root types omit text().
    expect(
      ($ as unknown as { text(): string }).text().includes('It looks like something went wrong.'),
    ).toBe(true)
    expect(
      ($ as unknown as { text(): string })
        .text()
        .includes(
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

  test('does not use cached intros in subcategories', async () => {
    let $ = await getDOM(
      '/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-a-git-repository-using-the-command-line',
    )
    const articleIntro = $('[data-testid="lead"]').text()
    $ = await getDOM(
      '/en/enterprise/2.16/user/importing-your-projects-to-github/importing-source-code-to-github',
    )
    const subcategoryIntro = $('.subcategory').first().next().text()
    expect(articleIntro).not.toEqual(subcategoryIntro)
  })

  test('serves /categories.json for support team usage', async () => {
    const res = await get('/categories.json')
    expect(res.statusCode).toBe(200)

    expect(res.headers['access-control-allow-origin']).toBe('*')

    // CDN caching must not set cookies.
    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)

    const categories = JSON.parse(res.body)
    expect(Array.isArray(categories)).toBe(true)
    expect(categories.length).toBeGreaterThan(1)
    for (const category of categories as Category[]) {
      expect('name' in category).toBe(true)
      expect('published_articles' in category).toBe(true)
    }
  })

  describeViaActionsOnly('Early Access articles', () => {
    test('have noindex meta tags', async () => {
      const allPages = await loadPages()
      // Match earlyAccessContext's development TOC input: English hidden early-access articles.
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
      // Language-specific redirects must vary by language headers.
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
      // Language-specific redirects must vary by language headers.
      expect(res.headers['cache-control']).toContain('public')
      expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
      expect(res.headers.vary).toContain('accept-language')
      expect(res.headers.vary).toContain('x-user-language')
    })

    // Invalid Accept-Language once triggered a downstream Next.js 500; this route must redirect.
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
      // Language-specific redirects must vary by language headers.
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
      // Language-specific redirects must vary by language headers.
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
      // Language-specific redirects must vary by language headers.
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

  describe('Accept: text/markdown content negotiation', () => {
    test('returns markdown when Accept header prefers text/markdown', async () => {
      const res = await get('/en', {
        headers: {
          accept: 'text/markdown',
        },
      })
      expect(res.statusCode).toBe(200)
      expect(res.headers['content-type']).toContain('text/markdown')
      expect(res.headers.vary).toContain('accept')
    })

    test('returns HTML when Accept header prefers text/html', async () => {
      const res = await get('/en', {
        headers: {
          accept: 'text/html,application/xhtml+xml',
        },
      })
      expect(res.statusCode).toBe(200)
      expect(res.headers['content-type']).toContain('text/html')
      expect(res.headers.vary).toContain('accept')
    })

    test('returns HTML when Accept header is */*', async () => {
      const res = await get('/en', {
        headers: {
          accept: '*/*',
        },
      })
      expect(res.statusCode).toBe(200)
      expect(res.headers['content-type']).toContain('text/html')
    })

    test('landing page returns non-empty markdown with title via Accept header', async () => {
      const res = await get('/en/get-started', {
        headers: {
          accept: 'text/markdown',
        },
      })
      expect(res.statusCode).toBe(200)
      expect(res.headers['content-type']).toContain('text/markdown')
      expect(res.body).toMatch(/^# .+/)
      expect(res.body).toMatch(/\n\n/)
      expect(res.body.split('\n').length).toBeGreaterThan(3)
    })

    test('.md URL extension returns markdown with correct content type', async () => {
      const res = await get('/en/get-started.md')
      expect(res.statusCode).toBe(200)
      expect(res.headers['content-type']).toContain('text/markdown')
      expect(res.body).toMatch(/^# .+/)
    })

    test('.md URL without language prefix redirects to /en/ equivalent', async () => {
      const res = await get('/get-started.md')
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe('/en/get-started.md')
    })

    test('/index.md redirects to the page without /index.md', async () => {
      const res = await get('/en/get-started/index.md')
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe('/en/get-started')
    })

    test('regular article .md URL includes title and intro', async () => {
      const res = await get('/en/get-started/using-github/hello-world.md')
      expect(res.statusCode).toBe(200)
      expect(res.headers['content-type']).toContain('text/markdown')
      expect(res.body).toMatch(/^# Hello World/)
    })
  })
})

describe('static routes', () => {
  test('serves content from the /assets directory', async () => {
    const res = await get('/assets/images/site/be-social.gif')
    expect(res.statusCode).toBe(200)
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=\d+/)
    // Static assets must not set cookies.
    expect(res.headers['set-cookie']).toBeUndefined()
    // Unhashed asset URLs use the generic language surrogate key, not the manual key.
    expect(res.headers['surrogate-key']).toBeTruthy()
    expect(res.headers.etag).toBeUndefined()
    expect(res.headers['last-modified']).toBeTruthy()
  })

  test('rewrites /assets requests from a cache-busting prefix', async () => {
    // The rewrite-asset-urls.ts Markdown plugin will do this to img tags.
    const res = await get('/assets/cb-123456/images/site/be-social.gif')
    expect(res.statusCode).toBe(200)
    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=\d+/)
    expect(res.headers['surrogate-key']).toBe(SURROGATE_ENUMS.MANUAL)
  })

  test('no manual surrogate key for /assets requests without caching-busting prefix', async () => {
    const res = await get('/assets/images/site/be-social.gif')
    expect(res.statusCode).toBe(200)
    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=\d+/)

    const surrogateKeySplit = res.headers['surrogate-key'].split(/\s/g)
    expect(surrogateKeySplit.includes(makeLanguageSurrogateKey())).toBeTruthy()
  })

  test('serves schema files from the /src/graphql/data directory at /public', async () => {
    const res = await get('/public/fpt/schema.docs.graphql')
    expect(res.statusCode).toBe(200)
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=\d+/)
    // Static assets must not set cookies.
    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers.etag).toBeUndefined()
    expect(res.headers['last-modified']).toBeTruthy()

    expect((await get(`/public/ghec/schema.docs.graphql`)).statusCode).toBe(200)
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
  })

  test('does not serve repo contents that live outside the /assets directory', async () => {
    const paths = [
      '/package.json',
      '/README.md',
      '/server.js',
      '/.git',
      '/.env',
      // Nested dotfile paths prove product routing cannot expose repo contents.
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
