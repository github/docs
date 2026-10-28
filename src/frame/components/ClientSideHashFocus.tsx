import { useEffect } from 'react'

// location.hash percent-encodes non-ASCII characters, but element ids hold the raw text.
export function decodeHash(hash: string): string {
  const value = hash.startsWith('#') ? hash.slice(1) : hash
  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}

// Match the raw fragment first, then the decoded one, as browsers do when scrolling.
export function findHashTarget(
  root: Pick<Document, 'getElementById'>,
  locationHash: string,
): HTMLElement | null {
  const raw = locationHash.startsWith('#') ? locationHash.slice(1) : locationHash
  if (!raw) return null
  return root.getElementById(raw) || root.getElementById(decodeHash(locationHash))
}

// Hash links such as href="#section-id" can scroll without moving keyboard focus.
// Focusing the target keeps screen reader and keyboard users at the anchor.
export function ClientSideHashFocus() {
  useEffect(() => {
    const handleHashChange = () => {
      const target = findHashTarget(document, window.location.hash)
      if (target) {
        target.focus({ preventScroll: true })
      }
    }

    // Direct links such as /en/discussions#guides-2 need this before hashchange fires.
    handleHashChange()

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return null
}
