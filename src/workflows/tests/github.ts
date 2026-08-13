import { createRequire } from 'node:module'

import { describe, expect, test } from 'vitest'
import { RequestError } from '@octokit/request-error'

import { isRequestError } from '@/workflows/github'

// `@octokit/request` throws errors built from whichever copy of
// `@octokit/request-error` resolves from its own location, which npm may or may
// not hoist to the top level. Resolve it the same way Node would so this test
// keeps working either way. When it is a separate copy, `instanceof` against the
// top-level class fails, and that is the whole reason `isRequestError` exists.
const requireFromRequest = createRequire(createRequire(import.meta.url).resolve('@octokit/request'))
const nested = await import(requireFromRequest.resolve('@octokit/request-error'))

function makeError(RequestErrorClass: typeof RequestError, status: number, message: string): Error {
  return new RequestErrorClass(message, status, {
    request: { method: 'GET', url: 'https://api.github.com/x', headers: {} },
    response: { status, url: 'https://api.github.com/x', headers: {}, data: { message } },
  })
}

describe('isRequestError', () => {
  test('matches an error thrown from the copy @octokit/request uses', () => {
    const err = makeError(nested.RequestError, 404, 'Not Found')
    // When npm does not hoist to a single copy, this is the case a plain
    // `instanceof RequestError` gets wrong.
    if (nested.RequestError !== RequestError) {
      expect(err instanceof RequestError).toBe(false)
    }
    expect(isRequestError(err)).toBe(true)
    expect(isRequestError(err, 404)).toBe(true)
  })

  test('matches an error from the top-level request-error copy', () => {
    const err = makeError(RequestError, 403, 'Forbidden')
    expect(isRequestError(err, 403)).toBe(true)
  })

  test('respects the status argument', () => {
    const err = makeError(nested.RequestError, 404, 'Not Found')
    expect(isRequestError(err, 403)).toBe(false)
  })

  test('rejects non-request errors and non-errors', () => {
    expect(isRequestError(new Error('nope'))).toBe(false)
    expect(isRequestError({ status: 404 })).toBe(false)
    expect(isRequestError(undefined)).toBe(false)
    expect(isRequestError(null)).toBe(false)
    expect(isRequestError('404')).toBe(false)
  })

  test('rejects an error whose status is not a number', () => {
    const err = Object.assign(new Error('weird'), { status: '404' })
    expect(isRequestError(err)).toBe(false)
  })
})
