import { describe, expect } from '@jest/globals'
import { get } from '../helpers/e2etest.js'
import clientSideRedirects from '../../lib/redirects/static/client-side-rest-api-redirects.json'

describe('anchor-redirect middleware', () => {
  test('returns correct redirect to url', async () => {
    // test the first entry
    const [key, value] = Object.entries(clientSideRedirects)[0]
    const [path, hash] = key.split('#')
    const sp = new URLSearchParams()
    sp.set('path', path)
    sp.set('hash', hash)
    const res = await get('/anchor-redirect?' + sp)
    expect(res.statusCode).toBe(200)
    const { to } = JSON.parse(res.text)
    expect(to).toBe(value)
  })
  test('errors when path is not passed', async () => {
    // test the first entry
    const key = Object.keys(clientSideRedirects)[0]
    const hash = key.split('#')[1]
    const sp = new URLSearchParams()
    sp.set('hash', hash)
    const res = await get('/anchor-redirect?' + sp)
    expect(res.statusCode).toBe(400)
  })
  test('errors when path is not passed', async () => {
    // test the first entry
    const key = Object.keys(clientSideRedirects)[0]
    const path = key.split('#')[0]
    const sp = new URLSearchParams()
    sp.set('path', path)
    const res = await get('/anchor-redirect?' + sp)
    expect(res.statusCode).toBe(400)
  })
  test('unfound redirect returns undefined', async () => {
    const sp = new URLSearchParams()
    sp.set('path', 'foo')
    sp.set('hash', 'bar')
    const res = await get('/anchor-redirect?' + sp)
    const { to } = JSON.parse(res.text)
    expect(to).toBe(undefined)
  })
})
