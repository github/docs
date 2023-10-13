import { useRouter } from 'next/router'
import { ArrowRightIcon, InfoIcon } from '@primer/octicons-react'

import { useMainContext } from 'components/context/MainContext'
import { DEFAULT_VERSION, useVersion } from 'src/versions/components/useVersion'
import { useTranslation } from 'src/languages/components/useTranslation'
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

  if (page.applicableVersions && page.applicableVersions.length < 1) {
    return null
  }

  const versionToHref = (version: string) => {
    const prefix = `/${router.locale}${version === DEFAULT_VERSION ? '' : `/${version}`}`
    return prefix + router.asPath.replace(`/${currentVersion}`, '')
  }

  const allLinks = (page.applicableVersions || []).map((pageVersion) => ({
    text: allVersions[pageVersion].versionTitle,
    selected: currentVersion === pageVersion,
    href: versionToHref(pageVersion),
    extra: {
      arrow: false,
      info: false,
    },
    divider: false,
  }))

  const hasEnterpriseVersions = (page.applicableVersions || []).some((pageVersion) =>
    pageVersion.startsWith('enterprise-server'),
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
