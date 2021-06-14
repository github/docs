import NextLink from 'next/link'
import { ComponentProps } from 'react'
import { useMainContext } from 'components/context/MainContext'

const { NODE_ENV } = process.env

const enableNextLinks = false

type Props = { locale?: string } & ComponentProps<'a'>
export function Link(props: Props) {
  const { airGap } = useMainContext()
  const { href, locale, ...restProps } = props

  if (!href && NODE_ENV !== 'production') {
    console.warn('Missing href on Link')
  }

  const isExternal = href?.startsWith('http') || href?.startsWith('//')

  // In airgap mode, add a tooltip to external links warning they may not work.
  if (airGap && isExternal) {
    if (restProps.className) {
      restProps.className += ' tooltipped'
    } else {
      restProps.className = 'tooltipped'
    }
    restProps['aria-label'] = 'This link may not work in this environment.'
  }

  if (enableNextLinks) {
    return (
      <NextLink href={href || ''} locale={locale}>
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a rel={isExternal ? 'noopener' : ''} {...restProps} />
      </NextLink>
    )
  }

  return (
    /* eslint-disable-next-line jsx-a11y/anchor-has-content */
    <a
      href={locale ? `/${locale}${href}` : href}
      rel={isExternal ? 'noopener' : ''}
      {...restProps}
    />
  )
}
