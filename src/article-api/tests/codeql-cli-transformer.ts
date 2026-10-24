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

    expect(res.body).toContain('# database analyze')

    expect(res.body).toContain(
      'Analyze a database, producing meaningful results in the context of the source code.',
    )

    expect(res.body).toContain('## Synopsis')
    expect(res.body).toContain('## Description')
    expect(res.body).toContain('## Options')

    expect(res.body).not.toContain('<!-- markdownlint-disable GHD053 -->')
    expect(res.body).not.toContain('<!-- markdownlint-disable GHD030 -->')
    expect(res.body).not.toContain('<!-- Content after this section is automatically generated -->')
  })

  test('manual index page keeps its body and lists links to command pages', async () => {
    const res = await get(makeURL('/en/code-security/codeql-cli/codeql-cli-manual'))

    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toContain('text/markdown')

    expect(res.body).toContain('# CodeQL CLI Manual')
    expect(res.body).toContain('This content describes the most recent release of the CodeQL CLI.')
    expect(res.body).toContain('## Links')
    expect(res.body).toContain('](/en/code-security/codeql-cli/codeql-cli-manual/database-analyze)')
  })

  test('canTransform returns false for non-codeql-cli pages', async () => {
    const res = await get(makeURL('/en/get-started/start-your-journey/hello-world'))
    expect(res.statusCode).toBe(200)
  })
})
