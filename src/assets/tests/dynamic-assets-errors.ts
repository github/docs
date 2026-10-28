import nodePath from 'path'

import { afterEach, describe, expect, test, vi } from 'vitest'
import type { Response } from 'express'

import type { ExtendedRequest } from '@/types'

const { readFile } = vi.hoisted(() => ({ readFile: vi.fn() }))

vi.mock('fs/promises', () => ({ default: { readFile } }))

const { default: dynamicAssets } = await import('@/assets/middleware/dynamic-assets')

function makeReq(path: string) {
  return { url: path, path, method: 'GET', query: {} } as unknown as ExtendedRequest
}

function makeRes() {
  const res = {
    status: vi.fn(() => res),
    type: vi.fn(() => res),
    set: vi.fn(() => res),
    setHeader: vi.fn(() => res),
    hasHeader: vi.fn(() => false),
    getHeader: vi.fn(),
    send: vi.fn(() => res),
  }
  return res
}

describe('dynamic assets error handling', () => {
  afterEach(() => {
    readFile.mockReset()
  })

  test('rethrows when sharp cannot decode the source PNG', async () => {
    readFile.mockResolvedValue(Buffer.from('garbage'))
    const res = makeRes()
    await expect(
      dynamicAssets(makeReq('/assets/images/x.webp'), res as unknown as Response, vi.fn()),
    ).rejects.toThrow()
    expect(res.status).not.toHaveBeenCalledWith(404)
  })

  test('rethrows when a resized source PNG cannot be decoded', async () => {
    readFile.mockResolvedValue(Buffer.from('garbage'))
    const res = makeRes()
    await expect(
      dynamicAssets(makeReq('/assets/mw-1440/images/x.webp'), res as unknown as Response, vi.fn()),
    ).rejects.toThrow()
    expect(res.status).not.toHaveBeenCalledWith(404)
  })

  test('responds 404 when the source PNG does not exist', async () => {
    readFile.mockRejectedValue(Object.assign(new Error('not found'), { code: 'ENOENT' }))
    const res = makeRes()
    await dynamicAssets(makeReq('/assets/images/x.webp'), res as unknown as Response, vi.fn())
    expect(readFile).toHaveBeenCalledWith(nodePath.resolve('assets/images/x.png'))
    expect(res.status).toHaveBeenCalledWith(404)
    expect(res.send).toHaveBeenCalledWith('Asset not found')
  })
})
