import cx from 'clsx'

import { Survey } from '@/events/components/Survey'
import { Contribution } from '@/frame/components/page-footer/Contribution'
import { Support } from '@/frame/components/page-footer/Support'
import { useMainContext } from '@/frame/components/context/MainContext'
import { useVersion } from '@/versions/components/useVersion'
import { useRouter } from 'next/router'
import { useTranslation } from '@/languages/components/useTranslation'

import styles from './SupportSection.module.scss'

// MinimalFooter's centerComponent slot supplies no page container or visible heading,
// so this region owns its column chrome.
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
      {/* Keep this hidden h2 so heading navigation has a parent for the column headings. */}
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
