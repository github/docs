import { useEffect, useState } from 'react'
import { ChevronDownIcon } from '@primer/octicons-react'

import { useTranslation } from '@/languages/components/useTranslation'
import { useMainContext } from '@/frame/components/context/MainContext'

import styles from './SupportSection.module.scss'

// The Docs 2026 design groups Expert services and Blog with help destinations.
// Below the two-column breakpoint, swap the server-rendered plain list to a
// disclosure only after client media matching, so hydration matches and links stay
// reachable without JavaScript.
export const Support = () => {
  const { t } = useTranslation('support')
  const { t: tFooter } = useTranslation('footer')
  const { communityRedirect } = useMainContext()
  const [isNarrow, setIsNarrow] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    // Keep this query in sync with the first grid breakpoint in SupportSection.module.scss.
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
