import { useEffect, useState } from 'react'
import { ChevronDownIcon } from '@primer/octicons-react'

import { useTranslation } from '@/languages/components/useTranslation'
import { useMainContext } from '@/frame/components/context/MainContext'

import styles from './SupportSection.module.scss'

// The footer's help column. Expert services and Blog moved here out of the legal
// strip in the Docs 2026 design — the design groups these with the other help
// destinations.
//
// Below the 2-column breakpoint the design collapses this into a disclosure. Rather
// than render <details> at every width and fight the UA's content hiding (which
// modern Chrome exposes via ::details-content and older browsers via the children),
// we render the plain heading + list on the server and swap to a disclosure once we
// know the viewport is narrow. That keeps SSR and the first client render identical,
// and leaves the links reachable when JavaScript never runs.
export const Support = () => {
  const { t } = useTranslation('support')
  const { t: tFooter } = useTranslation('footer')
  const { communityRedirect } = useMainContext()
  const [isNarrow, setIsNarrow] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    // Mirrors the first grid breakpoint in SupportSection.module.scss.
    const mql = window.matchMedia('(max-width: 767px)')
    const handle = (event: MediaQueryListEvent | MediaQueryList) => setIsNarrow(event.matches)
    handle(mql)
    mql.addEventListener('change', handle)
    return () => mql.removeEventListener('change', handle)
  }, [])

  const links = (
    <div className={styles.supportLinks}>
      <a
        id="ask-community"
        href={communityRedirect.href || 'https://github.com/orgs/community/discussions'}
      >
        {Object.keys(communityRedirect).length === 0 ? t`ask_community` : communityRedirect.name}
      </a>
      <a id="support" href="https://support.github.com">
        {t`contact_support`}
      </a>
      <a href="https://services.github.com">{tFooter('expert_services')}</a>
      <a href="https://github.blog">{tFooter('blog')}</a>
    </div>
  )

  if (isNarrow) {
    return (
      <details className={styles.supportDisclosure}>
        <summary className={styles.supportSummary}>
          <h3 className={styles.supportSummaryHeading}>{t`still_need_help`}</h3>
          <ChevronDownIcon className={styles.supportChevron} size={16} />
        </summary>
        {links}
      </details>
    )
  }

  return (
    <div>
      <h3 className={styles.eyebrow}>{t`still_need_help`}</h3>
      {links}
    </div>
  )
}
