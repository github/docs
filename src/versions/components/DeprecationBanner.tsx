import type { EnterpriseDeprecation } from '@/frame/components/context/MainContext'
import { useMainContext } from '@/frame/components/context/MainContext'
import { useVersion } from '@/versions/components/useVersion'
import cx from 'clsx'

import styles from './DeprecationBanner.module.scss'
import { Banner } from '@/frame/components/ui/Banner'
import { RenderedHTML } from '@/frame/components/ui/RenderedHTML/RenderedHTML'

export const DeprecationBanner = () => {
  const { data, enterpriseServerReleases } = useMainContext()
  const { currentVersion } = useVersion()
  const currentRelease = currentVersion.replace('enterprise-server@', '')

  if (!enterpriseServerReleases.releasesWithOldestDeprecationDate.includes(currentRelease)) {
    return null
  }

  // MainContext supplies enterprise_deprecation before React renders this banner.
  const enterpriseDeprecation = data.reusables.enterprise_deprecation as EnterpriseDeprecation
  const message = enterpriseServerReleases.isOldestReleaseDeprecated
    ? enterpriseDeprecation.version_was_deprecated
    : enterpriseDeprecation.version_will_be_deprecated

  return (
    <div
      data-testid="deprecation-banner"
      className={cx('container-xl mt-3 mx-auto p-responsive', styles.DeprecationBanner)}
    >
      <Banner variant="warning">
        <p>
          <b className="text-bold">
            <RenderedHTML as="span" html={message} />{' '}
            <span data-date={enterpriseServerReleases.nextDeprecationDate} data-format="%B %d, %Y">
              {enterpriseServerReleases.nextDeprecationDate}
            </span>
            .
          </b>{' '}
          <RenderedHTML as="span" html={enterpriseDeprecation.deprecation_details} />
        </p>
      </Banner>
    </div>
  )
}
