import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const ClientSideHighlightJS = dynamic(() => import('./ClientSideHighlightJS'), {
  ssr: false,
})

export function ClientSideHighlight() {
  const { asPath } = useRouter()
  // If the page contains `[data-highlight]` blocks, these pages need
  // syntax highlighting. But not every page needs i  t, so it's conditionally
  // lazy-loaded on the client.
  const [load, setLoad] = useState(false)
  useEffect(() => {
    // It doesn't need to use querySelector because all we care about is if
    // there is greater than zero of these in the DOM.
    // Note! This "core selector", which determines whether to bother
    // or not, needs to match what's used inside ClientSideHighlightJS.tsx
    if (!load && document.querySelector('[data-highlight]')) {
      setLoad(true)
    }

    // Important to depend on the current path because the first page you
    // load, before any client-side navigation, might not need it, but the
    // consecutive one does.
  }, [asPath])

  if (load) return <ClientSideHighlightJS />
  return null
}
