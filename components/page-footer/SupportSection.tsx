import { Survey } from 'components/page-footer/Survey'
import { Contribution } from 'components/page-footer/Contribution'
import { Support } from 'components/page-footer/Support'
import { useMainContext } from 'components/context/MainContext'
import { useVersion } from 'components/hooks/useVersion'

export const SupportSection = () => {
  const { currentVersion } = useVersion()
  const { enterpriseServerReleases } = useMainContext()

  const isDeprecated =
    enterpriseServerReleases.isOldestReleaseDeprecated &&
    currentVersion.includes(enterpriseServerReleases.oldestSupported)

  return (
    <section className="mt-lg-9 py-7 px-3 px-md-6 no-print color-bg-tertiary">
      <div className="container-xl gutter-lg-spacious clearfix">
        <div className="col-12 col-lg-6 col-xl-4 mb-6 mb-xl-0 float-left">
          {!isDeprecated && <Survey />}
        </div>
        <div className="col-12 col-lg-6 col-xl-4 mb-6 mb-xl-0 float-left">
          {!isDeprecated && <Contribution />}
        </div>
        <div className="col-12 col-lg-12 col-xl-4 float-left">
          <Support />
        </div>
      </div>
    </section>
  )
}
