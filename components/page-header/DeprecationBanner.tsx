import { useMainContext } from 'components/context/MainContext'
import { useVersion } from 'components/hooks/useVersion'
import { Callout } from 'components/ui/Callout'

export const DeprecationBanner = () => {
  const { data, enterpriseServerReleases } = useMainContext()
  const { currentVersion } = useVersion()

  if (!currentVersion.includes(enterpriseServerReleases.oldestSupported)) {
    return null
  }

  const message = enterpriseServerReleases.isOldestReleaseDeprecated
    ? data.reusables.enterprise_deprecation.version_was_deprecated
    : data.reusables.enterprise_deprecation.version_will_be_deprecated

  return (
    <div data-testid="deprecation-banner" className="container-xl mt-3 mx-auto p-responsive">
      <Callout variant="warning">
        <p>
          <b className="text-bold">
            <span dangerouslySetInnerHTML={{ __html: message }} />{' '}
            <span
              data-date={enterpriseServerReleases.nextDeprecationDate}
              data-format="%B %d, %Y"
              title={enterpriseServerReleases.nextDeprecationDate}
            >
              {enterpriseServerReleases.nextDeprecationDate}
            </span>
            .
          </b>{' '}
          <span
            dangerouslySetInnerHTML={{
              __html: data.reusables.enterprise_deprecation.deprecation_details,
            }}
          />
        </p>
      </Callout>
    </div>
  )
}
