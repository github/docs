import { beforeAll, describe, expect, test } from 'vitest'

import { get } from '@/tests/helpers/e2etest'
import { makeLanguageSurrogateKey } from '@/frame/middleware/set-fastly-surrogate-key'
import { latest } from '@/versions/lib/enterprise-server-releases'

const makeURL = (pathname: string): string =>
  `/api/article/meta?${new URLSearchParams({ pathname })}`

interface PageMetadata {
  product: string
  title: string
  intro: string
  documentType: string | null
  redirectedFrom?: string
}

interface ErrorResponse {
  error: string
}

describe('pageinfo api', () => {
  beforeAll(() => {
    // Warn early because missing fixture roots otherwise fail with unclear errors.
    if (!process.env.ROOT) {
      console.warn(
        'WARNING: The pageinfo tests require the ROOT environment variable to be set to the fixture root',
      )
    }
    // Fixture translations need their own root.
    if (!process.env.TRANSLATIONS_FIXTURE_ROOT) {
      console.warn(
        'WARNING: The pageinfo tests require the TRANSLATIONS_FIXTURE_ROOT environment variable to be set',
      )
    }
  })

  test('happy path', async () => {
    const res = await get(makeURL('/en/get-started/start-your-journey'))
    expect(res.statusCode).toBe(200)
    const meta = JSON.parse(res.body) as PageMetadata
    expect(meta.product).toBe('Get started')
    expect(meta.title).toBe('Start your journey')
    expect(meta.intro).toBe(
      'Get started using HubGit to manage Git repositories and collaborate with others.',
    )
    expect(meta.documentType).toBe('category')
    expect(meta.redirectedFrom).toBeUndefined()
    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers['surrogate-control']).toContain('public')
    expect(res.headers['surrogate-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers['surrogate-key']).toBe(makeLanguageSurrogateKey('en'))
  })

  // Fullwidth colons make Japanese frontmatter scalar; English fallback prevents empty titles.
  test('corrupted translation frontmatter falls back to English title', async () => {
    const res = await get(makeURL('/ja/get-started/foo/broken-frontmatter-translation'))
    expect(res.statusCode).toBe(200)
    const meta = JSON.parse(res.body) as PageMetadata
    expect(meta.title).toBe('Broken frontmatter translation fallback')
  })

  test('a pathname that does not exist', async () => {
    const res = await get(makeURL('/en/never/heard/of'))
    expect(res.statusCode).toBe(404)
    const { error } = JSON.parse(res.body) as ErrorResponse
    expect(error).toBe("No page found for '/en/never/heard/of'")
  })

  test("no 'pathname' query string at all", async () => {
    const res = await get('/api/article/meta')
    expect(res.statusCode).toBe(400)
    const { error } = JSON.parse(res.body) as ErrorResponse
    expect(error).toBe("No 'pathname' query")
  })

  test("empty 'pathname' query string", async () => {
    const res = await get('/api/article/meta?pathname=%20')
    expect(res.statusCode).toBe(400)
    const { error } = JSON.parse(res.body) as ErrorResponse
    expect(error).toBe("'pathname' query empty")
  })

  test('repeated pathname query string key', async () => {
    const res = await get('/api/article/meta?pathname=a&pathname=b')
    expect(res.statusCode).toBe(400)
    const { error } = JSON.parse(res.body) as ErrorResponse
    expect(error).toBe("Multiple 'pathname' keys")
  })

  test('redirects correct the URL', async () => {
    // redirect_from entries set redirectedFrom to the normalized lookup path.
    {
      const res = await get(makeURL('/en/olden-days'))
      expect(res.statusCode).toBe(200)
      const meta = JSON.parse(res.body) as PageMetadata
      expect(meta.title).toBe('HubGit.com Fixture Documentation')
      expect(meta.redirectedFrom).toBe('/en/olden-days')
    }
    // Redirect lookups normalize trailing slashes.
    {
      const res = await get(makeURL('/en/olden-days/'))
      expect(res.statusCode).toBe(200)
      const meta = JSON.parse(res.body) as PageMetadata
      expect(meta.title).toBe('HubGit.com Fixture Documentation')
      expect(meta.redirectedFrom).toBe('/en/olden-days')
    }
    // Short code for the latest version.
    {
      const res = await get(makeURL('/en/enterprise-server@latest/get-started/liquid/ifversion'))
      expect(res.statusCode).toBe(200)
      const meta = JSON.parse(res.body) as PageMetadata
      expect(meta.intro).toMatch(/\(not on fpt\)/)
    }
    // Pages unavailable on FPT redirect to an available product version.
    {
      const res = await get(makeURL('/en/get-started/versioning/only-ghec-and-ghes'))
      expect(res.statusCode).toBe(200)
      const meta = JSON.parse(res.body) as PageMetadata
      expect(meta.title).toBe('Only in Enterprise Cloud and Enterprise Server')
    }
  })

  test('a page that uses non-trivial Liquid to render', async () => {
    // The intro uses ifversion logic that changes between FPT and GHES.

    {
      const res = await get(makeURL('/en/get-started/liquid/ifversion'))
      expect(res.statusCode).toBe(200)
      const meta = JSON.parse(res.body) as PageMetadata
      expect(meta.intro).toMatch(/\(on fpt\)/)
    }
    {
      const res = await get(makeURL('/en/enterprise-server@latest/get-started/liquid/ifversion'))
      expect(res.statusCode).toBe(200)
      const meta = JSON.parse(res.body) as PageMetadata
      expect(meta.intro).toMatch(/\(not on fpt\)/)
    }
  })

  test('home pages', async () => {
    {
      const res = await get(makeURL('/en'))
      expect(res.statusCode).toBe(200)
      const meta = JSON.parse(res.body) as PageMetadata
      expect(meta.title).toMatch('HubGit.com Fixture Documentation')
    }
    // Page lookup must happen before redirect lookup for localized enterprise home pages.
    {
      const res = await get(makeURL(`/en/enterprise-server@${latest}`))
      expect(res.statusCode).toBe(200)
      const meta = JSON.parse(res.body) as PageMetadata
      expect(meta.title).toMatch('HubGit Enterprise Server Fixture Documentation')
    }
  })

  test('home pages (with redirects)', async () => {
    {
      const res = await get(makeURL('/'))
      expect(res.statusCode).toBe(200)
      const meta = JSON.parse(res.body) as PageMetadata
      expect(meta.title).toMatch('HubGit.com Fixture Documentation')
    }
    {
      const res = await get(makeURL('/enterprise-server@latest'))
      expect(res.statusCode).toBe(200)
      const meta = JSON.parse(res.body) as PageMetadata
      expect(meta.title).toMatch('HubGit Enterprise Server Fixture Documentation')
    }
  })

  test('documentType for different page types', async () => {
    {
      const res = await get(makeURL('/en'))
      expect(res.statusCode).toBe(200)
      const meta = JSON.parse(res.body) as PageMetadata
      expect(meta.documentType).toBe('homepage')
    }
    {
      const res = await get(makeURL('/en/get-started'))
      expect(res.statusCode).toBe(200)
      const meta = JSON.parse(res.body) as PageMetadata
      expect(meta.documentType).toBe('product')
    }
    {
      const res = await get(makeURL('/en/get-started/start-your-journey'))
      expect(res.statusCode).toBe(200)
      const meta = JSON.parse(res.body) as PageMetadata
      expect(meta.documentType).toBe('category')
    }
    {
      const res = await get(makeURL('/en/actions/category/subcategory'))
      expect(res.statusCode).toBe(200)
      const meta = JSON.parse(res.body) as PageMetadata
      expect(meta.documentType).toBe('subcategory')
    }
    {
      const res = await get(makeURL('/en/get-started/start-your-journey/hello-world'))
      expect(res.statusCode).toBe(200)
      const meta = JSON.parse(res.body) as PageMetadata
      expect(meta.documentType).toBe('article')
    }
  })

  test('archived enterprise versions', async () => {
    // Archived versions outside the page tree still get fabricated pageinfo titles.

    {
      const res = await get(makeURL('/en/enterprise-server@3.2'))
      expect(res.statusCode).toBe(200)
      const meta = JSON.parse(res.body) as PageMetadata
      expect(meta.title).toMatch('GitHub Enterprise Server 3.2 Help Documentation')
      expect(meta.documentType).toBeNull()
    }

    // Very old enterprise URLs use the legacy /enterprise version path.
    {
      const res = await get(makeURL('/en/enterprise/11.10.340'))
      expect(res.statusCode).toBe(200)
      const meta = JSON.parse(res.body) as PageMetadata
      expect(meta.title).toMatch('GitHub Enterprise Server 11.10.340 Help Documentation')
    }
  })

  test('pathname has to start with /', async () => {
    const res = await get(makeURL('ip'))
    expect(res.statusCode).toBe(400)
    const { error } = JSON.parse(res.body) as ErrorResponse
    expect(error).toBe("'pathname' has to start with /")
  })

  test("pathname can't contain spaces /", async () => {
    const res = await get(makeURL('/en foo bar'))
    expect(res.statusCode).toBe(400)
    const { error } = JSON.parse(res.body) as ErrorResponse
    expect(error).toBe("'pathname' cannot contain whitespace")
  })

  describe('translations', () => {
    test('Japanese page', async () => {
      const res = await get(makeURL('/ja/get-started/start-your-journey/hello-world'))
      expect(res.statusCode).toBe(200)
      const meta = JSON.parse(res.body) as PageMetadata
      expect(meta.product).toBe('はじめに')
      expect(meta.title).toBe('こんにちは World')
      expect(meta.intro).toBe('この Hello World 演習に従って、HubGit の使用を開始します。')
    })

    test('falls back to English if translation is not present', async () => {
      const enRes = await get(makeURL('/en/get-started/start-your-journey'))
      expect(enRes.statusCode).toBe(200)
      // Missing translation files fall back to English.
      const translationRes = await get(makeURL('/ja/get-started/start-your-journey'))
      expect(translationRes.statusCode).toBe(200)
      const en = JSON.parse(enRes.body) as PageMetadata
      const translation = JSON.parse(translationRes.body) as PageMetadata
      expect(en.title).toBe(translation.title)
      expect(en.intro).toBe(translation.intro)
    })
  })
})
