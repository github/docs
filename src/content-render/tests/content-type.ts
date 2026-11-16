import path from 'path'
import { describe, expect, test } from 'vitest'
import { determineContentType, shouldWriteContentType } from '@/content-render/lib/content-type'

describe('determineContentType', () => {
  test('uses the content-type directory', () => {
    expect(determineContentType(path.join('copilot', 'how-tos', 'troubleshoot', 'foo.md'))).toBe(
      'how-tos',
    )
    expect(determineContentType(path.join('actions', 'concepts', 'foo.md'))).toBe('concepts')
  })

  test('maps getting-started and responsible-use directories', () => {
    expect(determineContentType(path.join('copilot', 'getting-started', 'foo.md'))).toBe(
      'get-started',
    )
    expect(determineContentType(path.join('copilot', 'responsible-use', 'foo.md'))).toBe('rai')
  })

  test('returns landing for product index pages and homepage for the root index', () => {
    expect(determineContentType(path.join('admin', 'index.md'))).toBe('landing')
    expect(determineContentType('index.md')).toBe('homepage')
  })

  test('returns other for topic directories', () => {
    expect(determineContentType(path.join('admin', 'configuring-settings', 'foo.md'))).toBe('other')
  })
})

describe('shouldWriteContentType', () => {
  test('adds a missing contentType', () => {
    expect(shouldWriteContentType(undefined, 'other')).toBe(true)
    expect(shouldWriteContentType(undefined, 'how-tos')).toBe(true)
  })

  test('keeps a curated contentType when the path does not imply one', () => {
    const derived = determineContentType(path.join('admin', 'configuring-settings', 'foo.md'))
    expect(shouldWriteContentType('how-tos', derived)).toBe(false)
    expect(shouldWriteContentType('concepts', derived)).toBe(false)
  })

  test('replaces location-specific values when the path does not imply them', () => {
    const derived = determineContentType(path.join('billing', 'sponsors', 'index.md'))
    expect(shouldWriteContentType('landing', derived)).toBe(true)
    expect(shouldWriteContentType('homepage', derived)).toBe(true)
    expect(shouldWriteContentType('rai', derived)).toBe(true)
  })

  test('corrects a contentType that does not match its content-type directory', () => {
    const derived = determineContentType(path.join('actions', 'how-tos', 'foo.md'))
    expect(shouldWriteContentType('concepts', derived)).toBe(true)
    expect(shouldWriteContentType('other', derived)).toBe(true)
  })

  test('corrects a product index page to landing', () => {
    expect(
      shouldWriteContentType('other', determineContentType(path.join('admin', 'index.md'))),
    ).toBe(true)
  })

  test('leaves a matching contentType alone', () => {
    expect(shouldWriteContentType('how-tos', 'how-tos')).toBe(false)
    expect(shouldWriteContentType('other', 'other')).toBe(false)
  })
})
