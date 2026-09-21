import type { AnchorHTMLAttributes } from 'react'
import { useRouter } from 'next/router'
import { SubdomainNavBar } from '@primer/react-brand'

import { DEFAULT_VERSION, useVersion } from '@/versions/components/useVersion'
import { useMainContext } from '@/frame/components/context/MainContext'
import { HeaderNotifications } from '@/frame/components/page-header/HeaderNotifications'
import { useTranslation } from '@/languages/components/useTranslation'
import { VersionPicker } from '@/versions/components/VersionPicker'
import { LanguagePicker } from '@/languages/components/LanguagePicker'
import { useLanguages } from '@/languages/components/LanguagesContext'
import { useMultiQueryParams } from '@/search/components/hooks/useMultiQueryParams'
import { SearchOverlayContainer } from '@/search/components/input/SearchOverlayContainer'
import { useHasAccount } from '@/frame/components/hooks/useHasAccount'
import { useHeaderNavigation } from '@/frame/components/page-header/hooks/useHeaderNavigation'

import styles from './Header.module.scss'

// Brand forwards these to its anchor, but its CTA type only lists HTMLAttributes.
const signupLinkProps = {
  href: 'https://github.com/signup?ref_cta=Sign+up&ref_loc=docs+header&ref_page=docs',
  target: '_blank',
  rel: 'noopener',
} satisfies AnchorHTMLAttributes<HTMLAnchorElement>

// Brand renders its own "Skip to content" anchor as a sibling before <header>,
// outside the inert wrapper DefaultLayout draws around the page, so the hook
// needs this id to find and neutralize it while the narrow menu is open.
const SKIP_TO_CONTENT_TARGET_ID = 'main-content'

type Props = {
  isNarrowMenuOpen: boolean
  onNarrowMenuToggle: (isOpen: boolean) => void
}

export const Header = ({ isNarrowMenuOpen, onNarrowMenuToggle }: Props) => {
  const router = useRouter()
  const { error } = useMainContext()
  const { languages } = useLanguages()
  // This context already excludes unavailable languages, including early-access pages.
  // Omit the slot itself so Brand does not render an empty divided language cell.
  const languagePickerVisible = Object.keys(languages).length > 1
  const { currentVersion } = useVersion()
  const { t } = useTranslation(['header', 'search'])
  const { params, updateParams } = useMultiQueryParams()
  const { hasAccount } = useHasAccount()
  const signupCTAVisible =
    hasAccount === false &&
    (currentVersion === DEFAULT_VERSION || currentVersion === 'enterprise-cloud@latest')

  const homeURL = `/${router.locale}${currentVersion === DEFAULT_VERSION ? '' : `/${currentVersion}`}`
  const {
    setHeaderRef,
    searchButtonRef,
    closeNarrowMenu,
    handleClickCapture,
    handleClick,
    isSearchOpen,
    setIsSearchOpen,
  } = useHeaderNavigation({
    homeURL,
    searchTriggerClassName: styles.searchTrigger,
    skipToContentTargetId: SKIP_TO_CONTENT_TARGET_ID,
    isNarrowMenuOpen,
    onNarrowMenuToggle,
  })

  return (
    <div data-container="header" className={styles.header}>
      {error !== '404' && (
        <div inert={isNarrowMenuOpen} aria-hidden={isNarrowMenuOpen || undefined}>
          <HeaderNotifications />
        </div>
      )}
      <div className={styles.stickyContainer}>
        <SubdomainNavBar
          ref={setHeaderRef}
          fixed={false}
          fullWidth
          title={t('header.docs_title')}
          titleHref={homeURL}
          logoHref={homeURL}
          id="github-logo"
          tabIndex={-1}
          role="banner"
          aria-label="Main"
          data-testid="desktop-header"
          skipToContentTargetId={SKIP_TO_CONTENT_TARGET_ID}
          menuLabels={{
            menuLabel: t('header.menu'),
            closeLabel: t('header.close_menu_label'),
          }}
          onNarrowMenuToggle={onNarrowMenuToggle}
          onClickCapture={handleClickCapture}
          onClick={handleClick}
          leadingComponent={<VersionPicker variant="header" onNavigate={closeNarrowMenu} />}
          trailingComponent={
            languagePickerVisible ? (
              <LanguagePicker variant="header" onNavigate={closeNarrowMenu} />
            ) : undefined
          }
        >
          <SubdomainNavBar.Search
            className={styles.searchTrigger}
            placeholder={params['search-overlay-input'] || t('search.input.placeholder_no_icon')}
            labels={{ formatSearchTrigger: () => t('search.input.placeholder_no_icon') }}
            keyboardShortcut={false}
            shortcutLabel="/"
            // Only the trigger is used; the Docs overlay owns input and results.
            onChange={() => undefined}
            onSubmit={(event) => event.preventDefault()}
          />
          {signupCTAVisible && (
            <SubdomainNavBar.SecondaryAction {...signupLinkProps} data-testid="header-signup">
              {t('header.sign_up_cta')}
            </SubdomainNavBar.SecondaryAction>
          )}
        </SubdomainNavBar>
        <SearchOverlayContainer
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
          params={params}
          updateParams={updateParams}
          searchButtonRef={searchButtonRef}
        />
      </div>
    </div>
  )
}
