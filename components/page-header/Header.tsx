import { useCallback, useEffect, useRef, useState } from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'
import { ActionList, ActionMenu, Dialog, IconButton } from '@primer/react'
import {
  KebabHorizontalIcon,
  LinkExternalIcon,
  MarkGithubIcon,
  SearchIcon,
  ThreeBarsIcon,
  XIcon,
} from '@primer/octicons-react'

import { DEFAULT_VERSION, useVersion } from 'src/versions/components/useVersion'
import { Link } from 'components/Link'
import { useMainContext } from 'components/context/MainContext'
import { useHasAccount } from 'components/hooks/useHasAccount'
import { LanguagePicker } from 'src/languages/components/LanguagePicker'
import { HeaderNotifications } from 'components/page-header/HeaderNotifications'
import { ApiVersionPicker } from 'src/rest/components/ApiVersionPicker'
import { useTranslation } from 'src/languages/components/useTranslation'
import { Search } from 'src/search/components/Search'
import { Breadcrumbs } from 'components/page-header/Breadcrumbs'
import { VersionPicker } from 'src/versions/components/VersionPicker'
import { SidebarNav } from 'components/sidebar/SidebarNav'
import { AllProductsLink } from 'components/sidebar/AllProductsLink'

import styles from './Header.module.scss'

export const Header = () => {
  const router = useRouter()
  const { error } = useMainContext()
  const { isHomepageVersion, currentProduct } = useMainContext()
  const { currentVersion } = useVersion()
  const { t } = useTranslation(['header'])
  const isRestPage = currentProduct && currentProduct.id === 'rest'
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [scroll, setScroll] = useState(false)
  const { hasAccount } = useHasAccount()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const openSidebar = useCallback(() => setIsSidebarOpen(true), [isSidebarOpen])
  const closeSidebar = useCallback(() => setIsSidebarOpen(false), [isSidebarOpen])
  const isMounted = useRef(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const { asPath } = useRouter()
  const isSearchResultsPage = router.route === '/search'
  const signupCTAVisible =
    hasAccount === false && // don't show if `null`
    (currentVersion === DEFAULT_VERSION || currentVersion === 'enterprise-cloud@latest')
  const { width } = useWidth()
  const returnFocusRef = useRef(null)

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

  // When the sidebar overlay is opened, prevent the main content from being
  // scrollable.
  useEffect(() => {
    const bodyDiv = document.querySelector('body div') as HTMLElement
    const body = document.querySelector('body')
    if (bodyDiv && body) {
      // The full sidebar automatically shows at the xl window size so unlock
      // scrolling if the overlay was opened and the window size is increased to xl.
      body.style.overflow = isSidebarOpen && width && width < 1280 ? 'hidden' : 'auto'
    }
  }, [isSidebarOpen])

  // with client side navigation clicking sidebar overlay links doesn't dismiss
  // the overlay so we close it ourselves when the path changes
  useEffect(() => {
    setIsSidebarOpen(false)
  }, [asPath])

  // on REST pages there are sidebar links that are hash anchor links to different
  // sections on the same page so the sidebar overlay doesn't dismiss.  we listen
  // for hash changes and close the overlay when the hash changes.
  useEffect(() => {
    const hashChangeHandler = () => {
      setIsSidebarOpen(false)
    }
    window.addEventListener('hashchange', hashChangeHandler)

    return () => {
      window.removeEventListener('hashchange', hashChangeHandler)
    }
  }, [])

  function useWidth() {
    const hasWindow = typeof window !== 'undefined'

    function getWidth() {
      const width = hasWindow ? window.innerWidth : null
      return {
        width,
      }
    }

    const [width, setWidth] = useState(getWidth())

    useEffect(() => {
      if (hasWindow) {
        const handleResize = function () {
          setWidth(getWidth())
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
      }
    }, [hasWindow])

    return width
  }

  return (
    <>
      <div
        data-container="header"
        className={cx(
          'border-bottom d-unset color-border-muted no-print z-3 color-bg-default',
          styles.header,
        )}
      >
        {error !== '404' && <HeaderNotifications />}
        <header
          className={cx(
            'color-bg-default p-2 position-sticky top-0 z-1 border-bottom',
            scroll && 'color-shadow-small',
          )}
          role="banner"
          aria-label="Main"
        >
          <div
            className="d-flex flex-justify-between p-2 flex-items-center flex-wrap"
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
                <span className="h4 text-semibold ml-2 mr-3">{t('github_docs')}</span>
              </Link>
              <div className="hide-sm border-left pl-3">
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
                    'mr-3',
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
                  !isSearchOpen ? 'd-flex flex-items-center' : 'd-none',
                )}
                data-testid="mobile-search-button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Open Search Bar"
                aria-expanded={isSearchOpen ? 'true' : 'false'}
                icon={SearchIcon}
              />
              <IconButton
                className="px-3"
                data-testid="mobile-search-button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Close Search Bar"
                aria-expanded={isSearchOpen ? 'true' : 'false'}
                icon={XIcon}
                sx={
                  isSearchOpen
                    ? {
                        // The x button to close the small width search UI when search is open, as the
                        // browser width increases to md and above we no longer show that search UI so
                        // the close search button is hidden as well.
                        // breakpoint(md)
                        '@media (min-width: 768px)': {
                          display: 'none',
                        },
                      }
                    : {
                        display: 'none',
                      }
                }
              />

              {/* The ... navigation menu at medium and smaller widths */}
              <div>
                <ActionMenu aria-labelledby="menu-title">
                  <ActionMenu.Anchor>
                    <IconButton
                      data-testid="mobile-menu"
                      icon={KebabHorizontalIcon}
                      aria-label="Open Menu"
                      sx={
                        isSearchOpen
                          ? // The ... menu button when the smaller width search UI is open.  Since the search
                            // UI is open, we don't show the button at smaller widths but we do show it as
                            // the browser width increases to md, and then at lg and above widths we hide
                            // the button again since the pickers and sign-up button are shown in the header.
                            {
                              marginLeft: '8px',
                              display: 'none',
                              // breakpoint(md)
                              '@media (min-width: 768px)': {
                                display: 'inline-block',
                                marginLeft: '4px',
                              },
                              // breakpoint(lg)
                              '@media (min-width: 1012px)': {
                                display: 'none',
                              },
                            }
                          : // The ... menu button when the smaller width search UI is closed, the button is
                            // shown up to md.  At lg and above we don't show the button since the pickers
                            // and sign-up button are shown in the header.
                            {
                              marginLeft: '16px',
                              '@media (min-width: 768px)': {
                                marginLeft: '0',
                              },
                              '@media (min-width: 1012px)': {
                                display: 'none',
                              },
                            }
                      }
                    />
                  </ActionMenu.Anchor>
                  <ActionMenu.Overlay align="start">
                    <ActionList>
                      <ActionList.Group data-testid="open-mobile-menu">
                        {width && width > 544 ? (
                          <LanguagePicker mediumOrLower={true} />
                        ) : (
                          <LanguagePicker xs={true} />
                        )}
                        <ActionList.Divider />
                        {width && width < 545 && (
                          <>
                            <VersionPicker xs={true} />
                            <ActionList.Divider />
                          </>
                        )}
                        {signupCTAVisible && (
                          <ActionList.LinkItem
                            href="https://github.com/signup?ref_cta=Sign+up&ref_loc=docs+header&ref_page=docs"
                            target="_blank"
                            rel="noopener"
                            data-testid="mobile-signup"
                            className="d-flex color-fg-muted"
                          >
                            {t`sign_up_cta`}
                            <LinkExternalIcon
                              className="height-full float-right"
                              aria-label="(external site)"
                            />
                          </ActionList.LinkItem>
                        )}{' '}
                      </ActionList.Group>
                    </ActionList>
                  </ActionMenu.Overlay>
                </ActionMenu>
              </div>
            </div>
          </div>
          {!isHomepageVersion && !isSearchResultsPage && (
            <div className="d-flex flex-items-center d-xxl-none mt-2">
              <div className={cx(styles.sidebarOverlayCloseButtonContainer, 'mr-2')}>
                <IconButton
                  data-testid="sidebar-hamburger"
                  className="color-fg-muted"
                  variant="invisible"
                  icon={ThreeBarsIcon}
                  aria-label="Open Sidebar"
                  onClick={openSidebar}
                  ref={returnFocusRef}
                />
                <Dialog
                  returnFocusRef={returnFocusRef}
                  isOpen={isSidebarOpen}
                  onDismiss={closeSidebar}
                  aria-labelledby="menu-title"
                  sx={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    marginTop: '0',
                    maxHeight: '100vh',
                    width: 'auto !important',
                    transform: 'none',
                    borderRadius: '0',
                    borderRight: '1px solid var(--color-border-default)',
                  }}
                >
                  <Dialog.Header
                    style={{ paddingTop: '0px', background: 'none' }}
                    id="sidebar-overlay-header"
                    sx={{ display: 'block' }}
                  >
                    <AllProductsLink />
                    {error === '404' || !currentProduct || isSearchResultsPage ? null : (
                      <div className="mt-3">
                        <Link
                          data-testid="sidebar-product-dialog"
                          href={currentProduct.href}
                          className="d-block pl-1 mb-2 h3 color-fg-default no-underline"
                        >
                          {currentProduct.name}
                        </Link>
                      </div>
                    )}
                    {isRestPage && <ApiVersionPicker />}
                  </Dialog.Header>
                  <SidebarNav variant="overlay" />
                </Dialog>
              </div>
              <div className="mr-auto width-full" data-search="breadcrumbs">
                <Breadcrumbs inHeader={true} />
              </div>
            </div>
          )}
        </header>
      </div>
    </>
  )
}
