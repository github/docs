import { DotFillIcon, GlobeIcon, TriangleDownIcon } from '@primer/octicons-react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import type { KeyboardEvent } from 'react'
import cx from 'classnames'

import { useLanguages } from '@/languages/components/LanguagesContext'
import { useUserLanguage } from '@/languages/components/useUserLanguage'
import { ActionList, ActionMenu, IconButton } from '@primer/react'
import { ActionMenu as BrandActionMenu } from '@primer/react-brand'
import { ActionMenuTrigger } from '@/frame/components/page-header/ActionMenuTrigger'

// The header variant shares its trigger, menu surface and rows with the plan/version
// picker so the two header dropdowns cannot drift apart.
import styles from '@/frame/components/page-header/HeaderPicker.module.scss'

type Props = {
  variant?: 'default' | 'header'
  onNavigate?: () => void
}

// Brand clones ActionMenu.Button with its own ref, so the trigger cannot be reached
// through a React ref. A stable test id keeps the Escape handler off Brand's hashed
// CSS class names.
const HEADER_TRIGGER_TESTID = 'language-picker-button'

export const LanguagePicker = ({ variant = 'default', onNavigate }: Props) => {
  const router = useRouter()
  const { languages } = useLanguages()
  const { setUserLanguageCookie } = useUserLanguage()
  const [open, setOpen] = useState(false)
  const isHeader = variant === 'header'

  const locale = router.locale || 'en'

  // Remember, in this context `languages` is only the active ones
  // that are available.
  // Also, if the current context has a page and that page has own ideas
  // about which languages it's available in (e.g. early-access)
  // it would already have been pared down.
  const langs = Object.values(languages)

  if (langs.length < 2) {
    return null
  }

  const selectedLang = languages[locale]
  const triggerLabel = `Select language: current language is ${selectedLang.name}`

  // The `router.asPath` will always be without a hash in SSR
  // So to avoid a hydration failure on the client, we have to
  // normalize it to be without the hash. That way the path is treated
  // in a "denormalized" way.
  const routerPath = router.asPath.split('#')[0]

  const languageHref = (code: string) => `/${code}${routerPath}`

  const rememberLanguage = (code: string) => {
    try {
      setUserLanguageCookie(code)
    } catch (err) {
      // You can never be too careful because setting a cookie
      // can fail. For example, some browser
      // extensions disallow all setting of cookies and attempts
      // at the `document.cookie` setter could throw. Just swallow
      // and move on.
      console.warn('Unable to set preferred language cookie', err)
    }
  }

  if (isHeader) {
    // Brand reports the chosen row by value, and the rows deliberately are not
    // anchors: Brand's Overlay focuses the <li> and installs its own Enter handler
    // that reads `data-value` and calls `onSelect`, so an `as="a"` row would close
    // the menu on Enter without following the link (and Brand's anchor branch never
    // sets aria-checked). Navigation happens here instead. The locale prefix is
    // already in the path, so `locale: false` stops Next adding a second one — the
    // same call the repo's own Link makes for locale-prefixed hrefs.
    const handleSelect = (code: string) => {
      if (!code) return
      rememberLanguage(code)
      // Brand's ActionMenu closes itself once a row reports its value, so there is no
      // `open` state to reset here; `onNavigate` is what closes the narrow menu the
      // picker may be sitting inside.
      onNavigate?.()
      router.push(languageHref(code), undefined, { locale: false })
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
        data-testid="language-picker"
        className={styles.headerPicker}
        onKeyDownCapture={handleEscapeCapture}
      >
        <BrandActionMenu
          size="small"
          selectionVariant="single"
          // The language control sits at the header's right edge, and Brand anchors
          // with `allowOutOfBounds`, so the menu has to grow leftwards from the
          // trigger's end edge to stay on screen.
          menuAlignment="end"
          onSelect={handleSelect}
        >
          <ActionMenuTrigger
            data-testid={HEADER_TRIGGER_TESTID}
            className={cx(styles.headerButton, styles.headerFlatButton)}
            aria-label={triggerLabel}
            leadingVisual={<GlobeIcon size={16} />}
            trailingVisual={<TriangleDownIcon size={16} />}
          >
            <span className={styles.headerValue} data-testid="language-picker-field">
              {selectedLang.nativeName || selectedLang.name}
            </span>
          </ActionMenuTrigger>
          <BrandActionMenu.Overlay aria-label="Select language">
            {langs.map((lang) => (
              <BrandActionMenu.Item
                key={lang.code}
                value={lang.code}
                selected={lang === selectedLang}
                lang={lang.code}
                className={cx(
                  styles.headerMenuItem,
                  lang === selectedLang && styles.headerMenuItemSelected,
                )}
              >
                <span data-testid="language-picker-item" className={styles.headerMenuItemLabel}>
                  {lang.nativeName || lang.name}
                </span>
                {/* The design marks the current language with a trailing green dot
                    instead of Brand's leading check icon, which the stylesheet hides. */}
                {lang === selectedLang && (
                  <DotFillIcon size={16} className={styles.headerMenuItemDot} />
                )}
              </BrandActionMenu.Item>
            ))}
          </BrandActionMenu.Overlay>
        </BrandActionMenu>
      </div>
    )
  }

  // languageList is specifically ActionList items which are reused
  // for menus that behave differently at the breakpoints.
  const languageList = langs.map((lang) => (
    <ActionList.LinkItem
      key={`/${lang.code}${routerPath}`}
      as="a"
      active={lang === selectedLang}
      lang={lang.code}
      href={languageHref(lang.code)}
      onClick={() => {
        if (lang.code) {
          rememberLanguage(lang.code)
        }
        setOpen(false)
        onNavigate?.()
      }}
    >
      {lang.nativeName || lang.name}
    </ActionList.LinkItem>
  ))

  return (
    <div data-testid="language-picker" className="d-flex">
      <ActionMenu open={open} onOpenChange={setOpen}>
        <ActionMenu.Anchor>
          <IconButton icon={GlobeIcon} aria-label={triggerLabel} />
        </ActionMenu.Anchor>
        <ActionMenu.Overlay align="end">
          <ActionList selectionVariant="single">{languageList}</ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
    </div>
  )
}
