import { describe, expect, test } from 'vitest'

import { get } from '@/tests/helpers/e2etest'

const makeURL = (pathname: string): string =>
  `/api/article/body?${new URLSearchParams({ pathname })}`

describe('journey landing transformer', () => {
  test('renders a journey landing page in markdown', async () => {
    // /en/get-started/test-journey is a journey landing page in the fixtures
    const res = await get(makeURL('/en/get-started/test-journey'))
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toContain('text/markdown')

    // Check for journey tracks (now under Links section with track title as h3)
    expect(res.body).toContain('## Links')
    expect(res.body).toContain('### First Track')
    expect(res.body).toContain('* [Hello World](/en/get-started/start-your-journey/hello-world)')
  })
})
