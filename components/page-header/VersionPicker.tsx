import { useRouter } from 'next/router'
import { ArrowRightIcon, InfoIcon } from '@primer/octicons-react'

import { useMainContext } from 'components/context/MainContext'
import { DEFAULT_VERSION, useVersion } from 'components/hooks/useVersion'
import { useTranslation } from 'components/hooks/useTranslation'
import { Picker } from 'src/tools/components/Picker'

import styles from './VersionPicker.module.scss'

type Props = {
  xs?: boolean
}

export const VersionPicker = ({ xs }: Props) => {
  const router = useRouter()
  const { currentVersion } = useVersion()
  const { allVersions, page, enterpriseServerVersions } = useMainContext()
  const { t } = useTranslation(['pages', 'picker'])
  const isSearchResultsPage = router.route === '/search' || router.route === '/[versionId]/search'

  if (page.permalinks && page.permalinks.length < 1) {
    return null
  }

  const allLinks = (page.permalinks || []).map((permalink) => ({
    text: allVersions[permalink.pageVersion].versionTitle,
    selected: currentVersion === permalink.pageVersion,
    href:
      isSearchResultsPage && typeof router.query.query === 'string'
        ? permalink.href + `?${new URLSearchParams({ query: router.query.query })}`
        : permalink.href,
    extra: {
      arrow: false,
      info: false,
    },
    divider: false,
  }))

  const hasEnterpriseVersions = (page.permalinks || []).some((permalink) =>
    permalink.pageVersion.startsWith('enterprise-server'),
  )

  allLinks.push({
    text: '',
    selected: false,
    href: ``,
    extra: {
      arrow: false,
      info: false,
    },
    divider: true,
  })

  if (hasEnterpriseVersions) {
    allLinks.push({
      text: t('all_enterprise_releases'),
      selected: false,
      href: `/${router.locale}/${enterpriseServerVersions[0]}/admin/all-releases`,
      extra: {
        arrow: true,
        info: false,
      },
      divider: false,
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
      divider: false,
    })
  }

  return (
    <div data-testid="version-picker" className={xs ? 'd-flex' : ''}>
      <Picker
        defaultText={t('version_picker_default_text')}
        items={allLinks}
        alignment="end"
        pickerLabel={xs ? `Version\n` : `Version: `}
        dataTestId="field"
        descriptionFontSize={xs ? 6 : 5}
        ariaLabel={`Select GitHub product version: current version is ${currentVersion}`}
        renderItem={(item) => {
          return (
            <div data-testid="version-picker-item" className={styles.itemsWidth}>
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
