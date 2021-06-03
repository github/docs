import { useRouter } from 'next/router'
import Link from 'next/link'
import cx from 'classnames'

import type { TocItem } from '../context/ProductLandingContext'

export const TableOfContents = (props: { items?: Array<TocItem> }) => {
  const router = useRouter()

  return (
    <div>
      {(props.items || []).map((obj) => {
        if (!obj) {
          return null
        }
        const { fullPath: href, title, intro } = obj
        const isActive = router.pathname === href
        return (
          <div key={href} className={cx('mb-5', isActive && 'color-auto-gray-4')}>
            <Link href={href}>
              <a className="Bump-link--hover no-underline d-block py-1 border-bottom color-border-primary">
                <h4>
                  {title}
                  <span className="Bump-link-symbol">→</span>
                </h4>
              </a>
            </Link>
            {intro && <p className="f4 mt-3" dangerouslySetInnerHTML={{ __html: intro }} />}
          </div>
        )
      })}
    </div>
  )
}
