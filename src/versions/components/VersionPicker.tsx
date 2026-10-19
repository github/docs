import { useRouter } from 'next/router'
import { useId, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { ActionMenu, ActionList } from '@primer/react'
import { ActionMenu as BrandActionMenu } from '@primer/react-brand'
import { ArrowRightIcon, DotFillIcon, InfoIcon, TriangleDownIcon } from '@primer/octicons-react'
import cx from 'clsx'

import Cookies from '@/frame/components/lib/cookies'
import { USER_VERSION_COOKIE_NAME } from '@/frame/lib/constants'
import { useMainContext } from '@/frame/components/context/MainContext'
import { ActionMenuTrigger } from '@/frame/components/page-header/ActionMenuTrigger'
import { DEFAULT_VERSION, useVersion } from '@/versions/components/useVersion'
import { useTranslation } from '@/languages/components/useTranslation'

import styles from './VersionPicker.module.scss'
// The header variant shares HeaderPicker.module.scss with the language picker,
// so the two dropdowns stay in sync.
import headerStyles from '@/frame/components/page-header/HeaderPicker.module.scss'

type Props = {
  variant?: 'default' | 'header'
  onNavigate?: () => void
}

type VersionPickerLink = {
  text: string
  selected: boolean
  href: string
  // Brand's ActionMenu identifies rows by string value. Versions use their version
  // name; extra rows use sentinels.
  value: string
  extra: {
    arrow: boolean
    info: boolean
    version?: string
  }
  divider: boolean
}

const ALL_RELEASES_VALUE = 'all-enterprise-releases'
const ABOUT_VERSIONS_VALUE = 'about-versions'

// Brand clones ActionMenu.Button with its own ref, so React refs cannot reach the
// trigger. A stable test id keeps the Escape handler and tests off hashed CSS classes.
const HEADER_TRIGGER_TESTID = 'version-picker-button'

type PlanMenuItemProps = {
  item: VersionPickerLink
  // ActionMenu.Overlay injects handler and type into each direct child.
  handler?: (value: string) => void
  type?: 'none' | 'single' | 'link'
}

// Extra rows opt out of Brand selection semantics because axe rejects aria-checked
// on menuitem, and Brand derives both role and aria-checked from type.
const PlanMenuItem = ({ item, handler, type }: PlanMenuItemProps) => {
  const isExtra = Boolean(item.extra.arrow || item.extra.info)

  return (
    <BrandActionMenu.Item
      handler={handler}
      type={isExtra ? 'none' : type}
      value={item.value}
      selected={item.selected}
      className={cx(
        headerStyles.headerMenuItem,
        item.selected && headerStyles.headerMenuItemSelected,
      )}
      // Only spread role for extras; role undefined overrides Brand's computed role.
      {...(isExtra ? { role: 'menuitem' } : {})}
    >
      <span data-testid="version-picker-item" className={headerStyles.headerMenuItemLabel}>
        {item.text}
        {item.extra.arrow && <ArrowRightIcon verticalAlign="middle" size={15} className="ml-1" />}
        {item.extra.info && <InfoIcon verticalAlign="middle" size={15} className="ml-1" />}
      </span>
      {/* HeaderPicker.module.scss hides Brand's leading check icon; design uses a trailing green dot. */}
      {item.selected && <DotFillIcon size={16} className={headerStyles.headerMenuItemDot} />}
    </BrandActionMenu.Item>
  )
}

// Brand lacks a divider child, and ActionMenu.Overlay injects handler and type into
// every direct child. This wrapper swallows those props so they do not reach the li.
// Without tabIndex or data-value, Brand's focus zone and Enter handler skip the
// separator. The caller keeps it away from the first and last li, which Brand uses
// for arrow-key wrap-around.
const PlanMenuSeparator = () => <li role="separator" className={headerStyles.headerMenuSeparator} />

// VersionPicker uses startsWith to identify Enterprise Server because VersionItem
// omits hasNumberedReleases. The label says "version" for Enterprise Server because
// versionTitle includes the numbered release; a "plan" label would make screen
// readers announce "Select your plan: Enterprise Server 3.19".
export const VersionPicker = ({ variant = 'default', onNavigate }: Props) => {
  const router = useRouter()
  const { currentVersion } = useVersion()
  const mainContext = useMainContext()
  const [open, setOpen] = useState(false)
  const pickerId = useId()
  const isHeader = variant === 'header'
  // React rendering only starts after MainContext adds page.
  const page = mainContext.page!
  const { allVersions, enterpriseServerVersions } = mainContext
  const { t } = useTranslation(['pages', 'picker'])

  const pickerLabel = currentVersion.startsWith('enterprise-server')
    ? t('version_picker_label')
    : t('plan_picker_label')

  if (page.applicableVersions && page.applicableVersions.length < 1) {
    return null
  }

  const versionToHref = (version: string) => {
    const prefix = `/${router.locale}${version === DEFAULT_VERSION ? '' : `/${version}`}`
    return prefix + router.asPath.replace(`/${currentVersion}`, '')
  }

  const allLinks: VersionPickerLink[] = (page.applicableVersions || []).map((pageVersion) => ({
    text: allVersions[pageVersion].versionTitle,
    selected: currentVersion === pageVersion,
    href: versionToHref(pageVersion),
    value: pageVersion,
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
    value: 'divider',
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
      value: ALL_RELEASES_VALUE,
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
      value: ABOUT_VERSIONS_VALUE,
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
    // Navigation rows leave the existing version preference alone.
    if (item.extra?.version) {
      try {
        Cookies.set(USER_VERSION_COOKIE_NAME, item.extra.version)
      } catch (err) {
        console.warn('Unable to set preferred version cookie', err)
      }
    }
    setOpen(false)
    // Set the cookie before navigation so the next page can read the preference.
    if (item.href) {
      onNavigate?.()
      router.push(item.href)
    }
  }

  if (isHeader) {
    // Keep the separator from the default picker, but not where Brand focuses or wraps rows.
    const headerLinks = allLinks.filter(
      (item, index) => !item.divider || (index > 0 && index < allLinks.length - 1),
    )

    // Route extra rows through handleVersionSelect so they stay client-side.
    const handleHeaderSelect = (value: string) => {
      const item = headerLinks.find((link) => link.value === value)
      if (item) {
        handleVersionSelect(item)
      }
    }

    const handleEscapeCapture = (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key !== 'Escape') return

      const trigger = event.currentTarget.querySelector<HTMLButtonElement>(
        `[data-testid="${HEADER_TRIGGER_TESTID}"]`,
      )
      if (trigger?.getAttribute('aria-expanded') !== 'true') return

      // Stop Escape in capture so SubdomainNavBar's document listener leaves the narrow menu open.
      event.preventDefault()
      event.stopPropagation()
      // Brand has no controlled open prop, so click its focused trigger to close it.
      trigger.focus()
      trigger.click()
    }

    return (
      <div
        data-testid="version-picker"
        className={headerStyles.headerPicker}
        onKeyDownCapture={handleEscapeCapture}
      >
        <span className={headerStyles.headerLabel} id={`${pickerId}-label`}>
          {pickerLabel}
        </span>
        <BrandActionMenu
          size="small"
          selectionVariant="single"
          menuAlignment="start"
          onSelect={handleHeaderSelect}
        >
          <ActionMenuTrigger
            data-testid={HEADER_TRIGGER_TESTID}
            className={cx(headerStyles.headerButton, headerStyles.headerPillButton)}
            aria-labelledby={`${pickerId}-label ${pickerId}-value`}
            trailingVisual={<TriangleDownIcon size={16} />}
          >
            <span className={headerStyles.headerValue} id={`${pickerId}-value`} data-testid="field">
              {selectedOption?.text || t('version_picker_default_text')}
            </span>
          </ActionMenuTrigger>
          <BrandActionMenu.Overlay aria-label={pickerLabel}>
            {headerLinks.map((item) =>
              item.divider ? (
                <PlanMenuSeparator key={item.value} />
              ) : (
                <PlanMenuItem key={item.value} item={item} />
              ),
            )}
          </BrandActionMenu.Overlay>
        </BrandActionMenu>
      </div>
    )
  }

  return (
    <div data-testid="version-picker">
      <ActionMenu open={open} onOpenChange={setOpen}>
        <ActionMenu.Button
          variant="invisible"
          className="color-fg-default width-full p-1 pl-2 pr-2"
        >
          <span className={styles.pickerLabel}>{'Version: '}</span>
          <span className="f5 color-fg-muted text-normal" data-testid="field">
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
