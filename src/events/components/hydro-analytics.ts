/**
 * Integration with @github/hydro-analytics-client for cross-subdomain tracking.
 *
 * This sends events to collector.githubapp.com alongside our existing analytics.
 * The client auto-collects: page, title, client_id, referrer, user_agent,
 * screen_resolution, browser_resolution, browser_languages, pixel_ratio, timestamp, tz_seconds
 *
 * We send all other docs-specific context fields, including:
 * - path_language, path_version, path_product, path_article
 * - page_document_type, page_type, content_type
 * - color_mode_preference, is_logged_in, experiment_variation, is_headless
 * - event_id, page_event_id, octo_client_id
 * - Plus any event-specific properties (exit metrics, link_url, etc.)
 *
 * All functions are wrapped in try/catch to ensure that issues with the
 * hydro-analytics-client or collector don't affect our primary analytics.
 */

import {
  AnalyticsClient,
  getOrCreateClientId as hydroGetOrCreateClientId,
} from '@github/hydro-analytics-client'
import { EventType } from '../types'

/**
 * Safe wrapper around hydro-analytics-client's getOrCreateClientId.
 * Returns undefined if the client fails for any reason.
 */
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

/**
 * Flatten a nested event body into a single-level context object,
 * excluding fields that hydro-analytics-client already auto-collects.
 */
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
  return { type: typeof type === 'string' ? type : 'unknown', context }
}

/**
 * Send an event to hydro-analytics-client.
 * For page events, sends as a page view. For all other events, sends as a custom event.
 *
 * This is wrapped in try/catch to ensure that if the hydro collector is down
 * or errors, it doesn't affect our primary analytics pipeline.
 */
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
