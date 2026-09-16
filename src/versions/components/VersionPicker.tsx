import { useRouter } from 'next/router'
import { useId, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { ActionMenu, ActionList } from '@primer/react'
import { ActionMenu as BrandActionMenu } from '@primer/react-brand'
import { ArrowRightIcon, DotFillIcon, InfoIcon, TriangleDownIcon } from '@primer/octicons-react'
import cx from 'classnames'

import Cookies from '@/frame/components/lib/cookies'
import { USER_VERSION_COOKIE_NAME } from '@/frame/lib/constants'
import { useMainContext } from '@/frame/components/context/MainContext'
import { ActionMenuTrigger } from '@/frame/components/page-header/ActionMenuTrigger'
import { DEFAULT_VERSION, useVersion } from '@/versions/components/useVersion'
import { useTranslation } from '@/languages/components/useTranslation'

import styles from './VersionPicker.module.scss'
// The header variant's trigger, menu surface and rows are shared with the language
// picker so the two dropdowns cannot drift apart.
import headerStyles from '@/frame/components/page-header/HeaderPicker.module.scss'

type Props = {
  variant?: 'default' | 'header'
  onNavigate?: () => void
}

type VersionPickerLink = {
  text: string
  selected: boolean
  href: string
  // Brand's ActionMenu identifies the chosen row by string value, so every row needs
  // one. Versions use their own version name; the two extra rows use sentinels.
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

// Brand clones ActionMenu.Button with its own ref, so the trigger cannot be reached
// through a React ref. A stable test id keeps both the Escape handler and the tests
// off Brand's hashed CSS class names.
const HEADER_TRIGGER_TESTID = 'version-picker-button'

type PlanMenuItemProps = {
  item: VersionPickerLink
  // Injected by ActionMenu.Overlay, which clones each of its direct children with the
  // select handler and the selection type derived from `selectionVariant`.
  handler?: (value: string) => void
  type?: 'none' | 'single' | 'link'
}

const PlanMenuItem = ({ item, handler, type }: PlanMenuItemProps) => {
  const isExtra = Boolean(item.extra.arrow || item.extra.info)

  return (
    <BrandActionMenu.Item
      handler={handler}
      // Brand derives both `role` and `aria-checked` from `type`. The two extra rows
      // navigate elsewhere instead of choosing a version, so under the injected
      // 'single' they would render role="menuitem" *plus* aria-checked — which axe
      // rejects, since aria-checked is not an allowed attribute on menuitem. Overlay
      // injects `type` into its direct children only, so this wrapper is the seam
      // where a single row can opt out of selection semantics.
      type={isExtra ? 'none' : type}
      value={item.value}
      selected={item.selected}
      className={cx(
        headerStyles.headerMenuItem,
        item.selected && headerStyles.headerMenuItemSelected,
      )}
      // Only spread `role` for the extras: passing `role={undefined}` would override
      // the role Brand computes and leave the version rows with no role at all.
      {...(isExtra ? { role: 'menuitem' } : {})}
    >
      <span data-testid="version-picker-item" className={headerStyles.headerMenuItemLabel}>
        {item.text}
        {item.extra.arrow && <ArrowRightIcon verticalAlign="middle" size={15} className="ml-1" />}
        {item.extra.info && <InfoIcon verticalAlign="middle" size={15} className="ml-1" />}
      </span>
      {/* The design marks the current plan with a trailing green dot instead of
          Brand's leading check icon, which the stylesheet hides. */}
      {item.selected && <DotFillIcon size={16} className={headerStyles.headerMenuItemDot} />}
    </BrandActionMenu.Item>
  )
}

// The rule between the version rows and the two navigation rows. Brand has no divider
// child, and ActionMenu.Overlay clones every direct child with `handler` and `type`,
// so this wrapper takes no props at all: the injected ones are swallowed here instead
// of landing on the DOM node. The <li> carries no tabIndex and no `data-value`, so
// Brand's focus zone and its Enter handler both skip it — and it is never the menu's
// first or last <li>, which are the two rows Brand wires its arrow-key wrap-around to.
const PlanMenuSeparator = () => <li role="separator" className={headerStyles.headerMenuSeparator} />

export const VersionPicker = ({ variant = 'default', onNavigate }: Props) => {
  const router = useRouter()
  const { currentVersion } = useVersion()
  const mainContext = useMainContext()
  const [open, setOpen] = useState(false)
  const pickerId = useId()
  const isHeader = variant === 'header'
  // Use TypeScript's "not null assertion" because mainContext.page should
  // be present in mainContext if it's gotten to the stage of React
  // rendering.
  const page = mainContext.page!
  const { allVersions, enterpriseServerVersions } = mainContext
  const { t } = useTranslation(['pages', 'picker'])

  // The same control chooses a plan on dotcom and Enterprise Cloud but a numbered
  // release on Enterprise Server, where `versionTitle` is `${planTitle} ${release}`.
  // A single "Select your plan:" would announce "Select your plan: Enterprise
  // Server 3.19" to screen readers. Uses the same `startsWith` predicate as
  // `hasEnterpriseVersions` below: `hasNumberedReleases` is set on the runtime
  // version object but is not declared on the `VersionItem` type.
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
      onNavigate?.()
      router.push(item.href)
    }
  }

  if (isHeader) {
    // The Figma dropdown node draws no divider, but the rule that separated the
    // versions from the two navigation rows is kept from the @primer/react menu this
    // replaced. The filter keeps it from ever becoming the menu's first or last row:
    // Brand focuses the first <li> and binds its arrow-key wrap-around to the first
    // and the last, and neither should land on a separator.
    const headerLinks = allLinks.filter(
      (item, index) => !item.divider || (index > 0 && index < allLinks.length - 1),
    )

    // Brand reports the chosen row by value. Routing every row — the two extras
    // included — back through handleVersionSelect keeps navigation client-side
    // instead of letting the extras become anchors that reload the page.
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

      // Brand's ActionMenu and SubdomainNavBar both listen for Escape on `document`
      // and neither honours defaultPrevented, so a single Escape would close this
      // picker *and* the surrounding narrow menu. Stopping the event here — while it
      // is still in its capture phase, before it reaches either listener — leaves the
      // outer menu open. Brand has no controlled `open` prop, so the picker is closed
      // through its own trigger: focus it first so focus stays put, then click it to
      // let ActionMenu toggle itself shut.
      event.preventDefault()
      event.stopPropagation()
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
