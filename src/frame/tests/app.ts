import { IncomingMessage, type IncomingHttpHeaders } from 'node:http'
import { Socket } from 'node:net'
import type { AppContext } from 'next/app'
import { describe, expect, test, vi } from 'vitest'

import MyApp from '@/frame/pages/app'

vi.mock('@primer/react', () => ({
  ThemeProvider: ({ children }: { children: unknown }) => children,
}))

type TestRequest = NonNullable<AppContext['ctx']['req']> & {
  context: Record<string, unknown>
}

function createRequest(headers: IncomingHttpHeaders): TestRequest {
  const req = new IncomingMessage(new Socket()) as TestRequest
  req.context = {}
  req.headers = headers
  return req
}

function createAppContext(req?: TestRequest): AppContext {
  const Component = () => null

  return {
    AppTree: Component,
    Component,
    ctx: {
      AppTree: Component,
      pathname: '/',
      query: {},
      req,
    },
    router: {} as AppContext['router'],
  }
}

describe('MyApp.getInitialProps', () => {
  test('handles client-side error renders without a request', async () => {
    const props = await MyApp.getInitialProps(createAppContext())

    expect(props.stagingName).toBeUndefined()
  })

  test('sets the staging name from the request header', async () => {
    const props = await MyApp.getInitialProps(
      createAppContext(
        createRequest({
          'x-ong-external-url': 'https://docs-staging-cedar.example.com/',
        }),
      ),
    )

    expect(props.stagingName).toBe('cedar')
  })
})
