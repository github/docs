import cx from 'classnames'
import { useRouter } from 'next/router'
import { useMainContext } from './context/MainContext'
import { Link } from 'components/Link'

export type BreadcrumbT = {
  title: string
  documentType?: string
  href?: string
}

type Props = {}
export const Breadcrumbs = (props: Props) => {
  const router = useRouter()
  const pathWithLocale = `/${router.locale}${router.asPath.split('?')[0]}` // remove query string
  const { breadcrumbs } = useMainContext()

  return (
    <nav className="breadcrumbs f5" aria-label="Breadcrumb">
      {Object.values(breadcrumbs).map((breadcrumb) => {
        if (!breadcrumb) {
          return null
        }

        const title = `${breadcrumb.documentType}: ${breadcrumb.title}`
        return !breadcrumb.href ? (
          <span key={title} title={title}>
            {breadcrumb.title}
          </span>
        ) : (
          <Link
            key={title}
            href={breadcrumb.href}
            title={title}
            className={cx(
              'd-inline-block',
              pathWithLocale === breadcrumb.href && 'color-text-tertiary'
            )}
          >
            {breadcrumb.title}
          </Link>
        )
      })}
    </nav>
  )
}
