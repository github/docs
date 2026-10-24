import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { useRouter } from 'next/router'

import Cookies from '@/frame/components/lib/cookies'
import { useIsHydrating } from '@/frame/components/hooks/useIsHydrating'
import { SIDEBAR_COLLAPSED_COOKIE_NAME } from '@/frame/lib/constants'

// Keep two sidebar state channels separate. collapsed persists in a cookie and
// syncs the desktop toggle with the rail layout, mirroring
// src/landings/components/useSidebarExpandState.tsx. mobileNavOpen never persists;
// the mobile trigger reads it for inline nav expansion. Page HTML is publicly cached
// and does not vary on Cookie, so the server and hydration render the rail open. The
// cookie applies in the re-render right after hydration, and client-side mounts read it
// on their first render.

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

export function SidebarCollapseProvider({ children }: { children: ReactNode }) {
  const { asPath } = useRouter()
  const hydrating = useIsHydrating()
  const saved = useMemo(() => !hydrating && readCollapsed(), [hydrating])
  // Stays null until the reader toggles, so the saved state shows after hydration.
  const [chosen, setChosen] = useState<boolean | null>(null)
  const collapsed = chosen ?? saved
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const setCollapsed = useCallback((next: boolean) => {
    setChosen(next)
    persistCollapsed(next)
  }, [])

  const toggleCollapsed = useCallback(() => setCollapsed(!collapsed), [collapsed, setCollapsed])

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
