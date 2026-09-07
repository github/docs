import { useRouter } from 'next/router'
import { useState } from 'react'
import { ActionMenu, ActionList } from '@primer/react'
import { ArrowRightIcon, InfoIcon } from '@primer/octicons-react'
import cx from 'classnames'

import Cookies from '@/frame/components/lib/cookies'
import { USER_VERSION_COOKIE_NAME } from '@/frame/lib/constants'
import { useMainContext } from '@/frame/components/context/MainContext'
import { DEFAULT_VERSION, useVersion } from '@/versions/components/useVersion'
import { useTranslation } from '@/languages/components/useTranslation'

import styles from './VersionPicker.module.scss'

type Props = {
  xs?: boolean
}

export const VersionPicker = ({ xs }: Props) => {
  const router = useRouter()
  const { currentVersion } = useVersion()
  const mainContext = useMainContext()
  const [open, setOpen] = useState(false)
  // Use TypeScript's "not null assertion" because mainContext.page should
  // be present in mainContext if it's gotten to the stage of React
  // rendering.
  const page = mainContext.page!
  const { allVersions, enterpriseServerVersions } = mainContext
  const { t } = useTranslation(['pages', 'picker'])

  if (page.applicableVersions && page.applicableVersions.length < 1) {
    return null
  }

  const versionToHref = (version: string) => {
    const prefix = `/${router.locale}${version === DEFAULT_VERSION ? '' : `/${version}`}`
    return prefix + router.asPath.replace(`/${currentVersion}`, '')
  }

  type VersionPickerLink = {
    text: string
    selected: boolean
    href: string
    extra: {
      arrow: boolean
      info: boolean
      version?: string
    }
    divider: boolean
  }

  const allLinks: VersionPickerLink[] = (page.applicableVersions || []).map((pageVersion) => ({
    text: allVersions[pageVersion].versionTitle,
    selected: currentVersion === pageVersion,
    href: versionToHref(pageVersion),
    extra: {
      arrow: false,
      info: false,
      version: pageVersion,
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
      version: undefined,
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
        version: undefined,
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
        version: undefined,
      },
      divider: false,
    })
  }

  const selectedOption = allLinks.find((item) => item.selected)

  const handleVersionSelect = (item: VersionPickerLink) => {
    // Save the user's version preference when they actively select one
    if (item.extra?.version) {
      try {
        Cookies.set(USER_VERSION_COOKIE_NAME, item.extra.version)
      } catch (err) {
        console.warn('Unable to set preferred version cookie', err)
      }
    }
    setOpen(false)
    // Navigate after setting cookie
    if (item.href) {
      router.push(item.href)
    }
  }

  return (
    <div data-testid="version-picker" className={xs ? 'd-flex' : ''}>
      <ActionMenu open={open} onOpenChange={setOpen}>
        <ActionMenu.Button
          variant="invisible"
          className={`color-fg-default width-full p-1 pl-2 pr-2`}
        >
          <span className={styles.pickerLabel}>{xs ? `Version\n` : `Version: `}</span>
          <span className={`f${xs ? 6 : 5} color-fg-muted text-normal`} data-testid="field">
            {selectedOption?.text || t('version_picker_default_text')}
          </span>
        </ActionMenu.Button>
        <ActionMenu.Overlay width="auto" align="end">
          <ActionList selectionVariant="single" role="menu">
            {allLinks.map((item, i) =>
              item.divider ? (
                <ActionList.Divider key={`divider${i}`} />
              ) : (
                <ActionList.Item
                  key={item.text}
                  active={item.selected}
                  onSelect={(e) => {
                    e.preventDefault()
                    handleVersionSelect(item)
                  }}
                  className={cx((item.extra?.arrow || item.extra?.info) && styles.extrasDisplay)}
                  role={item.extra?.arrow || item.extra?.info ? 'menuitem' : 'menuitemradio'}
                >
                  <div data-testid="version-picker-item" className={styles.itemsWidth}>
                    {item.text}
                    {item.extra?.arrow && (
                      <ArrowRightIcon verticalAlign="middle" size={15} className="ml-1" />
                    )}
                    {item.extra?.info && (
                      <InfoIcon verticalAlign="middle" size={15} className="ml-1" />
                    )}
                  </div>
                </ActionList.Item>
              ),
            )}
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
    </div>
  )
}
