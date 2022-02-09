import fs from 'fs'
import path from 'path'

import { expect } from '@jest/globals'

import { SURROGATE_ENUMS } from '../../middleware/set-fastly-surrogate-key.js'
import { get } from '../helpers/supertest.js'

function getNextStaticAsset(directory) {
  const root = path.join('.next', 'static', directory)
  const files = fs.readdirSync(root)
  if (!files.length) throw new Error(`Can't find any files in ${root}`)
  return path.join(root, files[0])
}

function checkCachingHeaders(res, defaultSurrogateKey = false, minMaxAge = 60 * 60) {
  expect(res.headers['set-cookie']).toBeUndefined()
  expect(res.headers['cache-control']).toContain('public')
  const maxAgeSeconds = parseInt(res.header['cache-control'].match(/max-age=(\d+)/)[1], 10)
  // Let's not be too specific in the tests, just as long as it's testing
  // that it's a reasonably large number of seconds.
  expect(maxAgeSeconds).toBeGreaterThanOrEqual(minMaxAge)
  // Because it doesn't have have a unique URL
  expect(res.headers['surrogate-key']).toBe(
    defaultSurrogateKey ? SURROGATE_ENUMS.DEFAULT : SURROGATE_ENUMS.MANUAL
  )
}

describe('static assets', () => {
  it('should serve /assets/cb-* with optimal headers', async () => {
    const res = await get('/assets/cb-1234/images/site/logo.png')
    expect(res.statusCode).toBe(200)
    checkCachingHeaders(res)
  })

  it('should serve /assets/ with optimal headers', async () => {
    const res = await get('/assets/images/site/logo.png')
    expect(res.statusCode).toBe(200)
    checkCachingHeaders(res, true)
  })

  it('should serve /_next/static/ with optimal headers', async () => {
    // This picks the first one found. We just need it to be anything
    // that actually resolves.
    const filePath = getNextStaticAsset('css')
    const asURL = '/' + filePath.replace('.next', '_next').split(path.sep).join('/')
    const res = await get(asURL)
    expect(res.statusCode).toBe(200)
    checkCachingHeaders(res)
  })

  it('should 404 on /assets/cb-* with plain text', async () => {
    const res = await get('/assets/cb-1234/never/heard/of.png')
    expect(res.statusCode).toBe(404)
    expect(res.header['content-type']).toContain('text/plain')
    // Only a tiny amount of Cache-Control on these
    checkCachingHeaders(res, true, 60)
  })
  it('should 404 on /assets/ with plain text', async () => {
    const res = await get('/assets/never/heard/of.png')
    expect(res.statusCode).toBe(404)
    expect(res.header['content-type']).toContain('text/plain')
    checkCachingHeaders(res, true, 60)
  })
  it('should 404 on /_next/static/ with plain text', async () => {
    const res = await get('/_next/static/never/heard/of.css')
    expect(res.statusCode).toBe(404)
    expect(res.header['content-type']).toContain('text/plain')
    checkCachingHeaders(res, true, 60)
  })
})
