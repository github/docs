import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { useRouter } from 'next/router'

import Cookies from '@/frame/components/lib/cookies'
import { SIDEBAR_COLLAPSED_COOKIE_NAME } from '@/frame/lib/constants'

// Keep two sidebar state channels separate. collapsed persists in a cookie and
// syncs the desktop toggle with the rail layout, mirroring
// src/landings/components/useSidebarExpandState.tsx. mobileNavOpen never persists;
// the mobile trigger reads it for inline nav expansion. getMainContext reads the
// cookie server-side and passes initialCollapsed, so server markup and hydration
// match. Without an initial value, the client falls back to the SSR-safe cookie helper.

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
    // Disabled cookies must degrade to non-persisted state instead of throwing.
  }
}

type SidebarCollapseContextValue = {
  // Desktop rail collapse persists in a cookie.
  collapsed: boolean
  toggleCollapsed: () => void
  setCollapsed: (collapsed: boolean) => void
  // Mobile inline nav state never persists, and it stays in page flow rather than a dialog.
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
  // Prefer the server-read cookie value so server markup and hydration match.
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

  // Close the mounted inline mobile nav across client-side route and REST hash changes.
  useEffect(() => {
    setMobileNavOpen(false)
  }, [asPath])

  // Keep 1012px aligned with SidebarNav's lg breakpoint and DefaultLayout's content visibility.
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mql = window.matchMedia('(min-width: 1012px)')
    const handle = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) setMobileNavOpen(false)
    }
    handle(mql)
    mql.addEventListener('change', handle)
    return () => mql.removeEventListener('change', handle)
  }, [])

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

// Read and toggle sidebar state. Outside the provider, return no-op expanded and closed state.
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
