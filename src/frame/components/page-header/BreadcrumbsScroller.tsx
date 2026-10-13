import { useCallback, useEffect, useRef, useState } from 'react'
import type { FocusEvent } from 'react'
import cx from 'clsx'
import { ChevronLeftIcon, ChevronRightIcon } from '@primer/octicons-react'

import { IconButton } from '@/frame/components/ui/IconButton'
import { useTranslation } from '@/languages/components/useTranslation'
import { Breadcrumbs } from './Breadcrumbs'

import styles from './BreadcrumbsScroller.module.scss'

// Extra pad clears the ~28px chevron so revealed crumbs do not land underneath.
const CHEVRON_PAD = 32

// The secondary-bar breadcrumbs need horizontal scrolling because long trails
// anchor right so the current page appears first. The left chevron reveals
// ancestor crumbs, and the right chevron returns to the current page.
//
// Keep the nav and ol untouched so screen readers still announce the complete,
// ordered trail. The focus handler scrolls crumb links into view. Chevrons are
// labelled buttons outside the nav, so screen readers do not mistake them for crumbs.
export const BreadcrumbsScroller = () => {
  const { t } = useTranslation('header')
  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    // 1px thresholds avoid sub-pixel rounding leaving a chevron stuck on.
    setCanScrollLeft(el.scrollLeft > 1)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1)
  }, [])

  // Anchor only on mount and real width changes, so user and keyboard scrolling can move left.
  const anchorRight = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    // Instant anchoring prevents animated mount and resize writes from skewing scrollLeft reads.
    el.scrollTo({ left: el.scrollWidth, behavior: 'instant' })
    updateScrollState()
  }, [updateScrollState])

  useEffect(() => {
    anchorRight()

    const scroller = scrollerRef.current
    if (!scroller || typeof ResizeObserver === 'undefined') return
    // Observe the outer scroller so rail and viewport resizes re-anchor without chevron loops.
    let lastWidth = scroller.clientWidth
    const observer = new ResizeObserver(() => {
      if (scroller.clientWidth !== lastWidth) {
        lastWidth = scroller.clientWidth
        anchorRight()
      }
    })
    observer.observe(scroller)
    return () => observer.disconnect()
  }, [anchorRight])

  // Reveal the boundary crumb clipped at the left edge, including oversized crumbs.
  const scrollLeftClick = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const containerLeft = el.getBoundingClientRect().left + CHEVRON_PAD
    const crumbs = Array.from(el.querySelectorAll('li'))
    // The rightmost crumb still clipped/off to the left: the one to reveal.
    let target: Element | undefined
    for (const crumb of crumbs) {
      if (crumb.getBoundingClientRect().left < containerLeft - 1) target = crumb
    }
    if (!target) {
      el.scrollTo({ left: 0 })
      return
    }
    el.scrollBy({ left: target.getBoundingClientRect().left - containerLeft })
  }, [])

  // Reveal the boundary crumb clipped at the right edge, including oversized crumbs.
  const scrollRightClick = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const containerRight = el.getBoundingClientRect().right - CHEVRON_PAD
    const crumbs = Array.from(el.querySelectorAll('li'))
    // The leftmost crumb still clipped/off to the right: the one to reveal.
    const target = crumbs.find((crumb) => crumb.getBoundingClientRect().right > containerRight + 1)
    if (!target) {
      el.scrollTo({ left: el.scrollWidth })
      return
    }
    el.scrollBy({ left: target.getBoundingClientRect().right - containerRight })
  }, [])

  // Brand's nested overflow defeats scrollIntoView, so compute scrolling to keep focus visible.
  const handleFocus = useCallback((event: FocusEvent<HTMLDivElement>) => {
    const container = scrollRef.current
    const link = event.target instanceof HTMLElement ? event.target.closest('a') : null
    if (!container || !link) return

    const containerRect = container.getBoundingClientRect()
    const linkRect = link.getBoundingClientRect()
    const pad = 16
    // Instant focus scrolling keeps the reveal ahead of Tab and the focus ring on-screen.
    if (linkRect.left < containerRect.left + pad) {
      // Clipped to the left, so scroll left to reveal it.
      container.scrollBy({ left: linkRect.left - (containerRect.left + pad), behavior: 'instant' })
    } else if (linkRect.right > containerRect.right - pad) {
      // Off-screen to the right, so scroll right to reveal it.
      container.scrollBy({
        left: linkRect.right - (containerRect.right - pad),
        behavior: 'instant',
      })
    }
  }, [])

  return (
    <div ref={scrollerRef} className={styles.scroller}>
      {/* Always render overlaid chevrons so visibility toggles never change scroll width. */}
      <IconButton
        className={cx(styles.leftChevron, !canScrollLeft && styles.chevronHidden)}
        variant="invisible"
        size="small"
        icon={ChevronLeftIcon}
        aria-label={t('scroll_breadcrumbs_left')}
        aria-hidden={!canScrollLeft}
        tabIndex={canScrollLeft ? undefined : -1}
        onClick={scrollLeftClick}
      />
      <div
        ref={scrollRef}
        className={styles.scrollArea}
        onScroll={updateScrollState}
        onFocus={handleFocus}
        data-search="breadcrumbs"
      >
        <Breadcrumbs variant="bar" />
      </div>
      <IconButton
        className={cx(styles.rightChevron, !canScrollRight && styles.chevronHidden)}
        variant="invisible"
        size="small"
        icon={ChevronRightIcon}
        aria-label={t('scroll_breadcrumbs_right')}
        aria-hidden={!canScrollRight}
        tabIndex={canScrollRight ? undefined : -1}
        onClick={scrollRightClick}
      />
    </div>
  )
}
