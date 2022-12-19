import { useRouter } from 'next/router'
import { ArrowRightIcon, InfoIcon } from '@primer/octicons-react'

import { useMainContext } from 'components/context/MainContext'
import { DEFAULT_VERSION, useVersion } from 'components/hooks/useVersion'
import { useTranslation } from 'components/hooks/useTranslation'
import { Picker } from 'components/ui/Picker'

type Props = {
  variant: 'inline' | 'header'
}

export const VersionPicker = ({ variant }: Props) => {
  const router = useRouter()
  const { currentVersion } = useVersion()
  const { allVersions, page, enterpriseServerVersions } = useMainContext()
  const { t } = useTranslation(['pages', 'picker'])

  if (page.permalinks && page.permalinks.length < 1) {
    return null
  }

  const allLinks = (page.permalinks || []).map((permalink) => ({
    text: allVersions[permalink.pageVersion].versionTitle,
    selected: currentVersion === permalink.pageVersion,
    href: permalink.href,
    extra: {
      arrow: false,
      info: false,
    },
  }))

  const hasEnterpriseVersions = (page.permalinks || []).some((permalink) =>
    permalink.pageVersion.startsWith('enterprise-server')
  )

  if (hasEnterpriseVersions) {
    allLinks.push({
      text: t('all_enterprise_releases'),
      selected: false,
      href: `/${router.locale}/${enterpriseServerVersions[0]}/admin/all-releases`,
      extra: {
        arrow: true,
        info: false,
      },
    })
  }

  if (allLinks) {
    const currentVersionPathSegment = currentVersion === DEFAULT_VERSION ? '' : `/${currentVersion}`

    allLinks.push({
      text: t('about_versions'),
      selected: false,
      href: `/${router.locale}${currentVersionPathSegment}/get-started/learning-about-github/about-versions-of-github-docs`,
      extra: {
        arrow: false,
        info: true,
      },
    })
  }

  return (
    <div data-testid="version-picker">
      <Picker
        variant={variant}
        defaultText={t('version_picker_default_text')}
        items={allLinks}
        alignment="end"
        dataTestId="field"
        ariaLabel="Select field type"
        renderItem={(item) => {
          return (
            <div className={item.extra?.arrow || item.extra?.info ? 'f6' : undefined}>
              {item.text}
              {item.extra?.arrow && (
                <ArrowRightIcon verticalAlign="middle" size={15} className="ml-1" />
              )}
              {item.extra?.info && <InfoIcon verticalAlign="middle" size={15} className="ml-1" />}
            </div>
          )
        }}
      />
    </div>
  )
}
