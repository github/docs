import cx from 'classnames'

import { Survey } from '@/events/components/Survey'
import { Contribution } from '@/frame/components/page-footer/Contribution'
import { Support } from '@/frame/components/page-footer/Support'
import { useMainContext } from '@/frame/components/context/MainContext'
import { useVersion } from '@/versions/components/useVersion'
import { useRouter } from 'next/router'
import { useTranslation } from '@/languages/components/useTranslation'

import styles from './SupportSection.module.scss'

// Renders inside MinimalFooter's `centerComponent` slot, so it no longer owns a page
// container or a section heading — the footer supplies that chrome.
//
// Columns carry their own class rather than relying on nth-child, because any of the
// three can be hidden (site-policy pages drop the survey, non-English drops the
// contribution CTA) and the layout rules must not shift when they are.
export const SupportSection = () => {
  const { currentVersion } = useVersion()
  const { relativePath, enterpriseServerReleases } = useMainContext()
  const router = useRouter()
  const { t } = useTranslation('footer')

  const isDeprecated =
    enterpriseServerReleases.isOldestReleaseDeprecated &&
    currentVersion.includes(enterpriseServerReleases.oldestSupported)
  const isEarlyAccess = relativePath?.includes('early-access/')
  const isEnglish = router.locale === 'en'
  const isSitePolicyDocs = router.asPath.startsWith('/site-policy')

  const showSurvey = !isDeprecated && !isSitePolicyDocs
  const showContribution = !isDeprecated && !isEarlyAccess && isEnglish
  const showSupport = true

  return (
    <>
      {/* The design shows no heading over this region, but dropping it entirely
          leaves the three column headings with nothing above them for heading
          navigation. Kept for assistive tech only. */}
      <h2 className="visually-hidden">{t('support_heading')}</h2>
      <div className={cx('no-print', styles.supportGrid)}>
        {showSurvey && (
          <div className={cx(styles.column, styles.surveyColumn)}>
            <Survey />
          </div>
        )}
        {showContribution && (
          <div className={cx(styles.column, styles.contributionColumn)}>
            <Contribution />
          </div>
        )}
        {showSupport && (
          <div className={cx(styles.column, styles.supportColumn)}>
            <Support />
          </div>
        )}
      </div>
    </>
  )
}
