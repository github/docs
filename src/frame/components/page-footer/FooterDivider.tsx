import { useEffect, useRef } from 'react'

import styles from './FooterDivider.module.scss'

// The decorative footer band from Figma Docs 2026 node 123-6013, layer page-divider,
// is hidden from assistive tech because it adds no content. It arms only after
// scripting confirms it starts below the fold, so it stays visible without JavaScript,
// when reduced motion is enabled at mount, or when short content puts it on screen.
export const FooterDivider = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    // Skip arming when the band already appears because hiding it for one frame reads as flicker.
    if (el.getBoundingClientRect().top < window.innerHeight) return

    // Toggle node classes because the presentation-only reveal does not need a footer rerender.
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
      // Wait for visible overlap so the reveal does not fire at the viewport edge.
      { rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return <div ref={ref} aria-hidden="true" className={styles.footerDivider} />
}
