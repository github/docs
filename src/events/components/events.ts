/* eslint-disable camelcase */
import Cookies from 'components/lib/cookies'
import { parseUserAgent } from './user-agent'

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
let previousPath: string | undefined

let hoveredUrls = new Set()

function resetPageParams() {
  sentExit = false
  pauseScrolling = false
  scrollPosition = 0
  scrollDirection = 1
  scrollFlipCount = 0
  maxScrollY = 0
  // Don't reset previousPath
  hoveredUrls = new Set()
}

// Temporary polyfill for crypto.randomUUID()
// Necessary for localhost development (doesn't have https://)
function uuidv4(): string {
  try {
    return crypto.randomUUID()
  } catch (err) {
    // https://stackoverflow.com/a/2117523
    return (<any>[1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: number) =>
      (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16),
    )
  }
}

export function getUserEventsId() {
  if (cookieValue) return cookieValue
  cookieValue = Cookies.get(COOKIE_NAME)
  if (cookieValue) return cookieValue
  cookieValue = uuidv4()
  Cookies.set(COOKIE_NAME, cookieValue)
  return cookieValue
}

export enum EventType {
  page = 'page',
  exit = 'exit',
  link = 'link',
  hover = 'hover',
  search = 'search',
  searchResult = 'searchResult',
  survey = 'survey',
  experiment = 'experiment',
  preference = 'preference',
  clipboard = 'clipboard',
  print = 'print',
}

type SendEventProps = {
  [EventType.clipboard]: {
    clipboard_operation: string
    clipboard_target?: string
  }
  [EventType.exit]: {
    exit_render_duration?: number
    exit_first_paint?: number
    exit_dom_interactive?: number
    exit_dom_complete?: number
    exit_visit_duration?: number
    exit_scroll_length?: number
    exit_scroll_flip?: number
  }
  [EventType.experiment]: {
    experiment_name: string
    experiment_variation: string
    experiment_success?: boolean
  }
  [EventType.hover]: {
    hover_url: string
    hover_samesite?: boolean
  }
  [EventType.link]: {
    link_url: string
    link_samesite?: boolean
    link_container?: string
  }
  [EventType.page]: {}
  [EventType.preference]: {
    preference_name: string
    preference_value: string
  }
  [EventType.print]: {}
  [EventType.search]: {
    search_query: string
    search_context?: string
  }
  [EventType.searchResult]: {
    search_result_query: string
    search_result_index: number
    search_result_total: number
    search_result_rank: number
    search_result_url: string
  }
  [EventType.survey]: {
    survey_token?: string // Honeypot, doesn't exist in schema
    survey_vote: boolean
    survey_comment?: string
    survey_email?: string
  }
}

function getMetaContent(name: string) {
  const metaTag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement
  return metaTag?.content
}

export function sendEvent<T extends EventType>({
  type,
  version = '1.0.0',
  ...props
}: {
  type: T
  version?: string
} & SendEventProps[T]) {
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
      referrer: getReferrer(document.referrer),
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
      code_display_preference: Cookies.get('annotate-mode'),
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

// Sometimes using the back button means the internal referrer path is not there,
// So this fills it in with a JavaScript variable
function getReferrer(documentReferrer: string) {
  if (!previousPath) return documentReferrer
  try {
    // new URL() throws an error if not a valid URL
    const referrerUrl = new URL(documentReferrer)
    if (!referrerUrl.pathname || referrerUrl.pathname === '/') {
      return referrerUrl.origin + previousPath
    }
  } catch (e) {}
  return documentReferrer
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
    previousPath = location.pathname
    const shouldSendEvents = newPath !== previousPath
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
    sendEvent({
      type: EventType.clipboard,
      clipboard_operation: 'copy',
      clipboard_target: '.js-btn-copy',
    })
  })
}

function initLinkEvent() {
  document.documentElement.addEventListener('click', (evt) => {
    const target = evt.target as HTMLElement
    const link = target.closest('a[href]') as HTMLAnchorElement
    if (!link) return
    const sameSite = link.origin === location.origin
    const container = ['header', 'nav', 'article', 'toc', 'footer'].find((name) =>
      target.closest(`[data-container="${name}"]`),
    )
    sendEvent({
      type: EventType.link,
      link_url: link.href,
      link_samesite: sameSite,
      link_container: container,
    })
  })
}

function initHoverEvent() {
  let timer: number | null = null
  document.documentElement.addEventListener('mouseover', (evt) => {
    const target = evt.target as HTMLElement
    const link = target.closest('a[href]') as HTMLAnchorElement | null

    if (!link) return

    // For hover events, we only want to record them for links inside the
    // content area.
    const mainContent = document.querySelector('#main-content') as HTMLElement | null
    if (!mainContent || !mainContent.contains(link)) return

    if (hoveredUrls.has(link.href)) return // Otherwise this is a flood of events

    if (timer) {
      window.clearTimeout(timer)
    }
    timer = window.setTimeout(() => {
      const sameSite = link.origin === location.origin
      hoveredUrls.add(link.href)
      sendEvent({
        type: EventType.hover,
        hover_url: link.href,
        hover_samesite: sameSite,
      })
    }, 500)
  })

  // Doesn't matter which link you hovered on that triggered a timer,
  // you're clearly not hovering over it any more.
  document.documentElement.addEventListener('mouseout', () => {
    if (timer) {
      window.clearTimeout(timer)
    }
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
}
