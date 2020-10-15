/* eslint-disable camelcase */
import { v4 as uuidv4 } from 'uuid'
import Cookies from 'js-cookie'
import getCsrf from './get-csrf'

const COOKIE_NAME = '_docs-events'

let cookieValue

export function getUserEventsId () {
  if (cookieValue) return cookieValue
  cookieValue = Cookies.get(COOKIE_NAME)
  if (cookieValue) return cookieValue
  cookieValue = uuidv4()
  Cookies.set(COOKIE_NAME, cookieValue, {
    secure: true,
    sameSite: 'strict',
    expires: 365
  })
  return cookieValue
}

export async function sendEvent ({
  type,
  version = '1.0.0',
  page_render_duration,
  exit_page_id,
  exit_first_paint,
  exit_dom_interactive,
  exit_dom_complete,
  exit_visit_duration,
  exit_scroll_length,
  link_url,
  search_query,
  search_context,
  navigate_label,
  survey_vote,
  survey_comment,
  survey_email,
  experiment_name,
  experiment_variation,
  experiment_success
}) {
  const response = await fetch('/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'CSRF-Token': getCsrf()
    },
    body: JSON.stringify({
      type, // One of page, exit, link, search, navigate, survey, experiment

      context: {
        // Primitives
        event_id: uuidv4(),
        user: getUserEventsId(),
        version,
        created: new Date().toISOString(),

        // Content information
        path: location.pathname,
        referrer: document.referrer,
        search: location.search,
        href: location.href,
        site_language: location.pathname.split('/')[1],

        // Device information
        // os:
        // os_version:
        // browser:
        // browser_version:
        viewport_width: document.documentElement.clientWidth,
        viewport_height: document.documentElement.clientHeight,

        // Location information
        timezone: new Date().getTimezoneOffset() / -60,
        user_language: navigator.language
      },

      // Page event
      page_render_duration,

      // Exit event
      exit_page_id,
      exit_first_paint,
      exit_dom_interactive,
      exit_dom_complete,
      exit_visit_duration,
      exit_scroll_length,

      // Link event
      link_url,

      // Search event
      search_query,
      search_context,

      // Navigate event
      navigate_label,

      // Survey event
      survey_vote,
      survey_comment,
      survey_email,

      // Experiment event
      experiment_name,
      experiment_variation,
      experiment_success
    })
  })
  const data = response.ok ? await response.json() : {}
  return data
}

export default async function initializeEvents () {
  await sendEvent({ type: 'page' })
}
