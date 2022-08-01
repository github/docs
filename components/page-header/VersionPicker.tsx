import { useRouter } from 'next/router'

import { useMainContext } from 'components/context/MainContext'
import { DEFAULT_VERSION, useVersion } from 'components/hooks/useVersion'
import { useTranslation } from 'components/hooks/useTranslation'
import { Picker } from 'components/ui/Picker'

type Props = {
  variant?: 'inline'
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
    text: permalink.pageVersionTitle,
    selected: allVersions[currentVersion].versionTitle === permalink.pageVersionTitle,
    href: permalink.href,
    arrow: false,
    info: false,
  }))

  const hasEnterpriseVersions = (page.permalinks || []).some((permalink) =>
    permalink.pageVersion.startsWith('enterprise-server')
  )

  if (hasEnterpriseVersions) {
    allLinks.push({
      text: t('all_enterprise_releases'),
      selected: false,
      arrow: true,
      href: `/${router.locale}/${enterpriseServerVersions[0]}/admin/all-releases`,
      info: false,
    })
  }

  if (allLinks) {
    const currentVersionPathSegment = currentVersion === DEFAULT_VERSION ? '' : `/${currentVersion}`

    allLinks.push({
      text: t('about_versions'),
      selected: false,
      arrow: false,
      info: true,
      href: `/${router.locale}${currentVersionPathSegment}/get-started/learning-about-github/about-versions-of-github-docs`,
    })
  }

  return (
    <div data-testid="version-picker">
      <Picker variant={variant} defaultText={t('version_picker_default_text')} options={allLinks} />
    </div>
  )
}
