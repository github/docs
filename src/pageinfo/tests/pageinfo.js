import { beforeAll, describe, expect, test } from 'vitest'

import { get } from '#src/tests/helpers/e2etest.js'
import { SURROGATE_ENUMS } from '#src/frame/middleware/set-fastly-surrogate-key.js'
import { latest } from '#src/versions/lib/enterprise-server-releases.js'

const makeURL = (pathname) => `/api/pageinfo/v1?${new URLSearchParams({ pathname })}`

describe('pageinfo api', () => {
  beforeAll(() => {
    // If you didn't set the `ROOT` variable, the tests will fail rather
    // cryptically. So as a warning for engineers running these tests,
    // alert in case it was accidentally forgotten.
    if (!process.env.ROOT) {
      console.warn(
        'WARNING: The pageinfo tests require the ROOT environment variable to be set to the fixture root',
      )
    }
    // Ditto for fixture-based translations to work
    if (!process.env.TRANSLATIONS_FIXTURE_ROOT) {
      console.warn(
        'WARNING: The pageinfo tests require the TRANSLATIONS_FIXTURE_ROOT environment variable to be set',
      )
    }
  })

  test('redirects without version suffix', async () => {
    const res = await get('/api/pageinfo')
    expect(res.statusCode).toBe(307)
    expect(res.headers.location).toBe('/api/pageinfo/v1')
  })

  test('happy path', async () => {
    const res = await get(makeURL('/en/get-started/start-your-journey'))
    expect(res.statusCode).toBe(200)
    const { info } = JSON.parse(res.body)
    expect(info.product).toBe('Get started')
    expect(info.title).toBe('Start your journey')
    expect(info.intro).toBe(
      'Get started using HubGit to manage Git repositories and collaborate with others.',
    )
    // Check that it can be cached at the CDN
    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers['surrogate-control']).toContain('public')
    expect(res.headers['surrogate-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers['surrogate-key']).toBe(`${SURROGATE_ENUMS.DEFAULT} language:en`)
  })

  test('a pathname that does not exist', async () => {
    const res = await get(makeURL('/en/never/heard/of'))
    expect(res.statusCode).toBe(400)
    const { error } = JSON.parse(res.body)
    expect(error).toBe("No page found for '/en/never/heard/of'")
  })

  test("no 'pathname' query string at all", async () => {
    const res = await get('/api/pageinfo/v1')
    expect(res.statusCode).toBe(400)
    const { error } = JSON.parse(res.body)
    expect(error).toBe("No 'pathname' query")
  })

  test("empty 'pathname' query string", async () => {
    const res = await get('/api/pageinfo/v1?pathname=%20')
    expect(res.statusCode).toBe(400)
    const { error } = JSON.parse(res.body)
    expect(error).toBe("'pathname' query empty")
  })

  test('repeated pathname query string key', async () => {
    const res = await get('/api/pageinfo/v1?pathname=a&pathname=b')
    expect(res.statusCode).toBe(400)
    const { error } = JSON.parse(res.body)
    expect(error).toBe("Multiple 'pathname' keys")
  })

  test('redirects correct the URL', async () => {
    // Regular redirect from `redirect_from`
    {
      const res = await get(makeURL('/en/olden-days'))
      expect(res.statusCode).toBe(200)
      const { info } = JSON.parse(res.body)
      expect(info.title).toBe('HubGit.com Fixture Documentation')
    }
    // Trailing slashes are always removed
    {
      const res = await get(makeURL('/en/olden-days/'))
      expect(res.statusCode).toBe(200)
      const { info } = JSON.parse(res.body)
      expect(info.title).toBe('HubGit.com Fixture Documentation')
    }
    // Short code for latest version
    {
      const res = await get(makeURL('/en/enterprise-server@latest/get-started/liquid/ifversion'))
      expect(res.statusCode).toBe(200)
      const { info } = JSON.parse(res.body)
      expect(info.intro).toMatch(/\(not on fpt\)/)
    }
    // A URL that doesn't have fpt as an available version
    {
      const res = await get(makeURL('/en/get-started/versioning/only-ghec-and-ghes'))
      expect(res.statusCode).toBe(200)
      const { info } = JSON.parse(res.body)
      expect(info.title).toBe('Only in Enterprise Cloud and Enterprise Server')
    }
  })

  test('a page that uses non-trivial Liquid to render', async () => {
    // This page uses `{% ifversion not fpt %}` in the intro.

    // First on the fpt version
    {
      const res = await get(makeURL('/en/get-started/liquid/ifversion'))
      expect(res.statusCode).toBe(200)
      const { info } = JSON.parse(res.body)
      expect(info.intro).toMatch(/\(on fpt\)/)
    }
    // Second on any other version
    {
      const res = await get(makeURL('/en/enterprise-server@latest/get-started/liquid/ifversion'))
      expect(res.statusCode).toBe(200)
      const { info } = JSON.parse(res.body)
      expect(info.intro).toMatch(/\(not on fpt\)/)
    }
  })

  test('home pages', async () => {
    // The home page with language specified
    {
      const res = await get(makeURL('/en'))
      expect(res.statusCode).toBe(200)
      const { info } = JSON.parse(res.body)
      expect(info.title).toMatch('HubGit.com Fixture Documentation')
    }
    // enterprise-server with language specified
    // This is important because it tests that we check for a page
    // before we bothering to see if it can be a redirect.
    // That's how our middleware and Next router works. First we look
    // for a page, if it can't be found, then we check if it's a redirect.
    // This test proves something that caused a bug in production.
    {
      const res = await get(makeURL(`/en/enterprise-server@${latest}`))
      expect(res.statusCode).toBe(200)
      const { info } = JSON.parse(res.body)
      expect(info.title).toMatch('HubGit Enterprise Server Fixture Documentation')
    }
  })

  test('home pages (with redirects)', async () => {
    // The home page for the default language *not* specified
    {
      const res = await get(makeURL('/'))
      expect(res.statusCode).toBe(200)
      const { info } = JSON.parse(res.body)
      expect(info.title).toMatch('HubGit.com Fixture Documentation')
    }
    // enterprise-server without language specified
    {
      const res = await get(makeURL('/enterprise-server@latest'))
      expect(res.statusCode).toBe(200)
      const { info } = JSON.parse(res.body)
      expect(info.title).toMatch('HubGit Enterprise Server Fixture Documentation')
    }
  })

  test('archived enterprise versions', async () => {
    // For example /en/enterprise-server@3.8 is a valid Page in the
    // site tree, but /en/enterprise-server@2.6 is not. Yet we can
    // 200 OK and serve content for that. This needs to be reflected in
    // page info too. Even if we have to "fabricate" the title a bit.

    // At the time of writing, the latest archived version
    {
      const res = await get(makeURL('/en/enterprise-server@3.2'))
      expect(res.statusCode).toBe(200)
      const { info } = JSON.parse(res.body)
      expect(info.title).toMatch('GitHub Enterprise Server 3.2 Help Documentation')
    }

    // The oldest known archived version that we proxy
    {
      const res = await get(makeURL('/en/enterprise/11.10.340'))
      expect(res.statusCode).toBe(200)
      const { info } = JSON.parse(res.body)
      expect(info.title).toMatch('GitHub Enterprise Server 11.10.340 Help Documentation')
    }
  })

  test('pathname has to start with /', async () => {
    const res = await get(makeURL('ip'))
    expect(res.statusCode).toBe(400)
    const { error } = JSON.parse(res.body)
    expect(error).toBe("'pathname' has to start with /")
  })

  test("pathname can't contain spaces /", async () => {
    const res = await get(makeURL('/en foo bar'))
    expect(res.statusCode).toBe(400)
    const { error } = JSON.parse(res.body)
    expect(error).toBe("'pathname' cannot contain whitespace")
  })

  describe('translations', () => {
    test('Japanese page', async () => {
      const res = await get(makeURL('/ja/get-started/start-your-journey/hello-world'))
      expect(res.statusCode).toBe(200)
      const { info } = JSON.parse(res.body)
      expect(info.product).toBe('はじめに')
      expect(info.title).toBe('こんにちは World')
      expect(info.intro).toBe('この Hello World 演習に従って、HubGit の使用を開始します。')
    })

    test('falls back to English if translation is not present', async () => {
      const enRes = await get(makeURL('/en/get-started/start-your-journey'))
      expect(enRes.statusCode).toBe(200)
      // This page doesn't have a Japanese translation. I.e. it doesn't
      // even exist on disk. So it'll fall back to English.
      const translationRes = await get(makeURL('/ja/get-started/start-your-journey'))
      expect(translationRes.statusCode).toBe(200)
      const en = JSON.parse(enRes.body)
      const translation = JSON.parse(translationRes.body)
      expect(en.title).toBe(translation.title)
      expect(en.intro).toBe(translation.intro)
      expect(en.product).toBe(translation.product)
    })
  })
})
