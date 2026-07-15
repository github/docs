import { useCallback, useEffect, useRef, useState } from 'react'
import type { FocusEvent } from 'react'
import cx from 'classnames'
import { IconButton } from '@primer/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@primer/octicons-react'

import { useTranslation } from '@/languages/components/useTranslation'
import { Breadcrumbs } from './Breadcrumbs'

import styles from './BreadcrumbsScroller.module.scss'

// Wraps the secondary-bar breadcrumbs in a horizontal scroll region. When the
// trail is too long to fit, the region scrolls — anchored to the RIGHT so the
// current page is shown first — with a left chevron to reveal the leftmost
// (ancestor) crumbs and a right chevron to return to the current page.
//
// Accessibility: the underlying <nav aria-label="Breadcrumb"><ol> is untouched,
// so screen readers still announce the complete, ordered trail regardless of
// visual scroll position. Tabbing to any crumb link natively scrolls it into
// view. The chevrons are real buttons, labelled, and live OUTSIDE the <nav> so
// they are not mistaken for crumbs.
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

  // Anchor the trail to its right edge so the current page shows first. Called
  // on mount and when the available width changes — but NOT on every scroll, so
  // it never fights the user (or keyboard focus) scrolling left.
  const anchorRight = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    // Anchor instantly (not smoothly) so the mount/resize write doesn't animate
    // and updateScrollState doesn't read a mid-animation scrollLeft.
    el.scrollTo({ left: el.scrollWidth, behavior: 'instant' })
    updateScrollState()
  }, [updateScrollState])

  useEffect(() => {
    anchorRight()

    const scroller = scrollerRef.current
    if (!scroller || typeof ResizeObserver === 'undefined') return
    // Observe the OUTER scroller (not the scroll area). Its width is stable when
    // the chevron shows/hides inside it, so re-anchoring only fires on genuine
    // layout changes (rail collapse/expand, viewport resize) — not the ~32px
    // shift from the chevron toggling, which would otherwise create a feedback
    // loop that snaps the scroll back to the right the moment you reach the start.
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

  // Reveal the start of the trail (Home) in one click. Breadcrumb trails are
  // short, so scrolling fully to the left is clearer than a partial nudge that
  // can leave the leading crumb half-hidden behind the chevron.
  const scrollLeftClick = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    el.scrollTo({ left: 0 })
  }, [])

  // Return to the current page (the end of the trail) in one click.
  const scrollRightClick = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    el.scrollTo({ left: el.scrollWidth })
  }, [])

  // When a crumb link receives focus via keyboard (Tab), the browser does not
  // reliably scroll it into view inside this overflow container (the brand
  // Breadcrumbs nav is itself an overflow context, which confuses
  // scrollIntoView), so compute and apply the scroll ourselves — otherwise
  // keyboard users can focus an off-screen link with no visible focus indicator.
  const handleFocus = useCallback((event: FocusEvent<HTMLDivElement>) => {
    const container = scrollRef.current
    const link = event.target instanceof HTMLElement ? event.target.closest('a') : null
    if (!container || !link) return

    const containerRect = container.getBoundingClientRect()
    const linkRect = link.getBoundingClientRect()
    const pad = 16
    // Scroll instantly (not smoothly) on focus so the reveal keeps pace with
    // Tab and the focus ring never trails off-screen.
    if (linkRect.left < containerRect.left + pad) {
      // Off-screen (or clipped) to the left — scroll left to reveal it.
      container.scrollBy({ left: linkRect.left - (containerRect.left + pad), behavior: 'instant' })
    } else if (linkRect.right > containerRect.right - pad) {
      // Off-screen to the right — scroll right to reveal it.
      container.scrollBy({
        left: linkRect.right - (containerRect.right - pad),
        behavior: 'instant',
      })
    }
  }, [])

  return (
    <div ref={scrollerRef} className={styles.scroller}>
      {/* Both chevrons are always rendered (toggled via visibility) and overlay
          the scroll area's ends rather than sitting beside it, so their
          show/hide never changes the scroll area's width — which would shift
          the scrollable range and fight the scroll position — and a hidden
          chevron leaves no gap at that edge. Hidden chevrons are removed from
          the tab order and the accessibility tree. */}
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
