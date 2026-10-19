import { beforeAll, describe, expect, test } from 'vitest'

import { get } from '@/tests/helpers/e2etest'
import { getCurlBodyArguments } from '@/rest/lib/curl-body-arguments'

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

    expect(res.body).toContain('# GitHub Actions Artifacts')

    expect(res.body).toContain('Use the REST API to interact with artifacts in HubGit Actions.')

    expect(res.body).toContain('## About artifacts in HubGit Actions')
  })

  test('REST operations are formatted correctly', async () => {
    const res = await get(makeURL('/en/rest/actions/artifacts'))
    expect(res.statusCode).toBe(200)

    expect(res.body).toContain('## List artifacts for a repository')

    expect(res.body).toContain('GET /repos/{owner}/{repo}/actions/artifacts')

    expect(res.body).toContain('Lists all artifacts for a repository.')
  })

  test('Parameters section includes headers', async () => {
    const res = await get(makeURL('/en/rest/actions/artifacts'))
    expect(res.statusCode).toBe(200)

    expect(res.body).toContain('### Parameters')

    expect(res.body).toContain('#### Headers')

    expect(res.body).toContain('**`accept`** (string)')
    expect(res.body).toContain('Setting to `application/vnd.github+json` is recommended.')
  })

  test('Path and query parameters are listed', async () => {
    const res = await get(makeURL('/en/rest/actions/artifacts'))
    expect(res.statusCode).toBe(200)

    expect(res.body).toContain('#### Path and query parameters')

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

    expect(res.body).toContain('### HTTP response status codes')

    expect(res.body).toContain('**200**')
    expect(res.body).toContain('OK')
  })

  test('Code examples include curl with proper formatting', async () => {
    const res = await get(makeURL('/en/rest/actions/artifacts'))
    expect(res.statusCode).toBe(200)

    expect(res.body).toContain('### Code examples')

    expect(res.body).toContain('**Request:**')
    expect(res.body).toContain('**Response schema (Status: 200):**')

    expect(res.body).toContain('```curl')
    expect(res.body).toContain('curl -L \\')
    expect(res.body).toContain('-X GET \\')
    expect(res.body).toContain('https://api.github.com/repos/OWNER/REPO/actions/artifacts')
  })

  test('Authentication note is included at top of page', async () => {
    const res = await get(makeURL('/en/rest/actions/artifacts'))
    expect(res.statusCode).toBe(200)

    expect(res.body).toContain('[!NOTE]')
    expect(res.body).toContain('Authorization: Bearer <YOUR-TOKEN>')
    expect(res.body).toContain('application/vnd.github+json')
  })

  test('API version is mentioned in auth note', async () => {
    const res = await get(makeURL('/en/rest/actions/artifacts'))
    expect(res.statusCode).toBe(200)

    expect(res.body).toMatch(/X-GitHub-Api-Version: \d{4}-\d{2}-\d{2}/)
  })

  test('Code examples include specified API version in auth note', async () => {
    const res = await get(makeURL('/en/rest/actions/artifacts', '2022-11-28'))
    expect(res.statusCode).toBe(200)

    expect(res.body).toContain('X-GitHub-Api-Version: 2022-11-28')
  })

  test('Liquid tags are rendered in intro', async () => {
    const res = await get(makeURL('/en/rest/actions/artifacts'))
    expect(res.statusCode).toBe(200)

    // The fixture renders prodname_actions as HubGit Actions.
    expect(res.body).toContain('HubGit Actions')
    expect(res.body).not.toContain('{% data variables.product.prodname_actions %}')

    expect(res.body).toMatch(/Use the REST API to interact with artifacts in HubGit Actions/)
    expect(res.body).toMatch(/About artifacts in HubGit Actions/)
  })

  test('AUTOTITLE links are resolved', async () => {
    const res = await get(makeURL('/en/rest/actions/artifacts'))
    expect(res.statusCode).toBe(200)

    expect(res.body).toContain('[Storing workflow data as artifacts]')
    expect(res.body).toContain('(/en/actions/using-workflows/storing-workflow-data-as-artifacts)')

    expect(res.body).not.toContain('[AUTOTITLE]')

    expect(res.body).toMatch(
      /About artifacts in HubGit Actions[\s\S]*Storing workflow data as artifacts/,
    )
  })

  test('Markdown links are preserved in descriptions', async () => {
    const res = await get(makeURL('/en/rest/actions/artifacts'))
    expect(res.statusCode).toBe(200)

    expect(res.body).toMatch(/\[.*?\]\(\/en\/.*?\)/)
  })

  test('Response schema is formatted as markdown', async () => {
    const res = await get(makeURL('/en/rest/actions/artifacts'))
    expect(res.statusCode).toBe(200)

    expect(res.body).toContain('**Response schema (Status: 200):**')

    expect(res.body).toContain('* `total_count`:')
    expect(res.body).toContain('* `artifacts`:')

    expect(res.body).not.toContain('"properties":')
  })

  test('Non-REST pages return appropriate error', async () => {
    const res = await get(makeURL('/en/get-started/start-your-journey/hello-world'))
    expect(res.statusCode).toBe(200)

    expect(res.body).toContain('## Introduction')
  })

  test('Invalid apiVersion returns 400 error', async () => {
    const res = await get(makeURL('/en/rest/actions/artifacts', 'invalid-version'))

    expect(res.statusCode).toBe(400)
    const parsed = JSON.parse(res.body)
    expect(parsed.error).toContain("Invalid apiVersion 'invalid-version'")
    expect(parsed.error).toContain('Valid API versions are:')
    expect(parsed.error).toContain('2022-11-28')
  })

  test('Multiple apiVersion query parameters returns 400 error', async () => {
    const res = await get(
      '/api/article/body?pathname=/en/rest/actions/artifacts&apiVersion=2022-11-28&apiVersion=2023-01-01',
    )

    expect(res.statusCode).toBe(400)
    const parsed = JSON.parse(res.body)
    expect(parsed.error).toBe("Multiple 'apiVersion' keys")
  })

  test('Valid apiVersion passes validation', async () => {
    const res = await get(makeURL('/en/rest/actions/artifacts', '2022-11-28'))

    expect(res.statusCode).toBe(200)
    expect(res.body).toContain('X-GitHub-Api-Version: 2022-11-28')
  })

  test('Missing apiVersion defaults to latest', async () => {
    const res = await get(makeURL('/en/rest/actions/artifacts'))

    expect(res.statusCode).toBe(200)
    expect(res.body).toMatch(/X-GitHub-Api-Version: \d{4}-\d{2}-\d{2}/)
  })

  test('Multiple operations on a page are all rendered', async () => {
    const res = await get(makeURL('/en/rest/actions/artifacts'))
    expect(res.statusCode).toBe(200)

    expect(res.body).toContain('## List artifacts for a repository')
    expect(res.body).toContain('## Get an artifact')
    expect(res.body).toContain('## Delete an artifact')
  })

  test('Body parameters are formatted correctly for POST/PUT operations', async () => {
    const res = await get(makeURL('/en/rest/actions/cache', '2022-11-28'))
    expect(res.statusCode).toBe(200)

    expect(res.body).toContain('## Set GitHub Actions cache retention limit for a repository')
    expect(res.body).toContain('#### Body parameters')
    expect(res.body).toContain('**`max_cache_retention_days`** (integer)')
    expect(res.body).toContain('The maximum number of days to keep caches in this repository.')
    expect(res.body).toContain('"max_cache_retention_days": 80')
  })

  test('Content-type header is included for operations that need it', async () => {
    const res = await get(makeURL('/en/rest/releases/assets', '2022-11-28'))
    expect(res.statusCode).toBe(200)

    expect(res.body).toContain('## Upload a release asset')
    expect(res.body).toContain('-H "Content-Type: application/octet-stream"')
    expect(res.body).toContain('--data-binary "@example.zip"')
    expect(res.body).not.toContain(`-d '"@example.zip"'`)
  })

  test('Multipart form bodies are formatted as curl form arguments', () => {
    expect(
      getCurlBodyArguments(
        {
          license: '@enterprise.ghl',
          label: 'enterprise license',
        },
        'multipart/form-data',
      ),
    ).toEqual(["--form 'license=@enterprise.ghl'", "--form 'label=enterprise license'"])
  })

  test('Non-English language paths work correctly', async () => {
    // TRANSLATIONS_FIXTURE_ROOT enables /ja in tests; ENABLED_LANGUAGES=en alone disables it.
    const res = await get(makeURL('/ja/rest/actions/artifacts'))
    expect(res.statusCode).toBe(200)

    // The transformer finds rest after any language prefix, and REST data stays English.
    expect(res.body).toContain('## List artifacts for a repository')
    expect(res.body).toContain('GET /repos/{owner}/{repo}/actions/artifacts')

    const hasJapaneseTitle = res.body.includes('# GitHub Actions アーティファクト')
    const hasEnglishTitle = res.body.includes('# GitHub Actions Artifacts')

    expect(hasJapaneseTitle || hasEnglishTitle).toBe(true)

    if (hasJapaneseTitle) {
      expect(res.body).toContain('アーティファクト')
    } else {
      expect(res.body).toContain('Use the REST API to interact with artifacts in HubGit Actions')
    }
  })
})
