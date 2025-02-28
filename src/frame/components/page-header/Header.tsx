import { Suspense, useCallback, useEffect, useRef, useState } from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'
import { Dialog, IconButton } from '@primer/react'
import { MarkGithubIcon, ThreeBarsIcon } from '@primer/octicons-react'
import dynamic from 'next/dynamic'

import { DEFAULT_VERSION, useVersion } from 'src/versions/components/useVersion'
import { Link } from 'src/frame/components/Link'
import { useMainContext } from 'src/frame/components/context/MainContext'
import { HeaderNotifications } from 'src/frame/components/page-header/HeaderNotifications'
import { ApiVersionPicker } from 'src/rest/components/ApiVersionPicker'
import { useTranslation } from 'src/languages/components/useTranslation'
import { Breadcrumbs } from 'src/frame/components/page-header/Breadcrumbs'
import { VersionPicker } from 'src/versions/components/VersionPicker'
import { SidebarNav } from 'src/frame/components/sidebar/SidebarNav'
import { AllProductsLink } from 'src/frame/components/sidebar/AllProductsLink'

import styles from './Header.module.scss'
import { OldHeaderSearchAndWidgets } from './OldHeaderSearchAndWidgets'
import { HeaderSearchAndWidgets } from './HeaderSearchAndWidgets'
import { useInnerWindowWidth } from './hooks/useInnerWindowWidth'
import { EXPERIMENTS } from '@/events/components/experiments/experiments'
import { useShouldShowExperiment } from '@/events/components/experiments/useShouldShowExperiment'
import { useQueryParam } from '@/frame/components/hooks/useQueryParam'

const DomainNameEdit = dynamic(() => import('src/links/components/DomainNameEdit'), {
  ssr: false,
})

export const Header = () => {
  const router = useRouter()
  const { error } = useMainContext()
  const { isHomepageVersion, currentProduct, currentProductName } = useMainContext()
  const { currentVersion } = useVersion()
  const { t } = useTranslation(['header'])
  const isRestPage = currentProduct && currentProduct.id === 'rest'
  const { queryParam: isSearchOpen, setQueryParam: setIsSearchOpen } = useQueryParam(
    'search-overlay-open',
    true,
  )
  const [scroll, setScroll] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const openSidebar = useCallback(() => setIsSidebarOpen(true), [isSidebarOpen])
  const closeSidebar = useCallback(() => setIsSidebarOpen(false), [isSidebarOpen])
  const isMounted = useRef(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const { asPath } = useRouter()
  const isSearchResultsPage = router.route === '/search'
  const isEarlyAccessPage = currentProduct && currentProduct.id === 'early-access'
  const { width } = useInnerWindowWidth()
  const returnFocusRef = useRef(null)

  const showNewSearch = useShouldShowExperiment(EXPERIMENTS.ai_search_experiment)

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

  // Listen for '/' so we can open the search overlay when pressed. (only enabled for showNewSearch is true for new search experience)
  useEffect(() => {
    const open = (e: KeyboardEvent) => {
      if (e.key === '/' && showNewSearch && !isSearchOpen) {
        e.preventDefault()
        setIsSearchOpen(true)
      }
    }
    window.addEventListener('keydown', open)
    return () => window.removeEventListener('keydown', open)
  }, [isSearchOpen, showNewSearch])

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

  const showDomainNameEdit = currentVersion.startsWith('enterprise-server@')

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
          'color-bg-default p-2 position-sticky top-0 z-1 border-bottom',
          scroll && 'color-shadow-small',
        )}
        role="banner"
        aria-label="Main"
      >
        <div
          className="d-flex flex-justify-between p-2 flex-items-center flex-wrap"
          style={{
            // In the rare case of header overflow, create a pleasant gap between the rows
            rowGap: '1rem',
          }}
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
            <div className="hide-sm border-left pl-3">
              <VersionPicker />
            </div>

            {showDomainNameEdit && (
              <div className="hide-sm xborder-left pl-3">
                <Suspense>
                  <DomainNameEdit />
                </Suspense>
              </div>
            )}
          </div>
          {showNewSearch ? (
            <HeaderSearchAndWidgets
              isSearchOpen={isSearchOpen}
              setIsSearchOpen={setIsSearchOpen}
              width={width}
            />
          ) : (
            <OldHeaderSearchAndWidgets
              isSearchOpen={isSearchOpen}
              setIsSearchOpen={setIsSearchOpen}
              width={width}
            />
          )}
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
                    borderRight:
                      '1px solid var(--borderColor-default, var(--color-border-default))',
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
                          {currentProductName || currentProduct.name}
                        </Link>
                      </div>
                    )}
                    {isRestPage && <ApiVersionPicker />}
                  </Dialog.Header>
                  <SidebarNav variant="overlay" />
                </Dialog>
              </div>
            )}
            <div className="mr-auto width-full" data-search="breadcrumbs">
              <Breadcrumbs inHeader={true} />
            </div>
          </div>
        )}
      </header>
    </div>
  )
}
