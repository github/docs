import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { describe, expect, test, vi } from 'vitest'

import {
  SidebarCollapseProvider,
  useSidebarCollapsed,
} from '@/frame/components/sidebar/SidebarCollapseContext'
import {
  SidebarExpandStateProvider,
  useSidebarExpandState,
} from '@/landings/components/useSidebarExpandState'
import { SIDEBAR_COLLAPSED_COOKIE_NAME, SIDEBAR_EXPANDED_COOKIE_NAME } from '@/frame/lib/constants'

// Serve saved state so the tests prove server markup ignores cookies even when readable.
vi.mock('@/frame/components/lib/cookies', () => ({
  default: {
    get: (name: string) =>
      ({
        [SIDEBAR_COLLAPSED_COOKIE_NAME]: 'true',
        [SIDEBAR_EXPANDED_COOKIE_NAME]: JSON.stringify({ '/en/saved': true }),
      })[name],
    set: () => undefined,
  },
}))

vi.mock('next/router', () => ({
  useRouter: () => ({ asPath: '/en/saved' }),
}))

function ExpandedProbe() {
  const [expanded] = useSidebarExpandState('/en/saved', false)
  return createElement('span', null, `expanded:${expanded}`)
}

function CollapsedProbe() {
  const { collapsed } = useSidebarCollapsed()
  return createElement('span', null, `collapsed:${collapsed}`)
}

describe('sidebar state server rendering', () => {
  test('expand state renders the default tree despite a saved cookie', () => {
    const html = renderToString(
      createElement(SidebarExpandStateProvider, null, createElement(ExpandedProbe)),
    )
    expect(html).toContain('expanded:false')
  })

  test('collapse state renders the rail open despite a saved cookie', () => {
    const html = renderToString(
      createElement(SidebarCollapseProvider, null, createElement(CollapsedProbe)),
    )
    expect(html).toContain('collapsed:false')
  })
})
