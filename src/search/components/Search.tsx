import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import { IconButton, TextInput } from '@primer/react'
import { SearchIcon } from '@primer/octicons-react'

import { useTranslation } from 'src/languages/components/useTranslation'
import { DEFAULT_VERSION, useVersion } from 'src/versions/components/useVersion'
import { useQuery } from 'src/search/components/useQuery'
import { useBreakpoint } from 'src/search/components/useBreakpoint'
import { EventType, sendEvent } from 'src/events/components/events'

type Props = { isSearchOpen: boolean }

export function Search({ isSearchOpen }: Props) {
  const router = useRouter()
  const { query, debug } = useQuery()
  const [localQuery, setLocalQuery] = useState(query)
  const { t } = useTranslation('search')
  const { currentVersion } = useVersion()
  const atMediumViewport = useBreakpoint('medium')

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

  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (!atMediumViewport && isSearchOpen) {
      // This adds focus in particular for iOS to focus and bring
      // up the keyboard when you touch the search input text area.
      inputRef.current?.focus()
    }
  }, [atMediumViewport, isSearchOpen])

  return (
    <div data-testid="search">
      <div className="position-relative z-2">
        <form
          role="search"
          className="width-full d-flex"
          onSubmit={(event) => {
            event.preventDefault()
            if (!localQuery.trim()) return

            sendEvent({
              type: EventType.search,
              search_query: localQuery,
            })

            redirectSearch()
          }}
        >
          <meta name="viewport" content="width=device-width initial-scale=1" />
          <label className="text-normal width-full">
            <span
              className="visually-hidden"
              aria-describedby={t`description`}
            >{t`placeholder`}</span>
            <TextInput
              required
              onInvalid={(e) => {
                e.currentTarget.setCustomValidity('Please enter a search query.')
              }}
              data-testid="site-search-input"
              ref={inputRef}
              type="search"
              placeholder={t`placeholder`}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              maxLength={512}
              onChange={(e) => {
                setLocalQuery(e.target.value)
                e.currentTarget.setCustomValidity('')
              }}
              value={localQuery}
              aria-label={t`label`}
              aria-describedby={t`description`}
              sx={{
                width: '100%',
                height: '2rem',
                transition: 'width 0.3s ease-in-out',
                borderBottomRightRadius: 'unset',
                borderTopRightRadius: 'unset',
                borderRight: 'none',
                minWidth: '15rem',
              }}
            />
          </label>
          <IconButton
            aria-label="Search"
            icon={SearchIcon}
            sx={{ borderTopLeftRadius: 'unset', borderBottomLeftRadius: 'unset' }}
            type="submit"
          />
        </form>
      </div>
    </div>
  )
}
