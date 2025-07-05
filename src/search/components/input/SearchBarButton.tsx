import cx from 'classnames'
import { IconButton } from '@primer/react'
import { CopilotIcon, SearchIcon } from '@primer/octicons-react'

import { useTranslation } from '@/languages/components/useTranslation'
import { QueryParams } from '@/search/components/hooks/useMultiQueryParams'
import { useCTAPopoverContext } from '@/frame/components/context/CTAContext'

import styles from './SearchBarButton.module.scss'
import { AISearchCTAPopup } from './AISearchCTAPopup'

type Props = {
  isSearchOpen: boolean
  setIsSearchOpen: (value: boolean) => void
  params: QueryParams
  searchButtonRef: React.RefObject<HTMLButtonElement>
}

export function SearchBarButton({ isSearchOpen, setIsSearchOpen, params, searchButtonRef }: Props) {
  const { t } = useTranslation('search')
  const { isOpen, dismiss } = useCTAPopoverContext()

  const urlSearchInputQuery = params['search-overlay-input']

  // Handle click events
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsSearchOpen(true)
  }

  // Handle key down events
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === 'Space') {
      event.preventDefault()
      setIsSearchOpen(true)
    } else if (event.key === 'Escape') {
      event.preventDefault()
      setIsSearchOpen(false)
    }
  }

  const placeHolderElements = t('search.input.placeholder')
    .split(/({{[^}]+}})/)
    .filter((item) => item.trim() !== '')
    .map((item) => <>{item.trim()}</>)
  placeHolderElements[1] = <CopilotIcon aria-hidden className="mr-1 ml-1" />

  return (
    <>
      {/* We don't want to show the input when overlay is open */}
      {!isSearchOpen ? (
        <>
          <AISearchCTAPopup isOpen={isOpen} setIsSearchOpen={setIsSearchOpen} dismiss={dismiss} />
          {/* On mobile only the IconButton is shown */}
          <IconButton
            data-testid="mobile-search-button"
            ref={searchButtonRef}
            className={styles.searchIconButton}
            onClick={handleClick}
            tabIndex={0}
            aria-label={t('search.input.placeholder_no_icon')}
            icon={SearchIcon}
          />
          {/* On large and up the SearchBarButton is shown */}
          <button
            data-testid="search"
            tabIndex={0}
            aria-label={t('search.input.placeholder_no_icon')}
            className={styles.searchInputButton}
            onKeyDown={handleKeyDown}
            onClick={handleClick}
            ref={searchButtonRef}
          >
            {/* Styled to look like an input */}
            <div
              className={cx('d-flex align-items-center flex-grow-1', styles.searchInputContainer)}
              aria-hidden
              tabIndex={-1}
            >
              <span
                className={cx(styles.queryText, !urlSearchInputQuery ? styles.placeholder : null)}
              >
                {urlSearchInputQuery ? (
                  urlSearchInputQuery
                ) : (
                  <>
                    <span className={styles.placeholderText}>{placeHolderElements}</span>
                  </>
                )}
              </span>
            </div>
            <span className={styles.searchIconContainer} aria-hidden tabIndex={-1}>
              <SearchIcon />
            </span>
          </button>
        </>
      ) : null}
    </>
  )
}
