import cx from 'classnames'

import { Survey } from 'src/events/components/Survey'
import { Contribution } from 'components/page-footer/Contribution'
import { Support } from 'components/page-footer/Support'
import { useMainContext } from 'components/context/MainContext'
import { useVersion } from 'src/versions/components/useVersion'
import { useRouter } from 'next/router'
import { useTranslation } from 'src/languages/components/useTranslation'

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
  const totalCols = Number(showSurvey) + Number(showContribution) + Number(showSupport)

  return (
    <section className="container-xl mt-lg-8 mt-6 px-3 px-md-6 no-print mx-auto">
      <h2 className="f3">{t('support_heading')}</h2>
      <div className="container-xl mx-auto py-6 py-lg-6 clearfix border-top border-color-secondary">
        {showSurvey && (
          <div
            className={cx(
              'float-left pr-4 mb-6 mb-xl-0 col-12',
              totalCols > 1 && 'col-lg-6',
              totalCols > 2 && 'col-xl-3',
            )}
          >
            <Survey />
          </div>
        )}
        {showContribution && (
          <div
            className={cx(
              'float-left pr-4 mb-6 mb-xl-0 col-12',
              totalCols > 1 && 'col-lg-6',
              totalCols > 2 && 'col-xl-4',
              totalCols > 2 && showSurvey && 'offset-xl-1',
            )}
          >
            <Contribution />
          </div>
        )}
        {showSupport && (
          <div
            className={cx(
              'float-left pr-4 mb-6 mb-xl-0 col-12',
              totalCols > 1 && 'col-lg-6',
              totalCols > 2 && 'col-xl-3',
              totalCols > 2 && (showSurvey || showContribution) && 'offset-xl-1',
            )}
          >
            <Support />
          </div>
        )}
      </div>
    </section>
  )
}
