import { describe, test, expect, vi, beforeEach } from 'vitest'
import fs from 'fs/promises'
import fsSync from 'fs'

import { writeIndexRecords } from '@/search/scripts/scrape/lib/search-index-records'
import type { Record } from '@/search/scripts/scrape/types'

vi.mock('fs/promises')
vi.mock('fs')

function makeRecord(overrides: Partial<Record> = {}): Record {
  return {
    objectID: '/en/test-page',
    breadcrumbs: 'Test',
    title: 'Test Page',
    headings: '',
    content: 'Some content',
    intro: '',
    toplevel: 'Test',
    ...overrides,
  }
}

describe('writeIndexRecords', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(fsSync.existsSync).mockReturnValue(true)
    vi.mocked(fs.writeFile).mockResolvedValue()
  })

  test('writes valid records to JSON file', async () => {
    const records = [makeRecord(), makeRecord({ objectID: '/en/other-page', title: 'Other Page' })]

    const result = await writeIndexRecords('test-index', records, '/tmp/out')

    expect(result.filePath).toBe('/tmp/out/test-index-records.json')
    expect(result.skippedRecords).toEqual([])
    expect(fs.writeFile).toHaveBeenCalledOnce()
    const writtenJson = vi.mocked(fs.writeFile).mock.calls[0][1] as string
    const parsed = JSON.parse(writtenJson)
    expect(Object.keys(parsed)).toEqual(['/en/test-page', '/en/other-page'])
  })

  test('filters out records with empty titles and returns them as skipped', async () => {
    const records = [makeRecord(), makeRecord({ objectID: '/en/bad-page', title: '' })]

    const result = await writeIndexRecords('test-index', records, '/tmp/out')

    const writtenJson = vi.mocked(fs.writeFile).mock.calls[0][1] as string
    const parsed = JSON.parse(writtenJson)
    expect(Object.keys(parsed)).toEqual(['/en/test-page'])
    expect(result.skippedRecords).toEqual([{ objectID: '/en/bad-page', reason: 'empty title' }])
  })

  test('filters out records with missing objectID and returns them as skipped', async () => {
    const records = [makeRecord(), makeRecord({ objectID: '', title: 'No ID' })]

    const result = await writeIndexRecords('test-index', records, '/tmp/out')

    const writtenJson = vi.mocked(fs.writeFile).mock.calls[0][1] as string
    const parsed = JSON.parse(writtenJson)
    expect(Object.keys(parsed)).toEqual(['/en/test-page'])
    expect(result.skippedRecords).toEqual([{ objectID: '(unknown)', reason: 'invalid objectID' }])
  })

  test('deduplicates records with the same objectID', async () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const records = [
      makeRecord({ title: 'First' }),
      makeRecord({ title: 'Duplicate' }), // same objectID
    ]

    await writeIndexRecords('test-index', records, '/tmp/out')

    const writtenJson = vi.mocked(fs.writeFile).mock.calls[0][1] as string
    const parsed = JSON.parse(writtenJson)
    expect(parsed['/en/test-page'].title).toBe('First')
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('Duplicate objectIDs'))
    warnSpy.mockRestore()
  })

  test('returns empty filePath and skipped record when name is empty', async () => {
    const result = await writeIndexRecords('', [makeRecord()], '/tmp/out')

    expect(result.filePath).toBe('')
    expect(result.skippedRecords).toEqual([{ objectID: '(unknown)', reason: 'name is required' }])
    expect(fs.writeFile).not.toHaveBeenCalled()
  })

  test('returns empty filePath and skipped record when records array is empty', async () => {
    const result = await writeIndexRecords('test-index', [], '/tmp/out')

    expect(result.filePath).toBe('')
    expect(result.skippedRecords).toEqual([
      { objectID: '(unknown)', reason: 'records array is empty' },
    ])
    expect(fs.writeFile).not.toHaveBeenCalled()
  })

  test('creates output directory if it does not exist', async () => {
    vi.mocked(fsSync.existsSync).mockReturnValue(false)
    vi.mocked(fs.mkdir).mockResolvedValue(undefined)

    await writeIndexRecords('test-index', [makeRecord()], '/tmp/new-dir')

    expect(fs.mkdir).toHaveBeenCalledWith('/tmp/new-dir', { recursive: true })
  })
})
