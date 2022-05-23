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

function resetPageParams() {
  maxScrollY = 0
  pauseScrolling = false
  sentExit = false
}

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
  searchResult = 'searchResult',
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
  search_result_query?: string
  search_result_index?: number
  search_result_total?: number
  search_result_rank?: number
  search_result_url?: string
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

function getMetaContent(name: string) {
  const metaTag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement
  return metaTag?.content
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
      path_language: getMetaContent('path-language'),
      path_version: getMetaContent('path-version'),
      path_product: getMetaContent('path-product'),
      path_article: getMetaContent('path-article'),
      page_document_type: getMetaContent('page-document-type'),
      page_type: getMetaContent('page-type'),
      status: Number(getMetaContent('status') || 0),

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
      color_mode_preference: getColorModePreference(),
      os_preference: Cookies.get('osPreferred'),
    },

    ...props,
  }

  const blob = new Blob([JSON.stringify(body)], { type: 'application/json' })
  const endpoint = '/events'
  try {
    // Only send the beacon if the feature is not disabled in the user's browser
    // Even if the function exists, it can still throw an error from the call being blocked
    navigator?.sendBeacon(endpoint, blob)
  } catch {
    console.warn(`sendBeacon to '${endpoint}' failed.`)
  }

  return body
}

function getColorModePreference() {
  // color mode is set as attributes on <body>, we'll use that information
  // along with media query checking rather than parsing the cookie value
  // set by github.com
  let color_mode_preference = document.querySelector('body')?.dataset.colorMode

  if (color_mode_preference === 'auto') {
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      color_mode_preference += ':light'
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      color_mode_preference += ':dark'
    }
  }

  return color_mode_preference
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

function sendPage() {
  const pageEvent = sendEvent({ type: EventType.page })
  pageEventId = pageEvent?.context?.event_id
}

function sendExit() {
  if (sentExit) return
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

function initPageAndExitEvent() {
  sendPage() // Initial page hit

  // Regular page exits
  window.addEventListener('scroll', trackScroll)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      sendExit()
    }
  })

  // Client-side routing
  const pushState = history.pushState
  history.pushState = function (state, title, url) {
    // Don't trigger page events on query string or hash changes
    const newPath = url?.toString().replace(location.origin, '').split('?')[0]
    const shouldSendEvents = newPath !== location.pathname
    if (shouldSendEvents) {
      sendExit()
    }
    const result = pushState.call(history, state, title, url)
    if (shouldSendEvents) {
      sendPage()
      resetPageParams()
    }
    return result
  }
}

function initClipboardEvent() {
  ;['copy', 'cut', 'paste'].forEach((verb) => {
    document.documentElement.addEventListener(verb, () => {
      sendEvent({ type: EventType.clipboard, clipboard_operation: verb })
    })
  })
}

function initCopyButtonEvent() {
  document.documentElement.addEventListener('click', (evt) => {
    const target = evt.target as HTMLElement
    const button = target.closest('.js-btn-copy') as HTMLButtonElement
    if (!button) return
    sendEvent({ type: EventType.navigate, navigate_label: 'copy icon button' })
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

function initPrintEvent() {
  window.addEventListener('beforeprint', () => {
    sendEvent({ type: EventType.print })
  })
}

export default function initializeEvents() {
  initPageAndExitEvent() // must come first
  initLinkEvent()
  initClipboardEvent()
  initCopyButtonEvent()
  initPrintEvent()
  // survey event in ./survey.js
  // experiment event in ./experiment.js
  // search and search_result event in ./search.js
  // redirect event in middleware/record-redirect.js
  // preference event in ./display-tool-specific-content.js
}
