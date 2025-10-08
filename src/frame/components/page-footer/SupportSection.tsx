import cx from 'classnames'

import { Survey } from '@/events/components/Survey'
import { Contribution } from '@/frame/components/page-footer/Contribution'
import { Support } from '@/frame/components/page-footer/Support'
import { useMainContext } from '@/frame/components/context/MainContext'
import { useVersion } from '@/versions/components/useVersion'
import { useRouter } from 'next/router'
import { useTranslation } from '@/languages/components/useTranslation'
import { AISearchCTAPopup } from '@/search/components/input/AISearchCTAPopup'
import { useSearchOverlayContext } from '@/search/components/context/SearchOverlayContext'

import styles from './SupportSection.module.scss'

export const SupportSection = () => {
  const { currentVersion } = useVersion()
  const { relativePath, enterpriseServerReleases } = useMainContext()
  const router = useRouter()
  const { t } = useTranslation('footer')
  const { setIsSearchOpen } = useSearchOverlayContext()

  const isDeprecated =
    enterpriseServerReleases.isOldestReleaseDeprecated &&
    currentVersion.includes(enterpriseServerReleases.oldestSupported)
  const isEarlyAccess = relativePath?.includes('early-access/')
  const isEnglish = router.locale === 'en'
  const isSitePolicyDocs = router.asPath.startsWith('/site-policy')

  const showSurvey = !isDeprecated && !isSitePolicyDocs
  const showContribution = !isDeprecated && !isEarlyAccess && isEnglish
  const showSupport = true
  const showCopilotCTA = !isDeprecated && !isEarlyAccess && isEnglish

  return (
    <section className="container-xl mt-lg-8 mt-6 px-3 px-md-6 no-print mx-auto">
      <h2 className="f3">{t('support_heading')}</h2>

      {/* CSS Grid container */}
      <div
        className={cx(
          'border-top border-color-secondary pt-6',
          styles.supportGrid /* ← adds the grid rules */,
        )}
      >
        {showCopilotCTA && (
          <AISearchCTAPopup
            isOpen
            setIsSearchOpen={setIsSearchOpen}
            isDismissible={false}
            bannerType="footer"
          />
        )}
        {showSurvey && <Survey />}
        {showContribution && <Contribution />}
        {showSupport && <Support />}
      </div>
    </section>
  )
}
