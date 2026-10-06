// @github/hydro-analytics-client sends cross-subdomain events to collector.githubapp.com.
//
// The client auto-collects page, title, client_id, referrer, user_agent,
// screen_resolution, browser_resolution, browser_languages, pixel_ratio,
// timestamp, and tz_seconds. We send every other docs-specific context field.
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
      .map(([key, value]) => [key, String(value)]),
  )

  // BI dashboards expect react_app and marketing page_type for analytics_v0_page_view.
  context.react_app = 'docs'
  // Preserve the docs page type because BI expects page_type to be marketing.
  if (context.page_type) {
    context.docs_page_type = context.page_type
  }
  context.page_type = 'marketing'

  return { type: typeof type === 'string' ? type : 'unknown', context }
}

// Hydro treats page events as page views and all other docs events as custom events.
//
// Wrapped in try/catch so a broken hydro client cannot affect our primary
// analytics pipeline.
export function sendHydroAnalyticsEvent(body: Record<string, unknown>): void {
  try {
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
