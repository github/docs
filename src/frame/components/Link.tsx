import NextLink from 'next/link'
import { ComponentProps } from 'react'

const { NODE_ENV } = process.env

type Props = { locale?: string; disableClientTransition?: boolean } & ComponentProps<'a'>
export function Link(props: Props) {
  const { href, locale, disableClientTransition = false, ...restProps } = props

  if (!href && NODE_ENV !== 'production') {
    console.warn('Missing href on Link')
  }

  const isExternal = href?.startsWith('http') || href?.startsWith('//')

  if (disableClientTransition) {
    return (
      /* eslint-disable-next-line jsx-a11y/anchor-has-content */
      <a
        href={locale ? `/${locale}${href}` : href}
        rel={isExternal ? 'noopener' : ''}
        {...restProps}
      />
    )
  }

  return (
    <NextLink
      href={locale ? `/${locale}${href}` : href || ''}
      locale={locale || false}
      passHref
      legacyBehavior
    >
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a rel={isExternal ? 'noopener' : ''} {...restProps} />
    </NextLink>
  )
}
