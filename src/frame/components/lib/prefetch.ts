import { useCallback } from 'react'
import type { useRouter } from 'next/router'

type Router = ReturnType<typeof useRouter>

// Session-lived de-dupe set. Module scope (not a per-component useRef) so it
// survives the sidebar's per-navigation remount — otherwise the cache would
// reset every nav and "de-duped per href" would only hold within a single page.
// Bounded by the number of distinct internal hrefs the user hovers/focuses.
const prefetchedHrefs = new Set<string>()

// Brand NavList/Breadcrumbs items render plain <a>s navigated via router.push,
// so Next.js doesn't prefetch their destinations the way next/link would. This
// hook warms a route on hover/focus.
//
// Scope of the benefit here is small on purpose: every article is a
// getServerSideProps route, and router.prefetch only fetches the JS bundle for
// those (not the getServerSideProps data), while page data is already served fast
// from the Fastly edge. All articles also share one [...restPage] bundle, so after
// the first navigation there's usually nothing left to fetch. It still helps the
// first cold visit, and would fetch data too if a route ever moves to
// getStaticProps. router.prefetch is production-only (no prefetch in dev); we
// de-dupe per href so re-entering a link doesn't re-issue.
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
      // hrefs already include the locale prefix (e.g. /en/...), so disable Next.js
      // locale handling to match the router.push calls at the click sites.
      await router.prefetch(href, undefined, { locale: false })
    } catch {
      // A transient chunk/network failure shouldn't permanently suppress retries;
      // un-mark so a later hover/focus can try again (mirrors next/link).
      prefetchedHrefs.delete(href)
    }
  }, [])

  return prefetch
}
