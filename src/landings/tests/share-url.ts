import { describe, expect, test, vi } from 'vitest'

import { buildShareUrl, shareOrCopy } from '@/landings/lib/share-url'

describe('buildShareUrl', () => {
  test('marks the link as shared', () => {
    expect(buildShareUrl('https://docs.github.com/en/ignite26')).toBe(
      'https://docs.github.com/en/ignite26?utm_medium=share',
    )
  })

  test('keeps the campaign and source but replaces the medium', () => {
    const url = new URL(
      buildShareUrl(
        'https://docs.github.com/en/ignite26?utm_source=booth&utm_medium=qr&utm_campaign=ignite26',
      ),
    )
    expect(url.searchParams.get('utm_source')).toBe('booth')
    expect(url.searchParams.get('utm_campaign')).toBe('ignite26')
    expect(url.searchParams.get('utm_medium')).toBe('share')
  })

  test('drops grid filters and hashes so the recipient sees the page as published', () => {
    expect(
      buildShareUrl(
        'https://docs.github.com/en/ignite26?articles-category=Review&articles-page=2#x',
      ),
    ).toBe('https://docs.github.com/en/ignite26?utm_medium=share')
  })
})

describe('shareOrCopy', () => {
  const data = { title: 'Chez Mona', url: 'https://docs.github.com/en/ignite26?utm_medium=share' }
  const copies = () => vi.fn(async () => {})
  const rejects = (error: unknown) => vi.fn(async () => Promise.reject(error))

  test('does not copy when the visitor closes the share sheet', async () => {
    const writeText = copies()
    const outcome = await shareOrCopy(
      { share: rejects(new DOMException('closed', 'AbortError')), writeText },
      data,
    )
    expect(outcome).toEqual({ result: 'cancelled', shareFailed: false })
    expect(writeText).not.toHaveBeenCalled()
  })

  test('flags a failed share even when the clipboard fallback is refused', async () => {
    const outcome = await shareOrCopy(
      {
        share: rejects(new DOMException('no activation', 'NotAllowedError')),
        writeText: rejects(new DOMException('no activation', 'NotAllowedError')),
      },
      data,
    )
    expect(outcome).toEqual({ result: 'not-copied', shareFailed: true })
  })

  test('copy-only retry skips the share sheet', async () => {
    const share = copies()
    const writeText = copies()
    const outcome = await shareOrCopy({ share, writeText }, data, true)
    expect(outcome).toEqual({ result: 'copied', shareFailed: false })
    expect(share).not.toHaveBeenCalled()
    expect(writeText).toHaveBeenCalledWith(data.url)
  })
})
