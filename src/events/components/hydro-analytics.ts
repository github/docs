// @github/hydro-analytics-client sends cross-subdomain events to collector.githubapp.com.
//
// The client auto-collects page, title, client_id, referrer, user_agent,
// screen_resolution, browser_resolution, browser_languages, pixel_ratio,
// timestamp, and tz_seconds. We send the other docs-specific context fields,
// except the survey email, comment, and bot trap fields.
//
// The two entry points, getOctoClientId and sendHydroAnalyticsEvent, are wrapped
// in try/catch so a problem with the client cannot affect our primary analytics.
// That only covers synchronous throws: the client fires its request without
// awaiting it, so a collector network failure never reaches us.

import {
  AnalyticsClient,
  getOrCreateClientId as hydroGetOrCreateClientId,
} from '@github/hydro-analytics-client'
import { EventType } from '../types'

// getOctoClientId returns undefined if the Hydro client fails for any reason.
export function getOctoClientId(): string | undefined {
  try {
    return hydroGetOrCreateClientId()
  } catch (error) {
    console.log('hydro-analytics-client getOctoClientId error:', error)
    return undefined
  }
}

const hydroClient = new AnalyticsClient({
  collectorUrl: 'https://collector.githubapp.com/docs/collect',
  clientId: getOctoClientId(),
})

const AUTO_COLLECTED_FIELDS = new Set([
  'referrer',
  'user_agent',
  'viewport_width',
  'viewport_height',
  'screen_width',
  'screen_height',
  'pixel_ratio',
  'timezone',
  'user_language',
  'href',
  'title',
])

// The general collector feeds BI dashboards, so survey email and comments stay in the survey pipeline.
const NOT_FORWARDED_FIELDS = new Set(['survey_email', 'survey_comment', 'survey_token'])

// analytics_v0_page_view needs a flat context without fields Hydro already auto-collects.
export function prepareData(body: Record<string, unknown>): {
  type: string
  context: Record<string, string>
} {
  const { context: nestedContext, type, ...rest } = body
  const flattened = {
    ...((nestedContext as Record<string, unknown>) || {}),
    ...rest,
  }
  const context = Object.fromEntries(
    Object.entries(flattened)
      .filter(([, value]) => value != null)
      .filter(([key]) => !AUTO_COLLECTED_FIELDS.has(key))
      .filter(([key]) => !NOT_FORWARDED_FIELDS.has(key))
      .map(([key, value]) => [key, String(value)]),
  )

  // BI dashboards expect react_app and marketing page_type for analytics_v0_page_view.
  context.react_app = 'docs'
  context.page_type = 'marketing'

  return { type: typeof type === 'string' ? type : 'unknown', context }
}

// Hydro treats page events as page views and all other docs events as custom events.
//
// Wrapped in try/catch so a broken hydro client cannot affect our primary
// analytics pipeline.
export function sendHydroAnalyticsEvent(body: Record<string, unknown>): void {
  try {
    // /api/events rejects surveys that fill the bot trap, so the collector skips them too.
    if (body.type === EventType.survey && body.survey_token) return
    const { type, context } = prepareData(body)
    if (type === EventType.page) {
      hydroClient.sendPageView(context)
    } else {
      hydroClient.sendEvent(type, context)
    }
  } catch (error) {
    console.log('hydro-analytics-client error:', error)
  }
}
