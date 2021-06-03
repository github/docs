import { useRouter } from 'next/router'
import Link from 'next/link'
import cx from 'classnames'

import type { TocItem } from '../context/ProductLandingContext'

type Props = {
  items: Array<TocItem>
  variant?: 'compact' | 'expanded'
}
export const TableOfContents = (props: Props) => {
  const { items, variant = 'expanded' } = props
  const router = useRouter()

  return (
    <ul className={cx(variant === 'compact' ? 'list-style-inside pl-2' : 'list-style-none')}>
      {(items || []).map((item) => {
        if (!item) {
          return null
        }

        const { fullPath: href, title, intro } = item
        const isActive = router.pathname === href
        return variant === 'compact' ? (
          <li key={href} className="f4 my-1">
            <Link href={href}>{title}</Link>
          </li>
        ) : (
          <li key={href} className={cx('mb-5', isActive && 'color-auto-gray-4')}>
            <Link href={href}>
              <a className="Bump-link--hover no-underline d-block py-1 border-bottom color-border-primary">
                <h4>
                  {title}
                  <span className="Bump-link-symbol">→</span>
                </h4>
              </a>
            </Link>
            {intro && <p className="f4 mt-3" dangerouslySetInnerHTML={{ __html: intro }} />}
          </li>
        )
      })}
    </ul>
  )
}
