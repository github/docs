import type { MouseEvent } from 'react'
import { useRouter } from 'next/router'
import cx from 'classnames'
import { Breadcrumbs as BrandBreadcrumbs } from '@primer/react-brand'

import { useMainContext } from '../context/MainContext'
import { DEFAULT_VERSION, useVersion } from '@/versions/components/useVersion'
import { useTranslation } from '@/languages/components/useTranslation'

type Props = {
  inHeader?: boolean
  // Placement variant. Defaults derived from `inHeader` for back-compat:
  //  - 'in-article' (default): sits above the article; hides the last (current) crumb.
  //  - 'header': the mobile subnav row; shows all crumbs.
  //  - 'bar': the Docs 2026 secondary bar; shows all crumbs and a leading Home crumb.
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

  const placement = variant ?? (inHeader ? 'header' : 'in-article')
  // Only the in-article placement hides the current (last) crumb; the header and
  // secondary-bar placements show the full trail.
  const hideLastCrumb = placement === 'in-article'
  // The secondary bar leads with a Home crumb (replacing the old "← Home" rail link).
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
    <BrandBreadcrumbs data-testid={testId} aria-label="Breadcrumb" data-container="breadcrumbs">
      {showHomeCrumb && (
        <BrandBreadcrumbs.Item
          data-testid="breadcrumb-home"
          href={homeHref}
          title={t('go_home')}
          onClick={(event) => handleClick(event, homeHref)}
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
          return (
            <BrandBreadcrumbs.Item
              data-testid="breadcrumb-link"
              key={title}
              href={breadcrumb.href}
              title={title}
              onClick={(event) => handleClick(event, breadcrumb.href!)}
              className={cx(
                // Show the last breadcrumb if it's in the header/bar, but not if it's in the article.
                // If there's only 1 breadcrumb, show it.
                hideLastCrumb && i === arr.length - 1 && arr.length !== 1 && 'd-none',
              )}
            >
              {breadcrumb.title}
            </BrandBreadcrumbs.Item>
          )
        })}
    </BrandBreadcrumbs>
  )
}
