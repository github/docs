import { useEffect, useId, useRef, useState } from 'react'
import { ArrowRightIcon } from '@primer/octicons-react'
import cx from 'clsx'

import { Link } from '@/frame/components/Link'
import { RenderedHTML } from '@/frame/components/ui/RenderedHTML'
import type { JourneyContext } from '@/journeys/lib/journey-path-resolver'
import { useTranslation } from '@/languages/components/useTranslation'
import { useSidebarCollapsed } from '@/frame/components/sidebar/SidebarCollapseContext'

import styles from './Minitocs.module.scss'

type Props = {
  journey: JourneyContext
}

// Optional Up next appears inside the article right-rail panel only on
// journey-track articles. It points to the next guide, or the first guide of the
// next track at track end, and stays separate from the bottom JourneyTrackNav
// pager. It follows the mini-TOC drawer breakpoint, earlier when the left rail
// is collapsed.
export function UpNext({ journey }: Props) {
  const { t } = useTranslation('journey_track_nav')
  const { nextGuide, nextTrackFirstGuide, alternativeNextStep } = journey
  const { collapsed } = useSidebarCollapsed()
  // aria-labelledby names the region from the heading without duplicate Up next announcements.
  const headingId = useId()
  // Hide while the bottom Up next pager is visible, then fade in after it leaves.
  const [bottomPagerVisible, setBottomPagerVisible] = useState(false)
  const [fadeIn, setFadeIn] = useState(false)
  const wasHidden = useRef(false)

  useEffect(() => {
    const pager = document.querySelector('[data-testid="journey-track-nav"]')
    if (!pager) return
    const observer = new IntersectionObserver(
      ([entry]) => setBottomPagerVisible(entry.isIntersecting),
      // Fire when the pager top reaches about 25% above the viewport bottom.
      { rootMargin: '0px 0px -25% 0px', threshold: 0 },
    )
    observer.observe(pager)
    return () => observer.disconnect()
  }, [])

  // Skip first-render animation; fade only after the promo has been hidden once.
  useEffect(() => {
    if (bottomPagerVisible) {
      wasHidden.current = true
      setFadeIn(false)
    } else if (wasHidden.current) {
      wasHidden.current = false
      setFadeIn(true)
    }
  }, [bottomPagerVisible])

  const next = nextGuide
    ? { href: nextGuide.href, label: nextGuide.title }
    : nextTrackFirstGuide
      ? { href: nextTrackFirstGuide.href, label: nextTrackFirstGuide.trackTitle }
      : null

  if (!next && !alternativeNextStep) return null

  return (
    <section
      className={cx(
        styles.upNext,
        collapsed ? styles.drawerCollapsed : styles.drawerDefault,
        bottomPagerVisible && styles.upNextGone,
        fadeIn && styles.upNextFadeIn,
      )}
      aria-labelledby={headingId}
      data-testid="up-next"
      onAnimationEnd={() => setFadeIn(false)}
    >
      <h2 id={headingId} className={styles.eyebrow}>
        {t('up_next')}
      </h2>
      {next && (
        <Link href={next.href} className={styles.upNextLink}>
          <span>{next.label}</span>
          <ArrowRightIcon className={styles.upNextArrow} />
        </Link>
      )}
      {alternativeNextStep && (
        <RenderedHTML as="div" className={styles.upNextAlternative} html={alternativeNextStep} />
      )}
    </section>
  )
}
