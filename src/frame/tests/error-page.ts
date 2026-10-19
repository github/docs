import { describe, expect, test, vi } from 'vitest'
import type { NextPageContext } from 'next'

import ErrorPage from '@/pages/_error'

// GenericError pulls in Primer CSS, which Node cannot load outside a Next build.
vi.mock('@/frame/components/GenericError', () => ({ GenericError: () => null }))

describe('_error getInitialProps', () => {
  test('does not expose the error message in page props', async () => {
    const ctx = {
      err: new Error('internal detail'),
      res: { statusCode: 500 },
    } as unknown as NextPageContext
    const props = await ErrorPage.getInitialProps(ctx)
    expect(props).toEqual({ statusCode: 500 })
  })
})
