import fs from 'fs'
import path from 'path'

import { jest, expect } from '@jest/globals'

import { get } from '../../../tests/helpers/e2etest.js'
import { checkCachingHeaders } from '../../../tests/helpers/caching-headers.js'

function getNextStaticAsset(directory) {
  const root = path.join('.next', 'static', directory)
  const files = fs.readdirSync(root)
  if (!files.length) throw new Error(`Can't find any files in ${root}`)
  return path.join(root, files[0])
}

describe('static assets', () => {
  jest.setTimeout(60 * 1000)

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
    expect(res.headers['content-type']).toContain('text/plain')
    // Only a tiny amount of Cache-Control on these
    checkCachingHeaders(res, true, 60)
  })
  it('should 404 on /assets/ with plain text', async () => {
    const res = await get('/assets/never/heard/of.png')
    expect(res.statusCode).toBe(404)
    expect(res.headers['content-type']).toContain('text/plain')
    checkCachingHeaders(res, true, 60)
  })
  it('should 404 on /_next/static/ with plain text', async () => {
    const res = await get('/_next/static/never/heard/of.css')
    expect(res.statusCode).toBe(404)
    expect(res.headers['content-type']).toContain('text/plain')
    checkCachingHeaders(res, true, 60)
  })
  it("should redirect if the URLisn't all lowercase", async () => {
    // Directory
    {
      const res = await get('/assets/images/SITE/logo.png')
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe('/assets/images/site/logo.png')
    }
    // File name
    {
      const res = await get('/assets/images/site/LoGo.png')
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe('/assets/images/site/logo.png')
    }
    // File extension
    {
      const res = await get('/assets/images/site/logo.PNG')
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toBe('/assets/images/site/logo.png')
    }
  })
})
