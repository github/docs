import { useRef } from 'react'
import cx from 'classnames'
import { IconButton } from '@primer/react'
import { CopilotIcon, SearchIcon } from '@primer/octicons-react'

import { useTranslation } from 'src/languages/components/useTranslation'
import { SearchOverlay } from './SearchOverlay'

import styles from './SearchBarButton.module.scss'
import { useQueryParam } from '@/frame/components/hooks/useQueryParam'

type Props = {
  isSearchOpen: boolean
  setIsSearchOpen: (value: boolean) => void
}

export function SearchBarButton({ isSearchOpen, setIsSearchOpen }: Props) {
  const { t } = useTranslation('search')
  const {
    debug,
    queryParam: urlSearchInputQuery,
    setQueryParam: setUrlSearchInputQuery,
  } = useQueryParam('search-overlay-input')
  const { queryParam: isAskAIState, setQueryParam: setIsAskAIState } = useQueryParam(
    'search-overlay-ask-ai',
    true,
  )
  const buttonRef = useRef(null)

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

  return (
    <>
      {/* We don't want to show the input when overlay is open */}
      {!isSearchOpen ? (
        <>
          {/* On mobile only the IconButton is shown */}
          <IconButton
            data-testid="mobile-search-button"
            ref={buttonRef}
            className={styles.searchIconButton}
            onClick={handleClick}
            tabIndex={0}
            aria-label={t('search.input.aria_label')}
            icon={SearchIcon}
          />
          {/* On large and up the SearchBarButton is shown */}
          <button
            data-testid="search"
            tabIndex={0}
            aria-label={t`search.input.aria_label`}
            className={styles.searchInputButton}
            onKeyDown={handleKeyDown}
            onClick={handleClick}
            ref={buttonRef}
          >
            {/* Styled to look like an input */}
            <div
              className={cx('d-flex align-items-center flex-grow-1', styles.searchInputContainer)}
              aria-hidden
              tabIndex={-1}
            >
              <CopilotIcon aria-hidden className="mr-1" />
              <span
                className={cx(styles.queryText, !urlSearchInputQuery ? styles.placeholder : null)}
              >
                {urlSearchInputQuery ? urlSearchInputQuery : t('search.input.placeholder')}
              </span>
            </div>
            <span className={styles.searchIconContainer} aria-hidden tabIndex={-1}>
              <SearchIcon />
            </span>
          </button>
        </>
      ) : (
        <SearchOverlay
          searchOverlayOpen={isSearchOpen}
          parentRef={buttonRef}
          debug={debug}
          urlSearchInputQuery={urlSearchInputQuery}
          setUrlSearchInputQuery={setUrlSearchInputQuery}
          isAskAIState={isAskAIState}
          setIsAskAIState={setIsAskAIState}
          onClose={() => {
            setIsSearchOpen(false)
          }}
        />
      )}
    </>
  )
}
