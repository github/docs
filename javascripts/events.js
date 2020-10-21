/* eslint-disable camelcase */
import { v4 as uuidv4 } from 'uuid'
import Cookies from 'js-cookie'
import getCsrf from './get-csrf'
import parseUserAgent from './user-agent'

const COOKIE_NAME = '_docs-events'

const startVisitTime = Date.now()

let cookieValue
let pageEventId
let maxScrollY = 0
let pauseScrolling = false
let sentExit = false

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
  const body = {
    _csrf: getCsrf(),

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
      // os, os_version, browser, browser_version:
      ...parseUserAgent(),
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
  }
  const blob = new Blob([JSON.stringify(body)], { type: 'application/json' })
  navigator.sendBeacon('/events', blob)
  return body
}

function getPerformance () {
  const paint = performance?.getEntriesByType('paint')?.find(
    ({ name }) => name === 'first-contentful-paint'
  )
  const nav = performance?.getEntriesByType('navigation')?.[0]
  return {
    firstContentfulPaint: paint ? paint / 1000 : undefined,
    domInteractive: nav ? nav.domInteractive / 1000 : undefined,
    domComplete: nav ? nav.domComplete / 1000 : undefined,
    render: nav ? (nav.responseEnd - nav.requestStart) / 1000 : undefined
  }
}

function trackScroll () {
  // Throttle the calculations to no more than five per second
  if (pauseScrolling) return
  pauseScrolling = true
  setTimeout(() => { pauseScrolling = false }, 200)

  // Update maximum scroll position reached
  const scrollPosition = (
    (window.scrollY + window.innerHeight) /
    document.documentElement.scrollHeight
  )
  if (scrollPosition > maxScrollY) maxScrollY = scrollPosition
}

async function sendExit () {
  if (sentExit) return
  if (document.visibilityState !== 'hidden') return
  if (!pageEventId) return
  sentExit = true
  const {
    firstContentfulPaint,
    domInteractive,
    domComplete
  } = getPerformance()
  return sendEvent({
    type: 'exit',
    exit_page_id: pageEventId,
    exit_first_paint: firstContentfulPaint,
    exit_dom_interactive: domInteractive,
    exit_dom_complete: domComplete,
    exit_visit_duration: (Date.now() - startVisitTime) / 1000,
    exit_scroll_length: maxScrollY
  })
}

export default async function initializeEvents () {
  // Page event
  const { render } = getPerformance()
  const pageEvent = await sendEvent({
    type: 'page',
    page_render_duration: render
  })

  // Exit event
  pageEventId = pageEvent?.context?.event_id
  window.addEventListener('scroll', trackScroll)
  document.addEventListener('visibilitychange', sendExit)
}
