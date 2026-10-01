import { createContext, createElement, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

import {
  classifyToggleClass,
  isContentVisible,
  useSelection,
} from '@/tools/components/SelectionContext'
import { flatten, useMiniTocItems } from './MiniTocShared'

// One provider computes the active heading for MiniTocs and OverviewSubBar's
// OverviewMenu, avoiding duplicate observers and scroll or resize listeners.
const ActiveSectionContext = createContext<string>('')

// Computes the visible article heading for mini-TOC highlighting and dropdown labels.
// Empty string means Overview before the first heading becomes active. Pair hrefs
// with headings and use RenderTocItem's platform or tool visibility predicate:
// ToggleableContent puts hidden on ancestor divs or spans, so descendant headings
// report all-zero rectangles. They can otherwise win active state, leave no
// aria-current, and label the menu with a hidden section.
export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const miniTocItems = useMiniTocItems()
  const { platform: selectedPlatform, tool } = useSelection()
  const [activeHref, setActiveHref] = useState('')

  useEffect(() => {
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

    // Match the observer band: a heading becomes active in the top 15% of the viewport.
    const bandThreshold = () => window.innerHeight * 0.15

    // Actual scroll positions keep upward scrolling tied to the previous heading or Overview.
    const computeActive = () => {
      const threshold = bandThreshold()
      let next = ''
      for (const { href, el } of pairs) {
        const rect = el.getBoundingClientRect()
        // Hidden headings can report all-zero rects and would otherwise satisfy top <= threshold.
        if (rect.top === 0 && rect.height === 0) continue
        if (rect.top <= threshold) {
          next = href
        } else {
          break
        }
      }
      setActiveHref(next)
    }

    // Coalesce scroll bursts to one layout measurement per frame for long reference pages.
    let frame = 0
    const scheduleUpdate = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        computeActive()
      })
    }

    // The observer catches band crossings; scroll keeps the highlight responsive between them.
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
    // Re-run when platform or tool selection changes which headings are visible.
  }, [miniTocItems, selectedPlatform, tool])

  return createElement(ActiveSectionContext.Provider, { value: activeHref }, children)
}

// Returns empty string outside the provider so consumers keep the top-of-article default.
export function useActiveSection(): string {
  return useContext(ActiveSectionContext)
}
