/* eslint-disable camelcase */
import Cookies from 'js-cookie'
import { parseUserAgent } from '../../components/lib/user-agent'

const COOKIE_NAME = '_docs-events'

const startVisitTime = Date.now()

let initialized = false
let cookieValue: string | undefined
let pageEventId: string | undefined

let sentExit = false
let pauseScrolling = false
let scrollPosition = 0
let scrollDirection = 1
let scrollFlipCount = 0
let maxScrollY = 0

let hoveredUrls = new Set()

function resetPageParams() {
  sentExit = false
  pauseScrolling = false
  scrollPosition = 0
  scrollDirection = 1
  scrollFlipCount = 0
  maxScrollY = 0
  hoveredUrls = new Set()
}

// Temporary polyfill for crypto.randomUUID()
function uuidv4(): string {
  try {
    return crypto.randomUUID()
  } catch (err) {
    // https://stackoverflow.com/a/2117523
    return (<any>[1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: number) =>
      (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
    )
  }
}

export function getUserEventsId() {
  if (cookieValue) return cookieValue
  cookieValue = Cookies.get(COOKIE_NAME)
  if (cookieValue) return cookieValue
  cookieValue = uuidv4()
  Cookies.set(COOKIE_NAME, cookieValue, {
    secure: document.location.protocol !== 'http:',
    sameSite: 'strict',
    expires: 365,
  })
  return cookieValue
}

export enum EventType {
  page = 'page',
  exit = 'exit',
  link = 'link',
  hover = 'hover',
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
  exit_scroll_flip?: number
  link_url?: string
  link_samesite?: boolean
  hover_url?: string
  hover_samesite?: boolean
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
  const endpoint = '/api/events'
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

  // Calculate where we are on the page
  const scrollPixels = window.scrollY + window.innerHeight
  const newScrollPosition = scrollPixels / document.documentElement.scrollHeight

  // Count scroll flips
  const newScrollDirection = Math.sign(newScrollPosition - scrollPosition)
  if (newScrollDirection !== scrollDirection) scrollFlipCount++

  // Update maximum scroll position reached
  if (newScrollPosition > maxScrollY) maxScrollY = newScrollPosition

  // Update before the next event
  scrollDirection = newScrollDirection
  scrollPosition = newScrollPosition
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
    exit_scroll_flip: scrollFlipCount,
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
    const link = target.closest('a[href]') as HTMLAnchorElement
    if (!link) return
    const sameSite = link.origin === location.origin
    sendEvent({
      type: EventType.link,
      link_url: link.href,
      link_samesite: sameSite,
    })
  })
}

function initHoverEvent() {
  document.documentElement.addEventListener('mouseover', (evt) => {
    const target = evt.target as HTMLElement
    const link = target.closest('a[href]') as HTMLAnchorElement
    if (!link) return
    if (hoveredUrls.has(link.href)) return // Otherwise this is a flood of events
    const sameSite = link.origin === location.origin
    hoveredUrls.add(link.href)
    sendEvent({
      type: EventType.hover,
      hover_url: link.href,
      hover_samesite: sameSite,
    })
  })
}

function initPrintEvent() {
  window.addEventListener('beforeprint', () => {
    sendEvent({ type: EventType.print })
  })
}

export function initializeEvents() {
  if (initialized) return
  initialized = true
  initPageAndExitEvent() // must come first
  initLinkEvent()
  initHoverEvent()
  initClipboardEvent()
  initCopyButtonEvent()
  initPrintEvent()
  // survey event in ./survey.js
  // experiment event in ./experiment.js
  // search and search_result event in ./search.js
  // redirect event in middleware/record-redirect.js
  // preference event in ./display-tool-specific-content.js
}
