import type { EnterpriseDeprecation } from '@/frame/components/context/MainContext'
import { useMainContext } from '@/frame/components/context/MainContext'
import { useVersion } from '@/versions/components/useVersion'
import { Flash } from '@primer/react'
import cx from 'classnames'

import styles from './DeprecationBanner.module.scss'

// GHES deprecation dates are being extended while
// performance issues are being addressed in versions >= 3.15.
// This banner should remain hidden for the supported versions (>=3.14) until
// new deprecation dates are announced.
const DEPRECATION_BANNER_EXCEPTIONS = ['3.14']

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

  if (DEPRECATION_BANNER_EXCEPTIONS.some((version) => currentVersion.includes(version))) {
    return null
  }

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
