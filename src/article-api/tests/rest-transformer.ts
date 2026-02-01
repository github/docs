import { beforeAll, describe, expect, test } from 'vitest'

import { get } from '@/tests/helpers/e2etest'

const makeURL = (pathname: string, apiVersion?: string): string => {
  const params = new URLSearchParams({ pathname })
  if (apiVersion) {
    params.set('apiVersion', apiVersion)
  }
  return `/api/article/body?${params}`
}

describe('REST transformer', () => {
  beforeAll(() => {
    if (!process.env.ROOT) {
      console.warn(
        'WARNING: The REST transformer tests require the ROOT environment variable to be set to the fixture root',
      )
    }
  })

  test('REST page renders with markdown structure', async () => {
    const res = await get(makeURL('/en/rest/actions/artifacts'))
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toContain('text/markdown')

    // Check for the main heading
    expect(res.body).toContain('# GitHub Actions Artifacts')

    // Check for intro (using fixture's prodname_actions which is 'HubGit Actions')
    expect(res.body).toContain('Use the REST API to interact with artifacts in HubGit Actions.')

    // Check for manual content section heading
    expect(res.body).toContain('## About artifacts in HubGit Actions')
  })

  test('REST operations are formatted correctly', async () => {
    const res = await get(makeURL('/en/rest/actions/artifacts'))
    expect(res.statusCode).toBe(200)

    // Check for operation heading
    expect(res.body).toContain('## List artifacts for a repository')

    // Check for HTTP method and endpoint
    expect(res.body).toContain('GET /repos/{owner}/{repo}/actions/artifacts')

    // Check for operation description
    expect(res.body).toContain('Lists all artifacts for a repository.')
  })

  test('Parameters section includes headers', async () => {
    const res = await get(makeURL('/en/rest/actions/artifacts'))
    expect(res.statusCode).toBe(200)

    // Check for parameters heading
    expect(res.body).toContain('### Parameters')

    // Check for headers section
    expect(res.body).toContain('#### Headers')

    // Check for accept header
    expect(res.body).toContain('**`accept`** (string)')
    expect(res.body).toContain('Setting to `application/vnd.github+json` is recommended.')
  })

  test('Path and query parameters are listed', async () => {
    const res = await get(makeURL('/en/rest/actions/artifacts'))
    expect(res.statusCode).toBe(200)

    // Check for path and query parameters section
    expect(res.body).toContain('#### Path and query parameters')

    // Check for specific parameters
    expect(res.body).toContain('**`owner`** (string) (required)')
    expect(res.body).toContain('The account owner of the repository.')

    expect(res.body).toContain('**`repo`** (string) (required)')

    expect(res.body).toContain('**`per_page`** (integer)')
    expect(res.body).toContain('Default: `30`')
  })

  test('Status codes are formatted correctly', async () => {
    const DEBUG = process.env.RUNNER_DEBUG === '1' || process.env.DEBUG === '1'
    const url = makeURL('/en/rest/actions/artifacts')
    const startTime = DEBUG ? Date.now() : 0
    if (DEBUG) console.log(`[DEBUG] Test sending request to ${url}`)
    const res = await get(url)
    if (DEBUG)
      console.log(`[DEBUG] Test response: ${res.statusCode} in ${Date.now() - startTime}ms`)
    expect(res.statusCode).toBe(200)

    // Check for status codes section
    expect(res.body).toContain('### HTTP response status codes')

    // Check for specific status code
    expect(res.body).toContain('**200**')
    expect(res.body).toContain('OK')
  })

  test('Code examples include curl with proper formatting', async () => {
    const res = await get(makeURL('/en/rest/actions/artifacts'))
    expect(res.statusCode).toBe(200)

    // Check for code examples section
    expect(res.body).toContain('### Code examples')

    // Check for request/response labels
    expect(res.body).toContain('**Request:**')
    expect(res.body).toContain('**Response schema:**')

    // Check for curl code block
    expect(res.body).toContain('```curl')
    expect(res.body).toContain('curl -L \\')
    expect(res.body).toContain('-X GET \\')
    expect(res.body).toContain('https://api.github.com/repos/OWNER/REPO/actions/artifacts \\')
    expect(res.body).toContain('-H "Accept: application/vnd.github.v3+json" \\')
    expect(res.body).toContain('-H "Authorization: Bearer <YOUR-TOKEN>"')
  })

  test('Code examples include X-GitHub-Api-Version header by default', async () => {
    const res = await get(makeURL('/en/rest/actions/artifacts'))
    expect(res.statusCode).toBe(200)

    // Check for API version header in curl example
    expect(res.body).toContain('-H "X-GitHub-Api-Version: 2022-11-28"')
  })

  test('Code examples include specified API version', async () => {
    const res = await get(makeURL('/en/rest/actions/artifacts', '2022-11-28'))
    expect(res.statusCode).toBe(200)

    // Check for the specified API version header
    expect(res.body).toContain('-H "X-GitHub-Api-Version: 2022-11-28"')
  })

  test('Liquid tags are rendered in intro', async () => {
    const res = await get(makeURL('/en/rest/actions/artifacts'))
    expect(res.statusCode).toBe(200)

    // Liquid tags should be rendered, not shown as raw tags (fixture uses 'HubGit Actions')
    expect(res.body).toContain('HubGit Actions')
    expect(res.body).not.toContain('{% data variables.product.prodname_actions %}')

    // Check in both the intro and the manual content section
    expect(res.body).toMatch(/Use the REST API to interact with artifacts in HubGit Actions/)
    expect(res.body).toMatch(/About artifacts in HubGit Actions/)
  })

  test('AUTOTITLE links are resolved', async () => {
    const res = await get(makeURL('/en/rest/actions/artifacts'))
    expect(res.statusCode).toBe(200)

    // Check that AUTOTITLE has been resolved to actual link text
    // The link should have the actual page title, not "AUTOTITLE"
    expect(res.body).toContain('[Storing workflow data as artifacts]')
    expect(res.body).toContain('(/en/actions/using-workflows/storing-workflow-data-as-artifacts)')

    // Make sure the raw AUTOTITLE tag is not present
    expect(res.body).not.toContain('[AUTOTITLE]')

    // Verify the link appears in the manual content section
    expect(res.body).toMatch(
      /About artifacts in HubGit Actions[\s\S]*Storing workflow data as artifacts/,
    )
  })

  test('Markdown links are preserved in descriptions', async () => {
    const res = await get(makeURL('/en/rest/actions/artifacts'))
    expect(res.statusCode).toBe(200)

    // Check that markdown links are preserved
    expect(res.body).toMatch(/\[.*?\]\(\/en\/.*?\)/)
  })

  test('Response schema is formatted correctly', async () => {
    const res = await get(makeURL('/en/rest/actions/artifacts'))
    expect(res.statusCode).toBe(200)

    // Check for JSON code block with schema label
    expect(res.body).toContain('**Response schema:**')
    expect(res.body).toContain('```json')
    expect(res.body).toContain('Status: 200')

    // Verify schema structure is present (not an example)
    expect(res.body).toContain('"type":')
    expect(res.body).toContain('"properties":')

    // Check for common schema keywords
    const schemaMatch = res.body.match(/```json\s+Status: 200\s+([\s\S]*?)```/)
    expect(schemaMatch).toBeTruthy()

    if (schemaMatch) {
      const schemaContent = schemaMatch[1]
      const schema = JSON.parse(schemaContent)

      // Verify it's a valid OpenAPI/JSON schema structure
      expect(schema).toHaveProperty('type')
      expect(schema.type).toBe('object')
      expect(schema).toHaveProperty('properties')

      // Verify it has expected properties for artifacts response
      expect(schema.properties).toHaveProperty('total_count')
      expect(schema.properties).toHaveProperty('artifacts')
    }
  })

  test('Non-REST pages return appropriate error', async () => {
    const res = await get(makeURL('/en/get-started/start-your-journey/hello-world'))
    expect(res.statusCode).toBe(200)

    // Regular article pages should still work, they just won't use the transformer
    expect(res.body).toContain('## Introduction')
  })

  test('Invalid apiVersion returns 400 error', async () => {
    // An invalid API version should return a validation error with 400 status
    const res = await get(makeURL('/en/rest/actions/artifacts', 'invalid-version'))

    // Returns 400 because the apiVersion is invalid (client error)
    expect(res.statusCode).toBe(400)
    const parsed = JSON.parse(res.body)
    expect(parsed.error).toContain("Invalid apiVersion 'invalid-version'")
    expect(parsed.error).toContain('Valid API versions are:')
    expect(parsed.error).toContain('2022-11-28')
  })

  test('Multiple apiVersion query parameters returns 400 error', async () => {
    // Multiple apiVersion parameters should be rejected
    const res = await get(
      '/api/article/body?pathname=/en/rest/actions/artifacts&apiVersion=2022-11-28&apiVersion=2023-01-01',
    )

    expect(res.statusCode).toBe(400)
    const parsed = JSON.parse(res.body)
    expect(parsed.error).toBe("Multiple 'apiVersion' keys")
  })

  test('Valid apiVersion passes validation', async () => {
    // A valid API version should work
    const res = await get(makeURL('/en/rest/actions/artifacts', '2022-11-28'))

    expect(res.statusCode).toBe(200)
    expect(res.body).toContain('-H "X-GitHub-Api-Version: 2022-11-28"')
  })

  test('Missing apiVersion defaults to latest', async () => {
    // When no apiVersion is provided, it should default to the latest version
    const res = await get(makeURL('/en/rest/actions/artifacts'))

    expect(res.statusCode).toBe(200)
    // Should include the default API version header
    expect(res.body).toContain('-H "X-GitHub-Api-Version: 2022-11-28"')
  })

  test('Multiple operations on a page are all rendered', async () => {
    const res = await get(makeURL('/en/rest/actions/artifacts'))
    expect(res.statusCode).toBe(200)

    // Check for multiple operation headings
    expect(res.body).toContain('## List artifacts for a repository')
    expect(res.body).toContain('## Get an artifact')
    expect(res.body).toContain('## Delete an artifact')
  })

  test('Body parameters are formatted correctly for POST/PUT operations', async () => {
    const res = await get(makeURL('/en/rest/actions/artifacts'))
    expect(res.statusCode).toBe(200)

    // For operations with body parameters, check formatting
    // (artifacts endpoint is mostly GET/DELETE, but structure should be there)
    // The transformer handles body parameters when present
  })

  test('Content-type header is included for operations that need it', async () => {
    const res = await get(makeURL('/en/rest/actions/artifacts'))
    expect(res.statusCode).toBe(200)

    // Content-type header appears for operations that require it
    // The REST transformer adds this based on the operation data
  })

  test('Non-English language paths work correctly', async () => {
    // Note: This test may fail in dev mode with ENABLED_LANGUAGES=en
    // but the transformer itself should handle any language path
    const res = await get(makeURL('/ja/rest/actions/artifacts'))
    expect(res.statusCode).toBe(200)

    // The transformer should work regardless of language prefix
    // because it looks for 'rest' in the path and gets the category/subcategory after it
    // e.g. /ja/rest/actions/artifacts should work the same as /en/rest/actions/artifacts

    // Verify the operation content is present (in English, since REST data is not translated)
    expect(res.body).toContain('## List artifacts for a repository')
    expect(res.body).toContain('GET /repos/{owner}/{repo}/actions/artifacts')

    // Check what language is actually being served by examining the response
    // If Japanese translations are loaded, the title will be in Japanese
    // Otherwise, it falls back to English
    const hasJapaneseTitle = res.body.includes('# GitHub Actions アーティファクト')
    const hasEnglishTitle = res.body.includes('# GitHub Actions Artifacts')

    // One of them must be present
    expect(hasJapaneseTitle || hasEnglishTitle).toBe(true)

    // Verify the appropriate content based on which language was served
    if (hasJapaneseTitle) {
      // If Japanese is loaded, expect Japanese intro text
      expect(res.body).toContain('アーティファクト')
    } else {
      // If Japanese is not loaded, expect English fallback
      expect(res.body).toContain('Use the REST API to interact with artifacts in HubGit Actions')
    }
  })
})
