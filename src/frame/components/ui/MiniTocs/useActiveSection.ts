import { createContext, createElement, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

import {
  classifyToggleClass,
  isContentVisible,
  useSelection,
} from '@/tools/components/SelectionContext'
import { flatten, useMiniTocItems } from './MiniTocShared'

// Shared active-section state. The three TOC consumers (the right-rail drawer and
// the two collapsed OverviewMenu slots) all render on the same page, so a single
// provider computes the active heading once and every consumer subscribes to it —
// avoiding three redundant IntersectionObservers + scroll/resize listeners.
const ActiveSectionContext = createContext<string>('')

// Computes which article section heading is currently scrolled into view so the
// mini-TOC can accent the active item and label the collapsed dropdown. Before the
// reader has scrolled past the first heading, the value is '' which callers treat
// as the "Overview" (top-of-article) default.
export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const miniTocItems = useMiniTocItems()
  const { platform: selectedPlatform, tool } = useSelection()
  const [activeHref, setActiveHref] = useState('')

  useEffect(() => {
    // Pair each href with its heading element rather than keeping two arrays in
    // step by index, and apply the SAME visibility predicate RenderTocItem uses
    // for the rendered list.
    //
    // Platform/tool-gated headings stay in the DOM — ToggleableContent sets the
    // `hidden` attribute rather than removing the node — so without this filter
    // a heading the reader cannot see is still a candidate. Worse, `[hidden]`
    // resolves to `display: none`, so it measures as an all-zero rect, and
    // `0 <= threshold` always passes: the hidden heading wins. The rendered list
    // has filtered it out, so nothing carries aria-current, and getActiveTitle
    // labels the collapsed menu with a section from the platform the reader did
    // not choose.
    const pairs: { href: string; el: HTMLElement }[] = []
    for (const item of flatten(miniTocItems)) {
      const href = item.contents.href
      if (!href) continue
      const classification = classifyToggleClass(item.platform)
      if (
        classification &&
        !isContentVisible(classification, { platform: selectedPlatform, tool })
      ) {
        continue
      }
      const el = document.getElementById(href.slice(1))
      if (el) pairs.push({ href, el })
    }

    if (pairs.length === 0) return

    // The "active" band is the top 15% of the viewport (matching the rootMargin
    // used to trigger observer callbacks). A heading is active once its top has
    // scrolled up to or above the bottom of that band.
    const bandThreshold = () => window.innerHeight * 0.15

    // Derive the active heading from the headings' actual scroll positions rather
    // than only from the currently-intersecting set. This keeps reverse (upward)
    // scrolling correct: as the current heading leaves the band, the last heading
    // still above the threshold becomes active, and once we scroll above the first
    // heading we fall back to '' (Overview / top of article).
    const computeActive = () => {
      const threshold = bandThreshold()
      let next = ''
      for (const { href, el } of pairs) {
        const rect = el.getBoundingClientRect()
        // Belt and braces with the visibility filter above: anything that ends up
        // display:none reports an all-zero rect, which would otherwise satisfy
        // `top <= threshold` and claim the active slot.
        if (rect.top === 0 && rect.height === 0) continue
        if (rect.top <= threshold) {
          next = href
        } else {
          break
        }
      }
      setActiveHref(next)
    }

    // rAF-throttle: scroll fires far more often than the browser paints, and
    // computeActive forces a synchronous layout per heading. Coalesce bursts into
    // one measurement per frame so a long heading list (GraphQL/REST reference)
    // doesn't thrash the main thread.
    let frame = 0
    const scheduleUpdate = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        computeActive()
      })
    }

    // The observer only fires when a heading crosses the band, so a scroll
    // listener keeps the highlight responsive between those crossings.
    const observer = new IntersectionObserver(() => scheduleUpdate(), {
      rootMargin: '0px 0px -85% 0px',
      threshold: 0,
    })

    for (const { el } of pairs) observer.observe(el)
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    computeActive()

    return () => {
      if (frame) cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
    }
    // Re-runs when the platform/tool selection changes, because that changes
    // which headings are visible and therefore which are candidates.
  }, [miniTocItems, selectedPlatform, tool])

  return createElement(ActiveSectionContext.Provider, { value: activeHref }, children)
}

// Reads the shared active section href. Returns '' when no provider is mounted
// (top-of-article default), so consumers work even outside the provider.
export function useActiveSection(): string {
  return useContext(ActiveSectionContext)
}
