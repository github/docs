import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

import Cookies from '@/frame/components/lib/cookies'
import { SIDEBAR_EXPANDED_COOKIE_NAME } from '@/frame/lib/constants'

// Persists the docs sidebar's expand/collapse state across navigations. The tree
// remounts on every route change (SidebarNav renders <SidebarProduct key={asPath} />),
// so per-node open state can't live in ordinary component state — it's kept in a
// cookie, read once per mount, and shared through context.
//
// Semantics: a category is open when the user has explicitly toggled it (their
// choice wins and persists); otherwise it follows the active chain — the ancestor
// path of the current page auto-opens. Because brand NavList only auto-expands the
// aria-current chain for *uncontrolled* items, a controlled item must fold that in
// itself, which is what the `onActiveChain` fallback does here.
//
// SSR-safety: the cookie is read server-side in getMainContext and passed to the
// provider as `initial`, so the very first render (server + client hydration) already
// reflects the persisted state and markup matches — no post-mount flash. When rendered
// without an `initial` (e.g. outside the SSR data path), it falls back to reading the
// cookie client-side via the SSR-safe cookie lib.

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
    // Cookie writes may fail (disabled cookies, etc.) — degrade to non-persisted
    // state rather than throwing.
  }
}

export function SidebarExpandStateProvider({
  children,
  initial,
}: {
  children: ReactNode
  initial?: ExpandedStore | null
}) {
  // Seed from the SSR-read cookie value so server and first client render agree.
  // When no initial is supplied, fall back to reading the cookie client-side.
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

/**
 * Controlled expand state for one NavList category, backed by a cookie.
 * @param key           Stable per-node identifier (the node's locale-prefixed href).
 * @param onActiveChain Whether this node is an ancestor of the current page.
 * @returns `[expanded, onExpandedChange]` to spread onto a brand `NavList.Item`.
 */
export function useSidebarExpandState(
  key: string,
  onActiveChain: boolean,
): [boolean, (expanded: boolean) => void] {
  const ctx = useContext(ExpandStateContext)
  // Fallback keeps the tree interactive if a NavList is ever rendered outside the
  // provider: expand/collapse works via local state (seeded from the active chain),
  // just without cross-navigation persistence.
  const [localExpanded, setLocalExpanded] = useState(onActiveChain)
  const expanded = ctx ? ctx.isExpanded(key, onActiveChain) : localExpanded
  const onExpandedChange = useCallback(
    (next: boolean) => (ctx ? ctx.setExpanded(key, next) : setLocalExpanded(next)),
    [ctx, key],
  )
  return [expanded, onExpandedChange]
}
