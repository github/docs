/* eslint-disable camelcase */
import { v4 as uuidv4 } from 'uuid'
import Cookies from 'js-cookie'
import getCsrf from './get-csrf'
import parseUserAgent from './user-agent'

const COOKIE_NAME = '_docs-events'

const startVisitTime = Date.now()

let cookieValue: string | undefined
let pageEventId: string | undefined
let maxScrollY = 0
let pauseScrolling = false
let sentExit = false

export function getUserEventsId() {
  if (cookieValue) return cookieValue
  cookieValue = Cookies.get(COOKIE_NAME)
  if (cookieValue) return cookieValue
  cookieValue = uuidv4()
  Cookies.set(COOKIE_NAME, cookieValue, {
    secure: true,
    sameSite: 'strict',
    expires: 365,
  })
  return cookieValue
}

export enum EventType {
  page = 'page',
  exit = 'exit',
  link = 'link',
  search = 'search',
  navigate = 'navigate',
  survey = 'survey',
  experiment = 'experiment',
  preference = 'preference',
  clipboard = 'clipboard',
  print = 'print',
}

type SendEventProps = {
  type: EventType
  version?: string
  exit_render_duration?: number
  exit_first_paint?: number
  exit_dom_interactive?: number
  exit_dom_complete?: number
  exit_visit_duration?: number
  exit_scroll_length?: number
  link_url?: string
  search_query?: string
  search_context?: string
  navigate_label?: string
  survey_token?: string // Honeypot, doesn't exist in schema
  survey_vote?: boolean
  survey_comment?: string
  survey_email?: string
  experiment_name?: string
  experiment_variation?: string
  experiment_success?: boolean
  clipboard_operation?: string
  preference_name?: string
  preference_value?: string
}

export function sendEvent({ type, version = '1.0.0', ...props }: SendEventProps) {
  const body = {
    _csrf: getCsrf(),

    type,

    context: {
      // Primitives
      event_id: uuidv4(),
      user: getUserEventsId(),
      version,
      created: new Date().toISOString(),
      page_event_id: pageEventId,

      // Content information
      path: location.pathname,
      hostname: location.hostname,
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
      user_language: navigator.language,

      // Preference information
      application_preference: Cookies.get('toolPreferred'),
    },

    ...props,
  }
  const blob = new Blob([JSON.stringify(body)], { type: 'application/json' })
  navigator.sendBeacon('/events', blob)
  return body
}

function getPerformance() {
  const paint = performance
    ?.getEntriesByType('paint')
    ?.find(({ name }) => name === 'first-contentful-paint')
  const nav = performance?.getEntriesByType('navigation')?.[0] as
    | PerformanceNavigationTiming
    | undefined
  return {
    firstContentfulPaint: paint ? paint.startTime / 1000 : undefined,
    domInteractive: nav ? nav.domInteractive / 1000 : undefined,
    domComplete: nav ? nav.domComplete / 1000 : undefined,
    render: nav ? (nav.responseEnd - nav.requestStart) / 1000 : undefined,
  }
}

function trackScroll() {
  // Throttle the calculations to no more than five per second
  if (pauseScrolling) return
  pauseScrolling = true
  setTimeout(() => {
    pauseScrolling = false
  }, 200)

  // Update maximum scroll position reached
  const scrollPixels = window.scrollY + window.innerHeight
  const scrollPosition = scrollPixels / document.documentElement.scrollHeight
  if (scrollPosition > maxScrollY) maxScrollY = scrollPosition
}

function sendExit() {
  if (sentExit) return
  if (document.visibilityState !== 'hidden') return
  sentExit = true
  const { render, firstContentfulPaint, domInteractive, domComplete } = getPerformance()
  return sendEvent({
    type: EventType.exit,
    exit_render_duration: render,
    exit_first_paint: firstContentfulPaint,
    exit_dom_interactive: domInteractive,
    exit_dom_complete: domComplete,
    exit_visit_duration: (Date.now() - startVisitTime) / 1000,
    exit_scroll_length: maxScrollY,
  })
}

function initPageEvent() {
  const pageEvent = sendEvent({ type: EventType.page })
  pageEventId = pageEvent?.context?.event_id
}

function initClipboardEvent() {
  ;['copy', 'cut', 'paste'].forEach((verb) => {
    document.documentElement.addEventListener(verb, () => {
      sendEvent({ type: EventType.clipboard, clipboard_operation: verb })
    })
  })
}

function initLinkEvent() {
  document.documentElement.addEventListener('click', (evt) => {
    const target = evt.target as HTMLElement
    const link = target.closest('a[href^="http"]') as HTMLAnchorElement
    if (!link) return
    sendEvent({
      type: EventType.link,
      link_url: link.href,
    })
  })
}

function initExitEvent() {
  window.addEventListener('scroll', trackScroll)
  document.addEventListener('visibilitychange', sendExit)
}

function initNavigateEvent() {
  if (!document.querySelector('.sidebar-products')) return

  Array.from(document.querySelectorAll('.sidebar-products details')).forEach((details) =>
    details.addEventListener('toggle', (evt) => {
      const target = evt.target as HTMLDetailsElement
      sendEvent({
        type: EventType.navigate,
        navigate_label: `details ${target.open ? 'open' : 'close'}: ${
          target?.querySelector('summary')?.innerText
        }`,
      })
    })
  )

  document.querySelector('.sidebar-products')?.addEventListener('click', (evt) => {
    const target = evt.target as HTMLElement
    const link = target.closest('a') as HTMLAnchorElement
    if (!link) return
    sendEvent({
      type: EventType.navigate,
      navigate_label: `link: ${link.href}`,
    })
  })
}

export default function initializeEvents() {
  initPageEvent() // must come first
  initExitEvent()
  initLinkEvent()
  initClipboardEvent()
  initNavigateEvent()
  // print event in ./print.js
  // survey event in ./survey.js
  // experiment event in ./experiment.js
  // search event in ./search.js
  // redirect event in middleware/record-redirect.js
  // preference event in ./display-tool-specific-content.js
}
