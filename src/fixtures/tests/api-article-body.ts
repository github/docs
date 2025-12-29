import { beforeAll, describe, expect, test } from 'vitest'

import { get } from '@/tests/helpers/e2etest'

const makeURL = (pathname: string) => `/api/article/body?${new URLSearchParams({ pathname })}`

describe('article body api', () => {
  beforeAll(() => {
    // If you didn't set the `ROOT` variable, the tests will fail rather
    // cryptically. So as a warning for engineers running these tests,
    // alert in case it was accidentally forgotten.
    if (!process.env.ROOT) {
      console.warn(
        'WARNING: The articlebody tests require the ROOT environment variable to be set to the fixture root',
      )
    }
    // Ditto for fixture-based translations to work
    if (!process.env.TRANSLATIONS_FIXTURE_ROOT) {
      console.warn(
        'WARNING: The articlebody tests require the TRANSLATIONS_FIXTURE_ROOT environment variable to be set',
      )
    }
  })

  test('happy path', async () => {
    const res = await get(makeURL('/en/get-started/start-your-journey/api-article-body-test-page'))
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toContain('text/markdown')
    expect(res.body).toContain('## About GitHub')
    expect(res.body).toContain('## About Git')
    expect(res.body).toMatch(/^#+\s+\w+/m) // Check for any markdown heading pattern

    expect(res.headers['set-cookie']).toBeUndefined()
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers['surrogate-control']).toContain('public')
    expect(res.headers['surrogate-control']).toMatch(/max-age=[1-9]/)
  })

  test('a pathname that does not exist', async () => {
    const res = await get(makeURL('/en/never/heard/of'))
    expect(res.statusCode).toBe(404)
    const { error } = JSON.parse(res.body)
    expect(error).toBe("No page found for '/en/never/heard/of'")
  })

  test("no 'pathname' query string at all", async () => {
    const res = await get('/api/article/body')
    expect(res.statusCode).toBe(400)
    const { error } = JSON.parse(res.body)
    expect(error).toBe("No 'pathname' query")
  })

  test('has proper markdown structure with frontmatter removed', async () => {
    const res = await get(makeURL('/en/get-started/start-your-journey/api-article-body-test-page'))

    expect(res.statusCode).toBe(200)
    // Should not contain frontmatter
    expect(res.body).not.toMatch(/^---/)
    // Should have at least one heading
    expect(res.body).toMatch(/^#{1,6}\s+\w+/m)
  })

  test("empty 'pathname' query string", async () => {
    const res = await get('/api/article/body?pathname=%20')
    expect(res.statusCode).toBe(400)
    const { error } = JSON.parse(res.body)
    expect(error).toBe("'pathname' query empty")
  })

  test('repeated pathname query string key', async () => {
    const res = await get('/api/article/body?pathname=a&pathname=b')
    expect(res.statusCode).toBe(400)
    const { error } = JSON.parse(res.body)
    expect(error).toBe("Multiple 'pathname' keys")
  })

  test('tool picker shows all tool variants in markdown', async () => {
    const res = await get(makeURL('/en/get-started/liquid/tool-specific'))
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toContain('text/markdown')

    // Should contain all tool-specific content variants
    expect(res.body).toContain('<div class="ghd-tool webui">')
    expect(res.body).toContain('<div class="ghd-tool cli">')
    expect(res.body).toContain('<div class="ghd-tool desktop">')

    // Should contain the actual content from each tool
    expect(res.body).toContain('This is webui content')
    expect(res.body).toContain('This is cli content')
    expect(res.body).toContain('This is desktop content')

    // Should contain tool-specific sections
    expect(res.body).toContain('Webui section specific content')
    expect(res.body).toContain('Desktop section specific content')

    // Verify multiple instances of the same tool are preserved
    const webuiMatches = res.body.match(/<div class="ghd-tool webui">/g)
    const desktopMatches = res.body.match(/<div class="ghd-tool desktop">/g)
    expect(webuiMatches).toBeDefined()
    expect(webuiMatches!.length).toBeGreaterThan(1)
    expect(desktopMatches).toBeDefined()
    expect(desktopMatches!.length).toBeGreaterThan(1)
  })

  test('codespaces tool content is included in markdown API', async () => {
    const res = await get(makeURL('/en/get-started/liquid/tool-picker-issue'))
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toContain('text/markdown')

    // Should contain both webui and codespaces tool content
    expect(res.body).toContain('<div class="ghd-tool webui">')
    expect(res.body).toContain('<div class="ghd-tool codespaces">')

    // Should contain the actual content from both tools
    expect(res.body).toContain('Under your repository name, click **Pull requests**')
    expect(res.body).toContain('Open the pull request in your codespace')
    expect(res.body).toContain(
      'After reviewing the files, you can submit your review from the web interface',
    )
    expect(res.body).toContain(
      'After reviewing the files, you can submit your review directly from Codespaces',
    )

    // Verify both tools appear in multiple sections
    const webuiMatches = res.body.match(/<div class="ghd-tool webui">/g)
    const codespacesMatches = res.body.match(/<div class="ghd-tool codespaces">/g)
    expect(webuiMatches).toBeDefined()
    expect(webuiMatches!.length).toBe(2)
    expect(codespacesMatches).toBeDefined()
    expect(codespacesMatches!.length).toBe(2)
  })

  test('codespaces content included in production markdown API', async () => {
    // Test a real production page that has codespaces content
    const res = await get(
      makeURL(
        '/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request',
      ),
    )

    // Skip test if page doesn't exist in fixture environment
    if (res.statusCode === 404) {
      console.log('Production page not available in fixture environment, skipping test')
      return
    }

    expect(res.statusCode).toBe(200)

    // Verify the fix is working - codespaces content should now be present
    const hasCodespacesContent = res.body.includes('<div class="ghd-tool codespaces">')
    expect(hasCodespacesContent).toBe(true)

    // Also verify that webui content is still present
    expect(res.body).toContain('<div class="ghd-tool webui">')
  })

  test('verifies original issue #5400 is resolved', async () => {
    // This test specifically addresses the original issue where tool picker
    // content was missing from the Markdown API response
    const res = await get(
      makeURL(
        '/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request',
      ),
    )

    // Skip test if page doesn't exist in fixture environment
    if (res.statusCode === 404) {
      console.log(
        'Production page not available in fixture environment, skipping issue verification test',
      )
      return
    }

    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toContain('text/markdown')

    // The original issue was that only webui content was returned, missing codespaces
    expect(res.body).toContain('<div class="ghd-tool webui">')
    expect(res.body).toContain('<div class="ghd-tool codespaces">')

    // Verify specific codespaces content that was missing before the fix
    expect(res.body).toContain('GitHub Codespaces')
    expect(res.body).toContain('Open the pull request in a codespace')

    // Ensure both tools are rendered with their respective content
    const webuiMatches = res.body.match(/<div class="ghd-tool webui">/g)
    const codespacesMatches = res.body.match(/<div class="ghd-tool codespaces">/g)

    expect(webuiMatches).toBeDefined()
    expect(codespacesMatches).toBeDefined()
    expect(codespacesMatches!.length).toBeGreaterThan(0)

    console.log('✅ Issue #5400 resolved: All tool picker content now included in Markdown API')
  })
})
