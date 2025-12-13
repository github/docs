import { useCallback, useEffect, useRef, useState } from 'react'
import type { JSX } from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'
import { Dialog, IconButton } from '@primer/react'
import { MarkGithubIcon, ThreeBarsIcon } from '@primer/octicons-react'

import { DEFAULT_VERSION, useVersion } from '@/versions/components/useVersion'
import { Link } from '@/frame/components/Link'
import { useMainContext } from '@/frame/components/context/MainContext'
import { HeaderNotifications } from '@/frame/components/page-header/HeaderNotifications'
import { ApiVersionPicker } from '@/rest/components/ApiVersionPicker'
import { useTranslation } from '@/languages/components/useTranslation'
import { Breadcrumbs } from '@/frame/components/page-header/Breadcrumbs'
import { VersionPicker } from '@/versions/components/VersionPicker'
import { SidebarNav } from '@/frame/components/sidebar/SidebarNav'
import { SearchBarButton } from '@/search/components/input/SearchBarButton'
import { HeaderSearchAndWidgets } from './HeaderSearchAndWidgets'
import { useInnerWindowWidth } from './hooks/useInnerWindowWidth'
import { useMultiQueryParams } from '@/search/components/hooks/useMultiQueryParams'
import { SearchOverlayContainer } from '@/search/components/input/SearchOverlayContainer'
import { useCTAPopoverContext } from '@/frame/components/context/CTAContext'
import { useSearchOverlayContext } from '@/search/components/context/SearchOverlayContext'

import styles from './Header.module.scss'

export const Header = () => {
  const router = useRouter()
  const { error } = useMainContext()
  const { isHomepageVersion, currentProduct, currentProductName } = useMainContext()
  const { currentVersion } = useVersion()
  const { t } = useTranslation(['header'])
  const isRestPage = currentProduct && currentProduct.id === 'rest'
  const { params, updateParams } = useMultiQueryParams()
  const [scroll, setScroll] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const openSidebar = useCallback(() => setIsSidebarOpen(true), [])
  const closeSidebar = useCallback(() => setIsSidebarOpen(false), [])
  const isMounted = useRef(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const { asPath } = useRouter()
  const isSearchResultsPage = router.route === '/search'
  const isEarlyAccessPage = currentProduct && currentProduct.id === 'early-access'
  const { width } = useInnerWindowWidth()
  const returnFocusRef = useRef(null)
  const searchButtonRef = useRef<HTMLButtonElement>(null)
  const { initializeCTA } = useCTAPopoverContext()
  const { isSearchOpen, setIsSearchOpen } = useSearchOverlayContext()

  const SearchButtonLarge: JSX.Element = (
    <SearchBarButton
      isSearchOpen={isSearchOpen}
      setIsSearchOpen={setIsSearchOpen}
      params={params}
      searchButtonRef={searchButtonRef}
      instanceId="large"
    />
  )

  const SearchButtonSmall: JSX.Element = (
    <SearchBarButton
      isSearchOpen={isSearchOpen}
      setIsSearchOpen={setIsSearchOpen}
      params={params}
      searchButtonRef={searchButtonRef}
      instanceId="small"
    />
  )

  // Initialize the CTA(s)
  initializeCTA()

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

  // For the UI in smaller browser widths, and focus the picker menu button when the search
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

  let homeURL = `/${router.locale}`
  if (currentVersion !== DEFAULT_VERSION) {
    homeURL += `/${currentVersion}`
  }

  return (
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
          'color-bg-default p-2 position-sticky top-0 z-2 border-bottom',
          scroll && 'color-shadow-small',
        )}
        role="banner"
        aria-label="Main"
      >
        <div
          className={cx(
            'd-flex flex-justify-between p-2 flex-items-center flex-wrap',
            styles.headerContainer,
          )}
          data-testid="desktop-header"
        >
          <div
            tabIndex={-1}
            className={cx(isSearchOpen ? styles.logoWithOpenSearch : styles.logoWithClosedSearch)}
            id="github-logo"
          >
            <Link
              href={homeURL}
              className="d-flex flex-items-center color-fg-default no-underline mr-3"
            >
              <MarkGithubIcon size={32} />
              <span className="h4 text-semibold ml-2 mr-3">{t('github_docs')}</span>
            </Link>
            <div className="hide-sm border-left pl-3 d-flex flex-items-center">
              <VersionPicker />
              {/* In larger viewports, we want to show the search bar next to the version picker */}
              <div className={styles.displayOverLarge}>{SearchButtonLarge}</div>
            </div>
          </div>
          <HeaderSearchAndWidgets
            isSearchOpen={isSearchOpen}
            SearchButton={SearchButtonSmall}
            width={width}
          />
        </div>
        {!isHomepageVersion && !isSearchResultsPage && (
          <div className="d-flex flex-items-center d-xxl-none mt-2" data-testid="header-subnav">
            {!isEarlyAccessPage && (
              <div
                className={cx(styles.sidebarOverlayCloseButtonContainer, 'mr-2')}
                data-testid="header-subnav-hamburger"
              >
                <IconButton
                  data-testid="sidebar-hamburger"
                  className="color-fg-muted"
                  variant="invisible"
                  icon={ThreeBarsIcon}
                  aria-label="Open Sidebar"
                  onClick={openSidebar}
                  ref={returnFocusRef}
                />
                {isSidebarOpen && (
                  <Dialog
                    returnFocusRef={returnFocusRef}
                    onClose={closeSidebar}
                    className={cx(styles.dialog, 'd-xxl-none')}
                    position="left"
                    title={
                      error === '404' || !currentProduct || isSearchResultsPage
                        ? null
                        : currentProductName || currentProduct.name
                    }
                    subtitle={isRestPage && <ApiVersionPicker />}
                    width="medium"
                  >
                    <SidebarNav variant="overlay" />
                  </Dialog>
                )}
              </div>
            )}
            <div className="mr-auto width-full" data-search="breadcrumbs">
              <Breadcrumbs inHeader={true} />
            </div>
          </div>
        )}
        <SearchOverlayContainer
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
          params={params}
          updateParams={updateParams}
          searchButtonRef={searchButtonRef}
        />
      </header>
    </div>
  )
}
