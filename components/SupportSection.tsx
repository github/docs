import { Helpfulness } from 'components/Helpfulness'
import { Contribution } from 'components/Contribution'
import { Support } from 'components/Support'
import { useMainContext } from './context/MainContext'
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
          {!isDeprecated && <Helpfulness />}
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
