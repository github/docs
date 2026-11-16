import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

import Cookies from '@/frame/components/lib/cookies'
import { useIsHydrating } from '@/frame/components/hooks/useIsHydrating'
import { SIDEBAR_EXPANDED_COOKIE_NAME } from '@/frame/lib/constants'

// Persists the docs sidebar's expand/collapse state across navigations. The tree
// remounts on every route change, so per-node open state cannot live in component state.
// SidebarNav renders SidebarProduct keyed by asPath, so state is kept in a
// cookie, read once per mount, and shared through context.
//
// Semantics: a category is open when the user has explicitly toggled it (their
// choice wins and persists); otherwise it follows the active chain: the ancestor
// path of the current page auto-opens. Because brand NavList only auto-expands the
// aria-current chain for uncontrolled items, a controlled item must fold that in
// itself, which is what the onActiveChain fallback does here.
//
// Page HTML and _next/data are publicly cached and do not vary on Cookie, so the
// server and hydration render the default state. The cookie applies in the re-render
// right after hydration, and client-side mounts read it on their first render.
// SidebarProduct waits for the same useIsHydrating flip to center the saved tree.

type ExpandedStore = Record<string, boolean>

type ExpandStateContextValue = {
  isExpanded: (key: string, onActiveChain: boolean) => boolean
  setExpanded: (key: string, expanded: boolean) => void
}

const ExpandStateContext = createContext<ExpandStateContextValue | null>(null)

// A shared empty store keeps the context value stable when nothing is saved.
const EMPTY_STORE: ExpandedStore = {}

function readStore(): ExpandedStore {
  try {
    const raw = Cookies.get(SIDEBAR_EXPANDED_COOKIE_NAME)
    const parsed = raw ? JSON.parse(raw) : null
    return parsed && typeof parsed === 'object' ? (parsed as ExpandedStore) : EMPTY_STORE
  } catch {
    return EMPTY_STORE
  }
}

function persistStore(store: ExpandedStore) {
  try {
    Cookies.set(SIDEBAR_EXPANDED_COOKIE_NAME, JSON.stringify(store))
  } catch {
    // Cookie write failures degrade to non-persisted state instead of throwing.
  }
}

export function SidebarExpandStateProvider({ children }: { children: ReactNode }) {
  const hydrating = useIsHydrating()
  const saved = useMemo(() => (hydrating ? EMPTY_STORE : readStore()), [hydrating])
  // Stays null until the reader toggles a category, so the saved store shows after hydration.
  const [edited, setEdited] = useState<ExpandedStore | null>(null)
  const store = edited ?? saved

  const setExpanded = useCallback((key: string, expanded: boolean) => {
    setEdited((prev) => {
      const next = { ...(prev ?? readStore()), [key]: expanded }
      persistStore(next)
      return next
    })
  }, [])

  const isExpanded = useCallback(
    (key: string, onActiveChain: boolean) => (key in store ? store[key] : onActiveChain),
    [store],
  )

  const value = useMemo(() => ({ isExpanded, setExpanded }), [isExpanded, setExpanded])

  return <ExpandStateContext.Provider value={value}>{children}</ExpandStateContext.Provider>
}

// Controls one NavList category by its stable locale-prefixed href and active-chain state.
// Returns expanded state and the NavList.Item change handler, backed by a cookie.
export function useSidebarExpandState(
  key: string,
  onActiveChain: boolean,
): [boolean, (expanded: boolean) => void] {
  const ctx = useContext(ExpandStateContext)
  // Outside the provider, local state keeps the tree interactive without persistence.
  const [localExpanded, setLocalExpanded] = useState(onActiveChain)
  const expanded = ctx ? ctx.isExpanded(key, onActiveChain) : localExpanded
  const onExpandedChange = useCallback(
    (next: boolean) => (ctx ? ctx.setExpanded(key, next) : setLocalExpanded(next)),
    [ctx, key],
  )
  return [expanded, onExpandedChange]
}
