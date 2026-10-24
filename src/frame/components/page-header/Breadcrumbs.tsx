import { type MouseEvent, useCallback } from 'react'
import { useRouter } from 'next/router'
import cx from 'clsx'
import { Breadcrumbs as BrandBreadcrumbs } from '@primer/react-brand'

import { useMainContext } from '../context/MainContext'
import { DEFAULT_VERSION, useVersion } from '@/versions/components/useVersion'
import { useTranslation } from '@/languages/components/useTranslation'
import { usePrefetchOnInteraction } from '@/frame/components/lib/prefetch'

type Props = {
  inHeader?: boolean
  // Defaults preserve inHeader callers: in-article hides the current crumb, header
  // shows all crumbs, and bar shows all crumbs plus Home.
  variant?: 'in-article' | 'header' | 'bar'
}

export type BreadcrumbT = {
  title: string
  href?: string
}

export const Breadcrumbs = ({ inHeader, variant }: Props) => {
  const { breadcrumbs } = useMainContext()
  const router = useRouter()
  const { currentVersion } = useVersion()
  const { t } = useTranslation('header')
  const prefetchHref = usePrefetchOnInteraction()

  // BrandBreadcrumbs.Item renders a plain anchor, so warm hrefs Next.js will not prefetch.
  const prefetch = useCallback((href: string) => prefetchHref(router, href), [router, prefetchHref])

  const placement = variant ?? (inHeader ? 'header' : 'in-article')
  // In-article crumbs hide the current page, while header and bar show the full trail.
  const hideLastCrumb = placement === 'in-article'
  const showHomeCrumb = placement === 'bar'
  const testId =
    placement === 'bar'
      ? 'breadcrumbs-bar'
      : placement === 'header'
        ? 'breadcrumbs-header'
        : 'breadcrumbs-in-article'

  const homeHref = `/${router.locale}${
    currentVersion === DEFAULT_VERSION ? '' : `/${currentVersion}`
  }`

  // Restore next/link navigation; modifier, middle, and external clicks keep browser behavior.
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
    // hrefs already include the locale prefix, so locale: false prevents double-prefixing.
    router.push(href, undefined, { locale: false })
  }

  return (
    <BrandBreadcrumbs data-testid={testId} aria-label="Breadcrumb" data-container="breadcrumbs">
      {showHomeCrumb && (
        <BrandBreadcrumbs.Item
          data-testid="breadcrumb-home"
          href={homeHref}
          title={t('go_home')}
          onClick={(event) => handleClick(event, homeHref)}
          onMouseEnter={() => prefetch(homeHref)}
          onFocus={() => prefetch(homeHref)}
        >
          {t('go_home')}
        </BrandBreadcrumbs.Item>
      )}
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
          // Brand selected renders the current page as aria-current static text, not a self-link.
          const isCurrent = i === arr.length - 1
          return (
            <BrandBreadcrumbs.Item
              data-testid={isCurrent ? 'breadcrumb-current' : 'breadcrumb-link'}
              key={title}
              href={breadcrumb.href}
              title={title}
              selected={isCurrent}
              // No navigation or prefetch for the page you're already on.
              {...(isCurrent
                ? {}
                : {
                    onClick: (event: MouseEvent<HTMLAnchorElement>) =>
                      handleClick(event, breadcrumb.href!),
                    onMouseEnter: () => prefetch(breadcrumb.href!),
                    onFocus: () => prefetch(breadcrumb.href!),
                  })}
              className={cx(
                // Header and bar show current crumb; in-article hides it unless it stands alone.
                hideLastCrumb && isCurrent && arr.length !== 1 && 'd-none',
              )}
            >
              {breadcrumb.title}
            </BrandBreadcrumbs.Item>
          )
        })}
    </BrandBreadcrumbs>
  )
}
