import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

import Cookies from '@/frame/components/lib/cookies'
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
// Server-side rendering reads the cookie in getMainContext and passes it as initial,
// so the first server and client render match with no post-mount flash. Without
// initial, for example outside the server-side data path, it falls back to the
// SSR-safe cookie lib on the client.

type ExpandedStore = Record<string, boolean>

type ExpandStateContextValue = {
  isExpanded: (key: string, onActiveChain: boolean) => boolean
  setExpanded: (key: string, expanded: boolean) => void
}

const ExpandStateContext = createContext<ExpandStateContextValue | null>(null)

function readStore(): ExpandedStore {
  try {
    const raw = Cookies.get(SIDEBAR_EXPANDED_COOKIE_NAME)
    return raw ? (JSON.parse(raw) as ExpandedStore) : {}
  } catch {
    return {}
  }
}

function persistStore(store: ExpandedStore) {
  try {
    Cookies.set(SIDEBAR_EXPANDED_COOKIE_NAME, JSON.stringify(store))
  } catch {
    // Cookie write failures degrade to non-persisted state instead of throwing.
  }
}

export function SidebarExpandStateProvider({
  children,
  initial,
}: {
  children: ReactNode
  initial?: ExpandedStore | null
}) {
  // Seed from the server-read cookie, or read the cookie client-side when initial is absent.
  const [store, setStore] = useState<ExpandedStore>(() => initial ?? readStore())

  const setExpanded = useCallback((key: string, expanded: boolean) => {
    setStore((prev) => {
      const next = { ...prev, [key]: expanded }
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
