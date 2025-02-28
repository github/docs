import type { EnterpriseDeprecation } from 'src/frame/components/context/MainContext'
import { useMainContext } from 'src/frame/components/context/MainContext'
import { useVersion } from 'src/versions/components/useVersion'
import { Flash } from '@primer/react'
import cx from 'classnames'

import styles from './DeprecationBanner.module.scss'

export const DeprecationBanner = () => {
  const { data, enterpriseServerReleases } = useMainContext()
  const { currentVersion } = useVersion()

  if (!currentVersion.includes(enterpriseServerReleases.oldestSupported)) {
    return null
  }

  // Have to "trick" TypeScript here because by default, this is an
  // optional key. But because we're confident with the JS business
  // logic in MainContext.tsx, we can safely assume that this key
  // is present.
  const enterpriseDeprecation = data.reusables.enterprise_deprecation as EnterpriseDeprecation
  const message = enterpriseServerReleases.isOldestReleaseDeprecated
    ? enterpriseDeprecation.version_was_deprecated
    : enterpriseDeprecation.version_will_be_deprecated

  return (
    <div
      data-testid="deprecation-banner"
      className={cx('container-xl mt-3 mx-auto p-responsive', styles.DeprecationBanner)}
    >
      <Flash variant="warning">
        <p>
          <b className="text-bold">
            <span dangerouslySetInnerHTML={{ __html: message }} />{' '}
            <span data-date={enterpriseServerReleases.nextDeprecationDate} data-format="%B %d, %Y">
              {enterpriseServerReleases.nextDeprecationDate}
            </span>
            .
          </b>{' '}
          <span
            dangerouslySetInnerHTML={{
              __html: enterpriseDeprecation.deprecation_details,
            }}
          />
        </p>
      </Flash>
    </div>
  )
}
