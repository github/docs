import fs from 'fs'

import { describe, expect, test } from 'vitest'

import { get } from '#src/tests/helpers/e2etest.js'
import {
  SURROGATE_ENUMS,
  makeLanguageSurrogateKey,
} from '#src/frame/middleware/set-fastly-surrogate-key.js'

describe('anchor-redirect api', () => {
  const clientSideRedirects = JSON.parse(
    fs.readFileSync('src/rest/data/client-side-rest-api-redirects.json', 'utf-8'),
  )

  test('returns correct redirect to url', async () => {
    // test the first entry
    const [key, value] = Object.entries(clientSideRedirects)[0]
    const [path, hash] = key.split('#')
    const sp = new URLSearchParams()
    sp.set('path', path)
    sp.set('hash', hash)
    const res = await get('/api/anchor-redirect?' + sp)
    expect(res.statusCode).toBe(200)
    const { to } = JSON.parse(res.body)
    expect(to).toBe(value)
  })
  test('errors when path is not passed', async () => {
    // test the first entry
    const key = Object.keys(clientSideRedirects)[0]
    const hash = key.split('#')[1]
    const sp = new URLSearchParams()
    sp.set('hash', hash)
    const res = await get('/api/anchor-redirect?' + sp)
    expect(res.statusCode).toBe(400)
  })
  test('errors when path is not passed', async () => {
    // test the first entry
    const key = Object.keys(clientSideRedirects)[0]
    const path = key.split('#')[0]
    const sp = new URLSearchParams()
    sp.set('path', path)
    const res = await get('/api/anchor-redirect?' + sp)
    expect(res.statusCode).toBe(400)
  })
  test('unfound redirect returns undefined', async () => {
    const sp = new URLSearchParams()
    sp.set('path', 'foo')
    sp.set('hash', 'bar')
    const res = await get('/api/anchor-redirect?' + sp)
    const { to } = JSON.parse(res.body)
    expect(to).toBe(undefined)
  })
  test('reasonably aggressive cache-control headers', async () => {
    const sp = new URLSearchParams()
    sp.set('path', 'foo')
    sp.set('hash', 'bar')
    const res = await get('/api/anchor-redirect?' + sp)
    expect(res.headers['cache-control']).toContain('public')
    expect(res.headers['cache-control']).toMatch(/max-age=[1-9]/)
    expect(res.headers['surrogate-control']).toContain('public')
    expect(res.headers['surrogate-control']).toMatch(/max-age=[1-9]/)
    const surrogateKeySplit = res.headers['surrogate-key'].split(/\s/g)
    expect(surrogateKeySplit.includes(SURROGATE_ENUMS.DEFAULT)).toBeTruthy()
    expect(surrogateKeySplit.includes(makeLanguageSurrogateKey())).toBeTruthy()
  })
})
