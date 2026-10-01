import { useEffect } from 'react'

// Hash links such as href="#section-id" can scroll without moving keyboard focus.
// Focusing the target keeps screen reader and keyboard users at the anchor.
export function ClientSideHashFocus() {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (!hash) return

      const target = document.getElementById(hash)
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
