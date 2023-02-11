import { useCallback, useEffect, useRef, useState } from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'
import { AnchoredOverlay, IconButton } from '@primer/react'
import {
  KebabHorizontalIcon,
  LinkExternalIcon,
  MarkGithubIcon,
  SearchIcon,
  XIcon,
} from '@primer/octicons-react'

import { DEFAULT_VERSION, useVersion } from 'components/hooks/useVersion'
import { Link } from 'components/Link'
import { useMainContext } from 'components/context/MainContext'
import { useHasAccount } from 'components/hooks/useHasAccount'
import { LanguagePicker } from './LanguagePicker'
import { HeaderNotifications } from 'components/page-header/HeaderNotifications'
import { ApiVersionPicker } from 'components/sidebar/ApiVersionPicker'
import { useTranslation } from 'components/hooks/useTranslation'
import { Search } from 'components/Search'
import { VersionPicker } from 'components/page-header/VersionPicker'

import styles from './Header.module.scss'

export const Header = () => {
  const router = useRouter()
  const { error } = useMainContext()
  const { currentProduct, allVersions } = useMainContext()
  const { currentVersion } = useVersion()
  const { t } = useTranslation(['header'])
  const isRestPage = currentProduct && currentProduct.id === 'rest'
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [scroll, setScroll] = useState(false)
  const { hasAccount } = useHasAccount()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const openMenuOverlay = useCallback(() => setIsMenuOpen(true), [setIsMenuOpen])
  const closeMenuOverlay = useCallback(() => setIsMenuOpen(false), [setIsMenuOpen])
  const isMounted = useRef(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const signupCTAVisible =
    hasAccount === false && // don't show if `null`
    (currentVersion === DEFAULT_VERSION || currentVersion === 'enterprise-cloud@latest')

  useEffect(() => {
    function onScroll() {
      setScroll(window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    const close = (e: { key: string }) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false)
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  // For the UI in smaller browswer widths, and focus the picker menu button when the search
  // input is closed.
  useEffect(() => {
    if (!isSearchOpen && isMounted.current && menuButtonRef.current) {
      menuButtonRef.current.focus()
    }

    if (!isMounted.current) {
      isMounted.current = true
    }
  }, [isSearchOpen])

  return (
    <>
      <div
        className={cx(
          'border-bottom d-unset color-border-muted no-print z-3 color-bg-default',
          styles.header
        )}
      >
        {error !== '404' && <HeaderNotifications />}
        <header
          className={cx(
            'color-bg-default px-3 pt-3 pb-3 position-sticky top-0 z-1 border-bottom',
            scroll && 'color-shadow-small'
          )}
        >
          <div
            className="d-flex flex-justify-between flex-items-center flex-wrap"
            data-testid="desktop-header"
          >
            <div
              tabIndex={-1}
              className={cx(isSearchOpen ? styles.logoWithOpenSearch : styles.logoWithClosedSearch)}
              id="github-logo"
            >
              <Link
                href={`/${router.locale}`}
                className="d-flex flex-items-center color-fg-default no-underline mr-3"
              >
                <MarkGithubIcon size={32} />
                <span className="h4 text-semibold ml-2">{t('github_docs')}</span>
              </Link>
              <div className="hide-sm border-left">
                <VersionPicker />
              </div>
            </div>

            <div
              className={cx('d-flex flex-items-center', isSearchOpen && styles.widgetsContainer)}
            >
              {/* <!-- GitHub.com homepage and 404 page has a stylized search; Enterprise homepages do not --> */}
              {error !== '404' && (
                <div
                  className={cx(
                    isSearchOpen
                      ? styles.searchContainerWithOpenSearch
                      : styles.searchContainerWithClosedSearch,
                    'mr-3'
                  )}
                >
                  <Search />
                </div>
              )}

              <div className={cx('d-none d-lg-flex flex-items-center', signupCTAVisible && 'mr-3')}>
                <LanguagePicker />
              </div>

              {signupCTAVisible && (
                <div data-testid="header-signup" className="border-left">
                  <a
                    href="https://github.com/signup?ref_cta=Sign+up&ref_loc=docs+header&ref_page=docs"
                    target="_blank"
                    rel="noopener"
                    className="d-none d-lg-flex ml-3 btn color-fg-muted"
                  >
                    {t`sign_up_cta`}
                  </a>
                </div>
              )}

              <IconButton
                className={cx(
                  'hide-lg hide-xl',
                  !isSearchOpen ? 'd-flex flex-items-center' : 'd-none'
                )}
                data-testid="mobile-search-button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Open Search Bar"
                aria-expanded={isSearchOpen ? 'true' : 'false'}
                icon={SearchIcon}
              />
              <IconButton
                className={cx(
                  isSearchOpen
                    ? styles.closeSearchButtonWithOpenSearch
                    : styles.closeSearchButtonWithClosedSearch
                )}
                data-testid="mobile-search-button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Close Search Bar"
                aria-expanded={isSearchOpen ? 'true' : 'false'}
                icon={XIcon}
              />

              {/* The ... navigation menu at medium and smaller widths */}
              <nav>
                <AnchoredOverlay
                  renderAnchor={(anchorProps) => (
                    <IconButton
                      data-testid="mobile-menu"
                      className={cx(
                        isSearchOpen
                          ? styles.menuButtonWithOpenSearch
                          : styles.menuButtonWithClosedSearch
                      )}
                      {...anchorProps}
                      icon={KebabHorizontalIcon}
                      aria-label="Open Menu Bar"
                    />
                  )}
                  open={isMenuOpen}
                  onOpen={openMenuOverlay}
                  onClose={closeMenuOverlay}
                  aria-labelledby="menu-title"
                >
                  <div
                    data-testid="open-mobile-menu"
                    className={cx('pt-2', !signupCTAVisible && 'pb-2', styles.menuOverlay)}
                  >
                    <span id="menu-title" className="f6 px-3 py-2 mb-1 d-block h6 color-fg-muted">
                      {t('menu')}
                    </span>
                    <span className="px-2 pb-2 m-2 d-block d-sm-none">
                      <VersionPicker mediumOrLower={true} />
                    </span>
                    <span className="px-2 pb-2 m-2 d-block">
                      <LanguagePicker mediumOrLower={true} />
                    </span>
                    {isRestPage && allVersions[currentVersion].apiVersions.length > 0 && (
                      <span className="pb-2 m-2 d-block">
                        <ApiVersionPicker mediumOrLower={true} />
                      </span>
                    )}
                    {signupCTAVisible && (
                      <Link
                        href="https://github.com/signup?ref_cta=Sign+up&ref_loc=docs+header&ref_page=docs"
                        target="_blank"
                        rel="noopener"
                        data-testid="mobile-signup"
                        className="d-flex flex-justify-between flex-items-center color-fg-muted border-top px-3 py-3"
                      >
                        {t`sign_up_cta`}
                        <LinkExternalIcon />
                      </Link>
                    )}
                  </div>
                </AnchoredOverlay>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}
