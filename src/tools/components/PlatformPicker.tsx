import { useEffect, useState } from 'react'

import { useArticleContext } from 'src/frame/components/context/ArticleContext'
import { parseUserAgent } from 'src/events/components/user-agent'
import { InArticlePicker } from './InArticlePicker'

const platformQueryKey = 'platform'
const platforms = [
  { value: 'mac', label: 'Mac' },
  { value: 'windows', label: 'Windows' },
  { value: 'linux', label: 'Linux' },
]

// Nota bene: platform === os

// Imperatively modify article content to show only the selected platform
// find all platform-specific *block* elements and hide or show as appropriate
// example: {% mac %} block content {% endmac %}
function showPlatformSpecificContent(platform: string) {
  const markdowns = Array.from(document.querySelectorAll<HTMLElement>('.ghd-tool'))
  markdowns
    .filter((el) => platforms.some((platform) => el.classList.contains(platform.value)))
    .forEach((el) => {
      el.style.display = el.classList.contains(platform) ? '' : 'none'

      // hack: special handling for minitoc links -- we can't pass the tool classes
      // directly to the Primer NavList.Item generated <li>, it gets passed down
      // to the child <a>.  So if we find an <a> that has the tool class and its
      // parent is an <li>, we hide/unhide that element as well.
      if (el.tagName === 'A' && el.parentElement && el.parentElement.tagName === 'LI') {
        el.parentElement.style.display = el.classList.contains(platform) ? '' : 'none'
      }
    })

  // find all platform-specific *inline* elements and hide or show as appropriate
  // example: <span class="platform-mac">inline content</span>
  const platformEls = Array.from(
    document.querySelectorAll<HTMLElement>(
      platforms.map((platform) => `.platform-${platform.value}`).join(', '),
    ),
  )
  platformEls.forEach((el) => {
    el.style.display = el.classList.contains(`platform-${platform}`) ? '' : 'none'
  })
}

export const PlatformPicker = () => {
  const { defaultPlatform, detectedPlatforms } = useArticleContext()

  const [defaultUA, setDefaultUA] = useState('')
  useEffect(() => {
    let userAgent = parseUserAgent().os
    if (userAgent === 'ios') {
      userAgent = 'mac'
    }
    setDefaultUA(userAgent)
  }, [])

  // Defensively, just in case some article happens to have an array
  // but for some reasons, it might be empty, let's not have a picker
  // at all.
  if (!detectedPlatforms.length) return null

  const options = platforms.filter((platform) => detectedPlatforms.includes(platform.value))

  return (
    <InArticlePicker
      defaultValue={defaultPlatform}
      fallbackValue={
        detectedPlatforms.includes(defaultUA)
          ? defaultUA
          : detectedPlatforms[detectedPlatforms.length - 1]
      }
      cookieKey="osPreferred"
      queryStringKey={platformQueryKey}
      onValue={showPlatformSpecificContent}
      preferenceName="os"
      ariaLabel="Platform"
      options={options}
    />
  )
}
