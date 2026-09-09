import { useEffect, useRef, useState } from 'react'
import type { JSX } from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'
import { MarkGithubIcon } from '@primer/octicons-react'

import { DEFAULT_VERSION, useVersion } from '@/versions/components/useVersion'
import { Link } from '@/frame/components/Link'
import { useMainContext } from '@/frame/components/context/MainContext'
import { HeaderNotifications } from '@/frame/components/page-header/HeaderNotifications'
import { useTranslation } from '@/languages/components/useTranslation'
import { VersionPicker } from '@/versions/components/VersionPicker'
import { SearchBarButton } from '@/search/components/input/SearchBarButton'
import { HeaderSearchAndWidgets } from './HeaderSearchAndWidgets'
import { useInnerWindowWidth } from './hooks/useInnerWindowWidth'
import { useMultiQueryParams } from '@/search/components/hooks/useMultiQueryParams'
import { SearchOverlayContainer } from '@/search/components/input/SearchOverlayContainer'
import { useSearchOverlayContext } from '@/search/components/context/SearchOverlayContext'

import styles from './Header.module.scss'

export const Header = () => {
  const router = useRouter()
  const { error } = useMainContext()
  const { currentVersion } = useVersion()
  const { t } = useTranslation(['header'])
  const { params, updateParams } = useMultiQueryParams()
  const [scroll, setScroll] = useState(false)
  const { width } = useInnerWindowWidth()
  const searchButtonRefLarge = useRef<HTMLButtonElement>(null)
  const searchButtonRefSmall = useRef<HTMLButtonElement>(null)
  const { isSearchOpen, setIsSearchOpen } = useSearchOverlayContext()

  // The lg breakpoint (1012px) determines which search button is visible.
  // Pass the correct ref to SearchOverlayContainer so Primer's Overlay
  // restores focus to the visible trigger element on close.
  const isLargeViewport = width !== null && width >= 1012
  const searchButtonRef = isLargeViewport ? searchButtonRefLarge : searchButtonRefSmall

  const SearchButtonLarge: JSX.Element = (
    <SearchBarButton
      isSearchOpen={isSearchOpen}
      setIsSearchOpen={setIsSearchOpen}
      params={params}
      searchButtonRef={searchButtonRefLarge}
      instanceId="large"
    />
  )

  const SearchButtonSmall: JSX.Element = (
    <SearchBarButton
      isSearchOpen={isSearchOpen}
      setIsSearchOpen={setIsSearchOpen}
      params={params}
      searchButtonRef={searchButtonRefSmall}
      instanceId="small"
    />
  )

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

  // Pressing "/" anywhere on the page opens the search overlay, matching the
  // shortcut on github.com. Ignore the key when the user is typing in a form
  // field or editable element so we never swallow a literal "/", and when a
  // modifier is held so we don't clash with browser or OS shortcuts.
  useEffect(() => {
    const openOnSlash = (e: KeyboardEvent) => {
      if (e.key !== '/' || e.ctrlKey || e.metaKey || e.altKey) {
        return
      }
      const target = e.target as HTMLElement | null
      const tagName = target?.tagName
      if (
        tagName === 'INPUT' ||
        tagName === 'TEXTAREA' ||
        tagName === 'SELECT' ||
        target?.isContentEditable
      ) {
        return
      }
      e.preventDefault()
      setIsSearchOpen(true)
    }
    window.addEventListener('keydown', openOnSlash)
    return () => window.removeEventListener('keydown', openOnSlash)
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
