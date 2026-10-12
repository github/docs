import { DotFillIcon, GlobeIcon, TriangleDownIcon } from '@primer/octicons-react'
import { useRouter } from 'next/router'
import type { KeyboardEvent } from 'react'
import cx from 'clsx'

import { useLanguages } from '@/languages/components/LanguagesContext'
import { useUserLanguage } from '@/languages/components/useUserLanguage'
import { ActionMenu as BrandActionMenu } from '@primer/react-brand'
import { ActionMenuTrigger } from '@/frame/components/page-header/ActionMenuTrigger'

// The picker shares its trigger, menu surface and rows with the plan/version
// picker so the two header dropdowns cannot drift apart.
import styles from '@/frame/components/page-header/HeaderPicker.module.scss'

type Props = {
  onNavigate?: () => void
}

// Brand clones ActionMenu.Button with its own ref, so the trigger cannot be reached
// through a React ref. A stable test id keeps the Escape handler off Brand's hashed
// CSS class names.
const HEADER_TRIGGER_TESTID = 'language-picker-button'

export const LanguagePicker = ({ onNavigate }: Props) => {
  const router = useRouter()
  const { languages } = useLanguages()
  const { setUserLanguageCookie } = useUserLanguage()

  const locale = router.locale || 'en'

  // languages already excludes inactive languages and page-level availability.
  const langs = Object.values(languages)

  if (langs.length < 2) {
    return null
  }

  const selectedLang = languages[locale]
  const triggerLabel = `Select language: current language is ${selectedLang.name}`

  // SSR paths never include the hash, so strip it to avoid a hydration mismatch.
  const routerPath = router.asPath.split('#')[0]

  const languageHref = (code: string) => `/${code}${routerPath}`

  const rememberLanguage = (code: string) => {
    try {
      setUserLanguageCookie(code)
    } catch (err) {
      // Browser extensions can make document.cookie throw, so log and keep navigation working.
      console.warn('Unable to set preferred language cookie', err)
    }
  }

  // Brand reports the chosen row by value, so navigation happens here. Rows stay
  // list items: Brand's Overlay reads data-value on Enter and calls onSelect,
  // while anchor rows close on Enter without following the link and never get
  // aria-checked.
  const handleSelect = (code: string) => {
    if (!code) return
    rememberLanguage(code)
    // Brand owns open state; onNavigate closes the surrounding narrow menu.
    onNavigate?.()
    // locale: false stops Next adding a second locale prefix, matching Link.
    router.push(languageHref(code), undefined, { locale: false })
  }

  // Brand ActionMenu and SubdomainNavBar both listen for Escape on document and
  // ignore defaultPrevented, so stop it in the capture phase to keep one Escape
  // from closing both menus. Brand has no controlled open prop, so focus and
  // click the trigger to close only the picker.
  const handleEscapeCapture = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Escape') return

    const trigger = event.currentTarget.querySelector<HTMLButtonElement>(
      `[data-testid="${HEADER_TRIGGER_TESTID}"]`,
    )
    if (trigger?.getAttribute('aria-expanded') !== 'true') return

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
        // Grow left from the header's right edge because Brand anchors with allowOutOfBounds.
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
              {/* Brand's check icon is hidden; the design uses a trailing dot. */}
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
