import { describe, jest, test } from '@jest/globals'

import { get, head } from '../helpers/e2etest.js'

describe('product-icons', () => {
  jest.setTimeout(60 * 1000)

  test('happy path', async () => {
    const res = await get('/producticons/react/CommentDiscussionIcon.svg')
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toBe('image/svg+xml')
    expect(res.body.startsWith('<svg')).toBeTruthy()
    expect(res.body.includes('xmlns="http://www.w3.org/2000/svg"')).toBeTruthy()
  })

  test('.svg extension is optional', async () => {
    const res = await get('/producticons/react/DeviceMobileIcon')
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toBe('image/svg+xml')
  })

  test('head', async () => {
    const res = await head('/producticons/react/CommentDiscussionIcon.svg')
    expect(res.statusCode).toBe(200)
    expect(res.body).toBe('')
  })

  test('object "keys" that aren\'t icons should fail', async () => {
    const res = await head('/producticons/react/ConstructorIcon.svg')
    expect(res.statusCode).toBe(404)
  })

  test('404 on unrecognized icons', async () => {
    const res = await head('/producticons/react/FooBaringIcon.svg')
    expect(res.statusCode).toBe(404)
  })
})
