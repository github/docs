import { describe, expect, test } from 'vitest'
import { prepareData } from '../components/hydro-analytics'

describe('prepareData', () => {
  test('flattens nested context into top level', () => {
    const body = {
      type: 'page',
      context: {
        event_id: '123',
        path_language: 'en',
      },
    }
    const result = prepareData(body)
    expect(result.type).toBe('page')
    expect(result.context.event_id).toBe('123')
    expect(result.context.path_language).toBe('en')
  })

  test('includes top-level props alongside context', () => {
    const body = {
      type: 'exit',
      context: { event_id: '123' },
      exit_scroll_length: 0.75,
    }
    const result = prepareData(body)
    expect(result.type).toBe('exit')
    expect(result.context.event_id).toBe('123')
    expect(result.context.exit_scroll_length).toBe('0.75')
  })

  test('filters out auto-collected fields', () => {
    const body = {
      type: 'page',
      context: {
        event_id: '123',
        referrer: 'https://google.com',
        user_agent: 'Mozilla/5.0',
        viewport_width: 1024,
        title: 'Test Page',
        path_language: 'en',
      },
    }
    const result = prepareData(body)
    expect(result.context.event_id).toBe('123')
    expect(result.context.path_language).toBe('en')
    expect(result.context.referrer).toBeUndefined()
    expect(result.context.user_agent).toBeUndefined()
    expect(result.context.viewport_width).toBeUndefined()
    expect(result.context.title).toBeUndefined()
  })

  test('filters out null and undefined values', () => {
    const body = {
      type: 'page',
      context: {
        event_id: '123',
        path_language: null,
        path_version: undefined,
        path_product: 'actions',
      },
    }
    const result = prepareData(body)
    expect(result.context.event_id).toBe('123')
    expect(result.context.path_product).toBe('actions')
    expect(result.context.path_language).toBeUndefined()
    expect(result.context.path_version).toBeUndefined()
  })

  test('converts all values to strings', () => {
    const body = {
      type: 'exit',
      context: {
        status: 200,
        is_logged_in: true,
        is_headless: false,
      },
    }
    const result = prepareData(body)
    expect(result.context.status).toBe('200')
    expect(result.context.is_logged_in).toBe('true')
    expect(result.context.is_headless).toBe('false')
  })

  test('defaults type to unknown if not a string', () => {
    const body = {
      type: 123,
      context: { event_id: '123' },
    }
    const result = prepareData(body)
    expect(result.type).toBe('unknown')
  })

  test('handles missing context gracefully', () => {
    const body = {
      type: 'page',
      exit_scroll_length: 0.5,
    }
    const result = prepareData(body)
    expect(result.type).toBe('page')
    expect(result.context.exit_scroll_length).toBe('0.5')
  })

  test('adds react_app field for analytics_v0_page_view compatibility', () => {
    const body = {
      type: 'page',
      context: { event_id: '123' },
    }
    const result = prepareData(body)
    expect(result.context.react_app).toBe('docs')
  })

  test('adds page_type field when not present', () => {
    const body = {
      type: 'page',
      context: { event_id: '123' },
    }
    const result = prepareData(body)
    expect(result.context.page_type).toBe('marketing')
    expect(result.context.docs_page_type).toBeUndefined()
  })

  test('preserves existing page_type as docs_page_type and sets page_type to marketing', () => {
    const body = {
      type: 'page',
      context: { event_id: '123', page_type: 'article' },
    }
    const result = prepareData(body)
    expect(result.context.page_type).toBe('marketing')
    expect(result.context.docs_page_type).toBe('article')
  })
})
