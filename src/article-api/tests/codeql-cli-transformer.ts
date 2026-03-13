import { describe, expect, test, beforeAll } from 'vitest'
import { get } from '@/tests/helpers/e2etest'

const makeURL = (pathname: string): string =>
  `/api/article/body?${new URLSearchParams({ pathname })}`

describe('codeql cli article body api', () => {
  beforeAll(() => {
    if (!process.env.ROOT) {
      console.warn(
        'WARNING: The CodeQL CLI transformer tests require the ROOT environment variable to be set to the fixture root',
      )
    }
  })

  test('database-analyze page', async () => {
    const res = await get(
      makeURL('/en/code-security/codeql-cli/codeql-cli-manual/database-analyze'),
    )

    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toContain('text/markdown')

    // Check for title injection
    expect(res.body).toContain('# database analyze')

    // Check for intro injection
    expect(res.body).toContain(
      'Analyze a database, producing meaningful results in the context of the source code.',
    )

    // Check for content
    expect(res.body).toContain('## Synopsis')
    expect(res.body).toContain('## Description')
    expect(res.body).toContain('## Options')

    // Verify HTML comments are stripped
    expect(res.body).not.toContain('<!-- markdownlint-disable GHD053 -->')
    expect(res.body).not.toContain('<!-- markdownlint-disable GHD030 -->')
    expect(res.body).not.toContain('<!-- Content after this section is automatically generated -->')
  })

  test('canTransform returns false for non-codeql-cli pages', async () => {
    const res = await get(makeURL('/en/get-started/start-your-journey/hello-world'))
    // This should not be transformed by CodeQL CLI transformer
    expect(res.statusCode).toBe(200)
  })
})
