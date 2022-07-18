import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { SubNav, TabNav, UnderlineNav } from '@primer/react'
import { sendEvent, EventType } from 'components/lib/events'
import { useRouter } from 'next/router'

import { useArticleContext } from 'components/context/ArticleContext'
import parseUserAgent from 'components/lib/user-agent'

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
  const { defaultPlatform, detectedPlatforms } = useArticleContext()
  const [currentPlatform, setCurrentPlatform] = useState(defaultPlatform || '')
  const { asPath } = useRouter()

  // Run on mount for client-side only features
  useEffect(() => {
    let userAgent = parseUserAgent().os
    if (userAgent === 'ios') {
      userAgent = 'mac'
    }

    const platform = defaultPlatform || Cookies.get('osPreferred') || userAgent || 'linux'
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

  const onClickPlatform = (platform: string) => {
    setCurrentPlatform(platform)

    // imperatively modify the article content
    showPlatformSpecificContent(platform)

    sendEvent({
      type: EventType.preference,
      preference_name: 'os',
      preference_value: platform,
    })

    Cookies.set('osPreferred', platform, {
      sameSite: 'strict',
      secure: true,
    })
  }

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
    return (
      <UnderlineNav {...sharedContainerProps}>
        {platformOptions.map((option) => {
          return (
            <UnderlineNav.Link
              key={option.id}
              data-platform={option.id}
              selected={option.id === currentPlatform}
              onClick={() => {
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
