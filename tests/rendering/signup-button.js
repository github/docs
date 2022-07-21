import { jest, describe, expect } from '@jest/globals'

import { getDOM } from '../helpers/e2etest.js'
import { getIsDotComAuthenticated } from '../helpers/script-data.js'

describe('GHEC sign up button', () => {
  jest.setTimeout(60 * 1000)

  test('false by default', async () => {
    const $ = await getDOM('/en')
    expect(getIsDotComAuthenticated($)).toBe(false)
  })

  test('not present if dotcom_user cookie', async () => {
    const $ = await getDOM('/en', {
      headers: {
        cookie: 'dotcom_user=peterbe',
      },
    })
    expect(getIsDotComAuthenticated($)).toBe(true)

    // Do another request, same URL, but different cookie, just to
    // make sure the server-side rendering cache isn't failing.
    const $2 = await getDOM('/en', {
      headers: {
        cookie: 'bla=bla',
      },
    })
    expect(getIsDotComAuthenticated($2)).toBe(false)
  })
})
