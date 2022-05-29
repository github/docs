import { useRouter } from 'next/router'
import { ArrowRightIcon, InfoIcon } from '@primer/octicons-react'

import { Link } from 'components/Link'
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
    item: <Link href={permalink.href}>{permalink.pageVersionTitle}</Link>,
  }))
  const hasEnterpriseVersions = (page.permalinks || []).some((permalink) =>
    permalink.pageVersion.startsWith('enterprise-server')
  )

  if (hasEnterpriseVersions) {
    allLinks.push({
      text: t('all_enterprise_releases'),
      selected: false,
      item: (
        <Link
          href={`/${router.locale}/${enterpriseServerVersions[0]}/admin/all-releases`}
          className="f6 no-underline"
        >
          {t('all_enterprise_releases')}{' '}
          <ArrowRightIcon verticalAlign="middle" size={15} className="mr-2" />
        </Link>
      ),
    })
  }

  if (allLinks) {
    const currentVersionPathSegment = currentVersion === DEFAULT_VERSION ? '' : `/${currentVersion}`

    allLinks.push({
      text: t('about_versions'),
      selected: false,
      item: (
        <Link
          href={`/${router.locale}${currentVersionPathSegment}/get-started/learning-about-github/about-versions-of-github-docs`}
          className="f6 no-underline"
        >
          {t('about_versions')} <InfoIcon verticalAlign="middle" size={15} className="mr-2" />
        </Link>
      ),
    })
  }

  return (
    <Picker
      variant={variant}
      data-testid="version-picker"
      defaultText={t('version_picker_default_text')}
      options={allLinks}
    />
  )
}
