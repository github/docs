import { useEffect, useId, useRef, useState } from 'react'
import { ArrowRightIcon } from '@primer/octicons-react'
import cx from 'classnames'

import { Link } from '@/frame/components/Link'
import { RenderedHTML } from '@/frame/components/ui/RenderedHTML'
import type { JourneyContext } from '@/journeys/lib/journey-path-resolver'
import { useTranslation } from '@/languages/components/useTranslation'
import { useSidebarCollapsed } from '@/frame/components/sidebar/SidebarCollapseContext'

import styles from './Minitocs.module.scss'

type Props = {
  journey: JourneyContext
}

// Optional "Up next" section inside the article right-rail panel. Shown only on
// journey-track articles; points at the next guide in the track (or the first
// guide of the next track when the current one ends). This is the in-panel
// promo — distinct from the bottom-of-article JourneyTrackNav pager. Rides the
// same drawer-visibility breakpoint as the mini-TOC (earlier when the left rail
// is collapsed).
export function UpNext({ journey }: Props) {
  const { t } = useTranslation('journey_track_nav')
  const { nextGuide, nextTrackFirstGuide, alternativeNextStep } = journey
  const { collapsed } = useSidebarCollapsed()
  // Unique id so the section's accessible name comes from the heading via
  // aria-labelledby (avoids the region + heading both announcing "Up next").
  const headingId = useId()
  // Once the reader reaches the bottom-of-article "Up next" pager, this in-panel
  // promo is redundant. It's removed from layout instantly (no animation) so the
  // TOC list scrolls up into the freed space; when the reader scrolls back up it
  // fades back in.
  const [bottomPagerVisible, setBottomPagerVisible] = useState(false)
  const [fadeIn, setFadeIn] = useState(false)
  const wasHidden = useRef(false)

  useEffect(() => {
    const pager = document.querySelector('[data-testid="journey-track-nav"]')
    if (!pager) return
    const observer = new IntersectionObserver(
      ([entry]) => setBottomPagerVisible(entry.isIntersecting),
      // Trigger once the bottom pager is meaningfully in view (its top edge ~25%
      // up from the viewport bottom), not the instant its top first appears.
      { rootMargin: '0px 0px -25% 0px', threshold: 0 },
    )
    observer.observe(pager)
    return () => observer.disconnect()
  }, [])

  // Play the fade-in only when re-appearing after having been hidden (scroll
  // back up), not on first render.
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
