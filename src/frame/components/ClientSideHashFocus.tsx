import { useEffect } from 'react'

// When an in-page anchor link is clicked (e.g. href="#section-id"),
// browsers scroll to the target but may not move keyboard focus to it.
// This component listens for hash changes and programmatically focuses
// the target element so screen reader and keyboard users land at the
// correct position.
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

    // Handle initial page load with a hash (e.g. direct link to
    // docs.github.com/en/discussions#guides-2)
    handleHashChange()

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return null
}
