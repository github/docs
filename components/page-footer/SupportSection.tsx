import cx from 'classnames'

import { Survey } from 'components/page-footer/Survey'
import { Contribution } from 'components/page-footer/Contribution'
import { Support } from 'components/page-footer/Support'
import { useMainContext } from 'components/context/MainContext'
import { useVersion } from 'components/hooks/useVersion'
import { useRouter } from 'next/router'

export const SupportSection = () => {
  const { currentVersion } = useVersion()
  const { relativePath, enterpriseServerReleases } = useMainContext()
  const router = useRouter()

  const isDeprecated =
    enterpriseServerReleases.isOldestReleaseDeprecated &&
    currentVersion.includes(enterpriseServerReleases.oldestSupported)
  const isEarlyAccess = relativePath?.includes('early-access/')
  const isEnglish = router.locale === 'en'

  return (
    <section className="container-xl mt-lg-8 mt-6 px-3 px-md-6 no-print mx-auto">
      <div className="container-xl mx-auto py-6 py-lg-6 clearfix border-top border-color-secondary">
        {!isDeprecated && (
          <div className="col-12 col-lg-6 col-xl-3 mb-6 mb-xl-0 float-left pr-4">
            <Survey />
          </div>
        )}
        {!isDeprecated && !isEarlyAccess && isEnglish && (
          <div className="col-12 col-lg-6 col-xl-4 mb-6 mb-xl-0 float-left pr-4 offset-xl-1">
            <Contribution />
          </div>
        )}
        <div
          className={cx(
            'col-12 col-lg-12 col-xl-3 float-left pr-4',
            !isDeprecated && 'offset-xl-1'
          )}
        >
          <Support />
        </div>
      </div>
    </section>
  )
}
