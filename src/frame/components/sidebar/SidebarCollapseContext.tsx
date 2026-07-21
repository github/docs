import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { useRouter } from 'next/router'

import Cookies from '@/frame/components/lib/cookies'
import { SIDEBAR_COLLAPSED_COOKIE_NAME } from '@/frame/lib/constants'

// Persists whether the desktop doc-tree rail is collapsed, and holds the
// (non-persisted) open state of the inline mobile nav. Mirrors the per-branch
// expand persistence in src/landings/components/useSidebarExpandState.tsx:
// collapsed state is kept in a cookie and shared through context so the
// secondary bar's toggle, the layout that renders the rail, and the mobile nav
// trigger all stay in sync.
//
// SSR-safety: the cookie is read server-side in getMainContext and passed to the
// provider as `initialCollapsed`, so the first render (server + client hydration)
// already reflects the persisted state and markup matches — no flash of the open
// rail before it collapses. When no initial is supplied, it falls back to reading
// the cookie client-side via the SSR-safe cookie lib.

function readCollapsed(): boolean {
  try {
    return Cookies.get(SIDEBAR_COLLAPSED_COOKIE_NAME) === 'true'
  } catch {
    return false
  }
}

function persistCollapsed(collapsed: boolean) {
  try {
    Cookies.set(SIDEBAR_COLLAPSED_COOKIE_NAME, String(collapsed))
  } catch {
    // Cookie writes may fail (disabled cookies, etc.) — degrade to non-persisted
    // state rather than throwing.
  }
}

type SidebarCollapseContextValue = {
  // Desktop: whether the left rail is collapsed (persisted).
  collapsed: boolean
  toggleCollapsed: () => void
  setCollapsed: (collapsed: boolean) => void
  // Mobile: whether the doc-tree nav is expanded inline (not persisted). The
  // nav renders in the page flow, same as desktop — not in a dialog overlay.
  mobileNavOpen: boolean
  toggleMobileNav: () => void
  closeMobileNav: () => void
}

const SidebarCollapseContext = createContext<SidebarCollapseContextValue | null>(null)

export function SidebarCollapseProvider({
  children,
  initialCollapsed,
}: {
  children: ReactNode
  initialCollapsed?: boolean
}) {
  const { asPath } = useRouter()
  // Seed from the SSR-read cookie value so server and first client render agree.
  // When no initial is supplied, fall back to reading the cookie client-side.
  const [collapsed, setCollapsedState] = useState(() => initialCollapsed ?? readCollapsed())
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const setCollapsed = useCallback((next: boolean) => {
    setCollapsedState(next)
    persistCollapsed(next)
  }, [])

  const toggleCollapsed = useCallback(() => {
    setCollapsedState((prev) => {
      const next = !prev
      persistCollapsed(next)
      return next
    })
  }, [])

  const toggleMobileNav = useCallback(() => setMobileNavOpen((prev) => !prev), [])
  const closeMobileNav = useCallback(() => setMobileNavOpen(false), [])

  // Client-side navigation doesn't unmount the inline mobile nav, so close it
  // when the route (or REST in-page hash) changes.
  useEffect(() => {
    setMobileNavOpen(false)
  }, [asPath])

  const value = useMemo(
    () => ({
      collapsed,
      toggleCollapsed,
      setCollapsed,
      mobileNavOpen,
      toggleMobileNav,
      closeMobileNav,
    }),
    [collapsed, toggleCollapsed, setCollapsed, mobileNavOpen, toggleMobileNav, closeMobileNav],
  )

  return <SidebarCollapseContext.Provider value={value}>{children}</SidebarCollapseContext.Provider>
}

/**
 * Read/toggle the desktop rail's collapsed state and the inline mobile nav's
 * open state. Falls back to a no-op expanded/closed state if used outside the
 * provider.
 */
export function useSidebarCollapsed(): SidebarCollapseContextValue {
  const ctx = useContext(SidebarCollapseContext)
  if (!ctx) {
    return {
      collapsed: false,
      toggleCollapsed: () => {},
      setCollapsed: () => {},
      mobileNavOpen: false,
      toggleMobileNav: () => {},
      closeMobileNav: () => {},
    }
  }
  return ctx
}
