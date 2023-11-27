import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { ComponentProps } from 'react'

import { DEFAULT_VERSION, useVersion } from 'src/versions/components/useVersion'

const { NODE_ENV } = process.env

type Props = {
  locale?: string
  disableClientTransition?: boolean
  makeAbsolute?: boolean
} & ComponentProps<'a'>
export function Link(props: Props) {
  const {
    href,
    locale,
    disableClientTransition = false,
    makeAbsolute = false,
    ...restProps
  } = props
  const router = useRouter()
  const { currentVersion } = useVersion()

  if (!href && NODE_ENV !== 'production') {
    console.warn('Missing href on Link')
  }

  let url = href || ''
  const isExternal = url.startsWith('http') || url.startsWith('//')
  if (makeAbsolute && !isExternal) {
    url = `/${locale || router.locale}`
    if (currentVersion !== DEFAULT_VERSION) {
      url += `/${currentVersion}`
    }
    url += href
  } else if (locale && !isExternal) {
    url = `/${locale}${href}`
  }

  if (disableClientTransition) {
    return (
      /* eslint-disable-next-line jsx-a11y/anchor-has-content */
      <a href={url} rel={isExternal ? 'noopener' : ''} {...restProps} />
    )
  }

  return (
    <NextLink href={url} locale={locale || false} passHref legacyBehavior>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a rel={isExternal ? 'noopener' : ''} {...restProps} />
    </NextLink>
  )
}
