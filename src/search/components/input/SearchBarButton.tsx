import React from 'react'
import cx from 'classnames'
import { IconButton } from '@primer/react'
import { CopilotIcon, SearchIcon } from '@primer/octicons-react'

import { useTranslation } from '@/languages/components/useTranslation'
import { QueryParams } from '@/search/components/hooks/useMultiQueryParams'

import styles from './SearchBarButton.module.scss'

type Props = {
  isSearchOpen: boolean
  setIsSearchOpen: (value: boolean) => void
  params: QueryParams
  searchButtonRef: React.RefObject<HTMLButtonElement>
  instanceId?: string
}

export function SearchBarButton({
  isSearchOpen,
  setIsSearchOpen,
  params,
  searchButtonRef,
  instanceId,
}: Props) {
  const { t } = useTranslation('search')

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
    .map((item, index) => <span key={`${item.trim()}-${index}`}>{item.trim()}</span>)
  placeHolderElements[1] = <CopilotIcon key="copilot-icon" aria-hidden className="mr-1 ml-1" />

  return (
    <>
      {/* We don't want to show the input when overlay is open */}
      {!isSearchOpen ? (
        <>
          {/* On mobile only the IconButton is shown */}
          <IconButton
            data-testid="mobile-search-button"
            data-instance={instanceId}
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
            data-instance={instanceId}
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
