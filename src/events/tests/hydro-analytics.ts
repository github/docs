import { beforeEach, describe, expect, test, vi } from 'vitest'
import { prepareData, sendHydroAnalyticsEvent } from '../components/hydro-analytics'

const { mockSendEvent, mockSendPageView } = vi.hoisted(() => ({
  mockSendEvent: vi.fn(),
  mockSendPageView: vi.fn(),
}))
vi.mock('@github/hydro-analytics-client', () => ({
  AnalyticsClient: class {
    sendEvent = mockSendEvent
    sendPageView = mockSendPageView
  },
  getOrCreateClientId: () => 'test-client-id',
}))

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

  test('sets page_type to marketing', () => {
    const body = {
      type: 'page',
      context: { event_id: '123' },
    }
    const result = prepareData(body)
    expect(result.context.page_type).toBe('marketing')
  })

  test('does not forward survey email, comment, or bot trap fields', () => {
    const body = {
      type: 'survey',
      context: { event_id: '123' },
      survey_vote: true,
      survey_comment: 'Great article',
      survey_email: 'reader@example.com',
      survey_token: 'filled-by-bot',
    }
    const result = prepareData(body)
    expect(result.context.survey_vote).toBe('true')
    expect(result.context.survey_comment).toBeUndefined()
    expect(result.context.survey_email).toBeUndefined()
    expect(result.context.survey_token).toBeUndefined()
  })
})

describe('sendHydroAnalyticsEvent', () => {
  beforeEach(() => {
    mockSendEvent.mockClear()
    mockSendPageView.mockClear()
  })

  test('sends survey events without a bot trap value', () => {
    sendHydroAnalyticsEvent({ type: 'survey', context: { event_id: '123' }, survey_vote: true })
    expect(mockSendEvent).toHaveBeenCalledTimes(1)
    expect(mockSendEvent.mock.calls[0][0]).toBe('survey')
  })

  test('skips survey events that fill the bot trap', () => {
    sendHydroAnalyticsEvent({
      type: 'survey',
      context: { event_id: '123' },
      survey_vote: true,
      survey_token: 'filled-by-bot',
    })
    expect(mockSendEvent).not.toHaveBeenCalled()
  })
})
