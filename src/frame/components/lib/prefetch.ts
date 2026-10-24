import { useCallback } from 'react'
import type { useRouter } from 'next/router'

type Router = ReturnType<typeof useRouter>

// Keep one de-dupe set for the browser session so sidebar remounts do not refetch.
// The set can only grow to the distinct internal hrefs the user hovers or focuses.
const prefetchedHrefs = new Set<string>()

// Brand NavList and Breadcrumbs render plain anchors navigated through router.push,
// so Next.js will not prefetch them like next/link. This hook warms routes on
// hover and focus.
//
// The benefit stays small: articles use getServerSideProps, so router.prefetch
// fetches only the JS bundle, not data. Fastly already serves page data quickly,
// and articles share one [...restPage] bundle, so prefetch usually only helps the
// first cold visit. If a route moves to getStaticProps, this also fetches data.
// router.prefetch runs only in production. prefetchedHrefs keeps each href to one
// successful request; failed hrefs leave the set so a later hover can retry.
export function usePrefetchOnInteraction() {
  const prefetch = useCallback(async (router: Router, href: string) => {
    if (
      process.env.NODE_ENV !== 'production' ||
      !href.startsWith('/') ||
      prefetchedHrefs.has(href)
    ) {
      return
    }
    prefetchedHrefs.add(href)
    try {
      // hrefs already include the locale prefix, so locale: false matches click-site router.push.
      await router.prefetch(href, undefined, { locale: false })
    } catch {
      // Delete failed hrefs so transient chunk or network errors can retry like next/link.
      prefetchedHrefs.delete(href)
    }
  }, [])

  return prefetch
}
