import { useEffect, useState } from 'react'

import { useArticleContext } from '@/frame/components/context/ArticleContext'
import { parseUserAgent } from '@/events/components/user-agent'
import { InArticlePicker } from './InArticlePicker'
import { useSelection } from './SelectionContext'
import { OS_PREFERRED_COOKIE_NAME } from '@/frame/lib/constants'

const platformQueryKey = 'platform'
const platforms = [
  { value: 'mac', label: 'Mac' },
  { value: 'windows', label: 'Windows' },
  { value: 'linux', label: 'Linux' },
]

// Nota bene: platform === os

export const PlatformPicker = () => {
  const { defaultPlatform, detectedPlatforms } = useArticleContext()
  const { setPlatform } = useSelection()

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
      cookieKey={OS_PREFERRED_COOKIE_NAME}
      queryStringKey={platformQueryKey}
      onValue={(value: string) => {
        // Visibility is driven by React state via ToggleableContent/MiniTocs
        // (#6619); the article body is React-owned on both the hast and string
        // paths, so no imperative DOM mutation is needed.
        setPlatform(value)
      }}
      preferenceName="os"
      ariaLabel="Platform"
      options={options}
    />
  )
}
