import { describe, test, expect, vi, beforeAll, afterAll } from 'vitest'
import express from 'express'
import type { Server } from 'node:http'
import type { AddressInfo } from 'node:net'

import { fetchStream } from '@/frame/lib/fetch-utils'
import aiSearchLocalProxy from '@/search/middleware/ai-search-local-proxy'

vi.mock('@/frame/lib/fetch-utils', () => ({
  fetchStream: vi.fn(),
}))

vi.mock('@/observability/logger', () => ({
  createLogger: () => ({ error: vi.fn(), info: vi.fn(), warn: vi.fn(), debug: vi.fn() }),
}))

const lines = ['{"type":"SOURCES","sources":[]}\n', '{"type":"MESSAGE_CHUNK","text":"Hello"}\n']

function ndjsonResponse() {
  const encoder = new TextEncoder()
  const body = new ReadableStream<Uint8Array>({
    start(controller) {
      for (const line of lines) controller.enqueue(encoder.encode(line))
      controller.close()
    },
  })
  return new Response(body, {
    status: 200,
    headers: { 'content-type': 'application/x-ndjson' },
  })
}

describe('AI Search local proxy streaming', () => {
  let server: Server
  let baseUrl: string

  beforeAll(async () => {
    const app = express()
    app.use(express.json())
    app.use(aiSearchLocalProxy)
    server = await new Promise<Server>((resolve) => {
      const s = app.listen(0, '127.0.0.1', () => resolve(s))
    })
    const { port } = server.address() as AddressInfo
    baseUrl = `http://127.0.0.1:${port}`
  })

  afterAll(async () => {
    await new Promise<void>((resolve) => server.close(() => resolve()))
  })

  test('streams the full upstream ndjson body to the client', async () => {
    vi.mocked(fetchStream).mockResolvedValue(ndjsonResponse())

    const response = await fetch(`${baseUrl}/ai-search/v1`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ query: 'test query', version: 'dotcom' }),
    })

    expect(response.status).toBe(200)
    expect(response.headers.get('content-type')).toBe('application/x-ndjson')
    expect(await response.text()).toBe(lines.join(''))
  })
})
