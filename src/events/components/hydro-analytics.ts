// Integration with @github/hydro-analytics-client for cross-subdomain tracking.
// Events go to collector.githubapp.com alongside our existing analytics.
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

// Returns undefined if the client fails for any reason.
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

// Fields that hydro-analytics-client already collects automatically
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

// Flattens a nested event body into a single-level context object, dropping
// fields the client already auto-collects and adding the ones
// analytics_v0_page_view needs.
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

  // Add fields required for analytics_v0_page_view compatibility
  // These are expected by the BI team's dashboards
  context.react_app = 'docs'
  // Preserve our page_type as docs_page_type, then set page_type to 'marketing' for BI
  if (context.page_type) {
    context.docs_page_type = context.page_type
  }
  context.page_type = 'marketing'

  return { type: typeof type === 'string' ? type : 'unknown', context }
}

// Page events go out as a page view, everything else as a custom event.
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
