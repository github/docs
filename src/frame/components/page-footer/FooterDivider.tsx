import { useEffect, useRef } from 'react'

import styles from './FooterDivider.module.scss'

// Decorative isometric band that sits directly above the footer.
// Figma Docs 2026 node 123-6013, layer "page-divider".
// Purely ornamental, so it carries no accessible name and is hidden from AT.
//
// It fades and rises into place the first time it scrolls into view. The band is
// only *armed* — that is, hidden — once we know scripting is running and it is still
// below the fold, so it can never be left permanently invisible: without JavaScript,
// with reduced motion, or on a page short enough that the footer is already on
// screen, it just renders in place with no animation.
export const FooterDivider = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    // Already on screen: arming now would hide it and reveal it again a frame later,
    // which reads as a flicker rather than a reveal.
    if (el.getBoundingClientRect().top < window.innerHeight) return

    // Toggled on the node rather than through React state: this is presentational
    // only, so there is no reason to re-render the whole footer subtree for it.
    el.classList.add(styles.armed)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add(styles.revealed)
            observer.disconnect()
          }
        }
      },
      // Hold off until a sliver is genuinely in view rather than firing the instant
      // the band touches the viewport edge.
      { rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return <div ref={ref} aria-hidden="true" className={styles.footerDivider} />
}
