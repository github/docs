import type { MittEmitter } from 'next/dist/shared/lib/mitt'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

import { EventType } from '@/events/types'

type SentEvent = { type: string; context: Record<string, unknown> }
type FakeObserver = { callback: (mutations: unknown[]) => void; disconnected: boolean }

const state = vi.hoisted(() => ({
  sentEvents: [] as SentEvent[],
  observers: [] as FakeObserver[],
  routerEvents: undefined as MittEmitter<string> | undefined,
}))

vi.mock('next/router', () => ({
  Router: {
    get events() {
      return state.routerEvents
    },
  },
}))

vi.mock('@/events/components/hydro-analytics', () => ({
  getOctoClientId: () => undefined,
  sendHydroAnalyticsEvent: (body: SentEvent) => state.sentEvents.push(body),
}))

vi.mock('@/events/components/experiments/experiment', () => ({
  getExperimentVariationForContext: () => '',
}))

vi.mock('@/frame/components/hooks/useHasAccount', () => ({
  isLoggedIn: () => false,
}))

vi.mock('@/frame/components/lib/cookies', () => ({
  default: { get: () => undefined, set: () => undefined },
}))

const location = {
  origin: 'https://docs.github.com',
  hostname: 'docs.github.com',
  href: '',
  pathname: '',
  search: '',
  hash: '',
}

function stubBrowser(pathname: string) {
  const noop = () => undefined
  location.pathname = pathname
  vi.stubGlobal('location', location)
  vi.stubGlobal('window', {
    addEventListener: noop,
    screen: { width: 1280, height: 800 },
    devicePixelRatio: 1,
    outerHeight: 800,
    innerHeight: 800,
  })
  vi.stubGlobal('navigator', { userAgent: 'Mozilla/5.0', language: 'en', sendBeacon: noop })
  vi.stubGlobal('document', {
    referrer: '',
    title: 'GitHub Docs',
    visibilityState: 'visible',
    addEventListener: noop,
    querySelector: () => null,
    getElementsByTagName: () => [{}],
    documentElement: { clientWidth: 1280, clientHeight: 800, addEventListener: noop },
  })
  vi.stubGlobal(
    'MutationObserver',
    class {
      record: FakeObserver
      constructor(callback: (mutations: unknown[]) => void) {
        this.record = { callback, disconnected: false }
        state.observers.push(this.record)
      }
      observe() {}
      disconnect() {
        this.record.disconnected = true
      }
    },
  )
}

async function startSession(pathname: string) {
  stubBrowser(pathname)
  const { initializeEvents } = await import('@/events/components/events')
  initializeEvents()
}

function emit(type: string, ...args: unknown[]) {
  state.routerEvents!.emit(type, ...args)
}

async function completeRoute(pathname: string) {
  location.pathname = pathname
  emit('routeChangeComplete', pathname, { shallow: false })
  for (const observer of state.observers.filter((o) => !o.disconnected)) {
    observer.callback([{ target: { nodeName: 'META' }, addedNodes: [], removedNodes: [] }])
  }
  await vi.advanceTimersByTimeAsync(0)
}

function cancelRoute(pathname: string) {
  emit(
    'routeChangeError',
    Object.assign(new Error('Route Cancelled'), { cancelled: true }),
    pathname,
  )
}

function sentSummary() {
  return state.sentEvents
    .filter((event) => event.type === EventType.page || event.type === EventType.exit)
    .map((event) => `${event.type} ${event.context.path}`)
}

describe('page events across cancelled client-side navigation', () => {
  beforeEach(async () => {
    vi.useFakeTimers()
    vi.resetModules()
    const { default: mitt } = await import('next/dist/shared/lib/mitt')
    state.routerEvents = mitt()
    state.sentEvents.length = 0
    state.observers.length = 0
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.unstubAllGlobals()
  })

  test('sends one page event when a second navigation cancels the first', async () => {
    await startSession('/en/start')
    emit('routeChangeStart', '/en/a', { shallow: false })
    cancelRoute('/en/a')
    emit('routeChangeStart', '/en/b', { shallow: false })
    await completeRoute('/en/b')

    expect(sentSummary()).toEqual(['page /en/start', 'exit /en/start', 'page /en/b'])
  })

  test('sends one page event when a double click restarts the same navigation', async () => {
    await startSession('/en/start')
    emit('routeChangeStart', '/en/a', { shallow: false })
    cancelRoute('/en/a')
    emit('routeChangeStart', '/en/a', { shallow: false })
    await completeRoute('/en/a')

    expect(sentSummary()).toEqual(['page /en/start', 'exit /en/start', 'page /en/a'])
  })

  test('keeps the pending page event when the new navigation returns to the current path', async () => {
    await startSession('/en/start')
    emit('routeChangeStart', '/en/a', { shallow: false })
    cancelRoute('/en/a')
    emit('routeChangeStart', '/en/start', { shallow: false })
    await completeRoute('/en/start')

    expect(sentSummary()).toEqual(['page /en/start', 'exit /en/start', 'page /en/start'])
  })
})
