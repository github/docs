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

    expect(result).toBe('/tmp/out/test-index-records.json')
    expect(fs.writeFile).toHaveBeenCalledOnce()
    const writtenJson = vi.mocked(fs.writeFile).mock.calls[0][1] as string
    const parsed = JSON.parse(writtenJson)
    expect(Object.keys(parsed)).toEqual(['/en/test-page', '/en/other-page'])
  })

  test('filters out records with empty titles', async () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const records = [makeRecord(), makeRecord({ objectID: '/en/bad-page', title: '' })]

    await writeIndexRecords('test-index', records, '/tmp/out')

    const writtenJson = vi.mocked(fs.writeFile).mock.calls[0][1] as string
    const parsed = JSON.parse(writtenJson)
    expect(Object.keys(parsed)).toEqual(['/en/test-page'])
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('empty title'))
    warnSpy.mockRestore()
  })

  test('filters out records with missing objectID', async () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const records = [makeRecord(), makeRecord({ objectID: '', title: 'No ID' })]

    await writeIndexRecords('test-index', records, '/tmp/out')

    const writtenJson = vi.mocked(fs.writeFile).mock.calls[0][1] as string
    const parsed = JSON.parse(writtenJson)
    expect(Object.keys(parsed)).toEqual(['/en/test-page'])
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('invalid objectID'))
    warnSpy.mockRestore()
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

  test('does not log full record content for invalid objectID', async () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const records = [
      makeRecord(),
      makeRecord({
        objectID: '',
        title: 'No ID',
        content: 'A very long content string that should not appear in logs',
      }),
    ]

    await writeIndexRecords('test-index', records, '/tmp/out')

    const warnMessage = warnSpy.mock.calls[0][0] as string
    expect(warnMessage).not.toContain('very long content string')
    warnSpy.mockRestore()
  })

  test('throws when name is empty', async () => {
    await expect(writeIndexRecords('', [makeRecord()], '/tmp/out')).rejects.toThrow(
      '`name` is required',
    )
  })

  test('throws when records array is empty', async () => {
    await expect(writeIndexRecords('test-index', [], '/tmp/out')).rejects.toThrow(
      '`records` must be a non-empty array',
    )
  })

  test('creates output directory if it does not exist', async () => {
    vi.mocked(fsSync.existsSync).mockReturnValue(false)
    vi.mocked(fs.mkdir).mockResolvedValue(undefined)

    await writeIndexRecords('test-index', [makeRecord()], '/tmp/new-dir')

    expect(fs.mkdir).toHaveBeenCalledWith('/tmp/new-dir', { recursive: true })
  })
})
