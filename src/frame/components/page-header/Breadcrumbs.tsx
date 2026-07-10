import type { MouseEvent } from 'react'
import { useRouter } from 'next/router'
import cx from 'classnames'
import { Breadcrumbs as BrandBreadcrumbs } from '@primer/react-brand'

import { useMainContext } from '../context/MainContext'

type Props = {
  inHeader?: boolean
}

export type BreadcrumbT = {
  title: string
  href?: string
}

export const Breadcrumbs = ({ inHeader }: Props) => {
  const { breadcrumbs } = useMainContext()
  const router = useRouter()

  // BrandBreadcrumbs.Item renders a plain <a>, so intercept clicks to restore
  // next/link-style client-side navigation. Modifier/middle clicks fall through
  // to the browser so open-in-new-tab still works, and the <a href> keeps the
  // links crawlable for SSR.
  const handleClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      !href.startsWith('/')
    ) {
      return
    }
    event.preventDefault()
    // hrefs already include the locale prefix (e.g. /en/...), so disable
    // Next.js locale handling to avoid double-prefixing.
    router.push(href, undefined, { locale: false })
  }

  return (
    <BrandBreadcrumbs
      data-testid={inHeader ? 'breadcrumbs-header' : 'breadcrumbs-in-article'}
      aria-label="Breadcrumb"
      data-container="breadcrumbs"
    >
      {Object.values(breadcrumbs)
        .filter(Boolean)
        .map((breadcrumb, i, arr) => {
          const title = `${breadcrumb.title}`
          if (!breadcrumb.href) {
            return (
              <li key={title}>
                <span data-testid="breadcrumb-title">{breadcrumb.title}</span>
              </li>
            )
          }
          return (
            <BrandBreadcrumbs.Item
              data-testid="breadcrumb-link"
              key={title}
              href={breadcrumb.href}
              title={title}
              onClick={(event) => handleClick(event, breadcrumb.href!)}
              className={cx(
                // Show the last breadcrumb if it's in the header, but not if it's in the article.
                // If there's only 1 breadcrumb, show it.
                !inHeader && i === arr.length - 1 && arr.length !== 1 && 'd-none',
              )}
            >
              {breadcrumb.title}
            </BrandBreadcrumbs.Item>
          )
        })}
    </BrandBreadcrumbs>
  )
}
