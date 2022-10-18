import { useCallback, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { SubNav, TabNav, UnderlineNav } from '@primer/react'
import { sendEvent, EventType } from 'components/lib/events'
import { useRouter } from 'next/router'

import { useArticleContext } from 'components/context/ArticleContext'
import { parseUserAgent } from 'components/lib/user-agent'

const platformQueryKey = 'platform'
const platforms = [
  { id: 'mac', label: 'Mac' },
  { id: 'windows', label: 'Windows' },
  { id: 'linux', label: 'Linux' },
]

// Nota bene: platform === os

// Imperatively modify article content to show only the selected platform
// find all platform-specific *block* elements and hide or show as appropriate
// example: {% mac %} block content {% endmac %}
function showPlatformSpecificContent(platform: string) {
  const markdowns = Array.from(document.querySelectorAll<HTMLElement>('.extended-markdown'))
  markdowns
    .filter((el) => platforms.some((platform) => el.classList.contains(platform.id)))
    .forEach((el) => {
      el.style.display = el.classList.contains(platform) ? '' : 'none'
    })

  // find all platform-specific *inline* elements and hide or show as appropriate
  // example: <span class="platform-mac">inline content</span>
  const platformEls = Array.from(
    document.querySelectorAll<HTMLElement>(
      platforms.map((platform) => `.platform-${platform.id}`).join(', ')
    )
  )
  platformEls.forEach((el) => {
    el.style.display = el.classList.contains(`platform-${platform}`) ? '' : 'none'
  })
}

// uses the order of the supportedPlatforms array to
// determine the default platform
const getFallbackPlatform = (detectedPlatforms: Array<string>): string => {
  const foundPlatform = platforms.find((platform) => detectedPlatforms.includes(platform.id))
  return foundPlatform?.id || 'linux'
}

type Props = {
  variant?: 'subnav' | 'tabnav' | 'underlinenav'
}
export const PlatformPicker = ({ variant = 'subnav' }: Props) => {
  const router = useRouter()
  const { query, asPath, locale } = router
  const { defaultPlatform, detectedPlatforms } = useArticleContext()
  const [currentPlatform, setCurrentPlatform] = useState(defaultPlatform || '')

  // Run on mount for client-side only features
  useEffect(() => {
    let userAgent = parseUserAgent().os
    if (userAgent === 'ios') {
      userAgent = 'mac'
    }

    // If it's a valid platform option, set platform from query param
    let platform =
      query[platformQueryKey] && Array.isArray(query[platformQueryKey])
        ? query[platformQueryKey][0]
        : query[platformQueryKey] || ''
    if (!platform || !platforms.some((platform) => platform.id === query.platform)) {
      platform = defaultPlatform || Cookies.get('osPreferred') || userAgent || 'linux'
    }

    setCurrentPlatform(platform)

    // always trigger this on initial render. if the default doesn't change the other useEffect won't fire
    showPlatformSpecificContent(platform)
  }, [asPath])

  // Make sure we've always selected a platform that exists in the article
  useEffect(() => {
    // Only check *after* current platform has been determined
    if (currentPlatform && !detectedPlatforms.includes(currentPlatform)) {
      setCurrentPlatform(getFallbackPlatform(detectedPlatforms))
    }
  }, [currentPlatform, detectedPlatforms.join(',')])

  const onClickPlatform = useCallback(
    (platform: string) => {
      // Set platform in query param without altering other query params
      const [asPathRoot, asPathQuery = ''] = router.asPath.split('#')[0].split('?')
      const params = new URLSearchParams(asPathQuery)
      params.set(platformQueryKey, platform)
      const newPath = `/${locale}${asPathRoot}?${params}`
      router.push(newPath, undefined, { shallow: true, locale })

      sendEvent({
        type: EventType.preference,
        preference_name: 'os',
        preference_value: platform,
      })

      Cookies.set('osPreferred', platform, {
        sameSite: 'strict',
        secure: document.location.protocol !== 'http:',
        expires: 365,
      })
    },
    [asPath, locale]
  )

  // only show platforms that are in the current article
  const platformOptions = platforms.filter((platform) => detectedPlatforms.includes(platform.id))

  const sharedContainerProps = {
    'data-testid': 'platform-picker',
    'aria-label': 'Platform picker',
    'data-default-platform': defaultPlatform,
    className: 'mb-4',
  }

  if (variant === 'subnav') {
    return (
      <SubNav {...sharedContainerProps}>
        <SubNav.Links>
          {platformOptions.map((option) => {
            return (
              <SubNav.Link
                key={option.id}
                data-platform={option.id}
                as="button"
                selected={option.id === currentPlatform}
                onClick={() => {
                  onClickPlatform(option.id)
                }}
              >
                {option.label}
              </SubNav.Link>
            )
          })}
        </SubNav.Links>
      </SubNav>
    )
  }

  if (variant === 'underlinenav') {
    const [, pathQuery = ''] = asPath.split('?')
    const params = new URLSearchParams(pathQuery)
    return (
      <UnderlineNav {...sharedContainerProps}>
        {platformOptions.map((option) => {
          params.set(platformQueryKey, option.id)
          return (
            <UnderlineNav.Link
              href={`?${params.toString()}`}
              key={option.id}
              data-platform={option.id}
              selected={option.id === currentPlatform}
              onClick={(event) => {
                event.preventDefault()
                onClickPlatform(option.id)
              }}
            >
              {option.label}
            </UnderlineNav.Link>
          )
        })}
      </UnderlineNav>
    )
  }

  return (
    <TabNav {...sharedContainerProps}>
      {platformOptions.map((option) => {
        return (
          <TabNav.Link
            key={option.id}
            data-platform={option.id}
            as="button"
            selected={option.id === currentPlatform}
            onClick={() => {
              onClickPlatform(option.id)
            }}
          >
            {option.label}
          </TabNav.Link>
        )
      })}
    </TabNav>
  )
}
