import { useState, useRef } from 'react'
import { useRouter } from 'next/router'
import cx from 'classnames'

import { useTranslation } from 'components/hooks/useTranslation'
import { DEFAULT_VERSION, useVersion } from 'components/hooks/useVersion'
import { useQuery } from 'components/hooks/useQuery'

import styles from './Search.module.scss'

type Props = {
  isHeaderSearch?: true
  variant?: 'compact' | 'expanded'
  iconSize: number
}

export function BasicSearch({ isHeaderSearch = true, variant = 'compact', iconSize = 24 }: Props) {
  const router = useRouter()
  const { query, debug } = useQuery()
  const [localQuery, setLocalQuery] = useState(query)
  const inputRef = useRef<HTMLInputElement>(null)
  const { t } = useTranslation('search')
  const { currentVersion } = useVersion()

  function redirectSearch() {
    let asPath = `/${router.locale}`
    if (currentVersion !== DEFAULT_VERSION) {
      asPath += `/${currentVersion}`
    }
    asPath += '/search'
    const params = new URLSearchParams({ query: localQuery })
    if (debug) {
      params.set('debug', '1')
    }
    asPath += `?${params}`
    router.push(asPath)
  }

  return (
    <div data-testid="search">
      <div className="position-relative z-2">
        <form
          role="search"
          className="width-full d-flex"
          noValidate
          onSubmit={(event) => {
            event.preventDefault()
            redirectSearch()
          }}
        >
          <label className="text-normal width-full">
            <span
              className="visually-hidden"
              aria-label={t`label`}
              aria-describedby={t`description`}
            >{t`placeholder`}</span>
            <input
              data-testid="site-search-input"
              ref={inputRef}
              className={cx(
                styles.searchInput,
                iconSize === 24 && styles.searchIconBackground24,
                iconSize === 24 && 'form-control px-6 f4',
                iconSize === 16 && styles.searchIconBackground16,
                iconSize === 16 && 'form-control px-5 f4',
                variant === 'compact' && 'py-2',
                variant === 'expanded' && 'py-3',
                isHeaderSearch && styles.searchInputHeader,
                !isHeaderSearch && 'width-full'
              )}
              type="search"
              placeholder={t`placeholder`}
              autoComplete={localQuery ? 'on' : 'off'}
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              maxLength={512}
              onChange={(e) => setLocalQuery(e.target.value)}
              value={localQuery}
              aria-label={t`label`}
              aria-describedby={t`description`}
            />
          </label>
          <button className="d-none" type="submit" title="Submit the search query." hidden />
        </form>
      </div>
    </div>
  )
}
