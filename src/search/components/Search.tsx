import { useState } from 'react'
import { useRouter } from 'next/router'
import { IconButton, TextInput } from '@primer/react'
import { SearchIcon } from '@primer/octicons-react'

import { useTranslation } from 'src/languages/components/useTranslation'
import { DEFAULT_VERSION, useVersion } from 'src/versions/components/useVersion'
import { useQuery } from 'src/search/components/useQuery'
import { useBreakpoint } from 'src/search/components/useBreakpoint'
import { EventType, sendEvent } from 'src/events/components/events'

export function Search() {
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
              onInvalid={(e) =>
                (e.target as HTMLInputElement).setCustomValidity('Please enter a search query.')
              }
              onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
              data-testid="site-search-input"
              // This adds focus in particular for iOS to focus and bring up the keyboard when you touch the search input text area
              ref={(inputRef) => !atMediumViewport && inputRef && inputRef.focus()}
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
              sx={{
                width: '100%',
                height: '2rem',
                transition: 'width 0.3s ease-in-out',
                borderBottomRightRadius: 'unset',
                borderTopRightRadius: 'unset',
                borderRight: 'none',
                minWidth: localQuery ? 'unset' : '15rem',
              }}
            />
          </label>
          <IconButton
            aria-label="Search"
            icon={SearchIcon}
            sx={{ borderTopLeftRadius: 'unset', borderBottomLeftRadius: 'unset' }}
          />
        </form>
      </div>
    </div>
  )
}
