import NextLink from 'next/link'
import { ComponentProps } from 'react'

const { NODE_ENV } = process.env

const enableNextLinks = false

type Props = { locale?: string } & ComponentProps<'a'>
export function Link(props: Props) {
  const { href, locale, ...restProps } = props

  if (!href && NODE_ENV !== 'production') {
    console.warn('Missing href on Link')
  }

  if (enableNextLinks) {
    return (
      <NextLink href={href || ''} locale={locale}>
        <a {...restProps} />
      </NextLink>
    )
  }

  return <a href={locale ? `/${locale}${href}` : href} {...restProps} />
}
