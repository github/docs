import fs from 'fs'
import path from 'path'

import { describe, expect, test, vi } from 'vitest'
import { errors } from '@elastic/elasticsearch'
import type { Client } from '@elastic/elasticsearch'

import { populateIndex } from '@/search/scripts/index/utils/indexing-elasticsearch-utils'

type Doc = Record<string, unknown>
type BulkOptions = {
  datasource: Doc[]
  onDocument: (doc: Doc) => { index: { _index: string; _id?: string } }
}

// Mimics an Elasticsearch bulk helper that stores some documents and then
// gets a request-level 429, which makes populateIndex retry the whole bulk.
function createFakeClient() {
  const stored = new Map<string, Doc>()
  let autoId = 0
  let calls = 0
  const bulk = vi.fn(async ({ datasource, onDocument }: BulkOptions) => {
    calls++
    const docs = calls === 1 ? datasource.slice(0, Math.ceil(datasource.length / 2)) : datasource
    for (const doc of docs) {
      const action = onDocument(doc)
      stored.set(action.index._id ?? `auto-${autoId++}`, doc)
    }
    if (calls === 1) {
      throw new errors.ResponseError({
        body: { error: { type: 'es_rejected_execution_exception' } },
        statusCode: 429,
        headers: {},
        warnings: null,
        meta: {} as never,
      })
    }
    return { total: docs.length, failed: 0, successful: docs.length }
  })
  const client = {
    helpers: { bulk },
    count: async () => ({ count: stored.size }),
  } as unknown as Client
  return { client, stored, bulk }
}

const records = [{ url: '/en/a' }, { url: '/en/b' }, { url: '/en/c' }, { url: '/en/d' }]

describe('populateIndex', () => {
  test('uses idField as the document _id so a retried bulk does not duplicate documents', async () => {
    const { client, stored, bulk } = createFakeClient()
    await populateIndex(client, 'alias', 'name', records, {
      retries: 1,
      sleepTime: 1,
      idField: 'url',
    })
    expect(bulk).toHaveBeenCalledTimes(2)
    expect(stored.size).toBe(records.length)
    expect([...stored.keys()].sort()).toEqual(['/en/a', '/en/b', '/en/c', '/en/d'])
  })

  test('sends no _id when idField is not set', async () => {
    const { client, bulk } = createFakeClient()
    await populateIndex(client, 'alias', 'name', records, { retries: 1, sleepTime: 1 })
    const { onDocument } = bulk.mock.calls[0][0]
    expect(onDocument({ url: '/en/a' })).toEqual({ index: { _index: 'alias' } })
  })
})

describe('general search fixture records', () => {
  const dir = 'src/search/tests/fixtures/search-indexes'
  const files = fs.readdirSync(dir).filter((file) => file.endsWith('-records.json'))

  // The indexer uses objectID as the document _id, so a repeated objectID would overwrite another record.
  test.each(files)('%s has unique objectIDs', (file) => {
    const fixture = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8')) as Record<
      string,
      { objectID: string }
    >
    const ids = Object.values(fixture).map((record) => record.objectID)
    expect(new Set(ids).size).toBe(ids.length)
  })
})
