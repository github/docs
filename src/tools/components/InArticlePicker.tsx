import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Cookies from '@/frame/components/lib/cookies'
import { UnderlineNav } from '@primer/react'
import { sendEvent } from '@/events/components/events'
import { EventType } from '@/events/types'
import { useRouter } from 'next/router'

import styles from './InArticlePicker.module.scss'

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

type Option = {
  value: string
  label: string
}
type Props = {
  // Used when the query string does not specify a valid value.
  defaultValue?: string
  // Used when the query string is invalid, defaultValue is unset, and the cookie is invalid.
  fallbackValue: string
  cookieKey: string
  queryStringKey: string
  onValue: (value: string) => void
  preferenceName: string
  options: Option[]
  ariaLabel: string
}
export const InArticlePicker = ({
  defaultValue,
  fallbackValue,
  cookieKey,
  queryStringKey,
  onValue,
  preferenceName,
  options,
  ariaLabel,
}: Props) => {
  const router = useRouter()
  const { query, locale } = router
  const [currentValue, setCurrentValue] = useState('')

  // True after user clicks, so focus moves only for direct tab selection.
  const focusAfterNavRef = useRef(false)

  useEffect(() => {
    const raw = query[queryStringKey]
    let value = ''
    if (raw) {
      if (Array.isArray(raw)) value = raw[0]
      else value = raw
    }
    // Ignore query string values outside this picker's options.
    const possibleValues = options.map((option) => option.value)
    if (!value || !possibleValues.includes(value)) {
      const cookieValue = Cookies.get(cookieKey)
      if (defaultValue) {
        value = defaultValue
      } else if (cookieValue && possibleValues.includes(cookieValue)) {
        value = cookieValue
      } else {
        value = fallbackValue
      }
    }
    setCurrentValue(value)
  }, [query, fallbackValue, defaultValue, options])

  const [asPathRoot, asPathQuery = ''] = router.asPath.split('#')[0].split('?')

  // Apply the selection before paint so non-matching .ghd-tool content does not flash.
  useIsomorphicLayoutEffect(() => {
    // Initial values still need to update the page before the user interacts.
    if (currentValue) {
      onValue(currentValue)
    }
  }, [
    currentValue,
    // Query string changes are handled separately, so depend on the route path only.
    asPathRoot,
  ])

  // Local ClientSideRefresh replaces article HTML on visibility changes, so reapply selection.
  useEffect(() => {
    let mounted = true
    const toggleVisibility = () => {
      if (document.visibilityState === 'visible') {
        // Keep at least a 100 ms delay so refreshed HTML reaches the DOM before selection changes it.
        setTimeout(() => {
          if (mounted) {
            onValue(currentValue)
          }
        }, 100)
      }
    }
    if (process.env.NODE_ENV === 'development') {
      document.addEventListener('visibilitychange', toggleVisibility)
    }

    return () => {
      mounted = false
      if (process.env.NODE_ENV === 'development') {
        document.removeEventListener('visibilitychange', toggleVisibility)
      }
    }
  }, [currentValue])

  function onClickChoice(value: string) {
    focusAfterNavRef.current = true
    const params = new URLSearchParams(asPathQuery)
    params.set(queryStringKey, value)
    const newPath = `/${locale}${asPathRoot}?${params}`
    router.push(newPath, undefined, { shallow: true, locale })

    sendEvent({
      type: EventType.preference,
      preference_name: preferenceName,
      preference_value: value,
    })

    Cookies.set(cookieKey, value)
  }

  // WCAG 2.4.3 requires focus to remain on the triggered tab after shallow routing.
  useEffect(() => {
    if (!focusAfterNavRef.current || !currentValue) return
    focusAfterNavRef.current = false

    const container = document.querySelector<HTMLElement>(
      `[data-testid="${queryStringKey}-picker"]`,
    )
    const selectedTab = container?.querySelector<HTMLElement>('[aria-current="page"]')
    selectedTab?.focus()
  }, [currentValue, queryStringKey])

  const sharedContainerProps = {
    'aria-label': ariaLabel,
  }

  const params = new URLSearchParams(asPathQuery)

  return (
    <div data-testid={`${queryStringKey}-picker`} className={styles.container}>
      {/* UnderlineNav can miss item changes without a changing key. */}
      <UnderlineNav key={router.asPath} {...sharedContainerProps}>
        {options.map((option) => {
          params.set(queryStringKey, option.value)
          const linkProps = {
            [`data-${queryStringKey}`]: option.value,
          }
          return (
            <UnderlineNav.Item
              href={`?${params}`}
              key={option.value}
              aria-current={option.value === currentValue ? 'page' : undefined}
              onSelect={(event: React.MouseEvent | React.KeyboardEvent) => {
                event.preventDefault()
                onClickChoice(option.value)
              }}
              {...linkProps}
            >
              {option.label}
            </UnderlineNav.Item>
          )
        })}
      </UnderlineNav>
    </div>
  )
}
