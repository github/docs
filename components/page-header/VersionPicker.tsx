import { useRouter } from 'next/router'
import { ArrowRightIcon } from '@primer/octicons-react'

import { Link } from 'components/Link'
import { useMainContext } from 'components/context/MainContext'
import { useVersion } from 'components/hooks/useVersion'
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

  if (page.permalinks && page.permalinks.length <= 1) {
    return null
  }

  const allLinks = (page.permalinks || []).map((permalink) => ({
    text: permalink.pageVersionTitle,
    selected: allVersions[currentVersion].versionTitle === permalink.pageVersionTitle,
    item: <Link href={permalink.href}>{permalink.pageVersionTitle}</Link>,
  }))
  const hasEnterpriseVersions = (page.permalinks || []).find((permalink) =>
    permalink.pageVersion.startsWith('enterprise-version')
  )

  if (hasEnterpriseVersions) {
    allLinks.push({
      text: t('all_enterprise_releases'),
      selected: false,
      item: (
        <Link
          href={`/${router.locale}/${enterpriseServerVersions[0]}/admin/all-releases`}
          className="f6 no-underline color-fg-muted"
        >
          {t('all_enterprise_releases')}{' '}
          <ArrowRightIcon verticalAlign="middle" size={15} className="mr-2" />
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
