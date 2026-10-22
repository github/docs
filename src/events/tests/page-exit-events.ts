import type { EventEmitter } from 'node:events'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

import { EventType } from '../types'

type SentEvent = { type: string; context: Record<string, unknown>; [key: string]: unknown }

const sentEvents = vi.hoisted(() => [] as SentEvent[])

vi.mock('next/router', async () => {
  const { EventEmitter } = await import('node:events')
  return { Router: { events: new EventEmitter() } }
})

vi.mock('@/events/components/hydro-analytics', () => ({
  getOctoClientId: () => undefined,
  sendHydroAnalyticsEvent: (body: SentEvent) => sentEvents.push(body),
}))

vi.mock('@/frame/components/lib/cookies', () => ({
  default: { get: () => undefined, set: () => undefined },
}))

const ORIGIN = 'https://docs.github.com'

let mutationCallback: (mutations: unknown[]) => void
const location = { origin: ORIGIN, hostname: 'docs.github.com', pathname: '', search: '', hash: '' }

function stubBrowser(pathname: string, referrer: string) {
  const noop = () => undefined
  location.pathname = pathname
  vi.stubGlobal('location', location)
  vi.stubGlobal('window', {
    addEventListener: noop,
    screen: { width: 1280, height: 800 },
    devicePixelRatio: 1,
  })
  vi.stubGlobal('navigator', { userAgent: 'Mozilla/5.0', language: 'en', sendBeacon: noop })
  vi.stubGlobal('document', {
    referrer,
    title: 'GitHub Docs',
    visibilityState: 'visible',
    addEventListener: noop,
    querySelector: () => null,
    getElementsByTagName: () => [{}],
    documentElement: { clientWidth: 1280, clientHeight: 800, addEventListener: noop },
  })
  vi.spyOn(performance, 'getEntriesByType').mockImplementation(
    (type: string) =>
      (type === 'navigation'
        ? [{ requestStart: 100, responseEnd: 400, domInteractive: 800, domComplete: 1200 }]
        : [{ name: 'first-contentful-paint', startTime: 600 }]) as ReturnType<
        typeof performance.getEntriesByType
      >,
  )
  vi.stubGlobal(
    'MutationObserver',
    class {
      constructor(callback: (mutations: unknown[]) => void) {
        mutationCallback = callback
      }
      observe() {}
      disconnect() {}
    },
  )
}

async function startSession(pathname: string, referrer = '') {
  stubBrowser(pathname, referrer)
  const { initializeEvents } = await import('@/events/components/events')
  const { Router } = await import('next/router')
  initializeEvents()

  return async function navigate(nextPath: string) {
    Router.events.emit('routeChangeStart', nextPath, { shallow: false })
    location.pathname = nextPath
    Router.events.emit('routeChangeComplete', nextPath, { shallow: false })
    mutationCallback([{ target: { nodeName: 'META' }, addedNodes: [], removedNodes: [] }])
    await vi.advanceTimersByTimeAsync(0)
  }
}

function eventsOfType(type: EventType) {
  return sentEvents.filter((event) => event.type === type)
}

describe('page and exit events across client-side navigation', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.resetModules()
    sentEvents.length = 0
  })

  afterEach(async () => {
    // The next/router mock survives resetModules, so drop the listeners of earlier events modules.
    const { Router } = await import('next/router')
    ;(Router.events as unknown as EventEmitter).removeAllListeners()
    vi.useRealTimers()
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  test('exit_visit_duration measures time on the current page', async () => {
    const navigate = await startSession('/en/get-started')
    await vi.advanceTimersByTimeAsync(60_000)
    await navigate('/en/actions')
    await vi.advanceTimersByTimeAsync(5_000)
    await navigate('/en/pages')

    const exits = eventsOfType(EventType.exit)
    expect(exits.map((event) => event.context.path)).toEqual(['/en/get-started', '/en/actions'])
    expect(exits.map((event) => event.exit_visit_duration)).toEqual([60, 5])
  })

  test('referrer is the previous docs URL after client-side navigation', async () => {
    const navigate = await startSession('/en/get-started', `${ORIGIN}/en/search`)
    await navigate('/en/actions')
    await navigate('/en/pages')

    expect(eventsOfType(EventType.page).map((event) => event.context.referrer)).toEqual([
      `${ORIGIN}/en/search`,
      `${ORIGIN}/en/get-started`,
      `${ORIGIN}/en/actions`,
    ])
    expect(eventsOfType(EventType.exit).map((event) => event.context.referrer)).toEqual([
      `${ORIGIN}/en/search`,
      `${ORIGIN}/en/get-started`,
    ])
  })

  test('referrer fills in the previous docs URL when the landing page had none', async () => {
    const navigate = await startSession('/en/get-started')
    await navigate('/en/actions')

    expect(eventsOfType(EventType.page).map((event) => event.context.referrer)).toEqual([
      '',
      `${ORIGIN}/en/get-started`,
    ])
  })

  test('navigation timings appear only on the full page load exit', async () => {
    const navigate = await startSession('/en/get-started')
    await navigate('/en/actions')
    await navigate('/en/pages')

    const [landingExit, softExit] = eventsOfType(EventType.exit)
    expect(landingExit).toMatchObject({
      exit_render_duration: 0.3,
      exit_first_paint: 0.6,
      exit_dom_interactive: 0.8,
      exit_dom_complete: 1.2,
    })
    expect(softExit.exit_render_duration).toBeUndefined()
    expect(softExit.exit_first_paint).toBeUndefined()
    expect(softExit.exit_dom_interactive).toBeUndefined()
    expect(softExit.exit_dom_complete).toBeUndefined()
  })
})
